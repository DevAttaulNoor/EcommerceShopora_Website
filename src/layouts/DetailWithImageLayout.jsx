export const DetailWithImageLayout = ({ detailContainerStyleClass = '', rightsideData, leftsideData }) => {
    return (
        <div className={`${detailContainerStyleClass} flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:grid md:grid-cols-2 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16`}>
            {rightsideData}

            {leftsideData}
        </div>
    )
}