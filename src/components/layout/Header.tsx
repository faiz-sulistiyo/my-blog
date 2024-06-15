"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export const Header:React.FC = () => {
 const path = usePathname();
 const menu = [
    {
        label:"Blog",
        path:"/blog"
    },
    {
        label:"User",
        path:"/user"
    }
 ]
  return (
    <nav className='sticky top-0 bg-black left-0 md:py-6 px-10 py-4 flex items-center justify-between text-sm md:text-base'>
        <h1 className='font-bold'>Logo</h1>
        <div className='flex gap-4'>
            {menu.map((item)=>{
                return <Link key={item.path} href={item.path} className={`${path===item.path && "font-bold"} md:px-4 md:py-2 py-1 px-2`}>{item.label}</Link>
            })}
        </div>
    </nav>
  )
}
