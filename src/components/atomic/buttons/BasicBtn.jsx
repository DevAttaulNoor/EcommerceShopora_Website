import Link from "next/link";

export const BasicBtn = ({ btnStyleClass = 'rounded-3xl text-white bg-custom-green hover:bg-custom-green/85', btnData }) => {
    const basicBtnStyle = `flex items-center gap-2 btnStyle ${btnStyleClass}`;
    const content = (
        <>
            {btnData.text && (
                <p>{btnData.text}</p>
            )}

            {btnData.icon && (
                <span>{btnData.icon}</span>
            )}
        </>
    );

    return btnData.path ? (
        <Link
            href={btnData.path}
            className={basicBtnStyle}
        >
            {content}
        </Link>
    ) : (
        <button
            onClick={btnData.onClick}
            className={basicBtnStyle}
        >
            {content}
        </button>
    )
}