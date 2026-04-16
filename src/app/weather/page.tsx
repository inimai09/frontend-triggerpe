
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
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Climate Monitor</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[11px] icon-neon-glow flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00ACC1]" />
              Live Parametric Telemetry for your zone
            </p>
          </div>
          <div className="flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-primary/20 p-4 px-8 rounded-[2rem] shadow-2xl">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
              <MapPin className="w-6 h-6 text-primary icon-neon-glow" />
            </div>
            <div>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Active Zone</p>
              <p className="text-lg font-black text-white">Chennai Central (CHN)</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Weather Hero */}
          <Card className="lg:col-span-8 card-neon-glow border-none overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            <div className="absolute -top-32 -right-32 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
              <Sun className="w-[450px] h-[450px] text-warning icon-neon-glow animate-spin-slow" />
            </div>
            
            <CardContent className="p-16 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="space-y-12">
                  <Badge className="bg-warning/20 text-warning border-warning/30 font-black px-8 py-3 uppercase tracking-widest text-[11px] shadow-[0_0_20px_rgba(255,183,77,0.3)]">
                    <ThermometerSun className="w-4 h-4 mr-2" /> High Heat Index Detected
                  </Badge>
                  
                  <div className="flex items-end gap-10">
                    <span className="text-[160px] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">38°</span>
                    <div className="mb-8 space-y-2">
                      <p className="text-5xl font-black text-white uppercase tracking-tighter">Partly Cloudy</p>
                      <p className="text-primary font-black uppercase tracking-widest text-[12px] icon-neon-glow">RealFeel® 41.2°C</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                  {[
                    { icon: Droplets, label: 'Humidity', value: '72%', color: 'text-primary' },
                    { icon: Wind, label: 'Wind', value: '14 kph', color: 'text-white' },
                    { icon: CloudRain, label: 'Precip.', value: '12%', color: 'text-primary' },
                    { icon: Navigation, label: 'UV Index', value: '9 High', color: 'text-warning' },
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-black/40 backdrop-blur-md rounded-[2.5rem] flex flex-col items-center border border-white/5 btn-hover-effect">
                      <item.icon className={cn("w-8 h-8 mb-4 icon-neon-glow", item.color)} />
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">{item.label}</span>
                      <span className="text-xl font-black text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trigger Threshold Monitor */}
          <Card className="lg:col-span-4 card-neon-glow border-none flex flex-col overflow-hidden">
            <CardHeader className="bg-primary/10 border-b border-white/5 px-12 py-10">
              <CardTitle className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-4">
                <Zap className="w-6 h-6 text-primary icon-neon-glow" /> Parametric Triggers
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-12 space-y-12">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-warning' },
                { label: 'Heavy Rain', current: '2.4mm', target: '15mm', progress: 12, color: 'bg-primary' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-primary/60' },
              ].map((t, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-black text-white uppercase tracking-tighter">{t.label}</span>
                    <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{t.current} / {t.target}</span>
                  </div>
                  <div className="relative h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={cn("absolute h-full transition-all duration-1000", t.color)}
                      style={{ width: `${t.progress}%`, boxShadow: '0 0 15px currentColor' }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-8 bg-white/5 rounded-[2rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10 flex items-start gap-5">
                  <AlertTriangle className="w-8 h-8 text-primary shrink-0 icon-neon-glow mt-1" /> 
                  <p className="text-[12px] font-bold text-white/60 leading-relaxed">
                    Trigger validation is powered by <span className="text-white font-black">ISRO Bhuvan</span> telemetry. Claims auto-initiate on reaching 100% threshold.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Forecast Section */}
        <Card className="card-neon-glow border-none rounded-[3rem] overflow-hidden">
          <CardHeader className="border-b border-white/5 px-12 py-10 flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-black text-white uppercase tracking-tighter font-headline">24-Hour Forecast Telemetry</CardTitle>
            <div className="flex items-center gap-3 text-white/30 text-[11px] font-black uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full">
              <Clock className="w-4 h-4" /> Live Tracking Active
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex p-16 gap-16">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((h) => (
                  <div key={h} className="flex flex-col items-center gap-10 min-w-[130px] btn-hover-effect group cursor-default">
                    <span className="text-[11px] font-black text-white/40 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                      {h === 1 ? 'Now' : `${(h + 10) % 12 || 12} ${h + 10 >= 12 ? 'PM' : 'AM'}`}
                    </span>
                    <div className="relative">
                      {h % 4 === 0 ? (
                        <CloudRain className="w-14 h-14 text-primary icon-neon-glow group-hover:scale-110 transition-transform" />
                      ) : (
                        <Sun className="w-14 h-14 text-warning icon-neon-glow group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-black text-white tracking-tighter">{28 + (h % 5)}°</span>
                      <span className="text-[9px] font-black text-primary/40 uppercase tracking-widest mt-2">12% Rain</span>
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
