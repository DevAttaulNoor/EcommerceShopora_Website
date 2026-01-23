"use client";

import { useState } from "react";
import { Icons } from "@/libs/icons";

export const Accordion = ({ accordionData }) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleAccordion = (id) => {
        setOpenItems((prev) => prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]);
    };

    return (
        <div className="border rounded-lg overflow-hidden">
            {accordionData?.map((item, index) => {
                const isOpen = openItems.includes(item.id);
                const isLast = index === accordionData?.length - 1;

                return (
                    <div key={item.id}>
                        <button
                            onClick={() => toggleAccordion(item.id)}
                            className={`w-full flex items-center justify-between p-4 gap-3 text-left transition cursor-pointer ${isOpen ? "bg-custom-gold text-white" : "hover:bg-customHover"} ${!isLast && "border-b"}`}
                        >
                            <span className="text-sm font-medium md:text-base">
                                {item.question}
                            </span>

                            <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                {Icons.DOWN_ARROW}
                            </span>
                        </button>

                        <div
                            className={`text-sm overflow-hidden transition-all duration-300 text-gray-600 ${isOpen ? "max-h-96 p-4" : "max-h-0 px-4"} ${!isLast && isOpen && "border-b"} md:text-base`}
                        >
                            {item.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};