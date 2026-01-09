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
    }
]

export const Header = () => {
    return (
        <header className="w-full py-2 border-b border-custom-charcoal">
            <nav className="max-w-innerContainer w-full flex items-center justify-between mx-auto">
                <div className="flex items-center gap-6">
                    <Image
                        width={48}
                        height={48}
                        src="/logo.png"
                        alt="Logo of Shopora"
                        className="object-cover"
                    />

                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="cursor-pointer hover:text-custom-gold"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-end gap-4">
                    <span className="text-xl cursor-pointer text-custom-gold hover:text-customHover">{Icons.MAGNIFYING_GLASS}</span>

                    <span className="w-0.5 h-6 bg-custom-charcoal opacity-60" />

                    <Link
                        href={Routes.WISHLIST.path}
                        className="text-xl cursor-pointer text-custom-gold hover:text-customHover"
                    >
                        {Icons.FAVORITE_HEART}
                    </Link>

                    <Link
                        href={Routes.CART.path}
                        className="text-xl cursor-pointer text-custom-gold hover:text-customHover"
                    >
                        {Icons.CART}
                    </Link>

                    <Link
                        href={Routes.ACCOUNT.path}
                        className="text-xl cursor-pointer text-custom-gold hover:text-customHover"
                    >
                        {Icons.USER}
                    </Link>
                </div>
            </nav>
        </header>
    )
}