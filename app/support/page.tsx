'use client';

import { ServiceRequestList } from '@/components/service-requests/ServiceRequestList';
import { ServiceRequestForm } from '@/components/service-requests/ServiceRequestForm';
import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

export default function SupportPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showForm ? 'Close' : 'New Request'}
          </button>
        </div>

        {showForm && <ServiceRequestForm onSuccess={() => setShowForm(false)} />}
        <ServiceRequestList />
      </div>
    </DashboardLayout>
  );
}
