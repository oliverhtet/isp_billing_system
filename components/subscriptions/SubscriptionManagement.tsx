import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const subscriptions = [
  { id: 1, name: "Basic Plan", price: "$10", duration: "1 Month" },
  { id: 2, name: "Pro Plan", price: "$25", duration: "3 Months" },
  { id: 3, name: "Enterprise Plan", price: "$80", duration: "1 Year" },
];

export default function SubscriptionManagement() {
  const [filter, setFilter] = useState("all");

  return (
    <Card className="p-4 shadow-md rounded-2xl">
      <CardContent className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Subscription Management</h2>
            <p className="text-sm text-muted-foreground">Manage your pricing plans and packages</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Subscription</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Subscription</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input placeholder="Plan Name" />
                <Input placeholder="Price" />
                <Input placeholder="Duration" />
                <Button>Add</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filter Dropdown */}
        <div className="w-48">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptions
                .filter((s) => {
                  if (filter === "all") return true;
                  if (filter === "monthly") return s.duration.includes("Month");
                  if (filter === "yearly") return s.duration.includes("Year");
                  return true;
                })
                .map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell>{sub.name}</TableCell>
                    <TableCell>{sub.price}</TableCell>
                    <TableCell>{sub.duration}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
