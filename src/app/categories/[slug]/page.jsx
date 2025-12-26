import { notFound } from "next/navigation";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";
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

export default async function CategoryProductsPage({ params }) {
    const { slug } = await params;
    const category = categories.find((cat) => cat.slug === slug);

    if (!category) notFound();

    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted">
                <HeadingWithDescription
                    title={category.title}
                    description={''}
                />

                <Breadcrumb
                    breadcrumbData={[
                        {
                            path: Routes.HOME.path,
                            title: Routes.HOME.title
                        },
                        {
                            path: Routes.CATEGORIES.path,
                            title: Routes.CATEGORIES.title
                        },
                        {
                            path: Routes.CATEGORY(slug).path,
                            title: category.title
                        },
                    ]}
                />
            </section>

            <div className="p-8">
                <h1 className="text-3xl font-bold">{category.title}</h1>
                <p className="mt-2 text-gray-600">{category.meta.description}</p>
            </div>
        </InnerContainer>
    );
}