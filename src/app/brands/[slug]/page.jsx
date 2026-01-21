import { Routes } from "@/config/routes";
import { notFound } from "next/navigation";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { FilterSection } from "@/sections/universal/FilterSection";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import brands from "@/data/brands.json";
import products from "@/data/products.json";

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

export default async function BrandProductsPage({ params }) {
    const { slug } = await params;
    const brand = brands?.find((cat) => cat.slug === slug);

    if (!brand) notFound();

    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: brand?.title
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.BRANDS.path,
                        title: Routes.BRANDS.title
                    },
                    {
                        path: Routes.BRAND(slug).path,
                        title: brand.title
                    },
                ]}
            />

            <div className="flex gap-10 innerContainerPadding">
                <FilterSection
                    filterData={{ brands }}
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