import { Routes } from "@/config/routes";
import { Accordion } from "@/components/atomic/Accordion";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import faqs from "@data/faqs.json";

export const metadata = {
    title: Routes.FAQ.meta.title,
    description: Routes.FAQ.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.FAQ.title,
                    description: "Find answers to frequently asked questions about our platform, services, orders, payments, and policies to help you get quick clarity."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.FAQ.path,
                        title: Routes.FAQ.title
                    }
                ]}
            />

            <Accordion
                accordionData={faqs}
            />
        </InnerContainer>
    )
}

export default page