
"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, Smartphone, CreditCard, ChevronRight, Save, Trash2, Key, HelpCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    platform: ''
  });
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
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
  }, []);

  const handleSaveProfile = () => {
    localStorage.setItem('tp_user', JSON.stringify(userData));
    toast({
      title: "Profile Updated!",
      description: "Your information has been successfully saved."
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">Settings</h1>
          <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">Manage your account and app preferences.</p>
        </header>

        <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex overflow-x-auto bg-white border border-border p-1.5 h-16 rounded-2xl mb-8">
            {[
              { id: 'profile', icon: User, label: 'Profile' },
              { id: 'notifications', icon: Bell, label: 'Notifications' },
              { id: 'payments', icon: CreditCard, label: 'Payments' },
              { id: 'privacy', icon: Shield, label: 'Privacy' },
              { id: 'support', icon: HelpCircle, label: 'Support' },
            ].map(tab => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex-1 rounded-xl font-black data-[state=active]:bg-[#E0F7FA] data-[state=active]:text-primary gap-2 min-w-[120px]">
                <tab.icon className="w-4 h-4" /> {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="profile">
            <Card className="bg-white border border-border shadow-sm">
              <CardHeader className="border-b px-10 py-6">
                <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Full Name</label>
                    <Input name="name" value={userData.name} onChange={handleChange} className="h-12 border-2 rounded-xl font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Phone Number</label>
                    <Input name="phone" value={userData.phone} onChange={handleChange} className="h-12 border-2 rounded-xl font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Email Address</label>
                    <Input name="email" value={userData.email} onChange={handleChange} className="h-12 border-2 rounded-xl font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">City</label>
                    <Input name="city" value={userData.city} onChange={handleChange} className="h-12 border-2 rounded-xl font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Delivery Platform</label>
                    <Input value={userData.platform} disabled className="h-12 bg-muted border-none rounded-xl font-bold" />
                  </div>
                </div>
                <Button onClick={handleSaveProfile} className="rounded-full bg-primary font-black px-10 h-14 btn-hover-effect">
                  <Save className="w-5 h-5 mr-2" /> Save Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="bg-white border border-border shadow-sm">
              <CardHeader className="border-b px-10 py-6">
                <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Preferences</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-10">
                {[
                  { label: 'SMS Notifications', desc: 'Real-time alerts for weather triggers' },
                  { label: 'Email Alerts', desc: 'Policy renewal and weekly summaries' },
                  { label: 'Push Notifications', desc: 'Live payout status and app updates' },
                  { label: 'Premium Due Alerts', desc: 'Reminders before auto-debit' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div className="space-y-1">
                      <p className="font-black text-[#006064]">{item.label}</p>
                      <p className="text-xs font-bold text-[#00838F]">{item.desc}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="bg-white border border-border shadow-sm">
              <CardHeader className="border-b px-10 py-6">
                <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Payout Methods</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <div className="p-6 bg-[#E0F7FA] rounded-2xl border border-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-primary border-2 border-primary/20">UPI</div>
                    <div>
                      <p className="font-black text-[#006064]">rajesh.kumar@okaxis</p>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest">Primary Payout Method</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="font-black text-primary text-xs uppercase tracking-widest">Edit</Button>
                </div>
                <div className="p-6 bg-white rounded-2xl border-2 border-dashed border-border flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-black text-muted-foreground">ICICI</div>
                    <div>
                      <p className="font-black text-muted-foreground">**** 8841</p>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Bank Account (Secondary)</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="font-black text-muted-foreground text-xs uppercase tracking-widest">Remove</Button>
                </div>
                <Button variant="outline" className="w-full h-16 rounded-2xl border-2 border-primary border-dashed font-black text-primary hover:bg-primary/5">
                  + Link New Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="bg-white border border-border shadow-sm">
              <CardHeader className="border-b px-10 py-6">
                <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Security</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-10">
                <div className="flex items-center justify-between p-6 bg-muted/30 rounded-2xl">
                  <div className="flex items-center gap-5">
                    <Key className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-black text-[#006064]">Two-Factor Authentication</p>
                      <p className="text-xs font-bold text-[#00838F]">Extra security for your payouts</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full h-14 rounded-xl font-black justify-between btn-hover-effect">
                    Change Login Password <ChevronRight className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-xl font-black justify-between btn-hover-effect">
                    Active Sessions <ChevronRight className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="w-full h-14 rounded-xl font-black text-destructive justify-between hover:bg-destructive/10">
                    Delete TriggerPe Account <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="bg-white border border-border shadow-sm">
              <CardHeader className="border-b px-10 py-6">
                <CardTitle className="text-lg font-black text-[#006064] uppercase tracking-widest">Help Center</CardTitle>
              </CardHeader>
              <CardContent className="p-10 space-y-10">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    { q: "How do I update my UPI ID?", a: "Go to the Payments tab and click 'Edit' on your primary UPI method." },
                    { q: "What if a trigger event occurred but I didn't get paid?", a: "Please wait 15 minutes for the IMD feed verification. If still not received, contact our 24/7 support through the button below." },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                      <AccordionTrigger className="font-black text-[#006064] hover:no-underline">{item.q}</AccordionTrigger>
                      <AccordionContent className="font-bold text-[#00838F]">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="flex flex-col gap-4">
                  <Button className="h-14 rounded-full bg-primary font-black btn-hover-effect">Contact Live Support</Button>
                  <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-widest">App Version: 2.8.4 (Stable)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
