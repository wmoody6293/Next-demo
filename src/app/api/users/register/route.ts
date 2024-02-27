import {connectDB} from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import {generateToken} from '@/shared/generateToken';

connectDB();

const findExistingUser = async (username:string, email:string) => {
    const userEmail = await User.findOne({email});
    const userUsername = await User.findOne({username});
    const user = userEmail ? [userEmail, 'email'] : userUsername ? [userUsername, 'username'] : null;
    return user;
}
//POST route to create a new user in DB
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        //check if user already exists
        const user = await findExistingUser(username, email);
        if(user){
            return NextResponse.json({error: `A user with this ${user[1]} already exists`}, {status: 400})
        }

        //if no user, hash password and create user
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        //save newUser to DB
        const savedUser = await newUser.save();
        const returnedUser = {
            id: savedUser._id,
            email: savedUser.email,
            username: savedUser.username,
            token: generateToken(savedUser._id)
        }
        const response = NextResponse.json({
            message: 'User created!',
            success: true,
            user: returnedUser
        }, {status: 200});
        response.cookies.set('token', returnedUser.token, {httpOnly: true})
        return response;
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
