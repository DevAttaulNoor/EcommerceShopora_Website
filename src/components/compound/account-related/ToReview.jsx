export const ToReview = () => {
    return (
        <div className="w-full space-y-6">
            <div className="flex items-center gap-2.5">
                <button className="text-sm bg-custom-gold text-white px-3 py-2 rounded-xl">
                    To Review
                </button>
                <button className="text-sm bg-custom-gold text-white px-3 py-2 rounded-xl">
                    Review History
                </button>
            </div>

            {/* Review Cards */}
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between gap-4">
                        {/* Product Info */}
                        <div className="flex gap-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg" />

                            <div>
                                <h4 className="font-medium">
                                    Apple Watch Series 8 GPS 45mm Silver
                                </h4>
                                <p className="text-sm text-gray-500">
                                    Aluminum Case Sport Band
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Purchased on 12 Jul 2023
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 text-yellow-400 text-sm mt-2">
                                    ★ ★ ★ ★ ★
                                </div>
                            </div>
                        </div>

                        {/* Action */}
                        <button className="h-fit text-sm bg-custom-gold text-white px-4 py-2 rounded-lg">
                            Edit Review
                        </button>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore.
                    </p>

                    {/* Review Images */}
                    <div className="flex gap-3 mt-4">
                        {[1, 2, 3].map((_, i) => (
                            <div
                                key={i}
                                className="w-14 h-14 bg-gray-200 rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};