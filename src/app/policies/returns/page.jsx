import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";

export const metadata = {
    title: Routes.RETURNS_POLICY.meta.title,
    description: Routes.RETURNS_POLICY.meta.description,
};

const returnsPolicyData = [
    {
        id: 1,
        title: "Return Eligibility",
        description:
            "We want you to be satisfied with your purchase. Items may be eligible for return if they meet the conditions outlined below.",
        list: [
            "The item must be returned within the specified return window",
            "The item must be unused, unworn, and in its original condition",
            "Original packaging, tags, and accessories must be included",
            "Proof of purchase or order confirmation is required",
        ],
    },
    {
        id: 2,
        title: "Return Window",
        description:
            "Customers may request a return within a specific period after receiving the product. Requests submitted after this period may not be accepted.",
        list: [
            "Standard return window: 7–14 days from delivery",
            "Return requests outside the window are subject to approval",
        ],
    },
    {
        id: 3,
        title: "Non-Returnable Items",
        description:
            "Certain products are not eligible for return due to hygiene, safety, or legal reasons.",
        list: [
            "Personal care and hygiene products",
            "Customized or made-to-order items",
            "Perishable goods",
            "Digital products or downloadable content",
            "Items marked as non-returnable at the time of purchase",
        ],
    },
    {
        id: 4,
        title: "Return Process",
        description:
            "To initiate a return, please follow the steps outlined below to ensure a smooth and timely process.",
        list: [
            "Contact our support team or submit a return request from your account",
            "Provide order details and reason for return",
            "Wait for return approval and instructions",
            "Ship the item back using the provided method",
        ],
    },
    {
        id: 5,
        title: "Return Shipping",
        description:
            "Return shipping responsibilities depend on the reason for return.",
        list: [
            "If the return is due to a defect or incorrect item, return shipping will be covered by us",
            "For change-of-mind returns, customers may be responsible for shipping costs",
            "Shipping fees are non-refundable unless otherwise stated",
        ],
    },
    {
        id: 6,
        title: "Inspection & Approval",
        description:
            "All returned items are inspected upon receipt. Approval of refunds or exchanges is subject to inspection results.",
        list: [
            "Items showing signs of use or damage may be rejected",
            "Incomplete or improperly packaged returns may not be accepted",
        ],
    },
    {
        id: 7,
        title: "Refunds",
        description:
            "Once a return is approved, refunds will be processed according to the original payment method.",
        list: [
            "Refunds are processed within 5–10 business days after approval",
            "Bank processing times may vary depending on your payment provider",
            "Original shipping charges are non-refundable unless the return is our fault",
        ],
    },
    {
        id: 8,
        title: "Exchanges",
        description:
            "If you received a defective or incorrect item, you may request an exchange instead of a refund, subject to availability.",
    },
    {
        id: 9,
        title: "Order Cancellations",
        description:
            "Orders may be canceled before shipment. Once an order has been shipped, it cannot be canceled and must follow the return process.",
    },
    {
        id: 10,
        title: "Damaged or Incorrect Items",
        description:
            "If you receive a damaged or incorrect item, please notify us immediately so we can resolve the issue promptly.",
        list: [
            "Report the issue within 48 hours of delivery",
            "Provide clear photos or videos as evidence",
        ],
    },
    {
        id: 11,
        title: "Late or Missing Refunds",
        description:
            "If you have not received a refund after the stated processing period, please contact our support team for assistance.",
    },
    {
        id: 12,
        title: "Policy Updates",
        description:
            "We reserve the right to update or modify this Return & Refund Policy at any time. Changes will be effective once posted on this page.",
    },
    {
        id: 13,
        title: "Contact Us",
        description: (
            <>
                For questions regarding returns, refunds, or exchanges, please contact our support team at{" "}
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
                    title: Routes.RETURNS_POLICY.title,
                    description: "This Return & Refund Policy outlines the conditions, process, and timelines for returning items purchased from our platform."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.RETURNS_POLICY.path,
                        title: Routes.RETURNS_POLICY.title
                    }
                ]}
            />

            {returnsPolicyData.map(({ id, title, description, list }) => (
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
    );
};

export default page;