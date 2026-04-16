"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
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
      toast({ title: "OTP Sent!", description: "Check your phone/email for the 6-digit code." });
    }, 1500);
  };

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Mock successful login
      localStorage.setItem('tp_user', JSON.stringify({ name: 'Rajesh Kumar', platform: 'Swiggy' }));
      router.push('/dashboard');
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-none shadow-2xl overflow-hidden rounded-2xl">
        <div className="bg-primary p-8 text-white text-center">
          <h1 className="text-3xl font-headline font-bold mb-2">Welcome Back</h1>
          <p className="text-white/80">Protecting India's Delivery Heroes</p>
        </div>
        
        <CardContent className="p-8">
          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 bg-background p-1 h-12 rounded-xl">
              <TabsTrigger value="mobile" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Mobile OTP</TabsTrigger>
              <TabsTrigger value="email" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Email OTP</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mobile">
              <div className="space-y-6">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-secondary">Phone Number</label>
                      <div className="flex gap-2">
                        <div className="flex items-center justify-center px-3 border border-border bg-muted rounded-lg text-secondary font-bold">+91</div>
                        <Input placeholder="Enter 10-digit number" className="h-12 border-2 focus-visible:ring-primary rounded-lg" maxLength={10} />
                      </div>
                    </div>
                    <Button 
                      onClick={handleSendOtp} 
                      className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full font-bold shadow-lg"
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-6 animate-in slide-in-from-right duration-300">
                    <p className="text-sm text-secondary text-center">Enter the 6-digit code sent to your phone</p>
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, i) => (
                        <Input
                          key={i}
                          id={`otp-${i}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          className="w-12 h-14 text-center text-xl font-bold border-2 rounded-lg"
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <Button 
                      onClick={handleVerify} 
                      className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full font-bold shadow-lg"
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Verify & Login"}
                    </Button>
                    <button onClick={() => setOtpSent(false)} className="w-full text-sm font-bold text-primary hover:underline">Change Number</button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="email">
              <div className="space-y-6">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-secondary">Email Address</label>
                      <Input placeholder="partner@example.com" className="h-12 border-2 focus-visible:ring-primary rounded-lg" type="email" />
                    </div>
                    <Button 
                      onClick={handleSendOtp} 
                      className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full font-bold shadow-lg"
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm text-secondary text-center">Enter the 6-digit code sent to your email</p>
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, i) => (
                        <Input
                          key={i}
                          id={`otp-email-${i}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          className="w-12 h-14 text-center text-xl font-bold border-2 rounded-lg"
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <Button 
                      onClick={handleVerify} 
                      className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full font-bold shadow-lg"
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Verify & Login"}
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-center text-secondary text-sm">
              New here? <Link href="/register" className="text-primary font-bold hover:underline">Register as Delivery Partner</Link>
            </p>
          </div>
          
          <div className="mt-8 flex justify-center gap-4 opacity-50">
            <div className="flex items-center gap-1 text-[10px] font-bold text-secondary uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> PCI DSS
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-secondary uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> ISO 27001
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-secondary uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> IRDAI APPD
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
