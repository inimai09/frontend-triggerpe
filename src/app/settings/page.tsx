"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, CreditCard, HelpCircle, Save, Trash2, Key, ChevronRight } from 'lucide-react';
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

  return (
    <DashboardLayout>
      <div className="max-w-4xl space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064]">Settings</h1>
          <p className="text-[#00838F] font-medium mt-1">Manage your account and preferences.</p>
        </header>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-5 bg-white card-shadow border-none p-1.5 h-16 rounded-xl mb-8">
            <TabsTrigger value="profile" className="rounded-lg font-bold text-xs flex gap-2 data-[state=active]:bg-[#E0F7FA] data-[state=active]:text-[#00ACC1]"><User className="w-4 h-4" /> Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-lg font-bold text-xs flex gap-2 data-[state=active]:bg-[#E0F7FA] data-[state=active]:text-[#00ACC1]"><Bell className="w-4 h-4" /> Alerts</TabsTrigger>
            <TabsTrigger value="payments" className="rounded-lg font-bold text-xs flex gap-2 data-[state=active]:bg-[#E0F7FA] data-[state=active]:text-[#00ACC1]"><CreditCard className="w-4 h-4" /> Payouts</TabsTrigger>
            <TabsTrigger value="privacy" className="rounded-lg font-bold text-xs flex gap-2 data-[state=active]:bg-[#E0F7FA] data-[state=active]:text-[#00ACC1]"><Shield className="w-4 h-4" /> Privacy</TabsTrigger>
            <TabsTrigger value="support" className="rounded-lg font-bold text-xs flex gap-2 data-[state=active]:bg-[#E0F7FA] data-[state=active]:text-[#00ACC1]"><HelpCircle className="w-4 h-4" /> Support</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="bg-white border-none card-shadow rounded-xl">
              <CardHeader className="px-8 py-6 border-b border-border">
                <CardTitle className="text-lg font-black text-[#006064]">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'phone', 'email', 'city'].map((key) => (
                    <div key={key} className="space-y-2">
                      <label className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">{key}</label>
                      <Input 
                        value={userData[key as keyof typeof userData]} 
                        onChange={(e) => setUserData({...userData, [key]: e.target.value})}
                        className="h-12 bg-[#F1F5F9]/30 rounded-lg font-medium" 
                      />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">Platform</label>
                    <Input value={userData.platform} disabled className="h-12 bg-muted rounded-lg font-bold text-[#006064]/40" />
                  </div>
                </div>
                <Button onClick={handleSave} className="bg-[#00ACC1] hover:bg-[#00ACC1]/90 text-white rounded-full font-bold h-12 px-10">Save Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="bg-white border-none card-shadow rounded-xl">
              <CardHeader className="px-8 py-6 border-b border-border">
                <CardTitle className="text-lg font-black text-[#006064]">Notification Toggles</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { label: 'SMS Notifications', desc: 'Alerts for weather triggers' },
                  { label: 'Email Summaries', desc: 'Weekly earning reports' },
                  { label: 'Push Notifications', desc: 'Live payout status' },
                  { label: 'Claim Alerts', desc: 'Verification updates' },
                  { label: 'Premium Reminders', desc: 'Before weekly auto-debit' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#F1F5F9]/30 rounded-lg">
                    <div>
                      <p className="font-bold text-[#006064]">{item.label}</p>
                      <p className="text-xs text-[#00838F]">{item.desc}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="bg-white border-none card-shadow rounded-xl">
              <CardContent className="p-8 space-y-6">
                <div className="p-6 border border-[#00ACC1]/20 rounded-lg flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#E0F7FA] rounded-full text-[#00ACC1] font-black">UPI</div>
                    <div>
                      <p className="font-black text-[#006064]">rajesh.kumar@okaxis</p>
                      <p className="text-[10px] font-bold text-[#00ACC1] uppercase">Primary Payout Method</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-[#00ACC1] font-bold">Edit</Button>
                </div>
                <Button variant="outline" className="w-full h-14 border-dashed border-[#00ACC1] text-[#00ACC1] rounded-lg font-bold hover:bg-[#E0F7FA]">
                  + Add New Bank Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="bg-white border-none card-shadow rounded-xl p-8 space-y-6">
              <div className="flex items-center justify-between p-6 bg-[#F1F5F9]/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <Key className="w-6 h-6 text-[#00ACC1]" />
                  <div>
                    <p className="font-bold text-[#006064]">Two-Factor Authentication</p>
                    <p className="text-xs text-[#00838F]">Extra security for payout changes</p>
                  </div>
                </div>
                <Switch />
              </div>
              <Button variant="outline" className="w-full justify-between h-14 px-8 font-bold text-[#006064]">
                Change Password <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-14 px-8 font-bold text-destructive hover:bg-destructive/10">
                Delete Account <Trash2 className="w-4 h-4" />
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="bg-white border-none card-shadow rounded-xl p-8 space-y-8">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "How do I update my UPI?", a: "Go to Payouts and click Edit." },
                  { q: "What triggers a payout?", a: "Heavy rain, heat, or outages." },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                    <AccordionTrigger className="font-bold text-[#006064]">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-[#00838F]">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button className="w-full h-14 bg-[#00ACC1] text-white font-bold rounded-full">Contact Support</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
