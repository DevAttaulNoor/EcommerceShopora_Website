import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        number: {
            type: String,
            default: "",
            trim: true,
        },

        address: {
            type: String,
            default: "",
            trim: true,
        },

        password: {
            type: String,
            required: true,
            select: false,
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        status: {
            type: String,
            default: "active",
        },

        profileImage: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

userSchema.methods.comparePassword = function (enteredPassword) {
    return this.password === enteredPassword;
};

export default mongoose.models.User || mongoose.model("User", userSchema);