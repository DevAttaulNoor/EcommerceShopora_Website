"use client";

import Link from "next/link";
import { Routes } from "@/config/routes";
import { usePathname } from "next/navigation";
import { ImageContainer } from "@/components/atomic/ImageContainer";
import brands from "@/data/brands.json"
import categories from "@/data/categories.json"

const companyLinks = [
    {
        id: 1,
        href: Routes.ABOUT.path,
        title: Routes.ABOUT.title
    },
    {
        id: 2,
        href: Routes.CONTACT.path,
        title: Routes.CONTACT.title
    }
];

const helpcenterLinks = [
    {
        id: 1,
        href: Routes.FAQ.path,
        title: Routes.FAQ.title
    },
    {
        id: 2,
        href: Routes.PRIVACY_POLICY.path,
        title: Routes.PRIVACY_POLICY.title
    },
    {
        id: 3,
        href: Routes.TERMS_POLICY.path,
        title: Routes.TERMS_POLICY.title
    },
    {
        id: 4,
        href: Routes.RETURNS_POLICY.path,
        title: Routes.RETURNS_POLICY.title
    },
];

export const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="w-full py-4 border-t border-custom-charcoal bg-custom-charcoal/15">
            <nav className="max-w-innerContainer w-full flex justify-between mx-auto">
                <div className="flex flex-col gap-2">
                    <ImageContainer
                        imageContainerStyle="h-12"
                        imageStyle="object-cover"
                        imageData={{
                            fill: true,
                            priority: true,
                            src: '/logo.png',
                            alt: "Logo of Shopora"
                        }}
                    />

                    <p>Address</p>
                    <p>Contact</p>
                </div>

                <div className="flex flex-col gap-1">
                    <h5 className="text-lg font-medium mb-2.5">Top Categories</h5>

                    {categories?.slice(0, 7).map(cat => (
                        <Link
                            key={cat.id}
                            href={Routes.CATEGORY(cat.slug).path}
                            className={`${pathname === Routes.CATEGORY(cat.slug).path && "font-medium text-custom-gold"} hover:text-custom-gold`}
                        >
                            {cat.title}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-1">
                    <h5 className="text-lg font-medium mb-2.5">Top Brands</h5>

                    {brands?.slice(0, 7).map(cat => (
                        <Link
                            key={cat.id}
                            href={Routes.BRAND(cat.slug).path}
                            className={`${pathname === Routes.BRAND(cat.slug).path && "font-medium text-custom-gold"} hover:text-custom-gold`}
                        >
                            {cat.title}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-1">
                    <h5 className="text-lg font-medium mb-2.5">Company</h5>

                    {companyLinks.map(item => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`${pathname === item.href && "font-medium text-custom-gold"} hover:text-custom-gold`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col gap-1">
                    <h5 className="text-lg font-medium mb-2.5">Help Center</h5>

                    {helpcenterLinks.map(item => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`${pathname === item.href && "font-medium text-custom-gold"} hover:text-custom-gold`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </footer>
    );
};