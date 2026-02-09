import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "기업연혁",
    description: "1996년 창립부터 현재까지, 신원에프아이가 걸어온 정직한 역사의 기록입니다.",
    openGraph: {
        title: "신원에프아이 - 기업연혁",
        description: "1996년 창립부터 현재까지, 신원에프아이가 걸어온 정직한 역사의 기록입니다.",
        url: '/company/history',
    },
};


export default function HistoryPage() {
    return (
        <section id="history" className="py-24 bg-white border-t border-gray-100">
            <ScrollReveal>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Our History</h3>
                        <h2 className="text-3xl md:text-4xl font-black text-secondary">연혁</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12 md:space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

                            {[
                                {
                                    year: "2019 - 현재",
                                    title: "글로벌 표준 및 도약기",
                                    items: [
                                        "2019.06 - FSSC22000 (식품안전시스템) 인증 획득",
                                        "HACCP 품질 관리 시스템 고도화",
                                        "신규 배합 기술을 활용한 프리미엄 라인업 확장"
                                    ]
                                },
                                {
                                    year: "2010 - 2018",
                                    title: "브랜드 성장 및 시장 확대기",
                                    items: [
                                        "2017.03 - 진주햄 '오마이포켓', 조인 '바로먹는 깐계란' 런칭",
                                        "2016.06 - 태경농산 우거지뼈 해장국 코스트코 납품 런칭",
                                        "2016.04 - 대상(청정원) 국탕류 5종 런칭",
                                        "2015.01 - 사조대림 국탕류 제품 런칭",
                                        "2014.01 - 자사 브랜드 '요리담' 3종(한우사골 등) 공식 런칭",
                                        "2012.10 - 진문옥 대표이사 취임"
                                    ]
                                },
                                {
                                    year: "2000 - 2009",
                                    title: "기초 인프라 및 기술 확립기",
                                    items: [
                                        "2004.07 - 경기도 선정 유망중소기업 지정",
                                        "2002.06 - ERP 시스템 도입 및 IBK 유망중소기업 인정",
                                        "2000.11 - 기업부설연구소 설립 및 R&D 역량 강화",
                                        "2000.10 - 상호 (주)신원에프아이 변경"
                                    ]
                                },
                                {
                                    year: "1993 - 1999",
                                    title: "창업 및 법인 전환기",
                                    items: [
                                        "1995.10 - 신원식품산업(주) 법인 전환",
                                        "1993.06 - (주)신원 식품산업 설립"
                                    ]
                                },
                            ].map((group, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                                    {/* Icon/Dot */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    </div>
                                    {/* Content Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
                                        <div className="flex flex-col space-y-1 md:space-y-2 mb-4">
                                            <time className="font-black text-primary text-xl md:text-2xl tracking-tighter">{group.year}</time>
                                            <h4 className="font-bold text-secondary text-base md:text-xl break-keep">{group.title}</h4>
                                        </div>
                                        <ul className="space-y-2 md:space-y-3">
                                            {group.items.map((item, i) => (
                                                <li key={i} className="flex items-start text-gray-500 text-xs md:text-sm leading-relaxed break-keep">
                                                    <span className="mr-2 mt-1.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
