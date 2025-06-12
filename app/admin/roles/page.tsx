'use client';
import { RoleManagement } from '@/components/admin/roles/RoleManagement';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';


export default function UserPage() {
  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User & Role Management</h1>
      <RoleManagement/>
    </div>
    </DashboardLayout>
  );
}
