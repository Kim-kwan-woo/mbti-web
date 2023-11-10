import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MBTI 테스트',
  description: '70개의 문항으로 간단한 MBTI 테스트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>MBTI 테스트</title>
        </Head>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
