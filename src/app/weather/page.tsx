
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Navigation, Clock, AlertTriangle, ThermometerSun, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        {/* Header Box */}
        <Card className="card-neon-glow p-6 rounded-[2rem] border-none">
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="p-6 bg-black/40 rounded-[1.5rem] border border-white/5 w-full lg:w-auto btn-hover-effect">
              <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 font-headline">Climate Monitor</h1>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
                <p className="text-primary font-black uppercase tracking-widest text-[9px] icon-neon-glow">Live Telemetry Active</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-black/40 border border-white/10 p-6 rounded-[1.5rem] w-full lg:w-auto btn-hover-effect">
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <MapPin className="w-5 h-5 text-primary icon-neon-glow" />
              </div>
              <div>
                <p className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">Active Zone</p>
                <p className="text-base font-black text-white font-headline">Chennai Central (CHN)</p>
              </div>
            </div>
          </header>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <Card className="xl:col-span-8 card-neon-glow border-none overflow-hidden relative rounded-[2.5rem]">
            <CardContent className="p-8 relative z-10 space-y-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="p-8 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] w-full lg:w-auto shadow-2xl relative btn-hover-effect">
                  <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-4 py-1.5 uppercase tracking-widest text-[8px] rounded-full mb-6">
                    <ThermometerSun className="w-3.5 h-3.5 mr-2" /> High Heat Index
                  </Badge>
                  <div className="flex items-end gap-5">
                    <span className="text-[60px] md:text-[80px] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] font-headline">38°</span>
                    <div className="mb-3 space-y-1">
                      <p className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none font-headline">Partly<br/>Cloudy</p>
                      <p className="text-primary font-black uppercase tracking-widest text-[8px] icon-neon-glow">Feels 41.2°C</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                  {[
                    { icon: Droplets, label: 'Humidity', value: '72%', color: 'text-primary' },
                    { icon: Wind, label: 'Wind', value: '14 kph', color: 'text-white' },
                    { icon: CloudRain, label: 'Precip.', value: '12%', color: 'text-primary' },
                    { icon: Navigation, label: 'UV Index', value: '9 High', color: 'text-warning' },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-black/40 backdrop-blur-md rounded-[1.5rem] flex flex-col items-center border border-white/5 btn-hover-effect min-w-[110px]">
                      <div className="p-2.5 bg-white/5 rounded-xl mb-2">
                        <item.icon className={cn("w-5 h-5 icon-neon-glow", item.color)} />
                      </div>
                      <span className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-base font-black text-white font-headline">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="xl:col-span-4 card-neon-glow border-none flex flex-col overflow-hidden rounded-[2.5rem]">
            <CardHeader className="bg-primary/10 border-b border-white/5 px-8 py-5">
              <CardTitle className="text-base font-black text-white uppercase tracking-widest flex items-center gap-3 font-headline">
                <div className="p-1.5 bg-primary/20 rounded-xl">
                  <Zap className="w-4 h-4 text-primary icon-neon-glow" />
                </div> Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-6 space-y-6">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-warning' },
                { label: 'Heavy Rain', current: '2.4mm', target: '15mm', progress: 12, color: 'bg-primary' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-primary/60' },
              ].map((t, i) => (
                <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-[1.5rem] space-y-3 btn-hover-effect">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xs font-black text-white uppercase tracking-tight font-headline">{t.label}</span>
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">{t.current} / {t.target}</span>
                  </div>
                  <Progress 
                    value={t.progress} 
                    className="h-2 bg-white/5" 
                    indicatorClassName={cn(t.color, "shadow-[0_0_10px_currentColor]")}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
