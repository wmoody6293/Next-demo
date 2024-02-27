import {connectDB} from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import {generateToken} from '@/shared/generateToken';

connectDB();

const findExistingUser = async (user:string) => {
    if(user.includes('@')){
        //email was inputted
        const dbUser = await User.findOne({email: user})
        return dbUser ? dbUser : null;
    }else{
        //username was inputted
        const dbUser = await User.findOne({username: user})
        return dbUser ? dbUser : null;
    }
}
//POST route to create a new user in DB
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {user, password} = reqBody;
        //check if user already exists
        const existingUser = await findExistingUser(user);
        if(existingUser){
            const passwordsMatch = await bcryptjs.compare(password, existingUser.password);
            if(passwordsMatch){
                const user = {
                    username: existingUser.username,
                    email: existingUser.email,
                    id: existingUser._id,
                    token: generateToken(existingUser._id)
                }
                const response = NextResponse.json({
                    message: 'User found!',
                    success: true,
                    user: user
                }, {status: 200});
                response.cookies.set('token', user.token, {httpOnly: true})
                return response;
            }else{
                return NextResponse.json({
                    error: "passwords do not match!"
                }, {status: 401})
            }
        }
        return NextResponse.json({
            message: 'User not in DB!',
            success: false,
            user: null
        }, {status: 400});
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}