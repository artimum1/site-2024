import './globals.css'

export const metadata = {
  title: 'Artimum',
  description: 'i do web development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.min.js"></script>
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
