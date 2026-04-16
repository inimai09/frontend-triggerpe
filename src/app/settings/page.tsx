"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Bell, Shield, Smartphone, CreditCard, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-headline font-bold text-foreground">Settings</h1>
        <p className="text-secondary-foreground/60 font-medium">Manage your account and app preferences.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                <Input defaultValue="Rajesh Kumar" className="rounded-xl border-2" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Phone Number</label>
                <Input defaultValue="+91 98765 43210" className="rounded-xl border-2" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                <Input defaultValue="rajesh.k@delivery.com" className="rounded-xl border-2" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Delivery Partner ID</label>
                <Input defaultValue="SW-884291" disabled className="rounded-xl border-muted bg-muted" />
              </div>
            </div>
            <Button className="rounded-xl px-8 h-12 btn-hover-effect">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notifications & Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {[
                { label: 'Push Notifications', desc: 'Alerts for weather triggers' },
                { label: 'WhatsApp Updates', desc: 'Policy renewal & claim status' },
                { label: 'SMS Alerts', desc: 'Payout confirmations' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" /> Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="p-4 bg-muted rounded-2xl border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-xs">UPI</div>
                  <div>
                    <p className="font-bold text-sm">rajesh.kumar@okaxis</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">Primary Payout Method</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground"><ChevronRight className="w-4 h-4" /></Button>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-xl border-dashed border-2 hover:bg-primary/5">
                + Link New Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}