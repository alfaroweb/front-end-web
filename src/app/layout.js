// import { Montserrat } from 'next/font/google'
// import './globals.css'
// import Header from './ui/Header'
// import Footer from './ui/Footer'
// import { Partytown } from '@builder.io/partytown/react'
// import Script from 'next/script'

// const montserrat = Montserrat({ subsets: ['latin'] })

// export default function RootLayout({ children }) {
//   return (
//     <html lang='es'>
//       <body
//         className={`${montserrat.className} relative grid min-h-screen grid-rows-[80px,1fr,auto] bg-[#e7e8e9] text-custom-black-light`}
//       >
//         <Header />
//         {children}
//         <Footer />

//         {/* Google Tag Manager script using Partytown */}
//         <script
//           type='text/partytown'
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-TZPMSMV5');
//             `
//           }}
//         />

//         {/* Cookiebot script */}
//         <Script
//           id='Cookiebot'
//           src='https://consent.cookiebot.com/uc.js'
//           data-cbid={process.env.COOKIEBOT_CBID}
//           data-blockingmode='auto'
//           type='text/javascript'
//           strategy='beforeInteractive'
//           async={true}
//         />

//         {/* Partytown setup to forward dataLayer.push */}
//         <Partytown forward={['dataLayer.push']} />

//         {/* Noscript fallback for GTM */}
//         <noscript>
//           <iframe
//             src='https://www.googletagmanager.com/ns.html?id=GTM-TZPMSMV5'
//             height='0'
//             width='0'
//             style={{ display: 'none', visibility: 'hidden' }}
//           ></iframe>
//         </noscript>
//       </body>
//     </html>
//   )
// }

import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { Partytown } from '@builder.io/partytown/react'

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
        {/* Cookiebot script */}
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
      <GoogleTagManager gtmId='GTM-TZPMSMV5' />
    </html>
  )
}
