import React from 'react'
import { DollarSign } from 'lucide-react'

type Payment = {
  id: number
  customer: string
  amount: number
  method: string
  status: 'Paid' | 'Unpaid' | 'Pending'
  date: string
}

const payments: Payment[] = [
  { id: 1, customer: 'Aung Aung', amount: 25000, method: 'KBZPay', status: 'Paid', date: '2025-06-01' },
  { id: 2, customer: 'Mg Mg', amount: 30000, method: 'WavePay', status: 'Unpaid', date: '2025-06-05' },
  { id: 3, customer: 'Hla Hla', amount: 18000, method: 'Cash', status: 'Pending', date: '2025-06-10' },
]

const PaymentManagement = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="h-6 w-6 text-green-500" />
        <h2 className="text-xl font-semibold">Payments / ငွေပေးချေမှုများ</h2>
      </div>

      <div className="overflow-x-auto border rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Amount (MMK)</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-4 py-2">{payment.id}</td>
                <td className="px-4 py-2">{payment.customer}</td>
                <td className="px-4 py-2">{payment.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{payment.method}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                      payment.status === 'Paid'
                        ? 'bg-green-100 text-green-600'
                        : payment.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-4 py-2">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentManagement
