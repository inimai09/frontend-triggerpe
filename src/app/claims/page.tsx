"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Zap, CheckCircle2, Clock, ShieldAlert, Search, Filter, ChevronRight, MapPin } from 'lucide-react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function ClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);

  const summary = [
    { label: 'Total Claims', value: '3', icon: Zap, color: 'text-primary' },
    { label: 'Total Paid', value: '₹1,200', icon: CheckCircle2, color: 'text-primary' },
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
      case 'Paid': return <Badge className="bg-primary/10 text-primary border-none font-bold">PAID</Badge>;
      case 'Approved': return <Badge className="bg-[#E0F7FA] text-primary border-none font-bold">APPROVED</Badge>;
      case 'Pending': return <Badge className="bg-[#FFB74D]/10 text-[#FFB74D] border-none font-bold">PENDING</Badge>;
      default: return <Badge className="bg-destructive/10 text-destructive border-none font-bold">REJECTED</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064] font-headline">Claims Log</h1>
          <p className="text-[#00838F] font-medium mt-1">Full history of parametric payouts.</p>
        </header>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summary.map((item, i) => (
            <Card key={i} className="bg-white border-none shadow-sm rounded-2xl p-6 flex items-center gap-5">
              <div className={cn("p-4 rounded-full bg-[#E0F7FA] flex items-center justify-center", item.color)}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">{item.label}</span>
                <span className="text-xl font-black text-[#006064]">{item.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Filter Bar */}
        <Card className="bg-white border-none shadow-sm rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00838F]/40" />
                <Input className="pl-12 h-14 bg-[#F1F5F9]/50 border-border rounded-full text-sm font-medium" placeholder="Search by Claim ID..." />
              </div>
              <div className="flex flex-wrap gap-4">
                <Select>
                  <SelectTrigger className="w-[180px] h-14 bg-white rounded-full font-medium text-xs">
                    <SelectValue placeholder="Trigger Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rain">Heavy Rain</SelectItem>
                    <SelectItem value="heat">Extreme Heat</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[160px] h-14 bg-white rounded-full font-medium text-xs">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-14 w-14 rounded-full border-border bg-white text-[#00838F]">
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claims Table */}
        <Card className="bg-white border-none shadow-sm rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50">
                <TableRow>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Claim ID</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Date</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Trigger</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Zone</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Payout</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Status</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claims.map((claim) => (
                  <TableRow 
                    key={claim.id} 
                    className="cursor-pointer hover:bg-[#F1F5F9]/30 transition-colors group" 
                    onClick={() => setSelectedClaim(claim)}
                  >
                    <TableCell className="px-10 py-6 text-sm font-black text-[#006064]">{claim.id}</TableCell>
                    <TableCell className="px-10 py-6 text-xs font-medium text-[#00838F]">{claim.date}</TableCell>
                    <TableCell className="px-10 py-6">
                      <Badge className="bg-[#E0F7FA] text-primary border-none text-[10px] font-bold px-3">
                        {claim.trigger}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-10 py-6 text-sm font-bold text-[#006064]">{claim.location}</TableCell>
                    <TableCell className="px-10 py-6 text-lg font-black text-[#006064]">{claim.amount}</TableCell>
                    <TableCell className="px-10 py-6">{getStatusBadge(claim.status)}</TableCell>
                    <TableCell className="px-10 py-6 text-right">
                      <ChevronRight className="w-5 h-5 text-[#00838F]/30 ml-auto group-hover:text-primary transition-colors" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Claim Detail Modal */}
        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-xl bg-white p-0 overflow-hidden rounded-3xl border-none shadow-2xl">
            <DialogHeader className="bg-[#E0F7FA] p-10">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-2xl font-black text-[#006064] font-headline">Claim Detail: {selectedClaim?.id}</DialogTitle>
                <Badge className="bg-primary text-white border-none font-bold px-4 py-1.5">PAID</Badge>
              </div>
            </DialogHeader>
            <div className="p-10 space-y-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-[#F1F5F9]/50 rounded-2xl">
                  <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest block mb-2">Trigger Event</span>
                  <p className="font-black text-[#006064] text-xl">{selectedClaim?.trigger}</p>
                </div>
                <div className="p-6 bg-[#F1F5F9]/50 rounded-2xl text-right">
                  <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest block mb-2">Payout Amount</span>
                  <p className="font-black text-primary text-3xl">{selectedClaim?.amount}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold text-[#006064] flex items-center gap-3">
                  <div className="p-2 bg-[#E0F7FA] rounded-full"><Clock className="w-4 h-4 text-primary" /></div>
                  Verification Timeline
                </h4>
                <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#E2E8F0]">
                  {[
                    { label: 'Claim Created via Trigger', time: '14:21 PM' },
                    { label: 'Neural Fraud Check Passed', time: '14:21 PM' },
                    { label: 'UPI Transaction Initiated', time: '14:22 PM' },
                    { label: 'Payment Settled', time: '14:25 PM' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-8 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md" />
                      <div className="flex-1 flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-[#006064]">{step.label}</p>
                          <p className="text-[10px] font-medium text-[#00838F]">{step.time}</p>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#E0F7FA] rounded-2xl border border-primary/20 flex items-center gap-5">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#006064]">Zone Verified: Chennai Central</p>
                  <p className="text-[10px] font-medium text-[#00838F]">Validated via high-fidelity weather telemetry</p>
                </div>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-black h-16 uppercase text-lg tracking-tight shadow-xl btn-hover-effect">Close Detail</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
