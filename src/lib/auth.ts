import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "shinwon-admin-secret-key-change-this-in-production"; // 실제 환경에서는 .env 사용 권장
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h") // 2시간 유효
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function login(user: { id: string; username: string; name: string }) {
    // 토큰 생성
    const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2시간
    const session = await encrypt({ user, expires });

    // 쿠키에 저장
    const cookieStore = await cookies();
    cookieStore.set("session", session, {
        expires,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.set("session", "", { expires: new Date(0), path: "/" });
}

import { cache } from "react";

export const getSession = cache(async () => {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
});

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    // 세션 갱신 (선택적)
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
        path: "/",
    });
    return res;
}
