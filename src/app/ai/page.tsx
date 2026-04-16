
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
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
        <header>
          <div className="p-6 bg-black/40 border border-white/5 rounded-[2rem] w-fit btn-hover-effect">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Premium AI Insights</h1>
            <p className="text-primary font-bold uppercase tracking-widest text-[9px] icon-neon-glow">Deep dive into your dynamic premium calculation.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-neon-glow overflow-hidden rounded-[2.5rem]">
            <CardHeader className="bg-primary/20 border-b border-white/10 p-8">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-black text-white uppercase tracking-widest">Active Premium</CardTitle>
                <div className="text-right">
                  <p className="text-5xl font-black text-white tracking-tighter drop-shadow-2xl">₹72.50</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary icon-neon-glow mt-1">Weekly Subscription</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <h3 className="text-[9px] font-black text-white/40 uppercase tracking-widest border-b border-white/5 pb-4">Premium Cost Components</h3>
              <div className="space-y-4">
                {[
                  { label: 'Base rate', value: mockData.baseRate },
                  { label: 'Zone surcharge', value: mockData.zoneSurcharge },
                  { label: 'Platform loading', value: mockData.platformLoading },
                  { label: 'Risk loading', value: mockData.riskLoading },
                  { label: 'Weather loading', value: mockData.weatherLoading },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group btn-hover-effect p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-base font-bold text-white/60 group-hover:text-white transition-colors">{item.label}</span>
                    <span className="font-black text-white text-lg">₹{item.value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-6 border-t border-primary/20 flex justify-between items-center btn-hover-effect">
                  <span className="text-xl font-black text-white uppercase tracking-tighter">Total Weekly</span>
                  <span className="text-3xl font-black text-primary icon-neon-glow tracking-tighter">₹{mockData.totalPremium.toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-primary/5 p-6 rounded-[1.5rem] border border-primary/20 flex items-start gap-4 btn-hover-effect">
                <Info className="w-5 h-5 text-primary shrink-0 icon-neon-glow" />
                <p className="text-[11px] font-bold text-white/80 leading-relaxed">
                  Monthly projection is <span className="font-black text-primary">₹290.00</span>. Rates re-calibrate every Monday based on regional macro-risk indices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-neon-glow rounded-[2.5rem]">
            <CardHeader className="border-b border-white/5 px-8 py-6">
              <CardTitle className="text-lg font-black text-white uppercase tracking-widest">Risk Profiling</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-10">
              <div className="flex flex-col items-center gap-6 btn-hover-effect">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.05)" strokeWidth="14" fill="transparent" />
                    <circle cx="80" cy="80" r="70" stroke="#00ACC1" strokeWidth="14" fill="transparent" strokeDasharray={440} strokeDashoffset={440 - (440 * mockData.riskScore) / 100} strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(0,172,193,0.6)]" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-5xl font-black text-white tracking-tighter">{mockData.riskScore}</span>
                    <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Score Index</span>
                  </div>
                </div>
                <Badge className="bg-warning/20 text-warning border-warning/30 px-6 py-2 text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,183,77,0.3)]">{mockData.riskLevel}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/5 btn-hover-effect">
                  <span className="text-[9px] font-black text-white/30 uppercase block mb-2 tracking-widest">Zone Status</span>
                  <span className="text-base font-black text-white">{mockData.zone}</span>
                </div>
                <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/5 btn-hover-effect">
                  <span className="text-[9px] font-black text-white/30 uppercase block mb-2 tracking-widest">Platform Feed</span>
                  <span className="text-base font-black text-white">{mockData.platform}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-4">Historical Risk Volatility</h3>
                <div className="h-24 flex items-end gap-3 px-2">
                  {[45, 42, 38, 35].map((val, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-[0.75rem] relative group btn-hover-effect" style={{ height: `${val}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-[9px] font-black px-2 py-0.5 rounded-full shadow-2xl transition-all">0.{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[8px] font-black text-white/20 uppercase tracking-widest">
                  <span>Week 04</span>
                  <span>Live Feed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="card-neon-glow rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-[0_0_30px_rgba(0,172,193,0.3)] btn-hover-effect">
                <BrainCircuit className="w-10 h-10 text-primary icon-neon-glow" />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">AI Premium Breakdown</h2>
                <p className="text-base font-bold text-white/60 max-w-2xl leading-relaxed">
                  Our proprietary neural engine processes high-fidelity weather telemetry, historical claim density, and platform-specific risk loading in real-time.
                </p>
                {!explanation ? (
                  <Button onClick={getAIExplanation} disabled={loading} className="rounded-full bg-primary text-white font-black px-10 h-14 text-xl btn-hover-effect shadow-2xl">
                    {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : <Sparkles className="w-6 h-6 mr-3" />}
                    GENERATE AI REPORT
                  </Button>
                ) : (
                  <div className="p-8 bg-white/5 rounded-[1.75rem] animate-in slide-in-from-top-4 duration-700 relative border border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.02)]">
                    <div className="prose prose-invert prose-sm max-w-none text-white/80 font-bold leading-relaxed whitespace-pre-wrap">
                      {explanation}
                    </div>
                    <Button variant="ghost" onClick={() => setExplanation(null)} className="mt-6 text-primary font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors btn-hover-effect">
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
