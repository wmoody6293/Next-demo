import { NextResponse } from "next/server";

export async function GET(){
    try {
       const userLogoutResponse = NextResponse.json({
        message: 'User logged out!',
        success: true,
       }, {status: 200});
       
       //set the existing token to empty and make it expire now
       userLogoutResponse.cookies.set('token', '', {httpOnly: true, expires: new Date(0)});
       return userLogoutResponse;

    } catch (error) {
        return NextResponse.json({error: `error in logout: ${error}`}, {status: 500})
    }
}