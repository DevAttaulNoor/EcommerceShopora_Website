import Link from "next/link";
import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.LOGIN.meta.title,
    description: Routes.LOGIN.meta.description,
};

const page = () => {
    return (
        <section className="w-full h-full flex">
            <div className="w-full flex flex-col gap-2 justify-center p-20 text-white bg-gradient-to-br from-custom-gold to-custom-charcoal md:gap-3 xl:gap-4">
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

            <div className="w-full flex items-center justify-center p-10">
                <div className="max-w-md p-8 rounded-md shadow-md">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold mb-2">
                        Sign In to Your Account
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Enter your credentials to continue
                    </p>

                    {/* Social Login */}
                    <div className="space-y-3 mb-6">
                        <button className="w-full border rounded-lg py-3 flex justify-center gap-3 hover:bg-gray-50">
                            🔵 Continue with Google
                        </button>
                        <button className="w-full border rounded-lg py-3 flex justify-center gap-3 hover:bg-gray-50">
                            🍎 Continue with Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <span className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">OR</span>
                        <span className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-sm font-medium">Email address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex justify-between items-center text-sm mb-6">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <button className="text-blue-600">
                            Forgot password?
                        </button>
                    </div>

                    {/* Submit */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                        Sign In
                    </button>

                    {/* REGISTER */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don’t have an account?
                        <Link href={Routes.REGISTER.path} className="text-blue-600 ml-1">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default page