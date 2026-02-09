import { z } from 'zod'

// 문의하기 입력 검증 스키마
export const inquirySchema = z.object({
    category: z.string().min(1, '관심 분야를 선택해주세요'),
    name: z.string().min(2, '이름은 최소 2자 이상이어야 합니다'),
    phone: z.string().regex(
        /^01[0-9]-\d{3,4}-\d{4}$/,
        '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)'
    ),
    email: z.string().email('올바른 이메일 형식이 아닙니다'),
    distributor: z.string().optional(),
    consultType: z.string().optional(),
    message: z.string().min(10, '문의 내용은 최소 10자 이상이어야 합니다'),
})

export type InquiryInput = z.infer<typeof inquirySchema>
