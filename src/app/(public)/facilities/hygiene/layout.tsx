import { Metadata } from "next";

export const metadata: Metadata = {
    title: "위생관리",
    description: "HACCP 인증 시설과 철저한 품질관리 시스템으로 안전한 식품을 생산하는 신원에프아이의 위생관리 체계를 확인하세요.",
    openGraph: {
        title: "신원에프아이 - 위생관리",
        description: "HACCP 인증 시설과 철저한 품질관리 시스템으로 안전한 식품을 생산하는 신원에프아이의 위생관리 체계를 확인하세요.",
        url: '/facilities/hygiene',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
