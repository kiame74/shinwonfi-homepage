"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function ProductionPage() {
    const sections = [
        {
            title: "축산물 추출 라인",
            desc: "대용량 추출 및 농축 설비를 통해 깊고 진한 맛의 베이스를 생산합니다.",
            image: "https://images.unsplash.com/photo-1620641933413-c3684e5b9b1b?q=80&w=2072&auto=format&fit=crop", // Industrial tank
            features: ["NC 농축기", "5t 사골추출탱크", "사골 호모게나이저"],
        },
        {
            title: "소스 라인",
            desc: "최적의 배합과 가열 공정으로 다양한 소스와 향미유를 제조합니다.",
            image: "https://images.unsplash.com/photo-1595855729738-87b64263e8c9?q=80&w=2070&auto=format&fit=crop", // Liquid processing
            features: ["향미유 스팀로스터", "소스교반기", "액상 충진기"],
        },
        {
            title: "장조림 라인",
            desc: "원물 전처리부터 조리, 포장까지 위생적인 자동화 공정을 갖추고 있습니다.",
            image: "https://images.unsplash.com/photo-1606850780554-b55eaac84a30?q=80&w=2070&auto=format&fit=crop", // Food packaging/meat
            features: ["스팀솥", "로터리 포장기", "금속검출기"],
        },
        {
            title: "포장/살균 라인",
            desc: "철저한 멸균 및 살균 시스템으로 제품의 안전성과 보존성을 보장합니다.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Sterilization/machinery
            features: ["2구 고압살균기", "4구 고압살균기", "제수기"],
        },
        {
            title: "건조 라인",
            desc: "진공 건조 및 분쇄 기술을 통해 고품질의 분말 제품을 생산합니다.",
            image: "https://images.unsplash.com/photo-1581093588402-48574169d300?q=80&w=2070&auto=format&fit=crop", // Powder/drying
            features: ["VD (진공건조기)", "분쇄기", "분말집진기"],
        },
    ];

    return (
        <div className="flex flex-col">
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 space-y-20 md:space-y-32">
                    {sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                            <ScrollReveal className="w-full lg:w-1/2">
                                <div className="relative aspect-video rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${section.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </ScrollReveal>
                            <ScrollReveal className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2 md:px-4">
                                <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                                    <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight break-keep">{section.title}</h2>
                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed break-keep">{section.desc}</p>
                                </div>
                                <ul className="space-y-3 md:space-y-4">
                                    {section.features.map((feature) => (
                                        <li key={feature} className="flex items-center space-x-3 md:space-x-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(44,174,105,0.5)] flex-shrink-0" />
                                            <span className="font-bold text-secondary text-sm md:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
