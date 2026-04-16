
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
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Admin Console</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[11px] icon-neon-glow">Platform health & macro-risk monitoring.</p>
          </div>
          <Badge className="bg-destructive/20 text-destructive border-destructive/30 font-black px-10 py-3 uppercase text-[10px] shadow-[0_0_20px_rgba(239,83,80,0.4)]">Live Node Status: OK</Badge>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { label: 'Total Workers', value: '2,847', icon: Users, color: 'text-primary' },
            { label: 'Active Policies', value: '2,801', icon: FileCheck, color: 'text-success' },
            { label: 'Premium (W)', value: '₹2.04L', icon: TrendingUp, color: 'text-primary' },
            { label: 'Total Payouts', value: '₹12.0L', icon: Zap, color: 'text-warning' },
            { label: 'Loss Ratio', value: '65%', icon: Activity, color: 'text-destructive' },
          ].map((stat, i) => (
            <Card key={i} className="card-neon-glow p-10 flex flex-col items-center gap-6 rounded-[2.5rem] btn-hover-effect group">
              <div className={cn("p-6 rounded-[2rem] bg-white/5 transition-all group-hover:bg-primary/10", stat.color)}>
                <stat.icon className="w-10 h-10 icon-neon-glow" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">{stat.label}</span>
                <span className="text-3xl font-black text-white">{stat.value}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Card className="lg:col-span-2 card-neon-glow rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-primary/10 border-b border-white/10 px-12 py-10">
              <CardTitle className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-6">
                <Zap className="w-8 h-8 text-primary icon-neon-glow" /> Trigger Control Center
              </CardTitle>
            </CardHeader>
            <CardContent className="p-16 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Curfew Control */}
                <div className="space-y-8 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white/60 uppercase tracking-widest text-[10px]">Curfew / Lockdown</h3>
                    <Badge variant="outline" className="font-black bg-white/5 text-primary border-primary/20 text-[9px]">AUTO-PILOT</Badge>
                  </div>
                  <Select>
                    <SelectTrigger className="h-16 font-black bg-black border-white/10 text-white rounded-[1.25rem] px-6 text-lg">
                      <SelectValue placeholder="Select Target City" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 backdrop-blur-3xl text-white border-white/10">
                      <SelectItem value="chennai">Chennai (CHN)</SelectItem>
                      <SelectItem value="mumbai">Mumbai (BOM)</SelectItem>
                      <SelectItem value="delhi">Delhi (DEL)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-16 bg-primary text-white font-black rounded-full btn-hover-effect text-lg">ACTIVATE TRIGGER</Button>
                </div>

                {/* Outage Control */}
                <div className="space-y-8 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary/20 transition-all">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black text-white/60 uppercase tracking-widest text-[10px]">Platform Outage</h3>
                    <Badge variant="outline" className="font-black bg-white/5 text-primary border-primary/20 text-[9px]">ACTIVE FEED</Badge>
                  </div>
                  <Select>
                    <SelectTrigger className="h-16 font-black bg-black border-white/10 text-white rounded-[1.25rem] px-6 text-lg">
                      <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 backdrop-blur-3xl text-white border-white/10">
                      <SelectItem value="swiggy">Swiggy Delivery</SelectItem>
                      <SelectItem value="zomato">Zomato Fleet</SelectItem>
                      <SelectItem value="zepto">Zepto Dark Stores</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-16 bg-primary text-white font-black rounded-full btn-hover-effect text-lg">ACTIVATE TRIGGER</Button>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 space-y-10">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-white/20" />
                  <h3 className="font-black text-white/30 uppercase tracking-widest text-[11px]">System Debugger / Simulation</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <Select><SelectTrigger className="h-16 font-black bg-black border-white/10 text-white rounded-[1.25rem] px-6"><SelectValue placeholder="Event Type" /></SelectTrigger></Select>
                  <Select><SelectTrigger className="h-16 font-black bg-black border-white/10 text-white rounded-[1.25rem] px-6"><SelectValue placeholder="Region" /></SelectTrigger></Select>
                  <Button className="h-16 bg-destructive/10 border-2 border-destructive/20 text-destructive font-black text-[11px] uppercase rounded-full btn-hover-effect">SIMULATE PAYOUT</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-[2.5rem] overflow-hidden">
            <CardHeader className="border-b border-white/10 px-12 py-10">
              <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Fraud Flags</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-20 text-center text-white/10">
                <ShieldAlert className="w-20 h-20 mx-auto mb-8 opacity-20 icon-neon-glow" />
                <p className="text-[11px] font-black uppercase tracking-widest">Neural Watchdog Active</p>
              </div>
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-white/5 hover:bg-transparent">
                    <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-widest text-white/40">Claim ID</TableHead>
                    <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-widest text-white/40">Score</TableHead>
                    <TableHead className="px-10 py-6 font-black text-[10px] uppercase tracking-widest text-white/40 text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: 'C-9921', score: '0.82', flag: 'GPS' },
                    { id: 'C-9925', score: '0.75', flag: 'ACC' },
                  ].map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="px-10 py-8 font-black text-white">{row.id}</TableCell>
                      <TableCell className="px-10 py-8">
                        <Badge className="bg-destructive/20 text-destructive border-destructive/30 font-black px-4">{row.score}</Badge>
                      </TableCell>
                      <TableCell className="px-10 py-8 text-right">
                        <Button variant="ghost" size="icon" className="text-destructive/40 hover:text-destructive hover:bg-destructive/10"><Ban className="w-5 h-5" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card className="card-neon-glow rounded-[2.5rem] overflow-hidden">
          <CardHeader className="border-b border-white/10 px-12 py-10 flex flex-row justify-between items-center">
            <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Worker Management</CardTitle>
            <div className="flex gap-8">
              <Input className="w-96 h-16 font-black bg-white/5 border-white/10 text-white rounded-[1.5rem] px-8 text-lg" placeholder="Search Global ID..." />
              <Button className="h-16 bg-primary text-white font-black uppercase text-[11px] rounded-full px-12 btn-hover-effect shadow-xl">Bulk Export</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Worker ID</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Name</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Platform</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Region</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40">Risk Profiling</TableHead>
                  <TableHead className="px-12 py-8 font-black text-[10px] uppercase tracking-widest text-white/40 text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 'TP-W8841', name: 'Rajesh Kumar', platform: 'Swiggy', city: 'Chennai', risk: '0.35', status: 'Active' },
                  { id: 'TP-W8842', name: 'Amit Singh', platform: 'Zomato', city: 'Delhi', risk: '0.12', status: 'Active' },
                  { id: 'TP-W8843', name: 'Sunita Rao', platform: 'Zepto', city: 'Mumbai', risk: '0.64', status: 'Flagged' },
                ].map((row, i) => (
                  <TableRow key={i} className="hover:bg-white/5 border-white/5 transition-colors">
                    <TableCell className="px-12 py-10 font-mono text-[11px] font-black text-white/40">{row.id}</TableCell>
                    <TableCell className="px-12 py-10 font-black text-white text-lg">{row.name}</TableCell>
                    <TableCell className="px-12 py-10"><Badge variant="outline" className="font-black text-primary border-primary/30 bg-primary/10 px-4 py-1.5">{row.platform}</Badge></TableCell>
                    <TableCell className="px-12 py-10 font-black text-white/80">{row.city}</TableCell>
                    <TableCell className="px-12 py-10">
                      <div className="w-32 space-y-2">
                        <Progress value={parseFloat(row.risk) * 100} className="h-2 bg-white/5" indicatorClassName={parseFloat(row.risk) > 0.5 ? 'bg-destructive shadow-[0_0_10px_rgba(239,83,80,0.5)]' : 'bg-primary shadow-[0_0_10px_rgba(0,172,193,0.5)]'} />
                        <div className="flex justify-between text-[8px] font-black uppercase text-white/20">
                          <span>SAFE</span>
                          <span>RISK</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-12 py-10 text-right">
                      <Badge className={cn("font-black text-[10px] uppercase px-6 py-2 rounded-full", row.status === 'Active' ? "bg-success/20 text-success border-success/30" : "bg-warning/20 text-warning border-warning/30")}>{row.status}</Badge>
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
