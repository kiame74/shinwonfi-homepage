"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function InquiryPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setFieldErrors({});

        try {
            // 폼 데이터 수집
            const formData = new FormData(e.currentTarget);
            const data = {
                category: formData.get('category') as string,
                name: formData.get('name') as string,
                phone: formData.get('phone') as string,
                email: formData.get('email') as string,
                distributor: formData.get('distributor') as string || undefined,
                consultType: formData.get('consultType') as string || undefined,
                message: formData.get('message') as string,
                privacy: formData.get('privacy') === 'on' ? true : false,
            };

            // API 호출
            const response = await fetch('/api/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.errors) {
                    const newFieldErrors: Record<string, string> = {};
                    result.errors.forEach((err: { field: string; message: string }) => {
                        newFieldErrors[err.field] = err.message;
                    });
                    setFieldErrors(newFieldErrors);
                    throw new Error('입력 정보를 다시 확인해 주세요.');
                }
                throw new Error(result.message || '문의 접수에 실패했습니다.');
            }

            // 성공 처리
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                if (e.currentTarget) e.currentTarget.reset(); // 폼 리셋
            }, 5000);

        } catch (err) {
            setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    // 에러 메시지 컴포넌트
    const ErrorMsg = ({ name }: { name: string }) => (
        <AnimatePresence>
            {fieldErrors[name] && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[11px] md:text-xs text-red-500 font-bold mt-1.5 ml-1"
                >
                    {fieldErrors[name]}
                </motion.p>
            )}
        </AnimatePresence>
    );

    return (
        <div className="flex flex-col">
            <section className="bg-secondary py-12 md:py-20 text-center text-white">
                <ScrollReveal>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-400 text-sm md:text-base break-keep px-4">신원에프아이는 언제나 고객님의 목소리에 귀를 기울입니다.</p>
                </ScrollReveal>
            </section>

            <section className="py-12 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ScrollReveal>
                        <div className="bg-white p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="space-y-10"
                                    >
                                        <div className="border-b border-gray-100 pb-6 md:pb-8">
                                            <h3 className="text-2xl md:text-3xl font-black text-secondary mb-2">상담 문의</h3>
                                            <p className="text-gray-500 text-sm md:text-base break-keep">궁금하신 사항을 남겨주시면 친절하게 안내해 드리겠습니다.</p>
                                        </div>

                                        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                                            {/* Interest Category */}
                                            <div className="space-y-4">
                                                <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">관심 분야 <span className="text-primary">*</span></label>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                                                    {["제품문의", "식품연구", "위탁/병원급식", "OEM", "체인본부", "식당본부", "기타"].map((item) => (
                                                        <label key={item} className="cursor-pointer group">
                                                            <input type="radio" name="category" value={item} className="peer sr-only" />
                                                            <div className={`px-2 md:px-4 py-3 rounded-xl border text-xs md:text-sm font-medium text-center transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary group-hover:border-primary/50 ${fieldErrors.category ? 'bg-red-50 border-red-200 text-red-500' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
                                                                {item}
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                                <ErrorMsg name="category" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">이름 / 업체명 <span className="text-primary">*</span></label>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        className={`w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base placeholder:text-gray-400 ${fieldErrors.name ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}
                                                        placeholder="성함 또는 업체명을 입력하세요"
                                                    />
                                                    <ErrorMsg name="name" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">연락처 <span className="text-primary">*</span></label>
                                                    <input
                                                        name="phone"
                                                        type="tel"
                                                        className={`w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base placeholder:text-gray-400 ${fieldErrors.phone ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}
                                                        placeholder="010-0000-0000"
                                                    />
                                                    <ErrorMsg name="phone" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">이메일 <span className="text-primary">*</span></label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className={`w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base placeholder:text-gray-400 ${fieldErrors.email ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}
                                                    placeholder="example@email.com"
                                                />
                                                <ErrorMsg name="email" />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">현재 거래중인 식자재 유통 업체</label>
                                                    <input name="distributor" type="text" className="w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base placeholder:text-gray-400" placeholder="업체명 (없을 경우 생략 가능)" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">원하시는 상담 방식</label>
                                                    <select name="consultType" className="w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base cursor-pointer">
                                                        <option value="">선택해 주세요</option>
                                                        <option value="call">전화 상담</option>
                                                        <option value="email">이메일 답변</option>
                                                        <option value="visit">방문 상담</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs md:text-sm font-bold text-gray-800 ml-1">문의 내용 <span className="text-primary">*</span></label>
                                                <textarea
                                                    name="message"
                                                    className={`w-full px-4 md:px-5 py-3 md:py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all h-32 md:h-40 resize-none text-sm md:text-base placeholder:text-gray-400 leading-relaxed ${fieldErrors.message ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}
                                                    placeholder="문의하실 내용을 상세히 적어주시면 더욱 빠르고 정확한 상담이 가능합니다."
                                                ></textarea>
                                                <ErrorMsg name="message" />
                                            </div>

                                            <div className="pt-4 border-t border-gray-100">
                                                <div className="flex items-start space-x-3">
                                                    <input type="checkbox" id="privacy" name="privacy" className={`mt-1 w-5 h-5 rounded border-gray-300 focus:ring-primary ${fieldErrors.privacy ? 'ring-2 ring-red-500/20 border-red-500' : 'text-primary'}`} />
                                                    <label htmlFor="privacy" className="text-sm text-gray-500 cursor-pointer select-none">
                                                        <span className={`font-bold underline ${fieldErrors.privacy ? 'text-red-500' : 'text-gray-700'}`}>개인정보 수집 및 이용</span>에 동의합니다.
                                                        <p className="text-xs text-gray-400 mt-1">수집된 정보는 문의 처리 목적으로만 사용되며, 관련 법령에 따라 안전하게 보관됩니다.</p>
                                                    </label>
                                                </div>
                                                <ErrorMsg name="privacy" />
                                            </div>

                                            {error && !Object.keys(fieldErrors).length && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium"
                                                >
                                                    {error}
                                                </motion.div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full py-4 md:py-5 bg-secondary text-white rounded-xl font-bold text-base md:text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            >
                                                <span>{isLoading ? '전송 중...' : '문의하기'}</span>
                                                {!isLoading && (
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-20 flex flex-col items-center justify-center text-center space-y-8"
                                    >
                                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-3xl font-black text-secondary">문의가 접수되었습니다.</h3>
                                            <p className="text-gray-500 text-lg">
                                                담당자가 확인 후 신속하게 답변 드리겠습니다.
                                            </p>
                                        </div>
                                        <button onClick={() => setIsSubmitted(false)} className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                            추가 문의하기
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
