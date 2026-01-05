import Image from "next/image";

export const ImageSection = ({ imageContainerStyleClass = "", imageData }) => {
    return (
        <div className={`${imageContainerStyleClass} w-full max-w-[400px] md:max-w-full`}>
            <div className="relative aspect-4/3 rounded-xl border-4 border-dotted border-custom-charcoal overflow-hidden transition-all duration-500">
                <div className="absolute inset-3">
                    <Image
                        src={imageData.src}
                        alt={imageData.alt}
                        fill
                        priority={false}
                        className="object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>
            </div>
        </div>
    );
};