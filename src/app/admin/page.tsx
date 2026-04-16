"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileCheck, TrendingUp, Zap, Activity, ShieldAlert, BarChart3, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Slider } from '@/components/ui/slider';
import { DashboardLayout } from '@/components/DashboardLayout';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

export default function AdminPage() {
  const stats = [
    { label: 'Total Workers', value: '2,847', icon: Users, color: 'text-primary' },
    { label: 'Active Policies', value: '2,801', icon: FileCheck, color: 'text-primary' },
    { label: 'Premium (Weekly)', value: '₹2.04L', icon: TrendingUp, color: 'text-primary' },
    { label: 'Total Payouts', value: '₹12.0L', icon: Zap, color: 'text-warning' },
    { label: 'Loss Ratio', value: '65%', icon: Activity, color: 'text-destructive' },
  ];

  const pieData = [
    { name: 'Paid', value: 70, color: '#26A69A' },
    { name: 'Pending', value: 20, color: '#FFB74D' },
    { name: 'Rejected', value: 10, color: '#EF5350' },
  ];

  const barData = [
    { trigger: 'Rain', count: 450 },
    { trigger: 'Heat', count: 320 },
    { trigger: 'AQI', count: 180 },
    { trigger: 'Outage', count: 120 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064] font-headline">Admin Console</h1>
          <p className="text-[#00838F] font-medium mt-1">Platform macro-risk and fraud oversight.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-white border-none shadow-sm rounded-2xl p-6 text-center">
              <div className={cn("p-4 rounded-full bg-[#E0F7FA] w-fit mx-auto mb-4", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-black text-[#006064]">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Analytics Column */}
          <div className="xl:col-span-2 space-y-6">
            <Card className="bg-white border-none shadow-sm rounded-2xl">
              <CardHeader className="px-8 py-6 border-b border-border">
                <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3">
                  <div className="p-2 bg-[#E0F7FA] rounded-full">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div> Claims Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="h-[250px] flex flex-col items-center">
                    <p className="text-[10px] font-black text-[#00838F] uppercase mb-4 tracking-widest">Claims by Status</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="h-[250px] flex flex-col items-center">
                    <p className="text-[10px] font-black text-[#00838F] uppercase mb-4 tracking-widest">Claims by Trigger</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <XAxis dataKey="trigger" fontSize={10} stroke="#00838F" />
                        <YAxis fontSize={10} stroke="#00838F" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#00ACC1" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm rounded-2xl">
              <CardHeader className="px-8 py-6 border-b border-border">
                <CardTitle className="text-lg font-black text-[#006064]">Fraud Alerts Table</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#F1F5F9]/50">
                    <TableRow>
                      <TableHead className="px-8 font-black text-[#00838F] text-[10px] uppercase">Claim ID</TableHead>
                      <TableHead className="px-8 font-black text-[#00838F] text-[10px] uppercase">Worker</TableHead>
                      <TableHead className="px-8 font-black text-[#00838F] text-[10px] uppercase">Fraud Score</TableHead>
                      <TableHead className="px-8 font-black text-[#00838F] text-[10px] uppercase text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: 'C-9921', worker: 'Rajesh K', score: '0.82', flag: 'GPS' },
                      { id: 'C-9925', worker: 'Amit S', score: '0.75', flag: 'ACC' },
                    ].map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="px-8 font-black text-[#006064]">{row.id}</TableCell>
                        <TableCell className="px-8 text-sm font-bold text-[#00838F]">{row.worker}</TableCell>
                        <TableCell className="px-8">
                          <Badge className="bg-destructive/10 text-destructive border-none font-black text-[10px]">{row.score}</Badge>
                        </TableCell>
                        <TableCell className="px-8 text-right space-x-2">
                          <Button variant="outline" size="sm" className="h-8 rounded-full text-primary border-primary font-black text-[10px]">Approve</Button>
                          <Button variant="outline" size="sm" className="h-8 rounded-full text-destructive border-destructive font-black text-[10px]">Reject</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Trigger Control Column */}
          <div className="space-y-6">
            <Card className="bg-white border-none shadow-sm rounded-2xl">
              <CardHeader className="px-8 py-6 border-b border-border">
                <CardTitle className="text-lg font-black text-[#006064] flex items-center gap-3">
                  <div className="p-2 bg-destructive/10 rounded-full">
                    <ShieldAlert className="w-5 h-5 text-destructive" />
                  </div> Trigger Control
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                {/* Curfew Control */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest">Curfew / Lockdown</p>
                  <Select>
                    <SelectTrigger className="h-12 rounded-xl font-bold text-xs"><SelectValue placeholder="Target City" /></SelectTrigger>
                    <SelectContent><SelectItem value="chn">Chennai</SelectItem><SelectItem value="mum">Mumbai</SelectItem></SelectContent>
                  </Select>
                  <Button className="w-full h-12 bg-destructive text-white rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Activate Lockdown</Button>
                </div>

                {/* Outage Control */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest">Platform Outage</p>
                  <Select>
                    <SelectTrigger className="h-12 rounded-xl font-bold text-xs"><SelectValue placeholder="Platform" /></SelectTrigger>
                    <SelectContent><SelectItem value="sw">Swiggy</SelectItem><SelectItem value="zo">Zomato</SelectItem></SelectContent>
                  </Select>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#00838F]">
                      <span>Duration</span>
                      <span>4 Hours</span>
                    </div>
                    <Slider defaultValue={[4]} max={24} step={1} className="py-2" />
                  </div>
                  <Button className="w-full h-12 bg-primary text-white rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Declare Outage</Button>
                </div>

                <div className="pt-8 border-t border-border">
                  <Button className="w-full h-14 bg-[#006064] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Simulate Global Trigger</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
