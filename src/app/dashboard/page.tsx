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
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter drop-shadow-sm">Welcome back, {user.name}! 👋</h1>
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Your parametric protection is ACTIVE and monitoring.</p>
        </header>

        {/* Weather Widget */}
        <Card className="card-neon-glow overflow-hidden rounded-3xl">
          <CardContent className="p-12 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-5 py-1.5 uppercase tracking-widest text-[10px]">CHENNAI CENTRAL</Badge>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" /> Updated 4 mins ago
                </span>
              </div>
              <div className="flex items-end gap-6">
                <span className="text-[100px] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">31°</span>
                <div className="mb-4">
                  <p className="text-3xl font-black text-primary uppercase tracking-tight">Cloudy</p>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Feels like 34°C</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-auto">
              {[
                { label: 'Rainfall', value: '0.2mm', icon: CloudRain },
                { label: 'AQI', value: '150', icon: Wind },
                { label: 'Wind', value: '12km/h', icon: TrendingUp },
                { label: 'Humidity', value: '64%', icon: Droplets },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/5 btn-hover-effect">
                  <m.icon className="w-7 h-7 mb-3 text-primary icon-neon-glow" />
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{m.label}</span>
                  <span className="text-sm font-black text-white">{m.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coverage Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Coverage per trigger', value: '₹400', icon: ShieldCheck, color: 'text-primary' },
            { label: 'Days remaining', value: '7d of 7', icon: Calendar, color: 'text-success' },
            { label: 'Weekly premium', value: '₹72.5', icon: Activity, color: 'text-warning' },
            { label: 'Claims this week', value: '0', icon: History, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="card-neon-glow flex items-center p-8 gap-6 rounded-3xl btn-hover-effect">
              <div className={cn("p-4 rounded-2xl bg-white/5", stat.color)}>
                <stat.icon className="w-8 h-8 icon-neon-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-2xl font-black text-white">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trigger Monitor */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
            <Activity className="w-6 h-6 text-primary icon-neon-glow" /> LIVE TRIGGER MONITOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
              { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
              { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
              { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
              { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
            ].map((t, i) => (
              <Card key={i} className="card-neon-glow p-8 space-y-6 rounded-3xl btn-hover-effect">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-black text-white/80">{t.label}</span>
                  <Badge variant="outline" className="text-[9px] font-black text-primary border-primary/30 bg-primary/10">{t.payout}</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                    <span className="text-white/40">{t.current}</span>
                    <span className={cn(t.progress > 80 ? "text-destructive" : t.progress > 50 ? "text-warning" : "text-primary")}>{t.progress}%</span>
                  </div>
                  <Progress 
                    value={t.progress} 
                    className="h-2 bg-white/5" 
                    indicatorClassName={cn(t.progress > 80 ? 'bg-destructive' : t.progress > 50 ? 'bg-warning' : 'bg-primary shadow-[0_0_10px_rgba(0,172,193,0.5)]')}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 card-neon-glow rounded-3xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 px-10 py-8">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Recent Claims</CardTitle>
              <Button variant="ghost" className="text-[10px] font-black text-primary hover:text-white hover:bg-primary/20 uppercase tracking-widest">View All</Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-24 text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                  <History className="w-12 h-12 text-primary opacity-20 icon-neon-glow" />
                </div>
                <p className="text-2xl font-black text-white mb-3 tracking-tight">No active claims found</p>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Your payouts happen automatically when triggers are met.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-3xl">
            <CardHeader className="border-b border-white/5 px-10 py-8">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest">System Health</CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3.5 h-3.5 bg-success rounded-full animate-pulse shadow-[0_0_10px_rgba(38,166,154,0.8)]" />
                  <span className="text-sm font-black text-white">Fraud Detection</span>
                </div>
                <Badge className="bg-success/20 text-success border-success/30 font-black text-[9px]">ACTIVE</Badge>
              </div>
              
              <div className="space-y-5">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/40">Risk Score</span>
                  <span className="text-white">0.35 / 1.0</span>
                </div>
                <Progress value={35} className="h-2 bg-white/5" indicatorClassName="bg-primary shadow-[0_0_10px_rgba(0,172,193,0.5)]" />
                <p className="text-[9px] text-white/20 font-black uppercase tracking-widest">Based on historical performance</p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Premium Model</span>
                <span className="text-sm font-black text-primary flex items-center gap-2 icon-neon-glow">
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