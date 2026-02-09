import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "기업소개",
    description: "맛의 믿음으로 으뜸이 되는 글로벌 식품 기업, 신원에프아이의 비전과 미션을 소개합니다.",
    openGraph: {
        title: "신원에프아이 - 기업소개",
        description: "맛의 믿음으로 으뜸이 되는 글로벌 식품 기업, 신원에프아이의 비전과 미션을 소개합니다.",
        url: '/company/about',
    },
};


export default function AboutPage() {
    return (
        <section id="about" className="py-12 md:py-24 bg-white border-t border-gray-100">
            <ScrollReveal>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-20 space-y-4">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">About Us</h3>
                        <h2 className="text-3xl md:text-4xl font-black text-secondary">기업 소개</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg break-keep">
                            신원에프아이는 1993년 창립 이래 농수축산물 기반의 식자재 공급을 시작으로, <br className="hidden md:block" />
                            현재는 HMR 및 소스, 시즈닝 제조 분야를 선도하는 글로벌 식품 전문 기업으로 성장했습니다.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">

                        {/* 1. (주) 신원에프아이 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <div className="space-y-4 md:space-y-6">
                                <span className="text-primary font-bold tracking-widest text-xs bg-primary/5 px-4 py-2 rounded-full inline-block">SINCE 1993</span>
                                <h3 className="text-2xl md:text-3xl font-black text-secondary leading-tight">
                                    (주)신원에프아이
                                </h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg break-keep">
                                    <p>
                                        1993년 6월 창업하여 농수축산물을 기초로 한 소재를 사용하여 국내 유수의 업체를 상대로 사업을 시작하였고,
                                        VD와 SD 중심으로 분말, 시즈닝 제품을 시작으로 2000년대에는 액상과 소스 제품을 개발 생산하였습니다.
                                    </p>
                                    <p>
                                        2000년 후반에는 사골 추출라인과 장조림 라인을 구축하고 우리 전통 식품의 기초 제품을 생산하기 시작하였으며,
                                        현재는 즉석조리식품 유형으로 1인 기준의 국, 탕, 찌개 제품과 간편하게 먹을 수 있는 메추리알 및 계란 등의 난류 가공품을 생산하여
                                        <strong className="text-gray-900 font-bold ml-1">식품 대중화와 한식 세계화</strong>에 앞장서서 나아가고 있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-white flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">Company Image</span>
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>

                        {/* 2. 식품연구소 */}
                        <div className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 text-center md:text-left">
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 mx-auto md:mx-0 text-4xl">
                                        🔬
                                    </div>
                                    <h3 className="text-3xl font-black text-secondary mb-4">식품연구소</h3>
                                    <p className="text-primary font-bold">R&D Center</p>
                                </div>
                                <div className="md:w-2/3 text-gray-600 leading-relaxed text-lg bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                                    <p>
                                        2000년 11월 기업부설 식품연구소를 운영하기 시작하여 전문연구원들이 다양한 연구를 통하여 빠르게 변화하는 식품산업에 발 맞추고 있습니다.
                                        고객이 원하는 제품을 한 발 앞서 제안하며, 새로운 식품문화 창조로 고객에게 사랑 받는 일류식품회사의 비전을 실천하기 위해 전문연구원들을 배치 운영하고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. HACCP 인증 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-secondary text-white rounded-[2.5rem] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                                    <span className="text-emerald-400">HACCP</span> 인증
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                                    신원에프아이는 축산물조리 / 즉석조리 등 안전하고 엄격한 HACCP(식품안전관리인증기준)에 맞는 설비로 관리 운영되고 있습니다.
                                </p>
                            </div>
                            <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-12 md:p-16 flex flex-col justify-center hover:border-emerald-100 transition-colors shadow-lg shadow-gray-100/50">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">품질 관리 시스템</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    HACCP 기준에 맞는 습관과 의식을 갖추기 위해 신원에프아이는 매월 철저한 교육을 시행하고,
                                    깐깐한 품질관리를 위하여 <strong className="text-secondary">품질관리원</strong>을 배치 운영하고 있습니다.
                                </p>
                            </div>
                        </div>

                        {/* 4. Vision & Mission */}
                        <div className="text-center space-y-12 py-12">
                            <div className="inline-block">
                                <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Vision & Mission</h3>
                                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
                            </div>

                            <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-secondary" />

                                <h4 className="text-xl md:text-4xl font-black text-gray-900 mb-6 md:mb-10 leading-snug break-keep">
                                    맛의 <span className="text-primary">믿음(信)</span>으로 <span className="text-secondary">으뜸(元)</span>이 되는<br />
                                    Global Food Company
                                </h4>

                                <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-base md:text-xl font-light break-keep">
                                    식품기술로 신성장 동력을 확보하고, 고객에 대한 깊은 이해로 안전/건강 시장을 선도하며,
                                    도전적이고 창의적인 젊은 기업문화를 만든다는 목표 아래 식품산업 대중화의 주도적인 역할을 하며,
                                    세계적으로 한식문화 제품의 우수성을 널리 알리는데 신원에프아이가 선도적인 역할을 할 것입니다.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
