import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { login } from "@/lib/auth";

/**
 * POST /api/auth/login
 * 관리자 로그인 API
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { success: false, message: "아이디와 비밀번호를 입력해주세요." },
                { status: 400 }
            );
        }

        // 1. 사용자 조회
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "아이디 또는 비밀번호가 올바르지 않습니다." },
                { status: 401 }
            );
        }

        // 2. 비밀번호 확인
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "아이디 또는 비밀번호가 올바르지 않습니다." },
                { status: 401 }
            );
        }

        // 3. 세션 생성 및 쿠키 설정
        await login({
            id: user.id,
            username: user.username,
            name: user.name,
        });

        return NextResponse.json({
            success: true,
            message: "로그인에 성공했습니다.",
            user: {
                username: user.username,
                name: user.name,
            },
        });

    } catch (error) {
        console.error("Login API Error:", error);
        return NextResponse.json(
            { success: false, message: "서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
