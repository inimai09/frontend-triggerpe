"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, RefreshCw, Pause, ArrowRightLeft, Clock, Zap, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064]">My Policy</h1>
          <p className="text-[#00838F] font-medium mt-1">Manage your active parametric shield.</p>
        </header>

        {/* Policy Main Details */}
        <Card className="bg-white border-none card-shadow rounded-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-8 mb-8">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-[#E0F7FA] text-[#00ACC1]">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl font-black text-[#006064]">POL-C349A4</span>
                    <Badge className="bg-success text-white border-none text-[10px] font-bold">ACTIVE</Badge>
                  </div>
                  <p className="text-sm font-medium text-[#00838F]">Standard Weekly Protection Plan</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
                  <p className="text-sm font-black text-[#00ACC1] flex items-center gap-1"><Clock className="w-4 h-4" /> 7 Days Left</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Coverage per event', value: '₹400', color: 'text-[#00ACC1]' },
                { label: 'Total premium paid', value: '₹290', color: 'text-[#006064]' },
                { label: 'Claims filed', value: '0', color: 'text-[#006064]' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F1F5F9]/30 rounded-lg text-center">
                  <p className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest mb-1">{item.label}</p>
                  <p className={cn("text-2xl font-black", item.color)}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Covered Triggers Grid */}
        <Card className="bg-white border-none card-shadow rounded-xl">
          <CardHeader className="px-8 pt-8 pb-4">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#FFB74D]" /> Covered Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Heavy Rain', payout: '₹300' },
                { name: 'Extreme Heat', payout: '₹600' },
                { name: 'High AQI', payout: '₹600' },
                { name: 'Lockdown', payout: '₹400' },
                { name: 'Outage', payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-5 border border-border rounded-lg text-center flex flex-col items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success mb-2" />
                  <p className="text-[11px] font-bold text-[#006064] uppercase">{t.name}</p>
                  <p className="text-lg font-black text-[#00ACC1]">{t.payout}</p>
                  <span className="text-[8px] font-black text-[#00838F]/50 uppercase">Active</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Policy Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-[#00ACC1] hover:bg-[#00ACC1]/90 text-white rounded-full font-bold h-12 px-8 flex-1 sm:flex-none">Renew Policy</Button>
          <Button className="bg-[#FFB74D] hover:bg-[#FFB74D]/90 text-white rounded-full font-bold h-12 px-8 flex-1 sm:flex-none">Pause Coverage</Button>
          <Button variant="outline" className="border-[#00ACC1] text-[#00ACC1] rounded-full font-bold h-12 px-8 flex-1 sm:flex-none">Change Tier</Button>
        </div>

        {/* Payment History */}
        <Card className="bg-white border-none card-shadow rounded-xl overflow-hidden">
          <CardHeader className="px-8 py-6 border-b border-border">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3">
              <History className="w-5 h-5 text-[#00ACC1]" /> Payment History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50">
                <TableRow>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Date</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Amount</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase">Status</TableHead>
                  <TableHead className="px-8 font-bold text-[#00838F] text-[10px] uppercase text-right">Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="px-8 text-sm font-medium">04 Apr 2026</TableCell>
                  <TableCell className="px-8 text-sm font-black">₹72.50</TableCell>
                  <TableCell className="px-8">
                    <Badge className="bg-success/10 text-success border-none text-[10px] font-bold">SUCCESS</Badge>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    <Button variant="ghost" size="sm" className="text-[#00ACC1] font-bold">Download</Button>
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
