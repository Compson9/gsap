"use client"

import React, { useEffect } from 'react'
import animatePageIn from './utils/animate'

export default function Template({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        animatePageIn()
    }, [])
    return (
        <div>
            <div id='banner-1' className='min-h-screen bg-neutral-950 z-10 fixed left-0 top-0 w-1/4' />
            <div id='banner-2' className='min-h-screen bg-neutral-950 z-10 fixed left-1/4 top-0 w-1/4' />
            <div id='banner-3' className='min-h-screen bg-neutral-950 z-10 fixed  left-2/4 top-0 w-1/4' />
            <div id='banner-4' className='min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4' />
            {children}
        </div>
    )
}


