'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CustomerManagement } from '@/components/customers/CustomerManagement';

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <CustomerManagement />
    </DashboardLayout>
  );
}