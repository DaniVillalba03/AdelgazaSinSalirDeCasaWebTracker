import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DanceFitButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export const DanceFitButton = ({ 
  children, 
  variant = "primary", 
  size = "lg",
  className,
  onClick 
}: DanceFitButtonProps) => {
  const baseStyles = "font-bold-caps text-shadow transition-all duration-300 hover:scale-105";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg",
    outline: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Button>
  );
};