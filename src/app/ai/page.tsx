"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Loader2, Info, TrendingUp, ShieldAlert, Sparkles as SparklesIcon } from 'lucide-react';
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
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-headline font-bold text-foreground">Premium AI Insights</h1>
        <p className="text-secondary font-medium">Understand how your dynamic premium is calculated by our AI.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Premium Breakdown */}
        <Card className="border border-border shadow-lg">
          <CardHeader className="bg-primary text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-headline">Current Premium</CardTitle>
              <span className="text-3xl font-bold">₹72.50<span className="text-sm opacity-60">/week</span></span>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest border-b pb-2">Component Breakdown</h3>
            <div className="space-y-4">
              {[
                { label: 'Base rate', value: mockData.baseRate },
                { label: 'Zone surcharge', value: mockData.zoneSurcharge },
                { label: 'Platform loading', value: mockData.platformLoading },
                { label: 'Risk loading', value: mockData.riskLoading },
                { label: 'Weather loading', value: mockData.weatherLoading },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-secondary font-medium">{item.label}</span>
                  <span className="font-bold text-foreground">₹{item.value.toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-4 border-t-2 border-primary/20 flex justify-between items-center">
                <span className="font-bold text-foreground">Total Weekly Premium</span>
                <span className="text-2xl font-bold text-primary">₹{mockData.totalPremium.toFixed(2)}</span>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-secondary leading-relaxed">
                Your monthly estimate is <span className="font-bold">₹290.00</span>. Premium rates are adjusted every Monday at 12:00 AM based on live risk data.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Risk Profile */}
        <Card className="border border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-headline">Risk Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-muted" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-primary" strokeDasharray={364} strokeDashoffset={364 - (364 * mockData.riskScore) / 100} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">{mockData.riskScore}</span>
                  <span className="text-[10px] font-bold text-secondary uppercase">Score</span>
                </div>
              </div>
              <div>
                <Badge className="bg-warning text-white px-4 py-1 text-sm font-bold uppercase">{mockData.riskLevel}</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-xl">
                <span className="text-[10px] font-bold text-secondary uppercase block mb-1">Operational Zone</span>
                <span className="text-sm font-bold text-foreground">{mockData.zone}</span>
              </div>
              <div className="p-4 bg-muted rounded-xl">
                <span className="text-[10px] font-bold text-secondary uppercase block mb-1">Delivery Platform</span>
                <span className="text-sm font-bold text-foreground">{mockData.platform}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Risk History</h3>
              <div className="flex items-end gap-2 h-20">
                {[40, 45, 38, 35, 32, 35].map((val, i) => (
                  <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${val}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-bold text-secondary uppercase">
                <span>6 Weeks ago</span>
                <span>Current</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Explanation Tool */}
      <Card className="border border-border shadow-xl">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-2xl font-headline font-bold">Ask AI to explain your premium</h2>
              <p className="text-secondary max-w-2xl">
                Our AI model analyzes millions of delivery records, weather patterns, and city movements to calculate your risk loading. Get a plain English explanation of your costs.
              </p>
              {!explanation ? (
                <Button 
                  onClick={getAIExplanation} 
                  disabled={loading}
                  className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 h-auto shadow-lg text-lg font-bold"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : <SparklesIcon className="w-6 h-6 mr-2" />}
                  Generate AI Explanation
                </Button>
              ) : (
                <div className="p-8 bg-muted rounded-2xl animate-in slide-in-from-top-4 duration-500 relative border border-primary/10">
                  <div className="prose prose-sm text-secondary leading-relaxed whitespace-pre-wrap">
                    {explanation}
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => setExplanation(null)}
                    className="mt-6 text-primary font-bold hover:bg-primary/10"
                  >
                    Generate New Insights
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
