
import { useState } from "react";
import {users} from "../data/user.json";
import CustomButton from "./customButton";

console.log(users,'users')


export default function UserCard(props) {
    const {userData, buttonOnClick, followData} = props;
    return (
        <div className="border shadow-lg rounded relative flex flex-col gap-8 w-[300px] h-[200px] justify-center items-center">
            <div className="flex flex-col">
            <span>Name : {userData.name}</span>
            <span>Username : {userData.username}</span>
            </div>
            <CustomButton buttonOnClick={() => buttonOnClick(userData)} buttonText={!followData ? "follow+" : "unfollow-"} buttonStyle={"absolute bottom-4 right-4 shadow-lg"}/>
        </div>

    )

}
