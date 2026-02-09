import { Metadata } from "next";

export const metadata: Metadata = {
    title: "공지사항",
    description: "신원에프아이의 최신 소식과 공지사항을 확인해 보세요.",
    openGraph: {
        title: "신원에프아이 - 공지사항",
        description: "신원에프아이의 최신 소식과 공지사항을 확인해 보세요.",
        url: '/support/notice',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
