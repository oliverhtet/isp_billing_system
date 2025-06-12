'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import PaymentManagement from '@/components/payments/PaymentManagement';


export default function PaymentsPage() {
  return (
    <DashboardLayout>
      <PaymentManagement />
    </DashboardLayout>
  );
}
