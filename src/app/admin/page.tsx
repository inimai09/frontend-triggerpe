"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, Users, TrendingUp, AlertTriangle, Activity, Globe, Zap, FileCheck, Ban } from 'lucide-react';
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
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Admin Console</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Monitoring platform health & risk exposure.</p>
          </div>
          <Badge className="bg-destructive text-white font-black px-8 py-2.5 uppercase text-xs shadow-[0_0_15px_rgba(239,83,80,0.4)]">System Live</Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { label: 'Total Workers', value: '2,847', icon: Users, color: 'text-primary' },
            { label: 'Active Policies', value: '2,801', icon: FileCheck, color: 'text-success' },
            { label: 'Premium (W)', value: '₹2.04L', icon: TrendingUp, color: 'text-primary' },
            { label: 'Total Payouts', value: '₹12.0L', icon: Zap, color: 'text-warning' },
            { label: 'Loss Ratio', value: '65%', icon: Activity, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="card-neon-glow p-8 flex items-center gap-6 rounded-3xl btn-hover-effect">
              <div className={cn("p-4 rounded-2xl bg-white/5", stat.color)}>
                <stat.icon className="w-7 h-7 icon-neon-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-2xl font-black text-white">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Card className="lg:col-span-2 card-neon-glow rounded-3xl overflow-hidden">
            <CardHeader className="bg-primary/10 border-b border-white/5 px-10 py-8">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                <Zap className="w-6 h-6 text-primary icon-neon-glow" /> Trigger Control Panel
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Curfew Control */}
                <div className="space-y-5 p-8 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white/60 uppercase tracking-widest text-[10px]">Curfew / Lockdown</h3>
                    <Badge variant="outline" className="font-black bg-white/5 text-primary border-primary/20">AUTO</Badge>
                  </div>
                  <Select>
                    <SelectTrigger className="h-14 font-bold bg-black/40 border-white/10 text-white rounded-2xl">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 backdrop-blur-xl text-white border-white/10">
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-14 bg-primary text-white font-black rounded-full btn-hover-effect">ACTIVATE TRIGGER</Button>
                </div>

                {/* Outage Control */}
                <div className="space-y-5 p-8 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white/60 uppercase tracking-widest text-[10px]">Platform Outage</h3>
                    <Badge variant="outline" className="font-black bg-white/5 text-primary border-primary/20">AUTO</Badge>
                  </div>
                  <Select>
                    <SelectTrigger className="h-14 font-bold bg-black/40 border-white/10 text-white rounded-2xl">
                      <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 backdrop-blur-xl text-white border-white/10">
                      <SelectItem value="swiggy">Swiggy</SelectItem>
                      <SelectItem value="zomato">Zomato</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-14 bg-primary text-white font-black rounded-full btn-hover-effect">ACTIVATE TRIGGER</Button>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-8">
                <h3 className="font-black text-white/40 uppercase tracking-widest text-[10px]">Manual Simulation (Debug)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <Select><SelectTrigger className="h-14 font-bold bg-black/40 border-white/10 text-white rounded-2xl"><SelectValue placeholder="Trigger" /></SelectTrigger></Select>
                  <Select><SelectTrigger className="h-14 font-bold bg-black/40 border-white/10 text-white rounded-2xl"><SelectValue placeholder="City" /></SelectTrigger></Select>
                  <Button className="h-14 bg-destructive text-white font-black text-xs uppercase rounded-full btn-hover-effect">SIMULATE PAYOUT</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-3xl">
            <CardHeader className="border-b border-white/5 px-10 py-8">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Fraud Alerts</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-16 text-center text-white/20">
                <ShieldAlert className="w-16 h-16 mx-auto mb-6 opacity-30 icon-neon-glow" />
                <p className="text-[10px] font-black uppercase tracking-widest">No active fraud flags</p>
              </div>
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-white/5">
                    <TableHead className="px-10 font-black text-[9px] uppercase tracking-widest text-white/40">Claim</TableHead>
                    <TableHead className="px-10 font-black text-[9px] uppercase tracking-widest text-white/40">Score</TableHead>
                    <TableHead className="px-10 font-black text-[9px] uppercase tracking-widest text-white/40 text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 'C-9921', score: '0.82', flag: 'GPS' },
                    { id: 'C-9925', score: '0.75', flag: 'ACC' },
                  ].map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="px-10 py-6 font-bold text-white">{row.id}</TableCell>
                      <TableCell className="px-10 py-6"><Badge className="bg-destructive/20 text-destructive border-destructive/30">{row.score}</Badge></TableCell>
                      <TableCell className="px-10 py-6 text-right">
                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10"><Ban className="w-4 h-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card className="card-neon-glow rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-white/5 px-10 py-8 flex flex-row justify-between items-center">
            <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Worker Management</CardTitle>
            <div className="flex gap-6">
              <Input className="w-72 h-12 font-bold bg-white/5 border-white/10 text-white rounded-2xl" placeholder="Search Partner ID..." />
              <Button className="h-12 bg-primary text-white font-black uppercase text-[10px] rounded-full px-8 btn-hover-effect">Export</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5">
                  <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Worker ID</TableHead>
                  <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Name</TableHead>
                  <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Platform</TableHead>
                  <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">City</TableHead>
                  <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40">Risk</TableHead>
                  <TableHead className="px-10 py-6 font-black text-[9px] uppercase tracking-widest text-white/40 text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 'TP-W8841', name: 'Rajesh Kumar', platform: 'Swiggy', city: 'Chennai', risk: '0.35', status: 'Active' },
                  { id: 'TP-W8842', name: 'Amit Singh', platform: 'Zomato', city: 'Delhi', risk: '0.12', status: 'Active' },
                  { id: 'TP-W8843', name: 'Sunita Rao', platform: 'Zepto', city: 'Mumbai', risk: '0.64', status: 'Flagged' },
                ].map((row, i) => (
                  <TableRow key={i} className="hover:bg-white/5 border-white/5 transition-colors">
                    <TableCell className="px-10 py-8 font-mono text-[10px] font-black text-white/60">{row.id}</TableCell>
                    <TableCell className="px-10 py-8 font-black text-white">{row.name}</TableCell>
                    <TableCell className="px-10 py-8"><Badge variant="outline" className="font-black text-primary border-primary/30 bg-primary/10">{row.platform}</Badge></TableCell>
                    <TableCell className="px-10 py-8 font-bold text-white/80">{row.city}</TableCell>
                    <TableCell className="px-10 py-8">
                      <div className="w-24">
                        <Progress value={parseFloat(row.risk) * 100} className="h-1.5 bg-white/5" indicatorClassName={parseFloat(row.risk) > 0.5 ? 'bg-destructive' : 'bg-primary shadow-[0_0_8px_rgba(0,172,193,0.5)]'} />
                      </div>
                    </TableCell>
                    <TableCell className="px-10 py-8 text-right">
                      <Badge className={cn("font-black text-[9px] uppercase tracking-widest px-4", row.status === 'Active' ? "bg-success/20 text-success border-success/30" : "bg-warning/20 text-warning border-warning/30")}>{row.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}