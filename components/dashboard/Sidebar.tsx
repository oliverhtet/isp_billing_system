'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Users,
  Package,
  CreditCard,
  DollarSign,
  Router,
  HeadphonesIcon,
  Settings,
  FileText,
  X,
  ChevronRight,
  Home,
  Wifi
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', name_mm: 'မူလစာမျက်နှာ', href: '/', icon: Home },
  {
  name: 'Users & Roles',
  name_mm: 'အသုံးပြုသူနှင့် အခန်းကဏ္ဍများ',
  href: '/admin/users',
  icon: Users,
},

  { name: 'Customers', name_mm: 'သုံးစွဲသူများ', href: '/customers', icon: Users },
  { name: 'Service Plans', name_mm: 'ဝန်ဆောင်မှုအစီအစဉ်များ', href: '/plans', icon: Package },
  { name: 'Subscriptions', name_mm: 'အသုံးပြုမှုများ', href: '/subscriptions', icon: Wifi },
  { name: 'Billing', name_mm: 'ငွေတောင်းခံလွှာများ', href: '/billing', icon: FileText },
  { name: 'Payments', name_mm: 'ငွေပေးချေမှုများ', href: '/payments', icon: DollarSign },
  { name: 'CPE Devices', name_mm: 'ပစ္စည်းကိရိယာများ', href: '/devices', icon: Router },
  { name: 'Support', name_mm: 'ပံ့ပိုးကူညီမှု', href: '/support', icon: HeadphonesIcon },
  { name: 'Reports', name_mm: 'အစီရင်ခံစာများ', href: '/reports', icon: BarChart3 },
  { name: 'Settings', name_mm: 'ဆက်တင်များ', href: '/settings', icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Wifi className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">ISP Admin</h1>
                <p className="text-xs text-gray-500">Myanmar Telecom</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => onClose()}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={cn(
                      "h-5 w-5",
                      isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
                    )} />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-xs text-gray-400">{item.name_mm}</div>
                    </div>
                  </div>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    isActive ? "text-blue-600 rotate-90" : "text-gray-300"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* User info */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">AD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@isp.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}