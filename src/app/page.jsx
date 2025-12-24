import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Banner } from "@/components/compound/banners/Banner";
import { SwiperCarousel } from "@/components/atomic/SwiperCarousel";
import { ProductCard } from "@/components/compound/cards/ProductCard";
import { HeadingWithLink } from "@/components/compound/headings/HeadingWithLink";
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
                            className="w-full h-full flex flex-col items-center justify-between gap-2.5 cursor-pointer"
                        >
                            <div className="p-8 rounded-full bg-customMuted">
                                <Image
                                    width={150}
                                    height={150}
                                    src={item.image}
                                    alt={`Logo of ${item.title}`}
                                    className="object-contain"
                                />
                            </div>

                            <h5 className="text-center text-lg font-medium">{item.title}</h5>
                        </Link>
                    ))}
                </SwiperCarousel>
            </section>

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