import Image from "next/image"
import Link from "next/link"
export default function About(){
    return(
        <div>
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
                            <a href="#" className="link">Github</a>
                            <a href="#" className="link">Instagram</a>
                            <a href="#" className="link">Youtube</a>
                            <a href="#" className="link">Discord</a>
                        </div>
                    </div>
            </div>
            <div className="cvbottom">
            <p className="cvdes">I Do development and design , since i have a good knowledge in art and designing .  check my <Link className="linky" href={"Works"} >Works</Link> I also can make API and back-end services , I have knowledge enough in libraries & AI . checking my <a href="#" className="linky">Github</a> account is a good start for you , i have published good amount of Free demos and projects on <a href="#" className="linky">replit</a> accoutn also , I have the superpower of front-end and designing  along my back-end  and little details that makes your users happy , I’m capable to work with teams , give advices , understand your vision and getting the job done at the best quality and the shortest period <br></br>here is my skills :</p>
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
            <div className="link email">ArtimumX@gmail.com</div>
        </div>
        </div>
    )
}