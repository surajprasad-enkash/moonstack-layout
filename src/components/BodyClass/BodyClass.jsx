"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // Convert pathname to slug class
    // Example: /about-us → page-about-us
    let slug = pathname === "/" ? "home" : pathname.replace(/\//g, "");
    let className = `page-${slug}`;

    document.body.classList.add(className);

    // Cleanup on route change
    return () => {
      document.body.classList.remove(className);
    };
  }, [pathname]);

  return null; // This component doesn’t render anything
}
