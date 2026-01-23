import Link from "next/link";

// export const BasicBtn = ({ btnStyleClass = 'rounded-3xl text-white bg-custom-gold hover:bg-customHover', btnData }) => {
export const BasicBtn = ({ btnStyleClass = '', btnData }) => {
    const content = (
        <>
            {btnData.text && (
                <p>{btnData.text}</p>
            )}

            {btnData.icon && (
                <span className="ml-2">{btnData.icon}</span>
            )}
        </>
    );

    return btnData.path ? (
        <Link
            href={btnData.path}
            className={btnStyleClass}
        >
            {content}
        </Link>
    ) : (
        <button
            disabled={btnData.disabled ? btnData.disabled : false}
            onClick={btnData.onClick}
            className={btnStyleClass}
        >
            {content}
        </button>
    )
}