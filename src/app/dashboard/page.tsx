"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CloudRain, 
  Wind, 
  Droplets, 
  Calendar, 
  History,
  Activity,
  ShieldCheck,
  Clock,
  Zap,
  ChevronRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'Partner' });

  useEffect(() => {
    const saved = localStorage.getItem('tp_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name) setUser(parsed);
      } catch (e) {}
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-700">
        <header>
          <h1 className="text-3xl font-black text-[#006064] font-headline">Welcome back, {user.name}! 👋</h1>
          <p className="text-[#00838F] font-medium mt-1">Real-time parametric protection is active.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Section 1: Weather Widget */}
          <Card className="lg:col-span-8 bg-white border-none shadow-sm rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#E0F7FA] text-[#00ACC1] hover:bg-[#E0F7FA] border-none font-bold uppercase tracking-widest text-[10px] rounded-full px-4 py-1.5">Chennai Central</Badge>
                  <span className="text-[#00838F]/60 text-[10px] font-bold flex items-center gap-1"><Clock className="w-3 h-3"/> 4 MINS AGO</span>
                </div>
                <div className="flex items-end gap-6">
                  <span className="text-7xl font-black text-[#006064] tracking-tighter">31°</span>
                  <div className="mb-2">
                    <p className="text-2xl font-black text-[#00ACC1] uppercase tracking-tight">Cloudy</p>
                    <p className="text-xs font-bold text-[#00838F]">Feels like 34°C</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1 w-full max-w-xl">
                {[
                  { label: 'Rainfall', value: '0.2mm', icon: CloudRain },
                  { label: 'AQI', value: '150', icon: Wind },
                  { label: 'Wind', value: '12km/h', icon: Activity },
                  { label: 'Humidity', value: '64%', icon: Droplets },
                ].map((m, i) => (
                  <div key={i} className="flex flex-col items-center p-4 rounded-3xl bg-[#F1F5F9]/30 border border-transparent hover:border-primary/20 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                      <m.icon className="w-5 h-5 text-[#00ACC1]" />
                    </div>
                    <span className="text-[9px] font-black text-[#00838F] uppercase tracking-widest mb-1 text-center">{m.label}</span>
                    <span className="text-sm font-black text-[#006064]">{m.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 5: AI Status */}
          <Card className="lg:col-span-4 bg-white border-none shadow-sm rounded-[2.5rem]">
            <CardHeader className="px-8 pt-8 pb-4">
              <CardTitle className="text-sm font-black text-[#006064] uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" /> Neural Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#00838F] uppercase">Fraud Detection</span>
                <div className="flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-[10px] font-black text-success uppercase">Active</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#00838F] uppercase">Risk Score</span>
                  <span className="font-black text-[#006064]">0.35</span>
                </div>
                <Progress value={35} className="h-2 bg-[#E0F7FA]" indicatorClassName="bg-[#00ACC1]" />
              </div>
              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs font-bold text-[#00838F] uppercase">Premium Model</span>
                <Badge variant="outline" className="text-[9px] font-black text-[#00ACC1] border-[#00ACC1]/20 bg-[#E0F7FA] px-3">DYNAMIC</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Coverage Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Coverage per trigger', value: '₹400', icon: ShieldCheck, color: 'text-primary' },
            { label: 'Days remaining', value: '7d of 7', icon: Calendar, color: 'text-success' },
            { label: 'Weekly premium', value: '₹72.5', icon: Activity, color: 'text-warning' },
            { label: 'Claims this week', value: '0', icon: History, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="bg-white border-none shadow-sm rounded-[2.5rem] p-6 flex items-center gap-5 hover:translate-y-[-4px] transition-all duration-300">
              <div className={cn("w-14 h-14 rounded-full bg-[#E0F7FA] flex items-center justify-center shadow-inner", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-[#00838F] uppercase tracking-widest">{stat.label}</span>
                <span className="text-xl font-black text-[#006064] tracking-tight">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Section 3: Trigger Monitor */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem]">
          <CardHeader className="px-8 pt-8 pb-4">
            <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3 uppercase tracking-tighter">
              <Activity className="w-5 h-5 text-primary" /> Live Trigger Monitor
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
                { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
                { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
                { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
                { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-5 border-2 border-border/50 rounded-3xl space-y-4 hover:border-primary/20 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-[#006064] uppercase tracking-tight">{t.label}</span>
                    <Badge variant="outline" className="text-[9px] font-black text-[#00ACC1] border-[#00ACC1]/30 bg-[#E0F7FA] rounded-full px-2">{t.payout}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-[#00838F]">
                      <span>{t.current}</span>
                      <span>{t.progress}%</span>
                    </div>
                    <Progress 
                      value={t.progress} 
                      className="h-1.5 bg-[#E0F7FA]" 
                      indicatorClassName={cn(
                        t.progress >= 100 ? 'bg-destructive' : t.progress >= 80 ? 'bg-warning' : 'bg-success'
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Recent Claims */}
        <Card className="bg-white border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardHeader className="px-10 py-6 border-b border-border">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-tighter">Recent Claims</CardTitle>
              <Button asChild variant="outline" className="text-primary border-primary rounded-full text-[10px] font-black hover:bg-[#E0F7FA] h-9 px-6 uppercase tracking-widest">
                <Link href="/claims">View All Claims</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#F1F5F9]/50 h-14">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Date</TableHead>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Trigger</TableHead>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Amount</TableHead>
                  <TableHead className="px-10 font-black text-[#00838F] text-[10px] uppercase">Status</TableHead>
                  <TableHead className="px-10 text-right font-black text-[#00838F] text-[10px] uppercase">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-[#F1F5F9]/30 transition-colors h-16 group">
                  <TableCell className="px-10 text-sm font-medium text-[#006064]">24 Feb 2026</TableCell>
                  <TableCell className="px-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-[#00ACC1]">Heavy Rain</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-10 text-sm font-black text-[#006064]">₹300</TableCell>
                  <TableCell className="px-10">
                    <Badge className="bg-success/10 text-success border-none text-[10px] font-black px-4 py-1">PAID</Badge>
                  </TableCell>
                  <TableCell className="px-10 text-right">
                    <ChevronRight className="w-5 h-5 text-[#00838F]/30 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
