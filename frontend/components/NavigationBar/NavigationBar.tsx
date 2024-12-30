"use client"
import Image from "next/image";
import Logo from "@/public/Code-Ascend-logo.png";
import Link from "next/link";
import { Bell, CircleUser, Flame, Moon } from "lucide-react";

export default function NavigationBar() {
  const navLinks = [
    // { linkName: "Explore", url: "/explore" },
    { linkName: "Problems", url: "/problemset" },
    { linkName: "Contest", url: "/contest" },
    // { linkName: "Discuss", url: "/discuss" },
    { linkName: "Store", url: "/store" },
  ];

  const streak = 1;
  return (
    <div className="bg-[#16161d] text-white h-[60px] w-full flex items-center  border-solid border-b-[1px] border-gray-600">
      <div className="flex justify-between w-[70%] mx-auto">
        <div className="flex space-x-6 items-center">
          <Image
            src={Logo}
            height={60}
            width={60}
            alt="Logo"
            className="mx-5"
          />
          {navLinks.map((navLink, index) => (
            <Link key={index} href={navLink.url}>
              {navLink.linkName}
            </Link>
          ))}
        </div>
        <div className="flex justify-items-end space-x-5 mx-10">
          <Link href={"/"} className="flex items-center">
            <Bell />
            <p className="text-lg">{""}</p>
          </Link>
          <Link href={"/"} className="flex items-center">
            <Flame fill={streak ? "#FF7400":""} color={streak ? "#FF7400":"white"}/>
            <p className="text-lg">{streak}</p>
          </Link>
          <Link href={"/"} className="flex items-center">
            <Moon fill="white" color="white"/>
            <p className="text-lg">{""}</p>
          </Link>
          {/* <Link href={"/"} className="flex items-center">
            <Sun fill="white" color="white"/>
            <p className="text-lg">{""}</p>
          </Link> */}
          <Link href={"/"} className="flex items-center">
            <CircleUser />
            <p className="text-lg">{""}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
