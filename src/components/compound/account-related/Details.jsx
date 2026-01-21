"use client";

import { useState } from "react";
import { Form } from "@/components/atomic/Form";
import { ApiRoutes } from "@/constants/ApiRoutes";

export const Details = ({ userData, setUserData }) => {
    const [formData, setFormData] = useState({
        name: userData?.name || '',
        email: userData?.email || '',
        number: userData?.number || '',
        address: userData?.address || '',
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUserEditing = async () => {
        setError("");

        try {
            setLoading(true);

            const payload = {
                name: formData.name,
                email: formData.email,
                number: formData.number,
                address: formData.address,
            };

            const res = await fetch(ApiRoutes.USER.ME, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Updatation failed");
            }

            setUserData(data.user);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-2/3 flex flex-col p-6 gap-4 shadow-sm rounded-xl">
            <h3 className="text-lg font-semibold">Account Details</h3>

            <Form
                handleSubmit={(e) => {
                    e.preventDefault();
                    handleUserEditing();
                }}
                formContainerStyle="flex flex-col gap-4"
                errorData={error}
                inputFieldData={[
                    {
                        inputStyleClass: "basicTextInputStyle",
                        inputData: {
                            required: true,
                            placeholder: 'Name',
                            value: formData.name,
                            onChange: e => setFormData(prev => ({ ...prev, name: e.target.value }))
                        }
                    },
                    {
                        inputStyleClass: "basicTextInputStyle",
                        inputData: {
                            type: 'email',
                            required: true,
                            placeholder: 'Email',
                            value: formData.email,
                            onChange: e => setFormData(prev => ({ ...prev, email: e.target.value }))
                        }
                    },
                    {
                        inputStyleClass: "basicTextInputStyle",
                        inputData: {
                            required: true,
                            placeholder: 'Number',
                            value: formData.number,
                            onChange: e => setFormData(prev => ({ ...prev, number: e.target.value }))
                        }
                    },
                    {
                        inputStyleClass: "basicTextInputStyle",
                        inputData: {
                            required: true,
                            placeholder: 'Address',
                            value: formData.address,
                            onChange: e => setFormData(prev => ({ ...prev, address: e.target.value }))
                        }
                    },
                ]}
                btnData={{
                    disabled: loading,
                    onClick: handleUserEditing,
                    text: loading ? "Updating..." : "Update",
                    btnStyleClass: "btnStyle mx-auto cursor-pointer"
                }}
            />        </section>
    );
};
