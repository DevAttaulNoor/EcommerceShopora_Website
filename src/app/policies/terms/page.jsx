import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";

export const metadata = {
    title: Routes.TERMS_POLICY.meta.title,
    description: Routes.TERMS_POLICY.meta.description,
};

const termsPolicyData = [
    {
        id: 1,
        title: "Acceptance of Terms",
        description:
            "By accessing or using our platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of the platform immediately.",
    },
    {
        id: 2,
        title: "Eligibility & Account Registration",
        description:
            "To use certain features of the platform, you must create an account and provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and all activities conducted under your account.",
        list: [
            "Users must be at least 18 years old or have legal guardian consent",
            "One account per user unless explicitly permitted",
            "You are responsible for all activity under your account",
        ],
    },
    {
        id: 3,
        title: "Use of the Platform",
        description:
            "You agree to use the platform only for lawful purposes and in accordance with these Terms. Any misuse of the platform may result in suspension or termination of your account.",
        list: [
            "Do not engage in fraudulent, deceptive, or harmful activities",
            "Do not interfere with platform security or functionality",
            "Do not misuse content, listings, or user data",
        ],
    },
    {
        id: 4,
        title: "Products, Pricing & Availability",
        description:
            "We strive to ensure that product information, pricing, and availability are accurate. However, errors may occur. We reserve the right to correct inaccuracies, update information, or cancel orders at our discretion.",
    },
    {
        id: 5,
        title: "Orders & Payments",
        description:
            "Placing an order constitutes an offer to purchase. Orders are subject to acceptance and availability. Payments must be completed through authorized payment methods only.",
        list: [
            "All prices are subject to change without prior notice",
            "Payment must be completed before order confirmation",
            "We reserve the right to refuse or cancel any order",
        ],
    },
    {
        id: 6,
        title: "Shipping & Delivery",
        description:
            "Delivery times provided are estimates and may vary due to external factors. We are not responsible for delays caused by courier services, customs, or unforeseen circumstances.",
    },
    {
        id: 7,
        title: "Returns, Refunds & Cancellations",
        description:
            "Returns and refunds are subject to our Return & Refund Policy. Certain items may not be eligible for return or refund due to hygiene, customization, or legal restrictions.",
    },
    {
        id: 8,
        title: "User Content & Reviews",
        description:
            "Users may submit reviews, ratings, and other content. By submitting content, you grant us a non-exclusive, royalty-free license to use, display, and distribute such content on the platform.",
        list: [
            "Content must be truthful and lawful",
            "Abusive, misleading, or offensive content is prohibited",
            "We reserve the right to remove content at our discretion",
        ],
    },
    {
        id: 9,
        title: "Intellectual Property",
        description:
            "All content on the platform, including logos, text, graphics, images, and software, is the property of the platform or its licensors and is protected by applicable intellectual property laws.",
    },
    {
        id: 10,
        title: "Account Suspension & Termination",
        description:
            "We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activities, or pose a risk to other users or the platform.",
    },
    {
        id: 11,
        title: "Limitation of Liability",
        description:
            "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the platform.",
    },
    {
        id: 12,
        title: "Indemnification",
        description:
            "You agree to indemnify and hold harmless the platform, its affiliates, and partners from any claims, damages, or expenses arising from your use of the platform or violation of these Terms.",
    },
    {
        id: 13,
        title: "Changes to Terms",
        description:
            "We may update these Terms and Conditions at any time. Changes will be effective upon posting on this page. Continued use of the platform constitutes acceptance of the updated terms.",
    },
    {
        id: 14,
        title: "Governing Law",
        description:
            "These Terms and Conditions shall be governed by and interpreted in accordance with the laws applicable in your jurisdiction.",
    },
    {
        id: 15,
        title: "Contact Us",
        description: (
            <>
                If you have any questions regarding these Terms and Conditions, please contact us at{" "}
                <a
                    href="mailto:support@yourstore.com"
                    className="text-custom-gold underline"
                >
                    support@yourstore.com
                </a>
                .
            </>
        ),
    },
];


const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.TERMS_POLICY.title,
                    description: "These Terms & Conditions govern your use of our platform, outlining your rights, responsibilities, and legal obligations."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.TERMS_POLICY.path,
                        title: Routes.TERMS_POLICY.title
                    }
                ]}
            />

            {termsPolicyData.map(({ id, title, list, description }) => (
                <section
                    key={id}
                    className="flex flex-col gap-2 md:gap-3 xl:gap-4"
                >
                    <h2 className="titleStyle">
                        {id}. {title}
                    </h2>

                    {description && (
                        <p className="descriptionStyle">
                            {description}
                        </p>
                    )}

                    {list && (
                        <ul className="list-disc ml-5 flex flex-col gap-1 descriptionStyle md:gap-2 xl:gap-3">
                            {list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </InnerContainer>
    )
}

export default page