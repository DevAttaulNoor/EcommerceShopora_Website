import Link from "next/link";
import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.REGISTER.meta.title,
    description: Routes.REGISTER.meta.description,
};

const page = () => {
    return (
        <section className="w-full h-full flex overflow-y-auto">
            <div className="w-full flex flex-col gap-2 justify-center p-20 text-white bg-gradient-to-br from-custom-gold to-custom-charcoal md:gap-3 xl:gap-4">
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

            <div className="w-full flex justify-center p-10">
                <div className="max-w-md p-8 rounded-md shadow-md">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold mb-2">
                        Create an Account
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        It only takes a minute
                    </p>

                    {/* Social Signup */}
                    <div className="space-y-3 mb-6">
                        <button className="w-full border rounded-lg py-3 flex justify-center gap-3 hover:bg-gray-50">
                            🔵 Sign up with Google
                        </button>
                        <button className="w-full border rounded-lg py-3 flex justify-center gap-3 hover:bg-gray-50">
                            🍎 Sign up with Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <span className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400">OR</span>
                        <span className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                            At least 8 characters, 1 uppercase, 1 number
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Repeat password"
                            className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 text-sm mb-6">
                        <input type="checkbox" className="mt-1" />
                        <p className="text-gray-500">
                            I agree to the
                            <Link href={Routes.TERMS_POLICY.path} className="text-blue-600 mx-1">
                                Terms of Service
                            </Link>
                            and
                            <Link href={Routes.PRIVACY_POLICY.path} className="text-blue-600 ml-1">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>

                    {/* Submit */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                        Create Account
                    </button>

                    {/* Login Redirect */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?
                        <Link href={Routes.LOGIN.path} className="text-blue-600 ml-1">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default page