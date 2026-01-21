import { ApiRoutes } from "@/libs/api-routes";

export const userUpdation = async (name, email, number, address, setUser) => {
    const res = await fetch(ApiRoutes.USER.UPDATE, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, number, address }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Updatation failed");

    setUser(data.user);

    return data;
};