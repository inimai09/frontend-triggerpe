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
import { Sun, CloudRain, Snowflake, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C triggers ₹600', icon: Sun, border: 'border-t-[#FFB74D]', iconColor: 'text-[#FFB74D]', bg: 'bg-[#FFB74D]/10' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr triggers ₹300', icon: CloudRain, border: 'border-t-[#4FC3F7]', iconColor: 'text-[#4FC3F7]', bg: 'bg-[#4FC3F7]/10' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm triggers ₹400', icon: Snowflake, border: 'border-t-[#C5CAE9]', iconColor: 'text-[#C5CAE9]', bg: 'bg-[#C5CAE9]/10' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm triggers ₹500', icon: Zap, border: 'border-t-[#BA68C8]', iconColor: 'text-[#BA68C8]', bg: 'bg-[#BA68C8]/10' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent scroll-smooth overflow-x-hidden">
      
      {/* Hero Section */}
      <section id="hero" className="flex flex-col lg:flex-row w-full min-h-[95vh] items-center relative z-10">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-12 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="p-4 bg-black/40 border border-white/5 rounded-[2rem] w-fit mb-8 btn-hover-effect">
            <Badge className="bg-primary/20 text-white border-primary/40 py-1.5 px-6 rounded-full font-black uppercase tracking-widest text-[10px] icon-neon-glow">
              INDIA'S FIRST PARAMETRIC INSURANCE
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl font-headline uppercase tracking-tighter">
            When storms stop you,<br />
            <span className="text-highlight-shimmer inline-block">we pay you instantly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl font-bold leading-relaxed">
            Zero-touch parametric insurance for delivery heroes. No forms, no waiting, automatic payouts pushed to your UPI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button asChild size="lg" className="rounded-full px-12 py-8 text-2xl bg-primary hover:bg-primary/90 btn-hover-effect text-white border-none font-black shadow-[0_0_30px_rgba(0,172,193,0.4)]">
              <Link href="/register" className="flex items-center gap-4 uppercase tracking-tighter">Start Coverage <ArrowRight className="w-8 h-8" /></Link>
            </Button>
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl btn-hover-effect cursor-pointer">
              <ShieldCheck className="w-6 h-6 text-primary icon-neon-glow" />
              <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">IRDAI REGISTERED</span>
            </div>
          </div>
        </div>

        {/* Right Side - Swipeable Weather Flashcards */}
        <div className="flex-1 w-full max-w-xl mx-auto py-12 px-6 lg:px-12 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <div className="p-4">
                    <Card className={`overflow-hidden card-neon-glow border-t-[8px] ${card.border} rounded-[2.5rem] btn-hover-effect transition-all duration-300 shadow-2xl ${card.bg}`}>
                      <CardContent className="p-10 flex flex-col items-center text-center">
                        <div className="w-full flex justify-between items-center mb-8">
                          <Badge variant="outline" className="text-[9px] font-black tracking-[0.2em] text-white/40 uppercase border-white/10 px-4 py-1.5 rounded-full">
                            TRIGGER UNIT {idx + 1}
                          </Badge>
                          <div className={`p-4 rounded-2xl bg-black/60 border border-white/10 ${card.iconColor}`}>
                            <card.icon className="w-8 h-8 icon-neon-glow" />
                          </div>
                        </div>
                        
                        <div className="w-full max-w-[280px] h-auto aspect-square mb-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]">
                          <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                        </div>
                        
                        <div className="space-y-4 p-8 bg-black/60 rounded-[2rem] border border-white/10 w-full shadow-inner">
                          <h3 className="text-4xl font-black text-white font-headline uppercase tracking-tighter">{card.label}</h3>
                          <p className={`text-xl font-black ${card.iconColor} uppercase tracking-tight icon-neon-glow`}>{card.trigger}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-6 mt-12">
              <CarouselPrevious className="static translate-y-0 bg-black/60 shadow-xl border border-primary/20 w-16 h-16 rounded-full text-primary btn-hover-effect hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-black/60 shadow-xl border border-primary/20 w-16 h-16 rounded-full text-primary btn-hover-effect hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
          <p className="text-center mt-6 text-[9px] font-black text-white/20 uppercase tracking-[0.3em] animate-pulse">DRAG TO SWIPE TRIGGERS</p>
        </div>
      </section>

      {/* Pricing Section - Links back to Landing Page as requested */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter font-headline mb-4">Simple Weekly Pricing</h2>
            <p className="text-white/40 font-black uppercase tracking-widest text-xs">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'BASIC', price: '₹49', coverage: '₹800 max', perks: ['Rain + Heat triggers'], btn: 'Stay Covered' },
              { name: 'STANDARD', price: '₹79', coverage: '₹1400 max', perks: ['All 5 triggers'], badge: 'MOST POPULAR', btn: 'Stay Covered' },
              { name: 'PREMIUM', price: '₹99', coverage: '₹2000 max', perks: ['All triggers + Priority'], btn: 'Stay Covered' },
            ].map((plan, i) => (
              <Card key={i} className={`p-10 flex flex-col items-center card-neon-glow border-2 rounded-[2.5rem] btn-hover-effect ${plan.badge ? 'border-primary shadow-[0_0_50px_rgba(0,172,193,0.3)] scale-105 z-20' : 'border-white/5 opacity-80 hover:opacity-100'}`}>
                {plan.badge && <Badge className="bg-primary text-white mb-8 font-black py-2 px-6 rounded-full text-[10px] tracking-widest icon-neon-glow">{plan.badge}</Badge>}
                <h3 className="text-xl font-black text-primary mb-4 uppercase tracking-[0.2em]">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-6xl font-black text-white">{plan.price}</span>
                  <span className="text-sm font-black text-white/30 uppercase">/wk</span>
                </div>
                <p className="text-xs font-black text-primary/60 mb-10 uppercase tracking-widest">{plan.coverage}</p>
                
                <ul className="space-y-5 mb-12 w-full">
                  {plan.perks.map((p, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-white/70 justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 font-black h-16 text-xl text-white btn-hover-effect shadow-2xl border-none uppercase tracking-tighter">
                  <Link href="#hero">{plan.btn}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 relative z-10" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tighter font-headline">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-6">
            {[
              { q: "How does TriggerPe work?", a: "We monitor real-time weather data. If a trigger (like heavy rain) is reached in your zone, we automatically initiate a payout to your UPI." },
              { q: "What events trigger a claim?", a: "Current triggers: Heavy Rain (>15mm/hr), Extreme Heat (>42°C), AQI (>300), Official Curfews, and Platform Outages." },
              { q: "How do I get paid?", a: "Payouts are pushed directly to your registered UPI ID (GPay/PhonePe/Paytm) within minutes." },
              { q: "Can I cancel anytime?", a: "Yes. Coverage is weekly, you can stop renewal at any time through your dashboard." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-neon-glow rounded-[2rem] px-8 mb-4 border-none shadow-xl transition-all">
                <AccordionTrigger className="font-black text-white hover:no-underline text-lg font-headline py-6 uppercase tracking-tight">{item.q}</AccordionTrigger>
                <AccordionContent className="font-bold text-white/60 leading-relaxed text-base pb-8">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-black/80 backdrop-blur-3xl py-24 px-8 border-t border-primary/20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tighter font-headline icon-neon-glow">TRIGGERPE</h2>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mt-2">Parametric Shield for Bharat</p>
          </div>
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center md:text-right leading-loose">
            © 2026 TriggerPe Parametric Insurance.<br />
            Protected by Neural Watchdog AI.
          </p>
        </div>
      </footer>
    </div>
  );
}