"use client";

import { useState } from "react";
import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";

// export const metadata = {
//     title: Routes.CHECKOUT.meta.title,
//     description: Routes.CHECKOUT.meta.description,
// };

const page = () => {
    const [cartItems] = useState([
        { id: 1, name: "Apple 15", price: 120, quantity: 2 },
        { id: 2, name: "Apple 5", price: 90, quantity: 1 },
    ]);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shippingFee = 10;
    const total = subtotal + shippingFee;

    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.CHECKOUT.title,
                    description: Routes.CHECKOUT.meta.description,
                }}
                breadcrumbData={[
                    { path: Routes.HOME.path, title: Routes.HOME.title },
                    { path: Routes.CHECKOUT.path, title: Routes.CHECKOUT.title },
                ]}
            />

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                {/* LEFT: SHIPPING + PAYMENT */}
                <div className="lg:col-span-2 space-y-10">
                    {/* Shipping Info */}
                    <div className="border rounded-xl p-6 space-y-5">
                        <h2 className="text-xl font-semibold">Shipping Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input className="input" placeholder="First Name" />
                            <input className="input" placeholder="Last Name" />
                            <input className="input md:col-span-2" placeholder="Address" />
                            <input className="input" placeholder="City" />
                            <input className="input" placeholder="Postal Code" />
                            <input className="input md:col-span-2" placeholder="Phone Number" />
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="border rounded-xl p-6 space-y-4">
                        <h2 className="text-xl font-semibold">Payment Method</h2>

                        <label className="flex items-center gap-3">
                            <input type="radio" name="payment" defaultChecked />
                            Cash on Delivery
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="radio" name="payment" />
                            Credit / Debit Card
                        </label>
                    </div>
                </div>

                {/* RIGHT: ORDER SUMMARY */}
                <div className="border rounded-xl p-6 space-y-6 h-fit">
                    <h2 className="text-xl font-semibold">Order Summary</h2>

                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between text-sm"
                            >
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>${shippingFee}</span>
                        </div>
                    </div>

                    <hr />

                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>

                    <button className="w-full mt-4 px-6 py-3 rounded-lg bg-custom-gold text-white font-medium hover:opacity-90 transition">
                        Place Order
                    </button>
                </div>
            </section>
        </InnerContainer>
    );
};

export default page;