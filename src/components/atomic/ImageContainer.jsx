import Image from "next/image";

export const ImageContainer = ({ imageContainerStyle = "", imageStyle = "", imageData }) => {
    const {
        src,
        alt = "image",
        fill = false,
        width,
        height,
        priority = false,
        sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    } = imageData || {};

    return (
        <div className={`${imageContainerStyle} ${fill && "relative"}`}>
            {src && (
                <Image
                    src={src}
                    alt={alt}
                    priority={priority}
                    {...fill ? {
                        sizes,
                        fill: true,
                        className: `${imageStyle} absolute`
                    } : {
                        width,
                        height,
                        className: imageStyle
                    }}
                />
            )}
        </div>
    );
};