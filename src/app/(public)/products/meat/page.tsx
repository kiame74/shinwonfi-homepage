import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "식육추출가공품",
    description: "엄선된 육류를 바탕으로 깊고 진한 맛을 내는 사골농축액, 치킨추출물 등 소구 가루 및 농축액 제품을 소개합니다.",
    openGraph: {
        title: "신원에프아이 - 식육추출가공품",
        description: "엄선된 육류를 바탕으로 깊고 진한 맛을 내는 사골농축액, 치킨추출물 등 소구 가루 및 농축액 제품을 소개합니다.",
        url: '/products/meat',
    },
};


export default function MeatProductsPage() {
    const products = [
        {
            name: "사골엑기스 SH",
            ingredients: "사골33%(호주산), 정제수",
            capacity: "10KG * 2EA",
            allergens: "쇠고기 함유"
        },
        {
            name: "사골추출농축액-1",
            ingredients: "사골추출농축액94% {사골(호주산)33%, 정제수가용성고형분함량43%}, 정제소금(국내산)",
            capacity: "20KG",
            allergens: "쇠고기 함유"
        },
        {
            name: "사골추출물-1",
            ingredients: "정제수사골34%(육우100%)",
            capacity: "20KG",
            allergens: "쇠고기 함유"
        },
        {
            name: "사골농축액P(P1)",
            ingredients: "사골추출액{정제수, 사골(호주산)33%}, 88%, 정제소금(국산)",
            capacity: "10KG * 2EA",
            allergens: "쇠고기 함유"
        },
        {
            name: "사골엑기스AS",
            ingredients: "사골추출농축액65%{정제수, 사골(호주산)33%}(고형분함량43%), 정제소금(국산), 저당(옥수수전분), 우지(호주산), 말토덱스트린, 글리세린지방산에스테르, 카제인나트륨, 잔탄검",
            capacity: "20KG",
            allergens: "쇠고기, 우유 함유"
        },
        {
            name: "돈골농축액",
            ingredients: "돈골추출농축액{정제수, 돈잡뼈(국내산)25.10%, 돈사골(국내산)10.61%/가용성고형분함량48%이상}68%, 정제돈지(국내산), 정제소금(국내산)",
            capacity: "20KG",
            allergens: "돼지고기 함유"
        },
        {
            name: "돈사골추출액-1",
            ingredients: "돈사골추출액97.97%[고형분44%{돈사골25%(국내산)}.,정제수], 프리파레이션에멀스타500에이(변성전분, 말토덱스트린), 프리파레이션피에이#1(변성전분, 말토덱스트린), 유화제",
            capacity: "18KG",
            allergens: "돼지고기 함유"
        },
        {
            name: "돈사골추출물30",
            ingredients: "정제수, 돼지고기잡뼈(국내산)40%",
            capacity: "20KG",
            allergens: "돼지고기 함유"
        },
        {
            name: "돈골엑기스",
            ingredients: "돈골추출물50 35%{정제수, 돼지고기잡뼈(국산)40%}(고형분함량50%), 돈지25%(국산), 사골추출농축액17.8%{정제수, 사골(호주산)33%}(고형분함량43%), 말토덱스트린, 정제소금, 카제인나트륨, 글리세린지방산에스테르40%",
            capacity: "20KG",
            allergens: "돼지고기, 쇠고기, 우유 함유"
        }
    ];

    return (
        <div className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                            <div className="flex-1 w-full order-1 md:order-none">
                                <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
                                        alt="Meat Extract"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm border-b-2 border-primary pb-1 inline-block">Product Line 01</span>
                                <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight break-keep">식육추출 가공품<br className="hidden md:block" /><span className="text-xl md:text-2xl font-medium text-gray-500 ml-2 md:ml-0">(농축액)</span></h2>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                                    신원에프아이의 독자적인 저온 추출 기법으로 원재료 본연의 깊은 맛과 감칠맛을 살린 고품질 엑기스를 생산합니다.
                                </p>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {products.map((product, idx) => (
                                <div key={idx} className="bg-white rounded-[2rem] md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full hover:-translate-y-1 duration-300">
                                    <div className="mb-4 md:mb-6 flex items-center justify-between">
                                        <h3 className="text-lg md:text-xl font-black text-gray-900 break-keep">{product.name}</h3>
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs md:text-sm flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-4 flex-grow text-sm text-gray-600">
                                        <div>
                                            <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-1">Ingredients</span>
                                            <p className="line-clamp-4 leading-relaxed">{product.ingredients}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Capacity</span>
                                            <p className="font-semibold text-secondary text-xs md:text-sm">{product.capacity}</p>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Allergens</span>
                                            <p className="font-semibold text-secondary text-xs md:text-sm break-keep">{product.allergens}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
