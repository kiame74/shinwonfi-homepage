"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Notice {
    id: string;
    title: string;
    writer: string;
    date: string;
    views: number;
    isFixed: boolean;
    createdAt: string;
}

export default function NoticePage() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const fetchNotices = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/notices?page=${page}&search=${searchTerm}`);
            const result = await res.json();
            if (result.success) {
                setNotices(result.data.notices);
                setTotalPages(result.data.pagination.totalPages);
                setTotalCount(result.data.pagination.total);
            }
        } catch (error) {
            console.error("Failed to fetch notices:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchNotices();
        }, 300); // 디바운스
        return () => clearTimeout(timer);
    }, [page, searchTerm]);

    return (
        <div className="flex flex-col">
            <section className="bg-secondary py-12 md:py-20 text-center text-white">
                <ScrollReveal>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">공지사항</h1>
                    <p className="text-gray-400 text-sm md:text-base break-keep px-4">신원에프아이의 새로운 소식을 알려드립니다.</p>
                </ScrollReveal>
            </section>

            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <ScrollReveal>
                        <div className="bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">

                            {/* Toolbar: Total count & Search */}
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                                <div className="text-gray-500 font-medium text-sm md:text-base">
                                    Total <span className="text-primary font-bold">{totalCount}</span> 건
                                </div>
                                <div className="relative w-full md:w-80">
                                    <input
                                        type="text"
                                        placeholder="검색어를 입력하세요"
                                        className="w-full pl-4 pr-12 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm md:text-base"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-hidden">
                                <table className="w-full text-left border-t border-secondary table-fixed">
                                    <thead className="bg-gray-50 text-gray-700 font-bold text-[10px] md:text-sm uppercase tracking-wider">
                                        <tr>
                                            <th className="px-3 md:px-6 py-4 md:py-5 text-center w-12 md:w-20">No</th>
                                            <th className="px-3 md:px-6 py-4 md:py-5 text-center lg:text-left">Subject</th>
                                            <th className="px-6 py-5 text-center w-32 hidden md:table-cell">Writer</th>
                                            <th className="px-6 py-5 text-center w-32 hidden md:table-cell">Date</th>
                                            <th className="px-6 py-5 text-center w-24 hidden md:table-cell">View</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {isLoading ? (
                                            <tr>
                                                <td colSpan={5} className="py-20 text-center text-gray-400">데이터를 불러오는 중입니다...</td>
                                            </tr>
                                        ) : notices.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="py-20 text-center text-gray-400">검색 결과가 없습니다.</td>
                                            </tr>
                                        ) : (
                                            notices.map((notice) => (
                                                <tr key={notice.id} className="group hover:bg-gray-50 transition-colors cursor-pointer">
                                                    <td className="px-3 md:px-6 py-4 md:py-5 text-center text-gray-400 font-medium group-hover:text-primary transition-colors text-xs md:text-base">
                                                        {notice.isFixed ? <span className="text-primary font-bold">공지</span> : '•'}
                                                    </td>
                                                    <td className="px-3 md:px-6 py-4 md:py-5">
                                                        <Link href={`/support/notice/${notice.id}`} className="block">
                                                            <span className="text-gray-800 font-medium group-hover:text-primary transition-colors line-clamp-1 text-sm md:text-base break-keep">
                                                                {notice.title}
                                                            </span>
                                                            <div className="md:hidden flex items-center gap-2 mt-1.5 text-[10px] text-gray-400">
                                                                <span>{notice.writer}</span>
                                                                <span>•</span>
                                                                <span className="font-roboto">{new Date(notice.createdAt).toLocaleDateString()}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="px-6 py-5 text-center text-gray-500 text-sm hidden md:table-cell">{notice.writer}</td>
                                                    <td className="px-6 py-5 text-center text-gray-400 text-sm hidden md:table-cell font-roboto">{new Date(notice.createdAt).toLocaleDateString()}</td>
                                                    <td className="px-6 py-5 text-center text-gray-400 text-sm hidden md:table-cell font-roboto">{notice.views}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-8 md:mt-12 flex justify-center space-x-1.5 md:space-x-2">
                                    <button
                                        onClick={() => setPage(p => Math.max(1, p - 1))}
                                        disabled={page === 1}
                                        className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-secondary transition-colors disabled:opacity-50"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setPage(i + 1)}
                                            className={`w-9 h-9 md:w-10 md:h-10 rounded-lg font-bold flex items-center justify-center transition-all text-xs md:text-sm ${page === i + 1
                                                ? 'bg-secondary text-white shadow-lg shadow-gray-200'
                                                : 'text-gray-500 hover:bg-gray-100'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                        disabled={page === totalPages}
                                        className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-secondary transition-colors disabled:opacity-50"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            )}

                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
