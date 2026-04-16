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
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C triggers ₹600', icon: Sun, border: 'border-t-[#FFB74D]', iconColor: 'text-[#FFB74D]' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr triggers ₹300', icon: CloudRain, border: 'border-t-[#4FC3F7]', iconColor: 'text-[#4FC3F7]' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm triggers ₹400', icon: Snowflake, border: 'border-t-[#C5CAE9]', iconColor: 'text-[#C5CAE9]' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm triggers ₹500', icon: Zap, border: 'border-t-[#BA68C8]', iconColor: 'text-[#BA68C8]' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent scroll-smooth">
      
      {/* Hero Section */}
      <section id="hero" className="flex flex-col lg:flex-row w-full min-h-[90vh] items-center relative z-10 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 py-12 animate-in fade-in slide-in-from-left-8 duration-1000">
          <Badge className="w-fit mb-6 bg-primary/20 text-white border-primary/40 py-1.5 px-4 rounded-full font-black animate-in fade-in zoom-in duration-700">
            INDIA'S FIRST PARAMETRIC INSURANCE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl font-headline">
            When storms stop you,<br />
            <span className="block mt-4">
              <span className="text-white animate-neon-white">we pay you instantly.</span>
            </span>
          </h1>
          <p className="text-lg text-white/90 mt-8 mb-10 max-w-xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 drop-shadow">
            Zero-touch parametric insurance for delivery heroes. No forms, no waiting, automatic payouts.
          </p>
          
          <div id="get-protected-now" className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center gap-4 text-primary group">
               <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,172,193,0.3)]">
                 <ShieldCheck className="w-8 h-8 icon-neon-glow" />
               </div>
               <span className="text-2xl font-black uppercase tracking-tighter text-white drop-shadow-sm">GET PROTECTED NOW</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl bg-primary hover:bg-primary/90 btn-hover-effect text-white border-none font-black shadow-2xl">
                <Link href="/register" className="flex items-center gap-3">Start Coverage <ArrowRight className="w-6 h-6" /></Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 space-y-4 animate-in fade-in duration-1000 delay-500">
            <p className="text-sm font-bold text-white/80">
              <span className="text-primary font-black">2,847+</span> Partners • ₹12L+ Auto-Paid • 99.9% Payout Rate
            </p>
          </div>
        </div>

        {/* Right Side - Weather Flashcards */}
        <div className="flex-1 w-full max-w-lg mx-auto py-12 px-6 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel className="w-full">
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx}>
                  <Card className={`overflow-hidden card-neon-glow border-t-[6px] ${card.border} rounded-2xl transform transition-transform duration-500 hover:scale-105`}>
                    <CardContent className="p-10 flex flex-col items-center text-center">
                      <div className="w-full flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">Trigger Unit {idx + 1}</span>
                        <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                      </div>
                      <div className="w-64 h-64 mb-8">
                        <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-2 font-headline">{card.label}</h3>
                      <p className="text-xl font-bold text-primary">{card.trigger}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-black/60 shadow-md border border-primary/20 w-12 h-12 rounded-full text-primary btn-hover-effect" />
              <CarouselNext className="static translate-y-0 bg-black/60 shadow-md border border-primary/20 w-12 h-12 rounded-full text-primary btn-hover-effect" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-12 bg-black/40 backdrop-blur-md border-y border-white/5 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-20 uppercase tracking-tighter font-headline">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Easy Registration', desc: 'Sign up in 2 minutes, choose your platform & link UPI. No long forms.' },
              { title: 'Live Monitoring', desc: 'Our engine tracks live satellite weather data 24/7 for your specific zone.' },
              { title: 'Auto Payouts', desc: 'Money hits your UPI automatically within minutes of the weather trigger.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-10 text-center card-neon-glow rounded-2xl btn-hover-effect group overflow-hidden border-none shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-highlight-shimmer transition-transform group-hover:scale-110 duration-500 font-headline">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-bold leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing */}
      <section className="py-32 px-12 relative z-10 animate-in fade-in duration-1000">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white text-center mb-20 uppercase tracking-tighter font-headline">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'BASIC', price: '₹49', coverage: '₹800 max', perks: ['Rain + Heat triggers'], btn: 'Get Protected' },
              { name: 'STANDARD', price: '₹79', coverage: '₹1400 max', perks: ['All 5 triggers'], badge: 'MOST POPULAR', btn: 'Get Protected' },
              { name: 'PREMIUM', price: '₹99', coverage: '₹2000 max', perks: ['All triggers + Priority'], btn: 'Get Protected' },
            ].map((plan, i) => (
              <Card key={i} className={`p-12 flex flex-col items-center card-neon-glow border-2 rounded-2xl btn-hover-effect ${plan.badge ? 'border-primary shadow-[0_0_30px_rgba(0,172,193,0.3)] scale-105' : 'border-primary/10'}`}>
                {plan.badge && <Badge className="bg-primary text-white mb-6 font-black py-1 px-4">{plan.badge}</Badge>}
                <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-widest">{plan.name}</h3>
                <p className="text-5xl font-black text-white mb-2">{plan.price}<span className="text-lg opacity-50">/wk</span></p>
                <p className="text-sm font-bold text-primary mb-8">{plan.coverage}</p>
                <ul className="space-y-4 mb-10 w-full">
                  {plan.perks.map((p, j) => <li key={j} className="text-sm font-bold text-center text-white/70">✓ {p}</li>)}
                </ul>
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 font-black h-14 text-lg text-white btn-hover-effect shadow-xl border-none">
                  <Link href="#hero">{plan.btn}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-12 bg-transparent relative z-10 animate-in fade-in duration-1000">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tighter font-headline">FAQs</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How does TriggerPe work?", a: "We monitor real-time weather data. If a trigger (like heavy rain) is reached in your zone, we automatically initiate a payout to your UPI." },
              { q: "What events trigger a claim?", a: "Current triggers: Heavy Rain (>15mm/hr), Extreme Heat (>42°C), AQI (>300), Official Curfews, and Platform Outages." },
              { q: "How do I get paid?", a: "Payouts are pushed directly to your registered UPI ID (GPay/PhonePe/Paytm) within minutes." },
              { q: "Can I cancel anytime?", a: "Yes. Coverage is weekly, you can stop renewal at any time through your dashboard." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-neon-glow rounded-2xl px-8 mb-4 border-none shadow-lg transition-all" style={{ animationDelay: `${i * 100}ms` }}>
                <AccordionTrigger className="font-black text-white hover:no-underline text-lg font-headline">{item.q}</AccordionTrigger>
                <AccordionContent className="font-bold text-white/60 leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-black/60 backdrop-blur-md py-20 px-12 border-t border-primary/10 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-black text-primary mb-6 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-3 text-sm font-bold text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Weather Triggers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-primary mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3 text-sm font-bold text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-primary mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-3 text-sm font-bold text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-primary mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 text-sm font-bold text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl font-black text-primary uppercase tracking-tighter font-headline">TRIGGERPE</h2>
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">© 2026 TriggerPe Parametric Insurance. Built for Bharat.</p>
        </div>
      </footer>
    </div>
  );
}
