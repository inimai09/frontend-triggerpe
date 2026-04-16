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
  ShieldCheck
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  const [userName, setUserName] = useState('Partner');

  useEffect(() => {
    const saved = localStorage.getItem('tp_user');
    if (saved) setUserName(JSON.parse(saved).name);
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-headline font-bold text-foreground">Welcome back, {userName}! 👋</h1>
        <p className="text-secondary font-medium">Your parametric protection is active and monitoring.</p>
      </header>

      {/* Weather Widget */}
      <Card className="border-none shadow-lg overflow-hidden group">
        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-none">Chennai Central</Badge>
                <span className="text-white/60 text-xs font-medium">Updated 4 mins ago</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-7xl font-bold font-headline">31°</span>
                <span className="text-2xl font-medium mb-3 opacity-80">Cloudy</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-auto">
              {[
                { label: 'Rainfall', value: '0.2mm', icon: CloudRain },
                { label: 'AQI', value: '150', icon: Wind },
                { label: 'Wind', value: '12km/h', icon: TrendingUp },
                { label: 'Humidity', value: '64%', icon: Droplets },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-white/10">
                  <m.icon className="w-5 h-5 mb-2 opacity-80" />
                  <span className="text-xs font-bold opacity-60 uppercase">{m.label}</span>
                  <span className="text-sm font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Coverage Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Coverage per trigger', value: '₹400', icon: ShieldCheck, color: 'text-primary' },
          { label: 'Days remaining', value: '7d of 7', icon: Calendar, color: 'text-success' },
          { label: 'Weekly premium', value: '₹72.5', icon: Activity, color: 'text-warning' },
          { label: 'Claims this week', value: '0', icon: History, color: 'text-danger' },
        ].map((stat, i) => (
          <Card key={i} className="border border-border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-muted ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{stat.label}</span>
                <span className="text-xl font-bold text-foreground">{stat.value}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trigger Monitor */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" /> Trigger Monitor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { label: 'Heavy Rain', current: '0/50mm', progress: 0, payout: '₹800' },
            { label: 'Extreme Heat', current: '31/42°C', progress: 74, payout: '₹600' },
            { label: 'High AQI', current: '150/300', progress: 50, payout: '₹600' },
            { label: 'Curfew', current: 'Inactive', progress: 0, payout: '₹400' },
            { label: 'Outage', current: 'Inactive', progress: 0, payout: '₹350' },
          ].map((t, i) => (
            <Card key={i} className="border border-border shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold text-foreground">{t.label}</span>
                  <Badge variant="outline" className="text-xs font-bold text-primary border-primary/20">{t.payout}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-secondary">{t.current}</span>
                    <span className="text-foreground">{t.progress}%</span>
                  </div>
                  <Progress 
                    value={t.progress} 
                    className="h-1.5" 
                    indicatorClassName={t.progress > 80 ? 'bg-danger' : t.progress > 50 ? 'bg-warning' : 'bg-success'}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom Grid: Claims & AI Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
            <CardTitle className="text-lg font-bold">Recent Claims</CardTitle>
            <Button variant="ghost" className="text-xs font-bold text-primary hover:text-primary hover:bg-primary/10">View All Claims</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="p-8 text-center text-secondary">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <History className="w-8 h-8 opacity-20" />
                </div>
                <p className="font-medium">No claims filed this week.</p>
                <p className="text-xs">Your payouts happen automatically when triggers are met.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border shadow-sm h-full">
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-bold">AI Status</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" />
                <span className="text-sm font-bold text-foreground">Fraud Detection</span>
              </div>
              <Badge className="bg-success text-white">Active</Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-secondary">Risk Score</span>
                <span className="font-bold text-foreground">0.35</span>
              </div>
              <Progress value={35} className="h-2 bg-muted" indicatorClassName="bg-primary" />
              <p className="text-[10px] text-secondary font-medium">Updated based on your last 100 deliveries.</p>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm font-bold text-secondary">Premium Model</span>
              <span className="text-sm font-bold text-foreground flex items-center gap-1">
                Dynamic <ArrowUpRight className="w-3 h-3 text-primary" />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
