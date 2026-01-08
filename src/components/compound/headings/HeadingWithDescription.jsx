export const HeadingWithDescription = ({ title, descriptionStyle = '', description }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-1.5">
            <h1 className="titleStyle">{title}</h1>

            {description && (
                <p className={`${descriptionStyle} descriptionStyle`}>
                    {description}
                </p>
            )}
        </div>
    );
};