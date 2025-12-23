import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const metadata = {
    title: Routes.ABOUT.meta.title,
    description: Routes.ABOUT.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted">
                <HeadingWithDescription
                    title={Routes.ABOUT.title}
                    description={""}
                />

                <Breadcrumb
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
            </section>

            <section className="sectionStyle">
                <h2 className="titleStyle">
                    Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    We are a modern e-commerce platform built to make online shopping
                    simple, reliable, and accessible across Pakistan. Our goal is to
                    connect customers with trusted sellers and quality products—all
                    in one place.
                </p>
            </section>

            <section className="grid gap-8 rounded-xl bg-customMuted md:grid-cols-2">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                        To empower shoppers with a seamless online experience by
                        offering a wide range of products, secure payments, and
                        dependable delivery services.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                        To become Pakistan’s most trusted and customer-centric
                        e-commerce platform.
                    </p>
                </div>
            </section>

            <section className="sectionStyle">
                <h1 className="titleStyle">
                    Why Choose Us
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { title: "Wide Selection", desc: "Thousands of products across multiple categories." },
                        { title: "Trusted Sellers", desc: "Verified sellers and authentic products." },
                        { title: "Secure Payments", desc: "Safe and flexible payment options." },
                        { title: "Fast Delivery", desc: "Nationwide delivery you can rely on." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="p-5 rounded-xl bg-white shadow-sm text-center"
                        >
                            <h4 className="font-medium mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid gap-6 text-center rounded-xl bg-customMuted sm:grid-cols-3">
                <div>
                    <h3 className="text-3xl font-bold">10K+</h3>
                    <p className="text-sm text-gray-600">Products</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">1K+</h3>
                    <p className="text-sm text-gray-600">Trusted Sellers</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">100K+</h3>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
            </section>

            <section className="text-center rounded-xl text-white bg-custom-gold">
                <h2 className="text-2xl font-semibold mb-3">
                    Ready to Start Shopping?
                </h2>
                <p className="mb-6 text-sm opacity-90">
                    Discover amazing deals from trusted sellers today.
                </p>

                <a
                    href={Routes.HOME.path}
                    className="inline-block px-6 py-3 bg-white text-custom-gold rounded-lg font-medium"
                >
                    Explore Products
                </a>
            </section>

            <section className="sectionStyle">
                <h2 className="titleStyle">
                    Our Commitment to You
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600">
                    We continuously work to improve our platform, ensure customer
                    satisfaction, and provide reliable support whenever you need it.
                </p>
            </section>
        </InnerContainer>
    )
}

export default page