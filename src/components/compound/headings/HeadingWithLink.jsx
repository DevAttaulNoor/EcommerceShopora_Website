import Link from "next/link";

export const HeadingWithLink = ({ heading, linkData }) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{heading}</h1>

            <Link
                href={linkData.href}
                className="text-lg font-medium cursor-pointer hover:underline hover:text-red-500"
            >
                {linkData.text}
            </Link>
        </div>
    );
};