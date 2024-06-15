import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {Footer, Header} from "@/components/layout"

const inter = Inter({subsets: ["latin"],display:"swap"})

export const metadata: Metadata = {
  title: {
    template: "My Blog - %s",
    default: "My Blog",
  },
  description:
    "Welcome to My Blog. Discover articles on various topics and insights.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen sm:px-20 p-5">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
