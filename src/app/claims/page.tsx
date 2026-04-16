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

export default function ClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);

  const summary = [
    { label: 'Total Claims', value: '3', icon: Zap, color: 'text-[#00ACC1]' },
    { label: 'Total Paid', value: '₹1,200', icon: CheckCircle2, color: 'text-success' },
    { label: 'Approval Rate', value: '100%', icon: ShieldAlert, color: 'text-[#00ACC1]' },
    { label: 'Pending', value: '0', icon: Clock, color: 'text-warning' },
  ];

  const claims = [
    { id: 'CLM-001', date: '24 Feb 2026', trigger: 'Heavy Rain', location: 'Chennai', amount: '₹300', status: 'Paid' },
    { id: 'CLM-002', date: '18 Feb 2026', trigger: 'Extreme Heat', location: 'Chennai', amount: '₹600', status: 'Paid' },
    { id: 'CLM-003', date: '15 Jan 2026', trigger: 'Heavy Rain', location: 'Chennai', amount: '₹300', status: 'Paid' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return <Badge className="bg-success/10 text-success border-none font-bold">PAID</Badge>;
      case 'Approved': return <Badge className="bg-[#E0F7FA] text-[#00ACC1] border-none font-bold">APPROVED</Badge>;
      case 'Pending': return <Badge className="bg-[#FFB74D]/10 text-[#FFB74D] border-none font-bold">PENDING</Badge>;
      default: return <Badge className="bg-destructive/10 text-destructive border-none font-bold">REJECTED</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064]">Claims Log</h1>
          <p className="text-[#00838F] font-medium mt-1">Full history of parametric payouts.</p>
        </header>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summary.map((item, i) => (
            <Card key={i} className="bg-white border-none card-shadow rounded-xl p-6 flex items-center gap-5">
              <div className={cn("p-3 rounded-full bg-[#E0F7FA]", item.color)}>
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
        <Card className="bg-white border-none card-shadow rounded-xl">
          <CardContent className="p-6">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00838F]/40" />
                <Input className="pl-12 h-12 bg-[#F1F5F9]/50 border-border rounded-lg text-sm font-medium" placeholder="Search by Claim ID..." />
              </div>
              <div className="flex flex-wrap gap-4">
                <Select>
                  <SelectTrigger className="w-[160px] h-12 bg-white rounded-lg font-medium text-xs">
                    <SelectValue placeholder="Trigger Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rain">Heavy Rain</SelectItem>
                    <SelectItem value="heat">Extreme Heat</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[140px] h-12 bg-white rounded-lg font-medium text-xs">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-12 w-12 rounded-lg border-border bg-white text-[#00838F]">
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claims Table */}
        <Card className="bg-white border-none card-shadow rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50">
                <TableRow>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Claim ID</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Date</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Trigger</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Zone</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Payout</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Status</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claims.map((claim) => (
                  <TableRow 
                    key={claim.id} 
                    className="cursor-pointer hover:bg-[#F1F5F9]/30 transition-colors group" 
                    onClick={() => setSelectedClaim(claim)}
                  >
                    <TableCell className="px-8 py-5 text-sm font-black text-[#006064]">{claim.id}</TableCell>
                    <TableCell className="px-8 py-5 text-xs font-medium text-[#00838F]">{claim.date}</TableCell>
                    <TableCell className="px-8 py-5">
                      <Badge className="bg-[#E0F7FA] text-[#00ACC1] border-none text-[10px] font-bold">{claim.trigger}</Badge>
                    </TableCell>
                    <TableCell className="px-8 py-5 text-sm font-bold text-[#006064]">{claim.location}</TableCell>
                    <TableCell className="px-8 py-5 text-lg font-black text-[#006064]">{claim.amount}</TableCell>
                    <TableCell className="px-8 py-5">{getStatusBadge(claim.status)}</TableCell>
                    <TableCell className="px-8 py-5 text-right">
                      <ChevronRight className="w-5 h-5 text-[#00838F]/30 ml-auto group-hover:text-[#00ACC1] transition-colors" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Claim Detail Modal */}
        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-xl bg-white p-0 overflow-hidden rounded-xl border-none">
            <DialogHeader className="bg-[#E0F7FA] p-8">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-2xl font-black text-[#006064]">Claim: {selectedClaim?.id}</DialogTitle>
                <Badge className="bg-success text-white border-none font-bold">PAID</Badge>
              </div>
            </DialogHeader>
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#F1F5F9]/50 rounded-lg">
                  <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest block mb-1">Trigger Event</span>
                  <p className="font-black text-[#006064] text-lg">{selectedClaim?.trigger}</p>
                </div>
                <div className="p-5 bg-[#F1F5F9]/50 rounded-lg text-right">
                  <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest block mb-1">Payout Amount</span>
                  <p className="font-black text-[#00ACC1] text-2xl">{selectedClaim?.amount}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#006064] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00ACC1]" /> Verification Timeline
                </h4>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#E2E8F0]">
                  {[
                    { label: 'Claim Created via Trigger', time: '14:21 PM', status: 'Done' },
                    { label: 'Neural Fraud Check Passed', time: '14:21 PM', status: 'Done' },
                    { label: 'UPI Transaction Initiated', time: '14:22 PM', status: 'Done' },
                    { label: 'Payment Settled', time: '14:25 PM', status: 'Done' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-6 relative z-10">
                      <div className="w-4 h-4 rounded-full bg-success border-4 border-white shadow-sm" />
                      <div className="flex-1 flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-[#006064]">{step.label}</p>
                          <p className="text-[10px] font-medium text-[#00838F]">{step.time}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#E0F7FA] rounded-lg border border-[#00ACC1]/20 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00ACC1]" />
                <div>
                  <p className="text-xs font-bold text-[#006064]">Zone Verified: Chennai Central</p>
                  <p className="text-[10px] font-medium text-[#00838F]">Validated via high-fidelity weather telemetry</p>
                </div>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full bg-[#00ACC1] hover:bg-[#00ACC1]/90 text-white rounded-full font-bold h-12">Close Detail</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
