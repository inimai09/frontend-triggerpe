
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, CreditCard, HelpCircle, Trash2, Key, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const [userData, setUserData] = useState({ name: '', phone: '', email: '', city: '', platform: '' });
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('tp_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserData({
          name: parsed.name || 'Partner',
          phone: parsed.phone || '+91 98765 43210',
          email: parsed.email || 'partner@triggerpe.com',
          city: parsed.city || 'Chennai',
          platform: parsed.platform || 'Swiggy'
        });
      } catch (e) {}
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('tp_user', JSON.stringify(userData));
    toast({ title: "Settings Saved!", description: "Your profile has been updated." });
  };

  const handleChangePassword = () => {
    toast({
      title: "Password Reset Initiated",
      description: "A secure reset link has been sent to your registered email.",
    });
  };

  const handleContactSupport = () => {
    toast({
      title: "Priority Ticket Created",
      description: "A TriggerPe support executive will contact you shortly.",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl space-y-6 animate-in fade-in duration-500 pb-12">
        <header>
          <h1 className="text-3xl font-black text-white font-headline tracking-tighter uppercase">Settings</h1>
          <p className="text-white/60 font-medium mt-1">Manage your account and preferences.</p>
        </header>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-5 bg-black/40 backdrop-blur-xl border border-white/10 p-1.5 h-16 rounded-[2rem] mb-8">
            <TabsTrigger value="profile" className="rounded-full font-black text-[9px] flex gap-2 data-[state=active]:bg-primary data-[state=active]:text-white uppercase tracking-widest"><User className="w-3 h-3" /> Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-full font-black text-[9px] flex gap-2 data-[state=active]:bg-primary data-[state=active]:text-white uppercase tracking-widest"><Bell className="w-3 h-3" /> Alerts</TabsTrigger>
            <TabsTrigger value="payments" className="rounded-full font-black text-[9px] flex gap-2 data-[state=active]:bg-primary data-[state=active]:text-white uppercase tracking-widest"><CreditCard className="w-3 h-3" /> Payouts</TabsTrigger>
            <TabsTrigger value="privacy" className="rounded-full font-black text-[9px] flex gap-2 data-[state=active]:bg-primary data-[state=active]:text-white uppercase tracking-widest"><Shield className="w-3 h-3" /> Privacy</TabsTrigger>
            <TabsTrigger value="support" className="rounded-full font-black text-[9px] flex gap-2 data-[state=active]:bg-primary data-[state=active]:text-white uppercase tracking-widest"><HelpCircle className="w-3 h-3" /> Support</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem]">
              <CardHeader className="px-8 py-6 border-b border-white/10">
                <CardTitle className="text-sm font-black text-white uppercase tracking-widest">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'phone', 'email', 'city'].map((key) => (
                    <div key={key} className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">{key}</label>
                      <Input 
                        value={userData[key as keyof typeof userData]} 
                        onChange={(e) => setUserData({...userData, [key]: e.target.value})}
                        className="h-12 bg-white/5 border-white/10 rounded-2xl font-bold text-white" 
                      />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Platform</label>
                    <Input value={userData.platform} disabled className="h-12 bg-white/5 border-white/10 rounded-2xl font-black text-white/30" />
                  </div>
                </div>
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-white rounded-full font-black h-14 px-10 uppercase tracking-widest shadow-lg">Save Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem]">
              <CardHeader className="px-8 py-6 border-b border-white/10">
                <CardTitle className="text-sm font-black text-white uppercase tracking-widest">Notification Toggles</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { label: 'SMS Notifications', desc: 'Alerts for weather triggers' },
                  { label: 'Email Summaries', desc: 'Weekly earning reports' },
                  { label: 'Push Notifications', desc: 'Live payout status' },
                  { label: 'Claim Alerts', desc: 'Verification updates' },
                  { label: 'Premium Reminders', desc: 'Before weekly auto-debit' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div>
                      <p className="font-black text-white text-xs uppercase">{item.label}</p>
                      <p className="text-[10px] font-medium text-white/40">{item.desc}</p>
                    </div>
                    <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem]">
              <CardContent className="p-8 space-y-6">
                <div className="p-8 bg-white/5 rounded-[2rem] border border-primary/20 flex justify-between items-center group">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/20 rounded-full text-primary font-black border border-primary/20 group-hover:scale-110 transition-transform">UPI</div>
                    <div>
                      <p className="font-black text-white text-lg tracking-tight">rajesh.kumar@okaxis</p>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest">Primary Payout Method</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary/10 rounded-full h-10 px-6 border border-primary/10">Edit</Button>
                </div>
                <Button variant="outline" className="w-full h-16 border-dashed border-primary/30 text-primary bg-primary/5 rounded-[2rem] font-black uppercase text-xs hover:bg-primary/10 tracking-widest">
                  + Add New Bank Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] p-8 space-y-6">
              <div className="flex items-center justify-between p-8 bg-white/5 rounded-[2rem] border border-white/5">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/10 rounded-full border border-white/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-black text-white text-sm uppercase">Two-Factor Authentication</p>
                    <p className="text-[10px] font-medium text-white/40">Extra security for payout changes</p>
                  </div>
                </div>
                <Switch className="data-[state=checked]:bg-primary" />
              </div>
              <Button onClick={handleChangePassword} variant="outline" className="w-full justify-between h-16 px-8 font-black text-white bg-white/5 border-white/10 rounded-[2rem] uppercase tracking-widest text-xs hover:bg-white/10">
                Change Password <ChevronRight className="w-4 h-4 text-primary" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-16 px-8 font-black text-destructive hover:bg-destructive/10 rounded-[2rem] uppercase tracking-widest text-xs">
                Delete Account <Trash2 className="w-4 h-4" />
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] p-8 space-y-8">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "How do I update my UPI?", a: "Go to Payouts and click Edit to update your linked VPA." },
                  { q: "What triggers a payout?", a: "Triggers are based on external telemetry like heavy rain, extreme heat, or platform outages." },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                    <AccordionTrigger className="font-black text-white uppercase text-xs tracking-tight hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-white/40 font-medium text-[10px]">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button onClick={handleContactSupport} className="w-full h-16 bg-primary text-white font-black rounded-full uppercase tracking-widest shadow-xl text-xs">Contact Support</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
