
"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DeliveryGuy } from '@/components/DeliveryGuy';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { 
  Sun, 
  CloudRain, 
  Snowflake, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Cpu,
  CircleCheck,
  CircleHelp,
  IndianRupee,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C: ₹600', icon: Sun, color: 'text-[#FFB74D]', bg: 'bg-[#FFB74D]/10' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr: ₹300', icon: CloudRain, color: 'text-[#00ACC1]', bg: 'bg-[#00ACC1]/10' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm: ₹400', icon: Snowflake, color: 'text-[#00838F]', bg: 'bg-[#00838F]/10' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm: ₹500', icon: Zap, color: 'text-[#FFB74D]', bg: 'bg-[#FFB74D]/20' },
  ];

  const pricingPlans = [
    { name: 'BASIC', price: '49', features: ['Rain Coverage', 'Heat Protection', 'Standard Payouts'] },
    { name: 'STANDARD', price: '79', features: ['All Basic Features', 'AQI Alerts', 'Priority Verification', 'Curfew Shield'] },
    { name: 'PREMIUM', price: '99', features: ['Full Trigger Suite', 'Outage Protection', 'Instant UPI Payouts', 'Custom Risk Profile'] },
  ];

  const handlePriceClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen font-body text-white">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col lg:flex-row w-full min-h-[95vh] items-center px-6 lg:px-24 py-20 gap-20">
        <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="flex items-center gap-3">
            <Badge className="bg-white/10 backdrop-blur-md text-white py-2.5 px-8 rounded-full font-bold text-xs uppercase tracking-widest border border-white/20">
              INDIA'S FIRST PARAMETRIC INSURANCE
            </Badge>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-black leading-[1] tracking-tighter font-headline text-white">
              When <br />
              storms stop <br />
              you,
            </h1>
            <h1 className="text-7xl md:text-8xl font-black leading-[1] tracking-tighter font-headline text-white text-glow">
              we pay you <br />
              instantly.
            </h1>
          </div>
          
          <p className="text-xl text-white/70 max-w-xl font-medium leading-relaxed">
            India's first zero-touch parametric insurance for delivery workers. No forms, no waiting, automatic payouts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
            <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl bg-primary hover:bg-primary/90 text-white font-black shadow-2xl btn-hover-effect border-none flex items-center gap-6">
              <Link href="/login" className="flex items-center gap-6">
                Get Protected Now 
                <div className="p-3 bg-white/20 rounded-full">
                  <ArrowRight className="w-10 h-10 text-white drop-shadow-md" />
                </div>
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[450px] animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel opts={{ loop: true }} className="w-full cursor-grab active:cursor-grabbing">
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl rounded-[3.5rem] overflow-hidden transition-all duration-500">
                    <CardContent className="p-12 flex flex-col items-center text-center">
                      <div className="w-full flex justify-between items-center mb-10">
                        <Badge variant="outline" className="text-[10px] font-black text-white/40 border-white/10 rounded-full px-4">SENSOR MODE {idx + 1}</Badge>
                        <div className={cn("p-4 rounded-full flex items-center justify-center bg-white/5", card.bg)}>
                          <card.icon className={cn("w-8 h-8", card.color)} />
                        </div>
                      </div>
                      <div className="w-64 h-64 mb-10 pointer-events-none">
                        <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter font-headline">{card.label}</h3>
                        <p className={cn("text-xl font-black uppercase tracking-tighter", card.color)}>{card.trigger}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-10">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 shadow-lg w-14 h-14 rounded-full text-primary hover:text-primary/80 flex items-center justify-center backdrop-blur-md" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 shadow-lg w-14 h-14 rounded-full text-primary hover:text-primary/80 flex items-center justify-center backdrop-blur-md" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Steps Section: How it Works */}
      <section className="py-32 px-6 lg:px-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl font-black tracking-tighter font-headline text-white uppercase">Three Steps to Safety</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-white/50 font-bold uppercase tracking-widest text-xs">A zero-touch experience for every hero</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'One-Time Setup', desc: 'Link your platform ID and UPI in 30 seconds. No paperwork.', icon: Smartphone, delay: 'delay-100' },
              { title: 'Live Monitoring', desc: 'Our neural engine watches weather and platform status in your zone.', icon: Cpu, delay: 'delay-200' },
              { title: 'Auto Payout', desc: 'When triggers hit, money is pushed instantly to your wallet.', icon: Zap, delay: 'delay-300' },
            ].map((step, i) => (
              <div key={i} className={cn("space-y-8 text-center md:text-left group animate-in fade-in slide-in-from-bottom-8 duration-700 transition-all hover:scale-105", step.delay)}>
                <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border-2 border-white/10 mx-auto md:mx-0 shadow-inner group-hover:border-primary transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="p-10 border-2 border-white/10 rounded-[3rem] bg-black/40 backdrop-blur-xl group-hover:border-primary/50 transition-colors shadow-xl h-full">
                  <h3 className="text-3xl font-black font-headline text-white mb-4">{step.title}</h3>
                  <p className="text-lg font-medium text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl font-black tracking-tighter font-headline text-white uppercase">Simple Pricing</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
            <p className="text-white/50 font-bold uppercase tracking-widest text-xs">Choose your shield tier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={cn("border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl rounded-[3.5rem] overflow-hidden flex flex-col transition-all hover:scale-105 duration-300 animate-in fade-in slide-in-from-bottom-12")}>
                <CardContent className="p-12 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase text-primary tracking-[0.3em] mb-4">{plan.name}</span>
                  <div 
                    onClick={handlePriceClick}
                    className="group mb-8 cursor-pointer flex flex-col items-start"
                  >
                    <div className="flex items-baseline gap-1 group-hover:scale-110 transition-transform origin-left">
                      <IndianRupee className="w-6 h-6 text-white mb-2" />
                      <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                      <span className="text-sm font-bold text-white/50">/week</span>
                    </div>
                    <p className="text-[10px] font-black text-primary uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to Refresh</p>
                  </div>
                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-bold text-white/80">
                        <div className="p-1 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                          <CircleCheck className="w-3.5 h-3.5 text-primary" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handlePriceClick}
                    className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs mt-12 shadow-lg btn-hover-effect border-none"
                  >
                    Get {plan.name} Shield
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-white/10">
              <CircleHelp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-5xl font-black tracking-tighter font-headline text-white uppercase">Common Questions</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <Card className="bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-[3.5rem] p-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How fast is the payout?", a: "TriggerPe uses parametric triggers. As soon as the weather station or platform data hits the threshold, the payout is triggered and pushed to your linked UPI ID within 5-10 minutes." },
                { q: "Do I need to submit photos?", a: "No. That's the power of parametric insurance. We rely on independent data sources like satellite weather and platform telemetry. No forms, no photos, no waiting." },
                { q: "What if I work on multiple platforms?", a: "During registration, you can link your primary platform ID. Our engine monitors cross-platform outages and macro-risk across all major delivery services in your city." },
                { q: "Is this IRDAI registered?", a: "Yes, TriggerPe services are provided through IRDAI registered insurance partners and brokers to ensure complete regulatory safety." },
                { q: "Can I cancel my subscription?", a: "Absolutely. TriggerPe is a weekly subscription. You can pause or cancel your coverage anytime through the Settings tab in your dashboard." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10 px-4 py-2">
                  <AccordionTrigger className="text-xl font-black text-white hover:no-underline font-headline text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg font-medium text-white/60 leading-relaxed pt-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      <footer className="py-20 px-6 lg:px-24 bg-[#001A1A]/80 backdrop-blur-xl text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tighter font-headline uppercase">TRIGGERPE</h2>
            <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] mt-2">Parametric Shield for Bharat</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/70">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <p className="text-xs font-bold text-white/30 text-center">© 2026 TriggerPe Parametric Insurance. IRDAI Registered Service.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
