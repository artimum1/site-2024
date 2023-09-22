import './globals.css'
import Nav from './Nav'


export const metadata = {
  title: 'Artimum',
  description: 'artimum is a full-stack web developer skilled in web development technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        </body>
    </html>
  )
}
