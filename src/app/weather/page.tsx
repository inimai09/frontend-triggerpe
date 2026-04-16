"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Navigation, Clock, AlertTriangle, CloudSun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function WeatherPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">Climate Monitor</h1>
          <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">Real-time parametric data for your zone.</p>
        </div>
        <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-border">
          <div className="p-3 bg-[#E0F7FA] rounded-xl">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Operational Zone</p>
            <p className="font-black text-[#006064]">Chennai Central, TN</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-[#00ACC1] text-white border-none shadow-xl overflow-hidden relative">
          <div className="absolute -top-10 -right-10 opacity-10">
            <Sun className="w-64 h-64" />
          </div>
          <CardContent className="p-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-none font-black px-4 py-1.5 uppercase tracking-widest text-xs">High Heat Warning</Badge>
                <div className="flex items-end gap-4">
                  <span className="text-[120px] font-black leading-[0.8] tracking-tighter">38°</span>
                  <div className="mb-4">
                    <p className="text-3xl font-black">Partly Cloudy</p>
                    <p className="text-white/70 font-bold uppercase tracking-widest text-xs">Feels like 41°C</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {[
                  { icon: Droplets, label: 'Humidity', value: '72%' },
                  { icon: Wind, label: 'Wind Speed', value: '14 km/h' },
                  { icon: CloudRain, label: 'Rain Prob.', value: '12%' },
                  { icon: Navigation, label: 'UV Index', value: '9/10' },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white/10 rounded-2xl flex flex-col items-center">
                    <item.icon className="w-6 h-6 mb-3 opacity-60" />
                    <span className="text-[10px] font-black opacity-50 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-lg font-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-border shadow-sm flex flex-col">
          <CardHeader className="border-b px-8 py-6">
            <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Trigger Thresholds</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-8 space-y-8">
            {[
              { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-[#FFB74D]' },
              { label: 'Heavy Rain', current: '2mm', target: '15mm', progress: 12, color: 'bg-[#4FC3F7]' },
              { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-amber-500' },
            ].map((t, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black text-[#006064]">{t.label}</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t.current} / {t.target}</span>
                </div>
                <Progress value={t.progress} className="h-2.5 bg-[#E0F7FA]" indicatorClassName={t.color} />
              </div>
            ))}
            <div className="mt-auto p-5 bg-[#E0F7FA] rounded-2xl border border-primary/10">
              <p className="text-xs text-[#00838F] font-black leading-relaxed uppercase tracking-widest">
                <AlertTriangle className="w-4 h-4 inline mr-2" /> Trigger points are verified via ISRO Bhuvan & IMD satellite feeds every 15 mins.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-border shadow-sm overflow-hidden">
        <CardHeader className="border-b px-8 py-6">
          <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Hourly Forecast (24h)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex p-8 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
                <div key={h} className="flex flex-col items-center gap-4 min-w-[80px]">
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">{h === 1 ? 'Now' : `${(h + 10) % 12 || 12} ${h + 10 >= 12 ? 'PM' : 'AM'}`}</span>
                  {h % 3 === 0 ? <CloudRain className="w-8 h-8 text-primary" /> : <Sun className="w-8 h-8 text-warning" />}
                  <span className="text-xl font-black text-[#006064]">{28 + (h % 5)}°</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}