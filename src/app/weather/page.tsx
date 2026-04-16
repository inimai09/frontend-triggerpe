"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Sun, Wind, Droplets, MapPin, Clock, ThermometerSun, Zap, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-[#006064]">Climate Monitor</h1>
            <p className="text-[#00838F] font-medium mt-1">Live telemetry for your operational zone.</p>
          </div>
          <Badge className="bg-[#E0F7FA] text-[#00ACC1] hover:bg-[#E0F7FA] border-none font-bold px-4 py-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> CHENNAI CENTRAL
          </Badge>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Weather Card */}
          <Card className="lg:col-span-8 bg-white border-none card-shadow rounded-xl">
            <CardContent className="p-10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                  <Badge className="bg-[#FFB74D]/10 text-[#FFB74D] border-none font-bold text-[10px] uppercase">
                    High Heat Index
                  </Badge>
                  <span className="text-[#00838F]/40 text-[10px] font-bold flex items-center gap-1"><Clock className="w-3 h-3"/> UPDATED 4 MINS AGO</span>
                </div>
                <div className="flex items-end gap-6 justify-center md:justify-start">
                  <span className="text-8xl font-black text-[#006064]">38°</span>
                  <div className="mb-3">
                    <p className="text-3xl font-black text-[#00ACC1]">Partly Cloudy</p>
                    <p className="text-sm font-bold text-[#00838F]">Feels like 41.2°C</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {[
                  { icon: Droplets, label: 'Humidity', value: '72%', color: 'text-[#00ACC1]' },
                  { icon: Wind, label: 'Wind', value: '14 kph', color: 'text-[#00ACC1]' },
                  { icon: CloudRain, label: 'Precip.', value: '12%', color: 'text-[#00ACC1]' },
                  { icon: Navigation, label: 'UV Index', value: '9 High', color: 'text-[#FFB74D]' },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-[#F1F5F9]/50 rounded-xl flex flex-col items-center min-w-[120px]">
                    <item.icon className={cn("w-6 h-6 mb-2", item.color)} />
                    <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-lg font-black text-[#006064]">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Threshold Progress */}
          <Card className="lg:col-span-4 bg-white border-none card-shadow rounded-xl">
            <CardHeader className="px-8 py-6 border-b border-border">
              <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#FFB74D]" /> Trigger Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {[
                { label: 'Extreme Heat', current: '38°C', target: '42°C', progress: 78, color: 'bg-[#FFB74D]' },
                { label: 'Heavy Rain', current: '2.4mm', target: '15mm', progress: 12, color: 'bg-[#00ACC1]' },
                { label: 'AQI Warning', current: '184', target: '300', progress: 55, color: 'bg-[#00838F]' },
              ].map((t, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-[#006064]">{t.label}</span>
                    <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">{t.current} / {t.target}</span>
                  </div>
                  <Progress value={t.progress} className="h-2.5 bg-[#E0F7FA]" indicatorClassName={t.color} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Hourly Forecast */}
        <Card className="bg-white border-none card-shadow rounded-xl">
          <CardHeader className="px-8 py-6">
            <CardTitle className="text-lg font-black text-[#006064]">Hourly Forecast</CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-8">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">{i}:00</span>
                    <Sun className="w-6 h-6 text-[#FFB74D]" />
                    <span className="text-lg font-black text-[#006064]">{30 + Math.floor(Math.random() * 5)}°</span>
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
