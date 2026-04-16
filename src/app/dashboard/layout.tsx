
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is redundant because the individual pages use DashboardLayout component
  // which already includes the Sidebar. We return just children to avoid double navbars.
  return <>{children}</>;
}
