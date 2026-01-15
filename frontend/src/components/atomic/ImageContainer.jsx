import Image from "next/image";

export const ImageContainer = ({ imageContainerStyle = "", imageStyle = "", imageData }) => {
    const { src, alt = "image", fill = false, width, height, priority = false, sizes = "100vw" } = imageData || {};

    return (
        <div className={`${imageContainerStyle} ${fill && "relative"}`}>
            {src && (
                <Image
                    src={src}
                    alt={alt}
                    priority={priority}
                    sizes={sizes}
                    {...fill ? {
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