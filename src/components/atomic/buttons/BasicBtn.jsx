import Link from "next/link";

export const BasicBtn = ({ btnStyleClass = '', btnData }) => {
    const content = (
        <>
            {btnData.icon && (
                <span>{btnData.icon}</span>
            )}

            {btnData.text && (
                <p>{btnData.text}</p>
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