import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                            SHINWON FI
                        </h2>
                        <p className="text-sm leading-relaxed mb-6 max-w-md">
                            신원에프아이는 건강하고 정직한 식품 문화를 선도합니다. <br />
                            지속적인 연구개발과 철저한 품질관리로 고객님께 최적의 맛과 품질을 제공합니다.
                        </p>
                        <div className="text-xs text-gray-500 space-y-1">
                            <p>주소: 경기도 화성시 장안면 수정로 299번길 18</p>
                            <p>대표자: 조화연 | 사업자등록번호: 124-81-59146</p>
                            <p>전화: 031-351-0221 | 팩스: 031-351-0229</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">고객지원</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/support" className="hover:text-primary transition-colors">
                                    공지사항
                                </Link>
                            </li>
                            <li>
                                <Link href="/support/contact" className="hover:text-primary transition-colors">
                                    문의하기
                                </Link>
                            </li>
                            <li>
                                <Link href="/policy/privacy" className="hover:text-primary transition-colors">
                                    개인정보처리방침
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">제품안내</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/products/meat" className="hover:text-primary transition-colors">
                                    식육추출가공품
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/sauce" className="hover:text-primary transition-colors">
                                    복합조미식품
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/hmr" className="hover:text-primary transition-colors">
                                    HMR (가정간편식)
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-gray-600 gap-4">
                    <p>Copyright © 2015 ~ 2026 (주) 신원에프아이. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <span className="cursor-pointer hover:text-white transition-colors">관리자 로그인</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
