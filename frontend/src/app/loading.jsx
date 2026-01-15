import { ImageContainer } from "@/components/atomic/ImageContainer";

export default function Loading() {
    return (
        <div className="min-h-screen w-full h-full flex flex-col items-center justify-center text-center gap-6">
            <ImageContainer
                imageContainerStyle="w-20 h-20 animate-spin"
                imageStyle="object-contain"
                imageData={{
                    fill: true,
                    priority: true,
                    src: "/logo.png",
                    alt: "logo of Shopora"
                }}
            />

            <h1>Loading...</h1>
        </div>
    );
}