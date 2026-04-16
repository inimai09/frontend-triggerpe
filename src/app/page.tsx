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
import { Sun, CloudRain, Snowflake, Zap, ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C: ₹600', icon: Sun, border: 'border-t-warning', iconColor: 'text-warning', bg: 'bg-warning/5' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr: ₹300', icon: CloudRain, border: 'border-t-primary', iconColor: 'text-primary', bg: 'bg-primary/5' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm: ₹400', icon: Snowflake, border: 'border-t-white', iconColor: 'text-white', bg: 'bg-white/5' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm: ₹500', icon: Zap, border: 'border-t-warning', iconColor: 'text-warning', bg: 'bg-warning/5' },
  ];

  const steps = [
    { title: 'One-Time Setup', desc: 'Link your platform ID and UPI in 30 seconds. No paperwork.', icon: Smartphone },
    { title: 'Live Monitoring', desc: 'Our neural engine watches weather and platform status in your zone.', icon: Cpu },
    { title: 'Auto Payout', desc: 'When triggers hit, money is pushed instantly to your wallet.', icon: Zap },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent scroll-smooth overflow-x-hidden">
      
      {/* Hero Section */}
      <section id="hero" className="flex flex-col lg:flex-row w-full min-h-[90vh] items-center relative z-10 px-6 lg:px-20 py-12 gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-block w-fit mb-8">
            <div className="p-2 bg-black/40 border border-white/5 rounded-full">
              <Badge className="bg-primary/20 text-white border-primary/40 py-1.5 px-5 rounded-full font-bold uppercase tracking-[0.2em] text-[8px] icon-neon-glow">
                INDIA'S FIRST PARAMETRIC INSURANCE
              </Badge>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 font-headline uppercase tracking-tight">
            When storms stop <span className="text-highlight-shimmer">you,</span><br />
            WE PAY YOU INSTANTLY.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl font-medium leading-relaxed">
            Zero-touch parametric insurance for delivery heroes. No forms, no waiting, automatic payouts pushed to your UPI.
          </p>
          
          <div className="flex items-center">
            <Button asChild size="lg" className="!rounded-full px-16 py-10 text-2xl bg-primary hover:bg-primary/90 btn-hover-effect text-white border-none font-black shadow-[0_0_50px_rgba(0,172,193,0.5)] h-24">
              <Link href="/login" className="flex items-center justify-center uppercase tracking-tighter">
                Start Coverage 
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-white/5 border border-white/10 !rounded-full w-fit btn-hover-effect cursor-default group backdrop-blur-md">
            <div className="flex items-center gap-5">
              <div className="p-3 bg-primary/10 !rounded-full border border-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary icon-neon-glow group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">IRDAI REGISTERED SERVICE</span>
            </div>
          </div>
        </div>

        {/* Right Side - Compact Swipeable Weather Cards */}
        <div className="w-full lg:w-[320px] shrink-0 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <div className="p-2">
                    <Card className={`overflow-hidden card-neon-glow border-none rounded-[4rem] btn-hover-effect transition-all duration-300 shadow-2xl ${card.bg}`}>
                      <CardContent className="p-10 flex flex-col items-center text-center h-full">
                        <div className="w-full flex justify-between items-center mb-6">
                          <Badge variant="outline" className="text-[8px] font-black tracking-[0.4em] text-white/20 uppercase border-white/5 px-4 py-1.5 !rounded-full">
                            MODE {idx + 1}
                          </Badge>
                          <div className={`p-4 !rounded-full bg-black/60 border border-white/10 ${card.iconColor}`}>
                            <card.icon className="w-6 h-6 icon-neon-glow" />
                          </div>
                        </div>
                        
                        <div className="w-44 aspect-square mb-8 drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                          <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                        </div>
                        
                        <div className="space-y-3 p-8 bg-black/80 rounded-[3rem] border border-white/10 w-full shadow-inner">
                          <h3 className="text-xl font-black text-white font-headline uppercase tracking-tight">{card.label}</h3>
                          <p className={`text-base font-black ${card.iconColor} uppercase tracking-tighter icon-neon-glow`}>{card.trigger}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-5 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-black/60 border border-white/10 w-12 h-12 !rounded-full text-primary btn-hover-effect hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-black/60 border border-white/10 w-12 h-12 !rounded-full text-primary btn-hover-effect hover:bg-primary hover:text-white" />
            </div>
            <p className="text-center mt-4 text-[9px] font-black text-white/10 uppercase tracking-[0.5em] animate-pulse">SWIPE TO VIEW TRIGGER MODES</p>
          </Carousel>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-24 space-y-4">
            <h2 className="text-5xl font-black text-white uppercase tracking-tight font-headline">Three Steps to Safety</h2>
            <div className="w-24 h-2 bg-primary mx-auto !rounded-full icon-neon-glow shadow-[0_0_20px_rgba(0,172,193,0.6)]" />
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <Card key={i} className="card-neon-glow p-12 btn-hover-effect border-none bg-black/60 backdrop-blur-3xl rounded-[4rem]">
                <div className="w-24 h-24 !rounded-full bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:bg-primary/20 transition-all shadow-xl">
                  <step.icon className="w-12 h-12 text-primary icon-neon-glow" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-5 font-headline">{step.title}</h3>
                <p className="text-lg font-medium text-white/40 leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 lg:px-20 relative z-10 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white uppercase tracking-tight font-headline mb-4">Simple Weekly Pricing</h2>
            <p className="text-xs font-black text-primary uppercase tracking-[0.4em] icon-neon-glow">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'BASIC', price: '₹49', coverage: '₹800 max', perks: ['Rain + Heat triggers'], btn: 'Get Protected' },
              { name: 'STANDARD', price: '₹79', coverage: '₹1400 max', perks: ['All 5 triggers'], badge: 'MOST POPULAR', btn: 'Get Protected' },
              { name: 'PREMIUM', price: '₹99', coverage: '₹2000 max', perks: ['All triggers + Priority'], btn: 'Get Protected' },
            ].map((plan, i) => (
              <Card key={i} className={`p-12 flex flex-col items-center card-neon-glow border-2 rounded-[4rem] btn-hover-effect ${plan.badge ? 'border-primary shadow-[0_0_60px_rgba(0,172,193,0.3)] scale-105 z-20' : 'border-white/5'}`}>
                {plan.badge && <Badge className="bg-primary text-white mb-10 font-black py-2 px-8 !rounded-full text-[10px] tracking-[0.3em] shadow-xl">{plan.badge}</Badge>}
                <h3 className="text-xl font-black text-primary mb-6 uppercase tracking-[0.2em] font-headline">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-7xl font-black text-white tracking-tighter">{plan.price}</span>
                  <span className="text-xs font-black text-white/30 uppercase">/week</span>
                </div>
                <p className="text-xs font-black text-primary/40 mb-12 uppercase tracking-[0.3em]">{plan.coverage}</p>
                
                <ul className="space-y-6 mb-14 w-full">
                  {plan.perks.map((p, j) => (
                    <li key={j} className="flex items-center gap-5 text-base font-bold text-white/50 justify-center">
                      <div className="w-2.5 h-2.5 !rounded-full bg-primary shadow-sm" /> {p}
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full !rounded-full bg-primary hover:bg-primary/90 font-black h-20 text-xl text-white btn-hover-effect shadow-2xl border-none uppercase tracking-tighter">
                  <Link href="/login">{plan.btn}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-20 relative z-10" id="faq">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-20">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight font-headline">Frequently Asked Questions</h2>
            <div className="w-16 h-2 bg-primary/30 mx-auto mt-6 !rounded-full" />
          </header>
          <Accordion type="single" collapsible className="w-full space-y-6">
            {[
              { q: "How does TriggerPe work?", a: "We monitor real-time weather data. If a trigger (like heavy rain) is reached in your zone, we automatically initiate a payout to your UPI." },
              { q: "What events trigger a claim?", a: "Current triggers: Heavy Rain (>15mm/hr), Extreme Heat (>42°C), AQI (>300), Official Curfews, and Platform Outages." },
              { q: "How do I get paid?", a: "Payouts are pushed directly to your registered UPI ID (GPay/PhonePe/Paytm) within minutes." },
              { q: "Can I cancel anytime?", a: "Yes. Coverage is weekly, you can stop renewal at any time through your dashboard." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-neon-glow rounded-[3rem] px-10 mb-6 border-none shadow-2xl bg-black/40">
                <AccordionTrigger className="font-black text-white hover:no-underline text-xl py-9 uppercase tracking-tight text-left font-headline">{item.q}</AccordionTrigger>
                <AccordionContent className="font-medium text-white/40 leading-relaxed text-lg pb-10">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-black/80 backdrop-blur-3xl py-24 px-6 lg:px-20 border-t border-primary/20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-5xl font-black text-primary uppercase tracking-tighter font-headline icon-neon-glow">TRIGGERPE</h2>
            <p className="text-[11px] font-black text-white/20 uppercase tracking-[0.6em] mt-4">Parametric Shield for Bharat</p>
          </div>
          <div className="text-center md:text-right space-y-6">
            <p className="text-xs font-black text-white/30 uppercase tracking-[0.3em] leading-loose">
              © 2026 TriggerPe Parametric Insurance.<br />
              Protected by Neural Watchdog AI.
            </p>
            <div className="flex justify-center md:justify-end gap-8 opacity-40">
              <div className="p-3 bg-white/5 !rounded-full border border-white/10"><ShieldCheck className="w-7 h-7 text-white" /></div>
              <div className="w-12 h-12 !rounded-full border-2 border-white/20" />
              <div className="w-12 h-12 bg-white/10 !rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
