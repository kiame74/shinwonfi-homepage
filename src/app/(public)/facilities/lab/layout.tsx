import { Metadata } from "next";

export const metadata: Metadata = {
    title: "기업부설연구소",
    description: "맛과 안전성을 넘어선 고품질 제품을 위한 신원에프아이의 연구개발 역량을 소개합니다.",
    openGraph: {
        title: "신원에프아이 - 기업부설연구소",
        description: "맛과 안전성을 넘어선 고품질 제품을 위한 신원에프아이의 연구개발 역량을 소개합니다.",
        url: '/facilities/lab',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
