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
import { Search, Plus, Filter, Eye, Edit, Trash2, Phone, Mail } from 'lucide-react';
import { CustomerDialog } from './CustomerDialog';

const customers = [
  {
    id: 1,
    name: 'Maung Kyaw Kyaw',
    phone: '09-123-456-789',
    email: 'kyaw@email.com',
    nrc: '12/MaYaKa(N)123456',
    address: 'No.123, Main Street, Bahan Township, Yangon',
    plan: 'Home Fiber 50Mbps',
    status: 'Active',
    joinDate: '2024-01-15',
    lastPayment: '2024-12-01'
  },
  {
    id: 2,
    name: 'Daw Mya Mya Aye',
    phone: '09-987-654-321',
    email: 'mya@email.com',
    nrc: '12/OuKaMa(N)987654',
    address: 'No.456, Second Street, Kamayut Township, Yangon',
    plan: 'Business Pro 100Mbps',
    status: 'Active',
    joinDate: '2024-02-20',
    lastPayment: '2024-11-28'
  },
  {
    id: 3,
    name: 'Ko Thant Zin',
    phone: '09-555-777-999',
    email: 'thant@email.com',
    nrc: '12/LaThaNa(N)555777',
    address: 'No.789, Third Avenue, Insein Township, Yangon',
    plan: 'Home Basic 25Mbps',
    status: 'Suspended',
    joinDate: '2023-11-10',
    lastPayment: '2024-10-15'
  },
  {
    id: 4,
    name: 'Ma Htwe Htwe',
    phone: '09-111-222-333',
    email: 'htwe@email.com',
    nrc: '12/ThaNa(N)111222',
    address: 'No.321, Fourth Road, Thingangyun Township, Yangon',
    plan: 'Home Fiber 50Mbps',
    status: 'Pending',
    joinDate: '2024-12-01',
    lastPayment: null
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Suspended':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function CustomerManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCustomerDialog, setShowCustomerDialog] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.nrc.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || customer.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleEditCustomer = (customer: any) => {
    setSelectedCustomer(customer);
    setShowCustomerDialog(true);
  };

  const handleAddCustomer = () => {
    setSelectedCustomer(null);
    setShowCustomerDialog(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600">သုံးစွဲသူစီမံခန့်ခွဲမှု - Manage all your customers</p>
        </div>
        <Button onClick={handleAddCustomer} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">2,847</div>
            <p className="text-sm text-gray-600">Total Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">2,634</div>
            <p className="text-sm text-gray-600">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">156</div>
            <p className="text-sm text-gray-600">Suspended</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-purple-600">57</div>
            <p className="text-sm text-gray-600">Pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>Search and manage all customer records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by name, phone, email, or NRC..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>NRC</TableHead>
                  <TableHead>Service Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {customer.address}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Phone className="h-3 w-3 mr-1 text-gray-400" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-3 w-3 mr-1 text-gray-400" />
                          {customer.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{customer.nrc}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-medium">
                        {customer.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(customer.status)}>
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(customer.joinDate).toLocaleDateString('en-MM')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditCustomer(customer)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditCustomer(customer)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredCustomers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No customers found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <CustomerDialog 
        isOpen={showCustomerDialog}
        onClose={() => setShowCustomerDialog(false)}
        customer={selectedCustomer}
      />
    </div>
  );
}