import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomBar } from "@/components/BottomBar";

export const InnerContainer = ({ children }) => {
    return (
        <div className="w-full h-full min-h-screen flex flex-col justify-between overflow-x-hidden overflow-y-auto">
            <div className="flex flex-col">
                <TopBar />
                <Header />

                {children}
            </div>

            <div className="flex flex-col">
                <Footer />
                <BottomBar />
            </div>
        </div>
    );
};