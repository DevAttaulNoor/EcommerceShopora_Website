import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.LOGIN.meta.title,
    description: Routes.LOGIN.meta.description,
};

const page = () => {
    return (
        <div>Account - Login</div>
    )
}

export default page