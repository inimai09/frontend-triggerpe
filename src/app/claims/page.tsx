"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Zap, CheckCircle2, Clock, ShieldAlert, Search, Filter, ChevronRight, AlertCircle } from 'lucide-react';
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
      case 'Paid': return <Badge className="bg-success/20 text-success border-success/30 font-black px-4 uppercase text-[10px]">PAID</Badge>;
      case 'Approved': return <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-4 uppercase text-[10px]">APPROVED</Badge>;
      case 'Pending': return <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-4 uppercase text-[10px]">PENDING</Badge>;
      default: return <Badge className="bg-white/10 text-white font-black px-4 uppercase text-[10px]">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Boxed Header */}
        <Card className="card-neon-glow p-10 rounded-[2.5rem] border-none">
          <header className="space-y-4">
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Claims History</h1>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
              <p className="text-primary font-black uppercase tracking-widest text-[11px] icon-neon-glow">Parametric Auto-Payouts Active</p>
            </div>
          </header>
        </Card>

        {/* Summary Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summary.map((item, i) => (
            <Card key={i} className="card-neon-glow overflow-hidden rounded-[2rem] border-none group transition-all duration-300">
              <CardContent className="p-8 flex items-center gap-6">
                <div className={cn("p-5 rounded-2xl bg-white/5 shadow-inner transition-colors group-hover:bg-white/10", item.color)}>
                  <item.icon className="w-8 h-8 icon-neon-glow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="text-3xl font-black text-white tracking-tight">{item.value}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter Box */}
        <Card className="card-neon-glow p-6 rounded-[2.5rem] border-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input className="pl-16 h-18 font-black bg-white/5 border-white/5 text-white rounded-[1.5rem] focus:border-primary/40 text-xl placeholder:text-white/20" placeholder="Search Global Claim ID..." />
              </div>
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="w-[240px] h-18 font-black bg-white/5 border-white/5 text-white rounded-[1.5rem] text-sm px-6">
                    <SelectValue placeholder="Trigger Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 backdrop-blur-3xl border-white/10 text-white">
                    <SelectItem value="rain">Heavy Rain</SelectItem>
                    <SelectItem value="heat">Extreme Heat</SelectItem>
                    <SelectItem value="outage">System Outage</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-18 w-18 rounded-[1.5rem] border-white/5 bg-white/5 text-white hover:bg-primary/20 btn-hover-effect">
                  <Filter className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table Box */}
        <Card className="card-neon-glow rounded-[3rem] border-none overflow-hidden">
          <CardHeader className="bg-white/5 px-12 py-10 border-b border-white/5">
            <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Transaction Log</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Claim Reference</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Timestamp</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Parametric Trigger</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Zone</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Payout</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Status</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40 text-right">View</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claims.map((claim) => (
                  <TableRow 
                    key={claim.id} 
                    className="cursor-pointer border-white/5 hover:bg-white/5 transition-colors group" 
                    onClick={() => setSelectedClaim(claim)}
                  >
                    <TableCell className="px-12 py-12 font-mono text-base font-black text-white">{claim.id}</TableCell>
                    <TableCell className="px-12 py-12 font-black text-white/60 text-base">{claim.date}</TableCell>
                    <TableCell className="px-12 py-12">
                      <div className="inline-flex px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-2xl">
                        <span className="text-[12px] font-black text-primary uppercase tracking-tight icon-neon-glow">{claim.trigger}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-12 py-12 font-black text-white/80">{claim.location}</TableCell>
                    <TableCell className="px-12 py-12">
                      <span className="text-3xl font-black text-primary icon-neon-glow tracking-tighter">{claim.amount}</span>
                    </TableCell>
                    <TableCell className="px-12 py-12">{getStatusBadge(claim.status)}</TableCell>
                    <TableCell className="px-12 py-12 text-right">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors ml-auto">
                        <ChevronRight className="w-6 h-6 text-white/40 group-hover:text-white" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {claims.length === 0 && (
              <div className="p-32 text-center flex flex-col items-center gap-6">
                <AlertCircle className="w-20 h-20 text-white/10" />
                <p className="text-2xl font-black text-white/20 uppercase tracking-widest">No claims detected in this period.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Claim Detail Box */}
        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-xl bg-black/95 backdrop-blur-3xl border border-primary/20 p-0 overflow-hidden rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            <DialogHeader className="bg-primary/10 p-12 border-b border-white/10">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-4xl font-black text-white uppercase tracking-tighter">Claim: {selectedClaim?.id}</DialogTitle>
                <div className="p-3 bg-primary/20 rounded-2xl border border-primary/30">
                  <CheckCircle2 className="w-8 h-8 text-primary icon-neon-glow" />
                </div>
              </div>
            </DialogHeader>
            <div className="p-12 space-y-12">
              <div className="grid grid-cols-2 gap-10">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-2">Trigger Event</span>
                  <p className="font-black text-white text-2xl uppercase tracking-tighter">{selectedClaim?.trigger}</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 text-right">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-2">Payout Credited</span>
                  <p className="font-black text-primary text-4xl icon-neon-glow tracking-tighter">{selectedClaim?.amount}</p>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-[11px] font-black text-white/40 uppercase tracking-widest flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" /> Payout Lifecycle
                </h4>
                <div className="space-y-8 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-white/5">
                  {[
                    { label: 'Claim Created', time: '14:20 PM', status: 'COMPLETED' },
                    { label: 'Parametric Validation', time: '14:21 PM', status: 'COMPLETED' },
                    { label: 'Neural Fraud Check', time: '14:21 PM', status: 'COMPLETED' },
                    { label: 'UPI Payout Pushed', time: '14:22 PM', status: 'COMPLETED' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-8 relative z-10">
                      <div className="w-[24px] h-[24px] rounded-full bg-primary border-4 border-black shadow-[0_0_15px_rgba(0,172,193,0.6)]" />
                      <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-colors">
                        <div>
                          <p className="text-xl font-black text-white leading-none mb-2">{step.label}</p>
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{step.time}</p>
                        </div>
                        <Badge variant="outline" className="text-[8px] font-black text-success border-success/30 bg-success/5">{step.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 flex items-center justify-between">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Ref: UPI/IMPS/2026/88410</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest icon-neon-glow">Verified Settlement</span>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full h-20 bg-primary text-white font-black rounded-full btn-hover-effect text-xl shadow-2xl">Close Details</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
