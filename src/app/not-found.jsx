import { Routes } from "@/config/routes";
import { BasicBtn } from "@/components/atomic/buttons/BasicBtn";
import { HeadingWithDescription } from "@/components/compound/headings/HeadingWithDescription";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full h-full flex flex-col items-center justify-center text-center gap-6">
            <h1 className="text-8xl font-bold italic text-red-500">404</h1>

            <HeadingWithDescription
                title={'Page Not Found'}
                description={"The page you're looking for might have been removed, had its name changed, or is temporarily unavailable."}
            />

            <BasicBtn
                btnData={{
                    path: Routes.HOME.path,
                    text: 'Go Back Home'
                }}
                btnStyleClass="px-6 py-3 rounded-md text-custom-gold bg-custom-charcoal"
            />
        </div>
    );
}