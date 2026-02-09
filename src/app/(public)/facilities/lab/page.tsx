"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function LabPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <ScrollReveal>
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase">R&D Center</span>
                    <h2 className="text-3xl md:text-4xl font-black text-secondary">기업부설연구소</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base break-keep">
                        식품연구소에서는 전문연구원들이 최고의 제품을 위한 다양한 연구를 진행합니다. <br className="hidden md:block" />
                        빠르게 변화하는 식품산업에 발맞추고, 고객이 원하는 제품을 한 발 앞서 제안하며, <br className="hidden md:block" />
                        새로운 식품문화 창조로 고객에게 사랑 받는 일류식품회사의 비전을 실천합니다.
                    </p>
                </div>

                {/* Key Research Areas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
                    {[
                        {
                            title: "소스 개발",
                            desc: "고객사의 니즈에 맞춘 맞춤형 소스 및 복합조미식품 개발",
                            icon: "🧪"
                        },
                        {
                            title: "육가공 연구",
                            desc: "원료육의 특성을 살린 전처리 및 가공 기술 연구",
                            icon: "🥩"
                        },
                        {
                            title: "HMR 개발",
                            desc: "가정간편식(HMR)의 맛과 품질을 높이는 레시피 연구",
                            icon: "🍲"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                            <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-0">
                                <div className="text-3xl md:text-4xl md:mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-lg md:text-xl font-bold text-secondary mb-3">{item.title}</h3>
                            </div>
                            <p className="text-gray-500 leading-relaxed text-sm break-keep">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Lab Operation */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-12 bg-secondary text-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                    <div className="w-full md:w-1/2 space-y-6 relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black">연구소 운영 현황</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <span className="text-primary mt-1 flex-shrink-0">✔</span>
                                <div className="text-sm md:text-base">
                                    <strong className="text-white block mb-0.5">전문 인력 구성</strong>
                                    R&D 및 품질관리(Q.C) 전문 연구원 상주
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-primary mt-1 flex-shrink-0">✔</span>
                                <div className="text-sm md:text-base">
                                    <strong className="text-white block mb-0.5">정밀 분석 시스템</strong>
                                    미생물 분석 및 이화학 분석 시스템 가동
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="text-primary mt-1 flex-shrink-0">✔</span>
                                <div className="text-sm md:text-base">
                                    <strong className="text-white block mb-0.5">신속한 개발 프로세스</strong>
                                    고객사 니즈 맞춤형 한 발 앞선 제품 제안
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                            <h4 className="text-lg md:text-xl font-bold mb-4 text-primary">Key Capabilities</h4>
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <div className="bg-black/20 p-3 md:p-4 rounded-xl text-center">
                                    <div className="text-xl md:text-2xl mb-1 md:mb-2">🧬</div>
                                    <div className="text-[10px] md:text-sm font-medium">미생물 실험</div>
                                </div>
                                <div className="bg-black/20 p-3 md:p-4 rounded-xl text-center">
                                    <div className="text-xl md:text-2xl mb-1 md:mb-2">⚗️</div>
                                    <div className="text-[10px] md:text-sm font-medium">이화학 분석</div>
                                </div>
                                <div className="bg-black/20 p-3 md:p-4 rounded-xl text-center">
                                    <div className="text-xl md:text-2xl mb-1 md:mb-2">📝</div>
                                    <div className="text-[10px] md:text-sm font-medium">레시피 DB</div>
                                </div>
                                <div className="bg-black/20 p-3 md:p-4 rounded-xl text-center">
                                    <div className="text-xl md:text-2xl mb-1 md:mb-2">🔬</div>
                                    <div className="text-[10px] md:text-sm font-medium">관능 평가</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-secondary">원료 이해와 응용</h3>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base break-keep">
                            다양한 원료 소재를 직접 생산, 개발, 구매하여 타사와 차별화된 HMR 제품을 개발합니다.
                            필요한 원료 소재(복합조미분말, 사골추출액, 각종 엑기스류 등)를 제품 특성에 맞게 자체 개발하여 적용합니다.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-secondary">HMR 노하우</h3>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base break-keep">
                            다년간 축적된 레토르트 제품 DATABASE를 기반으로, 현장 생산 접목 시 오차 범위를 최소화하며
                            가정식의 맛과 품질을 완벽하게 재현합니다.
                        </p>
                    </div>
                </div>

            </ScrollReveal>
        </div>
    );
}
