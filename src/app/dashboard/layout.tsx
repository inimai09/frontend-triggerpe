import { DashboardSidebar } from '@/components/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#E0F7FA]">
      <DashboardSidebar />
      <main className="flex-grow p-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}