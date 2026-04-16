
"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CloudRain, 
  ThermometerSun, 
  Wind, 
  Droplets, 
  TrendingUp, 
  Calendar, 
  History,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'Partner', platform: 'Swiggy' });

  useEffect(() => {
    const saved = localStorage.getItem('tp_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name) {
          setUser(parsed);
        }
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        {/* Boxed Title Section */}
        <Card className="card-neon-glow p-6 rounded-[2rem] border-none">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter drop-shadow-sm">Welcome, {user.name}! 👋</h1>
            <div className="inline-flex items-center gap-3 w-fit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
              <p className="text-primary font-black uppercase tracking-widest text-[9px] icon-neon-glow">Active Parametric Monitoring</p>
            </div>
          </header>
        </Card>

        {/* Boxed Weather Widget */}
        <Card className="card-neon-glow overflow-hidden rounded-[2.5rem]">
          <CardContent className="p-8 flex flex-col xl:flex-row justify-between items-center gap-8">
            {/* Big Temp Box */}
            <div className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] w-full xl:w-auto btn-hover-effect">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-4 py-1 uppercase tracking-widest text-[8px] rounded-full">CHENNAI CENTRAL</Badge>
                <span className="text-white/40 text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3 h-3" /> 4 MINS AGO
                </span>
              </div>
              <div className="flex items-end gap-6">
                <span className="text-[60px] md:text-[80px] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">31°</span>
                <div className="mb-3">
                  <p className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight">Cloudy</p>
                  <p className="text-[8px] font-black text-white/40 uppercase tracking-widest">Feels like 34°C</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full xl:w-auto">
              {[
                { label: 'Rainfall', value: '0.2mm', icon: CloudRain },
                { label: 'AQI', value: '150', icon: Wind },
                { label: 'Wind', value: '12km/h', icon: TrendingUp },
                { label: 'Humidity', value: '64%', icon: Droplets },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center p-5 rounded-[1.5rem] bg-black/40 border border-white/5 btn-hover-effect min-w-[100px]">
                  <m.icon className="w-6 h-6 mb-2 text-primary icon-neon-glow" />
                  <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{m.label}</span>
                  <span className="text-xs font-black text-white">{m.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coverage Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Coverage per trigger', value: '₹400', icon: ShieldCheck, color: 'text-primary' },
            { label: 'Days remaining', value: '7d of 7', icon: Calendar, color: 'text-success' },
            { label: 'Weekly premium', value: '₹72.5', icon: Activity, color: 'text-warning' },
            { label: 'Claims this week', value: '0', icon: History, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="card-neon-glow flex items-center p-6 gap-4 rounded-[2rem] btn-hover-effect">
              <div className={cn("p-3 rounded-xl bg-black/40 border border-white/5", stat.color)}>
                <stat.icon className="w-6 h-6 icon-neon-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-xl font-black text-white tracking-tight">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trigger Monitor Boxed Group */}
        <Card className="card-neon-glow p-8 rounded-[2.5rem] space-y-8 border-none">
          <h2 className="text-xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
            <Activity className="w-6 h-6 text-primary icon-neon-glow" /> Live Trigger Monitor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[
              { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
              { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
              { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
              { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
              { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-[1.75rem] space-y-4 btn-hover-effect">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black text-white/80 uppercase tracking-tight">{t.label}</span>
                  <Badge variant="outline" className="text-[8px] font-black text-primary border-primary/30 bg-primary/10">{t.payout}</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest">
                    <span className="text-white/40">{t.current}</span>
                    <span className={cn(t.progress > 80 ? "text-destructive" : t.progress > 50 ? "text-warning" : "text-primary")}>{t.progress}%</span>
                  </div>
                  <Progress 
                    value={t.progress} 
                    className="h-2 bg-white/5" 
                    indicatorClassName={cn(t.progress > 80 ? 'bg-destructive shadow-[0_0_10px_#EF5350]' : t.progress > 50 ? 'bg-warning shadow-[0_0_10px_#FFB74D]' : 'bg-primary shadow-[0_0_10px_#00ACC1]')}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 card-neon-glow rounded-[2.5rem] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 px-8 py-6 bg-white/5">
              <CardTitle className="text-base font-black text-white uppercase tracking-widest">Recent Claims</CardTitle>
              <Button variant="ghost" className="text-[9px] font-black text-primary hover:text-white hover:bg-primary/20 uppercase tracking-widest btn-hover-effect">View History</Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 btn-hover-effect">
                  <History className="w-8 h-8 text-primary opacity-20 icon-neon-glow" />
                </div>
                <p className="text-xl font-black text-white mb-2 tracking-tight">No active claims found</p>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Payouts process automatically upon trigger validation.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-[2.5rem] overflow-hidden">
            <CardHeader className="border-b border-white/5 px-8 py-6 bg-white/5">
              <CardTitle className="text-base font-black text-white uppercase tracking-widest">System Health</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-[1.5rem] btn-hover-effect">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-[0_0_10px_#26A69A]" />
                  <span className="text-xs font-black text-white">Neural Watchdog</span>
                </div>
                <Badge className="bg-success/20 text-success border-success/30 font-black text-[8px]">ACTIVE</Badge>
              </div>
              
              <div className="p-5 bg-black/40 border border-white/5 rounded-[1.5rem] space-y-4 btn-hover-effect">
                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest">
                  <span className="text-white/40">Macro-Risk Score</span>
                  <span className="text-white">0.35 / 1.0</span>
                </div>
                <Progress value={35} className="h-1.5 bg-white/5" indicatorClassName="bg-primary shadow-[0_0_10px_#00ACC1]" />
                <p className="text-[8px] text-white/20 font-black uppercase tracking-widest">Safe operational window</p>
              </div>

              <div className="p-4 bg-primary/5 rounded-[1.25rem] border border-primary/20 flex items-center justify-between btn-hover-effect">
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Premium Model</span>
                <span className="text-xs font-black text-primary flex items-center gap-2 icon-neon-glow">
                  DYNAMIC <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
