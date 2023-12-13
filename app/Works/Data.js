"use client"
export default async function Data(){
    const res = await fetch("https://server.artimum.repl.co/",{cache:"no-cache"})
    const work = await res.json()
    return(
        <div className="grid">
            { work.map((post)=>{ return(<div className="work"><a target="_blank" href={`${post.url}`}><img style={{width: "100%"}} src={`${post.img}`}></img></a></div>)})}
        </div>
    )
}
