// components/NProgressNavigation.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

export default function NProgressLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 400); // 400ms is smooth; tweak if needed

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
