"use client";

import { useState } from "react";
import { Icons } from "@/constants/Icons";
import { FilterLayout } from "@/layouts/FilterLayout";

export const FilterSection = ({ filterData }) => {
    const [selected, setSelected] = useState({
        brand: '',
        category: '',
    });

    return (
        <section className="max-w-96 w-full h-full flex flex-col gap-3 p-5 border rounded-md">
            {filterData.brands && (
                <FilterLayout title={'Brands'}>
                    <div className="max-h-96 h-full flex flex-col gap-1.5 overflow-y-auto">
                        {filterData.brands?.map(item => (
                            <p
                                key={item.id}
                                onClick={() => setSelected(prev => ({ ...prev, brand: item.id }))}
                                className={`${selected.brand === item.id ? 'font-medium underline text-custom-gold' : ''} w-fit cursor-pointer`}
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                </FilterLayout>
            )}

            {filterData.categories && (
                <FilterLayout title={'Categories'}>
                    <div className="max-h-96 h-full flex flex-col gap-1.5 overflow-y-auto">
                        {filterData.categories?.map(item => (
                            <p
                                key={item.id}
                                onClick={() => setSelected(prev => ({ ...prev, category: item.id }))}
                                className={`${selected.category === item.id ? 'font-medium underline text-custom-gold' : ''} w-fit cursor-pointer`}
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                </FilterLayout>
            )}

            <FilterLayout title={'Ratings'}>
                <div className="flex flex-col gap-1.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex gap-1">
                            <input type="checkbox" name="" id="" />
                            {Array.from({ length: index + 1 }).map((_, starIndex) => (
                                <span key={starIndex} className="text-custom-gold">{Icons.STAR}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </FilterLayout>

            <FilterLayout title={'Price'}>
                <input
                    type="range"
                    // min={0}
                    // max={50}
                    className="w-full"
                />
            </FilterLayout>
        </section>
    );
};