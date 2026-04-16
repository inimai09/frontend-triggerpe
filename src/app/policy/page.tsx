"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Download, ExternalLink, RefreshCw, Pause, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">My Policy</h1>
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Manage your active parametric shield.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 card-neon-glow rounded-3xl overflow-hidden">
            <CardHeader className="bg-primary/10 border-b border-white/5 px-10 py-8">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-black text-white flex items-center gap-4 uppercase tracking-widest">
                  <ShieldCheck className="w-6 h-6 text-primary icon-neon-glow" /> Policy #POL-C349A4
                </CardTitle>
                <Badge className="bg-success/20 text-success border-success/30 font-black px-6 py-1.5 uppercase tracking-widest text-[10px]">ACTIVE</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-12 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  { label: 'Start Date', value: '04 Apr 2026' },
                  { label: 'Renewal Date', value: '11 Apr 2026' },
                  { label: 'Zone', value: 'Chennai Central' },
                  { label: 'Days Left', value: '7 Days' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
                    <p className="text-xl font-black text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5 space-y-8">
                <h3 className="font-black text-2xl text-white uppercase tracking-tighter">Coverage Triggers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Heavy Rain', threshold: '>15mm/hr', payout: '₹300' },
                    { label: 'Extreme Heat', threshold: '>42°C', payout: '₹600' },
                    { label: 'High AQI', threshold: '>300 AQI', payout: '₹600' },
                    { label: 'Platform Outage', threshold: '>60 mins', payout: '₹350' },
                    { label: 'Cloudburst', threshold: '>50mm/hr', payout: '₹800' },
                  ].map((trigger, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/5 btn-hover-effect">
                      <div>
                        <p className="font-black text-white text-base">{trigger.label}</p>
                        <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-1 icon-neon-glow">{trigger.threshold}</p>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/30 font-black px-4 py-1.5 bg-primary/10 uppercase tracking-widest text-[10px]">{trigger.payout}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 flex flex-wrap gap-6">
                <Button className="rounded-full bg-primary text-white font-black px-10 h-16 btn-hover-effect text-base">
                  <RefreshCw className="w-5 h-5 mr-3" /> Renew Policy
                </Button>
                <Button variant="outline" className="rounded-full border-warning/40 text-warning hover:bg-warning/10 font-black px-10 h-16 btn-hover-effect text-base">
                  <Pause className="w-5 h-5 mr-3" /> Pause Coverage
                </Button>
                <Button variant="outline" className="rounded-full border-white/10 text-white/60 hover:text-white font-black px-10 h-16 btn-hover-effect text-base">
                  <ArrowRightLeft className="w-5 h-5 mr-3" /> Change Tier
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="card-neon-glow rounded-3xl">
              <CardHeader className="border-b border-white/5 px-10 py-6">
                <CardTitle className="text-base font-black text-white uppercase tracking-widest">Financial Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                {[
                  { label: 'Coverage per event', value: '₹400', color: 'text-primary' },
                  { label: 'Total premium paid', value: '₹290', color: 'text-white' },
                  { label: 'Claims filed', value: '0', color: 'text-white/40' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
                    <span className={cn("text-2xl font-black", item.color)}>{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-neon-glow rounded-3xl">
              <CardHeader className="border-b border-white/5 px-10 py-6">
                <CardTitle className="text-base font-black text-white uppercase tracking-widest">Documents</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <Button variant="outline" className="w-full justify-between h-16 rounded-2xl font-black border-white/10 hover:bg-white/5 btn-hover-effect">
                  <span className="flex items-center gap-4 text-white"><FileText className="w-5 h-5 text-primary icon-neon-glow" /> Policy Schedule</span>
                  <Download className="w-4 h-4 text-white/40" />
                </Button>
                <Button variant="outline" className="w-full justify-between h-16 rounded-2xl font-black border-white/10 hover:bg-white/5 btn-hover-effect">
                  <span className="flex items-center gap-4 text-white"><FileText className="w-5 h-5 text-primary icon-neon-glow" /> Terms & Conditions</span>
                  <Download className="w-4 h-4 text-white/40" />
                </Button>
                <Button variant="ghost" className="w-full text-primary font-black mt-6 hover:text-white uppercase tracking-widest text-[10px] icon-neon-glow">
                  Detailed Policy FAQ <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="card-neon-glow rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-white/5 px-10 py-8">
            <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Payment History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5">
                  <TableHead className="font-black text-[9px] uppercase tracking-widest px-10 py-6 text-white/40">Date</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest px-10 py-6 text-white/40">Transaction ID</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest px-10 py-6 text-white/40">Amount</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest px-10 py-6 text-white/40">Status</TableHead>
                  <TableHead className="font-black text-[9px] uppercase tracking-widest px-10 py-6 text-white/40 text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: '04 Apr 2026', id: 'TXN-992011', amount: '₹72.50', status: 'Paid' },
                  { date: '28 Mar 2026', id: 'TXN-984420', amount: '₹72.50', status: 'Paid' },
                  { date: '21 Mar 2026', id: 'TXN-972115', amount: '₹72.50', status: 'Paid' },
                  { date: '14 Mar 2026', id: 'TXN-960012', amount: '₹72.50', status: 'Paid' },
                ].map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="px-10 py-8 font-black text-white">{row.date}</TableCell>
                    <TableCell className="px-10 py-8 font-mono text-[10px] font-black text-white/40">{row.id}</TableCell>
                    <TableCell className="px-10 py-8 font-black text-primary icon-neon-glow text-lg">{row.amount}</TableCell>
                    <TableCell className="px-10 py-8">
                      <Badge className="bg-success/20 text-success border-success/30 font-black text-[9px] uppercase tracking-widest">PAID</Badge>
                    </TableCell>
                    <TableCell className="px-10 py-8 text-right">
                      <Button variant="ghost" size="icon" className="text-white/40 hover:text-white"><Download className="w-5 h-5" /></Button>
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