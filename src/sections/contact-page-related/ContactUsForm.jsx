"use client";

import { useState } from "react";
import { Form } from "@/components/atomic/Form";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { InputField } from "@/components/atomic/fields/InputField";
import { TextareaField } from "@/components/atomic/fields/TextareaField";

export const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        Fname: '',
        email: '',
        number: '',
        orderId: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    return (
        <Form
            handleSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
            }}
            formContainerStyle="flex flex-col gap-4"
        >
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
                    type: 'number',
                    placeholder: 'Phone (optional)',
                    value: formData.number,
                    onChange: e => setFormData(prev => ({ ...prev, number: e.target.value }))
                }}
            />

            <InputField
                inputStyleClass="basicTextInputStyle"
                inputData={{
                    type: 'text',
                    placeholder: 'Order ID (optional)',
                    value: formData.orderId,
                    onChange: e => setFormData(prev => ({ ...prev, orderId: e.target.value }))
                }}
            />

            <select className="basicTextInputStyle">
                <option>Order Issue</option>
                <option>Payment Problem</option>
                <option>Product Inquiry</option>
                <option>Return / Refund</option>
                <option>Other</option>
            </select>

            <TextareaField
                textareaStyleClass="basicTextInputStyle resize-none"
                textareaData={{
                    rows: 4,
                    placeholder: 'Write your message...',
                    value: formData.message,
                    onChange: e => setFormData(prev => ({ ...prev, message: e.target.value }))
                }}
            />

            <BasicBtn
                btnStyleClass="btnStyle"
                btnData={{
                    disabled: loading,
                    onClick: () => console.log('Btn Clicked'),
                    text: loading ? "Sending..." : "Send Message"
                }}
            />
        </Form>
    );
};