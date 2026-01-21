import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";

export const metadata = {
    title: Routes.CHECKOUT.meta.title,
    description: Routes.CHECKOUT.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.CHECKOUT.title,
                    description: Routes.CHECKOUT.meta.description
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.CHECKOUT.path,
                        title: Routes.CHECKOUT.title
                    }
                ]}
            />

            <section>
                Checkout
            </section>
        </InnerContainer>
    )
}

export default page