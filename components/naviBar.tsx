'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CusButton from './cusButton';


export const NaviBarDestop = () => {
    return (
        <nav className='fixed rounded-none md:rounded-full top-0 z-10 w-full md:w-fit md:top-5 md:right-10 lg:right-40 items-center flex gap-5 md:gap-10 justify-between bg-[#5a5a5a96] p-2 px-4 border-b-2 border-white '>
            <Link href={'/'} className='flex gap-2 items-center'>
                <Image src='/Logo.png' alt='ico' width={100} height={100} className='w-12' />
            </Link>
            <div className='hidden md:flex gap-5 md:gap-15 text-white font-bold md:text-2xl text-lg'>
                <Link href={'#Skills'} className='hover:scale-120 hover:text-[#C44156] duration-150'>Skills</Link>
                <Link href={'#projects'} className='hover:scale-120 hover:text-[#C44156] duration-150'>About</Link>
                <Link href={'#about'} className='hover:scale-120 hover:text-[#C44156] duration-150'>works</Link>
            </div>
            <Link href='/pages/Massage' className='' >
            <CusButton text="Lest talk" />
            </Link>
            <div className='md:hidden fixed bottom-0 left-0 right-0 *:top-0 bg-[#5a5a5a96] p-2 px-4 border-b-2 flex gap-5 md:gap-10 items-center justify-around text-2xl text-white font-bold border-t-2 border-white'>
                <Link href={'#Skills'} className='active:text-[#C44156] duration-200'>Skills</Link>
                <Link href={'#projects'} className='active:text-[#C44156] duration-200'>About</Link>
                <Link href={'#about'} className='active:text-[#C44156] duration-200'>works</Link>
            </div>
        </nav>
    )
}


export const NavMobile = () => {
    return (
        <nav>

        </nav>

    )
}



