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
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/mushrooms", label: "Mushrooms", icon: Sprout },
  { href: "/observations", label: "Observations", icon: Eye },
  { href: "/peer-review", label: "Peer Review", icon: ShieldCheck },
  { href: "/research-library", label: "Research Library", icon: BookText },
  { href: "/map", label: "Map", icon: Map },
  { href: "/countries", label: "Countries", icon: Globe2 },
  { href: "/toxic-lookalikes", label: "Toxic Lookalikes", icon: AlertTriangle },
  { href: "/dna-data", label: "DNA Data", icon: Dna },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-64 shrink-0 border-r border-bone-200 bg-forest-800 text-bone-100 lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-3 border-b border-forest-700/60 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-forest-600 ring-1 ring-forest-500">
          <Sprout className="h-5 w-5 text-bone-50" />
        </div>
        <div className="leading-tight">
          <p className="font-serif text-base font-semibold text-bone-50">
            Highland Mycota
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-mushroom-200">
            APAC Research DB
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-mushroom-200/70">
          Workspace
        </p>
        {NAV.map(({ href, label, icon: Icon }) => {
          const active =
            pathname === href || (pathname?.startsWith(href + "/") ?? false);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-forest-600 text-bone-50 shadow-sm"
                  : "text-mushroom-100 hover:bg-forest-700/70 hover:text-bone-50",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-forest-700/60 p-4 text-[11px] leading-relaxed text-mushroom-200/80">
        <p className="font-semibold uppercase tracking-[0.18em] text-mushroom-200">
          Safety
        </p>
        <p className="mt-1 text-mushroom-100/80">
          This database does not provide foraging or edibility advice. Consult a
          qualified mycologist before any field decision.
        </p>
      </div>
    </aside>
  );
}
