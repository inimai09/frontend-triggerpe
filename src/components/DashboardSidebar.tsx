
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
    <aside className="w-[280px] min-w-[280px] max-w-[280px] bg-black/90 backdrop-blur-3xl border-r border-primary/20 h-screen flex flex-col sticky top-0 overflow-hidden z-50">
      {/* Logo Section - Compacted */}
      <div className="px-8 py-8">
        <h1 className="text-2xl font-headline font-black text-primary tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(0,172,193,0.5)]">TRIGGERPE</h1>
        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mt-1.5">Parametric Shield v2.0</p>
      </div>

      {/* Navigation - Optimized spacing to avoid scrolling */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 font-bold group relative overflow-hidden",
              pathname === item.href 
                ? "bg-primary/10 text-white border border-primary/30 shadow-[0_0_15px_rgba(0,172,193,0.2)]" 
                : "text-white/40 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-all duration-300",
              pathname === item.href 
                ? "text-primary drop-shadow-[0_0_8px_rgba(0,172,193,0.8)] scale-110" 
                : "text-white/20 group-hover:text-primary/70 group-hover:drop-shadow-[0_0_5px_#00ACC1]"
            )} />
            <span className={cn(
              "text-[11px] uppercase tracking-widest transition-colors",
              pathname === item.href ? "text-white" : "text-inherit"
            )}>{item.label}</span>
            {pathname === item.href && (
              <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary rounded-full shadow-[0_0_10px_#00ACC1]" />
            )}
          </Link>
        ))}
      </nav>

      {/* Footer / Profile Section - Clean & Fixed */}
      <div className="p-6 mt-auto bg-black/20 border-t border-white/5">
        <div className="flex items-center gap-4 mb-6 p-3 bg-white/5 rounded-2xl border border-white/5">
          <Avatar className="w-10 h-10 border border-primary/30 bg-black shadow-[0_0_10px_rgba(0,172,193,0.2)]">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-primary/10 text-primary font-black text-sm">{user.name[0] || 'P'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-black text-white truncate uppercase tracking-tight">{user.name}</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[7px] px-1.5 py-0.5 bg-primary/20 text-primary font-black rounded-full uppercase tracking-tighter border border-primary/20">{user.platform}</span>
              <BadgeCheck className="w-3 h-3 text-primary icon-neon-glow" />
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full flex items-center justify-start gap-4 px-5 py-4 text-destructive/50 hover:text-destructive hover:bg-destructive/10 rounded-xl font-black transition-all duration-300 border border-transparent"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
