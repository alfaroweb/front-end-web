import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${montserrat.className} relative grid min-h-screen grid-rows-[80px,1fr,auto] bg-[#e7e8e9] text-custom-black-light`}
      >
        <Header />
        {children}
        <Footer />
        <Script
          id='Cookiebot'
          src='https://consent.cookiebot.com/uc.js'
          data-cbid={process.env.COOKIEBOT_CBID}
          data-blockingmode='auto'
          type='text/javascript'
          strategy='beforeInteractive'
          async={true}
        />
      </body>
      <Script
        src='https://www.googletagmanager.com/gtm.js?id=GTM-TZPMSMV5'
        strategy='afterInteractive'
        onLoad={() => console.log('GTM script loaded successfully')}
        onError={(e) => console.error('Error loading GTM script', e)}
      />
    </html>
  )
}
