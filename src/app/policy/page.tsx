
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Download, ExternalLink, RefreshCw, Pause, ArrowRightLeft, CreditCard, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { DashboardLayout } from '@/components/DashboardLayout';

export default function PolicyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        <Card className="card-neon-glow p-6 rounded-[2rem] border-none">
          <header className="space-y-4">
            <div className="p-6 bg-black/40 border border-white/5 rounded-[1.75rem] w-full md:w-fit btn-hover-effect">
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 font-headline">My Policy</h1>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00ACC1]" />
                <p className="text-primary font-black uppercase tracking-widest text-[9px] icon-neon-glow">Active Parametric Shield</p>
              </div>
            </div>
          </header>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-8 card-neon-glow rounded-[2.5rem] border-none overflow-hidden flex flex-col">
            <CardHeader className="bg-primary/10 border-b border-white/10 px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-lg font-black text-white flex items-center gap-4 uppercase tracking-widest font-headline">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-primary icon-neon-glow" />
                </div> POL-C349A4
              </CardTitle>
              <Badge className="bg-success/20 text-success border-success/30 font-black px-4 py-1.5 uppercase tracking-widest text-[8px] rounded-full">SHIELD ACTIVE</Badge>
            </CardHeader>
            <CardContent className="p-8 space-y-8 flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Issue Date', value: '04 Apr 2026' },
                  { label: 'Renewal', value: '11 Apr 2026' },
                  { label: 'Zone', value: 'Chennai' },
                  { label: 'Validity', value: '7d Left' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-black/40 rounded-[1.5rem] border border-white/5 flex flex-col items-center text-center group btn-hover-effect">
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</span>
                    <p className="text-[11px] font-black text-white group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
                <Button className="flex-1 min-w-[140px] rounded-full bg-primary text-white font-black px-4 h-14 btn-hover-effect text-xs shadow-xl font-headline">
                  <div className="p-1.5 bg-white/20 rounded-lg mr-2">
                    <RefreshCw className="w-4 h-4" />
                  </div> RE-ACTIVATE
                </Button>
                <Button variant="outline" className="flex-1 min-w-[140px] rounded-full border-warning text-warning hover:bg-warning/20 font-black px-4 h-14 btn-hover-effect text-xs font-headline">
                  <div className="p-1.5 bg-warning/10 rounded-lg mr-2">
                    <Pause className="w-4 h-4" />
                  </div> PAUSE SHIELD
                </Button>
                <Button variant="outline" className="flex-1 min-w-[140px] rounded-full border-primary/40 text-white hover:bg-primary/10 font-black px-4 h-14 btn-hover-effect text-xs font-headline">
                  <div className="p-1.5 bg-primary/10 rounded-lg mr-2">
                    <ArrowRightLeft className="w-4 h-4" />
                  </div> SWITCH ZONE
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-4 space-y-6">
            <Card className="card-neon-glow rounded-[2.5rem] border-none overflow-hidden">
              <CardHeader className="bg-white/5 border-b border-white/5 px-6 py-4">
                <CardTitle className="text-base font-black text-white uppercase tracking-widest flex items-center gap-3 font-headline">
                  <div className="p-1.5 bg-primary/20 rounded-xl">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div> Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { label: 'Coverage per event', value: '₹400', color: 'text-primary' },
                  { label: 'Weekly Premium', value: '₹72.50', color: 'text-white' },
                  { label: 'Settled Claims', value: '3', color: 'text-white/40' },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-black/40 rounded-[1.5rem] border border-white/5 flex flex-col gap-1 btn-hover-effect">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{item.label}</span>
                    <span className={cn("text-2xl font-black font-headline", item.color, item.color === 'text-primary' && 'icon-neon-glow tracking-tighter')}>{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
