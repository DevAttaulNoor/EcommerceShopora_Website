import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import products from "@data/products.json";

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

            <section className="grid grid-cols-5 gap-4 innerContainerPadding">
                {products?.slice(0, 12).map(item => (
                    <ProductCard
                        key={item.id}
                        productData={item}
                    />
                ))}
            </section>
        </InnerContainer>
    )
}

export default page