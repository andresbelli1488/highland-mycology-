"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sprout,
  Eye,
  ShieldCheck,
  BookText,
  Map,
  Globe2,
  AlertTriangle,
  Dna,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/mushrooms", label: "Species", icon: Sprout },
  { href: "/observations", label: "Field", icon: Eye },
  { href: "/peer-review", label: "Review", icon: ShieldCheck },
  { href: "/research-library", label: "Library", icon: BookText },
  { href: "/map", label: "Map", icon: Map },
  { href: "/countries", label: "Countries", icon: Globe2 },
  { href: "/toxic-lookalikes", label: "Toxic", icon: AlertTriangle },
  { href: "/dna-data", label: "DNA", icon: Dna },
];

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="sticky bottom-0 z-30 border-t border-bone-200 bg-bone-50/95 px-2 py-2 backdrop-blur lg:hidden">
      <ul className="flex items-center gap-1 overflow-x-auto">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href} className="shrink-0">
              <Link
                href={href}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-md px-3 py-1.5 text-[10px] font-medium",
                  active
                    ? "bg-forest-600 text-bone-50"
                    : "text-forest-700 hover:bg-bone-200",
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
