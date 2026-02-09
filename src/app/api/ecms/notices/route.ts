import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/admin/notices
 * 관리자용 공지사항 목록 조회 API
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get("search") || "";

        const where: any = {};
        if (search) {
            where.title = { contains: search };
        }

        const notices = await prisma.notice.findMany({
            where,
            orderBy: [
                { isFixed: "desc" },
                { createdAt: "desc" },
            ],
        });

        return NextResponse.json({
            success: true,
            data: notices,
        });
    } catch (error) {
        console.error("Admin Notices GET Error:", error);
        return NextResponse.json(
            { success: false, message: "서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}

/**
 * POST /api/admin/notices
 * 새 공지사항 작성
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, content, isFixed, published } = body;

        if (!title || !content) {
            return NextResponse.json(
                { success: false, message: "제목과 내용을 입력해주세요." },
                { status: 400 }
            );
        }

        const notice = await prisma.notice.create({
            data: {
                title,
                content,
                isFixed: !!isFixed,
                published: published !== false,
                writer: "관리자", // 나중에 세션에서 사용자 이름 가져오기
            },
        });

        return NextResponse.json({
            success: true,
            data: notice,
        });
    } catch (error) {
        console.error("Admin Notice POST Error:", error);
        return NextResponse.json(
            { success: false, message: "공지사항 저장 중 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
