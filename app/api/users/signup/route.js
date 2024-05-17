import {connect} from '@/dbconfig/dbconfig';
import User from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs';
import {sendEmail} from '@/helpers/mailer';

connect();

export async function POST (NextRequest){
try {
    const reqBody = await NextRequest.json();
    const {username, firstname, lastname, email, password, phone} = reqBody;
    //validation
    const user = await User.findOne({email})
    if(user) {
        return NextResponse.json({error: "user already exists"},{status: 400})
    }

    const salt = await bcryptjs.genSalt(10);
    const hasedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
        username,
        email,
        password: hasedPassword
    })

    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email
    await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});

    return NextResponse.json({
        message:"user registred successfully",
        success: true,
        savedUser
    })

} catch (error) {
    return NextResponse.json({error: error.message},
        {status: 500}
    )
    
}
}