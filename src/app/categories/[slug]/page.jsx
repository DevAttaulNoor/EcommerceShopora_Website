import { notFound } from "next/navigation";
import categories from "@/data/categories.json";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = categories.find((cat) => cat.slug === slug);

    if (!category) {
        return {
            title: "Category Not Found | Shopora",
            description: "This category does not exist",
        };
    }

    return category.meta;
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const category = categories.find((cat) => cat.slug === slug);

    if (!category) notFound();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <p className="mt-2 text-gray-600">{category.meta.description}</p>
        </div>
    );
}