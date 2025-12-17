import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.BRANDS.meta.title,
    description: Routes.BRANDS.meta.description,
};

const page = () => {
    return (
        <div>Brands</div>
    )
}

export default page