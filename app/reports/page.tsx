'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { ReportDashboard } from '@/components/reports/ReportDashboard';

export default function ReportsPage() {
  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <ReportDashboard />
    </div>
    </DashboardLayout>
  );
}
