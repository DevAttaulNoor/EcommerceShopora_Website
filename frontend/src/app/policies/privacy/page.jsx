import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import privacy from "@data/policies/privacy.json";

export const metadata = {
    title: Routes.PRIVACY_POLICY.meta.title,
    description: Routes.PRIVACY_POLICY.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.PRIVACY_POLICY.title,
                    description: "Privacy Policy explains how we collect, use, and protect your personal information when you use our platform"
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.PRIVACY_POLICY.path,
                        title: Routes.PRIVACY_POLICY.title
                    }
                ]}
            />

            {privacy?.map(item => (
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