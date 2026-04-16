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

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'Partner', platform: 'Swiggy' });

  useEffect(() => {
    const saved = localStorage.getItem('tp_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">Welcome back, {user.name}! 👋</h1>
        <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">Your parametric protection is ACTIVE and monitoring.</p>
      </header>

      {/* Weather Widget */}
      <Card className="border-none shadow-lg bg-white overflow-hidden group">
        <CardContent className="p-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-[#E0F7FA] text-primary border-none font-black px-4 py-1">CHENNAI CENTRAL</Badge>
              <span className="text-[#00838F] text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <Clock className="w-3 h-3" /> Updated 4 mins ago
              </span>
            </div>
            <div className="flex items-end gap-4">
              <span className="text-8xl font-black text-[#006064] leading-none">31°</span>
              <div className="mb-2">
                <p className="text-2xl font-black text-[#00838F]">Cloudy</p>
                <p className="text-sm font-bold text-muted-foreground uppercase">Feels like 34°C</p>
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
              <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-[#E0F7FA] border border-primary/10">
                <m.icon className="w-6 h-6 mb-2 text-primary" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</span>
                <span className="text-sm font-black text-[#006064]">{m.value}</span>
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
          <Card key={i} className="bg-white border border-border shadow-sm flex items-center p-6 gap-5">
            <div className={cn("p-4 rounded-2xl bg-[#E0F7FA]", stat.color)}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              <span className="text-2xl font-black text-[#006064]">{stat.value}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Trigger Monitor */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-[#006064] flex items-center gap-2 uppercase tracking-tighter">
          <Activity className="w-5 h-5 text-primary" /> LIVE TRIGGER MONITOR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
            { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
            { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
            { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
            { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
          ].map((t, i) => (
            <Card key={i} className="bg-white border border-border shadow-sm p-6 space-y-5">
              <div className="flex justify-between items-start">
                <span className="text-sm font-black text-[#006064]">{t.label}</span>
                <Badge variant="outline" className="text-[10px] font-black text-primary border-primary/20">{t.payout}</Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black">
                  <span className="text-muted-foreground uppercase tracking-widest">{t.current}</span>
                  <span className={cn(t.progress > 80 ? "text-destructive" : t.progress > 50 ? "text-warning" : "text-success")}>{t.progress}%</span>
                </div>
                <Progress 
                  value={t.progress} 
                  className="h-2 bg-[#E0F7FA]" 
                  indicatorClassName={cn(t.progress > 80 ? 'bg-destructive' : t.progress > 50 ? 'bg-warning' : 'bg-success')}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white border border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between border-b px-8 py-6">
            <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Recent Claims</CardTitle>
            <Button variant="ghost" className="text-xs font-black text-primary hover:text-primary hover:bg-[#E0F7FA]">View All Claims</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-[#E0F7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                <History className="w-10 h-10 text-primary opacity-30" />
              </div>
              <p className="text-lg font-black text-[#006064] mb-2">No claims this week</p>
              <p className="text-sm font-bold text-[#00838F]">Your payouts happen automatically when triggers are met.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-border shadow-sm">
          <CardHeader className="border-b px-8 py-6">
            <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">AI Status</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-black text-[#006064]">Fraud Detection</span>
              </div>
              <Badge className="bg-success text-white font-black">ACTIVE</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-black">
                <span className="text-muted-foreground uppercase tracking-widest">Risk Score</span>
                <span className="text-[#006064]">0.35 / 1.0</span>
              </div>
              <Progress value={35} className="h-2 bg-[#E0F7FA]" />
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Based on your last 100 deliveries</p>
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <span className="text-sm font-black text-[#00838F] uppercase tracking-widest">Premium Model</span>
              <span className="text-sm font-black text-[#006064] flex items-center gap-1">
                DYNAMIC <ArrowUpRight className="w-4 h-4 text-primary" />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
