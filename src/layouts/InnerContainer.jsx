import { TopBar } from "@/components/compound/container-related/TopBar";
import { Header } from "@/components/compound/container-related/Header";
import { Footer } from "@/components/compound/container-related/Footer";
import { BottomBar } from "@/components/compound/container-related/BottomBar";

export const InnerContainer = ({ children }) => {
    return (
        <div className=" w-full h-full min-h-screen flex flex-col justify-between overflow-x-hidden overflow-y-auto">
            <div className="flex flex-col">
                <TopBar />
                <Header />

                <div className="innerContainerStyle">
                    {children}
                </div>
            </div>

            <div className="flex flex-col">
                <Footer />
                <BottomBar />
            </div>
        </div>
    );
};