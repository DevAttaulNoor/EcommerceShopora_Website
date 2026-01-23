"use client";

import { useState } from "react";
import { ReviewCard } from "../cards/ReviewCard";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";

const reviewsData = [
    {
        id: "u1_1",
        name: "Jordan S.",
        rating: 5,
        purchaseDate: "2024-12-15",
        message: "Titanium finish is incredible."
    },
    {
        id: "u1_2",
        name: "Sarah C.",
        rating: 5,
        purchaseDate: "2024-12-15",
        message: "The 5x zoom is a game changer."
    },
    {
        id: "u1_3",
        name: "Marcus V.",
        rating: 4,
        purchaseDate: "2024-12-15",
        message: "Finally, USB-C! Great speeds."
    },
    {
        id: "u1_4",
        name: "Elena V.",
        rating: 5,
        purchaseDate: "2024-12-15",
        message: "The Action Button is so useful."
    },
    {
        id: "u1_5",
        name: "David K.",
        rating: 5,
        purchaseDate: "2024-12-15",
        message: "Battery life is outstanding."
    }
];

export const ToReview = () => {
    const tabs = ['to review', 'review history']
    const [active, setActive] = useState(tabs[1]);

    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Reviews</h3>

                <div className="flex items-center gap-2.5">
                    <BasicBtn
                        btnStyleClass={`${active === tabs[0] ? 'text-white bg-custom-gold' : 'text-custom-gold bg-white'} text-sm px-4 py-2 rounded-lg border cursor-pointer border-custom-gold btnHoverTransitionStyle`}
                        btnData={{
                            onClick: () => setActive(tabs[0]),
                            text: "To Review"
                        }}
                    />

                    <BasicBtn
                        btnStyleClass={`${active === tabs[1] ? 'text-white bg-custom-gold' : 'text-custom-gold bg-white'} text-sm px-4 py-2 rounded-lg border cursor-pointer border-custom-gold btnHoverTransitionStyle`}
                        btnData={{
                            onClick: () => setActive(tabs[1]),
                            text: "Review History"
                        }}
                    />
                </div>
            </div>

            {reviewsData?.map(item => (
                <ReviewCard
                    key={item.id}
                    reviewData={item}
                    productData={'Apple 16 pro max'}
                />
            ))}
        </section>
    );
};