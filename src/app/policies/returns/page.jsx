import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.RETURNS_POLICY.meta.title,
    description: Routes.RETURNS_POLICY.meta.description,
};

const page = () => {
    return (
        <div>Policy - Returns</div>
    )
}

export default page