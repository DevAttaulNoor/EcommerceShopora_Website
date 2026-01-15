import { Icons } from "@/constants/Icons";
import { Routes } from "@/constants/Routes";
import { Accordion } from "@/components/atomic/Accordion";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { ContactUsForm } from "@/sections/contact-page-related/ContactUsForm";
import faqs from "@data/faqs.json";

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
            <IntroSection
                headingData={{
                    title: Routes.CONTACT.title,
                    description: "Need help with an order, product, or payment? Our support team is here to help you."
                }}
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
                    accordionData={faqs?.slice(0, 5)}
                />
            </section>
        </InnerContainer>
    )
}

export default page