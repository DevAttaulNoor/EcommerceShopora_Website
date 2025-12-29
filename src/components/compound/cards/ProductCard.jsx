import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/constants/Icons";
import { Routes } from "@/constants/Routes";

export const ProductCard = ({ productData }) => {
    return (
        <div
            key={productData.id}
            href={Routes.PRODUCT(productData.slug).path}
            className="w-full h-full flex flex-col justify-between p-2 gap-2.5 border-2 rounded-lg"
        >
            <div className="flex flex-col gap-2">
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                    <Image
                        fill
                        src={productData.image}
                        alt={`Logo of ${productData.title}`}
                        className="object-cover"
                    />
                </div>

                <h5 className="text-center text-lg font-medium">{productData.title}</h5>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h5 className="text-center text-lg font-medium">Rs. {productData.price}</h5>

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
                    <Link
                        href={Routes.PRODUCT(productData.slug).path}
                        className="w-full text-center py-2 border rounded-md border-custom-gold text-custom-gold bg-transparent hover:border-customHover hover:text-white hover:bg-customHover"
                    >
                        View
                    </Link>

                    <button className="w-full py-2 border rounded-md cursor-pointer border-custom-gold text-white bg-custom-gold hover:border-customHover hover:bg-customHover">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};