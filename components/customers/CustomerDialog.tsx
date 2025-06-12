'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CustomerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  customer?: any;
}

const townships = [
  'Bahan', 'Kamayut', 'Insein', 'Thingangyun', 'Mayangone', 'Sanchaung',
  'Tamwe', 'Thaketa', 'Yankin', 'Hlaing', 'Lanmadaw', 'Latha'
];

const regions = [
  'Yangon Region', 'Mandalay Region', 'Naypyidaw Union Territory',
  'Shan State', 'Kachin State', 'Kayah State', 'Kayin State'
];

export function CustomerDialog({ isOpen, onClose, customer }: CustomerDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    nrc: '',
    houseNo: '',
    street: '',
    ward: '',
    township: '',
    city: 'Yangon',
    region: 'Yangon Region',
    customerType: 'residential',
    status: 'active',
    notes: ''
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        name: customer.name || '',
        phone: customer.phone || '',
        email: customer.email || '',
        nrc: customer.nrc || '',
        houseNo: '',
        street: '',
        ward: '',
        township: '',
        city: 'Yangon',
        region: 'Yangon Region',
        customerType: 'residential',
        status: customer.status?.toLowerCase() || 'active',
        notes: ''
      });
    } else {
      setFormData({
        name: '',
        phone: '',
        email: '',
        nrc: '',
        houseNo: '',
        street: '',
        ward: '',
        township: '',
        city: 'Yangon',
        region: 'Yangon Region',
        customerType: 'residential',
        status: 'active',
        notes: ''
      });
    }
  }, [customer]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form data:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {customer ? 'Edit Customer' : 'Add New Customer'}
          </DialogTitle>
          <DialogDescription>
            {customer ? 'Update customer information' : 'Create a new customer record'}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="address">Address & Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="09-XXX-XXX-XXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="customer@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nrc">NRC Number *</Label>
              <Input
                id="nrc"
                value={formData.nrc}
                onChange={(e) => handleInputChange('nrc', e.target.value)}
                placeholder="12/MaYaKa(N)123456"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerType">Customer Type</Label>
              <Select value={formData.customerType} onValueChange={(value) => handleInputChange('customerType', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="address" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="houseNo">House/Building No.</Label>
                <Input
                  id="houseNo"
                  value={formData.houseNo}
                  onChange={(e) => handleInputChange('houseNo', e.target.value)}
                  placeholder="No. 123"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="street">Street</Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  placeholder="Main Street"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ward">Ward</Label>
                <Input
                  id="ward"
                  value={formData.ward}
                  onChange={(e) => handleInputChange('ward', e.target.value)}
                  placeholder="Ward name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="township">Township *</Label>
                <Select value={formData.township} onValueChange={(value) => handleInputChange('township', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select township" />
                  </SelectTrigger>
                  <SelectContent>
                    {townships.map((township) => (
                      <SelectItem key={township} value={township}>
                        {township}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Region/State *</Label>
                <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Account Status</Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="pending">Pending Activation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Internal Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Add any internal notes about this customer..."
                rows={3}
              />
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
            {customer ? 'Update Customer' : 'Create Customer'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}