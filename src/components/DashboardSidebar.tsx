
"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  ClipboardList, 
  CloudSun, 
  BrainCircuit, 
  Settings, 
  ShieldAlert,
  LogOut,
  BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'My Policy', icon: FileText, href: '/policy' },
  { label: 'Claims', icon: ClipboardList, href: '/claims' },
  { label: 'Weather', icon: CloudSun, href: '/weather' },
  { label: 'Premium AI', icon: BrainCircuit, href: '/ai' },
  { label: 'Settings', icon: Settings, href: '/settings' },
  { label: 'Admin', icon: ShieldAlert, href: '/admin' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState({ name: 'Partner', platform: 'Swiggy' });

  useEffect(() => {
    const saved = localStorage.getItem('tp_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.name) {
          setUser(parsed);
        }
      } catch (e) {
        console.error("Failed to parse user session");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tp_user');
    router.push('/');
  };

  return (
    <aside className="w-[300px] min-w-[300px] max-w-[300px] bg-black/80 backdrop-blur-3xl border-r border-primary/30 h-screen flex flex-col sticky top-0 overflow-hidden z-50">
      <div className="p-10 pb-6">
        <h1 className="text-3xl font-headline font-black text-primary tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(0,172,193,0.6)]">TRIGGERPE</h1>
        <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mt-2">Parametric Shield v2.0</p>
      </div>

      <nav className="flex-1 px-6 py-8 space-y-4 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-5 px-6 py-4 rounded-[1.5rem] transition-all duration-300 font-black group relative overflow-hidden",
              pathname === item.href 
                ? "bg-primary text-white shadow-[0_0_25px_rgba(0,172,193,0.4)] border border-white/20" 
                : "text-white/50 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10"
            )}
          >
            <item.icon className={cn(
              "w-6 h-6 transition-all duration-300",
              pathname === item.href 
                ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110" 
                : "text-white/30 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_#00ACC1]"
            )} />
            <span className="text-[13px] uppercase tracking-widest">{item.label}</span>
            {pathname === item.href && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]" />
            )}
          </Link>
        ))}
      </nav>

      <div className="p-8 border-t border-white/10 mt-auto bg-black/40">
        <div className="flex items-center gap-5 mb-10 p-4 bg-white/5 rounded-2xl border border-white/5">
          <Avatar className="w-14 h-14 border-2 border-primary/50 bg-black/60 shadow-[0_0_15px_rgba(0,172,193,0.3)]">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-primary/20 text-primary font-black text-xl">{user.name[0] || 'P'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black text-white truncate uppercase tracking-tight">{user.name}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[8px] px-2 py-0.5 bg-primary/20 text-primary font-black rounded-full uppercase tracking-tighter border border-primary/30">{user.platform}</span>
              <BadgeCheck className="w-3.5 h-3.5 text-primary icon-neon-glow" />
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full flex items-center justify-start gap-5 px-6 py-5 text-destructive/60 hover:text-white hover:bg-destructive/20 rounded-[1.5rem] font-black transition-all duration-300 border border-transparent hover:border-destructive/30"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-[12px] uppercase tracking-widest">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
