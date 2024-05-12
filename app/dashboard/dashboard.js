"use client"
import UserCard from "@/components/usercard";
import { useState } from "react";
import users from "../../data/user.json"
import Footer from "../footer";
import Header from "../header";

export default function Dashboard() {
    const [userData, setUserData] = useState({ users })
    const [followData, setFollowData] = useState(false)
    const [lengthoffollwer, setLengthoffollwer] = useState([])

    const handleIcon = (user) => {
        if (lengthoffollwer.includes(user)) {
            setLengthoffollwer((prevLengthoffollwer) =>
                prevLengthoffollwer.filter((item) => item !== user)
            );
            // setFollowData(false)
        } else {
            setLengthoffollwer((prevLengthoffollwer) => [...prevLengthoffollwer, user])
            if (userData.users.map(item => item.id).includes(user.id)) {
                // setFollowData(true)
            }
        }
    }
    return (

        <div className="flex gap-4 justify-between w-full flex-wrap mt-[77px] mb-[77px]">
            <Header count={lengthoffollwer.length} />
            {
                userData.users.map((item, index) => (
                    <UserCard followData={followData} buttonOnClick={handleIcon} key={index} userData={item} />

                ))
            }
            <Footer />
        </div>
    )
}