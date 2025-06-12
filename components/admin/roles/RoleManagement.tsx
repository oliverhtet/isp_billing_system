'use client';

const roles = [
  { name: 'Admin', permissions: ['All Access'] },
  { name: 'Customer Support', permissions: ['View Customers', 'Create Tickets'] },
  { name: 'Technician', permissions: ['View Tickets', 'Close Tickets'] },
];

export function RoleManagement() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Roles & Permissions</h2>
      <ul>
        {roles.map((role, index) => (
          <li key={index} className="mb-4">
            <div className="font-medium">{role.name}</div>
            <ul className="ml-4 list-disc text-sm text-gray-600">
              {role.permissions.map((perm, i) => (
                <li key={i}>{perm}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
