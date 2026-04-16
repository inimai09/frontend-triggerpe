"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, Users, TrendingUp, AlertTriangle, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function AdminPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <div className="flex items-center gap-3 mb-2">
          <Badge className="bg-danger text-white">System Admin</Badge>
          <span className="text-xs font-bold text-muted-foreground">V 2.4.1 (Stable)</span>
        </div>
        <h1 className="text-3xl font-headline font-bold text-foreground">Admin Console</h1>
        <p className="text-secondary-foreground/60 font-medium">Monitoring platform health & risk exposure.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Active Users', value: '2,847', trend: '+12%', icon: Users, color: 'text-primary' },
          { label: 'Platform Exposure', value: '₹18.4L', trend: '-2%', icon: ShieldAlert, color: 'text-danger' },
          { label: 'Daily Claims (Avg)', value: '142', trend: '+5%', icon: TrendingUp, color: 'text-success' },
          { label: 'System Uptime', value: '99.99%', trend: 'Stable', icon: Activity, color: 'text-primary' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2.5 rounded-xl bg-muted ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold">{stat.trend}</Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" /> High Risk Zones
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Zone Name</th>
                    <th className="px-6 py-4">Active Polices</th>
                    <th className="px-6 py-4">Current Risk</th>
                    <th className="px-6 py-4">Payout Probability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { zone: 'Chennai Central', users: '1,240', risk: 'Medium', prob: 35 },
                    { zone: 'Mumbai Western', users: '840', risk: 'High', prob: 62 },
                    { zone: 'Delhi NCR', users: '2,100', risk: 'Critical', prob: 88 },
                  ].map((z, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm">{z.zone}</td>
                      <td className="px-6 py-4 text-sm font-medium">{z.users}</td>
                      <td className="px-6 py-4">
                        <Badge className={z.risk === 'Critical' ? 'bg-danger' : z.risk === 'High' ? 'bg-orange-400' : 'bg-amber-500'}>
                          {z.risk}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Progress value={z.prob} className="h-1.5 w-16" />
                          <span className="text-[10px] font-black">{z.prob}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">System Integrity</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Fraud Model Accuracy</span>
                <span className="text-xs font-black">99.2%</span>
              </div>
              <Progress value={99.2} className="h-2" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Weather Feed Latency</span>
                <span className="text-xs font-black">420ms</span>
              </div>
              <Progress value={95} className="h-2 bg-muted" indicatorClassName="bg-success" />
            </div>
            <div className="p-4 bg-muted rounded-2xl border border-border mt-8">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">Platform Note</p>
              <p className="text-xs leading-relaxed font-medium">
                Automatic disaster triggers are currently enabled for 12 major metropolitan areas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}