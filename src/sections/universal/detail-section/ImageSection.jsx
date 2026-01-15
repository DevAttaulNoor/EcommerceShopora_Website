import { ImageContainer } from "@/components/atomic/ImageContainer";

export const ImageSection = ({ imageContainerStyleClass = "", imageData }) => {
    return (
        <section className={`${imageContainerStyleClass} w-full max-w-[400px] md:max-w-full`}>
            <div className="relative aspect-4/3 rounded-xl border-4 border-dotted border-custom-charcoal overflow-hidden transition-all duration-500">
                <div className="absolute inset-3">
                    <ImageContainer
                        imageContainerStyle="w-full h-full"
                        imageStyle="transition-transform duration-500 rounded-lg object-cover hover:scale-[1.02]"
                        imageData={{
                            fill: true,
                            priority: true,
                            src: imageData.src,
                            alt: imageData.alt
                        }}
                    />
                </div>
            </div>
        </section>
    );
};