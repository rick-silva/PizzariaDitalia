import './globals.css'
import { Roboto_Flex as Roboto, Satisfy} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: "--font-roboto"})
const satisfy = Satisfy({subsets: ['latin'],weight: "400", variable: "--font-satisfy"})

export const metadata = {
  title: 'Pizzaria Ditalia',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${satisfy.variable} font-sans`}>{children}</body>
    </html>
  )
}