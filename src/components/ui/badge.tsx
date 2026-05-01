import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-forest-600 text-bone-50",
        secondary:
          "border-transparent bg-mushroom-100 text-clay-300",
        outline: "border-bone-200 text-forest-800",
        success:
          "border-transparent bg-forest-100 text-forest-700",
        warning:
          "border-transparent bg-mushroom-100 text-clay-400",
        destructive:
          "border-transparent bg-toxic-100 text-toxic-400",
        info:
          "border-transparent bg-alpine-100 text-alpine-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
