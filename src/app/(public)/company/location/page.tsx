import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "오시는 길",
    description: "경기도 화성시 마도공단에 위치한 신원에프아이 본사 및 공장 위치와 연락처를 안내해 드립니다.",
    openGraph: {
        title: "신원에프아이 - 오시는 길",
        description: "경기도 화성시 마도공단에 위치한 신원에프아이 본사 및 공장 위치와 연락처를 안내해 드립니다.",
        url: '/company/location',
    },
};


export default function LocationPage() {
    return (
        <section id="location" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16 space-y-4">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Location</h3>
                        <h2 className="text-3xl md:text-4xl font-black text-secondary">오시는 길</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto break-keep">
                            (주)신원에프아이는 고객 여러분의 방문을 환영합니다.
                        </p>
                    </div>

                    <div className="bg-gray-100 w-full h-[350px] md:h-[500px] rounded-2xl md:rounded-[2.5rem] overflow-hidden relative shadow-2xl mb-12 md:mb-16">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.6669647863!2d126.8248333!3d37.0611111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b1bc3066304eb%3A0xc383307567705139!2z6rK96riw64-EIOtmleeyseyLnCDemFuZ2FuLW15ZW9uLCBTdXK1b25nLXJvMjk5YmVvbi1naWwsIDE4!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Address & Contact */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl md:rounded-3xl space-y-6">
                            <h3 className="text-lg md:text-xl font-black text-secondary border-b-2 border-gray-200 pb-4">Company Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-1">Address</span>
                                    <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed break-keep">경기도 화성시 장안면 수정로 299번길 18<br />(18445-940)</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-1">Tel & Email</span>
                                    <p className="text-gray-700 font-medium text-sm md:text-base">031-351-0221</p>
                                    <p className="text-gray-700 font-medium text-sm md:text-base">shinwonfi@shinwonfi.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Public Transport */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl md:rounded-3xl space-y-6">
                            <h3 className="text-lg md:text-xl font-black text-secondary border-b-2 border-gray-200 pb-4">Public Transport</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-800 font-bold">
                                        <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] md:text-xs">1</span>
                                        <span className="text-sm md:text-base">수원역 경유</span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-8 break-keep">
                                        시외버스 8851(수원공용버스터미널) → 직행버스 9802(수원역) → <span className="font-bold text-primary">성문 정류장</span> 하차
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-800 font-bold">
                                        <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] md:text-xs">2</span>
                                        <span className="text-sm md:text-base">향남읍 경유</span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-8 break-keep">
                                        일반버스 33-1(향남읍행정복지센터) → <span className="font-bold text-primary">꽃밭 정류장</span> 하차
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl md:rounded-3xl space-y-6">
                            <h3 className="text-lg md:text-xl font-black text-secondary border-b-2 border-gray-200 pb-4">Navigation</h3>
                            <div className="space-y-4">
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    네비게이션에 아래 주소를 입력해주세요.
                                </p>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                                    <p className="font-bold text-secondary text-sm md:text-base break-all">경기도 화성시 장안면 수정로 299번길 18</p>
                                </div>
                                <p className="text-[10px] md:text-xs text-gray-400">
                                    * 방문 전 미리 연락 주시면 더욱 편리하게 안내 받으실 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
