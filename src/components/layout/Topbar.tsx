"use client";

import { Bell, Search, Settings2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CURRENT_REVIEWER } from "@/lib/data";

export function Topbar() {
  const initials = CURRENT_REVIEWER.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-bone-200 bg-bone-50/85 px-4 backdrop-blur supports-[backdrop-filter]:bg-bone-50/70 sm:px-6">
      <div className="relative flex-1 max-w-2xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          aria-label="Search the mycology database"
          placeholder="Search species, papers, observations, reviewers…"
          className="pl-9 pr-12"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 select-none items-center rounded border border-bone-200 bg-bone-100 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
          ⌘ K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings2 className="h-4 w-4" />
        </Button>

        <div className="ml-2 flex items-center gap-3 rounded-full border border-bone-200 bg-bone-50 py-1 pl-1 pr-3 shadow-sm">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="hidden text-left leading-tight sm:block">
            <p className="text-sm font-medium text-forest-800">
              {CURRENT_REVIEWER.name}
            </p>
            <p className="text-[11px] text-muted-foreground">
              Reviewer · Reputation {CURRENT_REVIEWER.reputation}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
