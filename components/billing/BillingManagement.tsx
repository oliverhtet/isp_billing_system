'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Plus, Filter, Eye, Send, Download, CreditCard } from 'lucide-react';
import { InvoiceDialog } from './InvoiceDialog';

const invoices = [
  {
    id: 'INV-2024-001',
    customer: 'Maung Kyaw Kyaw',
    phone: '09-123-456-789',
    plan: 'Home Fiber 50Mbps',
    amount: 150000,
    tax: 15000,
    total: 165000,
    dueDate: '2024-12-15',
    issueDate: '2024-11-15',
    status: 'Paid',
    paidDate: '2024-12-01',
    paymentMethod: 'WaveMoney'
  },
  {
    id: 'INV-2024-002',
    customer: 'Daw Mya Mya Aye',
    phone: '09-987-654-321',
    plan: 'Business Pro 100Mbps',
    amount: 250000,
    tax: 25000,
    total: 275000,
    dueDate: '2024-12-20',
    issueDate: '2024-11-20',
    status: 'Unpaid',
    paidDate: null,
    paymentMethod: null
  },
  {
    id: 'INV-2024-003',
    customer: 'Ko Thant Zin',
    phone: '09-555-777-999',
    plan: 'Home Basic 25Mbps',
    amount: 80000,
    tax: 8000,
    total: 88000,
    dueDate: '2024-12-10',
    issueDate: '2024-11-10',
    status: 'Overdue',
    paidDate: null,
    paymentMethod: null
  },
  {
    id: 'INV-2024-004',
    customer: 'Ma Htwe Htwe',
    phone: '09-111-222-333',
    plan: 'Home Fiber 50Mbps',
    amount: 150000,
    tax: 15000,
    total: 165000,
    dueDate: '2024-12-25',
    issueDate: '2024-11-25',
    status: 'Partially Paid',
    paidDate: '2024-12-05',
    paymentMethod: 'KBZPay',
    paidAmount: 100000
  }
];

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

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-MM').format(amount) + ' MMK';
};

export function BillingManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showInvoiceDialog, setShowInvoiceDialog] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || invoice.status.toLowerCase().replace(' ', '-') === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleViewInvoice = (invoice: any) => {
    setSelectedInvoice(invoice);
    setShowInvoiceDialog(true);
  };

  const stats = {
    totalInvoices: invoices.length,
    paidInvoices: invoices.filter(inv => inv.status === 'Paid').length,
    unpaidInvoices: invoices.filter(inv => inv.status === 'Unpaid').length,
    overdueInvoices: invoices.filter(inv => inv.status === 'Overdue').length,
    totalRevenue: invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.total, 0),
    pendingAmount: invoices.filter(inv => inv.status !== 'Paid').reduce((sum, inv) => sum + inv.total, 0)
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Invoicing</h1>
          <p className="text-gray-600">ငွေတောင်းခံလွှာ စီမံခန့်ခွဲမှု - Manage invoices and billing</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Generate Invoice
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">{stats.totalInvoices}</div>
            <p className="text-sm text-gray-600">Total Invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">{stats.paidInvoices}</div>
            <p className="text-sm text-gray-600">Paid</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">{stats.overdueInvoices}</div>
            <p className="text-sm text-gray-600">Overdue</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-lg font-bold text-purple-600">{formatCurrency(stats.pendingAmount)}</div>
            <p className="text-sm text-gray-600">Pending Amount</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">{formatCurrency(stats.totalRevenue)}</div>
            <p className="text-sm text-gray-600">Total Revenue (Paid)</p>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-orange-600">{formatCurrency(stats.pendingAmount)}</div>
            <p className="text-sm text-gray-600">Outstanding Amount</p>
            <p className="text-xs text-gray-500 mt-1">Unpaid invoices</p>
          </CardContent>
        </Card>
      </div>

      {/* Invoice List */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice List</CardTitle>
          <CardDescription>Search and manage all invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by customer name, invoice ID, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="partially-paid">Partially Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Service Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id} className="hover:bg-gray-50">
                    <TableCell className="font-mono text-sm font-medium">
                      {invoice.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900">{invoice.customer}</div>
                        <div className="text-sm text-gray-500">{invoice.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {invoice.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{formatCurrency(invoice.total)}</div>
                        {invoice.status === 'Partially Paid' && invoice.paidAmount && (
                          <div className="text-xs text-green-600">
                            Paid: {formatCurrency(invoice.paidAmount)}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      <div className={invoice.status === 'Overdue' ? 'text-red-600 font-medium' : ''}>
                        {new Date(invoice.dueDate).toLocaleDateString('en-MM')}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(invoice.status)}>
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleViewInvoice(invoice)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                        {invoice.status !== 'Paid' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-green-600 hover:text-green-700"
                          >
                            <CreditCard className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredInvoices.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No invoices found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <InvoiceDialog 
        isOpen={showInvoiceDialog}
        onClose={() => setShowInvoiceDialog(false)}
        invoice={selectedInvoice}
      />
    </div>
  );
}