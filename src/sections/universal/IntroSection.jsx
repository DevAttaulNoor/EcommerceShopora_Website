import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const IntroSection = ({ containerStyle = '', headingData, breadcrumbData }) => {
    return (
        <section className={`${containerStyle} flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted`}>
            <HeadingWithDescription
                title={headingData.title}
                description={headingData?.description}
            />

            <Breadcrumb
                breadcrumbData={breadcrumbData}
            />
        </section>
    );
};