"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Loader2, Info, Sparkles, TrendingUp } from 'lucide-react';
import { premiumRiskExplanation } from '@/ai/flows/premium-risk-explanation';
import { DashboardLayout } from '@/components/DashboardLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  const chartData = [
    { week: 'W1', premium: 68 },
    { week: 'W2', premium: 70 },
    { week: 'W3', premium: 75 },
    { week: 'W4', premium: 72.5 },
  ];

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
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h1 className="text-3xl font-black text-[#006064]">Premium AI Insights</h1>
          <p className="text-[#00838F] font-medium mt-1">Deep dive into your dynamic premium calculation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Premium Breakdown */}
          <Card className="bg-white border-none card-shadow rounded-xl">
            <CardHeader className="bg-[#E0F7FA] border-b border-border p-8">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-black text-[#006064]">Active Premium</CardTitle>
                <div className="text-right">
                  <p className="text-5xl font-black text-[#006064]">₹72.50</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#00ACC1] mt-1">Weekly Subscription</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <h3 className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest border-b border-border pb-4">Premium Cost Components</h3>
              <div className="space-y-4">
                {[
                  { label: 'Base rate', value: mockData.baseRate },
                  { label: 'Zone surcharge', value: mockData.zoneSurcharge },
                  { label: 'Platform loading', value: mockData.platformLoading },
                  { label: 'Risk loading', value: mockData.riskLoading },
                  { label: 'Weather loading', value: mockData.weatherLoading },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2">
                    <span className="text-sm font-bold text-[#00838F]">{item.label}</span>
                    <span className="font-black text-[#006064]">₹{item.value.toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-6 border-t border-[#00ACC1]/20 flex justify-between items-center">
                  <span className="text-lg font-black text-[#006064]">Total Weekly</span>
                  <span className="text-3xl font-black text-[#00ACC1]">₹{mockData.totalPremium.toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-[#E0F7FA] p-5 rounded-lg border border-[#00ACC1]/20 flex items-start gap-4">
                <Info className="w-5 h-5 text-[#00ACC1] shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-[#00838F] leading-relaxed">
                  Monthly projection is <span className="font-black text-[#00ACC1]">₹290.00</span>. Rates re-calibrate every Monday based on regional macro-risk indices.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Risk Profile */}
          <Card className="bg-white border-none card-shadow rounded-xl">
            <CardHeader className="px-8 py-6 border-b border-border">
              <CardTitle className="text-lg font-black text-[#006064]">Risk Profiling</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-10">
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#E2E8F0" strokeWidth="12" fill="transparent" />
                    <circle cx="80" cy="80" r="70" stroke="#00ACC1" strokeWidth="12" fill="transparent" strokeDasharray={440} strokeDashoffset={440 - (440 * mockData.riskScore) / 100} strokeLinecap="round" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-5xl font-black text-[#006064]">{mockData.riskScore}</span>
                    <span className="text-[10px] font-bold text-[#00838F] uppercase tracking-widest">Score Index</span>
                  </div>
                </div>
                <Badge className="bg-[#FFB74D]/10 text-[#FFB74D] border-none px-6 py-2 text-xs font-bold uppercase tracking-widest">{mockData.riskLevel}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#F1F5F9]/50 rounded-lg text-center">
                  <span className="text-[10px] font-bold text-[#00838F] uppercase block mb-2 tracking-widest">Zone Status</span>
                  <span className="text-sm font-black text-[#006064]">{mockData.zone}</span>
                </div>
                <div className="p-5 bg-[#F1F5F9]/50 rounded-lg text-center">
                  <span className="text-[10px] font-bold text-[#00838F] uppercase block mb-2 tracking-widest">Platform Feed</span>
                  <span className="text-sm font-black text-[#006064]">{mockData.platform}</span>
                </div>
              </div>

              <div className="h-[150px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="week" stroke="#00838F" fontSize={10} fontWeight="bold" axisLine={false} tickLine={false} />
                    <YAxis stroke="#00838F" fontSize={10} fontWeight="bold" axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Line type="monotone" dataKey="premium" stroke="#00ACC1" strokeWidth={3} dot={{ fill: '#00ACC1', r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Explanation */}
        <Card className="bg-white border-none card-shadow rounded-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 rounded-full bg-[#E0F7FA] flex items-center justify-center shrink-0 border border-[#00ACC1]/20">
                <BrainCircuit className="w-12 h-12 text-[#00ACC1]" />
              </div>
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h2 className="text-2xl font-black text-[#006064]">AI Premium Explanation</h2>
                  <p className="text-sm font-medium text-[#00838F] max-w-2xl mt-1">
                    Transparent breakdown of your risk loading factors in plain English.
                  </p>
                </div>
                {!explanation ? (
                  <Button onClick={getAIExplanation} disabled={loading} className="rounded-full bg-[#00ACC1] hover:bg-[#00ACC1]/90 text-white font-bold px-12 h-14 text-lg">
                    {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : <Sparkles className="w-6 h-6 mr-3" />}
                    Explain my Premium
                  </Button>
                ) : (
                  <div className="p-8 bg-[#F1F5F9]/50 rounded-xl border border-border animate-in slide-in-from-top-4 duration-500">
                    <div className="prose prose-sm max-w-none text-[#006064] font-medium leading-relaxed whitespace-pre-wrap">
                      {explanation}
                    </div>
                    <Button variant="ghost" onClick={() => setExplanation(null)} className="mt-6 text-[#00ACC1] font-bold uppercase tracking-widest text-[10px]">
                      Re-generate Insight
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
