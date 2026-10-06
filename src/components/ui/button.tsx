import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-neutral-800 shadow-sm",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline:
          "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 shadow-none",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 shadow-sm",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2 text-sm font-semibold",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
