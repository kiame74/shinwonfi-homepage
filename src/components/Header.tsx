"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

    const menuItems = [
        {
            name: "회사소개",
            href: "/company",
            sub: [
                { name: "기업소개", href: "/company/about" },
                { name: "CEO 인사말", href: "/company/greetings" },
                { name: "연혁", href: "/company/history" },
                { name: "인증현황", href: "/company/certify" },
                { name: "오시는 길", href: "/company/location" }
            ]
        },
        {
            name: "시설&인프라",
            href: "/facilities/production",
            sub: [
                { name: "생산시설", href: "/facilities/production" },
                { name: "기업부설연구소", href: "/facilities/lab" },
                { name: "위생관리", href: "/facilities/hygiene" }
            ]
        },
        {
            name: "제품소개",
            href: "/products",
            sub: [
                { name: "식육추출가공품", href: "/products/meat" },
                { name: "복합조미식품", href: "/products/sauce" },
                { name: "향미유", href: "/products/oil" }
            ]
        },
        {
            name: "고객센터",
            href: "/support",
            sub: [
                { name: "공지사항", href: "/support/notice" },
                { name: "문의하기", href: "/support/inquiry" }
            ]
        },
    ];

    return (
        <>
            <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-3xl font-black text-primary tracking-tighter">
                            SHINWON <span className="text-secondary">FI</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-12 h-full">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative h-full flex items-center group"
                                onMouseEnter={() => setActiveMenu(item.name)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary font-bold text-lg transition-colors py-2"
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown Indicator */}
                                <div className="absolute bottom-6 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />

                                {/* Submenu Dropdown */}
                                <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-4 transition-all duration-300 transform origin-top ${activeMenu === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                                    {item.sub.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors z-[120]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu - 헤더 외부로 분리 */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-white z-[150] overflow-y-auto"
                    style={{ backgroundColor: '#ffffff' }}
                >
                    <div className="h-full flex flex-col">
                        {/* Menu Header */}
                        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 flex-shrink-0 bg-white">
                            <span className="text-xl font-black text-primary tracking-tighter">
                                SHINWON <span className="text-secondary">FI</span>
                            </span>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveMobileMenu(null);
                                }}
                                className="p-2 text-secondary hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-1 px-6 py-8 bg-white">
                            <div className="flex flex-col space-y-6">
                                {menuItems.map((item) => (
                                    <div key={item.name} className="space-y-3">
                                        <button
                                            onClick={() => setActiveMobileMenu(activeMobileMenu === item.name ? null : item.name)}
                                            className="flex items-center justify-between w-full py-1"
                                        >
                                            <span className={`text-xl font-bold transition-colors ${activeMobileMenu === item.name ? "text-primary" : "text-gray-800"}`}>
                                                {item.name}
                                            </span>
                                            <svg
                                                className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${activeMobileMenu === item.name ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Submenu */}
                                        <div
                                            className={`overflow-hidden transition-all duration-400 ${activeMobileMenu === item.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20">
                                                {item.sub.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="text-gray-600 hover:text-primary font-medium py-1.5 block text-base transition-colors"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setActiveMobileMenu(null);
                                                        }}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Menu Footer */}
                        <div className="px-6 py-6 bg-gray-50 mt-auto border-t border-gray-100">
                            <p className="text-gray-400 text-[11px] text-center leading-relaxed">
                                경기도 화성시 장안면 수정로 299번길 18<br />
                                T. 031-351-0221 | F. 031-351-0229
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
