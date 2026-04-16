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
      <h1 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter font-headline">PARTNER ONBOARDING</h1>
      
      {/* Step Indicator */}
      <div className="flex items-center gap-4 mb-12 w-full max-w-2xl">
        {[1, 2, 3, 4, 5].map((s) => (
          <React.Fragment key={s}>
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center font-black transition-all border-2",
              step >= s ? "bg-primary text-white border-primary" : "bg-black text-white/30 border-primary/20"
            )}>
              {step > s ? <CheckCircle2 className="w-7 h-7" /> : s}
            </div>
            {s < 5 && <div className={cn("h-1 flex-1 rounded-full", step > s ? "bg-primary" : "bg-white/10")} />}
          </React.Fragment>
        ))}
      </div>

      <Card className="w-full max-w-2xl bg-black border border-primary/20 shadow-2xl rounded-3xl overflow-hidden p-12">
        
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-3xl font-black text-white font-headline">Personal Details</h2>
            <div className="space-y-5">
              <Input 
                placeholder="Full Name" 
                className="h-14 font-bold border-primary/20 bg-white/5 text-white placeholder:text-white/20" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input 
                placeholder="Phone Number (+91)" 
                className="h-14 font-bold border-primary/20 bg-white/5 text-white placeholder:text-white/20" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input 
                placeholder="Email Address" 
                className="h-14 font-bold border-primary/20 bg-white/5 text-white placeholder:text-white/20" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-primary uppercase tracking-widest">Select Platform</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {platforms.map(p => (
                  <Button 
                    key={p} 
                    variant={platform === p ? "default" : "outline"} 
                    onClick={() => setPlatform(p)}
                    className={cn(
                      "h-12 font-black transition-all",
                      platform === p ? "bg-primary text-white" : "border-primary/20 text-white hover:bg-white/5"
                    )}
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>
            <Button onClick={nextStep} className="w-full h-16 bg-primary text-white font-black rounded-full btn-hover-effect text-lg">Next</Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-3xl font-black text-white font-headline">Your Location</h2>
            <div className="p-12 border-2 border-dashed border-primary/20 rounded-3xl flex flex-col items-center gap-8 bg-white/5">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <MapPin className="w-12 h-12 text-primary animate-bounce" />
              </div>
              <Button variant="outline" className="font-black h-14 rounded-full px-10 border-primary text-primary hover:bg-primary hover:text-white">Detect My Location</Button>
              <p className="text-lg font-bold text-white/70">Current City: <span className="text-primary">{city}</span></p>
            </div>
            <Input 
              placeholder="Enter City Manually" 
              className="h-14 font-bold border-primary/20 bg-white/5 text-white" 
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="flex-1 h-16 font-black text-white/50 hover:text-white">Back</Button>
              <Button onClick={nextStep} className="flex-[2] h-16 bg-primary text-white font-black rounded-full btn-hover-effect">Next</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-3xl font-black text-white font-headline">Daily Earnings</h2>
            <div className="space-y-12 py-8">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Estimated Daily Income</span>
                <span className="text-5xl font-black text-white">₹{earnings[0]}</span>
              </div>
              <Slider value={earnings} onValueChange={setEarnings} min={100} max={2000} step={50} className="py-4" />
              <div className="p-8 bg-white/5 rounded-3xl border border-primary/20">
                <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-3">Coverage Preview</p>
                <p className="text-4xl font-black text-white">₹{Math.min(earnings[0] * 0.8, 800).toFixed(0)} <span className="text-xs font-bold text-primary">/ event</span></p>
                <p className="text-[10px] font-black text-white/30 uppercase mt-4">Calculated as 80% of daily income</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="flex-1 h-16 font-black text-white/50 hover:text-white">Back</Button>
              <Button onClick={nextStep} className="flex-[2] h-16 bg-primary text-white font-black rounded-full btn-hover-effect">Next</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-3xl font-black text-white flex items-center gap-3 font-headline">
              <ShieldAlert className="w-8 h-8 text-primary" /> Exclusions
            </h2>
            <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-primary/10">
              {[
                'Vehicle mechanical/electrical repairs',
                'Personal health or medical costs',
                'Global pandemic lockdowns',
                'Personal platform suspension'
              ].map((ex, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-white/70">
                  <span className="text-primary">✕</span> {ex}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-2xl border border-primary/20">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} className="border-primary data-[state=checked]:bg-primary" />
              <label htmlFor="terms" className="text-sm font-bold text-white/80 cursor-pointer">
                I understand and agree to these exclusions
              </label>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="flex-1 h-16 font-black text-white/50 hover:text-white">Back</Button>
              <Button onClick={nextStep} disabled={!agreed} className="flex-[2] h-16 bg-primary text-white font-black rounded-full btn-hover-effect">Next</Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-300">
            <h2 className="text-3xl font-black text-white font-headline">Final Step</h2>
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
                    "p-8 border-2 rounded-3xl flex flex-col items-center transition-all",
                    selectedPlan === plan.name ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(0,172,193,0.3)] scale-105" : "border-primary/10 bg-white/5"
                  )}
                >
                  <span className="text-[10px] font-black uppercase text-primary mb-3 tracking-widest">{plan.name}</span>
                  <span className="text-3xl font-black text-white">₹{plan.price}</span>
                  <span className="text-[10px] font-bold text-white/30">/week</span>
                </button>
              ))}
            </div>
            <div className="pt-10 border-t border-primary/20">
              <Button 
                onClick={handleActivate} 
                disabled={loading}
                className="w-full h-20 bg-primary text-white font-black text-2xl rounded-full btn-hover-effect shadow-2xl"
              >
                {loading ? <Loader2 className="w-8 h-8 animate-spin mr-3" /> : `Pay ₹${selectedPlan === 'Basic' ? 49 : selectedPlan === 'Standard' ? 79 : 99} & Activate`}
              </Button>
            </div>
          </div>
        )}

      </Card>
    </div>
  );
}
