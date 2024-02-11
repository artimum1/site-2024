import './globals.css'

export const metadata = {
  title: 'Artimum',
  description: 'i do web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
