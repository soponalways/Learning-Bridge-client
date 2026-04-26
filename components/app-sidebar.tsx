"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getNavByRole } from "@/lib/nav-config"
import { userRole } from "@/types/user"
import { authClient } from "@/lib/auth-client"

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "Sopon islam",
      email: "soponislam132s@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
  }

  const session = authClient.useSession();
  data.user.name = session.data?.user.name as string
  data.user.email = session.data?.user.email as string
  data.user.avatar = session.data?.user.image as string
  console.log(session)
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={getNavByRole(userRole.TUTOR)} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
