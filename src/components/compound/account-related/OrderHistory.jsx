export const OrderHistory = () => {
    const dummyOrders = [
        {
            id: 1023,
            date: "12 Jul 2023",
            price: 806.33,
            status: 'delivered'
        },
        {
            id: 2304,
            date: "12 Jul 2023",
            price: 37.12,
            status: 'delivered'
        },
        {
            id: 4023,
            date: "12 Jul 2024",
            price: 364.09,
            status: 'delivered'
        },
    ];

    return (
        <section className="flex flex-col p-6 gap-4 shadow-sm rounded-xl">
            <h3 className="text-lg font-semibold">Order History</h3>

            <div className="flex flex-col gap-2.5">
                {dummyOrders?.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between border-b last:border-0"
                    >
                        <div>
                            <p className="font-medium">Order # {item.id}</p>
                            <p className="text-sm opacity-50">Placed on {item.date}</p>
                        </div>

                        <div className="text-right">
                            <p className="font-medium">${item.price}</p>
                            <span className="text-sm text-green-600">{item.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};