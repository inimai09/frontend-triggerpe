"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Navigation, Clock, AlertTriangle, CloudSun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Climate Monitor</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Real-time parametric data for your zone.</p>
          </div>
          <div className="flex items-center gap-6 p-6 card-neon-glow rounded-3xl">
            <div className="p-4 bg-primary/20 rounded-2xl">
              <MapPin className="w-7 h-7 text-primary icon-neon-glow" />
            </div>
            <div>
              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest leading-none mb-2">Operational Zone</p>
              <p className="text-xl font-black text-white">Chennai Central, TN</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 card-neon-glow text-white overflow-hidden relative border-none">
            <div className="absolute -top-16 -right-16 opacity-10">
              <Sun className="w-80 h-80 text-warning" />
            </div>
            <CardContent className="p-12 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="space-y-8">
                  <Badge className="bg-primary/20 text-primary border-primary/30 font-black px-6 py-2 uppercase tracking-widest text-[10px]">High Heat Warning</Badge>
                  <div className="flex items-end gap-6">
                    <span className="text-[140px] font-black leading-[0.7] tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">38°</span>
                    <div className="mb-6">
                      <p className="text-4xl font-black text-white uppercase">Partly Cloudy</p>
                      <p className="text-white/40 font-black uppercase tracking-widest text-[10px] mt-1">Feels like 41°C</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                  {[
                    { icon: Droplets, label: 'Humidity', value: '72%' },
                    { icon: Wind, label: 'Wind Speed', value: '14 km/h' },
                    { icon: CloudRain, label: 'Rain Prob.', value: '12%' },
                    { icon: Navigation, label: 'UV Index', value: '9/10' },
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-3xl flex flex-col items-center border border-white/5 btn-hover-effect">
                      <item.icon className="w-8 h-8 mb-4 text-primary opacity-60 icon-neon-glow" />
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-xl font-black text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-3xl flex flex-col">
            <CardHeader className="border-b border-white/5 px-10 py-8">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Trigger Thresholds</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-10 space-y-10">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-warning shadow-[0_0_10px_rgba(255,183,77,0.5)]' },
                { label: 'Heavy Rain', current: '2mm', target: '15mm', progress: 12, color: 'bg-primary shadow-[0_0_10px_rgba(0,172,193,0.5)]' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' },
              ].map((t, i) => (
                <div key={i} className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-white">{t.label}</span>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t.current} / {t.target}</span>
                  </div>
                  <Progress value={t.progress} className="h-2.5 bg-white/5" indicatorClassName={t.color} />
                </div>
              ))}
              <div className="mt-auto p-6 bg-primary/10 rounded-3xl border border-primary/20">
                <p className="text-[10px] text-primary font-black leading-relaxed uppercase tracking-widest flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 icon-neon-glow" /> 
                  <span>Trigger points are verified via ISRO Bhuvan & IMD satellite feeds every 15 mins.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-neon-glow rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-white/5 px-10 py-8">
            <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Hourly Forecast (24h)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex p-12 gap-12">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
                  <div key={h} className="flex flex-col items-center gap-6 min-w-[100px] btn-hover-effect">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{h === 1 ? 'Now' : `${(h + 10) % 12 || 12} ${h + 10 >= 12 ? 'PM' : 'AM'}`}</span>
                    {h % 3 === 0 ? <CloudRain className="w-10 h-10 text-primary icon-neon-glow" /> : <Sun className="w-10 h-10 text-warning icon-neon-glow" />}
                    <span className="text-2xl font-black text-white">{28 + (h % 5)}°</span>
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