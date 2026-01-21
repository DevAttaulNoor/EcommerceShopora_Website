"use client";

import { useState } from "react";
import { Routes } from "@/config/routes";
import { useAuth } from "@/store/AuthContext";
import { userLogout } from "@/services/auth.service";
import { ImageContainer } from "@/components/atomic/ImageContainer";
import { Details } from "@/components/compound/account-related/Details";
import { ToReview } from "@/components/compound/account-related/ToReview";
import { Addresses } from "@/components/compound/account-related/Addresses";
import { Dashboard } from "@/components/compound/account-related/Dashboard";
import { OrderHistory } from "@/components/compound/account-related/OrderHistory";

export const AccountContent = () => {
    const { user, setUser } = useAuth();
    const sidebarOptions = ["Dashboard", "Account Details", "Order History", "Address", "To Review"];
    const [active, setActive] = useState(sidebarOptions[0]);

    const handleLogout = async () => {
        userLogout();
        window.location.href = Routes.LOGIN.path;
        setUser(null);
    };

    return (
        <section className="flex gap-10">
            <aside className="max-w-96 w-full h-fit flex flex-col p-2.5 gap-4 rounded-xl shadow-sm">
                <div className="flex flex-col items-center justify-center gap-1.5">
                    <ImageContainer
                        imageContainerStyle="w-16 h-16 rounded-full bg-customMuted overflow-hidden"
                        imageStyle="object-cover"
                        imageData={{
                            fill: true,
                            priority: true,
                            src: "/question-mark.png",
                            alt: "Profile picture of question mark"
                        }}
                    />

                    <h5 className="font-semibold">{user?.name}</h5>
                </div>

                <nav className="flex flex-col gap-2">
                    {sidebarOptions.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`w-full text-left text-sm font-medium px-3 py-2 rounded-lg cursor-pointer ${item === active ? "bg-custom-gold" : "hover:bg-customMuted"}`}
                        >
                            {item}
                        </button>
                    ))}

                    <button
                        onClick={handleLogout}
                        className="w-full text-left text-sm font-medium px-3 py-2 rounded-lg cursor-pointer text-red-500 hover:bg-customMuted"
                    >
                        Logout
                    </button>
                </nav>
            </aside>

            <div className="w-full">
                {active === "Dashboard" && (
                    <Dashboard />
                )}
                {active === "Account Details" && (
                    <Details
                        userData={user}
                        setUserData={setUser}
                    />
                )}
                {active === "Order History" && (
                    <OrderHistory />
                )}
                {active === "Address" && (
                    <Addresses
                        userData={user}
                    />
                )}
                {active === "To Review" && (
                    <ToReview />
                )}
            </div>
        </section>
    );
};