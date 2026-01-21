"use client";

import { useState } from "react";
import { Form } from "@/components/atomic/Form";
import { userUpdation } from "@/services/user.service";

export const Details = ({ userData, setUserData }) => {
    const [formData, setFormData] = useState({
        name: userData?.name || '',
        email: userData?.email || '',
        number: userData?.number || '',
        address: userData?.address || '',
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdation = async () => {
        setError("");
        setLoading(true);

        try {
            await userUpdation(formData.name, formData.email, formData.number, formData.address, setUserData);
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
                    handleUpdation();
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
                    onClick: handleUpdation,
                    text: loading ? "Updating..." : "Update",
                    btnStyleClass: "btnStyle mx-auto cursor-pointer"
                }}
            />        </section>
    );
};
