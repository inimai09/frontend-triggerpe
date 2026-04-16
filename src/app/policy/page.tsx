"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, RefreshCw, Pause, ArrowRightLeft, Clock, Zap, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064] font-headline">My Policy</h1>
          <p className="text-[#00838F] font-medium mt-1">Manage your active parametric shield.</p>
        </header>

        {/* Policy Main Details */}
        <Card className="bg-white border-none card-shadow rounded-[2.5rem]">
          <CardContent className="p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-border pb-10 mb-10">
              <div className="flex items-center gap-8">
                <div className="p-6 rounded-full bg-[#E0F7FA] text-[#00ACC1] shadow-inner">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-black text-[#006064] tracking-tight">POL-C349A4</span>
                    <Badge className="bg-success text-white border-none text-[10px] font-bold px-4">ACTIVE</Badge>
                  </div>
                  <p className="text-sm font-medium text-[#00838F]">Standard Weekly Protection Plan</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                  <p className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest mb-1">Start Date</p>
                  <p className="text-sm font-black text-[#006064]">04 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest mb-1">End Date</p>
                  <p className="text-sm font-black text-[#006064]">11 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest mb-1">Validity</p>
                  <p className="text-sm font-black text-[#00ACC1] flex items-center gap-2">
                    <div className="p-1.5 bg-[#E0F7FA] rounded-full"><Clock className="w-3 h-3" /></div> 7 Days Left
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { label: 'Coverage per event', value: '₹400', color: 'text-[#00ACC1]' },
                { label: 'Total premium paid', value: '₹290', color: 'text-[#006064]' },
                { label: 'Claims filed', value: '0', color: 'text-[#006064]' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#F1F5F9]/30 rounded-[2rem] text-center border border-border/50">
                  <p className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest mb-2">{item.label}</p>
                  <p className={cn("text-3xl font-black", item.color)}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Covered Triggers Grid */}
        <Card className="bg-white border-none card-shadow rounded-[2.5rem]">
          <CardHeader className="px-10 pt-10 pb-6">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-4">
              <div className="p-2 bg-[#FFF3E0] rounded-full"><Zap className="w-5 h-5 text-[#FFB74D]" /></div>
              Covered Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10 pt-0">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: 'Heavy Rain', payout: '₹300' },
                { name: 'Extreme Heat', payout: '₹600' },
                { name: 'High AQI', payout: '₹600' },
                { name: 'Lockdown', payout: '₹400' },
                { name: 'Outage', payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-6 border border-border/60 rounded-[2rem] text-center flex flex-col items-center gap-3 bg-white hover:border-[#00ACC1]/30 transition-all shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-success shadow-[0_0_10px_rgba(38,166,154,0.4)] mb-2" />
                  <p className="text-[11px] font-bold text-[#006064] uppercase tracking-tight">{t.name}</p>
                  <p className="text-xl font-black text-[#00ACC1]">{t.payout}</p>
                  <Badge variant="outline" className="text-[8px] font-black text-[#00838F]/50 uppercase px-2 border-border/40">Active</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Actions */}
        <div className="flex flex-wrap gap-6">
          <Button className="bg-[#00ACC1] hover:bg-[#00ACC1]/90 text-white rounded-full font-black h-16 px-12 flex-1 sm:flex-none uppercase tracking-tight shadow-xl btn-hover-effect">Renew Policy</Button>
          <Button className="bg-[#FFB74D] hover:bg-[#FFB74D]/90 text-white rounded-full font-black h-16 px-12 flex-1 sm:flex-none uppercase tracking-tight shadow-xl btn-hover-effect">Pause Coverage</Button>
          <Button variant="outline" className="border-[#00ACC1] text-[#00ACC1] bg-white rounded-full font-black h-16 px-12 flex-1 sm:flex-none uppercase tracking-tight hover:bg-[#E0F7FA] btn-hover-effect">Change Tier</Button>
        </div>

        {/* Payment History */}
        <Card className="bg-white border-none card-shadow rounded-[2.5rem] overflow-hidden">
          <CardHeader className="px-10 py-8 border-b border-border">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-4">
              <div className="p-2 bg-[#E0F7FA] rounded-full"><History className="w-5 h-5 text-[#00ACC1]" /></div>
              Payment History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50">
                <TableRow>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Date</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Amount</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14">Status</TableHead>
                  <TableHead className="px-10 font-bold text-[#00838F] text-[10px] uppercase h-14 text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-[#F1F5F9]/20 transition-colors">
                  <TableCell className="px-10 py-6 text-sm font-medium">04 Apr 2026</TableCell>
                  <TableCell className="px-10 py-6 text-sm font-black text-[#006064]">₹72.50</TableCell>
                  <TableCell className="px-10 py-6">
                    <Badge className="bg-success/10 text-success border-none text-[10px] font-bold px-3">SUCCESS</Badge>
                  </TableCell>
                  <TableCell className="px-10 py-6 text-right">
                    <Button variant="ghost" size="sm" className="text-[#00ACC1] font-black hover:bg-[#E0F7FA] rounded-full px-4">Download</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
