import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";

export const metadata = {
    title: Routes.CART.meta.title,
    description: Routes.CART.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.CART.title,
                    description: Routes.CART.meta.description
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.CART.path,
                        title: Routes.CART.title
                    }
                ]}
            />

            <section>
                Cart
            </section>
        </InnerContainer>
    )
}

export default page