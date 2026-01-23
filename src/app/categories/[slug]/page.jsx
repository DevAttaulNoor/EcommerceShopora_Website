import { Routes } from "@/config/routes";
import { notFound } from "next/navigation";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { FilterSection } from "@/sections/universal/FilterSection";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import products from "@/data/products.json";
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
    const category = categories?.find((cat) => cat.slug === slug);

    if (!category) notFound();

    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: category?.title
                }}
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

            <div className="flex gap-10">
                <FilterSection
                    filterData={{ categories }}
                />

                <section className="w-full h-full grid grid-cols-4 gap-4">
                    {products?.map(item => (
                        <ProductCard
                            key={item.id}
                            productData={item}
                        />
                    ))}
                </section>
            </div>
        </InnerContainer>
    );
}