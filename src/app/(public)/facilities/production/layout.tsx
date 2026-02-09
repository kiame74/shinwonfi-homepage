import { Metadata } from "next";

export const metadata: Metadata = {
    title: "생산시설",
    description: "첨단 자동화 설비와 위생적인 생산환경으로 고품질 식품을 생산하는 신원에프아이의 생산시설을 소개합니다.",
    openGraph: {
        title: "신원에프아이 - 생산시설",
        description: "첨단 자동화 설비와 위생적인 생산환경으로 고품질 식품을 생산하는 신원에프아이의 생산시설을 소개합니다.",
        url: '/facilities/production',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
