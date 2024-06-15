import image from "@/assets/illustration-404.svg"
import Image from "next/image"
export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center text-center gap-4">
      <Image alt="not-found" src={image} width={240} height={240} />
      <h1>Oops, <br /> your destination page are not found</h1>
    </div>
  )
}
