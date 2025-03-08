import './globals.css'

export const metadata = {
  title: 'SaaS Platform',
  description: 'Modern SaaS Platform',
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
