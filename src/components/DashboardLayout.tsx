"use client"

import React from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-transparent">
      <DashboardSidebar />
      <main className="flex-1 p-8 overflow-x-hidden relative">
        <div className="max-w-7xl mx-auto h-full relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
