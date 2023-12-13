"use client"
import { useEffect } from "react";
export default function ReRenderHandler() {
    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "script.js";
        document.body.appendChild(script);
        return(()=>{
            document.body.removeChild(script)
        })
    },[])
  return <div></div>;
}