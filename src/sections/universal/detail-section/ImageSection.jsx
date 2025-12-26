import Image from "next/image";

export const ImageSection = ({ imageContainerStyleClass = '', imageData }) => {
    return (
        <div className={`${imageContainerStyleClass} relative w-full max-w-[400px] aspect-4/3 p-5 rounded-xl border-2 border-dashed border-custom-green bg-white/5 hover:bg-white/10 transition-all duration-500 md:max-w-full md:aspect-auto lg:aspect-4/3`}>
            {/* <span className="absolute top-2 left-2 w-2 h-2 bg-custom-green rounded-full"></span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-custom-green rounded-full"></span>
            <span className="absolute bottom-2 left-2 w-2 h-2 bg-custom-green rounded-full"></span>
            <span className="absolute bottom-2 right-2 w-2 h-2 bg-custom-green rounded-full"></span> */}

            <Image
                fill
                src={imageData.src}
                alt={imageData.alt}
                className="w-full h-full rounded-xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
        </div>
    );
};