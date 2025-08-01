'use client'

import { ROUTES } from '@/routes'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Overlay } from './Overlay'
import { SearchSuggestions } from './SearchSuggestions'

export const PrimarySearch = () => {

    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion)
        setOpen(false)
        router.push(ROUTES.search.url(suggestion))
    }

    // ma
    const suggestions = [
        "react tutorial for beginners",
        "how to start a startup",
        "morning routine productivity",
        "cryptocurrency investing 2025",
        "home office setup",
        "python programming course",
        "freelancing tips",
        "iPhone vs Android comparison",
        "meal prep healthy recipes",
        "passive income ideas"
    ];

    return (
        <>
            <div className='relative flex flex-nowrap flex-1 z-30' >
                <Link href={ROUTES.search.url(searchTerm)} className='bg-primary grow-0 rounded-l-lg flex items-center px-2' >
                    <Search className='text-gray-900' />
                </Link>
                <input
                    name="search"
                    className='w-full focus:outline-none text-gray-100 placeholder:text-gray-100 bg-gray-500 rounded-r-lg  py-2 px-4 flex-1 z-30'
                    type="text"
                    placeholder="Search..."
                    onFocus={() => setOpen(true)}
                    value={searchTerm}
                    onChange={handleChange}
                />
                <SearchSuggestions open={open} suggestions={suggestions} onClick={handleSuggestionClick} />
            </div>
            <Overlay open={open} onClose={() => { setOpen(false); }} />
        </>
    )
}


