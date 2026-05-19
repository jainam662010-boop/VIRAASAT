import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-label-caps text-label-caps transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary shadow hover:bg-primary/90 hover:scale-105",
        destructive:
          "bg-error text-on-error shadow-sm hover:bg-error/90",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary",
        secondary:
          "bg-secondary text-on-secondary shadow-sm hover:bg-secondary/80",
        ghost:
          "hover:bg-surface-container text-on-surface hover:text-primary",
        link:
          "text-primary underline-offset-4 hover:underline",
        gold:
          "bg-gradient-gold text-on-primary shadow-lg hover:shadow-xl hover:scale-105 gold-shimmer",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-[10px]",
        lg: "h-12 px-8",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
