import { Icons } from "@/libs/icons";
import { InputField } from "@/components/atomic/fields/InputField";

export const Searchbar = ({ containerStyle = 'px-3 py-2.5 rounded-md', inputStyleClass = '', iconStyle = '', searchbarData }) => {
    return (
        <div className={`${containerStyle} flex items-center gap-2.5 border`}>
            <InputField
                inputStyleClass={`${inputStyleClass} w-full`}
                inputData={{
                    type: searchbarData.type ? searchbarData.type : 'text',
                    placeholder: searchbarData.placeholder,
                    value: searchbarData.value,
                    onChange: searchbarData.onChange,
                }}
            />

            <span className={`${iconStyle}`}>
                {Icons.MAGNIFYING_GLASS}
            </span>
        </div>
    );
};