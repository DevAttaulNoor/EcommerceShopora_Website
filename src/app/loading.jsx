export default function Loading() {
    return (
        <div className="min-h-screen w-full h-full flex flex-col items-center justify-center text-center gap-6">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-transparent border-custom-charcaol" />

            <h1 className="animate-ping">Loading...</h1>
        </div>
    );
}