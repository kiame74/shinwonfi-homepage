import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // 기존 데이터 삭제 (개발용)
    await prisma.user.deleteMany()
    await prisma.notice.deleteMany()
    await prisma.inquiry.deleteMany()

    // 1. 관리자 계정 생성
    const hashedPassword = await bcrypt.hash('admin1234!', 10)
    const admin = await prisma.user.create({
        data: {
            username: 'admin',
            password: hashedPassword,
            name: '최고관리자',
            role: 'admin',
        }
    })
    console.log('✅ Created admin user:', admin.username)

    // 2. 공지사항 시드 데이터
    const notices = await prisma.notice.createMany({
        data: [
            {
                title: "(주)신원에프아이, 농심 혁신파트너십 우수 표창",
                content: "신원에프아이가 농심으로부터 혁신파트너십 우수 표창을 받았습니다.",
                writer: "관리자",
                views: 1024,
                isFixed: true,
            },
            {
                title: "'사 먹는 집밥' 5조원 시장… 삼시 세끼 간편식 시대",
                content: "가정간편식(HMR) 시장이 급성장하고 있습니다.",
                writer: "관리자",
                views: 856,
                isFixed: true,
            },
            {
                title: "\"엄마, 저녁은 뭐 시켜먹어요?\" 한국인 35%가 이렇게 산다",
                content: "한국인의 라이프스타일 변화와 식문화 트렌드에 대한 분석입니다.",
                writer: "관리자",
                views: 543,
                isFixed: false,
            },
            {
                title: "'구두약 초콜릿' 등 생활용품·학용품 본뜬 식품 표시·광고 금지",
                content: "식품 안전 관련 새로운 규제가 시행됩니다.",
                writer: "관리자",
                views: 432,
                isFixed: false,
            },
            {
                title: "밥상 습격한 '애그플레이션' 아직 우유·과자·커피 '도미노 인상' 남았다",
                content: "식품 가격 인상 동향에 대한 분석입니다.",
                writer: "관리자",
                views: 321,
                isFixed: false,
            },
            {
                title: "\"밖에서 먹기 겁나요\" 하반기도 집밥·홈술이 대세",
                content: "코로나19 이후 변화한 소비 패턴에 대한 분석입니다.",
                writer: "관리자",
                views: 298,
                isFixed: false,
            },
            {
                title: "\"비대면이 대세\"...식품·외식업계, 무인화 서비스 도입 박차",
                content: "식품 업계의 디지털 전환 동향입니다.",
                writer: "관리자",
                views: 256,
                isFixed: false,
            },
            {
                title: "해수부, 해외 전자상거래 시장에 한국수산식품관 개설",
                content: "한국 수산식품의 해외 진출이 확대되고 있습니다.",
                writer: "관리자",
                views: 234,
                isFixed: false,
            },
            {
                title: "B2B 시장에 식품업계 출현, 브랜드 만들고 상품 출시",
                content: "B2B 식품 시장의 성장과 트렌드 분석입니다.",
                writer: "관리자",
                views: 210,
                isFixed: false,
            },
            {
                title: "농심, 라면 포장 간소화…친환경 물류·유통 정책 확대",
                content: "친환경 경영과 ESG 경영에 대한 내용입니다.",
                writer: "관리자",
                views: 189,
                isFixed: false,
            },
        ],
    })

    console.log(`✅ Created ${notices.count} notices`)
    console.log('🎉 Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
