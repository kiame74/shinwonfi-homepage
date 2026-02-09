"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const tabs = [
        { name: "기업소개", href: "/company/about" },
        { name: "CEO 인사말", href: "/company/greetings" },
        { name: "연혁", href: "/company/history" },
        { name: "인증현황", href: "/company/certify" },
        { name: "오시는 길", href: "/company/location" },

    ];

    return (
        <div className="flex flex-col">
            {/* Sub-header */}
            <section className="bg-secondary py-20 text-center text-white">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">회사소개</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">신원에프아이는 건강한 식문화를 이끌어가는 정직한 기업입니다.</p>
                </ScrollReveal>
            </section>

            {/* Tab Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-24 z-30">
                <div className="container mx-auto px-4">
                    <div className="flex justify-start md:justify-center -mb-px overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={`px-8 py-6 text-sm md:text-base font-bold transition-all border-b-2 whitespace-nowrap ${pathname === tab.href
                                    ? "border-primary text-primary"
                                    : "border-transparent text-gray-400 hover:text-secondary"
                                    }`}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
