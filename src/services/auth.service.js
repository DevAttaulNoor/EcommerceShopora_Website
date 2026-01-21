import { ApiRoutes } from "@/libs/api-routes";

export const userLogout = async () => {
    await fetch(ApiRoutes.AUTH.LOGOUT, {
        method: "POST",
        credentials: "include",
    });
};

export const userLogin = async (email, password) => {
    const res = await fetch(ApiRoutes.AUTH.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Login failed");

    return data;
};

export const userRegister = async (name, email, number, address, password) => {
    const res = await fetch(ApiRoutes.AUTH.REGISTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, number, address, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Registration failed");

    return data;
};