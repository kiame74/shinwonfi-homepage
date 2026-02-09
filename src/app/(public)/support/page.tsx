"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="flex flex-col">
            {/* Sub-header */}
            <section className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">고객센터</h1>
                <p className="text-gray-400">무엇을 도와드릴까요? 신원에프아이는 고객님의 목소리에 귀를 기울입니다.</p>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <ScrollReveal>
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-black text-secondary">빠른 상담 안내</h2>
                                    <p className="text-gray-500 leading-relaxed text-lg font-medium">
                                        제품 문의, 대량 구매 상담, OEM 제작 요청 등 궁금하신 사항이 있으시면 언제든지 연락 주시기 바랍니다. 친절하고 신속하게 답변해 드리겠습니다.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: "대표 전화", value: "031-357-1234", icon: "PH" },
                                        { label: "팩스 번호", value: "031-357-5678", icon: "FX" },
                                        { label: "이메일", value: "sales@shinwonfi.com", icon: "EM" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center space-x-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all group">
                                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 transform group-hover:rotate-6 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{item.label}</p>
                                                <p className="text-2xl font-black text-secondary">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-gray-50 flex flex-col justify-center space-y-8">
                                <h3 className="text-3xl font-black text-secondary">온라인 문의하기</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    상세한 견적이나 제품 개발 상담이 필요하신가요? <br />
                                    온라인 문의 폼을 통해 내용을 남겨주시면 담당자가 신속히 연락드리겠습니다.
                                </p>
                                <Link href="/support/inquiry" className="inline-flex items-center justify-center w-full py-5 bg-secondary text-white rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl shadow-gray-200 space-x-3 group">
                                    <span>문의 작성하러 가기</span>
                                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>

                                <div className="bg-primary/5 p-8 rounded-3xl space-y-4">
                                    <h4 className="font-black text-primary flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary animate-ping rounded-full" />
                                        <span>운영 시간</span>
                                    </h4>
                                    <p className="text-secondary font-bold">평일 09:00 - 18:00 (점심 12:00-13:00)</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
