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
    <div className="">
      
    </div>
  )
}

export default LandingNavbar