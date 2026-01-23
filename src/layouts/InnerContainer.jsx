import { TopBar } from "@/components/compound/container-related/TopBar";
import { Header } from "@/components/compound/container-related/Header";
import { Footer } from "@/components/compound/container-related/Footer";
import { BottomBar } from "@/components/compound/container-related/BottomBar";
import { Newsletter } from "@/components/compound/container-related/Newsletter";

export const InnerContainer = ({ children }) => {
    return (
        <div className="w-full h-full min-h-screen gap-6 overflow-x-hidden overflow-y-auto xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="flex flex-col">
                <TopBar />
                <Header />
            </div>

            <div className="innerContainerStyle">
                {children}
            </div>

            <div className="flex flex-col mt-6 gap-6 xs:mt-8 xs:gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:gap-12 lg:mt-14 lg:gap-14 xl:mt-16 xl:gap-16">
                <Newsletter />

                <div className="flex flex-col">
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        </div>
    );
};