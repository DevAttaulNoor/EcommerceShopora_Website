"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Routes } from "@/constants/Routes";
import { InnerContainer } from "@/layouts/InnerContainer";
import { Breadcrumb } from "@/components/atomic/Breadcrumb";
import { Searchbar } from "@/components/compound/searchBars/Searchbar";
import brands from "@data/brands.json";

// export const metadata = {
//     title: Routes.BRANDS.meta.title,
//     description: Routes.BRANDS.meta.description,
// };

const page = () => {
    const [input, setInput] = useState();

    return (
        <InnerContainer>
            <section className="flex flex-col items-center justify-center py-10 gap-3.5 bg-amber-100">
                <h1 className="titleStyle">{Routes.BRANDS.title}</h1>

                <Breadcrumb
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
                />
            </section>

            <section className="sectionStyle innerContainerPadding">
                <Searchbar
                    searchbarData={{
                        placeholder: 'Search for your brands...',
                        value: input,
                        onChange: (e) => setInput(target.value.e),
                        inputStyleClass: 'w-full',
                    }}
                />

                <div className="w-full grid grid-cols-5 gap-5">
                    {brands?.map(item => (
                        <Link
                            key={item.id}
                            href={Routes.BRAND(item.slug).path}
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