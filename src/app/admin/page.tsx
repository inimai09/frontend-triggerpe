
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  FileCheck, 
  TrendingUp, 
  Zap, 
  Activity, 
  ShieldAlert, 
  BarChart3, 
  ChevronRight, 
  BrainCircuit, 
  Eye, 
  Fingerprint,
  CloudRain
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';
import { DashboardLayout } from '@/components/DashboardLayout';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function AdminPage() {
  const { toast } = useToast();
  const [isSimulating, setIsSimulating] = useState(false);

  const stats = [
    { label: 'Total Workers', value: '2,847', icon: Users, color: 'text-primary' },
    { label: 'Loss Ratio', value: '58.4%', icon: Activity, color: 'text-success' },
    { label: 'Premium Pool', value: '₹2.04L', icon: TrendingUp, color: 'text-primary' },
    { label: 'Total Payouts', value: '₹12.0L', icon: Zap, color: 'text-warning' },
    { label: 'Fraud Flagged', value: '1.2%', icon: ShieldAlert, color: 'text-destructive' },
  ];

  const pieData = [
    { name: 'Rain', value: 45, color: '#00ACC1' },
    { name: 'Heat', value: 30, color: '#FFB74D' },
    { name: 'Outage', value: 15, color: '#26A69A' },
    { name: 'AQI', value: 10, color: '#00838F' },
  ];

  const predictiveData = [
    { day: 'Mon', claims: 120 },
    { day: 'Tue', claims: 140 },
    { day: 'Wed', claims: 450 }, // Rain forecast
    { day: 'Thu', claims: 210 },
    { day: 'Fri', claims: 180 },
    { day: 'Sat', claims: 110 },
    { day: 'Sun', claims: 90 },
  ];

  const handleSimulateDisruption = () => {
    setIsSimulating(true);
    toast({
      title: "Global Trigger Initiated",
      description: "Simulating heavy rainstorm in Chennai Central zone (55mm/hr).",
    });
    setTimeout(() => {
      setIsSimulating(false);
      toast({
        title: "Automated Payouts Started",
        description: "Neural engine approved 450 claims. UPI transfers initiated.",
      });
    }, 4000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500 pb-10">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-white font-headline tracking-tighter uppercase">Admin Insights</h1>
            <p className="text-white/60 font-medium mt-1">Platform macro-risk, predictive models, and fraud oversight.</p>
          </div>
          <Button onClick={handleSimulateDisruption} disabled={isSimulating} className="bg-destructive hover:bg-destructive/90 text-white rounded-full font-black px-8 h-12 uppercase tracking-tight shadow-xl group">
             {isSimulating ? "Processing..." : "Trigger Global Disruption"}
             <Zap className={cn("ml-2 w-4 h-4", isSimulating && "animate-pulse")} />
          </Button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2rem] p-6 text-center hover:border-primary/40 transition-all duration-300 group">
              <div className={cn("p-4 rounded-full bg-white/5 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-white tracking-tighter">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Analytics */}
          <div className="xl:col-span-2 space-y-6">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
              <CardHeader className="px-8 py-6 border-b border-white/10">
                <CardTitle className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-primary" /> Predictive Claim Volume (Forecast)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={predictiveData}>
                        <XAxis dataKey="day" stroke="rgba(255,255,255,0.4)" fontSize={10} axisLine={false} tickLine={false} />
                        <YAxis stroke="rgba(255,255,255,0.4)" fontSize={10} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                        <Line type="monotone" dataKey="claims" stroke="#00ACC1" strokeWidth={4} dot={{ r: 4, fill: '#00ACC1' }} />
                      </LineChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="mt-6 p-4 bg-primary/10 rounded-2xl border border-primary/20 flex items-start gap-4">
                    <BrainCircuit className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-white/70 leading-relaxed">
                       <span className="font-black text-primary">Neural Alert:</span> High probability disruption forecasted for Wednesday due to Cyclone alert. Recommending +20% liquidity buffer in payout wallets.
                    </p>
                 </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
              <CardHeader className="px-8 py-6 border-b border-white/10">
                <CardTitle className="text-sm font-black text-white uppercase tracking-widest">Neural Fraud Alerts</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-white/5 border-none">
                    <TableRow className="border-white/10">
                      <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase h-12">Worker ID</TableHead>
                      <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase h-12">Anomalies</TableHead>
                      <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase h-12">Risk Index</TableHead>
                      <TableHead className="px-10 font-black text-white/40 text-[9px] uppercase h-12 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: 'W-9921', flag: 'GPS Spoofing (Emulator)', score: '0.94', color: 'text-destructive' },
                      { id: 'W-9925', flag: 'Historical Gap Mismatch', score: '0.75', color: 'text-warning' },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors h-14">
                        <TableCell className="px-10 font-black text-white">{row.id}</TableCell>
                        <TableCell className="px-10 text-xs font-bold text-white/60 uppercase">{row.flag}</TableCell>
                        <TableCell className="px-10 font-black text-primary">{row.score}</TableCell>
                        <TableCell className="px-10 text-right space-x-2">
                          <Button variant="outline" size="sm" className="h-8 rounded-full text-destructive border-destructive/20 bg-destructive/10 text-[9px] font-black uppercase">Suspend Shield</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Trigger Control */}
          <div className="space-y-6">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem]">
              <CardHeader className="px-8 py-6 border-b border-white/10">
                <CardTitle className="text-sm font-black text-white flex items-center gap-3 uppercase tracking-widest">
                  <ShieldAlert className="w-4 h-4 text-destructive" /> Simulation Hub
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Platform Availability</p>
                  <Select>
                    <SelectTrigger className="h-14 rounded-2xl bg-white/5 border-white/10 font-bold text-xs text-white"><SelectValue placeholder="Select Platform" /></SelectTrigger>
                    <SelectContent className="bg-black border-white/10 text-white"><SelectItem value="sw">Swiggy</SelectItem><SelectItem value="zo">Zomato</SelectItem></SelectContent>
                  </Select>
                  <Button className="w-full h-14 bg-primary text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">Declare Outage</Button>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Weather Telemetry Override</p>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-6">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase text-white/60">
                       <span>Rainfall (mm)</span>
                       <span className="text-primary">55mm</span>
                     </div>
                     <Slider defaultValue={[55]} max={100} step={1} className="py-2" />
                     <Button className="w-full h-12 border border-primary text-primary bg-primary/5 rounded-full font-black text-[10px] uppercase">Force Trigger Approval</Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                   <div className="flex items-center gap-4 p-4 bg-success/5 rounded-2xl border border-success/20">
                      <Fingerprint className="w-6 h-6 text-success" />
                      <div className="min-w-0">
                         <p className="text-[9px] font-black text-success uppercase">Auto-Settle Protocol</p>
                         <p className="text-[10px] font-medium text-white/40 truncate">Instant UPI settlement enabled.</p>
                      </div>
                   </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] p-8 text-center space-y-4">
               <Eye className="w-8 h-8 text-primary mx-auto" />
               <h4 className="text-lg font-black text-white tracking-tight">Macro Risk Heatmap</h4>
               <p className="text-[10px] font-medium text-white/40 leading-relaxed uppercase tracking-widest">
                  Live visualization of disruption pockets across major delivery hubs.
               </p>
               <div className="h-32 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                  <Activity className="w-10 h-10 text-primary/20 animate-pulse" />
               </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
