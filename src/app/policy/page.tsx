"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Clock, Zap, History, Download, Pause, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-700 pb-10">
        <header>
          <h1 className="text-3xl font-black text-[#006064] font-headline tracking-tighter">My Policy</h1>
          <p className="text-[#00838F] font-medium mt-1">Manage your active parametric shield.</p>
        </header>

        {/* Policy Main Details */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem]">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-8 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#E0F7FA] text-primary flex items-center justify-center shadow-inner">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl font-black text-[#006064] tracking-tighter uppercase">POL-C349A4</span>
                    <Badge className="bg-success text-white border-none text-[8px] font-black px-3 py-0.5 rounded-full h-4">ACTIVE</Badge>
                  </div>
                  <p className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">Standard Weekly Plan</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[8px] font-black text-[#00838F] uppercase tracking-widest mb-0.5">Start Date</p>
                  <p className="text-xs font-black text-[#006064]">04 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[8px] font-black text-[#00838F] uppercase tracking-widest mb-0.5">End Date</p>
                  <p className="text-xs font-black text-[#006064]">11 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[8px] font-black text-[#00838F] uppercase tracking-widest mb-0.5">Validity</p>
                  <p className="text-xs font-black text-primary flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 7 Days Left
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Coverage / event', value: '₹400', color: 'text-primary' },
                { label: 'Total premium paid', value: '₹290', color: 'text-[#006064]' },
                { label: 'Claims filed', value: '0', color: 'text-[#006064]' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F1F5F9]/30 rounded-[2rem] text-center border border-transparent hover:border-primary/10 transition-all">
                  <p className="text-[9px] font-black text-[#00838F] uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className={cn("text-2xl font-black tracking-tighter", item.color)}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Covered Triggers Grid */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem]">
          <CardHeader className="px-8 pt-8 pb-4">
            <CardTitle className="text-xs font-black text-[#006064] flex items-center gap-3 uppercase tracking-widest">
              <Zap className="w-4 h-4 text-warning" /> Covered Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { name: 'Heavy Rain', payout: '₹300' },
                { name: 'Extreme Heat', payout: '₹600' },
                { name: 'High AQI', payout: '₹600' },
                { name: 'Lockdown', payout: '₹400' },
                { name: 'Outage', payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-4 border border-border/40 rounded-[2rem] text-center flex flex-col items-center gap-2 bg-white hover:border-primary/20 transition-all shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,172,193,0.5)] mb-1" />
                  <p className="text-[8px] font-black text-[#006064] uppercase tracking-tight">{t.name}</p>
                  <p className="text-lg font-black text-primary tracking-tighter">{t.payout}</p>
                  <Badge variant="outline" className="text-[7px] font-black text-success uppercase px-1.5 border-success/20 bg-success/5 rounded-full h-3.5">ACTIVE</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-black h-12 px-8 flex-1 sm:flex-none uppercase tracking-widest shadow-lg btn-hover-effect text-[10px]">
            <RefreshCw className="w-4 h-4 mr-2" /> Renew Policy
          </Button>
          <Button className="bg-warning hover:bg-warning/90 text-white rounded-full font-black h-12 px-8 flex-1 sm:flex-none uppercase tracking-widest shadow-lg btn-hover-effect text-[10px]">
            <Pause className="w-4 h-4 mr-2" /> Pause Coverage
          </Button>
          <Button variant="outline" className="border-primary text-primary bg-white rounded-full font-black h-12 px-8 flex-1 sm:flex-none uppercase tracking-widest hover:bg-[#E0F7FA] btn-hover-effect text-[10px]">
            Change Tier
          </Button>
        </div>

        {/* Payment History */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardHeader className="px-8 py-5 border-b border-border">
            <CardTitle className="text-sm font-black text-[#006064] flex items-center gap-3 uppercase tracking-widest">
              <History className="w-4 h-4 text-primary" /> Payment History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50 h-12">
                <TableRow>
                  <TableHead className="px-8 font-black text-[#00838F] text-[9px] uppercase">Date</TableHead>
                  <TableHead className="px-8 font-black text-[#00838F] text-[9px] uppercase">Amount</TableHead>
                  <TableHead className="px-8 font-black text-[#00838F] text-[9px] uppercase">Status</TableHead>
                  <TableHead className="px-8 font-black text-[#00838F] text-[9px] uppercase text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-[#F1F5F9]/20 transition-colors h-14 border-none">
                  <TableCell className="px-8 text-xs font-bold text-[#006064]">04 Apr 2026</TableCell>
                  <TableCell className="px-8 text-xs font-black text-primary uppercase">₹72.50</TableCell>
                  <TableCell className="px-8">
                    <Badge className="bg-success/10 text-success border-none text-[8px] font-black px-3 py-0.5 rounded-full h-4">SUCCESS</Badge>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    <Button variant="ghost" size="sm" className="text-primary font-black hover:bg-[#E0F7FA] rounded-full px-4 h-8 flex items-center gap-2 ml-auto group text-[9px] uppercase tracking-widest">
                      <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" /> Download
                    </Button>
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