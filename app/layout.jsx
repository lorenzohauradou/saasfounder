import './globals.css'

export const metadata = {
  title: 'saasfounder',
  description: 'Landing page per saasfounder, un SaaS innovativo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
