"use client";

import Link from "next/link";
import { Icons } from "@/libs/icons";
import { Routes } from "@/config/routes";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";

export const ProductInfoSection = ({ productInfoData }) => {
    return (
        <div className="flex flex-col justify-between gap-2.5">
            <div className="flex flex-col gap-2.5">
                <div className="flex items-start justify-between gap-2.5">
                    <div className="flex flex-col">
                        <Link
                            href={Routes.BRAND(productInfoData?.brand).path}
                            className="w-fit font-semibold hover:text-custom-gold"
                        >
                            {productInfoData?.brand}
                        </Link>

                        <h1 className="text-3xl font-bold">
                            {productInfoData?.title}
                        </h1>
                    </div>

                    <BasicBtn
                        btnStyleClass="p-2 border rounded-full cursor-pointer bg-transparent"
                        btnData={{
                            icon: Icons.FAVORITE_HEART,
                            onClick: () => console.log("Added to cart")
                        }}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        {[...Array(Math.round(productInfoData?.rating || 0))].map((_, i) => (
                            <span
                                key={i}
                                className="text-lg text-yellow-500"
                            >
                                {Icons.STAR}
                            </span>
                        ))}
                    </div>

                    <span className="text-sm opacity-65">
                        ({productInfoData?.rating} / 5 · {productInfoData?.reviews?.length} reviews)
                    </span>
                </div>

                <p className="leading-relaxed opacity-75">
                    {productInfoData?.description}
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-2xl font-semibold text-custom-gold">
                    Rs. {productInfoData?.price.toLocaleString()}
                </p>

                <div className="flex gap-2.5">
                    <BasicBtn
                        btnStyleClass="flex items-center px-3 py-1.5 gap-2 border rounded-md cursor-pointer border-custom-gold text-white bg-custom-gold hover:border-customHover hover:bg-customHover"
                        btnData={{
                            icon: Icons.CART,
                            text: "Add to Cart",
                            onClick: () => console.log("Added to cart")
                        }}
                    />

                    <BasicBtn
                        btnStyleClass="flex items-center px-3 py-1.5 gap-1.5 border rounded-md cursor-pointer border-custom-gold text-white bg-custom-gold hover:border-customHover hover:bg-customHover"
                        btnData={{
                            icon: Icons.BUY_TAG,
                            text: "Buy Now",
                            onClick: () => console.log("Buy")
                        }}
                    />
                </div>
            </div>
        </div>
    );
};