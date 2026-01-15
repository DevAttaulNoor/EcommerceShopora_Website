import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import returns from "@data/policies/returns.json";

export const metadata = {
    title: Routes.RETURNS_POLICY.meta.title,
    description: Routes.RETURNS_POLICY.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.RETURNS_POLICY.title,
                    description: "This Return & Refund Policy outlines the conditions, process, and timelines for returning items purchased from our platform."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.RETURNS_POLICY.path,
                        title: Routes.RETURNS_POLICY.title
                    }
                ]}
            />

            {returns?.map(item => (
                <section
                    key={item.id}
                    className="flex flex-col gap-2 md:gap-3 xl:gap-4"
                >
                    <h2 className="titleStyle">
                        {item.id}. {item.title}
                    </h2>

                    {item.description && (
                        <p className="descriptionStyle">
                            {item.description}
                        </p>
                    )}

                    {item.list && (
                        <ul className="list-disc ml-5 flex flex-col gap-1 descriptionStyle md:gap-2 xl:gap-3">
                            {item.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </InnerContainer>
    );
};

export default page;