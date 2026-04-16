
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
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        <header>
          <div className="p-6 bg-black/40 border border-white/5 rounded-[2rem] w-fit btn-hover-effect">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Settings</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[9px] icon-neon-glow">Manage your account and app preferences.</p>
          </div>
        </header>

        <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex overflow-x-auto bg-black/40 backdrop-blur-xl border border-white/10 p-1.5 h-16 rounded-[1.75rem] mb-8">
            {[
              { id: 'profile', icon: User, label: 'Profile' },
              { id: 'notifications', icon: Bell, label: 'Alerts' },
              { id: 'payments', icon: CreditCard, label: 'Payouts' },
              { id: 'privacy', icon: Shield, label: 'Privacy' },
              { id: 'support', icon: HelpCircle, label: 'Support' },
            ].map(tab => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex-1 rounded-[1.25rem] font-black data-[state=active]:bg-primary data-[state=active]:text-white gap-2 min-w-[120px] text-[11px] text-white/60 btn-hover-effect">
                <tab.icon className="w-4 h-4" /> {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="card-neon-glow rounded-[2rem]">
              <CardHeader className="border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: 'Full Name', name: 'name', value: userData.name },
                    { label: 'Phone Number', name: 'phone', value: userData.phone },
                    { label: 'Email Address', name: 'email', value: userData.email },
                    { label: 'City', name: 'city', value: userData.city },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">{field.label}</label>
                      <Input name={field.name} value={field.value} onChange={handleChange} className="h-14 bg-white/5 border-white/10 rounded-[1rem] font-black text-white focus:border-primary/40 px-5 text-base" />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Delivery Platform</label>
                    <Input value={userData.platform} disabled className="h-14 bg-black/40 border-white/5 rounded-[1rem] font-black text-primary opacity-60 px-5 text-base cursor-not-allowed" />
                  </div>
                </div>
                <Button onClick={handleSaveProfile} className="rounded-full bg-primary text-white font-black px-10 h-16 btn-hover-effect text-lg shadow-xl">
                  <Save className="w-5 h-5 mr-3" /> Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="card-neon-glow rounded-[2rem]">
              <CardHeader className="border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Notification Channels</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {[
                  { label: 'SMS Notifications', desc: 'Real-time alerts for weather triggers' },
                  { label: 'Email Alerts', desc: 'Policy renewal and weekly summaries' },
                  { label: 'Push Notifications', desc: 'Live payout status and app updates' },
                  { label: 'Premium Due Alerts', desc: 'Reminders before auto-debit' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-[1.25rem] border border-white/5 btn-hover-effect">
                    <div className="space-y-1">
                      <p className="font-black text-white text-base">{item.label}</p>
                      <p className="text-xs font-bold text-white/40">{item.desc}</p>
                    </div>
                    <Switch defaultChecked className="data-[state=checked]:bg-primary scale-90" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card className="card-neon-glow rounded-[2rem]">
              <CardHeader className="border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Payout Methods</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="p-8 bg-primary/10 rounded-[1.5rem] border border-primary/20 flex items-center justify-between group btn-hover-effect">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center font-black text-primary border-2 border-primary/30 text-lg shadow-[0_0_15px_rgba(0,172,193,0.3)]">UPI</div>
                    <div>
                      <p className="font-black text-white text-lg">rajesh.kumar@okaxis</p>
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-0.5 icon-neon-glow">Primary Payout Method</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="font-black text-primary hover:text-white uppercase tracking-widest text-[10px] btn-hover-effect">Edit</Button>
                </div>
                <div className="p-8 bg-white/5 rounded-[1.5rem] border border-white/10 flex items-center justify-between opacity-60 btn-hover-effect">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center font-black text-white/20 border-2 border-white/10 text-lg">BANK</div>
                    <div>
                      <p className="font-black text-white">ICICI Bank • **** 8841</p>
                      <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mt-0.5">Secondary Account</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="font-black text-white/30 hover:text-destructive uppercase tracking-widest text-[10px] btn-hover-effect">Remove</Button>
                </div>
                <Button variant="outline" className="w-full h-16 rounded-[1.5rem] border-2 border-primary/30 border-dashed font-black text-primary hover:bg-primary/5 text-base btn-hover-effect">
                  + Link New Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="card-neon-glow rounded-[2rem]">
              <CardHeader className="border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Security Controls</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center justify-between p-8 bg-white/5 rounded-[1.5rem] border border-white/10 btn-hover-effect">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/20 rounded-xl">
                      <Key className="w-6 h-6 text-primary icon-neon-glow" />
                    </div>
                    <div>
                      <p className="font-black text-white text-lg">Two-Factor Authentication</p>
                      <p className="text-xs font-bold text-white/40">Highly recommended for payout safety</p>
                    </div>
                  </div>
                  <Switch className="data-[state=checked]:bg-primary scale-90" />
                </div>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full h-16 rounded-[1.25rem] font-black justify-between btn-hover-effect px-8 text-base border-white/10 bg-white/5">
                    Change Password <ChevronRight className="w-5 h-5 text-white/20" />
                  </Button>
                  <Button variant="outline" className="w-full h-16 rounded-[1.25rem] font-black justify-between btn-hover-effect px-8 text-base border-white/10 bg-white/5">
                    Manage Sessions <ChevronRight className="w-5 h-5 text-white/20" />
                  </Button>
                  <Button variant="ghost" className="w-full h-16 rounded-[1.25rem] font-black text-destructive/60 hover:text-destructive justify-between hover:bg-destructive/10 px-8 text-base mt-6 btn-hover-effect">
                    Delete Account <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="card-neon-glow rounded-[2rem]">
              <CardHeader className="border-b border-white/5 px-8 py-6">
                <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Help & Support</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {[
                    { q: "How do I update my UPI ID?", a: "Go to the Payouts tab and click 'Edit' on your primary UPI method. Verification takes 2 minutes." },
                    { q: "What if a trigger occurred but I didn't get paid?", a: "Parametric verification takes up to 15 mins. Check the 'Claims' tab for live status." },
                    { q: "How to pause my coverage?", a: "You can pause coverage from the 'My Policy' page if you're taking a break from work." },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white/5 rounded-[1.25rem] px-8 overflow-hidden btn-hover-effect">
                      <AccordionTrigger className="font-black text-white text-base hover:no-underline py-6">{item.q}</AccordionTrigger>
                      <AccordionContent className="font-bold text-white/50 text-sm pb-6">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="flex flex-col gap-4 pt-6">
                  <Button className="h-16 rounded-full bg-primary text-white font-black text-lg btn-hover-effect shadow-xl">Contact Live Support</Button>
                  <p className="text-center text-[9px] font-black text-white/20 uppercase tracking-widest">TriggerPe Build v2.8.4 • Stable Distribution</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
