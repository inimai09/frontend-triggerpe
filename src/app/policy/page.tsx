"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Clock, Zap, History, Download, Play, Pause, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-700">
        <header>
          <h1 className="text-3xl font-black text-[#006064] font-headline">My Policy</h1>
          <p className="text-[#00838F] font-medium mt-1">Manage your active parametric shield.</p>
        </header>

        {/* Policy Main Details */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem]">
          <CardContent className="p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-border pb-10 mb-10">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-[#E0F7FA] text-primary flex items-center justify-center shadow-inner">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-black text-[#006064] tracking-tight uppercase">POL-C349A4</span>
                    <Badge className="bg-success text-white border-none text-[10px] font-black px-4 py-1 rounded-full">ACTIVE</Badge>
                  </div>
                  <p className="text-xs font-bold text-[#00838F] uppercase tracking-wider">Standard Weekly Protection Plan</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                  <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest mb-1">Start Date</p>
                  <p className="text-sm font-black text-[#006064]">04 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest mb-1">End Date</p>
                  <p className="text-sm font-black text-[#006064]">11 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest mb-1">Validity</p>
                  <p className="text-sm font-black text-primary flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 7 Days Left
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Coverage per event', value: '₹400', color: 'text-primary' },
                { label: 'Total premium paid', value: '₹290', color: 'text-[#006064]' },
                { label: 'Claims filed', value: '0', color: 'text-[#006064]' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#F1F5F9]/30 rounded-3xl text-center border-2 border-transparent hover:border-primary/10 transition-all">
                  <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest mb-2">{item.label}</p>
                  <p className={cn("text-3xl font-black tracking-tighter", item.color)}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Covered Triggers Grid */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem]">
          <CardHeader className="px-10 pt-10 pb-6">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-4 uppercase tracking-tighter">
              <Zap className="w-5 h-5 text-warning" /> Covered Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10 pt-0">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Heavy Rain', payout: '₹300' },
                { name: 'Extreme Heat', payout: '₹600' },
                { name: 'High AQI', payout: '₹600' },
                { name: 'Lockdown', payout: '₹400' },
                { name: 'Outage', payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-6 border-2 border-border/40 rounded-3xl text-center flex flex-col items-center gap-3 bg-white hover:border-primary/20 transition-all shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,172,193,0.5)] mb-2" />
                  <p className="text-[10px] font-black text-[#006064] uppercase tracking-tight">{t.name}</p>
                  <p className="text-xl font-black text-primary tracking-tighter">{t.payout}</p>
                  <Badge variant="outline" className="text-[8px] font-black text-success uppercase px-2 border-success/20 bg-success/5 rounded-full">ACTIVE</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-black h-16 px-10 flex-1 sm:flex-none uppercase tracking-widest shadow-xl btn-hover-effect text-sm">
            <RefreshCw className="w-5 h-5 mr-2" /> Renew Policy
          </Button>
          <Button className="bg-warning hover:bg-warning/90 text-white rounded-full font-black h-16 px-10 flex-1 sm:flex-none uppercase tracking-widest shadow-xl btn-hover-effect text-sm">
            <Pause className="w-5 h-5 mr-2" /> Pause Coverage
          </Button>
          <Button variant="outline" className="border-primary text-primary bg-white rounded-full font-black h-16 px-10 flex-1 sm:flex-none uppercase tracking-widest hover:bg-[#E0F7FA] btn-hover-effect text-sm">
            Change Tier
          </Button>
        </div>

        {/* Payment History */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardHeader className="px-10 py-8 border-b border-border">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-4 uppercase tracking-tighter">
              <History className="w-5 h-5 text-primary" /> Payment History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50 h-14">
                <TableRow>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Date</TableHead>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Amount</TableHead>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Status</TableHead>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-[#F1F5F9]/20 transition-colors h-16">
                  <TableCell className="px-10 py-6 text-sm font-bold text-[#006064]">04 Apr 2026</TableCell>
                  <TableCell className="px-10 py-6 text-sm font-black text-primary uppercase">₹72.50</TableCell>
                  <TableCell className="px-10 py-6">
                    <Badge className="bg-success/10 text-success border-none text-[10px] font-black px-4 py-1 rounded-full">SUCCESS</Badge>
                  </TableCell>
                  <TableCell className="px-10 py-6 text-right">
                    <Button variant="ghost" size="sm" className="text-primary font-black hover:bg-[#E0F7FA] rounded-full px-6 flex items-center gap-2 ml-auto group">
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Download
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
