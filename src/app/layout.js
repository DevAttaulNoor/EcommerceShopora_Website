import "./globals.css";

export const metadata = {
    title: "Home - Shopora",
    description: "A Ecom website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
