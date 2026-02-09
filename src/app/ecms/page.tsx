import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function EcmsDashboard() {
    // 통계 데이터 조회
    const [inquiryCount, pendingInquiries, totalNotices] = await Promise.all([
        prisma.inquiry.count(),
        prisma.inquiry.count({ where: { status: "pending" } }),
        prisma.notice.count(),
    ]);

    const recentInquiries = await prisma.inquiry.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
    });

    const stats = [
        { name: "전체 문의", value: inquiryCount, color: "bg-blue-500" },
        { name: "대기 중인 문의", value: pendingInquiries, color: "bg-orange-500" },
        { name: "전체 공지사항", value: totalNotices, color: "bg-green-500" },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm font-bold mb-1">{stat.name}</p>
                            <p className="text-3xl font-black text-secondary">{stat.value}</p>
                        </div>
                        <div className={`${stat.color} w-3 h-12 rounded-full`} />
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-lg font-black text-secondary">최근 문의 내역</h3>
                    <Link href="/ecms/inquiries" className="text-primary text-sm font-bold hover:underline">모두 보기</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">이름/업체명</th>
                                <th className="px-6 py-4">관심분야</th>
                                <th className="px-6 py-4">상태</th>
                                <th className="px-6 py-4">날짜</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentInquiries.map((iq) => (
                                <tr key={iq.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-secondary">{iq.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{iq.category}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${iq.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                                            }`}>
                                            {iq.status === 'pending' ? '대기중' : '완료'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{new Date(iq.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                            {recentInquiries.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-20 text-center text-gray-400 font-medium">문의 내역이 없습니다.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
