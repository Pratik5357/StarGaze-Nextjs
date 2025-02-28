'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly '>
      <div className='w-full h-auto flex items-center justify-between py-6 px-20 max-md:px-6 max-md:py-0'>
        <Link href="/" className='text-4xl max-md:text-3xl'>StarGaze</Link>
        <ul className="flex list-none gap-5 items-center max-md:hidden">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/news">News</Link></li>
          {session ? (
            <li><button onClick={() => signOut()} className='border rounded-md py-2 px-3 hover:bg-white hover:text-black transition'>Logout</button></li>
          ) : (
            <li><Link href="/sign-in" className='border rounded-md py-2 px-3 hover:bg-white hover:text-black transition'>Login</Link></li>
          )}
        </ul>
        <div className='hidden max-md:block items-center p-2'>
          {session ? (
            <button onClick={() => signOut()} className='border rounded-md py-2 px-3 hover:bg-white hover:text-black transition'>Logout</button>
          ) : (
            <Link href="/sign-in" className='border rounded-md py-2 px-3 hover:bg-white hover:text-black transition'>Login</Link>
          )}
        </div>
      </div>
      <div className='w-full hidden items-center gap-3 py-[10px] h-auto max-md:flex border-t border-b'>
        <ul className="flex list-none gap-5 items-center justify-evenly w-full">
          <li><Link href="/" className='text-sm'>Home</Link></li>
          <li><Link href="/gallery" className='text-sm'>Gallery</Link></li>
          <li><Link href="/about" className='text-sm'>About</Link></li>
          <li><Link href="/news" className='text-sm'>News</Link></li>
        </ul>
      </div>
    </div>
  )
}