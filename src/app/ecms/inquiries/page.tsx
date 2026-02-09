"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import {
    Search,
    Filter,
    MoreVertical,
    Eye,
    CheckCircle,
    Clock,
    User
} from "lucide-react";

interface Inquiry {
    id: string;
    category: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    status: string;
    createdAt: string;
}

export default function EcmsInquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const fetchInquiries = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/ecms/inquiries?status=${statusFilter}&search=${searchTerm}`);
            const data = await res.json();
            if (data.success) {
                setInquiries(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch inquiries:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, [statusFilter, searchTerm]);

    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/ecms/inquiries/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            if (res.ok) {
                fetchInquiries();
            }
        } catch (error) {
            console.error("Failed to update status:", error);
        }
    };

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="이름 또는 업체명 검색"
                            className="pl-11 pr-6 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm w-full md:w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-200">
                        {["all", "pending", "completed"].map((f) => (
                            <button
                                key={f}
                                onClick={() => setStatusFilter(f)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${statusFilter === f ? 'bg-white text-secondary shadow-sm' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {f === 'all' ? '전체' : f === 'pending' ? '대기중' : '완료'}
                            </button>
                        ))}
                    </div>
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-secondary text-white rounded-2xl text-sm font-bold hover:bg-black transition-all">
                    <Filter size={16} />
                    <span>필터 더보기</span>
                </button>
            </div>

            {/* List */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                            <tr>
                                <th className="px-8 py-5">이름/업체명</th>
                                <th className="px-8 py-5">연락처/이메일</th>
                                <th className="px-8 py-5">상담구분</th>
                                <th className="px-8 py-5">상태</th>
                                <th className="px-8 py-5">등록일</th>
                                <th className="px-8 py-5 text-right">관리</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr><td colSpan={6} className="px-8 py-20 text-center text-gray-400 font-medium">로딩 중...</td></tr>
                            ) : inquiries.length === 0 ? (
                                <tr><td colSpan={6} className="px-8 py-20 text-center text-gray-400 font-medium">문의 내역이 없습니다.</td></tr>
                            ) : inquiries.map((iq) => (
                                <tr key={iq.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                <User size={18} />
                                            </div>
                                            <span className="font-black text-secondary">{iq.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-sm font-medium text-gray-600">{iq.phone}</div>
                                        <div className="text-[11px] text-gray-400">{iq.email}</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">{iq.category}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <button
                                            onClick={() => handleStatusChange(iq.id, iq.status === 'pending' ? 'completed' : 'pending')}
                                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-[10px] font-black transition-all ${iq.status === 'pending'
                                                ? 'bg-orange-50 text-orange-500 hover:bg-orange-100'
                                                : 'bg-green-50 text-green-500 hover:bg-green-100'
                                                }`}
                                        >
                                            {iq.status === 'pending' ? <Clock size={12} /> : <CheckCircle size={12} />}
                                            <span>{iq.status === 'pending' ? '대기중' : '완료'}</span>
                                        </button>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-gray-400 font-medium">
                                        {format(new Date(iq.createdAt), 'yyyy. MM. dd', { locale: ko })}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-lg">
                                                <MoreVertical size={18} />
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
