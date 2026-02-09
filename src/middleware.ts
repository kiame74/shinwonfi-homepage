import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

/**
 * Next.js Middleware
 * /ecms 및 /api/ecms 경로에 대한 접근 권한 확인
 */
export async function middleware(request: NextRequest) {
    const session = await getSession();
    const { pathname } = request.nextUrl;

    // /ecms 또는 /api/ecms 으로 시작하는 경로에 대해 세션 확인
    if (pathname.startsWith("/ecms") || pathname.startsWith("/api/ecms")) {

        // 1. 관리자 페이지 보호
        if (pathname.startsWith("/ecms")) {
            // 로그인 페이지 처리
            if (pathname === "/ecms/login") {
                // 이미 로그인된 경우 대시보드로 리다이렉트
                if (session) return NextResponse.redirect(new URL("/ecms", request.url));
                return NextResponse.next();
            }

            if (!session) {
                // 세션이 없으면 로그인 페이지로 리다이렉트
                return NextResponse.redirect(new URL("/ecms/login", request.url));
            }
        }

        // 2. API 보호
        if (pathname.startsWith("/api/ecms")) {
            if (!session) {
                return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
            }
        }
    }

    return NextResponse.next();
}

// 미들웨어가 적용될 경로 설정
export const config = {
    matcher: ["/ecms/:path*", "/api/ecms/:path*"],
};
