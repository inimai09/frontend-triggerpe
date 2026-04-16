
"use client"

import React from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#E0F7FA]">
      <DashboardSidebar />
      <main className="flex-grow p-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
