import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.PRIVACY_POLICY.meta.title,
    description: Routes.PRIVACY_POLICY.meta.description,
};

const page = () => {
    return (
        <div>Policy - Privacy</div>
    )
}

export default page