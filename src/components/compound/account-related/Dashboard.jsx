export const Dashboard = () => {
    const stats = [
        {
            title: "Total Orders",
            count: 0,
        },
        {
            title: "Pending Orders",
            count: 0,
        },
        {
            title: "Wishlist Items",
            count: 0,
        }
    ];

    return (
        <section className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
                {stats?.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 space-y-1 rounded-xl shadow-sm"
                    >
                        <p className="text-sm opacity-50">{item.title}</p>
                        <h3 className="text-xl font-semibold">{item.count}</h3>
                    </div>
                ))}
            </div>

            <div className="flex flex-col p-5 gap-1 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold">Recent Orders</h3>

                <p className="text-sm opacity-50">
                    View and manage your latest purchases.
                </p>
            </div>
        </section>
    );
};