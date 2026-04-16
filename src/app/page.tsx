import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DeliveryGuy } from '@/components/DeliveryGuy';
import { Sparkles } from '@/components/Sparkles';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { CheckCircle2, Sun, CloudRain, Snowflake, Zap, ShieldCheck, ZapIcon, WalletCards } from 'lucide-react';

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C triggers ₹600', icon: Sun, border: 'border-t-warning', iconColor: 'text-warning' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr triggers ₹300', icon: CloudRain, border: 'border-t-primary', iconColor: 'text-primary' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm triggers ₹400', icon: Snowflake, border: 'border-t-blue-200', iconColor: 'text-blue-200' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm triggers ₹500', icon: Zap, border: 'border-t-purple-400', iconColor: 'text-purple-400' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#0a192f] to-[#112240]">
        <Sparkles />
        
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white leading-tight mb-6">
            When storms stop you, <br />
            <span className="text-primary neon-text-glow">we pay you instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
            India's first zero-touch parametric insurance for delivery workers. 
            No forms, no waiting, automatic payouts based on weather.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] shadow-lg">
              <Link href="/login">Get Protected Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary text-primary bg-transparent hover:bg-primary/10 transition-all hover:scale-105 shadow-md">
              Learn How It Works
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#112240] bg-slate-800 overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-400">
              <span className="text-white font-bold">2,847+</span> Workers Protected • 
              <span className="text-white font-bold"> ₹12L+</span> Auto-Paid
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Auto Claims
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Zero Forms
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Instant Payout
            </div>
          </div>
        </div>

        {/* Right Side - Swipeable Weather Flashcards */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <Carousel className="w-full">
              <CarouselContent>
                {weatherCards.map((card, idx) => (
                  <CarouselItem key={idx}>
                    <Card className={`w-full h-auto min-h-[400px] border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl transition-all border-t-4 ${card.border}`}>
                      <CardContent className="p-10 flex flex-col items-center text-center h-full justify-between">
                        <div className="w-full flex justify-end">
                          <card.icon className={`w-10 h-10 ${card.iconColor}`} />
                        </div>
                        <div className="w-64 h-64 my-4 animate-in zoom-in duration-700">
                          <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white mb-2">{card.label}</h3>
                          <p className="text-slate-400 font-medium text-lg">{card.trigger}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 bg-slate-800 border-none hover:bg-slate-700 text-white" />
                <CarouselNext className="static translate-y-0 bg-slate-800 border-none hover:bg-slate-700 text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-8 bg-[#112240] border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white text-center mb-16">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: WalletCards, title: 'Register', desc: 'Sign up in 2 minutes, choose your delivery platform.' },
              { icon: ShieldCheck, title: 'We Monitor', desc: 'Our AI watches weather data 24/7 for your specific city and zone.' },
              { icon: ZapIcon, title: 'Auto Payout', desc: 'When triggers hit, claims fire automatically. Money hits your UPI instantly.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-[#0a192f] flex items-center justify-center mb-6 shadow-xl border border-slate-800 transition-all group-hover:scale-110 group-hover:border-primary">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-8 bg-[#0a192f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white text-center mb-16">Simple Plans for All Heroes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'BASIC', price: '₹49', coverage: '₹800 max coverage', features: ['Rain triggers', 'Heat triggers'], popular: false },
              { title: 'STANDARD', price: '₹79', coverage: '₹1400 max coverage', features: ['All 5 weather triggers', 'Platform outages'], popular: true },
              { title: 'PREMIUM', price: '₹99', coverage: '₹2000 max coverage', features: ['All triggers', 'Priority support', 'Free health checkup'], popular: false },
            ].map((plan, idx) => (
              <Card key={idx} className={`relative border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-xl transition-all hover:scale-105 ${plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'hover:border-slate-700'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-bold text-slate-400 mb-2">{plan.title}</h3>
                  <div className="text-5xl font-bold text-white mb-4">{plan.price}<span className="text-lg text-slate-500">/week</span></div>
                  <p className="font-semibold text-primary mb-6">{plan.coverage}</p>
                  <ul className="space-y-4 mb-8 text-slate-300">
                    {plan.features.map((f, i) => <li key={i} className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> {f}</li>)}
                  </ul>
                  <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all">
                    <Link href="/register">Get {plan.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 bg-[#112240] border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: 'How does TriggerPe work?', a: 'TriggerPe uses parametric insurance. We define "triggers" (like 42°C heat). When those triggers are met in your city based on official weather data, we pay you automatically. No paperwork needed.' },
              { q: 'What weather events trigger a claim?', a: 'Currently, we cover Heavy Rain, Extreme Heat, Snow Fall, High AQI, and Thunderstorms. We also monitor for city-wide curfews or major platform outages.' },
              { q: 'How do I get paid?', a: 'During registration, you link your UPI ID. Payouts are sent directly to your linked UPI account within minutes of a trigger event being validated.' },
              { q: 'Is my data safe?', a: 'Yes, we use bank-grade encryption and only store data necessary for processing your policy and claims. We never sell your personal information.' },
              { q: 'Can I cancel anytime?', a: 'Yes! Our weekly plans are flexible. You can pause or cancel your subscription at the end of any week.' }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-slate-800 rounded-xl px-4 bg-[#0a192f] overflow-hidden">
                <AccordionTrigger className="text-left font-bold text-white hover:no-underline hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] text-white py-16 px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-headline font-bold mb-6 tracking-tighter text-primary">TRIGGERPE</h2>
            <p className="text-slate-500 text-sm">Empowering India's delivery heroes with instant weather protection.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer transition-colors">How it Works</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Triggers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Claims History</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Safety Guide</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">WhatsApp Bot</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">IRDAI Info</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-600">© 2026 TriggerPe Parametric Insurance Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-slate-600 hover:text-primary cursor-pointer transition-colors text-sm font-medium">Twitter</span>
            <span className="text-slate-600 hover:text-primary cursor-pointer transition-colors text-sm font-medium">Instagram</span>
            <span className="text-slate-600 hover:text-primary cursor-pointer transition-colors text-sm font-medium">LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
