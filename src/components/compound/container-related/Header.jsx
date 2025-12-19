"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Icons } from "@/constants/Icons"
import { Routes } from "@/constants/Routes"
import { Searchbar } from "../searchBars/Searchbar"

const navLinks = [
    {
        href: Routes.HOME.path,
        title: Routes.HOME.title,
    },
    {
        href: Routes.BRANDS.path,
        title: Routes.BRANDS.title,
    },
    {
        href: Routes.CATEGORIES.path,
        title: Routes.CATEGORIES.title,
    },
    {
        href: Routes.CONTACT.path,
        title: Routes.CONTACT.title,
    },
]

export const Header = () => {
    const [input, setInput] = useState()

    return (
        <header className="flex flex-col bg-custom-charcoal">
            <nav className="grid grid-cols-5 py-4 gap-5 border-b innerContainerPadding border-b-customMuted">
                <Image
                    width={52}
                    height={52}
                    src="/logo.png"
                    alt="Logo of Shopora"
                    className="object-cover"
                />

                <Searchbar
                    containerStyle="w-1/2 px-3.5 py-2 mx-auto rounded-lg col-span-3 bg-customMuted"
                    iconStyle="text-custom-gold"
                    searchbarData={{
                        value: input,
                        placeholder: 'Enter your product name...',
                        onChange: (e) => setInput(target.value.e),
                    }}
                />

                <div className="flex items-center justify-end gap-4">
                    <span className="text-3xl cursor-pointer text-custom-gold hover:text-customHover">{Icons.FAVORITE_HEART}</span>
                    <span className="text-3xl cursor-pointer text-custom-gold hover:text-customHover">{Icons.CART}</span>
                    <span className="text-3xl cursor-pointer text-custom-gold hover:text-customHover">{Icons.USER}</span>
                </div>
            </nav>

            <nav className="flex items-center justify-center py-3 innerContainerPadding gap-5">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="text-lg cursor-pointer text-customMuted hover:text-custom-gold"
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </header>
    )
}