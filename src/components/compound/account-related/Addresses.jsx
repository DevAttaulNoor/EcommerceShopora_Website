import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";

export const Addresses = ({ userData }) => {
    return (
        <section className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Saved Addresses</h3>

                <BasicBtn
                    btnStyleClass="text-sm px-4 py-2 rounded-lg cursor-pointer text-white bg-custom-gold btnHoverTransitionStyle"
                    btnData={{
                        onClick: () => console.log('clicked'),
                        text: "Add new"
                    }}
                />
            </div>

            <div className="flex flex-col p-5 gap-1.5 rounded-xl shadow-sm">
                <h6 className="font-medium">Main Address</h6>
                <p className="text-sm opacity-75">
                    {userData?.address}
                </p>
            </div>
        </section>
    );
};