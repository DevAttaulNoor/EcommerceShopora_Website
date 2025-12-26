"use client";

import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen w-full h-full flex flex-col items-center justify-center text-center gap-6">
            <HeadingWithDescription
                title={'Something went wrong!'}
                description={error.message}
            />

            <BasicBtn
                btnData={{
                    onClick: () => reset(),
                    text: 'Try Again'
                }}
                btnStyleClass="px-6 py-3 rounded-md text-custom-gold bg-custom-charcoal"
            />
        </div>
    );
}