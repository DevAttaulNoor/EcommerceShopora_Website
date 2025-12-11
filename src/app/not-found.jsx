export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-7xl font-bold text-custom-blue">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-3 text-gray-600 max-w-md">
                The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <a
                href="/"
                className="mt-6 px-6 py-2 bg-custom-blue text-white rounded-md hover:bg-custom-blue/80 transition"
            >
                Go Back Home
            </a>
        </div>
    );
}
