import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { inquirySchema } from '@/lib/validations/inquiry'
import { ZodError } from 'zod'

/**
 * POST /api/inquiry
 * 문의하기 API - 사용자 문의 데이터를 데이터베이스에 저장
 */
export async function POST(request: NextRequest) {
    try {
        // 1. 요청 본문 파싱
        const body = await request.json()

        // 2. 입력 검증
        const validatedData = inquirySchema.parse(body)

        // 3. IP 주소 추출 (스팸 방지용)
        const ipAddress = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown'

        // 4. 데이터베이스에 저장
        const inquiry = await prisma.inquiry.create({
            data: {
                category: validatedData.category,
                name: validatedData.name,
                phone: validatedData.phone,
                email: validatedData.email,
                distributor: validatedData.distributor || null,
                consultType: validatedData.consultType || null,
                message: validatedData.message,
                ipAddress: ipAddress,
                status: 'pending', // 초기 상태: 대기중
            },
        })

        // 5. 성공 응답
        return NextResponse.json({
            success: true,
            message: '문의가 성공적으로 접수되었습니다.',
            data: {
                id: inquiry.id,
                createdAt: inquiry.createdAt,
            },
        }, { status: 201 })

    } catch (error) {
        // Zod 검증 오류
        if (error instanceof ZodError) {
            return NextResponse.json({
                success: false,
                message: '입력 데이터가 올바르지 않습니다.',
                errors: error.issues.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                })),
            }, { status: 400 })
        }

        // 기타 서버 오류
        console.error('Inquiry API Error:', error)
        return NextResponse.json({
            success: false,
            message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        }, { status: 500 })
    }
}
