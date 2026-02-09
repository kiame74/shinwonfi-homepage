"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    MessageSquare,
    Bell,
    LogOut,
    Menu,
    X,
    User
} from "lucide-react";
import { useState } from "react";

export default function EcmsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // 로그인 페이지에서는 레이아웃 미적용
    if (pathname === "/ecms/login") return <>{children}</>;

    const navItems = [
        { name: "대시보드", href: "/ecms", icon: LayoutDashboard },
        { name: "문의 관리", href: "/ecms/inquiries", icon: MessageSquare },
        { name: "공지사항 관리", href: "/ecms/notices", icon: Bell },
    ];

    const handleLogout = async () => {
        const res = await fetch("/api/auth/logout", { method: "POST" });
        if (res.ok) {
            router.push("/ecms/login");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className={`bg-secondary text-white transition-all duration-300 fixed h-full z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-6 flex items-center justify-between border-b border-white/10">
                    {isSidebarOpen && <span className="text-xl font-black tracking-tighter">SHINWON ECMS</span>}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-white/10 rounded-lg">
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="mt-8 px-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <Icon size={20} />
                                {isSidebarOpen && <span className="font-bold text-sm">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-6 left-0 w-full px-4">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all text-gray-400 hover:bg-red-500/10 hover:text-red-500 w-full"
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-bold text-sm">로그아웃</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <header className="bg-white border-b border-gray-100 h-20 flex items-center justify-between px-8 sticky top-0 z-40">
                    <h2 className="text-xl font-black text-secondary">
                        {navItems.find(item => item.href === pathname)?.name || "Dashboard"}
                    </h2>
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-50 p-2 rounded-full border border-gray-100 overflow-hidden">
                            <User size={20} className="text-gray-400" />
                        </div>
                        <span className="font-bold text-sm text-gray-700">관리자님</span>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
