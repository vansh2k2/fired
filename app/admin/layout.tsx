import type React from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-secondary/10">
      <AdminSidebar />
      <main className="flex-1 p-8 lg:p-12 mt-20 lg:mt-0 overflow-y-auto">{children}</main>
    </div>
  )
}
