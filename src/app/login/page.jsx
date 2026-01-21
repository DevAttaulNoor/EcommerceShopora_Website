import Link from "next/link";
import { Routes } from "@/config/routes";
import { LoginUserForm } from "@/sections/login-page-related/LoginUserForm";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const metadata = {
    title: Routes.LOGIN.meta.title,
    description: Routes.LOGIN.meta.description,
};

const page = () => {
    return (
        <section className="w-full h-full flex">
            <div className="flex flex-col gap-2 justify-center p-20 text-white bg-linear-to-br from-custom-gold to-custom-charcoal md:gap-3 xl:gap-4">
                <h1 className="titleStyle">
                    Welcome Back to Shopora
                </h1>
                <p className="descriptionStyle">
                    Sign in to manage your orders, wishlist, and account details.
                </p>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                    <li className="descriptionStyle list-disc ml-8">Track orders & deliveries</li>
                    <li className="descriptionStyle list-disc ml-8">Manage wishlist & reviews</li>
                    <li className="descriptionStyle list-disc ml-8">Secure payments & checkout</li>
                </div>
            </div>

            <div className="flex flex-col p-8 gap-4 mx-auto rounded-md shadow-md">
                <HeadingWithDescription
                    title={"Log In to Your Account"}
                    description={"Enter your credentials to continue"}
                />

                <LoginUserForm />

                <p className="text-center text-sm text-gray-500">
                    Don’t have an account? {""}

                    <Link
                        href={Routes.REGISTER.path}
                        className="text-blue-600"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default page