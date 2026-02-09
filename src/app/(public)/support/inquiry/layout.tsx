import { Metadata } from "next";

export const metadata: Metadata = {
    title: "문의하기",
    description: "신원에프아이의 제품과 서비스에 대해 궁금하신 사항을 문의해 주세요.",
    openGraph: {
        title: "신원에프아이 - 문의하기",
        description: "신원에프아이의 제품과 서비스에 대해 궁금하신 사항을 문의해 주세요.",
        url: '/support/inquiry',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
