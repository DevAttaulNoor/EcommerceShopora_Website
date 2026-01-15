"use client";

import Link from "next/link"
import { Icons } from "@/constants/Icons"
import { Routes } from "@/constants/Routes"
import { usePathname } from "next/navigation";
import { ImageContainer } from "@/components/atomic/ImageContainer";

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
];

const accountLinks = [
    {
        href: Routes.WISHLIST.path,
        icon: Icons.FAVORITE_HEART,
    },
    {
        href: Routes.CART.path,
        icon: Icons.CART,
    },
    {
        href: Routes.ACCOUNT.path,
        icon: Icons.USER,
    }
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="w-full py-2 border-b border-custom-charcoal">
            <nav className="max-w-innerContainer w-full flex items-center justify-between mx-auto">
                <div className="flex items-center gap-6">
                    <ImageContainer
                        imageContainerStyle="w-12 h-12"
                        imageStyle="object-contain"
                        imageData={{
                            fill: true,
                            priority: true,
                            src: '/logo.png',
                            alt: "Logo of Shopora"
                        }}
                    />

                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`${pathname === link.href && "font-medium text-custom-gold"} hover:text-custom-gold`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-end gap-4">
                    <span className="text-xl cursor-pointer text-custom-gold hover:text-customHover">{Icons.MAGNIFYING_GLASS}</span>

                    <span className="w-0.5 h-6 bg-custom-charcoal opacity-60" />

                    {accountLinks?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-xl text-custom-gold hover:text-customHover"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}