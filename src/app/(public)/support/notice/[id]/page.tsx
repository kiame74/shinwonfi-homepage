import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const notice = await prisma.notice.findUnique({ where: { id } });

    if (!notice) return { title: "공지사항을 찾을 수 없습니다" };

    return {
        title: notice.title,
        description: notice.content.substring(0, 160),
        openGraph: {
            title: `신원에프아이 - ${notice.title}`,
            description: notice.content.substring(0, 160),
        }
    };
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // 공지사항 조회 및 조회수 증가
    const notice = await prisma.notice.update({
        where: { id },
        data: { views: { increment: 1 } }
    }).catch(() => null);

    if (!notice || !notice.published) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            <section className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">공지사항</h1>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <ScrollReveal>
                        <div className="border-t-4 border-primary bg-white shadow-2xl shadow-gray-100 rounded-[3rem] overflow-hidden">
                            <div className="p-10 md:p-16 space-y-10">
                                <div className="space-y-4 border-b border-gray-100 pb-10">
                                    <h2 className="text-3xl font-black text-secondary leading-tight">{notice.title}</h2>
                                    <div className="flex items-center text-gray-400 space-x-6 text-sm">
                                        <span className="flex items-center"><span className="font-bold text-gray-300 mr-2">날짜</span> {new Date(notice.createdAt).toLocaleDateString()}</span>
                                        <span className="flex items-center"><span className="font-bold text-gray-300 mr-2">작성자</span> {notice.writer}</span>
                                        <span className="flex items-center"><span className="font-bold text-gray-300 mr-2">조회수</span> {notice.views}</span>
                                    </div>
                                </div>

                                <div className="text-gray-600 leading-relaxed text-lg whitespace-pre-line min-h-[300px]">
                                    {notice.content}
                                </div>

                                <div className="pt-10 border-t border-gray-100 flex justify-between items-center">
                                    <Link href="/support/notice" className="bg-gray-50 hover:bg-gray-100 text-gray-500 font-bold px-8 py-4 rounded-2xl transition-all">
                                        목록으로
                                    </Link>
                                    <div className="flex space-x-2">
                                        <button className="p-4 bg-gray-50 hover:bg-primary/[0.05] hover:text-primary rounded-2xl transition-all">
                                            이전글
                                        </button>
                                        <button className="p-4 bg-gray-50 hover:bg-primary/[0.05] hover:text-primary rounded-2xl transition-all">
                                            다음글
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
