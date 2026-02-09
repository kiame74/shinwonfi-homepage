import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * PATCH /api/admin/inquiries/[id]
 * 문의 상태 변경 API
 */
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { status } = await request.json();

        if (!status) {
            return NextResponse.json(
                { success: false, message: "변경할 상태가 필요합니다." },
                { status: 400 }
            );
        }

        const updatedInquiry = await prisma.inquiry.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json({
            success: true,
            data: updatedInquiry,
        });

    } catch (error) {
        console.error("Admin Inquiry PATCH Error:", error);
        return NextResponse.json(
            { success: false, message: "상태 업데이트 중 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
