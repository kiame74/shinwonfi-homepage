import { ScrollReveal } from "@/components/ScrollReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "향미유",
    description: "원재료 본연의 풍미를 그대로 담아 요리의 깊은 맛을 더해주는 프리미엄 향미유 제품을 소개합니다.",
    openGraph: {
        title: "신원에프아이 - 향미유",
        description: "원재료 본연의 풍미를 그대로 담아 요리의 깊은 맛을 더해주는 프리미엄 향미유 제품을 소개합니다.",
        url: '/products/oil',
    },
};


export default function OilProductsPage() {
    const products = [
        {
            category: "해물",
            items: "새우향미유",
            desc: "신선한 새우의 깊고 진한 풍미를 오일에 그대로 담아 해물 요리의 맛과 향을 한층 더해줍니다."
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
                                        src="https://images.unsplash.com/photo-1516684669134-de6d7c47743b?q=80&w=1974&auto=format&fit=crop"
                                        alt="Shrimp Oil"
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm border-b-2 border-secondary pb-1 inline-block">Product Line 03</span>
                                <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight break-keep">향미유<br className="hidden md:block" /><span className="text-xl md:text-2xl font-medium text-gray-500 ml-2 md:ml-0">(Flavored Oil)</span></h2>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                                    원재료 본연의 맛과 향을 과학적인 공법으로 추출하여, 요리에 마지막 터치로 완벽한 풍미를 선사합니다.
                                </p>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {products.map((product, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-white rounded-[2rem] md:rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all border border-indigo-100 group">
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-xl md:text-2xl font-black text-secondary group-hover:text-primary transition-colors">{product.category}</h3>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                                            🦐
                                        </div>
                                    </div>

                                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{product.items}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm break-keep">
                                        {product.desc}
                                    </p>
                                </div>
                            ))}

                            {/* Placeholder for future products */}
                            <div className="bg-gray-50 rounded-[2rem] md:rounded-3xl p-8 md:p-10 border border-gray-100 border-dashed flex flex-col justify-center items-center text-center space-y-4 opacity-70">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl md:text-2xl text-gray-400">
                                    +
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-400">More Flavors Coming Soon</h3>
                                <p className="text-xs md:text-sm text-gray-400 max-w-xs break-keep">
                                    더 다양한 원재료를 활용한 프리미엄 향미유 제품들이 지속적으로 개발되고 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
