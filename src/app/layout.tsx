import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { inter, titleFont } from './config/fonts'



export const metadata: Metadata = {
  title: 'Teslo  | shop',
  description: 'tienda virtual de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={titleFont.className}>{children}</body>
    </html>
  )
}
