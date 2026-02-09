import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "복합조미식품",
    description: "요리의 완성도를 높여주는 다양한 소스, 양념, 파우더 시즈닝 등 신원에프아이의 조미 솔루션을 만나보세요.",
    openGraph: {
        title: "신원에프아이 - 복합조미식품",
        description: "요리의 완성도를 높여주는 다양한 소스, 양념, 파우더 시즈닝 등 신원에프아이의 조미 솔루션을 만나보세요.",
        url: '/products/sauce',
    },
};


export default function SauceProductsPage() {
    const products = [
        {
            category: "스낵시즈닝",
            items: "명란마요맛, 새우버거맛, 인절미맛, 카라멜땅콩맛, 콘소메마요맛, 콘치즈맛, 피자맛, 간장치킨맛, 딸기요거트맛, 바베큐맛, 바질어니언맛, 새우마요맛, 와사비마요맛, 치즈맛, 데리야끼맛"
        },
        {
            category: "치즈뿌링클",
            items: "콘치즈맛, 마라탕맛, 트러플솔트맛, 치즈맛, 할라피뇨맛"
        },
        {
            category: "만두씨즈닝",
            items: "고기맛, 김치맛, 해물맛"
        },
        {
            category: "조미분말",
            items: "사골분말, 쇠고기맛국물내기, 멸치맛조니, 가쓰오국물내기, 매운맛조미분NM, 간장분말, 볶음고추장분말, 명란분말, 지미분말, 감칠맛분"
        },
        {
            category: "특수소재",
            items: "제로칼로리스위트(설탕대체제)"
        }
    ];

    return (
        <div className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2089&auto=format&fit=crop"
                                        alt="Seasonings"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm border-b-2 border-secondary pb-1 inline-block">Product Line 02</span>
                                <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight break-keep">복합조미 식품<br className="hidden md:block" /><span className="text-xl md:text-2xl font-medium text-gray-500 ml-2 md:ml-0">(분말류)</span></h2>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                                    스낵부터 요리까지, 다양한 용도에 맞는 최적의 시즈닝과 조미 분말을 제공하여 맛의 가치를 더합니다.
                                </p>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {products.map((product, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] md:rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                                    <div className="mb-6 md:mb-8 flex items-center justify-between">
                                        <h3 className="text-xl md:text-2xl font-black text-secondary group-hover:text-primary transition-colors">{product.category}</h3>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                                            {idx === 0 ? '🍿' : idx === 1 ? '🧀' : idx === 2 ? '🥟' : idx === 3 ? '🍲' : '✨'}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {product.items.split(', ').map((item, i) => (
                                            <span key={i} className="bg-white border border-gray-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-gray-600 shadow-sm whitespace-nowrap">
                                                {item}
                                            </span>
                                        ))}
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
