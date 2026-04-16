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
      <section className="relative flex flex-col lg:flex-row w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#020c1b] via-[#051a3d] to-[#020c1b]">
        <Sparkles />
        
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10">
          <Badge className="w-fit mb-6 bg-primary/20 text-primary border-primary/30 py-1.5 px-4 rounded-full font-bold tracking-tight">INDIA'S FIRST PARAMETRIC INSURANCE</Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white leading-tight mb-6">
            When storms stop you, <br />
            <span className="text-primary neon-text-glow">we pay you instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
            Zero-touch parametric protection for delivery heroes. 
            No forms, no waiting—automatic payouts triggered by real-time weather data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90 btn-hover-effect shadow-xl">
              <Link href="/login">Get Protected Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg border-primary/40 text-primary bg-transparent hover:bg-primary/10 btn-hover-effect">
              Learn How It Works
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-800 overflow-hidden shadow-lg">
                  <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-400">
              <span className="text-white font-bold">2,847+</span> Workers Protected • 
              <span className="text-white font-bold"> ₹12L+</span> Auto-Paid
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Auto Claims
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Zero Forms
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Instant Payout
            </div>
          </div>
        </div>

        {/* Right Side - Swipeable Weather Flashcards */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex items-center justify-center relative z-10">
          <div className="w-full max-w-sm group">
            <Carousel className="w-full">
              <CarouselContent>
                {weatherCards.map((card, idx) => (
                  <CarouselItem key={idx}>
                    <Card className={`w-full h-auto min-h-[450px] border border-slate-800 bg-white/5 backdrop-blur-md shadow-2xl transition-all border-t-8 ${card.border} hover:shadow-primary/20`}>
                      <CardContent className="p-10 flex flex-col items-center text-center h-full justify-between">
                        <div className="w-full flex justify-end">
                          <card.icon className={`w-12 h-12 ${card.iconColor}`} />
                        </div>
                        <div className="w-64 h-64 my-6 transform group-hover:scale-105 transition-transform duration-500">
                          <DeliveryGuy weather={card.type as any} className="w-full h-full drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-3xl font-bold text-white mb-2">{card.label}</h3>
                          <p className="text-primary font-bold text-xl px-4 py-2 bg-primary/10 rounded-xl inline-block">{card.trigger}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-6 mt-10">
                <CarouselPrevious className="static translate-y-0 bg-slate-800/50 border-none hover:bg-primary text-white btn-hover-effect" />
                <CarouselNext className="static translate-y-0 bg-slate-800/50 border-none hover:bg-primary text-white btn-hover-effect" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-8 bg-[#011627] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white text-center mb-20 tracking-tight">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: WalletCards, title: 'Register', desc: 'Sign up in 2 minutes, choose your delivery platform and link UPI.' },
              { icon: ShieldCheck, title: 'We Monitor', desc: 'Our AI engine monitors live weather data 24/7 for your specific operational zone.' },
              { icon: ZapIcon, title: 'Auto Payout', desc: 'When weather hits the trigger point, money is pushed to your account instantly.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-3xl bg-[#020c1b] flex items-center justify-center mb-8 shadow-2xl border border-white/5 transition-all group-hover:scale-110 group-hover:border-primary group-hover:shadow-primary/20">
                  <item.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-8 bg-background relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white text-center mb-20 tracking-tight">Simple Plans for All Heroes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'BASIC', price: '49', coverage: '₹800 max coverage', features: ['Rain triggers', 'Heat triggers'], popular: false },
              { title: 'STANDARD', price: '79', coverage: '₹1400 max coverage', features: ['All 5 weather triggers', 'Platform outages'], popular: true },
              { title: 'PREMIUM', price: '99', coverage: '₹2000 max coverage', features: ['All triggers', 'Priority support', 'Free health checkup'], popular: false },
            ].map((plan, idx) => (
              <Card key={idx} className={`relative border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl transition-all hover:translate-y-[-10px] ${plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105 z-10' : 'hover:border-primary/40'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-10 text-center">
                  <h3 className="text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">{plan.title}</h3>
                  <div className="text-6xl font-bold text-white mb-4 flex items-center justify-center">
                    <span className="text-2xl mr-1">₹</span>{plan.price}<span className="text-lg text-slate-500 ml-1">/week</span>
                  </div>
                  <p className="font-bold text-primary text-xl mb-8">{plan.coverage}</p>
                  <ul className="space-y-5 mb-10 text-slate-300 text-left px-4">
                    {plan.features.map((f, i) => <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-success shrink-0" /> {f}</li>)}
                  </ul>
                  <Button asChild className={`w-full rounded-full py-7 text-lg font-bold btn-hover-effect ${plan.popular ? 'bg-primary' : 'bg-white/10 hover:bg-primary'}`}>
                    <Link href="/login">Get {plan.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010912] text-white py-20 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary">TRIGGERPE</h2>
            <p className="text-slate-500 text-sm leading-relaxed">India's most trusted parametric shield for the gig economy. We protect those who keep our cities moving.</p>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-lg">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">How it Works</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Trigger Thresholds</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Transparency Report</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Claims History</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-lg">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Partner Help Desk</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Safety Protocols</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Contact Support</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">WhatsApp Claims</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Terms & Conditions</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">Cookie settings</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-2">IRDAI Compliance</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-slate-600 font-medium">© 2026 TriggerPe Parametric Insurance Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
              <span key={social} className="text-slate-600 hover:text-primary cursor-pointer transition-colors text-sm font-bold uppercase tracking-widest">{social}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Badge } from '@/components/ui/badge';
