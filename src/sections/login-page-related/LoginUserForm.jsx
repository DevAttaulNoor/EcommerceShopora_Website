"use client";

import { useState } from "react";
import { Routes } from "@/config/routes";
import { Form } from "@/components/atomic/Form";
import { userLogin } from "@/services/auth.service";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { InputField } from "@/components/atomic/fields/InputField";

export const LoginUserForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError("");
        setLoading(true);

        try {
            await userLogin(formData.email, formData.password);
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
                handleLogin();
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
                    onClick: handleLogin,
                    text: loading ? "Logging In..." : "Log in"
                }}
            />
        </Form>
    );
};