import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container h-[70vh] flex flex-col items-center justify-center py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
      <p className="text-lg mb-6 md:max-w-[60%]">
        We&apos;re glad to have you here. You can read our latest articles by
        clicking on the &quot;Blog&quot; link in the navigation menu or simply by clicking
        <Link href="/blog" className="text-blue-500 hover:underline ml-1">
          here
        </Link>
        .
      </p>
    </div>
  )
}
