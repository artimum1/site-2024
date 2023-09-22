import Link from "next/link";

export default function Nav(){
    return(
        <div className="Nav">
        <Link href={"/"}>Home</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/Works"}>Works</Link>
        </div>
    )
}