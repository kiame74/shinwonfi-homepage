import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "HMR (가정간편식) | 신원에프아이",
    description: "바쁜 현대인을 위해 손쉽게 집밥의 정성을 느낄 수 있는 밀키트 베이스 및 간편식 제품군을 소개합니다.",
};

export default function HmrProductsPage() {
    const items = ["밀키트 베이스", "파우치 국/탕류", "컵밥 양념", "구이용 소스", "볶음밥 베이스", "간편 조리 세트"];

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop" alt="HMR" className="object-cover w-full h-full" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Category 03</span>
                                <h2 className="text-4xl font-black text-secondary">HMR / RTC</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    언제 어디서나 간편하게 셰프의 맛을 재현할 수 있도록, 신원에프아이의 노하우가 담긴 HMR 전용 솔루션을 제공합니다.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {items.map((item) => (
                                <div key={item} className="bg-gray-50 p-6 rounded-2xl flex items-center space-x-4 hover:shadow-lg transition-all group">
                                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                                    <span className="text-gray-700 font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
