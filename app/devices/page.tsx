// app/devices/page.tsx
'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CPEDevicesManagement } from '@/components/devices/CPEDevicesManagement';

export default function DevicesPage() {
  return (
    <DashboardLayout>
      <CPEDevicesManagement />
    </DashboardLayout>
  );
}
