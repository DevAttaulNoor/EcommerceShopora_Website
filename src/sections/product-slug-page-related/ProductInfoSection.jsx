"use client";

import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";

export const ProductInfoSection = ({ productInfoData }) => {
    return (
        <section className="flex flex-col gap-2.5">
            <h1 className="text-3xl font-bold">{productInfoData?.title}</h1>

            <div className="flex gap-4 text-sm text-gray-500">
                <span>Brand: <span className="font-medium text-gray-800">{productInfoData?.brand}</span></span>
                <span>Category: <span className="font-medium text-gray-800 capitalize">{productInfoData?.category}</span></span>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-yellow-500">
                    {"★".repeat(Math.round(productInfoData?.rating))}
                </span>
                <span className="text-sm text-gray-600">
                    ({productInfoData?.rating} / 5 · {productInfoData?.reviews?.length} reviews)
                </span>
            </div>

            <p className="text-gray-600 leading-relaxed">{productInfoData?.description}</p>

            <div className="text-2xl font-semibold text-custom-gold">
                Rs. {productInfoData?.price.toLocaleString()}
            </div>

            <div className="flex gap-3">
                <BasicBtn
                    btnData={{ text: "Add to Cart", onClick: () => console.log("Added to cart") }}
                />
                <BasicBtn
                    btnData={{ text: "Add to Wishlist", onClick: () => console.log("Added to wishlist") }}
                />
            </div>
        </section>
    );
};