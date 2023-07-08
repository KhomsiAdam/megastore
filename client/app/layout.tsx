import './globals.css'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'MegaStore | Client',
  description: 'MegaStore | Client',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        {/* @ts-ignore*/}
        <Navbar />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
