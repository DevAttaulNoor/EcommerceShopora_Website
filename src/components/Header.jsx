import { Routes } from "@/constants/Routes"
import Link from "next/link"

const navLinks = [
    {
        href: Routes.HOME.path,
        title: Routes.HOME.title,
    },
    {
        href: Routes.HOME.path,
        title: Routes.HOME.title,
    },
    {
        href: Routes.HOME.path,
        title: Routes.HOME.title,
    },
    {
        href: Routes.CONTACT.path,
        title: Routes.CONTACT.title,
    },
]

export const Header = () => {
    return (
        <div className="flex items-center">
            <div>
                <img
                    src={"/logo.png"}
                    alt="Logo of Shopora"
                    className="w-full h-full object-cover"
                />
            </div>

            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="text-sm cursor-pointer"
                >
                    {link.title}
                </Link>
            ))}

        </div>
    )
}