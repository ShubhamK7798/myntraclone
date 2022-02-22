import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between max-w-[1500px] items-center z-50 sticky top-0 mx-auto  w-screen  p-8  bg-white'>

      {/* left */}
      <div className='flex space-x-12'>
        <Link href='/'>
        <div  className='relative w-16 h-8 cursor-pointer'>
          <Image src='/myntra.png' objectFit='contain' layout='fill'  />
        </div>
        </Link>
        
        <nav className='hidden lg:flex lg:space-x-8 font-semibold'>
          <Link   href='/'>
            <a > Men</a> 
            </Link>
          <Link href='/'>
            <a> Women</a> 
            </Link>
          <Link href='/'>
            <a> Kids</a> 
            </Link>
          <Link href='/'>
            <a> Living </a> 
            </Link>
          <Link href='/'>
            <a> Beauty</a> 
            </Link>
          <Link href='/'>
            <a> Studio</a> 
            </Link>
        </nav>
      </div>

      {/* right */}
      <div className='hidden ml-28 pr-8 md:flex space-x-4 font-semibold flex-grow justify-end items-center'>
        <div className='border bg-gray-50 p-2 hidden lg:flex flex-grow text-xs '>
          <input type="text" name="search" className='outline-none w-full bg-transparent' placeholder='Search for products,brands and more' />
        </div>
        <div className='cursor-pointer'>Profile</div>
        <div className='cursor-pointer'>Wishlist</div>
        <div className='cursor-pointer'>Bag</div>
      </div>

     






    </header>
  )
}

export default Navbar