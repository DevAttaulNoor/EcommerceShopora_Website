import "./globals.css";
import { Routes } from "@/constants/Routes";

export const metadata = {
    title: Routes.HOME.meta.title,
    description: Routes.HOME.meta.description,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="max-w-screen-2xl mx-auto shadow-lg">
                {children}
            </body>
        </html>
    );
}
