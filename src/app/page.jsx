import Link from "next/link";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Banner } from "@/components/compound/banners/Banner";
import { SwiperCarousel } from "@/components/atomic/SwiperCarousel";
import { ImageContainer } from "@/components/atomic/ImageContainer";
import { ShopNowSection } from "@/sections/universal/ShopNowSection";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import { HeadingWithLink } from "@/components/compound/headings/HeadingWithLink";
import { PlatformStatsSection } from "@/sections/universal/PlatformStatsSection";
import products from "@data/products.json"
import categories from "@data/categories.json"

export default function Home() {
    return (
        <InnerContainer>
            <Banner
                bannerContainerStyle="h-72 w-full"
                bannerData={{
                    imageUrl: '/banners/banner1.png'
                }}
            />

            <section className="sectionStyle">
                <HeadingWithLink
                    heading={'Popular Categories'}
                    linkData={{
                        href: Routes.CATEGORIES.path,
                        text: 'View all'
                    }}
                />

                <SwiperCarousel
                    swiperStates={{
                        loop: true,
                        autoplay: true,
                        pagination: false,
                        slidesPerView: 7,
                        spaceBetween: 20
                    }}
                >
                    {categories?.slice(0, 12).map(item => (
                        <Link
                            key={item.id}
                            href={Routes.CATEGORY(item.slug).path}
                            className="flex flex-col items-center justify-between gap-2.5"
                        >
                            <ImageContainer
                                imageContainerStyle="w-40 h-40 rounded-full bg-customMuted"
                                imageStyle="p-6 object-contain"
                                imageData={{
                                    fill: true,
                                    priority: true,
                                    src: item.image,
                                    alt: `Logo of ${item.title}`
                                }}
                            />

                            <h5 className="text-center text-lg font-medium">{item.title}</h5>
                        </Link>
                    ))}
                </SwiperCarousel>
            </section>

            <PlatformStatsSection
                statsData={{
                    productData: 50
                }}
            />

            <section className="sectionStyle">
                <HeadingWithLink
                    heading={'New Arrivals'}
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
                    {products?.slice(12, 22).map(item => (
                        <ProductCard
                            key={item.id}
                            productData={item}
                        />
                    ))}
                </SwiperCarousel>
            </section>

            <ShopNowSection
                title="Ready to Start Shopping?"
                description="Discover amazing deals from trusted sellers today."
                btnStyleClass="px-6 py-3 rounded-lg text-custom-gold bg-white"
                btnData={{
                    path: Routes.PRODUCTS.path,
                    text: 'Explore Products'
                }}
            />

            <section className="sectionStyle">
                <HeadingWithLink
                    heading={'Best Sellers'}
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