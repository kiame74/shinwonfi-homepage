import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/admin/inquiries
 * 관리자용 문의 목록 조회 API
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status") || "all";
        const search = searchParams.get("search") || "";

        // 검색 조건 구성
        const where: any = {};

        if (status !== "all") {
            where.status = status;
        }

        if (search) {
            where.OR = [
                { name: { contains: search } },
                { email: { contains: search } },
                { message: { contains: search } },
            ];
        }

        const inquiries = await prisma.inquiry.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({
            success: true,
            data: inquiries,
        });

    } catch (error) {
        console.error("Admin Inquiries GET Error:", error);
        return NextResponse.json(
            { success: false, message: "서버 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
