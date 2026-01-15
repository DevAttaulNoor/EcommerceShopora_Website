import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";

export const metadata = {
    title: Routes.WISHLIST.meta.title,
    description: Routes.WISHLIST.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.WISHLIST.title,
                    description: Routes.WISHLIST.meta.description
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.WISHLIST.path,
                        title: Routes.WISHLIST.title
                    }
                ]}
            />

            <section>
                Wishlist
            </section>
        </InnerContainer>
    )
}

export default page