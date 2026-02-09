"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";
import {
    Search,
    Plus,
    MoreVertical,
    Edit,
    Trash2,
    Eye,
    Pin
} from "lucide-react";

interface Notice {
    id: string;
    title: string;
    writer: string;
    views: number;
    isFixed: boolean;
    published: boolean;
    createdAt: string;
}

export default function EcmsNoticesPage() {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchNotices = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/ecms/notices?search=${searchTerm}`);
            const data = await res.json();
            if (data.success) {
                setNotices(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch notices:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, [searchTerm]);

    const handleDelete = async (id: string) => {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/ecms/notices/${id}`, { method: "DELETE" });
            if (res.ok) fetchNotices();
        } catch (error) {
            console.error("Failed to delete notice:", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="공지사항 제목 검색"
                        className="w-full pl-11 pr-6 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Link
                    href="/ecms/notices/new"
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-2xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                    <Plus size={18} />
                    <span>새 공지 작성</span>
                </Link>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5 w-20 text-center">고정</th>
                                <th className="px-8 py-5">제목</th>
                                <th className="px-8 py-5 w-32">작성자</th>
                                <th className="px-8 py-5 w-24">조회수</th>
                                <th className="px-8 py-5 w-40">등록일</th>
                                <th className="px-8 py-5 text-right">관리</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr><td colSpan={6} className="px-8 py-20 text-center text-gray-400 font-medium">로딩 중...</td></tr>
                            ) : notices.length === 0 ? (
                                <tr><td colSpan={6} className="px-8 py-20 text-center text-gray-400 font-medium">공지사항이 없습니다.</td></tr>
                            ) : notices.map((notice) => (
                                <tr key={notice.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-8 py-6 text-center">
                                        {notice.isFixed && <Pin size={16} className="text-primary mx-auto" fill="currentColor" />}
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1">{notice.title}</div>
                                        {!notice.published && <span className="text-[10px] font-black text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded ml-2 uppercase">비공개</span>}
                                    </td>
                                    <td className="px-8 py-6 text-sm text-gray-600 font-medium">{notice.writer}</td>
                                    <td className="px-8 py-6 text-sm text-gray-400 font-roboto">{notice.views}</td>
                                    <td className="px-8 py-6 text-sm text-gray-400 font-medium">
                                        {format(new Date(notice.createdAt), 'yyyy. MM. dd', { locale: ko })}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end space-x-1">
                                            <Link href={`/support/notice/${notice.id}`} target="_blank" className="p-2 text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
                                                <Eye size={18} />
                                            </Link>
                                            <Link href={`/ecms/notices/${notice.id}/edit`} className="p-2 text-gray-400 hover:text-blue-500 transition-colors hover:bg-blue-50 rounded-lg">
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(notice.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors hover:bg-red-50 rounded-lg"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
