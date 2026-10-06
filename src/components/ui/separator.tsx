import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { text?: string }
>(({ className, text, ...props }, ref) => {
  if (text) {
    return (
      <div className={cn("relative my-6 flex items-center justify-center", className)} ref={ref} {...props}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200" />
        </div>
        <div className="relative bg-white px-3 text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("h-[1px] w-full bg-neutral-200 my-4", className)}
      {...props}
    />
  );
});
Separator.displayName = "Separator";

export { Separator };
