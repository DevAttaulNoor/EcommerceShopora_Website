"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { Searchbar } from "@/components/compound/searchBars/Searchbar";
import products from "@data/products.json";
import categories from "@data/categories.json";

// export const metadata = {
//     title: Routes.CATEGORIES.meta.title,
//     description: Routes.CATEGORIES.meta.description,
// };

const page = () => {
    const [input, setInput] = useState();

    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-10 gap-3.5 bg-amber-100">
                <h1 className="titleStyle">{Routes.CATEGORIES.title}</h1>

                <Breadcrumb
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
                />
            </section>

            {/* <section className="sectionStyle innerContainerPadding">
                <h1 className="titleStyle">Popular Categories</h1>

                <div className="grid grid-cols-4 gap-5">
                    {categories?.slice(0, 10).map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="flex flex-col gap-1">
                                <h5>{item.title}</h5>
                            </div>

                            <Image
                                width={60}
                                height={60}
                                src={item?.image}
                                alt={`Logo of ${item.title}`}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </section> */}

            <section className="sectionStyle innerContainerPadding">
                <Searchbar
                    searchbarData={{
                        placeholder: 'Search for your categories...',
                        value: input,
                        onChange: (e) => setInput(target.value.e),
                        inputStyleClass: 'w-full',
                    }}
                />

                <div className="w-full grid grid-cols-5 gap-5">
                    {categories?.map(item => (
                        <Link
                            key={item.id}
                            href={Routes.CATEGORY(item.slug).path}
                            className="w-full h-full flex flex-col items-center justify-between p-2 gap-2.5 rounded-lg cursor-pointer bg-slate-300"
                        >
                            <Image
                                width={150}
                                height={150}
                                src={item?.image}
                                alt={`Logo of ${item.title}`}
                                className="object-contain"
                            />

                            <h5 className="text-center text-lg font-medium">{item.title}</h5>
                        </Link>
                    ))}
                </div>
            </section>
        </InnerContainer>
    )
}

export default page