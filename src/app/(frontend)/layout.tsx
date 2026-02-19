import React from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './styles.css'

export const metadata = {
  description: 'Dr V P Kanakaraddi Memorial College Of Nursing - Affiliated to RGUHS, Recognized by Govt of Karnataka.',
  title: 'Dr V P Kanakaraddi Memorial College Of Nursing',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="site-body">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
