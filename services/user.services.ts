import { env } from "@/app/env";
import { cookies } from "next/headers";

const userService = {
    getSession: async () => {
        try {
            const cookieStore = await cookies();
            const authUrl = env.AUTH_URL + "/get-session";
            const res = await fetch(authUrl, {
                headers: {
                    Cookie: cookieStore.toString()
                },
                cache: "no-store"
            });
            if (!res.ok) {
                return { data: null, error: new Error("Failed to fetch session data") }
            }
            const sessionData = await res.json();
            // console.log("Session Data:", sessionData);
            if (!sessionData) {
                return {
                    data: null,
                    error: new Error("Session is missing")
                }
            }
            return { data: sessionData, error: null }
        } catch (error) {
            console.log(error, "Error on catch");
            return { data: null, error: error as Error }
        }
    }
};
export default userService; 