"use client";

import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import Link from "next/link";
import { Icons } from "@/libs/icons";

export const metadata = {
    title: "Order Placed Successfully | Shopora",
    description: "Your order has been placed successfully.",
};

const page = () => {
    return (
        <InnerContainer>
            <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
                {/* Success Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
                    {Icons.CHECK}
                </div>

                {/* Message */}
                <h1 className="text-3xl font-semibold">
                    Thank you for your order 🎉
                </h1>

                <p className="max-w-md text-gray-600">
                    Your order has been placed successfully. You will receive a
                    confirmation message shortly with your order details.
                </p>

                {/* Order Info */}
                <div className="border rounded-xl p-6 w-full max-w-md text-left space-y-3">
                    <div className="flex justify-between text-sm">
                        <span>Order ID</span>
                        <span className="font-medium">#ORD-23871</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span>Payment Method</span>
                        <span className="font-medium">Cash on Delivery</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span>Estimated Delivery</span>
                        <span className="font-medium">3–5 Business Days</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-4">
                    <Link
                        href={Routes.PRODUCTS.path}
                        className="px-6 py-3 rounded-lg border font-medium hover:bg-gray-100 transition"
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        href={Routes.ORDERS?.path || "/orders"}
                        className="px-6 py-3 rounded-lg bg-custom-gold text-white font-medium hover:opacity-90 transition"
                    >
                        View Orders
                    </Link>
                </div>
            </section>
        </InnerContainer>
    );
};

export default page;