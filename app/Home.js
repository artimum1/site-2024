import Script from "next/script";

export default function Home(){
return(
    <div className="Home">

        <div className="slider"><div id="rgbKineticSlider" className="rgbKineticSlider"> </div></div>
        <Script src="Slider.js" />
        <h1 className="p1h1">full-stack<br></br>web developer</h1>
    </div>
)
}