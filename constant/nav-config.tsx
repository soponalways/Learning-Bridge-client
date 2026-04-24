// ============================================
// STUDENT NAV — /dashboard

import { BadgeDollarSign, BarChart3, Bell, BookCopy, BookOpen, BookOpenCheck, CalendarDays, CalendarRange, ClipboardList, ClipboardPen, CreditCard, FileQuestion, HeadphonesIcon, LayoutDashboard, MessageSquare, Search, Settings, ShieldCheck, Star, Tags, Trophy, Users } from "lucide-react";

// ============================================
export const studentNav = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard />,
        isActive: true,
        items: [
            { title: "Overview", url: "/dashboard" },
            { title: "My Progress", url: "/dashboard/progress" },
        ],
    },
    {
        title: "My Learning",
        url: "/dashboard/courses",
        icon: <BookOpen />,
        items: [
            { title: "Enrolled Courses", url: "/dashboard/courses" },
            { title: "Completed", url: "/dashboard/courses/completed" },
            { title: "Wishlist", url: "/dashboard/courses/wishlist" },
        ],
    },
    {
        title: "Discover",
        url: "/dashboard/explore",
        icon: <Search />,
        items: [
            { title: "Browse Courses", url: "/dashboard/explore" },
            { title: "Find Tutors", url: "/dashboard/explore/tutors" },
        ],
    },
    {
        title: "Assignments",
        url: "/dashboard/assignments",
        icon: <ClipboardList />,
        items: [
            { title: "Pending", url: "/dashboard/assignments/pending" },
            { title: "Submitted", url: "/dashboard/assignments/submitted" },
            { title: "Graded", url: "/dashboard/assignments/graded" },
        ],
    },
    {
        title: "Quizzes",
        url: "/dashboard/quizzes",
        icon: <FileQuestion />,
        items: [
            { title: "Upcoming", url: "/dashboard/quizzes/upcoming" },
            { title: "Results", url: "/dashboard/quizzes/results" },
        ],
    },
    {
        title: "Schedule",
        url: "/dashboard/schedule",
        icon: <CalendarDays />,
        items: [
            { title: "My Classes", url: "/dashboard/schedule" },
            { title: "Book Session", url: "/dashboard/schedule/book" },
        ],
    },
    {
        title: "Messages",
        url: "/dashboard/messages",
        icon: <MessageSquare />,
        items: [
            { title: "Inbox", url: "/dashboard/messages" },
            { title: "Announcements", url: "/dashboard/messages/announcements" },
        ],
    },
    {
        title: "Achievements",
        url: "/dashboard/achievements",
        icon: <Trophy />,
        items: [
            { title: "Certificates", url: "/dashboard/achievements/certificates" },
            { title: "Badges", url: "/dashboard/achievements/badges" },
        ],
    },
    {
        title: "Billing",
        url: "/dashboard/billing",
        icon: <CreditCard />,
        items: [
            { title: "Payment History", url: "/dashboard/billing/history" },
            { title: "Subscription", url: "/dashboard/billing/subscription" },
        ],
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Settings />,
        items: [
            { title: "Profile", url: "/dashboard/settings/profile" },
            { title: "Notifications", url: "/dashboard/settings/notifications" },
            { title: "Security", url: "/dashboard/settings/security" },
        ],
    },
];


// ============================================
// TUTOR NAV — /tutor-dashboard
// ============================================
export const tutorNav = [
    {
        title: "Dashboard",
        url: "/tutor-dashboard",
        icon: <LayoutDashboard />,
        isActive: true,
        items: [
            { title: "Overview", url: "/tutor-dashboard" },
            { title: "Analytics", url: "/tutor-dashboard/analytics" },
        ],
    },
    {
        title: "My Courses",
        url: "/tutor-dashboard/courses",
        icon: <BookOpenCheck />,
        items: [
            { title: "All Courses", url: "/tutor-dashboard/courses" },
            { title: "Create Course", url: "/tutor-dashboard/courses/create" },
            { title: "Drafts", url: "/tutor-dashboard/courses/drafts" },
        ],
    },
    {
        title: "Students",
        url: "/tutor-dashboard/students",
        icon: <Users />,
        items: [
            { title: "All Students", url: "/tutor-dashboard/students" },
            { title: "Progress Tracker", url: "/tutor-dashboard/students/progress" },
        ],
    },
    {
        title: "Assignments",
        url: "/tutor-dashboard/assignments",
        icon: <ClipboardPen />,
        items: [
            { title: "All Assignments", url: "/tutor-dashboard/assignments" },
            { title: "Create", url: "/tutor-dashboard/assignments/create" },
            { title: "Pending Review", url: "/tutor-dashboard/assignments/review" },
        ],
    },
    {
        title: "Quizzes",
        url: "/tutor-dashboard/quizzes",
        icon: <FileQuestion />,
        items: [
            { title: "All Quizzes", url: "/tutor-dashboard/quizzes" },
            { title: "Create Quiz", url: "/tutor-dashboard/quizzes/create" },
            { title: "Results", url: "/tutor-dashboard/quizzes/results" },
        ],
    },
    {
        title: "Schedule",
        url: "/tutor-dashboard/schedule",
        icon: <CalendarRange />,
        items: [
            { title: "My Sessions", url: "/tutor-dashboard/schedule" },
            { title: "Availability", url: "/tutor-dashboard/schedule/availability" },
        ],
    },
    {
        title: "Messages",
        url: "/tutor-dashboard/messages",
        icon: <MessageSquare />,
        items: [
            { title: "Inbox", url: "/tutor-dashboard/messages" },
            { title: "Announcements", url: "/tutor-dashboard/messages/announcements" },
        ],
    },
    {
        title: "Earnings",
        url: "/tutor-dashboard/earnings",
        icon: <BadgeDollarSign />,
        items: [
            { title: "Overview", url: "/tutor-dashboard/earnings" },
            { title: "Withdrawals", url: "/tutor-dashboard/earnings/withdrawals" },
            { title: "Invoices", url: "/tutor-dashboard/earnings/invoices" },
        ],
    },
    {
        title: "Reviews",
        url: "/tutor-dashboard/reviews",
        icon: <Star />,
        items: [
            { title: "All Reviews", url: "/tutor-dashboard/reviews" },
        ],
    },
    {
        title: "Settings",
        url: "/tutor-dashboard/settings",
        icon: <Settings />,
        items: [
            { title: "Profile", url: "/tutor-dashboard/settings/profile" },
            { title: "Payout Info", url: "/tutor-dashboard/settings/payout" },
            { title: "Notifications", url: "/tutor-dashboard/settings/notifications" },
            { title: "Security", url: "/tutor-dashboard/settings/security" },
        ],
    },
];


