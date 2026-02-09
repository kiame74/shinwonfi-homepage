"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const tabs = [
        { name: "식육추출가공품", href: "/products/meat" },
        { name: "복합조미식품", href: "/products/sauce" },
        { name: "향미유", href: "/products/oil" },
    ];

    return (
        <div className="flex flex-col">
            {/* Sub-header */}
            <section className="bg-secondary py-20 text-center text-white">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">제품소개</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">신원에프아이의 기술력으로 탄생한 프리미엄 라인업입니다.</p>
                </ScrollReveal>
            </section>

            {/* Tab Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-24 z-30">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center -mb-px overflow-x-auto no-scrollbar">
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
