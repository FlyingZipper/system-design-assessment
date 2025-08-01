'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'
import { Overlay } from './Overlay'

export const PrimarySearch = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='relative flex flex-nowrap flex-1 z-30' >
                <button className='pointer-events-none bg-primary grow-0 rounded-l-lg flex items-center px-2' >
                    <Search className='text-gray-900' />
                </button>
                <input
                    className='w-full focus:outline-none text-gray-100 placeholder:text-gray-100 bg-gray-500 rounded-r-lg  py-2 px-4 flex-1 z-30'
                    type="text"
                    placeholder="Search..."
                    onFocus={() => setOpen(true)}
                />
            </div>
            <Overlay open={open} onClose={() => { setOpen(false); }} />
        </>
    )
}


