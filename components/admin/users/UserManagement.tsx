'use client';

import { useState } from 'react';

const dummyUsers = [
  {
    id: '1',
    name: 'Aung Aung',
    email: 'aung@example.com',
    role: 'Technician',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Mya Mya',
    email: 'mya@example.com',
    role: 'Admin',
    status: 'Suspended',
  },
];

export function UserManagement() {
  const [users] = useState(dummyUsers);

  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
