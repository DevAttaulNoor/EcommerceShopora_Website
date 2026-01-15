export const Dashboard = () => {
    return (
        <section className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Orders", value: 12 },
                    { label: "Pending Orders", value: 2 },
                    { label: "Wishlist Items", value: 5 },
                    { label: "Reward Points", value: 120 },
                ].map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <h3 className="text-2xl font-semibold mt-1">{item.value}</h3>
                    </div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Recent Orders</h3>
                <p className="text-sm text-gray-500">
                    View and manage your latest purchases.
                </p>
            </div>
        </section>
    );
};
