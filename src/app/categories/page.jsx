import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.CATEGORIES.meta.title,
    description: Routes.CATEGORIES.meta.description,
};

const page = () => {
    return (
        <div>Categories</div>
    )
}

export default page