export const OrderHistory = () => {
    return (
        <section className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Order History</h3>

            {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between py-4 border-b last:border-0">
                    <div>
                        <p className="font-medium">Order #1023{i}</p>
                        <p className="text-sm text-gray-500">Placed on 12 Jul 2023</p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium">$806.33</p>
                        <span className="text-sm text-green-600">Delivered</span>
                    </div>
                </div>
            ))}
        </section>
    );
};
