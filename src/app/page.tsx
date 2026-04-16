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
import { Sun, CloudRain, Snowflake, Zap, ShieldCheck, ZapIcon, WalletCards, ArrowRight } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen bg-transparent">
      
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row w-full min-h-[90vh] items-center relative z-10 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 py-12 animate-in fade-in slide-in-from-left-8 duration-1000">
          <Badge className="w-fit mb-6 bg-primary/20 text-white border-white/20 py-1.5 px-4 rounded-full font-black animate-in fade-in zoom-in duration-700">
            INDIA'S FIRST PARAMETRIC INSURANCE
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            When storms stop you,<br />
            <span className="block mt-4">
              <span className="animate-neon-white">we pay you instantly.</span>
            </span>
          </h1>
          <p className="text-lg text-white/90 mt-8 mb-10 max-w-xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 drop-shadow">
            India's first zero-touch parametric insurance for delivery workers. No forms, no waiting, automatic payouts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90 btn-hover-effect text-white border-2 border-white/20">
              <Link href="/login" className="flex items-center gap-2">Get Protected Now <ArrowRight className="w-5 h-5 text-white" /></Link>
            </Button>
          </div>
          
          <div className="space-y-4 animate-in fade-in duration-1000 delay-500">
            <p className="text-sm font-bold text-white/80">
              <span className="text-white font-black">2,847+</span> Workers Protected • ₹12L+ Auto-Paid • 99% Uptime
            </p>
            <div className="flex gap-4 text-xs font-black text-white uppercase tracking-widest drop-shadow-sm">
              <span className="flex items-center gap-1">✓ Auto Claims</span>
              <span className="flex items-center gap-1">✓ Zero Forms</span>
              <span className="flex items-center gap-1">✓ Instant Payout</span>
            </div>
          </div>
        </div>

        {/* Right Side - Weather Flashcards */}
        <div className="flex-1 w-full max-w-lg mx-auto py-12 px-6 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel className="w-full">
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx}>
                  <Card className={`overflow-hidden border border-border shadow-2xl bg-white border-t-[6px] ${card.border} rounded-2xl transform transition-transform duration-500 hover:scale-105`}>
                    <CardContent className="p-10 flex flex-col items-center text-center">
                      <div className="w-full flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Trigger Unit {idx + 1}</span>
                        <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                      </div>
                      <div className="w-64 h-64 mb-8">
                        <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                      </div>
                      <h3 className="text-3xl font-black text-[#006064] mb-2">{card.label}</h3>
                      <p className="text-xl font-bold text-[#00838F]">{card.trigger}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white shadow-md border border-border w-12 h-12 rounded-full text-primary btn-hover-effect" />
              <CarouselNext className="static translate-y-0 bg-white shadow-md border border-border w-12 h-12 rounded-full text-primary btn-hover-effect" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-12 bg-white/10 backdrop-blur-sm border-t border-white/10 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tighter drop-shadow-md">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: WalletCards, title: '📝 Register', desc: 'Sign up in 2 minutes, choose your platform & link UPI.' },
              { icon: ShieldCheck, title: '🤖 We Monitor', desc: 'Our AI engine tracks live weather data 24/7 for your city.' },
              { icon: ZapIcon, title: '💰 Auto Payout', desc: 'Claim fires automatically when trigger is hit. Money in UPI.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-10 text-center bg-white border border-border shadow-xl rounded-xl btn-hover-effect">
                <h3 className="text-2xl font-black text-[#006064] mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-[#00838F] font-bold leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-12 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-16 uppercase tracking-tighter drop-shadow-md">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'BASIC', price: '₹49', coverage: '₹800 max', perks: ['Rain + Heat triggers'], btn: 'Get Basic' },
              { name: 'STANDARD', price: '₹79', coverage: '₹1400 max', perks: ['All 5 triggers'], badge: 'MOST POPULAR', btn: 'Get Standard' },
              { name: 'PREMIUM', price: '₹99', coverage: '₹2000 max', perks: ['All triggers + priority'], btn: 'Get Premium' },
            ].map((plan, i) => (
              <Card key={i} className={`p-10 flex flex-col items-center bg-white border-2 rounded-2xl btn-hover-effect ${plan.badge ? 'border-primary shadow-2xl scale-105' : 'border-border shadow-xl'}`}>
                {plan.badge && <Badge className="bg-primary text-white mb-4 font-black">{plan.badge}</Badge>}
                <h3 className="text-xl font-black text-[#00838F] mb-2 uppercase tracking-widest">{plan.name}</h3>
                <p className="text-4xl font-black text-[#006064] mb-1">{plan.price}<span className="text-sm">/week</span></p>
                <p className="text-sm font-bold text-primary mb-6">{plan.coverage}</p>
                <ul className="space-y-3 mb-8 w-full">
                  {plan.perks.map((p, j) => <li key={j} className="text-sm font-bold text-center text-[#00838F]">✓ {p}</li>)}
                </ul>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 font-black h-12 text-white btn-hover-effect">
                  {plan.btn}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-12 bg-transparent relative z-10 animate-in fade-in duration-1000">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-12 uppercase tracking-tighter drop-shadow-md">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How does TriggerPe work?", a: "We monitor real-time weather data. If a city-wide trigger (like heavy rain) is reached, we automatically initiate a payout to all covered partners in that zone." },
              { q: "What weather events trigger a claim?", a: "Current triggers include Heavy Rain (>15mm/hr), Extreme Heat (>42°C), AQI (>300), Official Curfews, and Major Platform Outages." },
              { q: "How do I get paid?", a: "Payouts are pushed directly to your registered UPI ID (GPay/PhonePe/Paytm) within minutes of a trigger event." },
              { q: "Is my data safe?", a: "We only track your operational city and platform ID. We do not store live GPS locations or personal bank details other than your UPI VPA." },
              { q: "What is NOT covered?", a: "Vehicle breakdowns, personal health issues, accidents, or platform suspensions not related to systemic outages." },
              { q: "Can I cancel anytime?", a: "Yes. Since coverage is weekly, you can stop renewal at any time through the settings." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/90 border-none rounded-xl px-6 shadow-xl mb-4 transition-all hover:bg-white animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <AccordionTrigger className="font-black text-[#006064] hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="font-bold text-[#00838F]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-white/95 backdrop-blur-md py-16 px-12 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-black text-[#006064] mb-4 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Coverage Tiers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Weather API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#006064] mb-4 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Newsroom</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#006064] mb-4 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#006064] mb-4 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Claims Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-black text-primary uppercase tracking-tighter">TRIGGERPE</h2>
          <p className="text-[10px] font-black text-[#00838F] uppercase tracking-widest opacity-60">© 2026 TriggerPe Parametric Insurance. Built for Bharat.</p>
        </div>
      </footer>
    </div>
  );
}