import User from "@/models/User";

export const updateMe = async (userId, data) => {
    const allowedFields = [
        "name",
        "email",
        "number",
        "status",
        "address",
        "profileImage",
    ];

    const updateData = {};

    for (const key of allowedFields) {
        if (data[key] !== undefined) {
            updateData[key] = data[key];
        }
    }

    const user = await User.findByIdAndUpdate(
        userId,
        updateData,
        { new: true, runValidators: true }
    ).select("-password");

    return user;
};
