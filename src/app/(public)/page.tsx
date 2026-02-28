"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    title: <>신원에프아이가 만드는 <br /> <span className="text-primary italic">정직한</span> 맛의 기준</>,
    subtitle: "STAY HEALTHY, STAY HONEST",
    desc: "1996년부터 이어온 장인정신으로 최고의 원재료만을 엄선하여 건강하고 풍요로운 식탁을 만들어 갑니다."
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    title: <>자연의 순수함을 <br /> <span className="text-primary italic">기술</span>에 담다</>,
    subtitle: "PURE NATURE, SMART TECH",
    desc: "첨단 자동화 설비와 엄격한 위생 관리 시스템을 통해 식품의 안전과 본연의 맛을 동시에 실현합니다."
  },
  {
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    title: <>함께 성장하는 <br /> <span className="text-primary italic">글로벌</span> 파트너</>,
    subtitle: "GROW TOGETHER, WORLDWIDE",
    desc: "OEM/ODM 전문 역량을 바탕으로 고객사의 성공을 함께 디자인하며 식문화 리더로 도약합니다."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[900px] flex items-center overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={slides[currentSlide].image}
              alt="Slide"
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-20 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl space-y-6"
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">
                {slides[currentSlide].subtitle}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-tight break-keep">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-medium break-keep">
                {slides[currentSlide].desc}
              </p>
              <div className="pt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <button className="min-h-[48px] w-full sm:w-auto bg-primary hover:bg-emerald-600 text-white px-10 py-4 sm:py-5 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center">
                  회사 소개 보기
                </button>
                <button className="min-h-[48px] w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 sm:py-5 rounded-full font-bold transition-all flex items-center justify-center">
                  제품 라인업
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 right-12 z-20 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 min-h-[44px] flex items-center justify-center transition-all duration-500 rounded-full cursor-pointer relative ${idx === currentSlide ? 'w-12 bg-primary' : 'w-3 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* Invisible touch target expander */}
              <span className="absolute inset-x-[-10px] inset-y-[-16px]"></span>
            </button>
          ))}
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20 space-y-4">
              <h3 className="text-primary font-bold uppercase tracking-widest">Business Areas</h3>
              <h2 className="text-4xl md:text-5xl font-black text-secondary">주요 사업 영역</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                신원에프아이는 식재료의 본질을 연구하며, <br className="hidden md:block" />
                가장 건강하고 맛있는 식품 솔루션을 제안합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "식육추출 가공품",
                desc: "엄선된 원료를 정성껏 추출한 육수와 농축액",
                icon: "🥩",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
              },
              {
                title: "복합조미 식품",
                desc: "요리의 완성도를 높여주는 풍부한 맛의 소스",
                icon: "🍯",
                image: "https://images.unsplash.com/photo-1595855729738-87b64263e8c9?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "HMR / RTC",
                desc: "가정에서 간편하게 즐기는 프리미엄 간편식",
                icon: "🍲",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
              },
            ].map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-20">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform">
                      {area.icon}
                    </div>
                    <h4 className="text-2xl font-black mb-2">{area.title}</h4>
                    <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      {area.desc}
                    </p>
                    <button className="w-fit text-primary font-bold flex items-center space-x-2 border-b border-primary pb-1 min-h-[44px]">
                      <span>상세보기</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Strength Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <ScrollReveal className="flex-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative bg-gray-100 rounded-[2rem] md:rounded-[4rem] overflow-hidden aspect-square shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154341098-e4e150004516?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 bg-secondary p-6 md:p-10 rounded-2xl md:rounded-[3rem] text-white shadow-2xl space-y-2 md:space-y-4 max-w-[200px] md:max-w-[300px]">
                  <h5 className="text-2xl md:text-3xl font-black text-primary italic">25+</h5>
                  <p className="font-medium text-xs md:text-gray-300">식품 하나만을 연구해온 신원의 고집스러운 시간입니다.</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex-1 space-y-12">
              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-primary font-bold uppercase tracking-widest">Our Strengths</h3>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight break-keep">
                    최상의 맛은 <br />
                    안전에서 시작됩니다.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "위생 관리", desc: "HACCP 인증 기반의 엄격한 공정 및 품질 관리 시스템", icon: "🛡️" },
                  { title: "R&D 연구소", desc: "독자적인 배합 기술로 차별화된 맛의 솔루션 제공", icon: "🧬" },
                  { title: "자동화 설비", desc: "고정밀 자동 충진 및 추출 설비로 대량 생산 가능", icon: "⚙️" },
                  { title: "고객 맞춤 서비스", desc: "OEM / ODM 전담 팀을 통한 원스톱 제품 개발", icon: "🤝" },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={0.3 + idx * 0.1}>
                    <div className="space-y-4 group">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-primary transition-colors group-hover:rotate-12">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnership / Notice Preview Section */}
      <section className="py-32 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 transform translate-x-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-primary font-bold uppercase tracking-widest">Customer Support</h3>
                <h2 className="text-4xl md:text-5xl font-black">무엇을 도와드릴까요?</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <button className="min-h-[44px] bg-white text-secondary px-8 py-3 w-full md:w-auto md:py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                자세히 보기
              </button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal delay={0.3}>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors cursor-pointer group">
                <h4 className="text-xl font-bold flex items-center justify-between">
                  <span>공지사항</span>
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </h4>
                <div className="space-y-4">
                  <p className="text-gray-400 group-hover:text-white transition-colors truncate">신원에프아이 홈페이지 리뉴얼 안내</p>
                  <p className="text-gray-400 group-hover:text-white transition-colors truncate">2026년 설 연휴 배송 일정 공지</p>
                  <p className="text-gray-400 group-hover:text-white transition-colors truncate">HACCP 정기 위생 점검 결과 안내</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors cursor-pointer">
                <h4 className="text-xl font-bold">상담 및 문의</h4>
                <div className="space-y-2">
                  <p className="text-primary text-3xl font-black">031-357-1234</p>
                  <p className="text-gray-400">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="bg-primary p-10 rounded-[3rem] space-y-6 shadow-2xl shadow-primary/20 transform hover:-translate-y-2 transition-transform cursor-pointer">
                <h4 className="text-xl font-bold text-white">온라인 문의하기</h4>
                <p className="text-emerald-100">프로젝트 의뢰나 대량 구매 상담이 필요하신가요? 지금 바로 문의해 주세요.</p>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0015.003 4H4.997a2 2 0 00-1.994 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
