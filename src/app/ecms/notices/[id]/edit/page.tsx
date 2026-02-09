"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function EcmsNoticeEditPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;
    const isEdit = !!id;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isFixed, setIsFixed] = useState(false);
    const [published, setPublished] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isEdit) {
            fetch(`/api/ecms/notices/${id}`)
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        setTitle(res.data.title);
                        setContent(res.data.content);
                        setIsFixed(res.data.isFixed);
                        setPublished(res.data.published);
                    }
                });
        }
    }, [id, isEdit]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const body = { title, content, isFixed, published };
        const url = isEdit ? `/api/ecms/notices/${id}` : "/api/ecms/notices";
        const method = isEdit ? "PATCH" : "POST";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                router.push("/ecms/notices");
            }
        } catch (error) {
            console.error("Failed to save notice:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <Link href="/ecms/notices" className="flex items-center space-x-2 text-gray-500 hover:text-secondary transition-colors font-bold text-sm">
                    <ArrowLeft size={18} />
                    <span>목록으로 돌아가기</span>
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12 space-y-8">
                    <div className="space-y-4">
                        <label className="text-xs font-black text-secondary uppercase tracking-widest ml-1">공지 제목</label>
                        <input
                            required
                            type="text"
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-base font-bold placeholder:text-gray-300"
                            placeholder="제목을 입력해 주세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
                            <div>
                                <h4 className="font-black text-secondary text-sm">상단 고정</h4>
                                <p className="text-gray-400 text-[11px] font-medium">목록 최상단에 항상 노출됩니다.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsFixed(!isFixed)}
                                className={`w-12 h-6 rounded-full transition-all relative ${isFixed ? 'bg-primary' : 'bg-gray-200'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isFixed ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
                            <div>
                                <h4 className="font-black text-secondary text-sm">게시 여부</h4>
                                <p className="text-gray-400 text-[11px] font-medium">비공개 시 사용자에게 노출되지 않습니다.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setPublished(!published)}
                                className={`w-12 h-6 rounded-full transition-all relative ${published ? 'bg-green-500' : 'bg-gray-200'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${published ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-black text-secondary uppercase tracking-widest ml-1">공지 본문</label>
                        <textarea
                            required
                            className="w-full px-6 py-6 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all h-[400px] resize-none text-base leading-relaxed placeholder:text-gray-300"
                            placeholder="내용을 입력해 주세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center space-x-2 px-10 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg active:scale-95 disabled:opacity-50"
                    >
                        <Save size={18} />
                        <span>수정 완료</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
