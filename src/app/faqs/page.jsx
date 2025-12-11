import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.FAQ.meta.title,
    description: Routes.FAQ.meta.description,
};

const page = () => {
    return (
        <div>Faqs</div>
    )
}

export default page