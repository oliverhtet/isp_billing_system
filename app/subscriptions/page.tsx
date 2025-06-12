'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CustomerManagement } from '@/components/customers/CustomerManagement';
import SubscriptionManagement from '@/components/subscriptions/SubscriptionManagement';

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <SubscriptionManagement />
    </DashboardLayout>
  );
}