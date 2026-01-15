import { BasicBtn } from "@/components/atomic/buttons/BasicBtn"

export const DetailSection = ({ detailContainerStyleClass = '', detailData }) => {
    return (
        <div className={`${detailContainerStyleClass} flex flex-col gap-2 md:gap-3 xl:gap-4`}>
            {detailData.title && (
                <h1 className="titleStyle">{detailData?.title}</h1>
            )}

            {detailData.description && (
                <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
                    {detailData.description.map((desc, index) => (
                        <p
                            key={index}
                            className="descriptionStyle"
                        >
                            {desc}
                        </p>
                    ))}
                </div>
            )}

            {detailData.list && (
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                    {detailData.list.map((item, index) => (
                        <li
                            key={index}
                            className="descriptionStyle list-disc ml-8"
                        >
                            {item}
                        </li>
                    ))}
                </div>
            )}

            {detailData.btnData && (
                <BasicBtn
                    btnData={detailData.btnData}
                    btnStyleClass={detailData.btnData.btnStyleClass}
                />
            )}
        </div>
    )
}