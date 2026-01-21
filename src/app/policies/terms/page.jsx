import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import terms from "@data/policies/terms.json";

export const metadata = {
    title: Routes.TERMS_POLICY.meta.title,
    description: Routes.TERMS_POLICY.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.TERMS_POLICY.title,
                    description: "These Terms & Conditions govern your use of our platform, outlining your rights, responsibilities, and legal obligations."
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.TERMS_POLICY.path,
                        title: Routes.TERMS_POLICY.title
                    }
                ]}
            />

            {terms?.map(item => (
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
    )
}

export default page