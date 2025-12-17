import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/constants/Icons"
import { Routes } from "@/constants/Routes"

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
    return (
        <header className="flex items-center justify-between px-8 py-2 text-white bg-black">
            <div className="relative">
                <Image
                    width={48}
                    height={48}
                    priority
                    src="/logo.png"
                    alt="Logo of Shopora"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex items-center gap-4">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="font-medium cursor-pointer"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-2">
                <span className="text-xl p-2 cursor-pointer rounded-full text-black bg-white">{Icons.FAVORITE_HEART}</span>
                <span className="text-xl p-2 cursor-pointer rounded-full text-black bg-white">{Icons.CART}</span>
                <span className="text-xl p-2 cursor-pointer rounded-full text-black bg-white">{Icons.USER}</span>
            </div>
        </header>
    )
}