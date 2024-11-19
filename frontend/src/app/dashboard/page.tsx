"use client"

import React, { useState } from 'react'

export default function DashboardPage() {
    const [count , setCount] = useState(0)
    return (
        <div
            className='h-[100vh] w-full flex items-center justify-center'
        >
            <button 
                className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground' 
                onClick={() => setCount((prev) => prev + 1)}
            >
                Increase Count - {count}
            </button>
        </div>
    )
}
