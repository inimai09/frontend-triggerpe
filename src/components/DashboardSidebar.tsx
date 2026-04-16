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
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

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
        if (parsed.name) setUser(parsed);
      } catch (e) {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tp_user');
    router.push('/');
  };

  return (
    <aside className="w-[280px] bg-black/60 backdrop-blur-2xl border-r border-white/10 h-screen flex flex-col sticky top-0 shrink-0 z-50 overflow-hidden shadow-2xl">
      {/* Logo Section */}
      <div className="p-8 pb-4">
        <h1 className="text-2xl font-black text-white tracking-tighter uppercase font-headline text-glow">TRIGGERPE</h1>
      </div>

      {/* Navigation - Non-scrolling with optimized density */}
      <nav className="flex-1 px-4 space-y-1.5 py-4 overflow-hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-300 font-bold text-[11px] group relative overflow-hidden",
                isActive 
                  ? "bg-primary/20 text-primary shadow-[0_0_20px_rgba(0,172,193,0.2)]" 
                  : "text-white/60 hover:bg-white/5 hover:text-white hover:translate-x-1"
              )}
            >
              <div className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                isActive ? "bg-primary text-white shadow-[0_0_15px_#00ACC1]" : "bg-white/5 text-white/40"
              )}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-widest">{item.label}</span>
              {isActive && <ChevronRight className="ml-auto w-4 h-4 animate-in slide-in-from-left-2 duration-300" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="p-6 border-t border-white/10 mt-auto bg-black/20">
        <div className="flex items-center gap-3 mb-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-default group">
          <Avatar className="w-9 h-9 border-2 border-white/10 shadow-sm transition-transform group-hover:scale-110">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-primary/20 text-primary font-black uppercase">{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-black text-white truncate uppercase tracking-tighter">{user.name}</span>
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-[8px] w-fit px-1.5 font-black uppercase h-4 border-primary/20">
              {user.platform}
            </Badge>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10 rounded-full h-11 px-4 btn-hover-effect"
        >
          <div className="w-7 h-7 bg-destructive/20 rounded-full flex items-center justify-center">
            <LogOut className="w-4 h-4" />
          </div>
          <span className="font-black text-[10px] uppercase tracking-widest">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
