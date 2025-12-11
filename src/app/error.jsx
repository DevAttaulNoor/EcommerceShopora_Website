"use client";

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-2xl font-semibold text-red-600">Something went wrong!</h2>
            <p className="mt-2 text-gray-500 max-w-lg">{error.message}</p>

            <button
                onClick={() => reset()}
                className="mt-6 px-5 py-2 rounded-md bg-custom-blue text-white hover:bg-custom-blue/80 transition"
            >
                Try Again
            </button>
        </div>
    );
}