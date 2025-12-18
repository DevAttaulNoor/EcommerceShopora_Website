import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/constants/Icons";
import { Routes } from "@/constants/Routes";

export const ProductCard = ({ productData }) => {
    return (
        <div
            key={productData.id}
            href={Routes.PRODUCT(productData.slug).path}
            className="w-full h-full flex flex-col justify-between p-3 gap-2.5 border-2 rounded-lg"
        >
            <div className="flex flex-col gap-2">
                <div className="w-full">
                    <Image
                        width={150}
                        height={150}
                        src={productData.image}
                        alt={`Logo of ${productData.title}`}
                        className="object-contain"
                    />
                </div>

                <h5 className="text-center text-lg font-medium">{productData.title}</h5>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h5 className="text-center text-lg font-medium text-red-500">Rs. {productData.price}</h5>

                    <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const starValue = index + 1;

                                return (
                                    <span
                                        key={index}
                                        className={`w-4 h-4 ${productData.rating >= starValue ? "fill-yellow-400 text-yellow-400" : "fill-transparent text-gray-300"}`}
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
                        className="w-full text-center py-2 rounded-md text-white bg-red-500"
                    >
                        View
                    </Link>

                    <button className="w-full py-2 rounded-md cursor-pointer text-white bg-red-500">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};