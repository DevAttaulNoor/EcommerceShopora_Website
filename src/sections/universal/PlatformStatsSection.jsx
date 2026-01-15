import { Counter } from "@/components/atomic/Counter";

export const PlatformStatsSection = ({ statsData }) => {
    const { productData = [], attributeData } = statsData || {};

    const stats = [
        attributeData && {
            id: 1,
            title: `${attributeData.type}s`,
            value: attributeData.data?.length ?? 0,
        },
        {
            id: 2,
            title: "Products",
            value: productData.length || 40,
        },
        {
            id: 3,
            title: "Trusted Sellers",
            value: 120,
        },
        {
            id: 4,
            title: "Orders Delivered",
            value: 500,
        },
        {
            id: 5,
            title: "Support",
            value: "24/7",
            isStatic: true,
        },
    ].filter(Boolean);

    return (
        <section className="flex items-center justify-around gap-6 py-6 px-10 rounded-xl bg-custom-charcoal text-custom-gold">
            {stats.map(item => (
                <div
                    key={item.id}
                    className="flex flex-col items-center"
                >
                    <span className="text-2xl font-semibold">
                        {item.isStatic ? item.value : <><Counter end={item.value} />+</>}
                    </span>

                    <span className="opacity-80">{item.title}</span>
                </div>
            ))}
        </section>
    );
};