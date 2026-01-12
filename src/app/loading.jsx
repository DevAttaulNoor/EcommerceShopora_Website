import Image from "next/image";

export default function Loading() {
    return (
        <div className="min-h-screen w-full h-full flex flex-col items-center justify-center text-center gap-6">
            <div className="animate-spin relative w-20 h-20">
                <Image
                    fill
                    priority
                    src={"/logo.png"}
                    alt="logo of Shopora"
                    className="absolute w-full h-full object-contain"
                />
            </div>

            <h1>Loading...</h1>
        </div>
    );
}