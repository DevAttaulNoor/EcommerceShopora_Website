"use client";

import { useState } from "react";
import { Icons } from "@/libs/icons";
import { ImageContainer } from "@/components/atomic/ImageContainer";

export const ProductImageSlideshow = ({ productData }) => {
    const [active, setActive] = useState(0);

    return (
        <div className="max-h-96 flex items-center gap-5">
            <div className="h-full flex flex-col items-center justify-between gap-2">
                <button
                    onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : productData.images.length - 1))}
                    className="p-2 border rounded-full rotate-180"
                >
                    {Icons.DOWN_ARROW}
                </button>

                <div className="max-h-80 flex flex-col items-center gap-3 overflow-y-auto">
                    {productData?.images.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`${active === index ? 'border-custom-gold' : ''} border-2 rounded-lg cursor-pointer`}
                        >
                            <ImageContainer
                                imageContainerStyle="w-16 h-16 rounded-md overflow-hidden"
                                imageStyle="object-cover"
                                imageData={{
                                    fill: true,
                                    priority: true,
                                    src: item,
                                    alt: `Image of ${productData?.title}`
                                }}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setActive((prev) => (prev < productData.images.length - 1 ? prev + 1 : 0))}
                    className="p-2 border rounded-full"
                >
                    {Icons.DOWN_ARROW}
                </button>
            </div>

            <ImageContainer
                imageContainerStyle="w-full h-96 border rounded-lg overflow-hidden"
                imageStyle="object-contain"
                imageData={{
                    fill: true,
                    priority: true,
                    src: productData?.images[active],
                    alt: `Image of ${productData?.title}`
                }}
            />
        </div>
    );
};