import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const ShopNowSection = ({ title, description, btnStyleClass = '', btnData }) => {
    return (
        <section className="flex flex-col items-center justify-center text-center p-10 gap-5 rounded-xl text-white bg-custom-gold">
            <HeadingWithDescription
                title={title}
                description={description}
            />

            <BasicBtn
                btnStyleClass={btnStyleClass}
                btnData={btnData}
            />
        </section>
    );
};