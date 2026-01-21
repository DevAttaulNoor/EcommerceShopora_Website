"use client";

import Link from "next/link";
import { Icons } from "@/libs/icons";
import { usePathname } from "next/navigation";

export const Breadcrumb = ({ breadcrumbData }) => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center">
            {breadcrumbData.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center"
                >
                    {index !== 0 && (
                        <span className="text-xl">
                            {Icons.SLASH}
                        </span>
                    )}

                    <Link
                        href={item.path}
                        className={`${pathname === item.path && "text-custom-gold"} font-medium hover:text-customHover`}
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </nav>
    );
};