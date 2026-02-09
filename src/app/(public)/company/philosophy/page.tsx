import { Metadata } from "next";

export const metadata: Metadata = {
    title: "경영이념 | 신원에프아이",
    description: "정직, 혁신, 상생의 가치를 실천하는 신원에프아이의 경영 철학을 소개합니다.",
};

export default function PhilosophyPage() {
    return (
        <section id="philosophy" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Philosophy</h3>
                    <h2 className="text-4xl font-black text-secondary">경영 이념</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "정직 (Honesty)", desc: "타협하지 않는 정직한 원재료 사용과 공정한 제조 공정을 준수합니다." },
                        { title: "혁신 (Innovation)", desc: "미래 지향적인 연구와 최첨단 공법을 통해 새로운 맛을 창조합니다." },
                        { title: "상생 (Partnership)", desc: "사회와 이웃, 고객과 함께 성장하며 나눔의 가치를 실천합니다." },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center space-y-4 group">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
                                <span className="text-primary text-2xl group-hover:text-white">{idx + 1}</span>
                            </div>
                            <h4 className="text-2xl font-bold text-secondary">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
