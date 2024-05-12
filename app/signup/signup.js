"use client"
import Button from "@/components/customButton";
import CustomInput from "@/components/custominput";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const onUserValueChange = (e,field) => {
    
    let modifyUser = {...user}
    if(field === "name"){
      modifyUser.name = e.target.value;
    }else {
      modifyUser.email = e.target.value;
    }

    setUser(modifyUser);
  }
  const hanleLogin = (e) => {
    e.preventDefault();
    alert("hi")
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-[url(https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
      
      <form className="w-1/4 flex gap-6 flex-col px-6 h-96 justify-center rounded-lg shadow bg-transparent" onSubmit={hanleLogin}>
      <div className="flex text-start items-start justify-start w-full">
      <span className="text-3xl font-bold text-start text-white">SignUp Form</span>
      </div>
      <CustomInput inputValue={user.name} inputCalander={"text"} inputStyle={""} inputOnChange={(e)=>onUserValueChange(e,"firstName")}  inputPlaceholder={"enter your first name"} />
        <CustomInput inputValue={user.name} inputCalander={"text"} inputOnChange={(e)=>onUserValueChange(e,"lastName")}  inputPlaceholder={"enter your last name"} />
        <CustomInput inputValue={user.name} inputCalander={"email"} inputOnChange={(e)=>onUserValueChange(e,"email")}  inputPlaceholder={"enter your email"} />
        <CustomInput inputValue={user.name} inputCalander={"password"} inputOnChange={(e)=>onUserValueChange(e,"password")}  inputPlaceholder={"enter your password"} />
        <CustomInput inputValue={user.email} inputCalander={"number"} inputOnChange={(e)=>onUserValueChange(e,"phone")} inputPlaceholder={"enter phone number"} />
        <CustomInput inputValue={user.email} inputOnChange={(e)=>onUserValueChange(e,"username")} inputPlaceholder={"enter username"} />
        <Button buttonType={"submit"} buttonStyle={"bg-rose-500"} buttonText={"Submit"} />
        <Link className="text-white font-semibold text-lg" href={"/login"}>Already have an account !</Link>
      </form>
    </div>
  );
}
