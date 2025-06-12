'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  DollarSign, 
  Wifi, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';
import { RevenueChart } from './charts/RevenueChart';
import { CustomerGrowthChart } from './charts/CustomerGrowthChart';
import { ServiceStatusChart } from './charts/ServiceStatusChart';
import { RecentActivities } from './RecentActivities';

const stats = [
  {
    name: 'Total Customers',
    name_mm: 'စုစုပေါင်းသုံးစွဲသူများ',
    value: '2,847',
    change: '+12%',
    changeType: 'increase',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    name: 'Monthly Revenue',
    name_mm: 'လစဉ်ဝင်ငွေ',
    value: '45.2M MMK',
    change: '+8.2%',
    changeType: 'increase',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    name: 'Active Subscriptions',
    name_mm: 'အသုံးပြုနေသောဝန်ဆောင်မှုများ',
    value: '2,634',
    change: '+5.1%',
    changeType: 'increase',
    icon: Wifi,
    color: 'bg-purple-500',
  },
  {
    name: 'Overdue Invoices',
    name_mm: 'ပြီးဆုံးနေသောငွေတောင်းခံလွှာများ',
    value: '89',
    change: '-2.4%',
    changeType: 'decrease',
    icon: AlertTriangle,
    color: 'bg-orange-500',
  },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">မူလစာမျက်နှာ - Overview of your ISP operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div>{stat.name}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.name_mm}</div>
              </CardTitle>
              <div className={`h-8 w-8 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.changeType === 'increase' ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>ဝင်ငွေခြေလှမ်းမှု - Monthly revenue over the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
            <CardDescription>သုံးစွဲသူတိုးတက်မှု</CardDescription>
          </CardHeader>
          <CardContent>
            <CustomerGrowthChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Status</CardTitle>
            <CardDescription>ဝန်ဆောင်မှုအခြေအနေ</CardDescription>
          </CardHeader>
          <CardContent>
            <ServiceStatusChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Recent Activities</span>
            </CardTitle>
            <CardDescription>လတ်တလောလုပ်ဆောင်ချက်များ</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <RecentActivities />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}