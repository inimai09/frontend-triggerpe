"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Clock, Zap, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500 pb-10">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-[#006064] font-headline tracking-tighter">Climate Monitor</h1>
            <p className="text-[#00838F] font-medium mt-1">Live telemetry for your operational zone.</p>
          </div>
          <Badge className="bg-white text-[#00ACC1] hover:bg-white border-none font-black px-4 py-2 flex items-center gap-2 rounded-full shadow-sm text-[9px] tracking-widest uppercase hover:scale-110 transition-transform cursor-default">
            <MapPin className="w-3.5 h-3.5" /> CHENNAI CENTRAL
          </Badge>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Weather Card */}
          <Card className="lg:col-span-8 bg-white border-none shadow-sm rounded-[2rem] hover:scale-[1.01] transition-all duration-300">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                  <Badge className="bg-[#FFB74D]/10 text-[#FFB74D] border-none font-black text-[8px] uppercase tracking-widest px-2.5 h-4">
                    High Heat Index
                  </Badge>
                  <span className="text-[#00838F]/40 text-[8px] font-black flex items-center gap-1 uppercase"><Clock className="w-2.5 h-2.5"/> UPDATED 4 MINS AGO</span>
                </div>
                <div className="flex items-end gap-4 justify-center md:justify-start">
                  <span className="text-7xl font-black text-[#006064] tracking-tighter leading-none">38°</span>
                  <div className="mb-1.5">
                    <p className="text-xl font-black text-[#00ACC1] tracking-tight">Partly Cloudy</p>
                    <p className="text-[9px] font-bold text-[#00838F] uppercase">Feels like 41.2°C</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                {[
                  { icon: Droplets, label: 'Humidity', value: '72%', color: 'text-[#00ACC1]' },
                  { icon: Wind, label: 'Wind', value: '14 kph', color: 'text-[#00ACC1]' },
                  { icon: CloudRain, label: 'Precip.', value: '12%', color: 'text-[#00ACC1]' },
                  { icon: Navigation, label: 'UV Index', value: '9 High', color: 'text-[#FFB74D]' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-[#F1F5F9]/50 rounded-[1.5rem] flex flex-col items-center min-w-[100px] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg hover:scale-105 transition-all cursor-default group">
                    <item.icon className={cn("w-4 h-4 mb-1 transition-transform group-hover:scale-110", item.color)} />
                    <span className="text-[7px] font-black text-[#00838F] uppercase tracking-widest mb-0.5">{item.label}</span>
                    <span className="text-xs font-black text-[#006064]">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Threshold Progress */}
          <Card className="lg:col-span-4 bg-white border-none shadow-sm rounded-[2rem] hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-[10px] font-black text-[#006064] flex items-center gap-3 uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5 text-[#FFB74D]" /> Trigger Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-[#FFB74D]' },
                { label: 'Heavy Rain', current: '2.4mm', target: '15mm', progress: 12, color: 'bg-[#00ACC1]' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-[#00838F]' },
              ].map((t, i) => (
                <div key={i} className="space-y-1.5 hover:translate-x-1 transition-transform cursor-default group">
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="font-bold text-[#006064] uppercase group-hover:text-primary transition-colors">{t.label}</span>
                    <span className="font-black text-[#00838F] tracking-tighter">{t.current} / {t.target}</span>
                  </div>
                  <Progress value={t.progress} className="h-1 bg-[#E0F7FA]" indicatorClassName={t.color} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Hourly Forecast */}
        <Card className="bg-white border-none shadow-sm rounded-[2rem] hover:scale-[1.005] transition-all duration-300">
          <CardHeader className="px-6 pt-6 pb-2">
            <CardTitle className="text-[10px] font-black text-[#006064] uppercase tracking-widest">Hourly Forecast</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-8 py-2">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 shrink-0 hover:scale-110 transition-transform cursor-default group">
                    <span className="text-[8px] font-black text-[#00838F] uppercase tracking-widest group-hover:text-primary">{i}:00</span>
                    <div className="p-2 bg-[#F1F5F9]/50 rounded-full group-hover:bg-[#E0F7FA] transition-colors shadow-sm">
                      <Sun className="w-4 h-4 text-[#FFB74D]" />
                    </div>
                    <span className="text-xs font-black text-[#006064] tracking-tighter">{30 + Math.floor(Math.random() * 5)}°</span>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
