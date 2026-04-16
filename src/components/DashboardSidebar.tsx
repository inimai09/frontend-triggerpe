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
    <aside className="w-[280px] bg-white border-r border-border h-screen flex flex-col sticky top-0 shrink-0">
      {/* Logo Section */}
      <div className="p-8">
        <h1 className="text-2xl font-black text-[#006064] tracking-tighter uppercase font-headline">TRIGGERPE</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-bold text-xs group",
                isActive 
                  ? "bg-[#E0F7FA] text-primary" 
                  : "text-[#00838F] hover:bg-[#F1F5F9]"
              )}
            >
              <div className={cn(
                "p-2 rounded-full transition-colors",
                isActive ? "bg-white/50" : "bg-[#F1F5F9] group-hover:bg-white"
              )}>
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-[#00838F]")} />
              </div>
              <span className="uppercase tracking-widest">{item.label}</span>
              {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="p-6 border-t border-border mt-auto">
        <div className="flex items-center gap-3 mb-4 p-2">
          <Avatar className="w-10 h-10 border border-border shadow-sm">
            <AvatarImage src={`https://picsum.photos/seed/${user.name}/100/100`} />
            <AvatarFallback className="bg-[#E0F7FA] text-primary font-black uppercase">{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black text-[#006064] truncate uppercase tracking-tighter">{user.name}</span>
            <Badge variant="secondary" className="bg-[#E0F7FA] text-[#00838F] hover:bg-[#E0F7FA] text-[9px] w-fit px-2 font-black uppercase">
              {user.platform}
            </Badge>
          </div>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start gap-4 text-destructive hover:bg-destructive/10 rounded-full h-11 px-4"
        >
          <div className="p-2 bg-destructive/10 rounded-full">
            <LogOut className="w-4 h-4" />
          </div>
          <span className="font-black text-xs uppercase tracking-widest">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
