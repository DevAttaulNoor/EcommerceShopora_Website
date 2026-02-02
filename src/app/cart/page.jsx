import { Routes } from "@/config/routes";
import { Table } from "@/components/atomic/Table";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { OrderSummarySection } from "@/sections/universal/OrderSummarySection";

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

            <section className="flex items-start gap-10">
                <Table />

                <OrderSummarySection
                    btnData={{
                        path: Routes.CHECKOUT.path,
                        text: 'Checkout'
                    }}
                />
            </section>
        </InnerContainer>
    )
}

export default page