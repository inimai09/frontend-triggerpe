
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Loader2, Info, Sparkles } from 'lucide-react';
import { premiumRiskExplanation } from '@/ai/flows/premium-risk-explanation';
import { DashboardLayout } from '@/components/DashboardLayout';

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
    <DashboardLayout>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Premium AI Insights</h1>
          <p className="text-primary font-bold uppercase tracking-widest text-[11px] icon-neon-glow">Deep dive into your dynamic premium calculation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="card-neon-glow overflow-hidden rounded-[2.5rem]">
            <CardHeader className="bg-primary/20 border-b border-white/10 p-12">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-black text-white uppercase tracking-widest">Active Premium</CardTitle>
                <div className="text-right">
                  <p className="text-7xl font-black text-white tracking-tighter drop-shadow-2xl">₹72.50</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary icon-neon-glow mt-2">Weekly Subscription</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-16 space-y-12">
              <h3 className="text-[11px] font-black text-white/40 uppercase tracking-widest border-b border-white/5 pb-6">Premium Cost Components</h3>
              <div className="space-y-8">
                {[
                  { label: 'Base rate', value: mockData.baseRate },
                  { label: 'Zone surcharge', value: mockData.zoneSurcharge },
                  { label: 'Platform loading', value: mockData.platformLoading },
                  { label: 'Risk loading', value: mockData.riskLoading },
                  { label: 'Weather loading', value: mockData.weatherLoading },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-lg font-bold text-white/60 group-hover:text-white transition-colors">{item.label}</span>
                    <span className="font-black text-white text-xl">₹{item.value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-10 border-t-2 border-primary/20 flex justify-between items-center">
                  <span className="text-2xl font-black text-white uppercase tracking-tighter">Total Weekly</span>
                  <span className="text-5xl font-black text-primary icon-neon-glow tracking-tighter">₹{mockData.totalPremium.toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-primary/5 p-10 rounded-[2rem] border border-primary/20 flex items-start gap-6">
                <Info className="w-8 h-8 text-primary shrink-0 icon-neon-glow" />
                <p className="text-[13px] font-bold text-white/80 leading-relaxed">
                  Monthly projection is <span className="font-black text-primary">₹290.00</span>. Rates re-calibrate every Monday based on regional macro-risk indices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-[2.5rem]">
            <CardHeader className="border-b border-white/5 px-12 py-10">
              <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Risk Profiling</CardTitle>
            </CardHeader>
            <CardContent className="p-16 space-y-16">
              <div className="flex flex-col items-center gap-10">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="112" cy="112" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="20" fill="transparent" />
                    <circle cx="112" cy="112" r="100" stroke="#00ACC1" strokeWidth="20" fill="transparent" strokeDasharray={628} strokeDashoffset={628 - (628 * mockData.riskScore) / 100} strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(0,172,193,0.6)]" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-7xl font-black text-white tracking-tighter">{mockData.riskScore}</span>
                    <span className="text-[11px] font-black text-white/30 uppercase tracking-widest">Score Index</span>
                  </div>
                </div>
                <Badge className="bg-warning/20 text-warning border-warning/30 px-10 py-3 text-sm font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,183,77,0.3)]">{mockData.riskLevel}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5">
                  <span className="text-[10px] font-black text-white/30 uppercase block mb-3 tracking-widest">Zone Status</span>
                  <span className="text-lg font-black text-white">{mockData.zone}</span>
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5">
                  <span className="text-[10px] font-black text-white/30 uppercase block mb-3 tracking-widest">Platform Feed</span>
                  <span className="text-lg font-black text-white">{mockData.platform}</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[11px] font-black text-white/40 uppercase tracking-widest mb-6">Historical Risk Volatility</h3>
                <div className="h-32 flex items-end gap-5 px-4">
                  {[45, 42, 38, 35].map((val, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-[1rem] relative group" style={{ height: `${val}%` }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-[11px] font-black px-3 py-1 rounded-full shadow-2xl transition-all">0.{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-black text-white/20 uppercase tracking-widest">
                  <span>Week 04</span>
                  <span>Live Feed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-neon-glow rounded-[3rem] overflow-hidden">
          <CardContent className="p-16">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-32 h-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20 shadow-[0_0_30px_rgba(0,172,193,0.3)]">
                <BrainCircuit className="w-16 h-16 text-primary icon-neon-glow" />
              </div>
              <div className="flex-1 space-y-8 text-center md:text-left">
                <h2 className="text-5xl font-black text-white uppercase tracking-tighter">AI Premium Breakdown</h2>
                <p className="text-lg font-bold text-white/60 max-w-3xl leading-relaxed">
                  Our proprietary neural engine processes high-fidelity weather telemetry, historical claim density, and platform-specific risk loading in real-time.
                </p>
                {!explanation ? (
                  <Button onClick={getAIExplanation} disabled={loading} className="rounded-full bg-primary text-white font-black px-16 h-24 text-2xl btn-hover-effect shadow-2xl">
                    {loading ? <Loader2 className="w-8 h-8 animate-spin mr-4" /> : <Sparkles className="w-8 h-8 mr-4" />}
                    GENERATE AI REPORT
                  </Button>
                ) : (
                  <div className="p-16 bg-white/5 rounded-[2.5rem] animate-in slide-in-from-top-4 duration-700 relative border border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.02)]">
                    <div className="prose prose-invert prose-lg max-w-none text-white/80 font-bold leading-relaxed whitespace-pre-wrap">
                      {explanation}
                    </div>
                    <Button variant="ghost" onClick={() => setExplanation(null)} className="mt-12 text-primary font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                      Re-calculate Insights
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
