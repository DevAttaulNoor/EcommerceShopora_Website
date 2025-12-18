export const InputField = ({ inputStyleClass = '', inputData }) => {
    return (
        <input
            id={inputData.id && `${inputData.id}`}
            type={inputData.type}
            name={inputData.name}
            value={inputData.value}
            onChange={inputData.onChange}
            placeholder={inputData.placeholder}
            required={inputData.required || false}
            className={`${inputStyleClass}`}
        />
    )
}