import { notFound } from "next/navigation";
import products from "@/data/products.json";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = products.find((cat) => cat.slug === slug);

    if (!product) {
        return {
            title: "Product Not Found | Shopora",
            description: "This product does not exist",
        };
    }

    return product.meta;
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = products.find((cat) => cat.slug === slug);

    if (!product) notFound();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 text-gray-600">{product.meta.description}</p>
        </div>
    );
}