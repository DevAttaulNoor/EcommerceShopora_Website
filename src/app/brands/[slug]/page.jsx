import { notFound } from "next/navigation";
import brands from "@/data/brands.json";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const brand = brands.find((cat) => cat.slug === slug);

    if (!brand) {
        return {
            title: "Brand Not Found | Shopora",
            description: "This brand does not exist",
        };
    }

    return brand.meta;
}

export default async function BrandPage({ params }) {
    const { slug } = await params;
    const brand = brands.find((cat) => cat.slug === slug);

    if (!brand) notFound();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{brand.title}</h1>
            <p className="mt-2 text-gray-600">{brand.meta.description}</p>
        </div>
    );
}