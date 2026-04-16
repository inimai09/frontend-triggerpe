
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
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        {/* Header Box */}
        <Card className="card-neon-glow p-8 rounded-[2.5rem] border-none">
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="p-6 bg-black/40 rounded-[2rem] border border-white/5 w-full lg:w-auto btn-hover-effect">
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Climate Monitor</h1>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
                <p className="text-primary font-black uppercase tracking-widest text-[10px] icon-neon-glow">Live Telemetry Active</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 bg-black/40 border border-white/10 p-6 rounded-[2rem] w-full lg:w-auto btn-hover-effect">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <MapPin className="w-6 h-6 text-primary icon-neon-glow" />
              </div>
              <div>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Active Zone</p>
                <p className="text-lg font-black text-white">Chennai Central (CHN)</p>
              </div>
            </div>
          </header>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* Main Weather Hero */}
          <Card className="xl:col-span-8 card-neon-glow border-none overflow-hidden relative group rounded-[3rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            
            <CardContent className="p-10 md:p-12 relative z-10 space-y-10">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                {/* Big Temperature Box */}
                <div className="p-10 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] w-full lg:w-auto shadow-2xl relative btn-hover-effect">
                  <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-6 py-2 uppercase tracking-widest text-[9px] rounded-full mb-8">
                    <ThermometerSun className="w-4 h-4 mr-2" /> High Heat Index
                  </Badge>
                  
                  <div className="flex items-end gap-6">
                    <span className="text-[80px] md:text-[110px] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">38°</span>
                    <div className="mb-4 space-y-1">
                      <p className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">Partly<br/>Cloudy</p>
                      <p className="text-primary font-black uppercase tracking-widest text-[10px] icon-neon-glow">Feels 41.2°C</p>
                    </div>
                  </div>
                </div>
                
                {/* Metrics Grid Box */}
                <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                  {[
                    { icon: Droplets, label: 'Humidity', value: '72%', color: 'text-primary' },
                    { icon: Wind, label: 'Wind', value: '14 kph', color: 'text-white' },
                    { icon: CloudRain, label: 'Precip.', value: '12%', color: 'text-primary' },
                    { icon: Navigation, label: 'UV Index', value: '9 High', color: 'text-warning' },
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-black/40 backdrop-blur-md rounded-[2rem] flex flex-col items-center border border-white/5 btn-hover-effect min-w-[130px]">
                      <item.icon className={cn("w-6 h-6 mb-3 icon-neon-glow", item.color)} />
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-lg font-black text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trigger Threshold Monitor Box */}
          <Card className="xl:col-span-4 card-neon-glow border-none flex flex-col overflow-hidden rounded-[3rem]">
            <CardHeader className="bg-primary/10 border-b border-white/5 px-10 py-8">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                <Zap className="w-5 h-5 text-primary icon-neon-glow" /> Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-8 space-y-8">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-warning' },
                { label: 'Heavy Rain', current: '2.4mm', target: '15mm', progress: 12, color: 'bg-primary' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-primary/60' },
              ].map((t, i) => (
                <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-[2rem] space-y-4 btn-hover-effect">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-sm font-black text-white uppercase tracking-tight">{t.label}</span>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{t.current} / {t.target}</span>
                  </div>
                  <Progress 
                    value={t.progress} 
                    className="h-2.5 bg-white/5" 
                    indicatorClassName={cn(t.color, "shadow-[0_0_10px_currentColor]")}
                  />
                </div>
              ))}
              
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 flex items-start gap-4 btn-hover-effect">
                <AlertTriangle className="w-6 h-6 text-primary shrink-0 icon-neon-glow mt-0.5" /> 
                <p className="text-[10px] font-bold text-white/60 leading-relaxed uppercase tracking-tight">
                  Verification via <span className="text-white font-black">ISRO Telemetry</span>. Claims auto-initiate at 100%.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Forecast Box */}
        <Card className="card-neon-glow border-none rounded-[3rem] overflow-hidden">
          <CardHeader className="border-b border-white/5 px-10 py-8 flex flex-row justify-between items-center">
            <CardTitle className="text-xl font-black text-white uppercase tracking-tighter">24-Hour Forecast</CardTitle>
            <div className="flex items-center gap-3 text-white/30 text-[9px] font-black uppercase tracking-widest bg-white/5 px-5 py-2 rounded-full border border-white/5">
              <Clock className="w-4 h-4" /> Live Tracking
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex p-10 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((h) => (
                  <div key={h} className="flex flex-col items-center gap-6 p-8 min-w-[120px] bg-black/40 border border-white/5 rounded-[2.5rem] btn-hover-effect group cursor-default">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest group-hover:text-primary transition-colors">
                      {h === 1 ? 'Now' : `${(h + 10) % 12 || 12}${h + 10 >= 12 ? 'pm' : 'am'}`}
                    </span>
                    <div className="relative">
                      {h % 3 === 0 ? (
                        <CloudRain className="w-10 h-10 text-primary icon-neon-glow group-hover:scale-110 transition-transform" />
                      ) : (
                        <Sun className="w-10 h-10 text-warning icon-neon-glow group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl font-black text-white tracking-tighter">{28 + (h % 5)}°</span>
                      <span className="text-[8px] font-black text-primary/40 uppercase tracking-widest">12% Rain</span>
                    </div>
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
