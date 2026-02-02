import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { OrderSummarySection } from "@/sections/universal/OrderSummarySection";

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
                    description: Routes.CHECKOUT.meta.description,
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

            <section className="flex gap-10">
                <div className="w-full flex flex-col gap-10">
                    {/* Shipping Info */}
                    <div className="border rounded-xl p-6 space-y-5">
                        <h2 className="text-xl font-semibold">Shipping Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input className="input" placeholder="First Name" />
                            <input className="input" placeholder="Last Name" />
                            <input className="input md:col-span-2" placeholder="Address" />
                            <input className="input" placeholder="City" />
                            <input className="input" placeholder="Postal Code" />
                            <input className="input md:col-span-2" placeholder="Phone Number" />
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="border rounded-xl p-6 space-y-4">
                        <h2 className="text-xl font-semibold">Payment Method</h2>

                        <label className="flex items-center gap-3">
                            <input type="radio" name="payment" defaultChecked />
                            Cash on Delivery
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="radio" name="payment" />
                            Credit / Debit Card
                        </label>
                    </div>
                </div>

                <OrderSummarySection
                    btnData={{
                        path: Routes.HOME.path,
                        text: 'Place Order'
                    }}
                />
            </section>
        </InnerContainer>
    );
};

export default page;