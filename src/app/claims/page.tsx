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
      case 'Paid': return <Badge className="bg-success/20 text-success border-success/30 font-black px-4 py-1.5 uppercase text-[8px] rounded-full">PAID</Badge>;
      case 'Approved': return <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-4 py-1.5 uppercase text-[8px] rounded-full">APPROVED</Badge>;
      case 'Pending': return <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-4 py-1.5 uppercase text-[8px] rounded-full">PENDING</Badge>;
      default: return <Badge className="bg-white/10 text-white font-black px-4 py-1.5 uppercase text-[8px] rounded-full">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        {/* Boxed Header Card */}
        <Card className="card-neon-glow p-6 rounded-[2rem] border-none">
          <header className="space-y-4">
            <div className="p-6 bg-black/40 border border-white/5 rounded-[1.75rem] w-full md:w-fit btn-hover-effect">
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 font-headline">Claims History</h1>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
                <p className="text-primary font-black uppercase tracking-widest text-[9px] icon-neon-glow">Parametric Auto-Payouts Active</p>
              </div>
            </div>
          </header>
        </Card>

        {/* Summary Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summary.map((item, i) => (
            <Card key={i} className="card-neon-glow overflow-hidden rounded-[2rem] border-none group btn-hover-effect">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={cn("p-4 rounded-full bg-black/40 border border-white/5 transition-colors group-hover:bg-black/60", item.color)}>
                  <item.icon className="w-6 h-6 icon-neon-glow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</span>
                  <span className="text-xl font-black text-white tracking-tight font-headline">{item.value}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Boxed Filter Section */}
        <Card className="card-neon-glow p-6 rounded-[2rem] border-none">
          <CardContent className="p-0">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Search className="w-4 h-4 text-white/40" />
                </div>
                <Input className="pl-16 h-14 font-black bg-black/40 border-white/10 text-white rounded-full focus:border-primary/40 text-lg placeholder:text-white/20" placeholder="Search Global ID..." />
              </div>
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="w-[180px] h-14 font-black bg-black/40 border-white/10 text-white rounded-full text-[10px] px-5 btn-hover-effect">
                    <SelectValue placeholder="Trigger Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 backdrop-blur-3xl border-white/10 text-white">
                    <SelectItem value="rain">Heavy Rain</SelectItem>
                    <SelectItem value="heat">Extreme Heat</SelectItem>
                    <SelectItem value="outage">System Outage</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-14 w-14 rounded-full border-white/10 bg-black/40 text-white hover:bg-primary/20 btn-hover-effect shrink-0">
                  <div className="p-2 rounded-full bg-white/5 border border-white/10">
                    <Filter className="w-5 h-5" />
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boxed Table Log */}
        <Card className="card-neon-glow rounded-[2.5rem] border-none overflow-hidden">
          <CardHeader className="bg-white/5 px-8 py-5 border-b border-white/5">
            <CardTitle className="text-base font-black text-white uppercase tracking-widest font-headline">Transaction Log</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Reference</TableHead>
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Timestamp</TableHead>
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Trigger</TableHead>
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Zone</TableHead>
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Payout</TableHead>
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Status</TableHead>
                  <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40 text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claims.map((claim) => (
                  <TableRow 
                    key={claim.id} 
                    className="cursor-pointer border-white/5 hover:bg-white/5 transition-colors group btn-hover-effect" 
                    onClick={() => setSelectedClaim(claim)}
                  >
                    <TableCell className="px-8 py-6 font-mono text-[11px] font-black text-white">{claim.id}</TableCell>
                    <TableCell className="px-8 py-6 font-black text-white/60 text-xs uppercase">{claim.date}</TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="inline-flex px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="text-[9px] font-black text-primary uppercase tracking-tight icon-neon-glow">{claim.trigger}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6 font-black text-white/80 text-sm font-headline">{claim.location}</TableCell>
                    <TableCell className="px-8 py-6">
                      <span className="text-xl font-black text-primary icon-neon-glow tracking-tighter font-headline">{claim.amount}</span>
                    </TableCell>
                    <TableCell className="px-8 py-6">{getStatusBadge(claim.status)}</TableCell>
                    <TableCell className="px-8 py-6 text-right">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors ml-auto border border-white/10 shadow-sm">
                        <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Claim Detail Dialog Boxed */}
        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-md bg-black/95 backdrop-blur-3xl border border-primary/20 p-0 overflow-hidden rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            <DialogHeader className="bg-primary/10 p-8 border-b border-white/10">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-2xl font-black text-white uppercase tracking-tighter font-headline">Claim: {selectedClaim?.id}</DialogTitle>
                <div className="p-3 bg-primary/20 rounded-full border border-primary/30 shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary icon-neon-glow" />
                </div>
              </div>
            </DialogHeader>
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-[1.5rem] border border-white/5 btn-hover-effect">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-1">Event</span>
                  <p className="font-black text-white text-lg uppercase tracking-tighter font-headline">{selectedClaim?.trigger}</p>
                </div>
                <div className="p-6 bg-white/5 rounded-[1.5rem] border border-white/5 text-right btn-hover-effect">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-1">Payout</span>
                  <p className="font-black text-primary text-2xl icon-neon-glow tracking-tighter font-headline">{selectedClaim?.amount}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2 font-headline">
                  <div className="p-1.5 bg-primary/20 rounded-full border border-primary/30">
                    <Clock className="w-4 h-4 text-primary" />
                  </div> Verification Lifecycle
                </h4>
                <div className="space-y-6 relative before:absolute before:left-[9px] before:top-3 before:bottom-3 before:w-[1.5px] before:bg-white/5">
                  {[
                    { label: 'Validated via Satellite', time: '14:21 PM' },
                    { label: 'Fraud Neural Check', time: '14:21 PM' },
                    { label: 'UPI Payout Pushed', time: '14:22 PM' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-6 relative z-10">
                      <div className="w-[18px] h-[18px] rounded-full bg-primary border-[3px] border-black shadow-[0_0_10px_rgba(0,172,193,0.6)]" />
                      <div className="flex-1 bg-white/5 p-4 rounded-full border border-white/5 flex justify-between items-center btn-hover-effect">
                        <div>
                          <p className="text-sm font-black text-white leading-none mb-1 font-headline">{step.label}</p>
                          <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">{step.time}</p>
                        </div>
                        <Badge variant="outline" className="text-[7px] font-black text-success border-success/30 bg-success/5 px-3 py-1 rounded-full">VERIFIED</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-full border border-primary/20 flex items-center justify-between btn-hover-effect">
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Ref: UPI/2026/88410</span>
                <span className="text-[8px] font-black text-primary uppercase tracking-widest icon-neon-glow">Secured</span>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full h-14 bg-primary text-white font-black rounded-full btn-hover-effect text-lg shadow-xl uppercase font-headline">Close Detail</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
