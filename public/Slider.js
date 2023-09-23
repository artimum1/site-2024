let images = ["src/imgg.jpg"];
let texts = [[""]];

function createNewSlider() {

      new rgbKineticSlider({
        slideImages: images,
        itemsTitles: texts,
        backgroundDisplacementSprite: "src/2.jpg",
        cursorDisplacementSprite: "src/1.png",
        cursorScaleIntensity: 0.5,
        cursorMomentum: 0.14,

        swipe: false,
        swipeDistance: window.innerWidth * 0.4,
        swipeScaleIntensity: 2,

        slideTransitionDuration: 0.8,
        transitionScaleIntensity: 30,
        transitionScaleAmplitude: 160,
    });
}

createNewSlider()
