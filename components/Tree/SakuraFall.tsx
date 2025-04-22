"use client";

import Image from 'next/image'
import React from 'react'
import './sakura-fall.css'

const SakuraFall = () => {
    return (
        <div className="object-cover overflow-hidden h-screen w-screen relative top-0">
            <Image src='/Tree.png' alt='Tree' width={500} height={500} className='lg:w-180 absolute top-0 ' />
            <div className="petal absolute top-0">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    )
}

export default SakuraFall