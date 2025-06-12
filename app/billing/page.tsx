'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { BillingManagement } from '@/components/billing/BillingManagement';

export default function BillingPage() {
  return (
    <DashboardLayout>
      <BillingManagement />
    </DashboardLayout>
  );
}