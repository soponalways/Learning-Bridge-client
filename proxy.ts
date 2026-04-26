import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import userService from './services/user.services';

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    let isAuthenticated = false;
    let isAdmin = false;
    let isTutor = false;
    let isStudent = false;
    const sessionData = await userService.getSession();
    const { data } = sessionData;
    if (data) {
        isAuthenticated = true;
        isAdmin = data.user.role === "ADMIN";
        isTutor = data.user.role === "TUTOR";
        isStudent = data.user.role === "STUDENT";
    }
    console.log({
        isAuthenticated,
        isAdmin,
        isTutor,
        isStudent
    });
    // * Check if the user is authenticated before allowing access to dashboard routes
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // * Redrect users on Admin Dashboard
    if (isAdmin && (pathname.startsWith("/dashboard") || pathname.startsWith("/tutor-dashboard"))) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }
    // * Redrect users on Tutor Dashboard
    if (isTutor && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin-dashboard"))) {
        return NextResponse.redirect(new URL("/tutor-dashboard", request.url))
    }
    // * Redrect users on Student Dashboard
    if (isStudent && (pathname.startsWith("/admin-dashboard") || pathname.startsWith("/tutor-dashboard"))) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard',
        '/dashboard/:path*',
        "/admin-dashboard",
        "/admin-dashboard/:path*",
        "/tutor-dashboard",
        "/tutor-dashboard/:path*"
    ],

}