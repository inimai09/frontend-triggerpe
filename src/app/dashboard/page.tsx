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
      <div className="space-y-6 animate-in fade-in duration-700 pb-10">
        <header>
          <h1 className="text-3xl font-black text-white font-headline tracking-tighter drop-shadow-lg">Welcome back, {user.name}! 👋</h1>
          <p className="text-white/60 font-medium mt-1">Real-time parametric protection is active.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Section 1: Weather Widget */}
          <Card className="lg:col-span-8 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] overflow-hidden hover:scale-[1.01] transition-all duration-300">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/20 text-primary border-none font-black uppercase tracking-widest text-[9px] rounded-full px-3 py-1">Chennai Central</Badge>
                  <span className="text-white/40 text-[8px] font-black flex items-center gap-1"><Clock className="w-2.5 h-2.5"/> 4 MINS AGO</span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-6xl font-black text-white tracking-tighter leading-none">31°</span>
                  <div className="mb-1">
                    <p className="text-lg font-black text-primary uppercase tracking-tight">Cloudy</p>
                    <p className="text-[9px] font-bold text-white/50">Feels like 34°C</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 w-full max-w-lg">
                {[
                  { label: 'Rainfall', value: '0.2mm', icon: CloudRain },
                  { label: 'AQI', value: '150', icon: Wind },
                  { label: 'Wind', value: '12km/h', icon: Activity },
                  { label: 'Humidity', value: '64%', icon: Droplets },
                ].map((m, i) => (
                  <div key={i} className="flex flex-col items-center p-2 rounded-2xl bg-white/5 border border-transparent hover:border-primary/20 hover:bg-white/10 hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center mb-1 shadow-sm group-hover:scale-110 transition-transform">
                      <m.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[7px] font-black text-white/40 uppercase tracking-widest mb-0.5 text-center">{m.label}</span>
                    <span className="text-xs font-black text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section 5: AI Status */}
          <Card className="lg:col-span-4 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-primary" /> Neural Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-white/50 uppercase">Fraud Detection</span>
                <div className="flex items-center gap-2 px-3 py-0.5 bg-success/10 rounded-full">
                  <div className="w-1 h-1 rounded-full bg-success animate-pulse" />
                  <span className="text-[8px] font-black text-success uppercase">Active</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[8px]">
                  <span className="font-bold text-white/50 uppercase">Risk Score</span>
                  <span className="font-black text-white">0.35</span>
                </div>
                <Progress value={35} className="h-1 bg-white/10" indicatorClassName="bg-primary shadow-[0_0_10px_#00ACC1]" />
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-[9px] font-bold text-white/50 uppercase">Premium Model</span>
                <Badge variant="outline" className="text-[7px] font-black text-primary border-primary/20 bg-primary/10 px-2 h-4">DYNAMIC</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Coverage Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Coverage / trigger', value: '₹400', icon: ShieldCheck, color: 'text-primary' },
            { label: 'Days remaining', value: '7d of 7', icon: Calendar, color: 'text-success' },
            { label: 'Weekly premium', value: '₹72.5', icon: Activity, color: 'text-warning' },
            { label: 'Claims (Wk)', value: '0', icon: History, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[1.5rem] p-4 flex items-center gap-3 hover:scale-[1.05] hover:shadow-xl transition-all duration-300 cursor-default">
              <div className={cn("w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 shadow-inner", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[7px] font-black text-white/40 uppercase tracking-widest truncate">{stat.label}</span>
                <span className="text-base font-black text-white tracking-tighter">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Section 3: Trigger Monitor */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] hover:scale-[1.01] transition-all duration-300">
          <CardHeader className="px-6 pt-6 pb-2">
            <CardTitle className="text-xs font-black text-white flex items-center gap-3 uppercase tracking-widest">
              <Activity className="w-4 h-4 text-primary" /> Live Trigger Monitor
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
                { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
                { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
                { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
                { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
              ].map((t, i) => (
                <div key={i} className="p-3 border border-white/10 rounded-2xl space-y-2 hover:border-primary/40 hover:bg-white/5 hover:scale-[1.03] transition-all bg-black/20 cursor-default group">
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] font-black text-white/80 uppercase tracking-tight group-hover:text-primary transition-colors">{t.label}</span>
                    <Badge variant="outline" className="text-[6px] font-black text-primary border-primary/30 bg-primary/10 rounded-full px-1 h-3">{t.payout}</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-white/40">
                      <span>{t.current}</span>
                      <span>{t.progress}%</span>
                    </div>
                    <Progress 
                      value={t.progress} 
                      className="h-1 bg-white/10" 
                      indicatorClassName={cn(
                        t.progress >= 100 ? 'bg-destructive shadow-[0_0_10px_#EF5350]' : t.progress >= 80 ? 'bg-warning shadow-[0_0_10px_#FFB74D]' : 'bg-success shadow-[0_0_10px_#26A69A]'
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Recent Claims */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] overflow-hidden hover:scale-[1.005] transition-all duration-300">
          <CardHeader className="px-6 py-4 border-b border-white/10">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xs font-black text-white uppercase tracking-widest">Recent Claims</CardTitle>
              <Button asChild variant="outline" className="text-primary border-primary rounded-full text-[8px] font-black hover:bg-primary/10 h-7 px-4 uppercase tracking-widest transition-all hover:scale-110 active:scale-95">
                <Link href="/claims">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5 h-10">
                <TableRow className="hover:bg-transparent border-white/10">
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Date</TableHead>
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Trigger</TableHead>
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Amount</TableHead>
                  <TableHead className="px-6 font-black text-white/40 text-[8px] uppercase">Status</TableHead>
                  <TableHead className="px-6 text-right font-black text-white/40 text-[8px] uppercase">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-white/5 transition-colors h-12 group border-white/5 cursor-pointer">
                  <TableCell className="px-6 text-[10px] font-medium text-white">24 Feb 2026</TableCell>
                  <TableCell className="px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_#00ACC1]" />
                      <span className="text-[10px] font-bold text-primary">Heavy Rain</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 text-[10px] font-black text-white">₹300</TableCell>
                  <TableCell className="px-6">
                    <Badge className="bg-success/20 text-success border-none text-[8px] font-black px-2 py-0.5">PAID</Badge>
                  </TableCell>
                  <TableCell className="px-6 text-right">
                    <ChevronRight className="w-3.5 h-3.5 text-white/20 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
