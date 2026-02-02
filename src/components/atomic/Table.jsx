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
                    <th>
                        <h5 className="p-1 border rounded-tl-lg">
                            Product Details
                        </h5>
                    </th>

                    <th>
                        <h5 className="p-1 border">
                            Quantity
                        </h5>
                    </th>

                    <th>
                        <h5 className="p-1 border">
                            Price
                        </h5>
                    </th>

                    <th>
                        <h5 className="p-1 border">
                            Total
                        </h5>
                    </th>

                    <th>
                        <h5 className="p-1 border rounded-tr-lg">
                            Action
                        </h5>
                    </th>
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>
                            {product.name}
                        </td>

                        <td>
                            <div className="w-fit flex items-center my-1 gap-1 mx-auto border rounded-md">
                                <button
                                    className="text-sm p-1 border-r cursor-pointer"
                                    onClick={() => decreaseQty(product.id)}
                                >
                                    {Icons.MINUS}
                                </button>

                                <p>{product.quantity}</p>

                                <button
                                    className="text-sm p-1 border-l cursor-pointer"
                                    onClick={() => increaseQty(product.id)}
                                >
                                    {Icons.PLUS}
                                </button>
                            </div>
                        </td>

                        <td className="text-center">
                            {product.price}
                        </td>

                        <td className="text-center">
                            {product.price * product.quantity}
                        </td>

                        <td>
                            <div className="w-fit mx-auto">
                                <button
                                    className="text-xs p-1 border rounded-full cursor-pointer"
                                    onClick={() => removeItem(product.id)}
                                >
                                    {Icons.CLOSE}
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};