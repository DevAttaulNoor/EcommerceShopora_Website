import { notFound } from "next/navigation";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";
import brands from "@/data/brands.json";

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
    const brand = brands.find((cat) => cat.slug === slug);

    if (!brand) notFound();

    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-6 gap-3.5 bg-customMuted">
                <HeadingWithDescription
                    title={brand.title}
                    description={''}
                />

                <Breadcrumb
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
            </section>

            <div className="p-8">
                <h1 className="text-3xl font-bold">{brand.title}</h1>
                <p className="mt-2 text-gray-600">{brand.meta.description}</p>
            </div>
        </InnerContainer>
    );
}