'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Menu = () => {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="ml-16 text-xl gap-10 text-zinc-400 hidden lg:flex">
                <li><Link href='/' className={`hover:text-[#66ACAA] transition ${pathname === '/' ? 'text-[#66ACAA] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]' : ''}`}>Главная</Link></li>
                <li><Link href='/products' className={`hover:text-[#66ACAA] transition ${pathname === '/products' ? 'text-[#66ACAA] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]' : ''}`}>Продукты</Link></li>
                <li><Link href='/services' className={`hover:text-[#66ACAA] transition ${pathname === '/services' ? 'text-[#66ACAA] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]' : ''}`}>Услуги</Link></li>
                <li><Link href='/about' className={`hover:text-[#66ACAA] transition ${pathname === '/about' ? 'text-[#66ACAA] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]' : ''}`}>О компании</Link></li>
            </ul>
        </nav>
    )
}


export { Menu };