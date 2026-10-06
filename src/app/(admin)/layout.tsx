"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Users,
  LayoutDashboard,
  Activity,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Search,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { logoutAction } from "@/app/actions/auth";
import { toast } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogout = async () => {
    toast.loading("Logging out...", { id: "auth-toast" });
    await logoutAction();
    toast.success("Logged out successfully", { id: "auth-toast" });
    router.push("/login");
  };

  const navItems = [
    {
      title: "Users Management",
      href: "/admin/users",
      icon: Users,
      badge: "Live",
    },
    {
      title: "Dashboard Overview",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Revenue Signals",
      href: "/admin/users#signals",
      icon: Activity,
    },
    {
      title: "Analytics",
      href: "/admin/users#analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/admin/users#settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FAFAFC] flex text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sidebar Desktop Container */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200/80 bg-white min-h-screen sticky top-0 shrink-0 z-30 shadow-sm">
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="grid h-7 w-7 grid-cols-3 items-end gap-1 rounded-lg bg-blue-600/10 p-1">
              <span className="h-2 rounded-sm bg-blue-600" />
              <span className="h-3.5 rounded-sm bg-blue-600" />
              <span className="h-5 rounded-sm bg-blue-600" />
            </span>
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              PrimeRigor
            </span>
          </Link>
          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600 border border-blue-100">
            ADMIN
          </span>
        </div>

        {/* Sidebar Menu Links */}
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
            Main Navigation
          </div>
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href === "/admin/users" && pathname === "/admin");

            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.title}</span>
                </div>
                {item.badge && (
                  <span
                    className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer User Profile */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <Avatar fallback="AD" className="bg-blue-600 text-white text-xs border-0" />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 truncate">Admin Console</div>
                <div className="text-[10px] text-slate-500 truncate">admin@primerigor.com</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Admin Content Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-200/80 bg-white px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="relative hidden sm:block w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search users, emails or IDs..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Admin Access Open</span>
            </div>

            <button className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full" />
            </button>

            <Link href="/">
              <Button variant="outline" className="text-xs font-semibold h-8 px-3 border-slate-200 text-slate-700">
                View Site
              </Button>
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Sidebar Drawer */}
        {isMobileSidebarOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        )}

        {/* Children Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
