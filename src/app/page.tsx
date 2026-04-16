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
import { Sun, CloudRain, Snowflake, Zap, ShieldCheck, Smartphone, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const weatherCards = [
    { type: 'SUNNY', label: 'Extreme Heat', trigger: '>42°C: ₹600', icon: Sun, color: 'text-[#FFB74D]', bg: 'bg-[#FFB74D]/5' },
    { type: 'RAIN', label: 'Heavy Rain', trigger: '>15mm/hr: ₹300', icon: CloudRain, color: 'text-[#00ACC1]', bg: 'bg-[#00ACC1]/5' },
    { type: 'SNOW', label: 'Snow Fall', trigger: '>5mm: ₹400', icon: Snowflake, color: 'text-[#00838F]', bg: 'bg-[#00838F]/5' },
    { type: 'THUNDER', label: 'Thunder Storm', trigger: 'Storm: ₹500', icon: Zap, color: 'text-[#FFB74D]', bg: 'bg-[#FFB74D]/10' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#E0F7FA] font-body text-[#006064]">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row w-full min-h-[90vh] items-center px-6 lg:px-20 py-20 gap-20">
        <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
          <Badge className="bg-[#00ACC1] text-white py-2 px-6 rounded-full font-bold text-xs uppercase tracking-widest border-none">
            India's First Parametric Insurance
          </Badge>
          
          <h1 className="text-7xl md:text-8xl font-black leading-[1.1] tracking-tighter font-headline">
            When storms stop you, <br />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,172,193,0.3)]">WE PAY YOU INSTANTLY.</span>
          </h1>
          
          <p className="text-xl text-[#00838F] max-w-xl font-medium leading-relaxed">
            Zero-touch parametric insurance for delivery heroes. No forms, no waiting, automatic payouts pushed to your UPI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-xl bg-primary hover:bg-primary/90 text-white font-black shadow-xl btn-hover-effect">
              <Link href="/login">Start Coverage</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 text-[#00838F] font-bold">
            <div className="p-2 bg-white rounded-full shadow-sm">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-black">IRDAI Registered Service</span>
          </div>
        </div>

        <div className="w-full lg:w-[400px] animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {weatherCards.map((card, idx) => (
                <CarouselItem key={idx}>
                  <Card className="border-none bg-white shadow-2xl rounded-[3.5rem] overflow-hidden">
                    <CardContent className="p-12 flex flex-col items-center text-center">
                      <div className="w-full flex justify-between items-center mb-10">
                        <Badge variant="outline" className="text-[10px] font-black text-[#00838F]/40 border-[#00838F]/10 rounded-full px-4">MODE {idx + 1}</Badge>
                        <div className={cn("p-4 rounded-full", card.bg)}>
                          <card.icon className={cn("w-8 h-8", card.color)} />
                        </div>
                      </div>
                      <div className="w-64 h-64 mb-10">
                        <DeliveryGuy weather={card.type as any} className="w-full h-full" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black text-[#006064] uppercase tracking-tighter font-headline">{card.label}</h3>
                        <p className={cn("text-xl font-black uppercase tracking-tighter", card.color)}>{card.trigger}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-10">
              <CarouselPrevious className="static translate-y-0 bg-white border-none shadow-lg w-14 h-14 rounded-full text-primary hover:text-primary/80" />
              <CarouselNext className="static translate-y-0 bg-white border-none shadow-lg w-14 h-14 rounded-full text-primary hover:text-primary/80" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl font-black tracking-tighter font-headline">Three Steps to Safety</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'One-Time Setup', desc: 'Link your platform ID and UPI in 30 seconds. No paperwork.', icon: Smartphone },
              { title: 'Live Monitoring', desc: 'Our neural engine watches weather and platform status in your zone.', icon: Cpu },
              { title: 'Auto Payout', desc: 'When triggers hit, money is pushed instantly to your wallet.', icon: Zap },
            ].map((step, i) => (
              <div key={i} className="space-y-8 text-center md:text-left group">
                <div className="w-20 h-20 rounded-full bg-[#E0F7FA] flex items-center justify-center border border-primary/20 mx-auto md:mx-0 transition-transform group-hover:scale-110">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-black font-headline">{step.title}</h3>
                <p className="text-lg font-medium text-[#00838F] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 lg:px-20 bg-[#E0F7FA] border-t border-primary/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-[#006064] tracking-tighter font-headline uppercase">TRIGGERPE</h2>
            <p className="text-[10px] font-black text-[#00838F] uppercase tracking-[0.4em] mt-2">Parametric Shield for Bharat</p>
          </div>
          <p className="text-xs font-bold text-[#00838F]/50 text-center">© 2026 TriggerPe Parametric Insurance. IRDAI Registered.</p>
        </div>
      </footer>
    </div>
  );
}
