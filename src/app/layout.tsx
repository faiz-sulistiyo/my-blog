import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {Footer, Header} from "@/components/layout"

const inter = Inter({subsets: ["latin"],display:"fallback"})

export const metadata: Metadata = {
  title: {
    template: "My Blog - %s",
    default: "My Blog",
  },
  description:
    "Welcome to My Blog. Discover articles on various topics and insights.",
  other:{
    "google-site-verification": "S_VGOkxk99-pqguiiziYxKVAuzl7-6KHcmgvw4LwnVM"
  }
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
        <main className="min-h-[80vh] sm:px-20 p-5">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
