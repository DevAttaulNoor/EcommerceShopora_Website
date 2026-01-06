import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { AccountContent } from "@/sections/account-page-related/AccountContent";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const metadata = {
    title: Routes.ACCOUNT.meta.title,
    description: Routes.ACCOUNT.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted">
                <HeadingWithDescription
                    title={Routes.ACCOUNT.title}
                    description={"Need help with an order, product, or payment? Our support team is here to help you."}
                />

                <Breadcrumb
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
            </section>

            <AccountContent />
        </InnerContainer>
    )
}

export default page