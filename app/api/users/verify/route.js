import User from "@/models/userModel";
import {connect} from '@/dbconfig/dbconfig';
import { NextResponse, NextRequest } from 'next/server';

connect();


export async function POST (NextRequest) {
    try {
        const reqBody = NextRequest.json();
    const {token} = reqBody;

    const user = await User.findOne({verifyToken:token, verifyTokenExpiry: {$gt: Date.now()}});

    if(!user) {
        return NextResponse.json({error:"Invalid token"},{status:400})
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();

    return NextResponse.json({message:"verifyed successfully", success: true},{status: 200});
    } catch (error) {
        return NextResponse.json({message:"verify failed", error: error.message},{status:500})
    }
}