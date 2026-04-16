"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Loader2, Info, TrendingUp, ShieldAlert, Sparkles, TrendingDown } from 'lucide-react';
import { premiumRiskExplanation } from '@/ai/flows/premium-risk-explanation';

export default function PremiumAIPage() {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  const mockData = {
    baseRate: 30,
    zoneSurcharge: 25,
    platformLoading: 5,
    riskLoading: 7,
    weatherLoading: 5.50,
    totalPremium: 72.50,
    riskScore: 35,
    riskLevel: 'MEDIUM',
    zone: 'HIGH (Chennai)',
    platform: 'Zomato',
  };

  const getAIExplanation = async () => {
    setLoading(true);
    try {
      const result = await premiumRiskExplanation(mockData);
      setExplanation(result.explanation);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">Premium AI Insights</h1>
        <p className="text-[#00838F] font-bold uppercase tracking-widest text-xs">Deep dive into your dynamic premium calculation.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white border border-border shadow-lg overflow-hidden">
          <CardHeader className="bg-[#00ACC1] text-white p-10">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-black uppercase tracking-widest">Current Premium</CardTitle>
              <div className="text-right">
                <p className="text-5xl font-black">₹72.50</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Weekly Auto-Debit</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest border-b pb-4">Component Breakdown</h3>
            <div className="space-y-6">
              {[
                { label: 'Base rate', value: mockData.baseRate },
                { label: 'Zone surcharge', value: mockData.zoneSurcharge },
                { label: 'Platform loading', value: mockData.platformLoading },
                { label: 'Risk loading', value: mockData.riskLoading },
                { label: 'Weather loading', value: mockData.weatherLoading },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm font-bold text-[#00838F]">{item.label}</span>
                  <span className="font-black text-[#006064]">₹{item.value.toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-6 border-t-2 border-primary/20 flex justify-between items-center">
                <span className="text-lg font-black text-[#006064]">Total Premium</span>
                <span className="text-3xl font-black text-primary">₹{mockData.totalPremium.toFixed(2)}</span>
              </div>
            </div>
            <div className="bg-[#E0F7FA] p-6 rounded-2xl flex items-start gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <p className="text-xs font-bold text-[#00838F] leading-relaxed">
                Your monthly estimate is <span className="font-black text-primary">₹290.00</span>. Premium rates are adjusted every Monday at 12:00 AM based on live city risk data.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border border-border shadow-lg">
          <CardHeader className="border-b px-10 py-8">
            <CardTitle className="text-xl font-black text-[#006064] uppercase tracking-widest">Risk Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-10">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="#E0F7FA" strokeWidth="16" fill="transparent" />
                  <circle cx="80" cy="80" r="70" stroke="#00ACC1" strokeWidth="16" fill="transparent" strokeDasharray={440} strokeDashoffset={440 - (440 * mockData.riskScore) / 100} strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl font-black text-[#006064]">{mockData.riskScore}</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase">Score</span>
                </div>
              </div>
              <Badge className="bg-warning text-white px-6 py-2 text-sm font-black uppercase tracking-widest">{mockData.riskLevel}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#E0F7FA] rounded-2xl">
                <span className="text-[10px] font-black text-muted-foreground uppercase block mb-2">Zone Status</span>
                <span className="text-sm font-black text-[#006064]">{mockData.zone}</span>
              </div>
              <div className="p-6 bg-[#E0F7FA] rounded-2xl">
                <span className="text-[10px] font-black text-muted-foreground uppercase block mb-2">Platform Feed</span>
                <span className="text-sm font-black text-[#006064]">{mockData.platform}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest">Risk Trend (Last 4 Weeks)</h3>
              <div className="h-24 flex items-end gap-3 px-2">
                {[45, 42, 38, 35].map((val, i) => (
                  <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-t-lg relative group" style={{ height: `${val}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#006064] text-white text-[10px] font-black px-2 py-1 rounded">0.{val}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                <span>Week 1</span>
                <span>Current</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-border shadow-xl rounded-2xl">
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-3xl bg-[#E0F7FA] flex items-center justify-center shrink-0 border-2 border-primary/20">
              <BrainCircuit className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-black text-[#006064] uppercase tracking-tighter">AI Premium Analysis</h2>
              <p className="text-sm font-bold text-[#00838F] max-w-2xl leading-relaxed">
                Our neural engine analyzes historical claim density, IMD weather feeds, and platform-specific risk loading. Get a plain English explanation of your costs.
              </p>
              {!explanation ? (
                <Button onClick={getAIExplanation} disabled={loading} className="rounded-full bg-primary font-black px-10 h-16 text-lg btn-hover-effect shadow-xl">
                  {loading ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : <Sparkles className="w-6 h-6 mr-2" />}
                  Generate AI Analysis
                </Button>
              ) : (
                <div className="p-10 bg-[#E0F7FA] rounded-2xl animate-in slide-in-from-top-4 duration-500 relative border border-primary/10">
                  <div className="prose prose-sm text-[#006064] font-bold leading-relaxed whitespace-pre-wrap">
                    {explanation}
                  </div>
                  <Button variant="ghost" onClick={() => setExplanation(null)} className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    Re-generate Insights
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}