import next from "next";

export default async function Data(){
    const res = await fetch("https://server.artimum.repl.co/" , {next:{revalidate:5}})
    const work = await res.json()
    return(
        <div className="grid">
            { work.map((post)=>{ return(<div className="work"><a href={`${post.url}`}><img style={{width: "100%"}} src={`${post.img}`}></img></a></div>)})}
        </div>
    )
}
