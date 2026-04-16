"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Loader2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Standard');

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('Swiggy');
  const [city, setCity] = useState('Chennai (TN)');
  const [earnings, setEarnings] = useState([500]);

  const platforms = ['Swiggy', 'Zomato', 'Blinkit', 'Zepto', 'Amazon', 'Dunzo', 'BigBasket', 'Flipkart'];

  const nextStep = () => {
    if (step === 1 && (!name || !phone)) return;
    setStep(s => Math.min(s + 1, 5));
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleActivate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const userData = { 
        name: name || 'Partner', 
        platform: platform || 'Swiggy',
        city: city || 'Chennai',
        phone: phone || '+91 00000 00000',
        email: email || 'partner@triggerpe.com'
      };
      localStorage.setItem('tp_user', JSON.stringify(userData));
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-transparent relative z-10">
      <h1 className="text-3xl font-black text-[#006064] mb-12 uppercase tracking-tighter">PARTNER ONBOARDING</h1>
      
      {/* Step Indicator */}
      <div className="flex items-center gap-4 mb-12 w-full max-w-2xl">
        {[1, 2, 3, 4, 5].map((s) => (
          <React.Fragment key={s}>
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center font-black transition-colors",
              step >= s ? "bg-primary text-white" : "bg-white text-muted-foreground border-2 border-border"
            )}>
              {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
            </div>
            {s < 5 && <div className={cn("h-1 flex-1 rounded-full", step > s ? "bg-primary" : "bg-white")} />}
          </React.Fragment>
        ))}
      </div>

      <Card className="w-full max-w-2xl bg-white border border-border shadow-xl rounded-2xl overflow-hidden p-10">
        
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-black text-[#006064]">Personal Details</h2>
            <div className="space-y-4">
              <Input 
                placeholder="Full Name" 
                className="h-12 font-bold border-2" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input 
                placeholder="Phone Number (+91)" 
                className="h-12 font-bold border-2" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input 
                placeholder="Email Address" 
                className="h-12 font-bold border-2" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-muted-foreground uppercase">Select Platform</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {platforms.map(p => (
                  <Button 
                    key={p} 
                    variant={platform === p ? "default" : "outline"} 
                    onClick={() => setPlatform(p)}
                    className="h-12 font-bold transition-all"
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>
            <Button onClick={nextStep} className="w-full h-14 bg-primary font-black rounded-full btn-hover-effect">Next</Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-black text-[#006064]">Your Location</h2>
            <div className="p-10 border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-10 h-10 text-primary animate-bounce" />
              </div>
              <Button variant="outline" className="font-black h-12 rounded-full px-8">Detect My Location</Button>
              <p className="text-sm font-bold text-[#00838F]">Current City: <span className="text-primary">{city}</span></p>
            </div>
            <Input 
              placeholder="Enter City Manually" 
              className="h-12 font-bold border-2" 
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="flex-1 h-14 font-black">Back</Button>
              <Button onClick={nextStep} className="flex-[2] h-14 bg-primary font-black rounded-full btn-hover-effect">Next</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-black text-[#006064]">Daily Earnings</h2>
            <div className="space-y-12 py-8">
              <div className="flex justify-between items-end">
                <span className="text-sm font-black text-muted-foreground uppercase">Estimated Daily Income</span>
                <span className="text-4xl font-black text-primary">₹{earnings[0]}</span>
              </div>
              <Slider value={earnings} onValueChange={setEarnings} min={100} max={2000} step={50} className="py-4" />
              <div className="p-6 bg-[#E0F7FA] rounded-2xl border border-primary/10">
                <p className="text-sm font-bold text-[#006064] mb-2">Coverage Preview:</p>
                <p className="text-2xl font-black text-primary">₹{Math.min(earnings[0] * 0.8, 800).toFixed(0)} <span className="text-xs font-bold text-[#00838F]">per trigger event</span></p>
                <p className="text-[10px] font-black text-muted-foreground uppercase mt-2">Calculated as 80% of earnings, max ₹800</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="flex-1 h-14 font-black">Back</Button>
              <Button onClick={nextStep} className="flex-[2] h-14 bg-primary font-black rounded-full btn-hover-effect">Next</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-black text-[#006064] flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-destructive" /> Coverage Exclusions
            </h2>
            <div className="space-y-3 bg-muted/30 p-6 rounded-2xl">
              {[
                'Vehicle mechanical/electrical repairs',
                'Personal health or medical costs',
                'War or civil unrest',
                'Global pandemic lockdowns',
                'Personal platform suspension',
                'Self-inflicted delivery disruption'
              ].map((ex, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#00838F]">
                  <span className="text-destructive">✕</span> {ex}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-3 p-4 bg-[#E0F7FA] rounded-xl">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} />
              <label htmlFor="terms" className="text-sm font-bold text-[#006064] cursor-pointer">
                I understand and agree to these exclusions
              </label>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="flex-1 h-14 font-black">Back</Button>
              <Button onClick={nextStep} disabled={!agreed} className="flex-[2] h-14 bg-primary font-black rounded-full btn-hover-effect">Next</Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-2xl font-black text-[#006064]">Choose Plan & Activate</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Basic', price: 49 },
                { name: 'Standard', price: 79 },
                { name: 'Premium', price: 99 }
              ].map(plan => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={cn(
                    "p-6 border-2 rounded-2xl flex flex-col items-center transition-all",
                    selectedPlan === plan.name ? "border-primary bg-primary/5 shadow-md scale-105" : "border-border bg-white"
                  )}
                >
                  <span className="text-xs font-black uppercase text-muted-foreground mb-2">{plan.name}</span>
                  <span className="text-2xl font-black text-[#006064]">₹{plan.price}</span>
                  <span className="text-[10px] font-bold text-[#00838F]">/week</span>
                </button>
              ))}
            </div>
            <div className="pt-6 border-t border-border">
              <Button 
                onClick={handleActivate} 
                disabled={loading}
                className="w-full h-16 bg-primary font-black text-xl rounded-full btn-hover-effect shadow-xl"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : `Pay ₹${selectedPlan === 'Basic' ? 49 : selectedPlan === 'Standard' ? 79 : 99} & Activate`}
              </Button>
            </div>
          </div>
        )}

      </Card>
    </div>
  );
}
