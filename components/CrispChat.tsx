"use client";
import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(()=>{
    Crisp.configure("2c1df1de-70ef-4863-98bc-29acc1696cc6");
  },[])
  return null;
}




