import React from 'react'
import SakuraFall from '@/components/Tree/SakuraFall'
import Image from 'next/image'
import Card from '@/components/card'
import { GlareCard } from '@/components/ui/glare-card'


function hero() {

    return (
        <section id='hero' className='relative dark:bg-gradient-to-b dark:from-[#0C0C0D] dark:to-[#0C0C0D] bg-gradient-to-b from-[#f8fafc] to-[#ffffff] h-screen flex items-center justify-center'>
            <SakuraFall />
            <div>
                <div>
                    <div className='w-70 h-70 bg-[#C44156] absolute bottom-25 right-[-20] back'></div>
                    <Image src="/me.png" width={350} height={300} alt='My photo' className='absolute bottom-0 right-[-50]' />

                </div>
                <div className='absolute top-1/4 left-0'>
                    <h1 className=''>
                        Hello, I am
                    </h1>
                    <p className=''>
                        Lakruwan Sharaka
                    </p>
                    <p>
                        A passionate software developer
                        currently pursuing a Bachelor’s degree
                        in Information and Communication
                        Technology at the <span>Uwa wellassa University of sri lanka</span>.
                    </p>
                </div>
            </div>
            <div className='absolute flex top-4/6 left-[-50] font-bold text-2xl '>
                <h1 className='rotate-90'>Contact Me</h1>
                <Card />
            </div>
            <div>
                <GlareCard className=''>
                    hi
                </GlareCard>

            </div>
        </section>
    )
}

export default hero
