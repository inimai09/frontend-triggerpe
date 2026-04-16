
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Navigation, Clock, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Climate Monitor</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Real-time parametric data for your zone.</p>
          </div>
          <Card className="card-neon-glow px-10 py-6 rounded-3xl flex items-center gap-6">
            <div className="p-4 bg-primary/20 rounded-2xl">
              <MapPin className="w-8 h-8 text-primary icon-neon-glow" />
            </div>
            <div>
              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Operational Zone</p>
              <p className="text-xl font-black text-white">Chennai Central, TN</p>
            </div>
          </Card>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 card-neon-glow text-white overflow-hidden relative">
            <div className="absolute -top-32 -right-32 opacity-10 pointer-events-none">
              <Sun className="w-[500px] h-[500px] text-warning" />
            </div>
            <CardContent className="p-16 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="space-y-10">
                  <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-8 py-2.5 uppercase tracking-widest text-[10px]">High Heat Warning</Badge>
                  <div className="flex items-end gap-10">
                    <span className="text-[140px] font-black leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">38°</span>
                    <div className="mb-6">
                      <p className="text-5xl font-black text-white uppercase tracking-tighter">Partly Cloudy</p>
                      <p className="text-white/40 font-black uppercase tracking-widest text-[10px] mt-2">Feels like 41°C</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
                  {[
                    { icon: Droplets, label: 'Humidity', value: '72%' },
                    { icon: Wind, label: 'Wind Speed', value: '14 km/h' },
                    { icon: CloudRain, label: 'Rain Prob.', value: '12%' },
                    { icon: Navigation, label: 'UV Index', value: '9/10' },
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] flex flex-col items-center border border-white/5 btn-hover-effect">
                      <item.icon className="w-10 h-10 mb-6 text-primary icon-neon-glow" />
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-2">{item.label}</span>
                      <span className="text-2xl font-black text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-[2.5rem] flex flex-col">
            <CardHeader className="border-b border-white/5 px-12 py-10">
              <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Trigger Thresholds</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-12 space-y-12">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-warning shadow-[0_0_15px_rgba(255,183,77,0.5)]' },
                { label: 'Heavy Rain', current: '2mm', target: '15mm', progress: 12, color: 'bg-primary shadow-[0_0_15px_rgba(0,172,193,0.5)]' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]' },
              ].map((t, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-black text-white">{t.label}</span>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{t.current} / {t.target}</span>
                  </div>
                  <Progress value={t.progress} className="h-3 bg-white/5" indicatorClassName={t.color} />
                </div>
              ))}
              <div className="mt-auto p-8 bg-primary/10 rounded-3xl border border-primary/20">
                <p className="text-[10px] text-primary font-black leading-relaxed uppercase tracking-widest flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 shrink-0 icon-neon-glow" /> 
                  <span>Trigger points are verified via ISRO Bhuvan & IMD satellite feeds every 15 mins.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-neon-glow rounded-[2.5rem] overflow-hidden">
          <CardHeader className="border-b border-white/5 px-12 py-10 flex flex-row justify-between items-center">
            <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Hourly Forecast (24h)</CardTitle>
            <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
              <Clock className="w-4 h-4" /> Live Tracking
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex p-16 gap-16">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
                  <div key={h} className="flex flex-col items-center gap-8 min-w-[120px] btn-hover-effect group">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-primary transition-colors">{h === 1 ? 'Now' : `${(h + 10) % 12 || 12} ${h + 10 >= 12 ? 'PM' : 'AM'}`}</span>
                    {h % 3 === 0 ? <CloudRain className="w-12 h-12 text-primary icon-neon-glow" /> : <Sun className="w-12 h-12 text-warning icon-neon-glow" />}
                    <span className="text-3xl font-black text-white">{28 + (h % 5)}°</span>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="bg-white/5" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
