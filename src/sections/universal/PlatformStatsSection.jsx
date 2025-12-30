import { Counter } from "@/components/atomic/Counter";

export const PlatformStatsSection = ({ statsData }) => {
    const statItems = [
        {
            id: 1,
            title: 'Products',
            count: statsData.productData?.length || 0
        },
        {
            id: 2,
            title: 'Trusted Sellers',
            count: 500
        },
        {
            id: 3,
            title: 'Orders Delivered',
            count: 500
        }
    ];

    return (
        <section className="flex items-center justify-between p-5 gap-5 rounded-xl text-custom-gold bg-custom-charcoal">
            {statsData.attributeData && (

                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold">
                        <Counter end={statsData.attributeData.data.length} />+
                    </span>
                    <span className="text-xs opacity-80">
                        {statsData.attributeData.type + 's'}
                    </span>
                </div>
            )}

            {statItems.map(item => (
                <div
                    key={item.id}
                    className="flex flex-col items-center"
                >
                    <span className="text-lg font-semibold">
                        <Counter end={item?.count} />+
                    </span>
                    <span className="text-xs opacity-80">
                        {item?.title}
                    </span>
                </div>
            ))}

            <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">
                    24/7
                </span>
                <span className="text-xs opacity-80">
                    Support
                </span>
            </div>
        </section>
    );
};