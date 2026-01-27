import { Routes } from "@/config/routes";
import { Table } from "@/components/atomic/Table";
import { InnerContainer } from "@/layouts/InnerContainer";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
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

            <section className="flex gap-10">
                <Table />

                <div className="w-80 flex flex-col p-3 gap-2.5 border rounded-md">
                    <h4>Total</h4>

                    <div>
                        <h6>Sub-Total</h6>
                        <p>120</p>
                    </div>

                    <div>
                        <h6>Delivery</h6>
                        <p>??</p>
                    </div>

                    <BasicBtn
                        btnStyleClass="w-full text-center px-2 py-2 border rounded-md cursor-pointer border-custom-gold text-white bg-custom-gold hover:border-customHover hover:bg-customHover"
                        btnData={{
                            path: Routes.CHECKOUT.path,
                            text: 'Checkout'
                        }}
                    />
                </div>
            </section>
        </InnerContainer>
    )
}

export default page