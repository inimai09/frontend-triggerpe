
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Zap, CheckCircle2, Clock, ShieldAlert, Search, Filter, Calendar as CalendarIcon, MapPin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function ClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);

  const summary = [
    { label: 'Total Claims', value: '3', icon: Zap, color: 'text-primary' },
    { label: 'Total Paid', value: '₹1,200', icon: CheckCircle2, color: 'text-success' },
    { label: 'Approval Rate', value: '100%', icon: ShieldAlert, color: 'text-primary' },
    { label: 'Pending', value: '0', icon: Clock, color: 'text-warning' },
  ];

  const claims = [
    { id: 'CLM-001', date: '24 Feb 2026', trigger: 'Heavy Rain', location: 'Chennai', amount: '₹300', status: 'Paid' },
    { id: 'CLM-002', date: '18 Feb 2026', trigger: 'Extreme Heat', location: 'Chennai', amount: '₹600', status: 'Paid' },
    { id: 'CLM-003', date: '15 Jan 2026', trigger: 'Heavy Rain', location: 'Chennai', amount: '₹300', status: 'Paid' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return <Badge className="bg-success text-white font-black">PAID</Badge>;
      case 'Approved': return <Badge className="bg-primary text-white font-black">APPROVED</Badge>;
      case 'Pending': return <Badge className="bg-warning text-white font-black">PENDING</Badge>;
      case 'Rejected': return <Badge className="bg-destructive text-white font-black">REJECTED</Badge>;
      default: return <Badge className="bg-muted font-black">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">Claims History</h1>
          <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">All payouts are automated via parametric triggers.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summary.map((item, i) => (
            <Card key={i} className="bg-white border border-border shadow-sm p-6 flex items-center gap-5">
              <div className={cn("p-4 rounded-2xl bg-[#E0F7FA]", item.color)}>
                <item.icon className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</span>
                <span className="text-2xl font-black text-[#006064]">{item.value}</span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-white border border-border shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input className="pl-11 h-12 font-bold border-2 rounded-xl" placeholder="Search Claim ID..." />
            </div>
            <Select>
              <SelectTrigger className="w-[180px] h-12 font-bold rounded-xl border-2">
                <SelectValue placeholder="Trigger" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="rain">Heavy Rain</SelectItem>
                <SelectItem value="heat">Extreme Heat</SelectItem>
                <SelectItem value="outage">Outage</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] h-12 font-bold rounded-xl border-2">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-12 w-12 rounded-xl border-2 p-0"><Filter className="w-4 h-4" /></Button>
          </div>
        </Card>

        <Card className="bg-white border border-border shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Claim ID</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Date</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Trigger</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Location</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Amount</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Status</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => (
                <TableRow key={claim.id} className="cursor-pointer hover:bg-muted/20" onClick={() => setSelectedClaim(claim)}>
                  <TableCell className="px-8 py-6 font-black text-[#006064]">{claim.id}</TableCell>
                  <TableCell className="px-8 py-6 font-bold text-muted-foreground">{claim.date}</TableCell>
                  <TableCell className="px-8 py-6">
                    <Badge variant="outline" className="font-bold border-primary/20 text-primary bg-[#E0F7FA]">{claim.trigger}</Badge>
                  </TableCell>
                  <TableCell className="px-8 py-6 font-bold text-[#006064]">{claim.location}</TableCell>
                  <TableCell className="px-8 py-6 font-black text-[#006064]">{claim.amount}</TableCell>
                  <TableCell className="px-8 py-6">{getStatusBadge(claim.status)}</TableCell>
                  <TableCell className="px-8 py-6 text-right">
                    <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {claims.length === 0 && (
            <div className="p-24 text-center">
              <p className="text-lg font-black text-muted-foreground uppercase tracking-widest">No claims yet. All conditions are normal.</p>
            </div>
          )}
        </Card>

        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-md bg-white p-0 overflow-hidden rounded-2xl">
            <DialogHeader className="bg-[#E0F7FA] p-8 border-b">
              <DialogTitle className="text-2xl font-black text-[#006064] uppercase tracking-tighter">Claim Details: {selectedClaim?.id}</DialogTitle>
            </DialogHeader>
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Trigger Type</span>
                  <p className="font-black text-[#006064]">{selectedClaim?.trigger}</p>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Payout Amount</span>
                  <p className="font-black text-primary text-xl">{selectedClaim?.amount}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Claim Timeline</h4>
                <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                  {[
                    { label: 'Claim Created', time: '14:20 PM', done: true },
                    { label: 'Parametric Validation', time: '14:21 PM', done: true },
                    { label: 'Fraud Detection Check', time: '14:21 PM', done: true },
                    { label: 'UPI Payout Initiated', time: '14:22 PM', done: true },
                    { label: 'Paid to Partner', time: '14:22 PM', done: true },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-5 pl-1.5 relative z-10">
                      <div className={cn("w-3.5 h-3.5 rounded-full border-2", step.done ? "bg-primary border-primary" : "bg-white border-border")} />
                      <div className="flex-1">
                        <p className="text-sm font-black text-[#006064] leading-none mb-1">{step.label}</p>
                        <p className="text-[10px] font-bold text-muted-foreground">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-black text-muted-foreground uppercase">Transaction ID</span>
                <span className="font-mono text-xs font-bold">UPI/IMPS/2026/88410</span>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full h-14 bg-primary font-black rounded-full btn-hover-effect">Close Details</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
