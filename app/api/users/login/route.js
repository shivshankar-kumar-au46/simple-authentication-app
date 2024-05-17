import {connect} from '@/dbconfig/dbconfig';
import User from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();



export async function POST (NextRequest) {
    try {
        const reqBody = NextRequest.json();
    const {email, password} = reqBody;

    const user = await User.findOne({email: email});

    if(!user){
        return NextResponse.json({message:"User does not exist",status: 500})
    }

    const isValidPassword = await bcryptjs.compare(password, user.password)

    if(!isValidPassword) {
        return NextResponse.json({message:"Invalid password",status:400})
    }

    const tokenData = {
        id : user._id,
        email : user.email,
        username: user.username
    }

    const token = jwt.sign({tokenData:tokenData}, process.env.TOKEN_SECRET,{expiresIn:'1d'})

    const resposne = NextResponse.json({
        message: "Logged in successfully",
        success: true
    })

    resposne.cookies.set("token", token, {
        httpOnly: true
    })

    return resposne
    } catch (error) {
        return NextResponse.json({message : error.message, status: 500})
    }


}