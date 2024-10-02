import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import Footer from './ui/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} relative grid min-h-screen grid-rows-[80px,1fr,auto] bg-[#e7e8e9] text-custom-black-light`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
