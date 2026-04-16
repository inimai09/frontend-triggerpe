
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
    <aside className="w-[280px] bg-white border-r border-border h-screen flex flex-col sticky top-0 overflow-y-auto z-50">
      <div className="p-8">
        <h1 className="text-2xl font-headline font-black text-[#006064] tracking-tighter uppercase">TRIGGERPE</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all font-bold group",
              pathname === item.href 
                ? "bg-[#E0F7FA] text-primary shadow-sm" 
                : "text-secondary hover:bg-muted/50 hover:text-foreground"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              pathname === item.href ? "text-primary" : "text-secondary group-hover:text-foreground"
            )} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-border mt-auto">
        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-10 h-10 border-2 border-primary/20 bg-muted">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-primary/10 text-primary font-black">{user.name[0] || 'P'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black text-foreground truncate">{user.name}</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] px-2 py-0.5 bg-primary text-white font-bold rounded-full uppercase tracking-wider">{user.platform}</span>
              <BadgeCheck className="w-3 h-3 text-primary" />
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full flex items-center justify-start gap-3 px-5 py-3 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl font-black transition-all"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
