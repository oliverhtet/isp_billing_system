'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', customers: 2450 },
  { month: 'Feb', customers: 2520 },
  { month: 'Mar', customers: 2610 },
  { month: 'Apr', customers: 2690 },
  { month: 'May', customers: 2750 },
  { month: 'Jun', customers: 2810 },
  { month: 'Jul', customers: 2780 },
  { month: 'Aug', customers: 2820 },
  { month: 'Sep', customers: 2847 },
];

export function CustomerGrowthChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="customers"
            stroke="#059669"
            strokeWidth={3}
            dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}