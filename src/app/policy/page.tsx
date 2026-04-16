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
          <h1 className="text-3xl font-black text-white font-headline tracking-tighter">My Policy</h1>
          <p className="text-white/60 font-medium mt-1">Manage your active parametric shield.</p>
        </header>

        {/* Policy Main Details */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] hover:scale-[1.005] transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center shadow-inner">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-black text-white tracking-tighter uppercase">POL-C349A4</span>
                    <Badge className="bg-success text-white border-none text-[7px] font-black px-2 py-0.5 rounded-full">ACTIVE</Badge>
                  </div>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Standard Weekly Plan</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-[7px] font-black text-white/40 uppercase tracking-widest mb-0.5">Start Date</p>
                  <p className="text-[10px] font-black text-white">04 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[7px] font-black text-white/40 uppercase tracking-widest mb-0.5">End Date</p>
                  <p className="text-[10px] font-black text-white">11 Apr 2026</p>
                </div>
                <div>
                  <p className="text-[7px] font-black text-white/40 uppercase tracking-widest mb-0.5">Validity</p>
                  <p className="text-[10px] font-black text-primary flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 7 Days Left
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Coverage / event', value: '₹400', color: 'text-primary' },
                { label: 'Total premium paid', value: '₹290', color: 'text-white' },
                { label: 'Claims filed', value: '0', color: 'text-white' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-[1.5rem] text-center border border-transparent hover:border-primary/20 hover:bg-white/10 transition-all hover:scale-[1.03] cursor-default">
                  <p className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className={cn("text-xl font-black tracking-tighter", item.color)}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Covered Triggers Grid */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] hover:scale-[1.005] transition-all duration-300">
          <CardHeader className="px-6 pt-6 pb-2">
            <CardTitle className="text-[10px] font-black text-white flex items-center gap-3 uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-warning" /> Covered Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { name: 'Heavy Rain', payout: '₹300' },
                { name: 'Extreme Heat', payout: '₹600' },
                { name: 'High AQI', payout: '₹600' },
                { name: 'Lockdown', payout: '₹400' },
                { name: 'Outage', payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-3 border border-white/10 rounded-[1.5rem] text-center flex flex-col items-center gap-1 bg-black/20 hover:border-primary/20 hover:scale-[1.05] hover:shadow-md transition-all cursor-default group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,172,193,0.5)] mb-1 group-hover:animate-ping" />
                  <p className="text-[7px] font-black text-white/80 uppercase tracking-tight">{t.name}</p>
                  <p className="text-base font-black text-primary tracking-tighter">{t.payout}</p>
                  <Badge variant="outline" className="text-[6px] font-black text-success uppercase px-1 border-success/20 bg-success/10 rounded-full h-3">ACTIVE</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-black h-11 px-8 flex-1 sm:flex-none uppercase tracking-widest shadow-lg btn-hover-effect text-[9px]">
            <RefreshCw className="w-3.5 h-3.5 mr-2" /> Renew Policy
          </Button>
          <Button className="bg-warning hover:bg-warning/90 text-white rounded-full font-black h-11 px-8 flex-1 sm:flex-none uppercase tracking-widest shadow-lg btn-hover-effect text-[9px]">
            <Pause className="w-3.5 h-3.5 mr-2" /> Pause Coverage
          </Button>
          <Button variant="outline" className="border-white/10 text-white bg-white/5 rounded-full font-black h-11 px-8 flex-1 sm:flex-none uppercase tracking-widest hover:bg-white/10 btn-hover-effect text-[9px]">
            Change Tier
          </Button>
        </div>

        {/* Payment History */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] overflow-hidden">
          <CardHeader className="px-6 py-4 border-b border-white/10">
            <CardTitle className="text-xs font-black text-white flex items-center gap-3 uppercase tracking-widest">
              <History className="w-3.5 h-3.5 text-primary" /> Payment History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5 h-10">
                <TableRow className="border-white/10">
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Date</TableHead>
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Amount</TableHead>
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Status</TableHead>
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-white/5 transition-colors h-12 border-white/5 group cursor-default">
                  <TableCell className="px-6 text-[10px] font-bold text-white">04 Apr 2026</TableCell>
                  <TableCell className="px-6 text-[10px] font-black text-primary uppercase">₹72.50</TableCell>
                  <TableCell className="px-6">
                    <Badge className="bg-success/20 text-success border-none text-[7px] font-black px-2 py-0.5 rounded-full h-3.5">SUCCESS</Badge>
                  </TableCell>
                  <TableCell className="px-6 text-right">
                    <Button variant="ghost" size="sm" className="text-primary font-black hover:bg-primary/10 rounded-full px-4 h-7 flex items-center gap-2 ml-auto group text-[8px] uppercase tracking-widest">
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
