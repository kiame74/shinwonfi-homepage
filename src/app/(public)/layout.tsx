import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
