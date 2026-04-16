"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2 } from 'lucide-react';
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
      // Simulate successful login with complete profile data
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
      <Card className="w-full max-w-md bg-white border border-border shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-[#00ACC1] p-10 text-white text-center">
          <h1 className="text-3xl font-black mb-2 uppercase tracking-tight">Welcome Back</h1>
          <p className="text-white/80 font-bold">Protecting India's Delivery Heroes</p>
        </div>
        
        <CardContent className="p-10">
          <Tabs defaultValue="mobile" className="w-full">
            <TabsList className="grid grid-cols-2 mb-10 bg-[#E0F7FA] p-1.5 h-14 rounded-xl">
              <TabsTrigger value="mobile" className="rounded-lg font-black data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Mobile OTP</TabsTrigger>
              <TabsTrigger value="email" className="rounded-lg font-black data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Email OTP</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mobile">
              <div className="space-y-6">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#00838F] uppercase tracking-widest">Phone Number</label>
                      <div className="flex gap-2">
                        <div className="flex items-center justify-center px-4 bg-[#E0F7FA] border border-border rounded-lg text-primary font-black">+91</div>
                        <Input placeholder="Enter 10-digit number" className="h-12 border-2 focus-visible:ring-primary rounded-lg font-bold" maxLength={10} />
                      </div>
                    </div>
                    <Button onClick={handleSendOtp} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect" disabled={loading}>
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm font-bold text-[#00838F] text-center">Enter the 6-digit code sent to your phone</p>
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, i) => (
                        <Input
                          key={i}
                          id={`otp-${i}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          className="w-12 h-14 text-center text-xl font-black border-2 rounded-lg"
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <Button onClick={handleVerify} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect" disabled={loading}>
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Verify & Login"}
                    </Button>
                    <button onClick={() => setOtpSent(false)} className="w-full text-xs font-black text-primary hover:underline uppercase tracking-widest">Change Number</button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="email">
              <div className="space-y-6">
                {!otpSent ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#00838F] uppercase tracking-widest">Email Address</label>
                      <Input placeholder="partner@example.com" className="h-12 border-2 focus-visible:ring-primary rounded-lg font-bold" type="email" />
                    </div>
                    <Button onClick={handleSendOtp} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect" disabled={loading}>
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Send OTP"}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm font-bold text-[#00838F] text-center">Enter the 6-digit code sent to your email</p>
                    <div className="flex justify-between gap-2">
                      {otp.map((digit, i) => (
                        <Input
                          key={i}
                          id={`otp-email-${i}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          className="w-12 h-14 text-center text-xl font-black border-2 rounded-lg"
                          maxLength={1}
                        />
                      ))}
                    </div>
                    <Button onClick={handleVerify} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-full font-black shadow-lg btn-hover-effect" disabled={loading}>
                      {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Verify & Login"}
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-center font-bold text-[#00838F] text-sm">
              New here? <Link href="/register" className="text-primary font-black hover:underline">Register as Delivery Partner</Link>
            </p>
          </div>
          
          <div className="mt-10 flex justify-center gap-6">
            <div className="flex items-center gap-1 text-[9px] font-black text-muted-foreground uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> PCI DSS
            </div>
            <div className="flex items-center gap-1 text-[9px] font-black text-muted-foreground uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> IRDAI APPD
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
