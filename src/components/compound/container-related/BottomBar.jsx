import Link from "next/link";
import { Routes } from "@/constants/Routes";

export const BottomBar = () => {
    return (
        <div className="w-full grid grid-cols-5 gap-2.5 text-xs py-2 innerContainerPadding border-t border-t-customMuted text-customMuted bg-custom-charcoal">
            <div className="flex items-center">
                © {new Date().getFullYear()}
                <span className="text-custom-gold font-medium ml-0.5">
                    Shopora
                </span>
                . All rights reserved.
            </div>

            <div className="flex items-center justify-center gap-2 text-sm col-span-3">
                <span>Secure Payments</span>
                <span className="opacity-40">•</span>
                <span>100% Authentic Products</span>
            </div>

            <div className="flex items-center justify-end gap-2.5">
                <Link
                    href={Routes.PRIVACY_POLICY.path}
                    className="hover:text-customHover"
                >
                    Privacy
                </Link>
                <Link
                    href={Routes.TERMS_POLICY.path}
                    className="hover:text-customHover"
                >
                    Terms
                </Link>
                <Link
                    href={Routes.RETURNS_POLICY.path}
                    className="hover:text-customHover"
                >
                    Returns
                </Link>
            </div>
        </div>
    );
};