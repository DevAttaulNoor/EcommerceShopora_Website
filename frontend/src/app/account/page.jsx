import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { AccountContent } from "@/sections/account-page-related/AccountContent";

export const metadata = {
    title: Routes.ACCOUNT.meta.title,
    description: Routes.ACCOUNT.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.ACCOUNT.title,
                    description: "Need help with an order, product, or payment? Our support team is here to help you."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.ACCOUNT.path,
                        title: Routes.ACCOUNT.title
                    }
                ]}
            />

            <AccountContent />
        </InnerContainer>
    )
}

export default page