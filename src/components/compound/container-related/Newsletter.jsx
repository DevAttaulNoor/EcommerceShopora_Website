"use client";

import { useState } from "react";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { InputField } from "@/components/atomic/fields/InputField";

export const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: integrate API / Firebase / Mailchimp later
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <div className="relative max-w-innerContainer w-full flex items-center justify-between px-12 py-16 gap-20 rounded-2xl mx-auto overflow-hidden bg-linear-to-r text-white from-custom-charcoal to-custom-gold">
            <div className="w-full flex flex-col gap-2.5">
                <h1 className="titleStyle">Join Our Newsletter</h1>

                <p className="descriptionStyle">
                    Get exclusive deals, latest product updates, and special discounts delivered straight to your inbox.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-end gap-2.5"
            >
                <InputField
                    inputData={{
                        type: "email",
                        required: true,
                        placeholder: "Enter your email address",
                        value: email,
                        onChange: (e) => setEmail(e.target.value)
                    }}
                    inputStyleClass="max-w-96 w-full px-3.5 py-2 rounded-md text-black bg-white"
                />

                <BasicBtn
                    btnData={{
                        onClick: () => console.log('Btn clicked'),
                        text: 'Submit'
                    }}
                    btnStyleClass="px-3 py-2 rounded-md bg-custom-charcoal"
                />
            </form>
        </div>
    );
};