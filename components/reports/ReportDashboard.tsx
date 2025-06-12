'use client';

import { useState } from 'react';
import { ReportTable } from './ReportTable';

export function ReportDashboard() {
  const [type, setType] = useState('payments');

  return (
    <div className="space-y-6">
      {/* Report Filters */}
      <div className="flex items-center gap-4">
        <label className="font-medium">Report Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="payments">Payments</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="devices">Devices</option>
          <option value="support">Support Tickets</option>
        </select>

        <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Customers" value="325" />
        <Card title="Active Subscriptions" value="289" />
        <Card title="Monthly Revenue" value="MMK 8,500,000" />
        <Card title="Open Tickets" value="12" />
      </div>

      {/* Table */}
      <ReportTable type={type} />
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <p className="text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
