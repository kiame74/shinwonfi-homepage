import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/notices/[id]
 * 공지사항 상세 조회 API
 * 조회 시 views(조회수) 증가
 */
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        // 공지사항 조회 및 조회수 증가 (트랜잭션)
        const notice = await prisma.notice.update({
            where: { id },
            data: {
                views: {
                    increment: 1,
                },
            },
        })

        // 공지사항이 존재하지 않는 경우
        if (!notice) {
            return NextResponse.json({
                success: false,
                message: '공지사항을 찾을 수 없습니다.',
            }, { status: 404 })
        }

        // 게시되지 않은 공지사항은 조회 불가
        if (!notice.published) {
            return NextResponse.json({
                success: false,
                message: '공지사항을 찾을 수 없습니다.',
            }, { status: 404 })
        }

        // 성공 응답
        return NextResponse.json({
            success: true,
            data: notice,
        })

    } catch (error) {
        console.error('Notice Detail API Error:', error)

        // Prisma에서 레코드를 찾지 못한 경우
        if (error instanceof Error && error.message.includes('No Notice found')) {
            return NextResponse.json({
                success: false,
                message: '공지사항을 찾을 수 없습니다.',
            }, { status: 404 })
        }

        return NextResponse.json({
            success: false,
            message: '서버 오류가 발생했습니다.',
        }, { status: 500 })
    }
}
