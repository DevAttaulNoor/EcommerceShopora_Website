import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { BrandCategoryLayout } from "@/layouts/BrandCategoryLayout";
import categories from "@data/categories.json";

export const metadata = {
    title: Routes.CATEGORIES.meta.title,
    description: Routes.CATEGORIES.meta.description,
};

const page = () => {
    return (
        <InnerContainer>
            <BrandCategoryLayout
                title={Routes.CATEGORIES.title}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.CATEGORIES.path,
                        title: Routes.CATEGORIES.title
                    }
                ]}
                attributeType="category"
                attributeData={categories}
            />
        </InnerContainer>
    )
}

export default page