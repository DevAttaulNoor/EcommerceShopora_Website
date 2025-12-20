"use client";

import Link from "next/link";
import { Icons } from "@/constants/Icons";
import { usePathname } from "next/navigation";

export const Breadcrumb = ({ breadcrumbData }) => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center">
            {breadcrumbData.map((item, index) => {
                const isActive = pathname === item.path || pathname.startsWith(item.path + "/");

                return (
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
                            className={`font-medium transition-colors hover:underline ${isActive ? "text-custom-gold" : "text-black"} hover:text-customHover`}
                        >
                            {item.title}
                        </Link>
                    </div>
                );
            })}
        </nav>
    );
};