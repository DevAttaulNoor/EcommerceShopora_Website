export const TextareaField = ({ textareaStyleClass = '', textareaData }) => {
    return (
        <textarea
            rows={textareaData.rows}
            name={textareaData.name}
            value={textareaData.value}
            onChange={textareaData.onChange}
            placeholder={textareaData.placeholder}
            className={`${textareaStyleClass}`}
        />
    )
}