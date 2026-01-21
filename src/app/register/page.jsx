import Link from "next/link";
import { Routes } from "@/config/routes";
import { RegisterUserForm } from "@/sections/register-page-related/RegisterUserForm";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export const metadata = {
    title: Routes.REGISTER.meta.title,
    description: Routes.REGISTER.meta.description,
};

const page = () => {
    return (
        <section className="w-full h-full flex overflow-y-auto">
            <div className="flex flex-col gap-2 justify-center p-20 text-white bg-linear-to-br from-custom-gold to-custom-charcoal md:gap-3 xl:gap-4">
                <h1 className="titleStyle">
                    Create Your Account
                </h1>
                <p className="descriptionStyle">
                    Join us to enjoy faster checkout, order tracking, and exclusive deals.
                </p>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                    <li className="descriptionStyle list-disc ml-8">Track orders & deliveries</li>
                    <li className="descriptionStyle list-disc ml-8">Manage wishlist & reviews</li>
                    <li className="descriptionStyle list-disc ml-8">Secure payments & checkout</li>
                </div>
            </div>

            <div className="flex flex-col p-8 gap-4 mx-auto rounded-md shadow-md">
                <HeadingWithDescription
                    title={"Create an Account"}
                    description={"It only takes a minute"}
                />

                <RegisterUserForm />

                <p className="text-center text-sm text-gray-500">
                    Already have an account? {""}

                    <Link
                        href={Routes.LOGIN.path}
                        className="text-blue-600"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default page;