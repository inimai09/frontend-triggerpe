"use client"

import React from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-transparent relative">
      <DashboardSidebar />
      <main className="flex-1 p-6 md:p-8 overflow-x-hidden relative z-10">
        <div className="max-w-6xl mx-auto h-full space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
