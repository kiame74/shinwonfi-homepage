import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "인증현황",
    description: "HACCP, ISO 등 신원에프아이가 획득한 다양한 품질 및 안전 인증 현황을 확인하실 수 있습니다.",
    openGraph: {
        title: "신원에프아이 - 인증현황",
        description: "HACCP, ISO 등 신원에프아이가 획득한 다양한 품질 및 안전 인증 현황을 확인하실 수 있습니다.",
        url: '/company/certify',
    },
};


export default function CertifyPage() {
    const certifications = [
        {
            title: "HACCP 식품안전관리인증",
            desc: "식품의 원재료부터 제조, 가공, 보존, 유통, 조리단계를 거쳐 최종 소비자가 섭취하기 전까지의 각 단계에서 발생할 우려가 있는 위해요소를 규명하고, 이를 중점적으로 관리하기 위한 중요관리점을 결정하여 자율적이며 체계적이고 효율적인 관리로 식품의 안전성을 확보하기 위한 과학적인 위생관리체계입니다.",
            items: [
                "가금류 식육추출 가공품 (2015.02.01)",
                "축산물 조림 (2012.07.18)",
                "알가공품 (염지란) (2017.08.18)",
                "과채가공품 (2021.07.07)",
                "기타 즉석조리식품"
            ]
        },
        {
            title: "기타 품질 및 경영 인증",
            desc: "글로벌 표준에 부합하는 품질 경영 시스템과 혁신적인 기업 운영을 위한 다양한 공식 인증을 보유하고 있습니다.",
            items: [
                "FSSC 22000 (국제 식품안전 시스템)",
                "ISO 9001 (품질경영시스템)",
                "INNO-BIZ (기술혁신형 중소기업)",
                "MAIN-BIZ (경영혁신형 중소기업)",
                "벤처기업 인증",
                "기업부설연구소 인정서"
            ]
        }
    ];

    return (
        <section id="certify" className="py-24 bg-white border-t border-gray-100">
            <ScrollReveal>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Certifications</h3>
                        <h2 className="text-3xl md:text-4xl font-black text-secondary">인증현황</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto break-keep">
                            신원에프아이는 엄격한 품질 관리와 위생 기준을 준수하여 고객에게 가장 안전한 제품을 제공합니다.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                                <div className="w-full md:w-1/3">
                                    <div className="bg-gray-100 rounded-2xl md:rounded-3xl aspect-[3/4] flex items-center justify-center relative overflow-hidden border border-gray-200 shadow-inner group">
                                        {/* Placeholder Image Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 space-y-2">
                                            <svg className="w-12 h-12 md:w-16 md:h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-bold text-xs md:text-sm">Certification Image</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 space-y-6 md:space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-secondary break-keep">{cert.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-base md:text-lg break-keep">{cert.desc}</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100">
                                        <h4 className="font-bold text-primary mb-4 md:mb-6 flex items-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            <span>보유 현황 상세</span>
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                            {cert.items.map((item, i) => (
                                                <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium text-sm md:text-base">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
