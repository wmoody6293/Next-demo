import { NextResponse, NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const urlPath = request.nextUrl.pathname;
    //all possible paths saved as booleans depending on the request nextURL path
    const homePageRoute = urlPath === '/';
    const registerPage = urlPath === '/register';
    const loginPage = urlPath === '/login'
    const dashboardPage = urlPath === '/dashboard'
    const tokenInBrowser = request.cookies.get('token')?.value;
    if(homePageRoute && !tokenInBrowser || dashboardPage && !tokenInBrowser){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if(registerPage && tokenInBrowser || loginPage && tokenInBrowser){
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
    if(homePageRoute && tokenInBrowser){
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
    }
}

export const config = {
    matcher: ['/', '/register', '/login', '/dashboard']
}