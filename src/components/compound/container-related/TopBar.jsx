import Link from "next/link";
import { Icons } from "@/constants/Icons";
import { Routes } from "@/constants/Routes";

export const TopBar = () => {
    return (
        <div className="w-full grid grid-cols-5 gap-2.5 text-xs py-2 innerContainerPadding border-b border-b-customMuted text-customMuted bg-custom-charcoal">
            <div className="flex items-center gap-1.5">
                <span className="text-base p-1 rounded cursor-pointer text-custom-gold bg-customMuted hover:text-customHover">{Icons.FACEBOOK}</span>
                <span className="text-base p-1 rounded cursor-pointer text-custom-gold bg-customMuted hover:text-customHover">{Icons.INSTAGRAM}</span>
                <span className="text-base p-1 rounded cursor-pointer text-custom-gold bg-customMuted hover:text-customHover">{Icons.TWITTER}</span>
            </div>

            <div className="flex items-center justify-center text-center font-medium gap-0.5 col-span-3">
                MEGA SALE ON ALL ITEMS UPTO
                <span className="text-custom-gold">60%</span>
                OFF
            </div>

            <div className="flex items-center justify-end gap-2.5">
                <Link
                    href={Routes.HOME.path}
                    className="hover:text-customHover"
                >
                    Help
                </Link>
                <Link
                    href={Routes.LOGIN.path}
                    className="hover:text-customHover"
                >
                    {Routes.LOGIN.title}
                </Link>
                <Link
                    href={Routes.SIGNUP.path}
                    className="text-custom-gold hover:text-customHover"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};