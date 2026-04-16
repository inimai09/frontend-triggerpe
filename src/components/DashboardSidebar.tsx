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
    <aside className="w-[240px] min-w-[240px] max-w-[240px] bg-black/95 backdrop-blur-3xl border-r border-primary/20 h-screen flex flex-col sticky top-0 overflow-hidden z-50">
      {/* Logo Section - Extra Compact */}
      <div className="px-6 py-6 shrink-0">
        <h1 className="text-xl font-headline font-black text-primary tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(0,172,193,0.5)]">TRIGGERPE</h1>
        <p className="text-[7px] font-black text-white/20 uppercase tracking-[0.3em] mt-1">Shield v2.0</p>
      </div>

      {/* Navigation - Ultra Compact */}
      <nav className="flex-1 px-3 space-y-1 py-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 font-bold group relative overflow-hidden btn-hover-effect",
              pathname === item.href 
                ? "bg-primary/10 text-white border border-primary/30 shadow-[0_0_15px_rgba(0,172,193,0.2)]" 
                : "text-white/40 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5"
            )}
          >
            <div className={cn(
              "p-2.5 rounded-full transition-all duration-300",
              pathname === item.href ? "bg-primary/20" : "bg-white/5"
            )}>
              <item.icon className={cn(
                "w-4 h-4 transition-all duration-300",
                pathname === item.href 
                  ? "text-primary drop-shadow-[0_0_8px_rgba(0,172,193,0.8)] scale-110" 
                  : "text-white/20 group-hover:text-primary/70 group-hover:drop-shadow-[0_0_5px_#00ACC1]"
              )} />
            </div>
            <span className={cn(
              "text-[9px] uppercase tracking-widest transition-colors font-headline",
              pathname === item.href ? "text-white" : "text-inherit"
            )}>{item.label}</span>
            {pathname === item.href && (
              <div className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-full shadow-[0_0_10px_#00ACC1]" />
            )}
          </Link>
        ))}
      </nav>

      {/* Footer / Profile Section - Extra Compact */}
      <div className="p-3 mt-auto bg-black/40 border-t border-white/5 shrink-0">
        <div className="flex items-center gap-3 mb-2 p-2.5 bg-white/5 rounded-full border border-white/5 btn-hover-effect cursor-pointer">
          <Avatar className="w-8 h-8 border border-primary/30 bg-black shadow-[0_0_10px_rgba(0,172,193,0.2)] rounded-full overflow-hidden">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-primary/10 text-primary font-black text-[10px] rounded-full">{user.name[0] || 'P'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] font-black text-white truncate uppercase tracking-tight font-headline">{user.name}</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[6px] px-2 py-0.5 bg-primary/20 text-primary font-black rounded-full uppercase tracking-tighter border border-primary/20">{user.platform}</span>
              <BadgeCheck className="w-2.5 h-2.5 text-primary icon-neon-glow" />
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full flex items-center justify-start gap-3 px-5 py-2 text-destructive/50 hover:text-destructive hover:bg-destructive/10 rounded-full font-black transition-all duration-300 border border-transparent btn-hover-effect h-10"
        >
          <div className="p-2 bg-destructive/10 rounded-full">
            <LogOut className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] uppercase tracking-widest font-headline">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
