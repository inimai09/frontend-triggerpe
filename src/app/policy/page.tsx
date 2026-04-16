"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Download, ExternalLink, RefreshCw, Pause, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PolicyPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">My Policy</h1>
        <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">Manage your active parametric shield.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white border border-border shadow-sm overflow-hidden">
          <CardHeader className="bg-[#E0F7FA] border-b px-8 py-6">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3 uppercase tracking-widest">
                <ShieldCheck className="w-6 h-6 text-primary" /> Policy #POL-C349A4
              </CardTitle>
              <Badge className="bg-success text-white font-black px-4 py-1">ACTIVE</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-10 space-y-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Start Date', value: '04 Apr 2026' },
                { label: 'Renewal Date', value: '11 Apr 2026' },
                { label: 'Zone', value: 'Chennai Central' },
                { label: 'Days Left', value: '7 Days' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</span>
                  <p className="text-lg font-black text-[#006064]">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t space-y-6">
              <h3 className="font-black text-xl text-[#006064] uppercase tracking-tighter">Coverage Triggers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Heavy Rain', threshold: '>15mm/hr', payout: '₹300' },
                  { label: 'Extreme Heat', threshold: '>42°C', payout: '₹600' },
                  { label: 'High AQI', threshold: '>300 AQI', payout: '₹600' },
                  { label: 'Platform Outage', threshold: '>60 mins', payout: '₹350' },
                  { label: 'Cloudburst', threshold: '>50mm/hr', payout: '₹800' },
                ].map((trigger, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-[#E0F7FA] rounded-2xl border border-primary/5">
                    <div>
                      <p className="font-black text-[#006064]">{trigger.label}</p>
                      <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest">{trigger.threshold}</p>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/20 font-black px-3 py-1 bg-white">{trigger.payout}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t flex flex-wrap gap-4">
              <Button className="rounded-full bg-primary hover:bg-primary/90 font-black px-8 h-14 btn-hover-effect">
                <RefreshCw className="w-5 h-5 mr-2" /> Renew Policy
              </Button>
              <Button variant="outline" className="rounded-full border-[#FFB74D] text-[#FFB74D] hover:bg-[#FFB74D]/10 font-black px-8 h-14 btn-hover-effect">
                <Pause className="w-5 h-5 mr-2" /> Pause Coverage
              </Button>
              <Button variant="outline" className="rounded-full border-border font-black px-8 h-14 btn-hover-effect">
                <ArrowRightLeft className="w-5 h-5 mr-2" /> Change Tier
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-white border border-border shadow-sm">
            <CardHeader className="border-b px-8 py-5">
              <CardTitle className="text-base font-black text-[#006064] uppercase tracking-widest">Financial Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {[
                { label: 'Coverage per event', value: '₹400', color: 'text-primary' },
                { label: 'Total premium paid', value: '₹290', color: 'text-[#006064]' },
                { label: 'Claims filed', value: '0', color: 'text-muted-foreground' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">{item.label}</span>
                  <span className={cn("text-xl font-black", item.color)}>{item.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white border border-border shadow-sm">
            <CardHeader className="border-b px-8 py-5">
              <CardTitle className="text-base font-black text-[#006064] uppercase tracking-widest">Documents</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <Button variant="outline" className="w-full justify-between h-14 rounded-xl font-bold btn-hover-effect">
                <span className="flex items-center gap-3"><FileText className="w-5 h-5 text-primary" /> Policy Schedule</span>
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between h-14 rounded-xl font-bold btn-hover-effect">
                <span className="flex items-center gap-3"><FileText className="w-5 h-5 text-primary" /> Terms & Conditions</span>
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="w-full text-primary font-black mt-4 hover:bg-primary/5 uppercase tracking-widest text-xs">
                Detailed Policy FAQ <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-white border border-border shadow-sm">
        <CardHeader className="border-b px-8 py-6">
          <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Payment History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="font-black text-[10px] uppercase tracking-widest px-8">Date</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest px-8">Transaction ID</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest px-8">Amount</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest px-8">Status</TableHead>
                <TableHead className="font-black text-[10px] uppercase tracking-widest px-8 text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: '04 Apr 2026', id: 'TXN-992011', amount: '₹72.50', status: 'Paid' },
                { date: '28 Mar 2026', id: 'TXN-984420', amount: '₹72.50', status: 'Paid' },
                { date: '21 Mar 2026', id: 'TXN-972115', amount: '₹72.50', status: 'Paid' },
                { date: '14 Mar 2026', id: 'TXN-960012', amount: '₹72.50', status: 'Paid' },
              ].map((row, i) => (
                <TableRow key={i} className="hover:bg-muted/20">
                  <TableCell className="px-8 font-bold text-[#006064]">{row.date}</TableCell>
                  <TableCell className="px-8 font-mono text-xs font-bold text-muted-foreground">{row.id}</TableCell>
                  <TableCell className="px-8 font-black text-[#006064]">{row.amount}</TableCell>
                  <TableCell className="px-8">
                    <Badge className="bg-success text-white font-black text-[10px]">{row.status}</Badge>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    <Button variant="ghost" size="icon" className="text-primary"><Download className="w-4 h-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}