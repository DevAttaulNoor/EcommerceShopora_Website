import { BasicBtn } from "./buttons/BasicBtn";
import { InputField } from "./fields/InputField";
import { TextareaField } from "./fields/TextareaField";

export const Form = ({ formContainerStyle = '', handleSubmit, inputFieldData, textareaFieldData, btnData, children }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className={`${formContainerStyle}`}
        >
            {children ? (
                children
            ) : (
                <>
                    {inputFieldData?.map((item, index) => (
                        <InputField
                            key={index}
                            inputData={item.inputData}
                            inputStyleClass={item.inputStyleClass}
                        />
                    ))}

                    {textareaFieldData?.map((item, index) => (
                        <TextareaField
                            key={index}
                            textareaData={item.textareaData}
                            textareaStyleClass={item.textareaStyleClass}
                        />
                    ))}

                    {btnData && (
                        <BasicBtn
                            btnData={btnData}
                            btnStyleClass={btnData.btnStyleClass}
                        />
                    )}
                </>
            )}
        </form>
    );
};