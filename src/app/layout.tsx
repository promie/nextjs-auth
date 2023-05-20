import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@components/Providers'
import AppBar from '@components/AppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS Authentication',
  description: 'NextJS Authentication using NextAuth',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
