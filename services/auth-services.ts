import { env } from "@/app/env";
import { authClient } from "@/lib/auth-client";

const authServices = {
    googleLogin: async () => {
        try {
            const { data, error } = await authClient.signIn.social(
                {
                    provider: "google",
                    callbackURL: env.NEXT_PUBLIC_FRONTEND_URL
                }
            )
            return {
                success: true,
                error: error,
                data
            }
        } catch (error) {
            return { success: false, error: error as Error, data: null }
        }
    }
};
export default authServices; 