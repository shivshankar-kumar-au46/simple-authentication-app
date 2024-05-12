"use client"
import Button from "@/components/customButton";
import CustomInput from "@/components/custominput";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onUserValueChange = (e,field) => {
    
    let modifyUser = {...user}
    if(field === "email"){
      modifyUser.email = e.target.value;
    }else {
      modifyUser.password = e.target.value;
    }

    setUser(modifyUser);
  }
  const hanleLogin = (e) => {
    e.preventDefault();
    alert("hi")
  };
  return (
    <div className="flex flex-col items-center bg-cover bg-no-repeat justify-center h-screen bg-[url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
      
      <form className="w-1/4 flex gap-6 flex-col px-6 h-96 justify-center rounded-lg shadow bg-transparent" onSubmit={hanleLogin}>
      <div className="flex text-start items-start justify-start w-full">
      <span className="text-3xl font-bold text-start text-white">Login Form</span>
      </div>
        <CustomInput inputValue={user.email} inputCalander={"email"} inputOnChange={(e)=>onUserValueChange(e,"email")} inputPlaceholder={"enter email"} />
        <CustomInput inputValue={user.password} inputCalander={"password"} inputOnChange={(e)=>onUserValueChange(e,"password")} inputPlaceholder={"enter password"} />
        <Button buttonType={"submit"} buttonStyle={"bg-rose-500"} buttonText={"Submit"} />
        <Link className="text-white font-semibold text-lg" href={"/signup"}>Create an Account</Link>
      </form>
    </div>
  );
}
