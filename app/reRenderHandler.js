"use client"
    import { useEffect } from "react";

export default function ReRenderHandler(){
    
    const script = document.createElement("script");
    script.src = "script.js"
    useEffect(()=>{
        document.body.appendChild(script);
    },[])
    return(
        <div></div>
    )
}