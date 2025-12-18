import { Icons } from "@/constants/Icons";
import { InputField } from "@/components/atomic/fields/InputField";

export const Searchbar = ({ searchbarData }) => {
    return (
        <div className="flex items-center p-2.5 gap-2.5 border rounded-md">
            <span className="">
                {Icons.MAGNIFYING_GLASS}
            </span>

            <InputField
                inputStyleClass={searchbarData.inputStyleClass}
                inputData={{
                    type: searchbarData.type ? searchbarData.type : 'text',
                    placeholder: searchbarData.placeholder,
                    value: searchbarData.value,
                    onChange: searchbarData.onChange,
                }}
            />
        </div>
    );
};