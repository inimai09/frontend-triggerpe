
"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BrainCircuit, 
  Loader2, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Database,
  ArrowDown,
  MapPin,
  CheckCircle2,
  Info
} from 'lucide-react';
import { premiumRiskExplanation } from '@/ai/flows/premium-risk-explanation';
import { DashboardLayout } from '@/components/DashboardLayout';
import { cn } from '@/lib/utils';

export default function PremiumAIPage() {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<any[] | null>(null);
  const [verdict, setVerdict] = useState<string | null>(null);

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
    
    // Simulating high-fidelity structured decomposition
    setTimeout(() => {
      setExplanation([
        { 
          label: 'Base Rate (₹30)', 
          desc: 'The standard floor rate for the Chennai Central hub.', 
          icon: Database,
          status: 'STANDARD',
          color: 'text-white'
        },
        { 
          label: 'Zone Surcharge (+₹25)', 
          desc: "Applied due to the 'Cyclone Warning' status in your current geo-radius.", 
          icon: MapPin,
          status: 'DYNAMIC',
          color: 'text-warning'
        },
        { 
          label: 'Risk Score (35/100)', 
          desc: "Your individual score is 'OPTIMIZED' based on 98% GPS accuracy and zero historical fraud flags.", 
          icon: ShieldCheck,
          status: 'OPTIMIZED',
          color: 'text-success'
        },
        { 
          label: 'Platform Loading (₹5)', 
          desc: 'Minimal loading applied for Zomato operations which currently shows 99.4% stability.', 
          icon: Activity,
          status: 'STABLE',
          color: 'text-primary'
        },
        { 
          label: 'Weather Weighting (₹5.50)', 
          desc: 'Dynamic buffer added based on 55mm/hr forecasted rainfall for Wednesday.', 
          icon: Zap,
          status: 'RISK DETECTED',
          color: 'text-warning'
        }
      ]);
      setVerdict("Your premium is calculated to provide 100% wage recovery for up to 3 major weather disruptions this week.");
      setLoading(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-700 pb-12">
        <header>
          <h1 className="text-3xl font-black text-white font-headline tracking-tighter uppercase">Neural Insights</h1>
          <p className="text-white/60 font-medium mt-1">Deep dive into your dynamic premium calculation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Premium Breakdown */}
          <Card className="lg:col-span-7 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <CardHeader className="bg-primary/10 border-b border-white/10 p-8">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-black text-white uppercase tracking-widest">Active Subscription</CardTitle>
                <div className="text-right">
                  <p className="text-5xl font-black text-primary drop-shadow-[0_0_15px_#00ACC1]">₹72.50</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mt-1">Weekly Premium</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                {[
                  { label: 'Base Rate', value: mockData.baseRate, icon: Database },
                  { label: 'Zone Surcharge', value: mockData.zoneSurcharge, icon: Activity },
                  { label: 'Weather Weighting', value: mockData.weatherLoading, icon: Zap },
                  { label: 'Risk Adjustment', value: mockData.riskLoading + mockData.platformLoading, icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-2xl border border-transparent hover:border-white/10 transition-all group/item">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-black/40 rounded-full border border-white/10 group-hover/item:border-primary/50 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-bold text-white/60 uppercase tracking-tight">{item.label}</span>
                    </div>
                    <span className="font-black text-white">₹{item.value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-lg font-black text-white uppercase tracking-tighter">Total Weekly</span>
                  <span className="text-3xl font-black text-primary">₹{mockData.totalPremium.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Profile Mini-Card */}
          <Card className="lg:col-span-5 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="transparent" />
                <circle cx="64" cy="64" r="56" stroke="#00ACC1" strokeWidth="10" fill="transparent" strokeDasharray={351} strokeDashoffset={351 - (351 * mockData.riskScore) / 100} strokeLinecap="round" className="drop-shadow-[0_0_10px_#00ACC1]" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-black text-white">{mockData.riskScore}</span>
                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Risk Index</span>
              </div>
            </div>
            <div className="space-y-1">
              <Badge className="bg-success/20 text-success border-success/20 px-6 py-1.5 text-[9px] font-black uppercase tracking-widest">Optimized Profile</Badge>
              <p className="text-[9px] font-bold text-white/30 uppercase mt-2">Score updated 2 hours ago</p>
            </div>
          </Card>
        </div>

        {/* AI Explanation Result Area - GOD TIER UI/UX */}
        <div className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[3rem] overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-[0_0_25px_rgba(0,172,193,0.3)]",
                      loading && "animate-pulse"
                    )}>
                      <BrainCircuit className={cn("w-10 h-10 text-primary", loading && "animate-spin")} />
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-black text-white font-headline uppercase tracking-tight">AI Premium Decomposition</h2>
                      <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">Live Neural Verification Active</p>
                      </div>
                    </div>
                  </div>
                  {!explanation && !loading && (
                    <Button 
                      onClick={getAIExplanation} 
                      className="rounded-full bg-primary hover:bg-primary/90 text-white font-black px-12 h-16 text-lg uppercase tracking-tight btn-hover-effect border-none"
                    >
                      <Sparkles className="w-6 h-6 mr-3" />
                      Explain my Premium
                    </Button>
                  )}
                </div>
                
                {loading && (
                  <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Decoding Actuarial Risk Patterns...</p>
                  </div>
                )}

                {explanation && (
                  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {explanation.map((item, i) => (
                        <div key={i} className="p-6 bg-white/5 rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all group">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-black/40 rounded-full border border-white/10 group-hover:border-primary transition-colors">
                              <item.icon className={cn("w-5 h-5", item.color)} />
                            </div>
                            <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-white/10 text-white/40">{item.status}</Badge>
                          </div>
                          <h4 className="text-xs font-black text-white uppercase tracking-tight mb-2">{item.label}</h4>
                          <p className="text-[10px] font-medium text-white/50 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    {verdict && (
                      <div className="p-8 bg-primary/10 rounded-[2.5rem] border border-primary/20 flex items-start gap-6 group">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_#00ACC1] group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-7 h-7 text-white" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Final Actuarial Verdict</p>
                          <p className="text-lg font-black text-white leading-tight font-headline uppercase italic">
                            {verdict}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center pt-4">
                      <Button variant="ghost" onClick={() => { setExplanation(null); setVerdict(null); }} className="text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary/10 rounded-full h-12 px-8 border border-primary/20">
                        Refresh Logic Feed
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Logic Flow */}
        <section className="space-y-6 pt-6">
           <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] flex items-center gap-3 ml-2">
              <Cpu className="w-4 h-4 text-primary" /> Neural Logic Blueprint
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Data Ingestion', desc: 'Satellite weather & platform API feed.', icon: Database },
                { title: 'Neural Sorting', desc: 'Comparing live data to hub historicals.', icon: BrainCircuit },
                { title: 'Weighting', desc: 'Actuarial risk factors calculated.', icon: Activity },
                { title: 'Calibration', desc: 'Final ₹ value pushed to subscription.', icon: Zap },
              ].map((step, i) => (
                <div key={i} className="p-6 bg-black/40 backdrop-blur-xl border border-white/5 rounded-[2rem] space-y-4 hover:border-primary/40 transition-all text-center group relative">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 group-hover:border-primary group-hover:scale-110 transition-all">
                      <step.icon className="w-5 h-5 text-primary" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-white uppercase tracking-tighter">{step.title}</p>
                      <p className="text-[9px] font-medium text-white/40 leading-relaxed uppercase">{step.desc}</p>
                   </div>
                   {i < 3 && <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20"><ArrowDown className="w-4 h-4 text-primary/30 -rotate-90" /></div>}
                </div>
              ))}
           </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
