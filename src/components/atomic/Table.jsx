"use client";

import { useState } from "react";
import { Icons } from "@/libs/icons";

export const Table = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Apple 15", price: 120, quantity: 1 },
        { id: 2, name: "Apple 5", price: 120, quantity: 1 },
        { id: 3, name: "Apple 17", price: 120, quantity: 1 },
    ]);

    const increaseQty = (id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setProducts((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>

                        <td className="flex items-center justify-center gap-1">
                            <button
                                className="p-1 border rounded-md"
                                onClick={() => decreaseQty(product.id)}
                            >
                                {Icons.MINUS}
                            </button>

                            <p>{product.quantity}</p>

                            <button
                                className="p-1 border rounded-md"
                                onClick={() => increaseQty(product.id)}
                            >
                                {Icons.PLUS}
                            </button>
                        </td>

                        <td className="text-center">
                            {product.price}
                        </td>

                        <td className="text-center">
                            {product.price * product.quantity}
                        </td>

                        <td className="mx-auto">
                            <button onClick={() => removeItem(product.id)}>
                                X
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};