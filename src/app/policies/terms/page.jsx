import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.TERMS_POLICY.meta.title,
    description: Routes.TERMS_POLICY.meta.description,
};

const page = () => {
    return (
        <div>Policy - Terms</div>
    )
}

export default page