// ============================================
// ADMIN NAV — /admin-dashboard
// ============================================
export const adminNav = [
    {
        title: "Dashboard",
        url: "/admin-dashboard",
        icon: <LayoutDashboard />,
        isActive: true,
        items: [
            { title: "Overview", url: "/admin-dashboard" },
            { title: "Reports", url: "/admin-dashboard/reports" },
        ],
    },
    {
        title: "User Management",
        url: "/admin-dashboard/users",
        icon: <Users />,
        items: [
            { title: "All Users", url: "/admin-dashboard/users" },
            { title: "Students", url: "/admin-dashboard/users/students" },
            { title: "Tutors", url: "/admin-dashboard/users/tutors" },
            { title: "Admins", url: "/admin-dashboard/users/admins" },
            { title: "Pending Approval", url: "/admin-dashboard/users/pending" },
        ],
    },
    {
        title: "Course Management",
        url: "/admin-dashboard/courses",
        icon: <BookCopy />,
        items: [
            { title: "All Courses", url: "/admin-dashboard/courses" },
            { title: "Pending Review", url: "/admin-dashboard/courses/pending" },
            { title: "Reported", url: "/admin-dashboard/courses/reported" },
        ],
    },
    {
        title: "Categories",
        url: "/admin-dashboard/categories",
        icon: <Tags />,
        items: [
            { title: "All Categories", url: "/admin-dashboard/categories" },
            { title: "Create", url: "/admin-dashboard/categories/create" },
        ],
    },
    {
        title: "Analytics",
        url: "/admin-dashboard/analytics",
        icon: <BarChart3 />,
        items: [
            { title: "Revenue", url: "/admin-dashboard/analytics/revenue" },
            { title: "Enrollments", url: "/admin-dashboard/analytics/enrollments" },
            { title: "User Growth", url: "/admin-dashboard/analytics/users" },
        ],
    },
    {
        title: "Payments",
        url: "/admin-dashboard/payments",
        icon: <CreditCard />,
        items: [
            { title: "Transactions", url: "/admin-dashboard/payments/transactions" },
            { title: "Refunds", url: "/admin-dashboard/payments/refunds" },
            { title: "Tutor Payouts", url: "/admin-dashboard/payments/payouts" },
        ],
    },
    {
        title: "Notifications",
        url: "/admin-dashboard/notifications",
        icon: <Bell />,
        items: [
            { title: "Send Broadcast", url: "/admin-dashboard/notifications/broadcast" },
            { title: "History", url: "/admin-dashboard/notifications/history" },
        ],
    },
    {
        title: "Support",
        url: "/admin-dashboard/support",
        icon: <HeadphonesIcon />,
        items: [
            { title: "Open Tickets", url: "/admin-dashboard/support/open" },
            { title: "Resolved", url: "/admin-dashboard/support/resolved" },
        ],
    },
    {
        title: "Roles & Permissions",
        url: "/admin-dashboard/roles",
        icon: <ShieldCheck />,
        items: [
            { title: "Roles", url: "/admin-dashboard/roles" },
            { title: "Permissions", url: "/admin-dashboard/roles/permissions" },
        ],
    },
    {
        title: "Site Settings",
        url: "/admin-dashboard/settings",
        icon: <Settings />,
        items: [
            { title: "General", url: "/admin-dashboard/settings/general" },
            { title: "Payment Gateway", url: "/admin-dashboard/settings/payment" },
            { title: "Email Templates", url: "/admin-dashboard/settings/email" },
            { title: "SEO", url: "/admin-dashboard/settings/seo" },
        ],
    },
];