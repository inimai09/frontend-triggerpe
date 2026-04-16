
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Download, ExternalLink, RefreshCw, Pause, ArrowRightLeft, CreditCard, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        {/* Boxed Header Card */}
        <Card className="card-neon-glow p-10 rounded-[2.5rem] border-none">
          <header className="space-y-6">
            <div className="p-8 bg-black/40 border border-white/5 rounded-[2rem] w-full md:w-fit btn-hover-effect">
              <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">My Policy</h1>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
                <p className="text-primary font-black uppercase tracking-widest text-[10px] icon-neon-glow">Active Parametric Shield</p>
              </div>
            </div>
          </header>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Card className="lg:col-span-8 card-neon-glow rounded-[3rem] border-none overflow-hidden flex flex-col">
            <CardHeader className="bg-primary/10 border-b border-white/10 px-10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <CardTitle className="text-xl font-black text-white flex items-center gap-5 uppercase tracking-widest">
                <ShieldCheck className="w-8 h-8 text-primary icon-neon-glow" /> POL-C349A4
              </CardTitle>
              <Badge className="bg-success/20 text-success border-success/30 font-black px-6 py-2 uppercase tracking-widest text-[10px] shadow-[0_0_20px_rgba(38,166,154,0.3)] rounded-full">SHIELD ACTIVE</Badge>
            </CardHeader>
            <CardContent className="p-10 space-y-12 flex-1">
              {/* Detailed Metrics Sub-Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Issue Date', value: '04 Apr 2026' },
                  { label: 'Renewal', value: '11 Apr 2026' },
                  { label: 'Zone', value: 'Chennai' },
                  { label: 'Validity', value: '7d Left' },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-black/40 rounded-[2rem] border border-white/5 flex flex-col items-center text-center group btn-hover-effect">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-2">{item.label}</span>
                    <p className="text-sm font-black text-white group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Boxed Coverage Matrix */}
              <div className="pt-10 border-t border-white/5 space-y-8">
                <div className="p-4 bg-black/40 rounded-2xl border border-white/5 w-fit btn-hover-effect">
                  <h3 className="font-black text-xl text-white uppercase tracking-tighter flex items-center gap-4">
                    <Activity className="w-6 h-6 text-primary icon-neon-glow" /> Coverage Matrix
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Heavy Rain', threshold: '>15mm/hr', payout: '₹300' },
                    { label: 'Extreme Heat', threshold: '>42°C', payout: '₹600' },
                    { label: 'High AQI', threshold: '>300 Index', payout: '₹600' },
                    { label: 'Platform Outage', threshold: '>60 mins', payout: '₹350' },
                  ].map((trigger, i) => (
                    <div key={i} className="flex justify-between items-center p-8 bg-black/60 rounded-[2.5rem] border border-white/5 btn-hover-effect relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 pr-4">
                        <p className="font-black text-white text-lg uppercase tracking-tight">{trigger.label}</p>
                        <div className="inline-flex mt-2 px-3 py-1 bg-primary/10 rounded-lg border border-primary/20">
                          <p className="text-[8px] font-black text-primary uppercase tracking-widest icon-neon-glow">{trigger.threshold}</p>
                        </div>
                      </div>
                      <div className="relative z-10 flex flex-col items-end shrink-0">
                        <span className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">PAYOUT</span>
                        <span className="text-2xl font-black text-primary icon-neon-glow tracking-tighter">{trigger.payout}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Boxed */}
              <div className="pt-10 border-t border-white/5 flex flex-wrap gap-6">
                <Button className="flex-1 min-w-[160px] rounded-full bg-primary text-white font-black px-6 h-20 btn-hover-effect text-sm shadow-2xl">
                  <RefreshCw className="w-5 h-5 mr-3" /> RE-ACTIVATE
                </Button>
                <Button variant="outline" className="flex-1 min-w-[160px] rounded-full border-warning text-warning hover:bg-warning/20 font-black px-6 h-20 btn-hover-effect text-sm shadow-[0_0_15px_rgba(255,183,77,0.2)]">
                  <Pause className="w-5 h-5 mr-3" /> PAUSE SHIELD
                </Button>
                <Button variant="outline" className="flex-1 min-w-[160px] rounded-full border-primary/40 text-white hover:bg-primary/10 font-black px-6 h-20 btn-hover-effect text-sm">
                  <ArrowRightLeft className="w-5 h-5 mr-3" /> SWITCH ZONE
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-4 space-y-10">
            {/* Boxed Financials */}
            <Card className="card-neon-glow rounded-[3rem] border-none overflow-hidden">
              <CardHeader className="bg-white/5 border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                  <CreditCard className="w-6 h-6 text-primary" /> Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { label: 'Coverage per event', value: '₹400', color: 'text-primary' },
                  { label: 'Weekly Premium', value: '₹72.50', color: 'text-white' },
                  { label: 'Settled Claims', value: '3', color: 'text-white/40' },
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-black/40 rounded-[2rem] border border-white/5 flex flex-col gap-2 btn-hover-effect">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
                    <span className={cn("text-3xl font-black", item.color, item.color === 'text-primary' && 'icon-neon-glow tracking-tighter')}>{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Boxed Documents */}
            <Card className="card-neon-glow rounded-[3rem] border-none overflow-hidden">
              <CardHeader className="bg-white/5 border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Repository</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="bg-black/40 rounded-2xl border border-white/5 btn-hover-effect">
                  <Button variant="ghost" className="w-full justify-between h-16 rounded-2xl font-black px-6">
                    <span className="flex items-center gap-4 text-white text-sm"><FileText className="w-5 h-5 text-primary icon-neon-glow" /> Policy Schedule</span>
                    <Download className="w-5 h-5 text-white/40" />
                  </Button>
                </div>
                <div className="bg-black/40 rounded-2xl border border-white/5 btn-hover-effect">
                  <Button variant="ghost" className="w-full justify-between h-16 rounded-2xl font-black px-6">
                    <span className="flex items-center gap-4 text-white text-sm"><FileText className="w-5 h-5 text-primary icon-neon-glow" /> PDS & Terms</span>
                    <Download className="w-5 h-5 text-white/40" />
                  </Button>
                </div>
                <Button variant="ghost" className="w-full text-primary font-black mt-4 hover:text-white uppercase tracking-widest text-[10px] icon-neon-glow btn-hover-effect">
                  Policy Framework FAQ <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Boxed Subscription Ledger */}
        <Card className="card-neon-glow rounded-[3rem] border-none overflow-hidden">
          <CardHeader className="bg-white/5 border-b border-white/5 px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Subscription Ledger</CardTitle>
            <Button variant="outline" className="rounded-full border-primary/20 text-primary font-black uppercase text-[10px] px-8 h-12 bg-primary/5 hover:bg-primary hover:text-white transition-all btn-hover-effect">Download Audit</Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="font-black text-[10px] uppercase tracking-widest px-10 py-6 text-white/40">Date</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-widest px-10 py-6 text-white/40">Reference</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-widest px-10 py-6 text-white/40">Premium</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-widest px-10 py-6 text-white/40">Method</TableHead>
                  <TableHead className="font-black text-[10px] uppercase tracking-widest px-10 py-6 text-white/40">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: '04 Apr 2026', id: 'TXN-992011', amount: '₹72.50', status: 'Success', method: 'UPI' },
                  { date: '28 Mar 2026', id: 'TXN-984420', amount: '₹72.50', status: 'Success', method: 'UPI' },
                ].map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors group btn-hover-effect">
                    <TableCell className="px-10 py-8 font-black text-white text-lg">{row.date}</TableCell>
                    <TableCell className="px-10 py-8 font-mono text-[11px] font-black text-white/40 group-hover:text-white transition-colors">{row.id}</TableCell>
                    <TableCell className="px-10 py-8 font-black text-primary icon-neon-glow text-2xl tracking-tighter">{row.amount}</TableCell>
                    <TableCell className="px-10 py-8 font-black text-white/60 text-[11px] uppercase">{row.method}</TableCell>
                    <TableCell className="px-10 py-8">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-success/20 border border-success/30 rounded-full">
                        <span className="text-[10px] font-black text-success uppercase">PAID</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
