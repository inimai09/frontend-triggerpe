
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Zap, CheckCircle2, Clock, ShieldAlert, Search, Filter, MapPin, ChevronRight } from 'lucide-react';
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
      case 'Paid': return <Badge className="bg-success/20 text-success border-success/30 font-black px-4">PAID</Badge>;
      case 'Approved': return <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-4">APPROVED</Badge>;
      case 'Pending': return <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-4">PENDING</Badge>;
      default: return <Badge className="bg-white/10 text-white font-black px-4">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Claims History</h1>
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">All payouts are automated via parametric triggers.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {summary.map((item, i) => (
            <Card key={i} className="card-neon-glow p-8 flex items-center gap-6 rounded-3xl btn-hover-effect">
              <div className={cn("p-4 rounded-2xl bg-white/5", item.color)}>
                <item.icon className="w-8 h-8 icon-neon-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</span>
                <span className="text-2xl font-black text-white">{item.value}</span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="card-neon-glow p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <Input className="pl-11 h-14 font-bold bg-white/5 border-white/10 text-white rounded-2xl focus:border-primary/40" placeholder="Search Claim ID..." />
            </div>
            <Select>
              <SelectTrigger className="w-[180px] h-14 font-bold bg-white/5 border-white/10 text-white rounded-2xl">
                <SelectValue placeholder="Trigger" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white">
                <SelectItem value="rain">Heavy Rain</SelectItem>
                <SelectItem value="heat">Extreme Heat</SelectItem>
                <SelectItem value="outage">Outage</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-14 w-14 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-primary/20 btn-hover-effect"><Filter className="w-5 h-5" /></Button>
          </div>
        </Card>

        <Card className="card-neon-glow rounded-3xl overflow-hidden">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Claim ID</TableHead>
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Date</TableHead>
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Trigger</TableHead>
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Location</TableHead>
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Amount</TableHead>
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Status</TableHead>
                <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40 text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => (
                <TableRow key={claim.id} className="cursor-pointer border-white/5 hover:bg-white/5 transition-colors" onClick={() => setSelectedClaim(claim)}>
                  <TableCell className="px-10 py-8 font-black text-white">{claim.id}</TableCell>
                  <TableCell className="px-10 py-8 font-bold text-white/60">{claim.date}</TableCell>
                  <TableCell className="px-10 py-8">
                    <Badge variant="outline" className="font-black border-primary/30 text-primary bg-primary/10">{claim.trigger}</Badge>
                  </TableCell>
                  <TableCell className="px-10 py-8 font-bold text-white/80">{claim.location}</TableCell>
                  <TableCell className="px-10 py-8 font-black text-primary icon-neon-glow">{claim.amount}</TableCell>
                  <TableCell className="px-10 py-8">{getStatusBadge(claim.status)}</TableCell>
                  <TableCell className="px-10 py-8 text-right">
                    <ChevronRight className="w-5 h-5 text-white/20 ml-auto" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {claims.length === 0 && (
            <div className="p-32 text-center">
              <p className="text-xl font-black text-white/20 uppercase tracking-widest">No claims detected.</p>
            </div>
          )}
        </Card>

        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-md bg-black/90 backdrop-blur-3xl border-white/10 p-0 overflow-hidden rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <DialogHeader className="bg-primary/10 p-10 border-b border-white/10">
              <DialogTitle className="text-3xl font-black text-white uppercase tracking-tighter">Claim: {selectedClaim?.id}</DialogTitle>
            </DialogHeader>
            <div className="p-10 space-y-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Trigger Type</span>
                  <p className="font-black text-white text-lg">{selectedClaim?.trigger}</p>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Payout Amount</span>
                  <p className="font-black text-primary text-3xl icon-neon-glow">{selectedClaim?.amount}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[9px] font-black text-white/40 uppercase tracking-widest">Payout Timeline</h4>
                <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                  {[
                    { label: 'Claim Created', time: '14:20 PM', done: true },
                    { label: 'Parametric Validation', time: '14:21 PM', done: true },
                    { label: 'Fraud Detection Check', time: '14:21 PM', done: true },
                    { label: 'UPI Payout Initiated', time: '14:22 PM', done: true },
                    { label: 'Paid to Partner', time: '14:22 PM', done: true },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-6 relative z-10">
                      <div className={cn("w-4 h-4 rounded-full border-2 mt-1", step.done ? "bg-primary border-primary shadow-[0_0_8px_rgba(0,172,193,0.5)]" : "bg-black border-white/20")} />
                      <div className="flex-1">
                        <p className="text-sm font-black text-white leading-none mb-2">{step.label}</p>
                        <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Transaction ID</span>
                <span className="font-mono text-[10px] font-black text-primary">UPI/IMPS/2026/88410</span>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full h-16 bg-primary text-white font-black rounded-full btn-hover-effect text-lg">Close Details</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
