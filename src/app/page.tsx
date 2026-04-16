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
import { Sun, CloudRain, Snowflake, Zap, ShieldCheck, ZapIcon, WalletCards, ArrowRight, Star } from 'lucide-react';
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
      <section className="flex flex-col lg:flex-row w-full min-h-[90vh] items-center">
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-24 py-12">
          <Badge className="w-fit mb-6 bg-primary/10 text-primary border-primary/20 py-1.5 px-4 rounded-full font-black">
            INDIA'S FIRST PARAMETRIC INSURANCE
          </Badge>
          <h1 className="text-5xl md:text-6xl font-black text-[#006064] leading-tight mb-6">
            When storms stop you,<br />
            <span className="text-primary">we pay you instantly.</span>
          </h1>
          <p className="text-lg text-[#00838F] mb-10 max-w-xl font-bold">
            India's first zero-touch parametric insurance for delivery workers. No forms, no waiting, automatic payouts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90 btn-hover-effect text-white">
              <Link href="/login" className="flex items-center gap-2">Get Protected Now <ArrowRight className="w-5 h-5 text-white" /></Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-bold text-[#00838F]">
              <span className="text-primary">2,847+</span> Workers Protected • ₹12L+ Auto-Paid • 99% Uptime
            </p>
            <div className="flex gap-4 text-xs font-black text-[#006064] uppercase tracking-widest">
              <span>✓ Auto Claims</span>
              <span>✓ Zero Forms</span>
              <span>✓ Instant Payout</span>
            </div>
          </div>
        </div>

        {/* Right Side - Weather Flashcards */}
        <div className="flex-1 w-full max-w-lg mx-auto py-12 px-6">
          <Carousel className="w-full">
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx}>
                  <Card className={`overflow-hidden border border-border shadow-lg bg-white border-t-[6px] ${card.border} rounded-2xl`}>
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
              <CarouselPrevious className="static translate-y-0 bg-white shadow-md border border-border w-12 h-12 rounded-full" />
              <CarouselNext className="static translate-y-0 bg-white shadow-md border border-border w-12 h-12 rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-12 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#006064] text-center mb-16">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: WalletCards, title: '📝 Register', desc: 'Sign up in 2 minutes, choose your platform & link UPI.' },
              { icon: ShieldCheck, title: '🤖 We Monitor', desc: 'Our AI engine tracks live weather data 24/7 for your city.' },
              { icon: ZapIcon, title: '💰 Auto Payout', desc: 'Claim fires automatically when trigger is hit. Money in UPI.' }
            ].map((item, idx) => (
              <Card key={idx} className="p-10 text-center bg-white border border-border shadow-sm rounded-xl">
                <h3 className="text-2xl font-black text-[#006064] mb-4">{item.title}</h3>
                <p className="text-[#00838F] font-bold leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-12 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#006064] text-center mb-12 uppercase tracking-tight">Worker Stories</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {[
                { text: "TriggerPe paid me ₹600 when Chennai floods hit. No forms, no calls.", author: "Rajesh K., Swiggy Chennai" },
                { text: "I got ₹300 during heat wave. Money came within minutes.", author: "Priya S., Zomato Delhi" },
                { text: "Finally insurance that actually pays when I can't work.", author: "Ankit M., Blinkit Bangalore" }
              ].map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="bg-white p-12 text-center rounded-2xl shadow-sm border-none">
                    <div className="flex justify-center gap-1 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-warning text-warning" />)}
                    </div>
                    <p className="text-2xl font-bold text-[#006064] italic mb-6">"{t.text}"</p>
                    <p className="text-sm font-black text-[#00838F] uppercase tracking-widest">— {t.author}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-12 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#006064] text-center mb-16">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'BASIC', price: '₹49', coverage: '₹800 max', perks: ['Rain + Heat triggers'], btn: 'Get Basic' },
              { name: 'STANDARD', price: '₹79', coverage: '₹1400 max', perks: ['All 5 triggers'], badge: 'MOST POPULAR', btn: 'Get Standard' },
              { name: 'PREMIUM', price: '₹99', coverage: '₹2000 max', perks: ['All triggers + priority'], btn: 'Get Premium' },
            ].map((plan, i) => (
              <Card key={i} className={`p-10 flex flex-col items-center bg-white border-2 rounded-2xl ${plan.badge ? 'border-primary shadow-lg scale-105' : 'border-border shadow-sm'}`}>
                {plan.badge && <Badge className="bg-primary text-white mb-4">{plan.badge}</Badge>}
                <h3 className="text-xl font-black text-[#00838F] mb-2">{plan.name}</h3>
                <p className="text-4xl font-black text-[#006064] mb-1">{plan.price}<span className="text-sm">/week</span></p>
                <p className="text-sm font-bold text-primary mb-6">{plan.coverage}</p>
                <ul className="space-y-3 mb-8 w-full">
                  {plan.perks.map((p, j) => <li key={j} className="text-sm font-bold text-center text-[#00838F]">✓ {p}</li>)}
                </ul>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 font-black h-12 btn-hover-effect text-white">{plan.btn}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-12 bg-transparent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#006064] text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How does TriggerPe work?", a: "We monitor real-time weather data. If a city-wide trigger (like heavy rain) is reached, we automatically initiate a payout to all covered partners in that zone." },
              { q: "What weather events trigger a claim?", a: "Current triggers include Heavy Rain (>15mm/hr), Extreme Heat (>42°C), AQI (>300), Official Curfews, and Major Platform Outages." },
              { q: "How do I get paid?", a: "Payouts are pushed directly to your registered UPI ID (GPay/PhonePe/Paytm) within minutes of a trigger event." },
              { q: "Is my data safe?", a: "We only track your operational city and platform ID. We do not store live GPS locations or personal bank details other than your UPI VPA." },
              { q: "What is NOT covered?", a: "Vehicle breakdowns, personal health issues, accidents, or platform suspensions not related to systemic outages." },
              { q: "Can I cancel anytime?", a: "Yes. Since coverage is weekly, you can stop renewal at any time through the settings." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border-none rounded-xl px-6">
                <AccordionTrigger className="font-black text-[#006064] hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="font-bold text-[#00838F]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-white py-16 px-12 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-black text-[#006064] mb-4">Product</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#">How it Works</Link></li>
              <li><Link href="#">Coverage Tiers</Link></li>
              <li><Link href="#">Weather API</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#006064] mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Newsroom</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#006064] mb-4">Support</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Contact Support</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[#006064] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm font-bold text-[#00838F]">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Claims Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-black text-primary">TRIGGERPE</h2>
          <p className="text-xs font-black text-[#00838F] uppercase tracking-widest opacity-60">© 2026 TriggerPe Parametric Insurance. Built for Bharat.</p>
        </div>
      </footer>
    </div>
  );
}
