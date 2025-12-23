import { InputField } from "@/components/atomic/fields/InputField";

export const BasicForm = () => {
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-2.5"
        >
            <InputField
                inputData={inputData}
                inputStyleClass={inputStyleClass}
            />

            <select className="basicTextInputStyle">
                <option>Order Issue</option>
                <option>Payment Problem</option>
                <option>Product Inquiry</option>
                <option>Return / Refund</option>
                <option>Other</option>
            </select>

            <textarea
                rows="4"
                placeholder="Write your message..."
                className="input resize-none"
            />

            <button
                disabled={loading}
                className="btn-primary w-fit px-6"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
};