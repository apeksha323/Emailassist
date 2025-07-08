"use client"

import type React from "react"

import { Mail, Settings, Users, CreditCard, BarChart3 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  const sidebarItems = [
    {
      name: "General",
      href: "/dashboard/settings",
      icon: Settings,
      active: pathname === "/dashboard/settings",
    },
    {
      name: "Members",
      href: "/dashboard/settings/members",
      icon: Users,
      active: pathname === "/dashboard/settings/members",
    },
    {
      name: "Plans",
      href: "/dashboard/settings/plans",
      icon: BarChart3,
      active: pathname === "/dashboard/settings/plans",
    },
    {
      name: "Billing",
      href: "/dashboard/settings/billing",
      icon: CreditCard,
      active: pathname === "/dashboard/settings/billing",
    },
  ]

  const topNavItems = [
    {
      name: "Agents",
      href: "/dashboard/agents",
      active: pathname.startsWith("/dashboard/agents"),
    },
    {
      name: "Usage",
      href: "/dashboard/usage",
      active: pathname.startsWith("/dashboard/usage"),
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      active: pathname.startsWith("/dashboard/settings"),
    },
  ]

  const isSettingsPage = pathname.startsWith("/dashboard/settings")

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">EmailAssist</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/resources" className="text-sm text-gray-600 hover:text-gray-900">
              Docs
            </Link>
            <Link href="/resources" className="text-sm text-gray-600 hover:text-gray-900">
              Help
            </Link>
            <Link href="/resources" className="text-sm text-gray-600 hover:text-gray-900">
              Changelog
            </Link>
          </div>
        </div>
      </div>

      {/* Top Navigation Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex space-x-8 px-6">
          {topNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "border-b-2 py-4 text-sm font-medium transition-colors",
                item.active
                  ? "border-black text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar - only show on settings pages */}
        {isSettingsPage && (
          <div className="w-64 border-r border-gray-200 bg-white">
            <nav className="space-y-1 p-4">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      item.active ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
