'use client';

import React, { useState } from 'react';

interface CustomerDevice {
  device_id: string;
  customer_id: string;
  subscription_id: string;
  device_type: string;
  manufacturer?: string;
  model?: string;
  serial_number: string;
  mac_address?: string;
  ownership_type: 'ISP-Owned' | 'Customer-Owned';
  rental_fee?: number;
  status: 'Active' | 'Faulty' | 'Returned';
  installation_date?: string;
  created_at?: string;
}

const initialForm: Partial<CustomerDevice> = {
  customer_id: '',
  subscription_id: '',
  device_type: '',
  manufacturer: '',
  model: '',
  serial_number: '',
  mac_address: '',
  ownership_type: 'ISP-Owned',
  rental_fee: 0,
  status: 'Active',
  installation_date: '',
};

export function CPEDevicesManagement() {
  const [devices, setDevices] = useState<CustomerDevice[]>([]);
  const [form, setForm] = useState(initialForm);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDevice = () => {
    const newDevice: CustomerDevice = {
      ...form,
      device_id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
    } as CustomerDevice;
    setDevices([...devices, newDevice]);
    setForm(initialForm);
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">CPE Devices Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {showForm ? 'Cancel' : 'Add Device'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white shadow p-4 mb-6 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="customer_id" placeholder="Customer ID" onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="subscription_id" placeholder="Subscription ID" onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="device_type" placeholder="Device Type (ONT, Router...)" onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="manufacturer" placeholder="Manufacturer" onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="model" placeholder="Model" onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="serial_number" placeholder="Serial Number" onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="mac_address" placeholder="MAC Address (AA:BB:CC...)" onChange={handleChange} className="border p-2 rounded" />
            <select name="ownership_type" value={form.ownership_type} onChange={handleChange} className="border p-2 rounded">
              <option value="ISP-Owned">ISP-Owned</option>
              <option value="Customer-Owned">Customer-Owned</option>
            </select>
            <input type="number" name="rental_fee" placeholder="Rental Fee" onChange={handleChange} className="border p-2 rounded" />
            <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
              <option value="Active">Active</option>
              <option value="Faulty">Faulty</option>
              <option value="Returned">Returned</option>
            </select>
            <input type="date" name="installation_date" onChange={handleChange} className="border p-2 rounded" />
          </div>
          <button onClick={handleAddDevice} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Save Device
          </button>
        </div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Serial</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">MAC</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Ownership</th>
            <th className="p-2 border">Rental Fee</th>
          </tr>
        </thead>
        <tbody>
          {devices.length > 0 ? (
            devices.map((d) => (
              <tr key={d.device_id}>
                <td className="p-2 border">{d.serial_number}</td>
                <td className="p-2 border">{d.device_type}</td>
                <td className="p-2 border">{d.mac_address}</td>
                <td className="p-2 border">{d.status}</td>
                <td className="p-2 border">{d.ownership_type}</td>
                <td className="p-2 border">{d.rental_fee?.toFixed(2)} Ks</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center p-4 text-gray-500">
                No devices found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
