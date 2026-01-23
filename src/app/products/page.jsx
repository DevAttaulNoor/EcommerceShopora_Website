import { Routes } from "@/config/routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { FilterSection } from "@/sections/universal/FilterSection";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import brands from "@data/brands.json";
import products from "@data/products.json";
import categories from "@data/categories.json";

export const metadata = {
    title: Routes.PRODUCTS.meta.title,
    description: Routes.PRODUCTS.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: Routes.PRODUCTS.title
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.PRODUCTS.path,
                        title: Routes.PRODUCTS.title
                    }
                ]}
            />

            <div className="flex gap-10">
                <FilterSection
                    filterData={{
                        brands,
                        categories
                    }}
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
    )
}

export default page