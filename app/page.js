"use client"
import { useState } from "react";
import Dashboard from "./dashboard/dashboard";
import Footer from "./footer";
import Header from "./header";
import Login from "./login/login";

export default function Page() {
  const [count, setCount] = useState(0)
  return (
    <div className="">
      <Login/>
     </div>
  );
}
