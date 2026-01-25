"use client";

import { Icons } from "@/libs/icons";
import { Routes } from "@/config/routes";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { ImageContainer } from "@/components/atomic/ImageContainer";

export const ProductCard = ({ productData }) => {
    return (
        <div
            key={productData.id}
            href={Routes.PRODUCT(productData.slug).path}
            className="w-full h-full flex flex-col justify-between p-2 gap-2.5 border rounded-lg"
        >
            <div className="flex flex-col gap-2">
                <ImageContainer
                    imageContainerStyle="h-48 rounded-md overflow-hidden"
                    imageStyle="object-cover"
                    imageData={{
                        fill: true,
                        priority: true,
                        src: productData.images[0],
                        alt: `Image of ${productData.title}`,
                    }}
                />

                <h6 className="text-center text-lg font-medium">{productData.title}</h6>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h6 className="text-center text-lg font-medium">Rs. {productData.price}</h6>

                    <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const starValue = index + 1;

                                return (
                                    <span
                                        key={index}
                                        className={`w-4 h-4 ${productData.rating >= starValue ? "fill-custom-gold text-custom-gold" : "fill-transparent text-gray-300"}`}
                                    >
                                        {Icons.STAR}
                                    </span>
                                );
                            })}
                        </div>

                        <p className="text-sm">({productData.reviews?.length})</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <BasicBtn
                        btnStyleClass="w-full text-center px-2 py-2 border rounded-md border-custom-gold text-custom-gold bg-transparent hover:border-customHover hover:text-white hover:bg-customHover"
                        btnData={{
                            path: Routes.PRODUCT(productData.slug).path,
                            text: "View"
                        }}
                    />

                    <BasicBtn
                        btnStyleClass="w-full px-2 py-2 border rounded-md cursor-pointer border-custom-gold text-white bg-custom-gold hover:border-customHover hover:bg-customHover"
                        btnData={{
                            onClick: (() => console.log('Buy Btn Clicked')),
                            text: "Buy"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};