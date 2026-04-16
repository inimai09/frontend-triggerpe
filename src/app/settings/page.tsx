
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
      <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Settings</h1>
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Manage your account and app preferences.</p>
        </header>

        <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex overflow-x-auto bg-black/40 backdrop-blur-xl border border-white/10 p-2 h-20 rounded-[2rem] mb-12">
            {[
              { id: 'profile', icon: User, label: 'Profile' },
              { id: 'notifications', icon: Bell, label: 'Alerts' },
              { id: 'payments', icon: CreditCard, label: 'Payouts' },
              { id: 'privacy', icon: Shield, label: 'Privacy' },
              { id: 'support', icon: HelpCircle, label: 'Support' },
            ].map(tab => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex-1 rounded-[1.25rem] font-black data-[state=active]:bg-primary data-[state=active]:text-white gap-3 min-w-[140px] text-white/60">
                <tab.icon className="w-5 h-5" /> {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="profile" className="space-y-10">
            <Card className="card-neon-glow rounded-[2.5rem]">
              <CardHeader className="border-b border-white/5 px-12 py-10">
                <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { label: 'Full Name', name: 'name', value: userData.name },
                    { label: 'Phone Number', name: 'phone', value: userData.phone },
                    { label: 'Email Address', name: 'email', value: userData.email },
                    { label: 'City', name: 'city', value: userData.city },
                  ].map((field) => (
                    <div key={field.name} className="space-y-3">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">{field.label}</label>
                      <Input name={field.name} value={field.value} onChange={handleChange} className="h-16 bg-white/5 border-white/10 rounded-[1.25rem] font-black text-white focus:border-primary/40 px-6 text-lg" />
                    </div>
                  ))}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Delivery Platform</label>
                    <Input value={userData.platform} disabled className="h-16 bg-black/40 border-white/5 rounded-[1.25rem] font-black text-primary opacity-60 px-6 text-lg cursor-not-allowed" />
                  </div>
                </div>
                <Button onClick={handleSaveProfile} className="rounded-full bg-primary text-white font-black px-12 h-20 btn-hover-effect text-lg shadow-2xl">
                  <Save className="w-6 h-6 mr-3" /> Save Profile Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="card-neon-glow rounded-[2.5rem]">
              <CardHeader className="border-b border-white/5 px-12 py-10">
                <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Notification Channels</CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-12">
                {[
                  { label: 'SMS Notifications', desc: 'Real-time alerts for weather triggers' },
                  { label: 'Email Alerts', desc: 'Policy renewal and weekly summaries' },
                  { label: 'Push Notifications', desc: 'Live payout status and app updates' },
                  { label: 'Premium Due Alerts', desc: 'Reminders before auto-debit' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-8 bg-white/5 rounded-[1.5rem] border border-white/5 btn-hover-effect">
                    <div className="space-y-2">
                      <p className="font-black text-white text-lg">{item.label}</p>
                      <p className="text-sm font-bold text-white/40">{item.desc}</p>
                    </div>
                    <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="card-neon-glow rounded-[2.5rem]">
              <CardHeader className="border-b border-white/5 px-12 py-10">
                <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Payout Methods</CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-10">
                <div className="p-10 bg-primary/10 rounded-[2rem] border border-primary/20 flex items-center justify-between group">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center font-black text-primary border-2 border-primary/30 text-xl shadow-[0_0_15px_rgba(0,172,193,0.3)]">UPI</div>
                    <div>
                      <p className="font-black text-white text-xl">rajesh.kumar@okaxis</p>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1 icon-neon-glow">Primary Payout Method</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="font-black text-primary hover:text-white uppercase tracking-widest text-[11px] group-hover:scale-110 transition-transform">Edit</Button>
                </div>
                <div className="p-10 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center font-black text-white/20 border-2 border-white/10 text-xl">BANK</div>
                    <div>
                      <p className="font-black text-white">ICICI Bank • **** 8841</p>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Secondary Account</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="font-black text-white/30 hover:text-destructive uppercase tracking-widest text-[11px]">Remove</Button>
                </div>
                <Button variant="outline" className="w-full h-24 rounded-[2rem] border-2 border-primary/30 border-dashed font-black text-primary hover:bg-primary/5 text-lg btn-hover-effect">
                  + Link New Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="card-neon-glow rounded-[2.5rem]">
              <CardHeader className="border-b border-white/5 px-12 py-10">
                <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Security Controls</CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-12">
                <div className="flex items-center justify-between p-10 bg-white/5 rounded-[2rem] border border-white/10 btn-hover-effect">
                  <div className="flex items-center gap-8">
                    <div className="p-5 bg-primary/20 rounded-2xl">
                      <Key className="w-8 h-8 text-primary icon-neon-glow" />
                    </div>
                    <div>
                      <p className="font-black text-white text-xl">Two-Factor Authentication</p>
                      <p className="text-sm font-bold text-white/40">Highly recommended for payout safety</p>
                    </div>
                  </div>
                  <Switch className="data-[state=checked]:bg-primary" />
                </div>
                <div className="space-y-6">
                  <Button variant="outline" className="w-full h-20 rounded-[1.5rem] font-black justify-between btn-hover-effect px-10 text-lg border-white/10 bg-white/5">
                    Change Login Password <ChevronRight className="w-6 h-6 text-white/20" />
                  </Button>
                  <Button variant="outline" className="w-full h-20 rounded-[1.5rem] font-black justify-between btn-hover-effect px-10 text-lg border-white/10 bg-white/5">
                    Manage Active Sessions <ChevronRight className="w-6 h-6 text-white/20" />
                  </Button>
                  <Button variant="ghost" className="w-full h-20 rounded-[1.5rem] font-black text-destructive/60 hover:text-destructive justify-between hover:bg-destructive/10 px-10 text-lg mt-10">
                    Permanently Delete Account <Trash2 className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="card-neon-glow rounded-[2.5rem]">
              <CardHeader className="border-b border-white/5 px-12 py-10">
                <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Help & Support</CardTitle>
              </CardHeader>
              <CardContent className="p-12 space-y-12">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    { q: "How do I update my UPI ID?", a: "Go to the Payouts tab and click 'Edit' on your primary UPI method. Verification takes 2 minutes." },
                    { q: "What if a trigger occurred but I didn't get paid?", a: "Parametric verification takes up to 15 mins. Check the 'Claims' tab for live status." },
                    { q: "How to pause my coverage?", a: "You can pause coverage from the 'My Policy' page if you're taking a break from work." },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white/5 rounded-[1.5rem] px-10 overflow-hidden">
                      <AccordionTrigger className="font-black text-white text-lg hover:no-underline py-8">{item.q}</AccordionTrigger>
                      <AccordionContent className="font-bold text-white/50 text-base pb-8">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="flex flex-col gap-6 pt-10">
                  <Button className="h-20 rounded-full bg-primary text-white font-black text-xl btn-hover-effect shadow-2xl">Contact 24/7 Live Support</Button>
                  <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-widest">TriggerPe Build v2.8.4 • Stable Distribution</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
