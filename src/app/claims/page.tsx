"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Search, 
  Filter, 
  ChevronRight, 
  MapPin, 
  BrainCircuit, 
  Fingerprint,
  Activity 
} from 'lucide-react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function ClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);

  const summary = [
    { label: 'Earnings Recovered', value: '₹1,200', icon: Zap, color: 'text-primary' },
    { label: 'Claims Approved', value: '3', icon: CheckCircle2, color: 'text-success' },
    { label: 'Avg Settle Time', value: '4m 20s', icon: Clock, color: 'text-primary' },
    { label: 'Neural Verified', value: '100%', icon: BrainCircuit, color: 'text-primary' },
  ];

  const claims = [
    { id: 'CLM-001', date: '24 Feb 2026', trigger: 'Heavy Rain', location: 'Chennai', amount: '₹300', status: 'Paid' },
    { id: 'CLM-002', date: '18 Feb 2026', trigger: 'Extreme Heat', location: 'Chennai', amount: '₹600', status: 'Paid' },
    { id: 'CLM-003', date: '15 Jan 2026', trigger: 'Heavy Rain', location: 'Chennai', amount: '₹300', status: 'Paid' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return <Badge className="bg-success/20 text-success border-none font-black text-[9px] uppercase px-3">Settled</Badge>;
      case 'Approved': return <Badge className="bg-primary/20 text-primary border-none font-black text-[9px] uppercase px-3">Approved</Badge>;
      case 'Pending': return <Badge className="bg-warning/20 text-warning border-none font-black text-[9px] uppercase px-3">Verifying</Badge>;
      default: return <Badge className="bg-destructive/20 text-destructive border-none font-black text-[9px] uppercase px-3">Rejected</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500 pb-10">
        <header>
          <h1 className="text-4xl font-black text-white font-headline tracking-tighter uppercase">Parametric Log</h1>
          <p className="text-white/60 font-medium mt-1">Full history of intelligent shield payouts and recoveries.</p>
        </header>

        {/* Summary Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {summary.map((item, i) => (
            <Card key={i} className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] p-6 flex flex-col items-center text-center gap-4 group hover:border-primary/30 transition-all">
              <div className={cn("p-4 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform", item.color)}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</span>
                <span className="text-2xl font-black text-white tracking-tighter">{item.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Filter Bar */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem]">
          <CardContent className="p-6">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <Input className="pl-14 h-14 bg-white/5 border-white/10 rounded-full text-sm font-bold text-white placeholder:text-white/20" placeholder="Search by Claim ID..." />
              </div>
              <div className="flex flex-wrap gap-4">
                <Select>
                  <SelectTrigger className="w-[180px] h-14 bg-black/40 border-white/10 rounded-full font-black text-[10px] uppercase text-white">
                    <SelectValue placeholder="Trigger Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/10 text-white">
                    <SelectItem value="rain">Heavy Rain</SelectItem>
                    <SelectItem value="heat">Extreme Heat</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-14 w-14 rounded-full border-white/10 bg-white/5 text-primary hover:bg-white/10">
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claims Table */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5 h-14">
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase">Claim ID</TableHead>
                  <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase">Date</TableHead>
                  <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase">Trigger Event</TableHead>
                  <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase">Recovery</TableHead>
                  <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase">Status</TableHead>
                  <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase text-right">Insight</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claims.map((claim) => (
                  <TableRow 
                    key={claim.id} 
                    className="cursor-pointer hover:bg-white/5 transition-colors group border-white/5 h-16" 
                    onClick={() => setSelectedClaim(claim)}
                  >
                    <TableCell className="px-10 text-sm font-black text-white">{claim.id}</TableCell>
                    <TableCell className="px-10 text-[10px] font-bold text-white/40 uppercase">{claim.date}</TableCell>
                    <TableCell className="px-10">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] font-black px-3 py-1 uppercase">
                        {claim.trigger}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-10 text-lg font-black text-white tracking-tighter">{claim.amount}</TableCell>
                    <TableCell className="px-10">{getStatusBadge(claim.status)}</TableCell>
                    <TableCell className="px-10 text-right">
                      <ChevronRight className="w-5 h-5 text-white/20 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Claim Detail Modal - Simulation Proof */}
        <Dialog open={!!selectedClaim} onOpenChange={() => setSelectedClaim(null)}>
          <DialogContent className="max-w-2xl bg-black border border-white/20 p-0 overflow-hidden rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <DialogHeader className="bg-primary/10 p-10 border-b border-primary/20">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-3xl font-black text-white font-headline tracking-tighter uppercase">Disruption Insight</DialogTitle>
                <Badge className="bg-success text-white border-none font-black px-5 py-2 rounded-full text-[10px]">SETTLED</Badge>
              </div>
              <p className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 flex items-center gap-2">
                 <Fingerprint className="w-4 h-4" /> Neural Verification: CLM-7A39-FX
              </p>
            </DialogHeader>
            <div className="p-10 space-y-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-2">Verified Trigger</span>
                  <p className="font-black text-white text-2xl tracking-tighter uppercase">{selectedClaim?.trigger}</p>
                  <p className="text-[9px] font-bold text-primary uppercase mt-1">Satellite Verified</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/20 text-right">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-2">Instant Payout</span>
                  <p className="font-black text-primary text-4xl tracking-tighter">{selectedClaim?.amount}</p>
                  <p className="text-[9px] font-bold text-success uppercase mt-1">Settled to UPI</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-black text-white/60 flex items-center gap-3 uppercase tracking-[0.2em]">
                  <div className="p-2 bg-primary/20 rounded-full"><Activity className="w-4 h-4 text-primary" /></div>
                  Verification Pipeline
                </h4>
                <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {[
                    { label: 'Weather Telemetry Threshold Breach', time: '14:21 PM', icon: Activity },
                    { label: 'Neural Fraud Check: PASS (No GPS Spoof)', time: '14:21 PM', icon: BrainCircuit },
                    { label: 'UPI Transaction Batch: TP-9831', time: '14:22 PM', icon: Zap },
                    { label: 'Sovereign Settlement Confirmed', time: '14:25 PM', icon: CheckCircle2 },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-8 relative z-10">
                      <div className="w-7 h-7 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_#00ACC1] flex items-center justify-center">
                         <step.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div className="flex-1 flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <div>
                          <p className="text-xs font-black text-white uppercase tracking-tight">{step.label}</p>
                          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{step.time}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/20 flex items-center gap-5">
                <div className="p-4 bg-black/40 rounded-full border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-white uppercase tracking-tight">Geo-Verified Hub: Chennai Central</p>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">Confirmed presence within disruption radius during active shift.</p>
                </div>
              </div>
              
              <Button onClick={() => setSelectedClaim(null)} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-black h-16 uppercase text-lg tracking-tight shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">Close Detail View</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
