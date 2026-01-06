export const Details = () => {
    return (
        <section className="bg-white rounded-xl p-6 shadow-sm max-w-xl">
            <h3 className="font-semibold mb-6">Account Details</h3>

            {["Full Name", "Email Address", "Phone Number"].map((label, i) => (
                <div key={i} className="mb-4">
                    <label className="text-sm font-medium">{label}</label>
                    <input
                        className="mt-1 w-full border rounded-lg px-4 py-3"
                        placeholder={label}
                    />
                </div>
            ))}

            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
                Save Changes
            </button>
        </section>
    );
};
