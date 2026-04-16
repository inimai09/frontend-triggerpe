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
  { label: 'Admin', icon: ShieldAlert, href: '/admin', isAdmin: true },
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
    <aside className="w-[280px] bg-black/60 backdrop-blur-2xl border-r border-primary/20 h-screen flex flex-col sticky top-0 overflow-y-auto z-50">
      <div className="p-10">
        <h1 className="text-3xl font-headline font-black text-primary tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(0,172,193,0.5)]">TRIGGERPE</h1>
      </div>

      <nav className="flex-1 px-6 py-4 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-black group",
              pathname === item.href 
                ? "bg-primary text-white shadow-[0_0_20px_rgba(0,172,193,0.4)]" 
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              pathname === item.href ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-white/40 group-hover:text-primary"
            )} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-8 border-t border-white/10 mt-auto bg-black/20">
        <div className="flex items-center gap-4 mb-8">
          <Avatar className="w-12 h-12 border-2 border-primary/40 bg-black/40">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-primary/20 text-primary font-black">{user.name[0] || 'P'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black text-white truncate">{user.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] px-2 py-0.5 bg-primary/20 text-primary font-bold rounded-full uppercase tracking-wider border border-primary/30">{user.platform}</span>
              <BadgeCheck className="w-3 h-3 text-primary icon-neon-glow" />
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full flex items-center justify-start gap-4 px-5 py-4 text-destructive hover:text-white hover:bg-destructive/20 rounded-2xl font-black transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
