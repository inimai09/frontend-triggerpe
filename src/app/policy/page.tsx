"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PolicyPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-headline font-bold text-foreground">My Policy</h1>
        <p className="text-secondary-foreground/60 font-medium">View and manage your active parametric shield.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader className="bg-primary/10 border-b">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Active Policy #TP-2024-8842
              </CardTitle>
              <Badge className="bg-success text-white">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Start Date', value: '01 Mar 2024' },
                { label: 'Renewal Date', value: '08 Mar 2024' },
                { label: 'Operational Zone', value: 'Chennai Central' },
                { label: 'Platform', value: 'Swiggy' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</span>
                  <p className="font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t space-y-4">
              <h3 className="font-bold text-lg">Coverage Triggers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Heavy Rain', threshold: '>15mm/hr', payout: '₹300' },
                  { label: 'Extreme Heat', threshold: '>42°C', payout: '₹600' },
                  { label: 'Curfew / Lockdown', threshold: 'Official Notification', payout: '₹400' },
                  { label: 'Cloudburst', threshold: '>50mm/hr', payout: '₹800' },
                ].map((trigger, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-muted rounded-xl border">
                    <div>
                      <p className="font-bold text-foreground">{trigger.label}</p>
                      <p className="text-xs text-muted-foreground">Threshold: {trigger.threshold}</p>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/20 font-bold">{trigger.payout}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Policy Documents</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Button variant="outline" className="w-full justify-between h-12 btn-hover-effect">
              <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Policy Schedule</span>
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between h-12 btn-hover-effect">
              <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Terms & Conditions</span>
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="w-full text-primary font-bold mt-4 hover:bg-primary/5">
              Read Detailed FAQ <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}