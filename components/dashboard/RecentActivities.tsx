'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    id: 1,
    type: 'payment',
    description: 'Payment received from Maung Kyaw',
    amount: '150,000 MMK',
    time: '2 minutes ago',
    status: 'success'
  },
  {
    id: 2,
    type: 'customer',
    description: 'New customer registration',
    customer: 'Daw Mya Mya',
    time: '15 minutes ago',
    status: 'info'
  },
  {
    id: 3,
    type: 'support',
    description: 'Support ticket created',
    ticket: '#12345',
    time: '1 hour ago',
    status: 'warning'
  },
  {
    id: 4,
    type: 'billing',
    description: 'Monthly billing cycle completed',
    count: '2,847 invoices',
    time: '2 hours ago',
    status: 'success'
  },
  {
    id: 5,
    type: 'device',
    description: 'CPE device assigned',
    device: 'Router #RT-001',
    time: '3 hours ago',
    status: 'info'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-800';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800';
    case 'info':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getAvatarText = (type: string) => {
  switch (type) {
    case 'payment':
      return 'P';
    case 'customer':
      return 'C';
    case 'support':
      return 'S';
    case 'billing':
      return 'B';
    case 'device':
      return 'D';
    default:
      return 'A';
  }
};

export function RecentActivities() {
  return (
    <div className="space-y-4 p-6">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">
              {getAvatarText(activity.type)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              {activity.description}
            </p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-gray-500">{activity.time}</p>
              <Badge variant="secondary" className={getStatusColor(activity.status)}>
                {activity.amount || activity.customer || activity.ticket || activity.count || activity.device}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}