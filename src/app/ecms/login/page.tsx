"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function EcmsLoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.success) {
                router.push("/ecms");
            } else {
                setError(data.message || "로그인에 실패했습니다.");
            }
        } catch (err) {
            setError("서버와 통신 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full"
            >
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200 overflow-hidden border border-gray-100">
                    <div className="p-10 md:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-black text-secondary mb-3">ECMS Portal</h1>
                            <p className="text-gray-500 font-medium">관리자 계정으로 로그인해 주세요.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Username</label>
                                <input
                                    required
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="아이디를 입력하세요"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
                                <input
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="비밀번호를 입력하세요"
                                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-sm md:text-base font-medium"
                                />
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium text-center"
                                >
                                    {error}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-5 bg-secondary text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isLoading ? "로그인 중..." : "로그인"}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
