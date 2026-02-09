"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function HygienePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <ScrollReveal>
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase">Hygiene Management</span>
                    <h2 className="text-3xl md:text-4xl font-black text-secondary">위생관리 시스템</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base break-keep">
                        신원에프아이는 원료 입고부터 제조, 가공, 보존, 유통 단계를 거쳐<br className="hidden md:block" />
                        소비자가 섭취하기 전까지의 모든 과정에서 위해 요소를 철저히 관리합니다.
                    </p>
                </div>

                {/* HACCP Content */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-blue-100 relative overflow-hidden mb-12 md:mb-16">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-12">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 md:p-6 border-4 border-blue-50 flex-shrink-0">
                            <div className="text-center">
                                <span className="text-2xl md:text-4xl font-black text-blue-600 block mb-0.5 md:mb-1">HACCP</span>
                                <span className="text-[10px] md:text-xs text-blue-400 font-bold tracking-wider uppercase">Certified</span>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-keep">식품안전관리인증기준 (HACCP)</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base break-keep">
                                당사는 즉석조리식품, 축산물조림, 식육추출가공품 등 주요 생산 품목에 대해
                                식품의약품안전처로부터 HACCP 인증을 완료하여 운영하고 있습니다.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
                                <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                                    <strong className="text-blue-600 block mb-1 md:mb-2 text-sm md:text-base">HA (위해요소분석)</strong>
                                    <p className="text-[10px] md:text-xs text-gray-500">생물학적, 화학적, 물리적 위해요소를 사전에 분석</p>
                                </div>
                                <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-blue-50">
                                    <strong className="text-blue-600 block mb-1 md:mb-2 text-sm md:text-base">CCP (중요관리점)</strong>
                                    <p className="text-[10px] md:text-xs text-gray-500">위해요소를 제거하거나 허용 수준으로 감소시키는 중점 관리 단계</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hygiene Process Steps */}
                <div className="space-y-10 md:space-y-12">
                    <h3 className="text-xl md:text-2xl font-bold text-secondary text-center">위생 관리 프로세스</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            { step: "01", title: "입실 전 관리", desc: "복장 점검 및 이물 제거" },
                            { step: "02", title: "Air Shower", desc: "미세 먼지 제거" },
                            { step: "03", title: "손 세척/소독", desc: "교차 오염 방지" },
                            { step: "04", title: "작업장 입장", desc: "청결 구역 유지" }
                        ].map((proc, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 shadow-md relative group overflow-hidden">
                                <span className="absolute -top-1 -right-1 text-4xl md:text-6xl font-black text-gray-100 group-hover:text-primary/10 transition-colors leading-none tracking-tighter">{proc.step}</span>
                                <h4 className="text-sm md:text-lg font-bold text-secondary mb-1 md:mb-2 relative z-10">{proc.title}</h4>
                                <p className="text-[10px] md:text-sm text-gray-400 relative z-10 break-keep">{proc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Environmental Control */}
                <div className="mt-16 md:mt-20">
                    <div className="bg-secondary text-white rounded-2xl md:rounded-[2rem] p-8 md:p-14">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-2">
                            <h3 className="text-xl md:text-2xl font-bold">작업장 환경 관리</h3>
                            <p className="text-gray-400 text-xs md:text-sm">철저한 모니터링으로 최적의 생산 환경을 유지합니다.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border-l-2 border-primary pl-5 md:pl-6">
                                <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2">온/습도 관리</h4>
                                <p className="text-xs md:text-sm text-gray-400 break-keep">제품 특성에 맞는 최적의 온습도를 상시 모니터링하여 품질 변질을 방지합니다.</p>
                            </div>
                            <div className="border-l-2 border-primary pl-5 md:pl-6">
                                <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2">조도 관리</h4>
                                <p className="text-xs md:text-sm text-gray-400 break-keep">작업장 내 적정 조도를 유지하여 이물 혼입을 방지하고 작업 안전을 확보합니다.</p>
                            </div>
                            <div className="border-l-2 border-primary pl-5 md:pl-6">
                                <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2">방충/방서</h4>
                                <p className="text-xs md:text-sm text-gray-400 break-keep">정기적인 방제 관리와 트랩 설치를 통해 외부 해충의 유입을 원천 차단합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </ScrollReveal>
        </div>
    );
}
