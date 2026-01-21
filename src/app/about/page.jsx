import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { ShopNowSection } from "@/sections/universal/ShopNowSection";
import { DetailWithImageLayout } from "@/layouts/DetailWithImageLayout";
import { ImageSection } from "@/sections/universal/detail-section/ImageSection";
import { PlatformStatsSection } from "@/sections/universal/PlatformStatsSection";
import { DetailSection } from "@/sections/universal/detail-section/DetailSection";

export const metadata = {
    title: Routes.ABOUT.meta.title,
    description: Routes.ABOUT.meta.description,
};

const chooseUsData = [
    { title: "Wide Selection", desc: "Thousands of products across multiple categories." },
    { title: "Trusted Sellers", desc: "Verified sellers and authentic products." },
    { title: "Secure Payments", desc: "Safe and flexible payment options." },
    { title: "Fast Delivery", desc: "Nationwide delivery you can rely on." }
];

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.ABOUT.title,
                    description: "Driven by innovation and powered by passion, we bring together quality products and smart solutions to create a better, more convenient shopping experience for everyone."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.ABOUT.path,
                        title: Routes.ABOUT.title
                    }
                ]}
            />

            <DetailWithImageLayout
                leftsideData={
                    <ImageSection
                        imageData={{
                            src: '/detail-section/who-are-we.png',
                            alt: 'Image for Who are we'
                        }}
                    />
                }

                rightsideData={
                    <DetailSection
                        detailData={{
                            title: 'Who We Are',
                            description: [
                                "We are a modern e-commerce platform built to make online shopping simple, reliable, and accessible across Pakistan.Our mission is to bridge the gap between customers and trusted sellers by providing a secure and user friendly marketplace.",
                                "Logistics and delivery play a critical role in customer satisfaction. By working with reliable delivery partners, we ensure timely and secure nationwide shipping, keeping customers informed at every stage of their order through clear communication and tracking updates.",
                                "From everyday essentials to specialized products, we focus on quality, transparency, and customer satisfaction at every step of the shopping journey."
                            ],
                            list: [
                                "Trusted sellers and verified products",
                                "Nationwide delivery across Pakistan",
                                "Secure payments and transparent pricing",
                                "Dedicated customer support",
                            ]
                        }}
                    />
                }
            />

            <ShopNowSection
                title="Ready to Start Shopping?"
                description="Discover amazing deals from trusted sellers today."
                btnStyleClass="px-6 py-3 rounded-lg text-custom-gold bg-white"
                btnData={{
                    path: Routes.PRODUCTS.path,
                    text: 'Explore Products'
                }}
            />

            <DetailWithImageLayout
                leftsideData={
                    <DetailSection
                        detailData={{
                            title: "Our Vision",
                            description: [
                                "Our vision is to become Pakistan’s most trusted and customer-centric e-commerce platform, where people can shop with confidence, convenience, and complete peace of mind.",
                                "We aim to set new standards for online shopping by combining reliable technology, transparent processes, and strong seller partnerships that deliver consistent value to customers nationwide.",
                                "By continuously evolving with changing customer needs and market trends, we strive to build a platform that not only meets expectations but exceeds them—creating long-term relationships built on trust."
                            ],
                            list: [
                                "Build long-term trust with customers and sellers",
                                "Set high standards for quality and reliability",
                                "Expand access to online shopping across Pakistan",
                                "Drive innovation in digital commerce experiences",
                            ]
                        }}
                    />
                }
                rightsideData={
                    <ImageSection
                        imageData={{
                            // src: "/detail-section/our-vision.png",
                            src: "/question-mark.png",
                            alt: "Image for Our Vision"
                        }}
                    />
                }
            />

            <PlatformStatsSection
                statsData={{
                    productData: 50
                }}
            />

            <DetailWithImageLayout
                leftsideData={
                    <ImageSection
                        imageData={{
                            // src: "/detail-section/our-mission.png",
                            src: "/question-mark.png",
                            alt: "Image for Our Core Mission"
                        }}
                    />
                }
                rightsideData={
                    <DetailSection
                        detailData={{
                            title: "Our Core Mission",
                            description: [
                                "Our core mission is to simplify online shopping by providing a secure, user-friendly, and efficient platform that connects customers with reliable sellers and quality products.",
                                "We are committed to ensuring transparency at every step—from product discovery and pricing to payments and delivery—so customers always know what to expect.",
                                "Through strong logistics partnerships, responsive customer support, and continuous platform improvements, we work to deliver a smooth and dependable shopping experience for every order."
                            ],
                            list: [
                                "Deliver a seamless and secure shopping experience",
                                "Partner with trusted sellers and service providers",
                                "Ensure fast, reliable, and transparent delivery",
                                "Continuously improve through customer feedback",
                            ]
                        }}
                    />
                }
            />

            <section className="sectionStyle">
                <h1 className="titleStyle">
                    Why Choose Us
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {chooseUsData.map((item, index) => (
                        <div
                            key={index}
                            className="text-center p-5 rounded-xl shadow-sm bg-customMuted"
                        >
                            <h4 className="font-medium mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </InnerContainer>
    )
}

export default page