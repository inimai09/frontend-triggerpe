"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { History, Zap, CheckCircle2, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const recentClaims = [
  { id: 'CLM-001', type: 'Heavy Rain', date: 'Feb 24, 2024', status: 'Settled', amount: '₹300', time: '14:20 PM' },
  { id: 'CLM-002', type: 'Extreme Heat', date: 'Feb 18, 2024', status: 'Settled', amount: '₹600', time: '12:05 PM' },
  { id: 'CLM-003', type: 'Heavy Rain', date: 'Jan 15, 2024', status: 'Settled', amount: '₹300', time: '11:15 AM' },
];

export default function ClaimsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-headline font-bold text-foreground">Claims History</h1>
          <p className="text-secondary-foreground/60 font-medium">All payouts are triggered automatically. No filing required.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Payouts</p>
            <p className="text-2xl font-bold text-primary">₹1,200</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Claims Processed', value: '3', icon: Zap, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Settlement Time', value: '< 2 mins', icon: Clock, color: 'text-success', bg: 'bg-success/10' },
          { label: 'Approval Rate', value: '100%', icon: CheckCircle2, color: 'text-primary', bg: 'bg-primary/10' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Recent Payouts</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Claim ID</th>
                  <th className="px-6 py-4">Trigger Type</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentClaims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-5 font-bold text-xs">{claim.id}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{claim.type}</Badge>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-foreground">{claim.date}</p>
                      <p className="text-xs text-muted-foreground">{claim.time}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-success">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {claim.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right font-black text-foreground">
                      {claim.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}