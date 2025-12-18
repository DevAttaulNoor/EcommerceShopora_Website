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
                        className="flex items-center"
                    >
                        {index !== 0 && (
                            <span>
                                {Icons.SLASH}
                            </span>
                        )}

                        <Link
                            href={item.path}
                            className={`font-medium transition-colors hover:underline ${isActive ? "text-red-500" : "text-black hover:text-red-500"}`}
                        >
                            {item.title}
                        </Link>
                    </div>
                );
            })}
        </nav>
    );
};