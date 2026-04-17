
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
  ChevronRight,
  TrendingUp,
  Banknote
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
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-4xl font-black text-white font-headline tracking-tighter drop-shadow-lg">Welcome, {user.name}! 👋</h1>
            <p className="text-white/60 font-medium mt-1">Intelligent parametric protection is active for your shift.</p>
          </div>
          <div className="flex gap-3">
             <Badge className="bg-primary/20 text-primary border-primary/20 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
               Platform: Swiggy
             </Badge>
             <Badge className="bg-success/20 text-success border-success/20 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">
               Shield Active
             </Badge>
          </div>
        </header>

        {/* Intelligence Tier: Earnings Protected */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-[0_0_30px_rgba(0,172,193,0.2)]">
                <Banknote className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Total Earnings Protected (Week)</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-6xl font-black text-white tracking-tighter">₹1,200</span>
                  <Badge className="bg-success text-white border-none text-[8px] font-black py-0.5">PAYOUT SETTLED</Badge>
                </div>
                <p className="text-xs font-medium text-white/60 leading-relaxed max-w-md">
                  Your parametric shield has covered <span className="text-primary font-black">100% of disrupted earnings</span> due to heavy rain and platform outages this week.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] p-8 flex flex-col justify-center text-center space-y-4">
             <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Risk Exposure Score</p>
             <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
                  <circle cx="48" cy="48" r="40" stroke="#00ACC1" strokeWidth="8" fill="transparent" strokeDasharray={251} strokeDashoffset={251 - (251 * 35) / 100} strokeLinecap="round" className="drop-shadow-[0_0_8px_#00ACC1]" />
                </svg>
                <span className="absolute text-2xl font-black text-white">35</span>
             </div>
             <p className="text-[10px] font-black text-primary uppercase">Optimized Risk Profile</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Weather Telemetry */}
          <Card className="lg:col-span-8 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden hover:scale-[1.01] transition-all duration-300">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/20 text-primary border-none font-black uppercase tracking-widest text-[9px] rounded-full px-3 py-1">Chennai Central</Badge>
                  <span className="text-white/40 text-[8px] font-black flex items-center gap-1 uppercase"><Clock className="w-2.5 h-2.5"/> UPDATED 4 MINS AGO</span>
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
                  <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-transparent hover:border-primary/20 hover:bg-white/10 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center mb-1 shadow-sm group-hover:scale-110 transition-transform">
                      <m.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[7px] font-black text-white/40 uppercase tracking-widest mb-0.5 text-center">{m.label}</span>
                    <span className="text-xs font-black text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Neural Engine Status */}
          <Card className="lg:col-span-4 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-primary" /> Neural Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-white/50 uppercase">Fraud Detection</span>
                <div className="flex items-center gap-2 px-3 py-0.5 bg-success/10 rounded-full border border-success/20">
                  <div className="w-1 h-1 rounded-full bg-success animate-pulse" />
                  <span className="text-[8px] font-black text-success uppercase">Active</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[8px]">
                  <span className="font-bold text-white/50 uppercase">Claim Probability</span>
                  <span className="font-black text-white">LOW (12%)</span>
                </div>
                <Progress value={12} className="h-1 bg-white/10" indicatorClassName="bg-primary" />
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-[9px] font-bold text-white/50 uppercase">Premium Model</span>
                <Badge variant="outline" className="text-[7px] font-black text-primary border-primary/20 bg-primary/10 px-2 h-4 uppercase">Dynamic-Wk</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Trigger Monitor */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] hover:scale-[1.01] transition-all duration-300">
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
                <div key={i} className="p-4 border border-white/10 rounded-[2rem] space-y-2 hover:border-primary/40 hover:bg-white/5 transition-all bg-black/20 group">
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] font-black text-white/80 uppercase tracking-tight group-hover:text-primary transition-colors">{t.label}</span>
                    <Badge variant="outline" className="text-[6px] font-black text-primary border-primary/30 bg-primary/10 rounded-full px-1.5 h-4">{t.payout}</Badge>
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

        {/* Recent Claims - Simplified for high-fidelity */}
        <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="px-6 py-4 border-b border-white/10">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xs font-black text-white uppercase tracking-widest">Recent Shield Payouts</CardTitle>
              <Button asChild variant="ghost" className="text-primary hover:bg-primary/10 rounded-full text-[8px] font-black uppercase h-8 px-4">
                <Link href="/claims">View Full Log</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5 h-10">
                <TableRow className="hover:bg-transparent border-white/10">
                  <TableHead className="px-8 font-black text-white/40 text-[8px] uppercase">Event Date</TableHead>
                  <TableHead className="px-8 font-black text-white/40 text-[8px] uppercase">Trigger Type</TableHead>
                  <TableHead className="px-8 font-black text-white/40 text-[8px] uppercase">Payout</TableHead>
                  <TableHead className="px-8 font-black text-white/40 text-[8px] uppercase">Status</TableHead>
                  <TableHead className="px-8 text-right font-black text-white/40 text-[8px] uppercase">Evidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-white/5 transition-colors h-14 group border-white/5 cursor-pointer">
                  <TableCell className="px-8 text-[10px] font-medium text-white">24 Feb 2026</TableCell>
                  <TableCell className="px-8">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00ACC1]" />
                      <span className="text-[10px] font-bold text-primary uppercase">Heavy Rain</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-8 text-[11px] font-black text-white">₹300</TableCell>
                  <TableCell className="px-8">
                    <Badge className="bg-success/20 text-success border-none text-[8px] font-black px-3 py-1 uppercase">Instant Payout</Badge>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    <ChevronRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
