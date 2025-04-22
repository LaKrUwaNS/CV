'use client'
import React from 'react'
import { ButtonTheme } from '@/components/theamToggle';
import { Download } from 'lucide-react';


function downNav() {
    const OpenCV = () => {
        window.open(
            "https://drive.google.com/file/d/1y4brBDMFBImyEZitZU0TdJ8DYv7Hw8dI/view?usp=drive_link"
        )
    }
    return (
        <div className=' fixed bottom-20 md:bottom-5 dark:bg-red-500 right-5 z-10 bg-[#aaaaaa69] px-4 p-1 border-2 border-white rounded-full flex gap-1 md:gap-5 items-center'>
            <ButtonTheme  />
            <div onClick={OpenCV} className='cursor-pointer hover:bg-white p-2 rounded-4xl dark:hover:bg-[#aaaaaa69] '>
                <Download className='hover:text-green-500 duration-500' />
            </div>
        </div>
    )
}

export default downNav
