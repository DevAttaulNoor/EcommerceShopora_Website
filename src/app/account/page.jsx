import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.ACCOUNT.meta.title,
    description: Routes.ACCOUNT.meta.description,
};

const page = () => {
    return (
        <div>Account</div>
    )
}

export default page