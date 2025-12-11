import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.ABOUT.meta.title,
    description: Routes.ABOUT.meta.description,
};

const page = () => {
    return (
        <div>About</div>
    )
}

export default page