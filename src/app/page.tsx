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
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C triggers ₹600', icon: Sun, border: 'border-t-[#FFB74D]', iconColor: 'text-[#FFB74D]', bg: 'bg-[#FFB74D]/10' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr triggers ₹300', icon: CloudRain, border: 'border-t-[#4FC3F7]', iconColor: 'text-[#4FC3F7]', bg: 'bg-[#4FC3F7]/10' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm triggers ₹400', icon: Snowflake, border: 'border-t-[#C5CAE9]', iconColor: 'text-[#C5CAE9]', bg: 'bg-[#C5CAE9]/10' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm triggers ₹500', icon: Zap, border: 'border-t-[#BA68C8]', iconColor: 'text-[#BA68C8]', bg: 'bg-[#BA68C8]/10' },
  ];

  const steps = [
    { title: 'One-Time Setup', desc: 'Link your platform ID and UPI in 30 seconds. No paperwork.', icon: Smartphone },
    { title: 'Live Monitoring', desc: 'Our neural engine watches weather and platform status in your zone.', icon: Cpu },
    { title: 'Auto Payout', desc: 'When triggers hit, money is pushed instantly to your wallet.', icon: Zap },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent scroll-smooth overflow-x-hidden">
      
      {/* Hero Section */}
      <section id="hero" className="flex flex-col lg:flex-row w-full min-h-[90vh] items-center relative z-10 px-6 lg:px-20 py-12 gap-12">
        <div className="flex-1 flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="p-3 bg-black/40 border border-white/5 rounded-2xl w-fit mb-6 btn-hover-effect">
            <Badge className="bg-primary/20 text-white border-primary/40 py-1 px-4 rounded-full font-bold uppercase tracking-widest text-[9px] icon-neon-glow">
              INDIA'S FIRST PARAMETRIC INSURANCE
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 font-headline uppercase tracking-tight">
            When storms stop you,<br />
            <span className="text-highlight-shimmer">we pay you instantly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-medium leading-relaxed">
            Zero-touch parametric insurance for delivery heroes. No forms, no waiting, automatic payouts pushed to your UPI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button asChild size="lg" className="rounded-full px-10 py-7 text-xl bg-primary hover:bg-primary/90 btn-hover-effect text-white border-none font-bold shadow-[0_0_30px_rgba(0,172,193,0.4)]">
              <Link href="/register" className="flex items-center gap-3 uppercase">Start Coverage <ArrowRight className="w-6 h-6" /></Link>
            </Button>
            <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl btn-hover-effect cursor-pointer">
              <ShieldCheck className="w-5 h-5 text-primary icon-neon-glow" />
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">IRDAI REGISTERED</span>
            </div>
          </div>
        </div>

        {/* Right Side - Resized swipeable Weather Flashcards */}
        <div className="flex-1 w-full max-w-md mx-auto py-8 lg:px-4 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <div className="p-3 h-full">
                    <Card className={`overflow-hidden card-neon-glow border-t-[8px] ${card.border} rounded-[2rem] btn-hover-effect transition-all duration-300 shadow-xl ${card.bg}`}>
                      <CardContent className="p-8 flex flex-col items-center text-center h-full">
                        <div className="w-full flex justify-between items-center mb-6">
                          <Badge variant="outline" className="text-[8px] font-bold tracking-[0.2em] text-white/30 uppercase border-white/5 px-3 py-1 rounded-full">
                            UNIT {idx + 1}
                          </Badge>
                          <div className={`p-3 rounded-xl bg-black/60 border border-white/10 ${card.iconColor}`}>
                            <card.icon className="w-6 h-6 icon-neon-glow" />
                          </div>
                        </div>
                        
                        <div className="w-full max-w-[220px] aspect-square mb-6 drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]">
                          <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                        </div>
                        
                        <div className="space-y-3 p-6 bg-black/60 rounded-[1.5rem] border border-white/10 w-full">
                          <h3 className="text-2xl font-bold text-white font-headline uppercase tracking-tight">{card.label}</h3>
                          <p className={`text-lg font-bold ${card.iconColor} uppercase tracking-tighter icon-neon-glow`}>{card.trigger}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-black/40 border border-white/10 w-12 h-12 rounded-full text-primary btn-hover-effect hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-black/40 border border-white/10 w-12 h-12 rounded-full text-primary btn-hover-effect hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
          <p className="text-center mt-4 text-[8px] font-bold text-white/10 uppercase tracking-[0.3em]">SWIPE WITH CURSOR</p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight font-headline">Three Steps to Safety</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full icon-neon-glow" />
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <Card key={i} className="card-neon-glow p-8 btn-hover-effect border-none group bg-black/40 backdrop-blur-3xl">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <step.icon className="w-8 h-8 text-primary icon-neon-glow" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3">{step.title}</h3>
                <p className="text-sm font-medium text-white/50 leading-relaxed">
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
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight font-headline mb-3">Simple Weekly Pricing</h2>
            <p className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] icon-neon-glow">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'BASIC', price: '₹49', coverage: '₹800 max', perks: ['Rain + Heat triggers'], btn: 'Get Protected' },
              { name: 'STANDARD', price: '₹79', coverage: '₹1400 max', perks: ['All 5 triggers'], badge: 'MOST POPULAR', btn: 'Get Protected' },
              { name: 'PREMIUM', price: '₹99', coverage: '₹2000 max', perks: ['All triggers + Priority'], btn: 'Get Protected' },
            ].map((plan, i) => (
              <Card key={i} className={`p-8 flex flex-col items-center card-neon-glow border-2 rounded-[2rem] btn-hover-effect ${plan.badge ? 'border-primary shadow-[0_0_40px_rgba(0,172,193,0.3)] scale-105 z-20' : 'border-white/5'}`}>
                {plan.badge && <Badge className="bg-primary text-white mb-6 font-bold py-1 px-4 rounded-full text-[8px] tracking-widest">{plan.badge}</Badge>}
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                  <span className="text-[9px] font-bold text-white/20 uppercase">/wk</span>
                </div>
                <p className="text-[9px] font-bold text-primary/40 mb-8 uppercase tracking-widest">{plan.coverage}</p>
                
                <ul className="space-y-4 mb-10 w-full">
                  {plan.perks.map((p, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-white/60 justify-center">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {p}
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 font-bold h-14 text-lg text-white btn-hover-effect shadow-xl border-none uppercase">
                  <Link href="#hero">{plan.btn}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-20 relative z-10" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 uppercase tracking-tight font-headline">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How does TriggerPe work?", a: "We monitor real-time weather data. If a trigger (like heavy rain) is reached in your zone, we automatically initiate a payout to your UPI." },
              { q: "What events trigger a claim?", a: "Current triggers: Heavy Rain (>15mm/hr), Extreme Heat (>42°C), AQI (>300), Official Curfews, and Platform Outages." },
              { q: "How do I get paid?", a: "Payouts are pushed directly to your registered UPI ID (GPay/PhonePe/Paytm) within minutes." },
              { q: "Can I cancel anytime?", a: "Yes. Coverage is weekly, you can stop renewal at any time through your dashboard." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-neon-glow rounded-2xl px-6 mb-3 border-none shadow-lg">
                <AccordionTrigger className="font-bold text-white hover:no-underline text-base py-5 uppercase tracking-tight">{item.q}</AccordionTrigger>
                <AccordionContent className="font-medium text-white/40 leading-relaxed text-sm pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-black/80 backdrop-blur-3xl py-16 px-6 lg:px-20 border-t border-primary/20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-tighter font-headline icon-neon-glow">TRIGGERPE</h2>
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] mt-1">Parametric Shield for Bharat</p>
          </div>
          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest text-center md:text-right leading-loose">
            © 2026 TriggerPe Parametric Insurance.<br />
            Protected by Neural Watchdog AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
