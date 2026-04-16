"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSendOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      toast({ title: "OTP Sent!", description: "Check your messages for the 6-digit code." });
    }, 1200);
  };

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const mockUser = { 
        name: 'Rajesh Kumar', 
        platform: 'Swiggy',
        phone: '+91 98765 43210',
        email: 'rajesh.kumar@swiggy.com',
        city: 'Chennai'
      };
      localStorage.setItem('tp_user', JSON.stringify(mockUser));
      router.push('/dashboard');
    }, 1200);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6 relative z-10">
      <Card className="w-full max-w-md bg-black border border-primary/20 shadow-2xl rounded-[2.5rem] overflow-hidden card-neon-glow">
        <div className="bg-primary/10 p-10 text-white text-center border-b border-primary/20">
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter font-headline">Welcome Back</h1>
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] icon-neon-glow">Protecting India's Delivery Heroes</p>
        </div>
        
        <CardContent className="p-10">
          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid grid-cols-2 mb-10 bg-white/5 p-1.5 h-16 rounded-2xl border border-white/5">
              <TabsTrigger value="mobile" className="rounded-xl font-black data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl flex gap-2 uppercase tracking-tighter text-xs">
                <Phone className="w-4 h-4" /> Mobile
              </TabsTrigger>
              <TabsTrigger value="email" className="rounded-xl font-black data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl flex gap-2 uppercase tracking-tighter text-xs">
                <Mail className="w-4 h-4" /> Email
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mobile">
              <div className="space-y-6">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Phone Number</label>
                      <div className="flex gap-2">
                        <div className="flex items-center justify-center px-4 bg-white/5 border border-primary/20 rounded-xl text-primary font-black">+91</div>
                        <Input placeholder="Enter 10-digit number" className="h-14 border-primary/20 bg-white/5 focus-visible:ring-primary rounded-xl font-bold text-white px-6 text-lg" maxLength={10} />
                      </div>
                    </div>
                    <Button onClick={handleSendOtp} className="w-full h-16 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect text-white uppercase text-lg" disabled={loading}>
                      {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-6 text-center">
                    <p className="text-sm font-bold text-white/70 uppercase tracking-tight">Enter the 6-digit code sent to your phone</p>
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, i) => (
                        <Input
                          key={i}
                          id={`otp-${i}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          className="w-12 h-16 text-center text-3xl font-black border-primary/20 bg-white/5 rounded-xl text-white focus:border-primary"
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <Button onClick={handleVerify} className="w-full h-16 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect text-white uppercase text-lg" disabled={loading}>
                      {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : "Verify & Login"}
                    </Button>
                    <button onClick={() => setOtpSent(false)} className="mt-4 text-[10px] font-black text-primary hover:underline uppercase tracking-widest transition-colors">Change Number</button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="email">
              <div className="space-y-6">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest ml-1">Email Address</label>
                      <Input placeholder="partner@example.com" className="h-14 border-primary/20 bg-white/5 focus-visible:ring-primary rounded-xl font-bold text-white px-6 text-lg" type="email" />
                    </div>
                    <Button onClick={handleSendOtp} className="w-full h-16 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect text-white uppercase text-lg" disabled={loading}>
                      {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-6 text-center">
                    <p className="text-sm font-bold text-white/70 uppercase tracking-tight">Enter the 6-digit code sent to your email</p>
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, i) => (
                        <Input
                          key={i}
                          id={`otp-email-${i}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          className="w-12 h-16 text-center text-3xl font-black border-primary/20 bg-white/5 rounded-xl text-white focus:border-primary"
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <Button onClick={handleVerify} className="w-full h-16 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect text-white uppercase text-lg" disabled={loading}>
                      {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : "Verify & Login"}
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 pt-6 border-t border-primary/10">
            <p className="text-center font-bold text-white/50 text-sm">
              New here? <Link href="/register" className="text-primary font-black hover:underline uppercase tracking-tighter">Register as Partner</Link>
            </p>
          </div>
          
          <div className="mt-10 flex justify-center gap-6 opacity-30">
            <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest">
              <div className="p-1.5 bg-white/10 rounded-lg"><ShieldCheck className="w-3 h-3" /></div> PCI DSS
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest">
              <div className="p-1.5 bg-white/10 rounded-lg"><ShieldCheck className="w-3 h-3" /></div> IRDAI
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
