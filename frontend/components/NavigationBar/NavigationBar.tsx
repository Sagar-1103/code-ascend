"use client";
// import Image from "next/image";
// import Logo from "@/public/Code-Ascend-logo.png";
import Link from "next/link";
import { Bell, Flame, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {motion} from "framer-motion";

export default function NavigationBar() {
  const navLinks = [
    { linkName: "Home", url: "/" },
    { linkName: "Problems", url: "/problemset" },
    { linkName: "Contest", url: "/contest" },
    // { linkName: "Discuss", url: "/discuss" },
    // { linkName: "Store", url: "/store" },
  ];
  const { setTheme, theme } = useTheme();

  const streak = 1;
  return (
    <nav>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        
        style={{
          background:
            "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
          boxShadow: "rgba(0, 0, 0, 0.25) 2px 2px 12px 2px",
          backdropFilter: "blur(5px)",
        }}
        className="fixed top-4 min-w-fit lg:min-w-[55%] md:w-[600px] justify-between w-[70%] mx-auto left-4 right-4 bg-transparent text-white shadow-lg h-[80px] rounded-lg flex items-center backdrop-filter backdrop-blur-2xl z-50"
      >
        <div className="flex space-x-6 items-center text-black dark:text-white">
          {/* <Image
            src={Logo}
            height={60}
            width={60}
            alt="Logo"
            className="mx-5"
          /> */}
          <p className=" mx-5 font-bold text-xl">
            CodeAscend
          </p>
          <SignedIn>
            {navLinks.map((navLink, index) => (
              <Link key={index} href={navLink.url}>
                {navLink.linkName}
              </Link>
            ))}
          </SignedIn>
        </div>
        <div className="flex justify-items-end space-x-5 mx-10">
          <SignedIn>
            <Link href={"/"} className="flex items-center">
              <Bell className="dark:text-yellow-300 dark:fill-yellow-300 fill-black text-black" />
              <p className="text-lg">{""}</p>
            </Link>
            <Link href={"/"} className="flex items-center">
              <Flame
                fill={streak ? "#FF7400" : theme === "dark" ? "black" : "white"}
                color={
                  streak ? "#FF7400" : theme === "dark" ? "white" : "black"
                }
              />
              <p className="text-lg font-bold text-black dark:text-white">
                {streak}
              </p>
            </Link>
          </SignedIn>

          <div
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            className="flex cursor-pointer select-none items-center"
          >
            {theme === "light" ? (
              <Moon fill="black" color="black" />
            ) : (
              <Sun fill="white" color="white" />
            )}
            <p className="text-lg">{""}</p>
          </div>

          <SignedOut>
            <SignInButton>
              <Button
                variant="login"
                size="lg"
                className={` justify-between my-3 mx-2`}
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

        </div>
      </motion.div>
    </nav>
  );
}
