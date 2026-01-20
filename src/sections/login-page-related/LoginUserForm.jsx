"use client";

import Link from "next/link";
import { useState } from "react";
import { Routes } from "@/constants/Routes";
import { Form } from "@/components/atomic/Form";
import { ApiRoutes } from "@/constants/ApiRoutes";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { InputField } from "@/components/atomic/fields/InputField";

export const LoginUserForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUserLogin = async () => {
        setError("");

        try {
            setLoading(true);

            const payload = {
                email: formData.email,
                password: formData.password
            };

            const res = await fetch(ApiRoutes.AUTH.LOGIN, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
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
                handleUserLogin();
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

            <BasicBtn
                btnStyleClass="btnStyle mx-auto cursor-pointer"
                btnData={{
                    disabled: loading,
                    onClick: handleUserLogin,
                    text: loading ? "Logging In..." : "Log in"
                }}
            />
        </Form>
    );
};