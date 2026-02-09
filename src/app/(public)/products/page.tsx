import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

export default function ProductsPage() {
    const categories = [
        {
            id: "meat",
            name: "식육추출가공품",
            desc: "사골농축액, 치킨추출물 등 육류 본연의 깊은 맛",
            image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "sauce",
            name: "복합조미식품",
            desc: "다양한 소스와 시즈닝으로 요리의 완성도를 높이는 맛",
            image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2089&auto=format&fit=crop",
        },
        {
            id: "oil",
            name: "향미유",
            desc: "원재료 본연의 풍미를 그대로 담아 요리의 깊은 맛을 더해주는 프리미엄 오일",
            image: "https://images.unsplash.com/photo-1516684669134-de6d7c47743b?q=80&w=1974&auto=format&fit=crop",
        },
    ];

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat) => (
                            <Link key={cat.id} href={`/products/${cat.id}`} className="group">
                                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl mb-6">
                                    <img src={cat.image} alt={cat.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                                        <h3 className="text-2xl font-black mb-2">{cat.name}</h3>
                                        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                            {cat.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
