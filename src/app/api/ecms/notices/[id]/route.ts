import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/admin/notices/[id]
 * 공지사항 단일 조회 (수정용)
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const notice = await prisma.notice.findUnique({ where: { id } });

        if (!notice) {
            return NextResponse.json({ success: false, message: "not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: notice });
    } catch (error) {
        return NextResponse.json({ success: false, message: "error" }, { status: 500 });
    }
}

/**
 * PATCH /api/admin/notices/[id]
 * 공지사항 수정
 */
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();

        const updated = await prisma.notice.update({
            where: { id },
            data: body,
        });

        return NextResponse.json({ success: true, data: updated });
    } catch (error) {
        return NextResponse.json({ success: false, message: "update failed" }, { status: 500 });
    }
}

/**
 * DELETE /api/admin/notices/[id]
 * 공지사항 삭제
 */
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.notice.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, message: "delete failed" }, { status: 500 });
    }
}
