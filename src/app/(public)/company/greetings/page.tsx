import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CEO 인사말",
    description: "신원에프아이 대표이사가 전하는 건강한 식문화를 향한 정직한 신념과 약속을 확인하세요.",
    openGraph: {
        title: "신원에프아이 - CEO 인사말",
        description: "신원에프아이 대표이사가 전하는 건강한 식문화를 향한 정직한 신념과 약속을 확인하세요.",
        url: '/company/greetings',
    },
};


export default function GreetingsPage() {
    return (
        <section id="ceo" className="py-12 md:py-24 bg-white">
            <ScrollReveal>
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm">CEO Message</h3>
                        <h2 className="text-3xl md:text-4xl font-black text-secondary">대표 인사말</h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                        <div className="w-full md:w-1/3 flex-shrink-0 md:sticky md:top-24">
                            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                <img src="/images/ceo.jpg" alt="CEO 조화연" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 text-gray-700 space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed font-light break-keep">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">안녕하세요. 고객님!</h4>

                            <p className="font-medium text-lg md:text-xl text-gray-900">
                                ㈜신원에프아이 대표이사 조화연입니다.
                            </p>

                            <p>
                                ㈜신원에프아이는 식품의 맛과 원료가 되는 조미식품, 엑기스 및 분말 등 <span className="text-primary font-semibold">20여년의 소재식품 제조 기술과 경험</span>을 바탕으로 농수축산물을 이용한 국탕류 및 반찬등 즉석조리식품(HMR)을 생산하고 있습니다.
                            </p>

                            <p>
                                국가공인 <span className="text-secondary font-bold">HACCP 인증 획득</span> 및 고객 맞춤형 메뉴 개발 등으로 식육추출가공품, 복합조미식품, 소스류, 향미유, 알가공품 등의 경로에서 신규 수주를 지속 확대하고 있으며 CJ, 동원, 농심, 해태, 대상 등 대기업을 연계한 메뉴 개발로 식품문화를 선도하고 있습니다.
                            </p>

                            <div className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-100 italic text-gray-600 text-sm md:text-base">
                                "신원에프아이 전 임직원은 혁신적이고, 긍정적인 사고와 적극적인 자세로 맡은바 업무에 충실히 임하여 경험과 기술을 축적시키고, 과감한 설비투자와 공정개선으로 위생적이고 안전한 품질의 먹거리를 제공하도록 연구, 개발, 생산에 총력을 다하여 있으며, 작은 수준의 만족에 안주하지 않고 미래에 더 큰 먹거리의 감동을 고객 여러분께 드리도록 최선의 노력을 다 할 것입니다."
                            </div>

                            <p>
                                앞으로도 고객으로부터 신뢰받는 기업, 사회적으로 존경받는 기업, 지속적으로 고객과 함께 성장하는 기업이 되도록 긍지와 책임감을 갖고 기업활동에 전념하겠습니다.
                            </p>

                            <p>
                                고객 여러분의 더 많은 격려와 사랑을 부탁드립니다.<br />
                                감사합니다.
                            </p>

                            <div className="pt-8 mt-8 border-t border-gray-100 flex justify-end items-center">
                                <span className="text-xl font-bold text-gray-900 mr-4">대표이사</span>
                                <span className="text-3xl font-black text-secondary font-serif">조 화 연</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
