import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.PRODUCTS.meta.title,
    description: Routes.PRODUCTS.meta.description,
};

const page = () => {
    return (
        <div>Products</div>
    )
}

export default page