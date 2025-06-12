'use client';

import { useState } from 'react';

export function ServiceRequestForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    request_type: '',
    description: '',
    priority: 'Medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // TODO: Send to API
    alert('Submitted!');
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-6 rounded shadow">
      <div className="mb-4">
        <label className="block font-medium mb-1">Request Type</label>
        <input
          type="text"
          name="request_type"
          value={form.request_type}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., Installation, Complaint"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={3}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Priority</label>
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Submit Request
      </button>
    </form>
  );
}
