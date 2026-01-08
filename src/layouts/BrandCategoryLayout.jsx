"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Routes } from "@/constants/Routes";
import { IntroSection } from "@/sections/universal/IntroSection";
import { Searchbar } from "@/components/compound/searchBars/Searchbar";
import { PlatformStatsSection } from "@/sections/universal/PlatformStatsSection";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const BrandCategoryLayout = ({ title, breadcrumbData, productData, attributeType, attributeData = [] }) => {
    const [input, setInput] = useState("");
    const [activeLetter, setActiveLetter] = useState(null);

    const availableLetters = new Set(
        attributeData.map(item => item.title[0].toUpperCase())
    );

    const filteredData = attributeData
        .filter(item => {
            const matchesSearch = item.title
                .toLowerCase()
                .includes(input.toLowerCase());

            const matchesLetter = activeLetter
                ? item.title.toUpperCase().startsWith(activeLetter)
                : true;

            return matchesSearch && matchesLetter;
        })
        .sort((a, b) => a.title.localeCompare(b.title));

    const attributeLink = (slug) => {
        if (attributeType === "brand") {
            return Routes.BRAND(slug).path;
        }
        if (attributeType === "category") {
            return Routes.CATEGORY(slug).path;
        }
        return "#";
    };

    return (
        <>
            <IntroSection
                headingData={{
                    title: title,
                    description: `Browse our wide range of ${attributeType}s and discover top products
                    from trusted sellers across Pakistan.`
                }}
                breadcrumbData={breadcrumbData}
            />

            <PlatformStatsSection
                statsData={{
                    attributeData: {
                        data: filteredData,
                        type: attributeType
                    },
                    productData: productData
                }}
            />

            <section className="sectionStyle">
                <HeadingWithDescription
                    title={`Browse ${attributeType}s`}
                    description={'Search or filter by alphabet to find what you’re looking for'}
                />

                <Searchbar
                    searchbarData={{
                        placeholder: `Search for ${attributeType}s...`,
                        value: input,
                        onChange: (e) => setInput(e.target.value),
                        inputStyleClass: "w-full",
                    }}
                />

                <div className="flex flex-wrap items-center justify-center p-2 gap-1.5 rounded-lg bg-customMuted">
                    {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map(letter => {
                        const isActive = activeLetter === letter;
                        const isAvailable = availableLetters.has(letter);

                        return (
                            <button
                                key={letter}
                                disabled={!isAvailable}
                                onClick={() => setActiveLetter(isActive ? null : letter)}
                                className={`w-8 h-8 rounded-md text-xs font-medium transition ${isActive ? "text-black bg-custom-gold" : isAvailable ? "cursor-pointer hover:bg-customHover" : "opacity-30 cursor-not-allowed"}`}
                            >
                                {letter}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center justify-between">
                    {activeLetter && (
                        <p className="text-sm">
                            Showing {attributeType}s starting with{" "}
                            <span className="font-semibold text-custom-gold">
                                "{activeLetter}"
                            </span>
                        </p>
                    )}

                    <p className="text-sm text-end">
                        <span className="font-semibold text-custom-gold">
                            {filteredData.length}
                        </span>
                        {" "} {attributeType}
                        {filteredData.length !== 1 && "s"} available
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    {(input || activeLetter) && (
                        <button
                            onClick={() => {
                                setInput("");
                                setActiveLetter(null);
                            }}
                            className="self-end cursor-pointer text-custom-gold hover:underline"
                        >
                            Clear filters
                        </button>
                    )}

                    {filteredData.length === 0 ? (
                        <div className="text-center">
                            No {attributeType}s found for “{input}”
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {filteredData.map(item => (
                                <Link
                                    key={item.id}
                                    href={attributeLink(item.slug)}
                                    className="group flex flex-col items-center justify-between p-3 gap-3 rounded-xl transition bg-customMuted hover:shadow-lg hover:-translate-y-1"
                                >
                                    <Image
                                        width={120}
                                        height={120}
                                        src={item.image}
                                        alt={`Logo of ${item.title}`}
                                        className="object-contain"
                                    />

                                    <h5 className="text-center text-lg font-medium transition group-hover:text-custom-gold">
                                        {item.title}
                                    </h5>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
