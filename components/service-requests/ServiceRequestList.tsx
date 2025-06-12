'use client';

import React from 'react';

const mockData = [
    {
        request_id: 'abc123',
        request_type: 'Technical Support',
        description: 'Internet is down since morning.',
        status: 'In Progress',
        priority: 'High',
        opened_at: '2025-06-12T09:00:00Z',
    },
    // Add more mock requests
];

export function ServiceRequestList() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Service Requests</h1>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                        <tr>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Priority</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Opened At</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((req) => (
                            <tr key={req.request_id} className="border-b">
                                <td className="px-4 py-2">{req.request_type}</td>
                                <td className="px-4 py-2">{req.description}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded text-white ${getPriorityColor(req.priority)}`}>
                                        {req.priority}
                                    </span>
                                </td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded ${getStatusColor(req.status)}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2">{new Date(req.opened_at).toLocaleString()}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    <button className="text-blue-600 hover:underline">Edit</button>
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function getPriorityColor(priority: string) {
    switch (priority) {
        case 'High': return 'bg-red-500';
        case 'Medium': return 'bg-yellow-500';
        case 'Low': return 'bg-green-500';
        case 'Critical': return 'bg-red-700';
        default: return 'bg-gray-400';
    }
}

function getStatusColor(status: string) {
    switch (status) {
        case 'New': return 'bg-blue-400 text-white';
        case 'In Progress': return 'bg-orange-400 text-white';
        case 'Resolved': return 'bg-green-400 text-white';
        case 'Closed': return 'bg-gray-600 text-white';
        case 'Cancelled': return 'bg-red-400 text-white';
        default: return 'bg-gray-300 text-black';
    }
}
