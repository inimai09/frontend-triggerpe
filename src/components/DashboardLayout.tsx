
"use client"

import React from 'react';
import { DashboardSidebar } from '@/components/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Sidebar with fixed stable width to prevent shifting */}
      <DashboardSidebar />
      <main className="flex-1 min-w-0 p-10 overflow-x-hidden relative z-10">
        <div className="max-w-7xl mx-auto h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
