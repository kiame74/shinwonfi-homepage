import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/notices
 * 공지사항 목록 조회 API
 * 
 * 쿼리 파라미터:
 * - page: 페이지 번호 (기본값: 1)
 * - limit: 페이지당 항목 수 (기본값: 10)
 * - search: 검색어 (제목 검색)
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)

        // 페이지네이션 파라미터
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const search = searchParams.get('search') || ''

        // offset 계산
        const skip = (page - 1) * limit

        // 검색 조건 구성
        const where = search
            ? {
                title: {
                    contains: search,
                },
                published: true,
            }
            : {
                published: true,
            }

        // 총 개수 조회 (페이징용)
        const total = await prisma.notice.count({ where })

        // 공지사항 목록 조회
        const notices = await prisma.notice.findMany({
            where,
            orderBy: [
                { isFixed: 'desc' }, // 고정 공지 우선
                { createdAt: 'desc' }, // 최신순
            ],
            skip,
            take: limit,
            select: {
                id: true,
                title: true,
                writer: true,
                views: true,
                isFixed: true,
                createdAt: true,
            },
        })

        // 응답 데이터 구성
        return NextResponse.json({
            success: true,
            data: {
                notices,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit),
                },
            },
        })

    } catch (error) {
        console.error('Notices API Error:', error)
        return NextResponse.json({
            success: false,
            message: '서버 오류가 발생했습니다.',
        }, { status: 500 })
    }
}
