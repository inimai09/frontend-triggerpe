"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function WeatherPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-headline font-bold text-foreground">Climate Monitor</h1>
          <p className="text-secondary-foreground/60 font-medium">Real-time data for your operational zone.</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Current Zone</p>
            <p className="font-bold text-foreground">Chennai Central, TN</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-white border-none shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Sun className="w-48 h-48" />
          </div>
          <CardContent className="p-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">High Heat Alert</Badge>
                <div className="flex items-end gap-3">
                  <span className="text-8xl font-black font-headline tracking-tighter">38°</span>
                  <div className="mb-4">
                    <p className="text-xl font-bold">Partly Cloudy</p>
                    <p className="text-white/60 font-medium">Feels like 41°C</p>
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
                  <div key={i} className="p-4 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center">
                    <item.icon className="w-5 h-5 mb-2 opacity-60" />
                    <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{item.label}</span>
                    <span className="text-sm font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Trigger Probability</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 space-y-6">
            {[
              { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-orange-400' },
              { label: 'Heavy Rain', current: '2mm', target: '15mm', progress: 12, color: 'bg-cyan-500' },
              { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-amber-500' },
            ].map((t, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-foreground">{t.label}</span>
                  <span className="text-xs font-bold text-muted-foreground">{t.current} / {t.target}</span>
                </div>
                <Progress value={t.progress} className="h-2 bg-muted" indicatorClassName={t.color} />
              </div>
            ))}
            <div className="mt-auto p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-xs text-primary font-bold leading-relaxed">
                Trigger points are checked every 15 minutes via ISRO Bhuvan & IMD satellite feeds.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}