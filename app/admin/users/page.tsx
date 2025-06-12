'use client';
import { UserManagement } from '@/components/admin/users/UserManagement';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

export default function UserPage() {
  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User & Role Management</h1>
      <UserManagement />
    </div>
    </DashboardLayout>
  );
}
