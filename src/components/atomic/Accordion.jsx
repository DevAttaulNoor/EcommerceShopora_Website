"use client";

import { useState } from "react";

export const Accordion = ({ accordionData }) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleAccordion = (id) => {
        setOpenItems((prev) =>
            prev.includes(id)
                ? prev.filter((itemId) => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="border rounded-md">
            {accordionData?.flatMap(category => category.content.map(data => {
                const isOpen = openItems.includes(data.id);
                const isLastItem = data.id === category.content.length - 1;

                return (
                    <div key={data.id}>
                        <button
                            onClick={() => toggleAccordion(data.id)}
                            className={`w-full flex items-center justify-between p-4 gap-3 border-b transition-colors cursor-pointer border-custom-blue/20 hover:text-white hover:bg-custom-blue ${isOpen && "text-white bg-custom-blue"} ${isLastItem && !isOpen && "border-b-0"}`}
                        >
                            <span className="text-start text-sm font-medium md:text-base xl:text-lg">
                                {data.question}
                            </span>

                            {/* <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                {ReactIcons.DOWN}
                            </span> */}
                        </button>

                        <div
                            className={`text-sm transition-all duration-300 overflow-hidden text-gray-500 md:text-base xl:text-lg ${isOpen ? `max-h-96 p-4 ${!isLastItem ? "border-b" : ""} opacity-100` : "max-h-0 opacity-0"}`}
                        >
                            {data.answer}
                        </div>
                    </div>
                );
            }))}
        </div>
    );
};