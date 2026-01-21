export const Addresses = ({ userData }) => {
    return (
        <section className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Saved Addresses</h3>

                <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Add New
                </button>
            </div>

            <div className="p-5 rounded-xl shadow-sm">
                <p className="font-medium">Home Address</p>
                <p className="text-sm text-gray-500">
                    {userData?.address}
                </p>
            </div>
        </section>
    );
};