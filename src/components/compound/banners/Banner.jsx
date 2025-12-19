import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";

export const Banner = ({ bannerContainerStyle = '', bannerData }) => {
    return (
        <div
            style={{ backgroundImage: `url(${bannerData.imageUrl})` }}
            className={`${bannerContainerStyle} bg-cover bg-no-repeat bg-center`}
        >
            {bannerData.title && (
                <h5>{title}</h5>
            )}

            {bannerData.description && (
                <p>{description}</p>
            )}

            {bannerData.btnData && (
                <BasicBtn />
            )}
        </div>
    );
};