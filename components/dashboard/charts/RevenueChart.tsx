'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 32000000, previousYear: 28000000 },
  { month: 'Feb', revenue: 35000000, previousYear: 31000000 },
  { month: 'Mar', revenue: 38000000, previousYear: 33000000 },
  { month: 'Apr', revenue: 41000000, previousYear: 36000000 },
  { month: 'May', revenue: 43000000, previousYear: 38000000 },
  { month: 'Jun', revenue: 46000000, previousYear: 41000000 },
  { month: 'Jul', revenue: 44000000, previousYear: 39000000 },
  { month: 'Aug', revenue: 47000000, previousYear: 42000000 },
  { month: 'Sep', revenue: 49000000, previousYear: 44000000 },
  { month: 'Oct', revenue: 51000000, previousYear: 46000000 },
  { month: 'Nov', revenue: 48000000, previousYear: 43000000 },
  { month: 'Dec', revenue: 52000000, previousYear: 47000000 },
];

export function RevenueChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis 
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip 
            formatter={(value: number) => [`${(value / 1000000).toFixed(1)}M MMK`, '']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="previousYear"
            stackId="1"
            stroke="#94a3b8"
            fill="#94a3b8"
            fillOpacity={0.3}
            name="Previous Year"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="2"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.8}
            name="Current Year"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}