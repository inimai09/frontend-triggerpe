import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DeliveryGuy } from '@/components/DeliveryGuy';
import { Sparkles } from '@/components/Sparkles';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { CheckCircle2, Sun, CloudRain, Snowflake, Zap, ShieldCheck, ZapIcon, WalletCards, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C triggers ₹600', icon: Sun, border: 'border-t-orange-400', iconColor: 'text-orange-400' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr triggers ₹300', icon: CloudRain, border: 'border-t-cyan-500', iconColor: 'text-cyan-500' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm triggers ₹400', icon: Snowflake, border: 'border-t-blue-300', iconColor: 'text-blue-300' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm triggers ₹500', icon: Zap, border: 'border-t-indigo-400', iconColor: 'text-indigo-400' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#b2ebf2] via-[#80deea] to-[#4dd0e1]">
        <Sparkles />
        
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-20 z-10">
          <Badge className="w-fit mb-6 bg-white/40 text-primary border-white/60 py-2 px-5 rounded-full font-bold tracking-tight backdrop-blur-md">
            INDIA'S FIRST PARAMETRIC INSURANCE
          </Badge>
          <h1 className="text-5xl md:text-8xl font-headline font-bold text-[#006064] leading-[1.1] mb-8">
            When weather stops you, <br />
            <span className="text-white drop-shadow-lg">we pay instantly</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#004d40] mb-10 max-w-xl leading-relaxed font-medium">
            Zero-touch parametric protection for delivery heroes. 
            Automatic payouts triggered by real-time weather data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl bg-[#00acc1] hover:bg-[#0097a7] btn-hover-effect shadow-2xl text-white">
              <Link href="/login" className="flex items-center gap-2">Get Protected Now <ArrowRight className="w-6 h-6" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl border-[#00acc1]/40 text-[#00acc1] bg-white/30 backdrop-blur-md hover:bg-white/50 btn-hover-effect">
              Learn How It Works
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mb-10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-xl">
                  <img src={`https://picsum.photos/seed/${i + 20}/150/150`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base font-bold text-[#006064]">
              <span className="text-white drop-shadow-sm">2,847+</span> Workers Protected • 
              <span className="text-white drop-shadow-sm"> ₹12L+</span> Auto-Paid
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'Auto Claims', icon: ZapIcon },
              { label: 'Zero Forms', icon: ShieldCheck },
              { label: 'Instant Payout', icon: WalletCards }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-base font-bold text-[#006064] bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <feature.icon className="w-6 h-6 text-white" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Swipeable Weather Flashcards */}
        <div className="flex-1 p-8 md:p-12 lg:p-20 flex items-center justify-center relative z-10">
          <div className="w-full max-w-md group">
            <Carousel className="w-full">
              <CarouselContent>
                {weatherCards.map((card, idx) => (
                  <CarouselItem key={idx}>
                    <Card className={`w-full h-auto min-h-[500px] border-none bg-white/80 backdrop-blur-xl shadow-2xl transition-all border-t-[12px] ${card.border} hover:shadow-primary/40 rounded-[2.5rem]`}>
                      <CardContent className="p-12 flex flex-col items-center text-center h-full justify-between">
                        <div className="w-full flex justify-between items-center mb-4">
                          <span className="text-xs font-black tracking-[0.2em] text-slate-400 uppercase">Flashcard {idx + 1}</span>
                          <card.icon className={`w-14 h-14 ${card.iconColor}`} />
                        </div>
                        <div className="w-72 h-72 my-8 transform group-hover:rotate-3 transition-transform duration-700">
                          <DeliveryGuy weather={card.type as any} className="w-full h-full drop-shadow-2xl" />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-4xl font-black text-[#006064] mb-2">{card.label}</h3>
                          <div className="inline-block px-6 py-3 bg-[#e0f7fa] rounded-2xl border-2 border-[#00acc1]/20">
                            <p className="text-[#00acc1] font-black text-2xl">{card.trigger}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-8 mt-12">
                <CarouselPrevious className="static translate-y-0 bg-white shadow-xl border-none hover:bg-[#00acc1] hover:text-white w-14 h-14 btn-hover-effect" />
                <CarouselNext className="static translate-y-0 bg-white shadow-xl border-none hover:bg-[#00acc1] hover:text-white w-14 h-14 btn-hover-effect" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Simplified Features for this turn */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-[#006064] mb-20 tracking-tight">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: WalletCards, title: 'Register', desc: 'Sign up in 2 minutes, choose your delivery platform and link UPI.' },
              { icon: ShieldCheck, title: 'We Monitor', desc: 'Our AI engine monitors live weather data 24/7 for your specific operational zone.' },
              { icon: ZapIcon, title: 'Auto Payout', desc: 'When weather hits the trigger point, money is pushed to your account instantly.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-28 h-28 rounded-[2.5rem] bg-[#e0f7fa] flex items-center justify-center mb-10 shadow-lg border-4 border-white transition-all group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-14 h-14 text-[#00acc1]" />
                </div>
                <h3 className="text-3xl font-black text-[#006064] mb-5">{item.title}</h3>
                <p className="text-slate-500 text-xl leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e0f7fa] text-[#006064] py-24 px-8 border-t border-white/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-headline font-black tracking-tighter text-[#00acc1]">TRIGGERPE</h2>
            <p className="text-[#004d40] font-medium max-w-sm">India's most trusted parametric shield for the gig economy.</p>
          </div>
          <div className="flex gap-10">
            <Link href="/login" className="font-black hover:text-[#00acc1] transition-colors">LOGIN</Link>
            <Link href="/register" className="font-black hover:text-[#00acc1] transition-colors">REGISTER</Link>
            <Link href="#" className="font-black hover:text-[#00acc1] transition-colors">HELP</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-10 border-t border-[#00acc1]/10 text-center">
           <p className="text-sm font-bold opacity-60">© 2026 TriggerPe Parametric Insurance Pvt Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
