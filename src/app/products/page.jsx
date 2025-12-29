import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import { FilterSection } from "@/sections/universal/filter-section/FilterSection";
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
            <section className="flex flex-col items-center justify-center py-10 gap-3.5 bg-amber-100">
                <h1 className="titleStyle">{Routes.PRODUCTS.title}</h1>

                <Breadcrumb
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
            </section>

            <div className="flex gap-10 innerContainerPadding">
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