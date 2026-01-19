"use client";

import Link from "next/link";
import { useState } from "react";
import { Routes } from "@/constants/Routes";

// export const metadata = {
//     title: Routes.REGISTER.meta.title,
//     description: Routes.REGISTER.meta.description,
// };

const page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.termsAccepted) {
            setError("You must accept terms and privacy policy.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            console.log("User registered:", data.user);
            window.location.href = Routes.HOME.path;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full h-full flex overflow-y-auto">
            <div className="flex flex-col gap-2 justify-center p-20 text-white bg-gradient-to-br from-custom-gold to-custom-charcoal md:gap-3 xl:gap-4">
                <h1 className="titleStyle">
                    Create Your Account
                </h1>
                <p className="descriptionStyle">
                    Join us to enjoy faster checkout, order tracking, and exclusive deals.
                </p>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                    <li className="descriptionStyle list-disc ml-8">Track orders & deliveries</li>
                    <li className="descriptionStyle list-disc ml-8">Manage wishlist & reviews</li>
                    <li className="descriptionStyle list-disc ml-8">Secure payments & checkout</li>
                </div>
            </div>

            {/* <div className="w-full flex justify-center p-10">
            </div> */}
            <div className="flex flex-col m-10 p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Create an Account</h2>
                <p className="text-sm text-gray-500 mb-6">It only takes a minute</p>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        <p className="text-sm">
                            I agree to the{" "}
                            <Link href={Routes.TERMS_POLICY.path} className="text-blue-600">
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link href={Routes.PRIVACY_POLICY.path} className="text-blue-600">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link href={Routes.LOGIN.path} className="text-blue-600">
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default page;