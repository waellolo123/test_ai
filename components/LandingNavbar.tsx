"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

const LandingNavbar = () => {
 const {isSignedIn} = useAuth();

  return (
    <nav className="py-4 px-4 md:px-10 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
       <div className="relative h-8 w-8 mr-4">
        <Image src="/logo.jpg" alt="Logo" layout="fill"/>
       </div>
       <h1 className={cn("text-3xl font-bold text-slate-800", font.className)}>Rumble</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">Get Started</Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar;

