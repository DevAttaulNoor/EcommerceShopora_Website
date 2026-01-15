"use client";

import { useState } from "react";
import { Icons } from "@/constants/Icons";

export const FilterLayout = ({ children, title }) => {
    const [close, setClosed] = useState(false);

    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1 border-b-[3px] border-b-custom-gold">
                <h5 className="text-xl font-medium">{title}</h5>

                <span
                    onClick={() => setClosed(prev => !prev)}
                    className={`transition-transform duration-300 ${close ? "" : "rotate-180"} cursor-pointer`}
                >
                    {Icons.DOWN_ARROW}
                </span>
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${close ? "max-h-0 opacity-0" : "max-h-96 opacity-100"}`}>
                {children}
            </div>
        </div>
    );
};
