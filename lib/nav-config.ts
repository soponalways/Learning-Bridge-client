import { adminNav, studentNav, tutorNav } from "@/constant/nav-config";
import { userRole } from "@/types/user";

export function getNavByRole(role: userRole) {
    switch (role) {
        case userRole.STUDENT: return studentNav;
        case userRole.TUTOR: return tutorNav;
        case userRole.ADMIN: return adminNav;
    }
}