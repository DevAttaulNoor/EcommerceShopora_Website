"use client";

import Link from "next/link";
import { useState } from "react";
import { Routes } from "@/constants/Routes";
import { Form } from "@/components/atomic/Form";
import { ApiRoutes } from "@/constants/ApiRoutes";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { InputField } from "@/components/atomic/fields/InputField";

export const RegisterUserForm = () => {
    const [formData, setFormData] = useState({
        Fname: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUserRegister = async () => {
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

            const payload = {
                name: formData.Fname,
                email: formData.email,
                password: formData.password,
                number: "",
                address: "",
            };

            const res = await fetch(ApiRoutes.AUTH.REGISTER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }

            window.location.href = Routes.HOME.path;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form
            handleSubmit={(e) => {
                e.preventDefault();
                handleUserRegister();
            }}
            formContainerStyle="flex flex-col gap-4"
        >
            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            <InputField
                inputStyleClass="basicTextInputStyle"
                inputData={{
                    required: true,
                    placeholder: 'Full Name',
                    value: formData.Fname,
                    onChange: e => setFormData(prev => ({ ...prev, Fname: e.target.value }))
                }}
            />

            <InputField
                inputStyleClass="basicTextInputStyle"
                inputData={{
                    type: 'email',
                    required: true,
                    placeholder: 'Email',
                    value: formData.email,
                    onChange: e => setFormData(prev => ({ ...prev, email: e.target.value }))
                }}
            />

            <InputField
                inputStyleClass="basicTextInputStyle"
                inputData={{
                    type: 'password',
                    required: true,
                    placeholder: 'Password',
                    value: formData.password,
                    onChange: e => setFormData(prev => ({ ...prev, password: e.target.value }))
                }}
            />

            <InputField
                inputStyleClass="basicTextInputStyle"
                inputData={{
                    type: 'password',
                    required: true,
                    placeholder: 'Confirm Password',
                    value: formData.confirmPassword,
                    onChange: e => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))
                }}
            />

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={() => setFormData(prev => ({ ...prev, termsAccepted: !prev.termsAccepted }))}
                />

                <p className="text-sm">
                    I agree to the {""}
                    <Link href={Routes.TERMS_POLICY.path} className="text-blue-600 hover:underline">
                        Terms
                    </Link>
                    {""} and {""}
                    <Link href={Routes.PRIVACY_POLICY.path} className="text-blue-600 hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>

            <BasicBtn
                btnStyleClass="btnStyle mx-auto cursor-pointer"
                btnData={{
                    disabled: loading,
                    onClick: handleUserRegister,
                    text: loading ? "Registering..." : "Register"
                }}
            />
        </Form>
    );
};