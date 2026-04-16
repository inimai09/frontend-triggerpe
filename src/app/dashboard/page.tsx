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
        <Card className="card-neon-glow p-8 rounded-[3rem] border-none">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter drop-shadow-sm font-headline">Welcome, {user.name}! 👋</h1>
            <div className="inline-flex items-center gap-3 w-fit px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
              <p className="text-primary font-black uppercase tracking-widest text-[9px] icon-neon-glow">Active Parametric Monitoring</p>
            </div>
          </header>
        </Card>

        {/* Boxed Weather Widget */}
        <Card className="card-neon-glow overflow-hidden rounded-[3.5rem]">
          <CardContent className="p-10 flex flex-col xl:flex-row justify-between items-center gap-10">
            <div className="p-10 bg-black/40 border border-white/5 rounded-[3rem] w-full xl:w-auto btn-hover-effect">
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-5 py-2 uppercase tracking-widest text-[8px] rounded-full">CHENNAI CENTRAL</Badge>
                <span className="text-white/40 text-[8px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" /> 4 MINS AGO
                </span>
              </div>
              <div className="flex items-end gap-8">
                <span className="text-[60px] md:text-[80px] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] font-headline">31°</span>
                <div className="mb-4">
                  <p className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight font-headline">Cloudy</p>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Feels like 34°C</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full xl:w-auto">
              {[
                { label: 'Rainfall', value: '0.2mm', icon: CloudRain },
                { label: 'AQI', value: '150', icon: Wind },
                { label: 'Wind', value: '12km/h', icon: TrendingUp },
                { label: 'Humidity', value: '64%', icon: Droplets },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-[2.5rem] bg-black/40 border border-white/5 btn-hover-effect min-w-[120px]">
                  <div className="p-3 rounded-full bg-white/5 mb-3">
                    <m.icon className="w-7 h-7 text-primary icon-neon-glow" />
                  </div>
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{m.label}</span>
                  <span className="text-xs font-black text-white">{m.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coverage Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Coverage per trigger', value: '₹400', icon: ShieldCheck, color: 'text-primary' },
            { label: 'Days remaining', value: '7d of 7', icon: Calendar, color: 'text-success' },
            { label: 'Weekly premium', value: '₹72.5', icon: Activity, color: 'text-warning' },
            { label: 'Claims this week', value: '0', icon: History, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="card-neon-glow flex items-center p-8 gap-6 rounded-[3rem] btn-hover-effect">
              <div className={cn("p-4 rounded-full bg-black/40 border border-white/5", stat.color)}>
                <stat.icon className="w-8 h-8 icon-neon-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-2xl font-black text-white tracking-tight">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trigger Monitor Boxed Group */}
        <Card className="card-neon-glow p-10 rounded-[3.5rem] space-y-10 border-none">
          <h2 className="text-2xl font-black text-white flex items-center gap-5 uppercase tracking-tighter font-headline">
            <div className="p-3 bg-primary/20 rounded-full">
              <Activity className="w-8 h-8 text-primary icon-neon-glow" />
            </div> Live Trigger Monitor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
              { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
              { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
              { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
              { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
            ].map((t, i) => (
              <div key={i} className="p-8 bg-black/40 border border-white/5 rounded-[2.5rem] space-y-5 btn-hover-effect">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-black text-white/80 uppercase tracking-tight font-headline">{t.label}</span>
                  <Badge variant="outline" className="text-[8px] font-black text-primary border-primary/30 bg-primary/10 rounded-full px-3 py-1">{t.payout}</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                    <span className="text-white/40">{t.current}</span>
                    <span className={cn(t.progress > 80 ? "text-destructive" : t.progress > 50 ? "text-warning" : "text-primary")}>{t.progress}%</span>
                  </div>
                  <Progress 
                    value={t.progress} 
                    className="h-2.5 bg-white/5" 
                    indicatorClassName={cn(t.progress > 80 ? 'bg-destructive shadow-[0_0_10px_#EF5350]' : t.progress > 50 ? 'bg-warning shadow-[0_0_10px_#FFB74D]' : 'bg-primary shadow-[0_0_10px_#00ACC1]')}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
