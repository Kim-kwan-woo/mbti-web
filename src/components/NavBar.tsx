'use client'

import Link from 'next/link'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";

export default function NavBar() {
    return (
        <nav className='flex place-content-between mx-16 my-10'>
            <Link href='/' className='font-bold text-primary'>MBTI 테스트</Link>
            <div className='hidden md:flex space-x-10'>
                <Link href='/test'>
                    테스트 하러 가기
                </Link>
                <Link href='/dictionary'>
                    MBTI 백과사전
                </Link>
            </div>
            <div className='md:hidden flex items-center'>
                <Dropdown placement='bottom-end'>
                    <DropdownTrigger>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </DropdownTrigger>
                    <DropdownMenu className='md:hidden flex bg-subColor text-center text-sm p-4 rounded-lg gap-2' aria-label="Menu Actions" color='danger' variant="bordered" selectionMode='none' >
                        <DropdownItem href='/test' className='p-1'>
                            테스트 하러 가기
                        </DropdownItem>
                        <DropdownItem href='/dictionary' className='p-1'>
                            MBTI 백과사전
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </nav>
    )
}