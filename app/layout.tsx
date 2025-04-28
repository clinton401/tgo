import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SBA Grants | $100,000+ Funding for Small Businesses & Entrepreneurs",
  description:
    "SBA provides substantial grants starting at $100,000 to small businesses and entrepreneurs with innovative ideas and growth potential. Apply today to grow your business with our financial support.",
  keywords: [
    "small business grants",
    "business funding",
    "entrepreneur grants",
    "SBA grants",
    "startup funding",
    "business loans",
    "small business administration",
    "business growth",
    "grant application",
    "SBA",
  ],
  authors: [{ name: "SBA Grants" }],
  openGraph: {
    title: "SBA Grants | $100,000+ Funding for Small Businesses & Entrepreneurs",
    description: "Apply for substantial grants starting at $100,000 to fund your business growth and innovation.",
    url: "https://sba-grants.org",
    siteName: "SBA Grants",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SBA Grants | $100,000+ Funding for Small Businesses",
    description: "Apply for substantial grants starting at $100,000 to fund your business growth and innovation.",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
