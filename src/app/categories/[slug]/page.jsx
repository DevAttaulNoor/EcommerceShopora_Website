import { notFound } from "next/navigation";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import { FilterSection } from "@/sections/universal/filter-section/FilterSection";
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
            <section className="flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted">
                <h1 className="titleStyle">{category?.title}</h1>

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

            <div className="flex gap-10 innerContainerPadding">
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