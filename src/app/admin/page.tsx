"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, Users, TrendingUp, Activity, Zap, FileCheck, Ban, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function AdminPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        {/* Boxed Header */}
        <Card className="card-neon-glow p-8 rounded-[3rem] border-none">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter font-headline">Admin Console</h1>
              <p className="text-primary font-black uppercase tracking-widest text-[9px] icon-neon-glow">Platform health & macro-risk monitoring.</p>
            </div>
            <Badge className="bg-destructive/20 text-destructive border-destructive/30 font-black px-6 py-2 uppercase text-[10px] shadow-[0_0_20px_rgba(239,83,80,0.4)] rounded-full">Live Node Status: OK</Badge>
          </header>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: 'Total Workers', value: '2,847', icon: Users, color: 'text-primary' },
            { label: 'Active Policies', value: '2,801', icon: FileCheck, color: 'text-success' },
            { label: 'Premium (W)', value: '₹2.04L', icon: TrendingUp, color: 'text-primary' },
            { label: 'Total Payouts', value: '₹12.0L', icon: Zap, color: 'text-warning' },
            { label: 'Loss Ratio', value: '65%', icon: Activity, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="card-neon-glow p-6 flex flex-col items-center gap-4 rounded-full btn-hover-effect group">
              <div className={cn("p-4 rounded-full bg-white/5 transition-all group-hover:bg-primary/10 shadow-sm border border-white/5", stat.color)}>
                <stat.icon className="w-8 h-8 icon-neon-glow" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-2xl font-black text-white tracking-tighter font-headline">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 card-neon-glow rounded-[2.5rem] border-none overflow-hidden">
            <CardHeader className="bg-primary/10 border-b border-white/10 px-8 py-6">
              <CardTitle className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-4 font-headline">
                <div className="p-3 bg-primary/20 rounded-full border border-primary/30">
                  <Zap className="w-6 h-6 text-primary icon-neon-glow" />
                </div> Trigger Control Center
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Curfew Control */}
                <div className="space-y-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white/60 uppercase tracking-widest text-[9px] font-headline">Curfew / Lockdown</h3>
                    <Badge variant="outline" className="font-black bg-white/5 text-primary border-primary/20 text-[8px] px-3 py-1 rounded-full uppercase tracking-widest">AUTO-PILOT</Badge>
                  </div>
                  <Select>
                    <SelectTrigger className="h-14 font-black bg-black border-white/10 text-white rounded-full px-6 text-lg">
                      <SelectValue placeholder="Select Target City" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-3xl text-white border-white/10">
                      <SelectItem value="chennai">Chennai (CHN)</SelectItem>
                      <SelectItem value="mumbai">Mumbai (BOM)</SelectItem>
                      <SelectItem value="delhi">Delhi (DEL)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-14 bg-primary text-white font-black rounded-full btn-hover-effect text-lg shadow-xl uppercase font-headline">ACTIVATE TRIGGER</Button>
                </div>

                {/* Outage Control */}
                <div className="space-y-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white/60 uppercase tracking-widest text-[9px] font-headline">Platform Outage</h3>
                    <Badge variant="outline" className="font-black bg-white/5 text-primary border-primary/20 text-[8px] px-3 py-1 rounded-full uppercase tracking-widest">ACTIVE FEED</Badge>
                  </div>
                  <Select>
                    <SelectTrigger className="h-14 font-black bg-black border-white/10 text-white rounded-full px-6 text-lg">
                      <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-3xl text-white border-white/10">
                      <SelectItem value="swiggy">Swiggy Delivery</SelectItem>
                      <SelectItem value="zomato">Zomato Fleet</SelectItem>
                      <SelectItem value="zepto">Zepto Dark Stores</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-14 bg-primary text-white font-black rounded-full btn-hover-effect text-lg shadow-xl uppercase font-headline">ACTIVATE TRIGGER</Button>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/5 rounded-full border border-white/10">
                    <Terminal className="w-5 h-5 text-white/20" />
                  </div>
                  <h3 className="font-black text-white/30 uppercase tracking-widest text-[10px] font-headline">System Debugger / Simulation</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Select><SelectTrigger className="h-14 font-black bg-black border-white/10 text-white rounded-full px-6 text-sm"><SelectValue placeholder="Event Type" /></SelectTrigger></Select>
                  <Select><SelectTrigger className="h-14 font-black bg-black border-white/10 text-white rounded-full px-6 text-sm"><SelectValue placeholder="Region" /></SelectTrigger></Select>
                  <Button className="h-14 bg-destructive/10 border-2 border-destructive/20 text-destructive font-black text-[10px] uppercase rounded-full btn-hover-effect">SIMULATE PAYOUT</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-[2.5rem] border-none overflow-hidden">
            <CardHeader className="bg-white/5 border-b border-white/10 px-8 py-6">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest font-headline">Fraud Flags</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-12 text-center text-white/10">
                <div className="p-5 rounded-full bg-white/5 w-fit mx-auto mb-4 border border-white/10 shadow-sm">
                  <ShieldAlert className="w-12 h-12 opacity-20 icon-neon-glow" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest">Neural Watchdog Active</p>
              </div>
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-white/5 hover:bg-transparent">
                    <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Claim ID</TableHead>
                    <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40">Score</TableHead>
                    <TableHead className="px-8 py-4 font-black text-[9px] uppercase tracking-widest text-white/40 text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 'C-9921', score: '0.82', flag: 'GPS' },
                    { id: 'C-9925', score: '0.75', flag: 'ACC' },
                  ].map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="px-8 py-4 font-black text-white text-base font-headline">{row.id}</TableCell>
                      <TableCell className="px-8 py-4">
                        <Badge className="bg-destructive/20 text-destructive border-destructive/30 font-black px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest">{row.score}</Badge>
                      </TableCell>
                      <TableCell className="px-8 py-4 text-right">
                        <Button variant="ghost" size="icon" className="w-10 h-10 text-destructive/40 hover:text-destructive hover:bg-destructive/10 rounded-full border border-transparent transition-all"><Ban className="w-5 h-5" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
