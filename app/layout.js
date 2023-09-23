import './globals.css'
import Nav from './Nav'
import Header from './Header'
import Home from './Home'

export const metadata = {
  title: 'Artimum',
  description: 'artimum is a full-stack web developer skilled in web development technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
      <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/TweenMax.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/imagesLoaded.pkgd.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/pixi.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/libs/pixi-filters.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/hmongouachon/rgbKineticSlider/js/rgbKineticSlider.js"></script>
      </head>

      <body>
        <Nav />
        <Header />
        <Home />
        {children}
        </body>
    </html>
  )
}
