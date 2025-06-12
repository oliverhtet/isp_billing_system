'use client';

type ReportType = 'payments' | 'subscriptions' | 'devices' | 'support';

interface ReportTableProps {
  type: ReportType;
}

export function ReportTable({ type }: ReportTableProps) {
  const dummyData = {
    payments: [
      { id: 1, customer: 'U Aung Aung', amount: 'MMK 30,000', date: '2024-06-12' },
    ],
    subscriptions: [
      { id: 1, customer: 'Daw Hla Hla', plan: 'Fiber 20 Mbps', status: 'Active' },
    ],
    devices: [
      { id: 1, customer: 'Mg Mg', device: 'Router', serial: 'R123456' },
    ],
    support: [
      { id: 1, customer: 'Ko Ko', type: 'Complaint', status: 'Open' },
    ],
  };

  const columns = {
    payments: ['Customer', 'Amount', 'Date'],
    subscriptions: ['Customer', 'Plan', 'Status'],
    devices: ['Customer', 'Device', 'Serial'],
    support: ['Customer', 'Type', 'Status'],
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            {columns[type].map((col) => (
              <th key={col} className="text-left px-4 py-2 font-medium text-gray-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData[type].map((item, idx) => (
            <tr key={idx} className="border-t">
              {Object.values(item)
                .slice(1)
                .map((val: any, index) => (
                  <td key={index} className="px-4 py-2">
                    {val}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
