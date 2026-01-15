import "./globals.css";
import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.HOME.meta.title,
    description: Routes.HOME.meta.description,
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png"
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="relative outerContainerStyle">
                {children}
            </body>
        </html>
    );
}