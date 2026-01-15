import { notFound } from "next/navigation";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { IntroSection } from "@/sections/universal/IntroSection";
import { ReviewCard } from "@/components/compound/cards/ReviewCard";
import { SwiperCarousel } from "@/components/atomic/SwiperCarousel";
import { ImageContainer } from "@/components/atomic/ImageContainer";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import { HeadingWithLink } from "@/components/compound/headings/HeadingWithLink";
import { ProductInfoSection } from "@/sections/product-slug-page-related/ProductInfoSection";
import products from "@/data/products.json";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: "Product Not Found | Shopora",
            description: "This product does not exist",
        };
    }

    return product.meta;
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) notFound();

    return (
        <InnerContainer>
            <IntroSection
                headingData={{
                    title: product?.title
                }}
                breadcrumbData={[
                    {
                        path: Routes.HOME.path,
                        title: Routes.HOME.title
                    },
                    {
                        path: Routes.PRODUCTS.path,
                        title: Routes.PRODUCTS.title
                    },
                    {
                        path: Routes.PRODUCT(slug).path,
                        title: product?.title
                    }
                ]}
            />

            <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <ImageContainer
                    imageContainerStyle="h-96 rounded-lg overflow-hidden"
                    imageStyle="object-cover"
                    imageData={{
                        fill: true,
                        priority: true,
                        src: product?.image,
                        alt: `Image of ${product?.title}`
                    }}
                />

                <ProductInfoSection
                    productInfoData={product}
                />
            </section>

            <section className="sectionStyle">
                <h1 className="titleStyle">Product Details</h1>

                <p className="descriptionStyle">
                    {product?.description || "No description available."}
                </p>
            </section>

            <section className="sectionStyle">
                <h1 className="titleStyle">Customer Reviews</h1>

                <div className="flex flex-col gap-4">
                    {product?.reviews?.map(review => (
                        <ReviewCard
                            key={review.id}
                            reviewData={review}
                            productData={product}
                        />
                    ))}
                </div>
            </section>

            <section className="sectionStyle">
                <HeadingWithLink
                    heading={'Related Products'}
                    linkData={{
                        href: Routes.PRODUCTS.path,
                        text: 'View all'
                    }}
                />

                <SwiperCarousel
                    swiperStates={{
                        loop: true,
                        autoplay: true,
                        pagination: false,
                        slidesPerView: 5,
                        spaceBetween: 20
                    }}
                >
                    {products?.slice(0, 12).map(item => (
                        <ProductCard
                            key={item.id}
                            productData={item}
                        />
                    ))}
                </SwiperCarousel>
            </section>
        </InnerContainer>
    );
}