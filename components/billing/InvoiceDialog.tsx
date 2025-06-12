'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, Send, CreditCard, Printer } from 'lucide-react';

interface InvoiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  invoice?: any;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-MM').format(amount) + ' MMK';
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Paid':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Unpaid':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Overdue':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Partially Paid':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function InvoiceDialog({ isOpen, onClose, invoice }: InvoiceDialogProps) {
  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl">Invoice Details</DialogTitle>
              <DialogDescription>{invoice.id}</DialogDescription>
            </div>
            <Badge className={getStatusColor(invoice.status)}>
              {invoice.status}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Invoice Header */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Myanmar Telecom ISP</h3>
                <p className="text-sm text-gray-600">123 Main Street</p>
                <p className="text-sm text-gray-600">Yangon, Myanmar</p>
                <p className="text-sm text-gray-600">Phone: 01-234-5678</p>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-900">Invoice</h3>
                <p className="text-sm text-gray-600">#{invoice.id}</p>
                <p className="text-sm text-gray-600">Issue Date: {new Date(invoice.issueDate).toLocaleDateString('en-MM')}</p>
                <p className="text-sm text-gray-600">Due Date: {new Date(invoice.dueDate).toLocaleDateString('en-MM')}</p>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Bill To:</h4>
            <div className="bg-white border rounded-lg p-4">
              <p className="font-medium">{invoice.customer}</p>
              <p className="text-sm text-gray-600">{invoice.phone}</p>
            </div>
          </div>

          {/* Service Details */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Service Details:</h4>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-gray-900">Description</th>
                    <th className="text-right p-3 text-sm font-medium text-gray-900">Period</th>
                    <th className="text-right p-3 text-sm font-medium text-gray-900">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{invoice.plan}</p>
                        <p className="text-sm text-gray-600">Monthly Internet Service</p>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm">
                      {new Date(invoice.issueDate).toLocaleDateString('en-MM')} - {new Date(invoice.dueDate).toLocaleDateString('en-MM')}
                    </td>
                    <td className="p-3 text-right font-medium">
                      {formatCurrency(invoice.amount)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatCurrency(invoice.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Commercial Tax (10%):</span>
                <span>{formatCurrency(invoice.tax)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount:</span>
                <span>{formatCurrency(invoice.total)}</span>
              </div>
              
              {invoice.status === 'Partially Paid' && invoice.paidAmount && (
                <>
                  <div className="flex justify-between text-green-600">
                    <span>Amount Paid:</span>
                    <span>{formatCurrency(invoice.paidAmount)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-red-600">
                    <span>Balance Due:</span>
                    <span>{formatCurrency(invoice.total - invoice.paidAmount)}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Payment Information */}
          {invoice.paidDate && (
            <div className="border rounded-lg p-4 bg-green-50">
              <h4 className="font-semibold text-green-900 mb-2">Payment Information</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Payment Date:</span> {new Date(invoice.paidDate).toLocaleDateString('en-MM')}</p>
                <p><span className="font-medium">Payment Method:</span> {invoice.paymentMethod}</p>
                {invoice.paidAmount && (
                  <p><span className="font-medium">Amount Paid:</span> {formatCurrency(invoice.paidAmount)}</p>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <Button variant="outline" className="flex-1">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Send Email
            </Button>
            {invoice.status !== 'Paid' && (
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                <CreditCard className="h-4 w-4 mr-2" />
                Record Payment
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}