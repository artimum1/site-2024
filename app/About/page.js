import Image from "next/image"
import ReRenderHandler from "./reRenderHandler"
import Link from "next/link"
export default function About(){
    return(
        <div>
            <ReRenderHandler />
        <div className="pageTransition"></div>
        <div className="page">

            <div className="cv">
                <div className="cvtop">
                    <div className="my-photo"></div>
                    <div className="cvtoptexts">
                        <p className="cvtitles">FULL-STACK WEB DEV</p>
                        <p className="cvtitles">Skilled in web development technologies</p>
                        <p className="cvtitles">A mixture of ART and PROGRAMMING </p>
                        <div className="links">
                            <a target="_blank" href="https://github.com/artimum1" className="link">Github</a>
                            <a target="_blank" href="https://www.instagram.com/artimum1/" className="link">Instagram</a>
                            <a target="_blank" href="https://www.youtube.com/@artimum" className="link">Youtube</a>
                            <a target="_blank" href="https://discord.gg/EhfJuPSzNf" className="link">Discord</a>
                        </div>
                    </div>
            </div>
            <div className="cvbottom">
            <p className="cvdes baffle">my name is artimum and i'm a 17 year old web-developer , i'm interested in math , physics , computer stuff , chess and art. i do some code demos sometimes , check them on my <a className="linky" href="https://github.com/artimum1">Github</a> or on <a className="linky" href="https://replit.com/artimum">Replit</a> , i share my arts usually on my <a className="linky" href="https://instagram.com/artimum1">Instagram</a> by the way if you are interested also , lets be friends contact me on discord i always reply</p>
            </div>
            </div>
            <div className="cardds">
            
            <div className="cardd">
                <div className="cardtitle">FrameWorks:</div>
                <div className="stuff">
                    
                    <div className="card"><img draggable="false" src="src/icons/card1.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card2.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card3.svg"></img></div>
                </div>
            </div>

            <div className="cardd">
                <div className="cardtitle">Languages:</div>
                <div className="stuff">
                    
                    <div className="card"><img draggable="false" src="src/icons/card4.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card5.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card6.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card7.svg"></img></div>
                </div>
            </div>

            <div className="cardd">
                <div className="cardtitle">Technologies:</div>
                <div className="stuff">
                    
                    <div className="card"><img draggable="false" src="src/icons/card8.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card9.svg"></img></div>
                    <div className="card"><img draggable="false" src="src/icons/card10.svg"></img></div>
                </div>
            </div>

            </div>

            <p className="emailT">contact with me on :</p>
            <a href="mailto:artimumx@gmail.com" className="link email">ArtimumX@gmail.com</a>
        </div>
        </div>
    )
}