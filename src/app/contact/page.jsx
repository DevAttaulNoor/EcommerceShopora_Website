import { Icons } from "@/constants/Icons";
import { Routes } from "@/constants/Routes";
import { Accordion } from "@/components/atomic/Accordion";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { ContactUsForm } from "@/sections/contact-page-related/ContactUsForm";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const metadata = {
    title: Routes.CONTACT.meta.title,
    description: Routes.CONTACT.meta.description,
};

const methods = [
    {
        icon: Icons.MAIL,
        title: "Email Support",
        value: "support@yourstore.com",
    },
    {
        icon: Icons.PHONE,
        title: "Call / WhatsApp",
        value: "+92 300 1234567",
    },
    {
        icon: Icons.LOCATION,
        title: "Office",
        value: "Pakistan",
    },
];

const page = () => {
    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted">
                <HeadingWithDescription
                    title={Routes.CONTACT.title}
                    description={"Need help with an order, product, or payment? Our support team is here to help you."}
                />

                <Breadcrumb
                    breadcrumbData={[
                        {
                            path: Routes.HOME.path,
                            title: Routes.HOME.title
                        },
                        {
                            path: Routes.CONTACT.path,
                            title: Routes.CONTACT.title
                        }
                    ]}
                />
            </section>

            <section className="sectionStyle">
                <h1 className="titleStyle">Give a look into this</h1>

                <div className="grid grid-cols-3 gap-5">
                    {methods.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-5 rounded-xl bg-customMuted"
                        >
                            <span className="text-xl">{item.icon}</span>

                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-muted-foreground">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="sectionStyle">
                <h1 className="titleStyle">Send us a message</h1>

                <ContactUsForm />
            </section>

            <section className="sectionStyle">
                <h1 className="titleStyle">Quick help</h1>

                <Accordion
                    accordionData={[
                        {
                            id: 1,
                            question: "Where is my order?",
                            anwser: "Anwser"
                        },
                        {
                            id: 2,
                            question: "How long does delivery take?",
                            anwser: "Anwser"
                        },
                        {
                            id: 3,
                            question: "How do I return a product?",
                            anwser: "Anwser"
                        },
                        {
                            id: 4,
                            question: "What payment methods are accepted?",
                            anwser: "Anwser"
                        }
                    ]}
                />
            </section>
        </InnerContainer>
    )
}

export default page