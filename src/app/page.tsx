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
import { Sun, CloudRain, Snowflake, Zap, ShieldCheck, ZapIcon, WalletCards, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C triggers ₹600', icon: Sun, border: 'border-t-orange-400', iconColor: 'text-orange-400' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr triggers ₹300', icon: CloudRain, border: 'border-t-cyan-500', iconColor: 'text-cyan-500' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm triggers ₹400', icon: Snowflake, border: 'border-t-blue-300', iconColor: 'text-blue-300' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm triggers ₹500', icon: Zap, border: 'border-t-indigo-400', iconColor: 'text-indigo-400' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-white relative">
      <Sparkles />
      
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row w-full min-h-[90vh] items-center px-6 md:px-12 lg:px-24 py-12 lg:py-0">
        <div className="flex-1 flex flex-col justify-center z-10 text-center lg:text-left">
          <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20 py-1.5 px-4 rounded-full font-bold mx-auto lg:mx-0">
            INDIA'S FIRST PARAMETRIC INSURANCE
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6">
            When weather stops you,<br />
            <span className="text-primary">we pay instantly.</span>
          </h1>
          <p className="text-base md:text-xl text-secondary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
            Zero-touch parametric protection for delivery heroes. 
            Automatic payouts triggered by real-time climate data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 btn-hover-effect">
              <Link href="/login" className="flex items-center gap-2">Get Protected <ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary/40 text-primary bg-white/50 backdrop-blur-sm btn-hover-effect">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm font-bold text-foreground/60">
              <span className="text-primary">2,847+</span> Workers Protected
            </p>
          </div>
        </div>

        {/* Right Side - Weather Flashcards */}
        <div className="flex-1 w-full max-w-lg lg:max-w-md mx-auto z-10 mt-12 lg:mt-0">
          <Carousel className="w-full">
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx}>
                  <Card className={`overflow-hidden border-none glass-card border-t-[8px] ${card.border} rounded-[2rem] transition-all duration-500`}>
                    <CardContent className="p-10 flex flex-col items-center text-center">
                      <div className="w-full flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Flashcard {idx + 1}</span>
                        <card.icon className={`w-10 h-10 ${card.iconColor}`} />
                      </div>
                      <div className="w-56 h-56 mb-8 transform hover:scale-105 transition-transform">
                        <DeliveryGuy weather={card.type as any} className="w-full h-full drop-shadow-xl" />
                      </div>
                      <h3 className="text-3xl font-black text-foreground mb-3">{card.label}</h3>
                      <div className="inline-block px-4 py-2 bg-primary/5 rounded-xl border border-primary/10">
                        <p className="text-primary font-bold text-lg">{card.trigger}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white shadow-md border-none hover:bg-primary hover:text-white w-12 h-12 btn-hover-effect" />
              <CarouselNext className="static translate-y-0 bg-white shadow-md border-none hover:bg-primary hover:text-white w-12 h-12 btn-hover-effect" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Simplified Features */}
      <section className="py-20 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-16">How TriggerPe Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: WalletCards, title: 'Register', desc: 'Sign up in 2 mins, link your platform & UPI.' },
              { icon: ShieldCheck, title: 'We Monitor', desc: 'Our AI engine tracks live weather data 24/7.' },
              { icon: ZapIcon, title: 'Auto Payout', desc: 'Money is pushed to your account instantly.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all border-2 border-white">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-secondary-foreground/60 font-medium leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary/30 py-12 px-6 border-t border-primary/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-2xl font-black tracking-tighter text-primary">TRIGGERPE</h2>
          <div className="flex gap-8 text-sm font-bold text-secondary-foreground/60">
            <Link href="/login" className="hover:text-primary transition-colors">LOGIN</Link>
            <Link href="/register" className="hover:text-primary transition-colors">REGISTER</Link>
            <Link href="#" className="hover:text-primary transition-colors">HELP</Link>
          </div>
          <p className="text-xs font-bold opacity-40">© 2026 TriggerPe Parametric Insurance.</p>
        </div>
      </footer>
    </div>
  );
}