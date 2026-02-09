"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const tabs = [
        { name: "생산시설", href: "/facilities/production" },
        { name: "기업부설연구소", href: "/facilities/lab" },
        { name: "위생관리", href: "/facilities/hygiene" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-secondary py-20 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-4">시설 & 인프라</h1>
                    <p className="text-gray-400">최첨단 설비와 연구 역량이 신원에프아이의 경쟁력입니다.</p>
                </div>
            </section>

            {/* Tab Navigation */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-start md:justify-center space-x-8 overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => {
                            const isActive = pathname === tab.href;
                            return (
                                <Link
                                    key={tab.name}
                                    href={tab.href}
                                    className={`relative py-4 text-sm font-bold transition-colors whitespace-nowrap ${isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    {tab.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="flex-grow bg-white">
                {children}
            </main>
        </div>
    );
}
