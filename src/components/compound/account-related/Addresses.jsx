export const Addresses = () => {
    return (
        <section className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold">Saved Addresses</h3>
                <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Add New
                </button>
            </div>

            {[1, 2].map((_, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                    <p className="font-medium">Home Address</p>
                    <p className="text-sm text-gray-500">
                        Street 12, City, Country
                    </p>
                </div>
            ))}
        </section>
    );
};