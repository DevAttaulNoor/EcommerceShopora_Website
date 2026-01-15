import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { BrandCategoryLayout } from "@/layouts/BrandCategoryLayout";
import brands from "@data/brands.json";
import products from "@data/products.json";

export const metadata = {
    title: Routes.BRANDS.meta.title,
    description: Routes.BRANDS.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <BrandCategoryLayout
                title={Routes.BRANDS.title}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.BRANDS.path,
                        title: Routes.BRANDS.title
                    }
                ]}
                productData={products}
                attributeType="brand"
                attributeData={brands}
            />
        </InnerContainer>
    )
}

export default page