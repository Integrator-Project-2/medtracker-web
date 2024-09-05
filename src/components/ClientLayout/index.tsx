'use client';

import { usePathname } from 'next/navigation';
import { Header } from '../Header';

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showHeader = !['/login', '/register'].includes(pathname);

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
    </>
  );
}
