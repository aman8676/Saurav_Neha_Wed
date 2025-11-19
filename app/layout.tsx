import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poiret_One } from "next/font/google"
import { Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingDockDemo } from "@/components/BottomNav"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] })
const _poiret = Poiret_One({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "Sourabh & Neha Wedding - November 24, 2025",
  description: "Celebrate the union of two hearts - A beautiful wedding website with countdown and memories",
  generator: "",
  icons: {
    icon: [
      {
        url: "/hand_knot2.png",
        type: "image/png",
      },
  ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <FloatingDockDemo/>
        {children}
        {/* <BottomNav /> */}
        <Analytics />
      </body>
    </html>
  )
}
