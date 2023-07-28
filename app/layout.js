import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from 'components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhamad Yasmin Nul Hakim',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}