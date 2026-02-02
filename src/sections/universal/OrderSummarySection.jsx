"use client";

import { useState } from "react";
import { Routes } from "@/config/routes";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";

export const OrderSummarySection = ({ btnData }) => {
    const [cartItems] = useState([
        { id: 1, name: "Apple 15", price: 120, quantity: 2 },
        { id: 2, name: "Apple 5", price: 90, quantity: 1 },
    ]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 10;
    const total = subtotal + shippingFee;

    return (
        <div className="w-96 h-fit flex flex-col gap-4 p-6 border rounded-xl">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col gap-2 text-sm">
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

            <BasicBtn
                btnStyleClass="w-full text-center px-2 py-2 border rounded-md cursor-pointer border-custom-gold text-white bg-custom-gold hover:border-customHover hover:bg-customHover"
                btnData={btnData}
            />
        </div>
    );
};