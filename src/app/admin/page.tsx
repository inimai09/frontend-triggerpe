"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, Users, TrendingUp, AlertTriangle, Activity, Globe, Zap, FileCheck, Ban } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AdminPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">Admin Console</h1>
          <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">Monitoring platform health & risk exposure.</p>
        </div>
        <Badge className="bg-destructive text-white font-black px-6 py-2 uppercase">System Live</Badge>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          { label: 'Total Workers', value: '2,847', icon: Users, color: 'text-primary' },
          { label: 'Active Policies', value: '2,801', icon: FileCheck, color: 'text-success' },
          { label: 'Premium (W)', value: '₹2.04L', icon: TrendingUp, color: 'text-primary' },
          { label: 'Total Payouts', value: '₹12.0L', icon: Zap, color: 'text-warning' },
          { label: 'Loss Ratio', value: '65%', icon: Activity, color: 'text-destructive' },
        ].map((stat, i) => (
          <Card key={i} className="bg-white border border-border shadow-sm p-6 flex items-center gap-4">
            <div className={cn("p-3 rounded-xl bg-[#E0F7FA]", stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</span>
              <span className="text-xl font-black text-[#006064]">{stat.value}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-white border border-border shadow-sm overflow-hidden">
          <CardHeader className="bg-[#E0F7FA] border-b px-8 py-6">
            <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" /> Trigger Control Panel
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Curfew Control */}
              <div className="space-y-4 p-6 bg-muted/30 rounded-2xl border-2 border-border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-black text-[#006064] uppercase tracking-widest text-xs">Curfew / Lockdown</h3>
                  <Badge variant="outline" className="font-black bg-white">AUTO</Badge>
                </div>
                <Select>
                  <SelectTrigger className="h-12 font-bold bg-white">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full h-12 bg-primary font-black rounded-xl">ACTIVATE TRIGGER</Button>
              </div>

              {/* Outage Control */}
              <div className="space-y-4 p-6 bg-muted/30 rounded-2xl border-2 border-border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-black text-[#006064] uppercase tracking-widest text-xs">Platform Outage</h3>
                  <Badge variant="outline" className="font-black bg-white">AUTO</Badge>
                </div>
                <Select>
                  <SelectTrigger className="h-12 font-bold bg-white">
                    <SelectValue placeholder="Select Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="swiggy">Swiggy</SelectItem>
                    <SelectItem value="zomato">Zomato</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full h-12 bg-primary font-black rounded-xl">ACTIVATE TRIGGER</Button>
              </div>
            </div>

            <div className="pt-8 border-t space-y-6">
              <h3 className="font-black text-[#006064] uppercase tracking-widest text-xs">Manual Simulation (Debug)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Select><SelectTrigger className="h-12 font-bold bg-white"><SelectValue placeholder="Trigger" /></SelectTrigger></Select>
                <Select><SelectTrigger className="h-12 font-bold bg-white"><SelectValue placeholder="City" /></SelectTrigger></Select>
                <Button className="h-12 bg-destructive font-black text-xs uppercase rounded-xl">SIMULATE PAYOUT</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-border shadow-sm">
          <CardHeader className="border-b px-8 py-6">
            <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Fraud Alerts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-8 text-center text-muted-foreground">
              <ShieldAlert className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-xs font-black uppercase tracking-widest">No active fraud flags</p>
            </div>
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="px-6 font-black text-[10px] uppercase">Claim</TableHead>
                  <TableHead className="px-6 font-black text-[10px] uppercase">Score</TableHead>
                  <TableHead className="px-6 font-black text-[10px] uppercase text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 'C-9921', score: '0.82', flag: 'GPS' },
                  { id: 'C-9925', score: '0.75', flag: 'ACC' },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="px-6 font-bold">{row.id}</TableCell>
                    <TableCell className="px-6"><Badge className="bg-destructive text-white">{row.score}</Badge></TableCell>
                    <TableCell className="px-6 text-right">
                      <Button variant="ghost" size="icon" className="text-destructive"><Ban className="w-4 h-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-border shadow-sm">
        <CardHeader className="border-b px-8 py-6 flex flex-row justify-between items-center">
          <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Worker Management</CardTitle>
          <div className="flex gap-4">
            <Input className="w-64 h-10 font-bold" placeholder="Search Partner ID..." />
            <Button className="h-10 bg-primary font-black uppercase text-xs rounded-xl">Export</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Worker ID</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Name</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Platform</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">City</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Risk</TableHead>
                <TableHead className="px-8 py-5 font-black text-[10px] uppercase tracking-widest text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: 'TP-W8841', name: 'Rajesh Kumar', platform: 'Swiggy', city: 'Chennai', risk: '0.35', status: 'Active' },
                { id: 'TP-W8842', name: 'Amit Singh', platform: 'Zomato', city: 'Delhi', risk: '0.12', status: 'Active' },
                { id: 'TP-W8843', name: 'Sunita Rao', platform: 'Zepto', city: 'Mumbai', risk: '0.64', status: 'Flagged' },
              ].map((row, i) => (
                <TableRow key={i} className="hover:bg-muted/10">
                  <TableCell className="px-8 py-6 font-mono text-xs font-black">{row.id}</TableCell>
                  <TableCell className="px-8 py-6 font-bold text-[#006064]">{row.name}</TableCell>
                  <TableCell className="px-8 py-6"><Badge variant="outline" className="font-black text-primary border-primary/20">{row.platform}</Badge></TableCell>
                  <TableCell className="px-8 py-6 font-bold">{row.city}</TableCell>
                  <TableCell className="px-8 py-6">
                    <Progress value={parseFloat(row.risk) * 100} className="w-16 h-1.5" indicatorClassName={parseFloat(row.risk) > 0.5 ? 'bg-destructive' : 'bg-primary'} />
                  </TableCell>
                  <TableCell className="px-8 py-6 text-right">
                    <Badge className={cn("font-black text-[10px]", row.status === 'Active' ? "bg-success" : "bg-warning")}>{row.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}