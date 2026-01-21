import { Icons } from "@/libs/icons";
import { ImageContainer } from "@/components/atomic/ImageContainer";

export const ReviewCard = ({ reviewData, productData }) => {
    return (
        <div className="flex flex-col p-4 gap-2.5 rounded-xl shadow-sm">
            <div className="flex items-center gap-3.5">
                <ImageContainer
                    imageContainerStyle="w-12 h-12 rounded-lg overflow-hidden"
                    imageStyle="object-cover"
                    imageData={{
                        fill: true,
                        priority: true,
                        src: '/question-mark.png',
                        alt: `Image of ${productData?.title}`
                    }}
                />

                <div className="flex flex-col gap-0.5">
                    <h4 className="font-medium">
                        {reviewData.name}
                    </h4>

                    <p className="text-sm opacity-65">
                        1 day ago
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => {
                    const starValue = index + 1;

                    return (
                        <span
                            key={index}
                            className={`w-4 h-4 ${reviewData.rating >= starValue ? "fill-custom-gold text-custom-gold" : "fill-transparent text-gray-300"}`}
                        >
                            {Icons.STAR}
                        </span>
                    );
                })}
            </div>

            {reviewData.message && (
                <p className="text-sm opacity-75 md:text-base 2xl:text-lg">
                    {reviewData.message}
                </p>
            )}

            {reviewData.images && (
                <div className="flex gap-3">
                    {reviewData.images?.map(item => (
                        <div
                            key={item.id}
                            className="w-12 h-12 rounded-lg bg-gray-200"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};