
import {connect} from '@/dbconfig/dbconfig';
import { NextResponse, NextRequest } from 'next/server';
connect();

export async function GET(NextRequest){
try {
    const response = NextResponse.json({
        message:"Logout sucessfully",
        success: true
    })

    response.cookies.set({"token": ""}, {httpOnly: true, expires: new Date(0)})

    return response;

} catch (error) {
    return NextResponse.json({message : error.message, status: 500})
}
}