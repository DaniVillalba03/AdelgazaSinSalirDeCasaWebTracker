import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface DanceFitButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "premium";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  icon?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export const DanceFitButton = ({ 
  children, 
  variant = "primary", 
  size = "lg",
  className,
  onClick,
  icon = false,
  loading = false,
  disabled = false
}: DanceFitButtonProps) => {
  const baseStyles = `font-bold-caps transition-all duration-300 
                     hover:scale-105 active:scale-95 
                     relative overflow-hidden group
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`;
  
  const variantStyles = {
    primary: `bg-gradient-to-r from-purple-600 to-purple-700 text-white 
              hover:from-purple-500 hover:to-purple-600 
              shadow-lg hover:shadow-purple-500/50 
              border-2 border-purple-400/30`,
    
    accent: `bg-gradient-to-r from-yellow-400 to-yellow-500 text-black 
             hover:from-yellow-300 hover:to-yellow-400 
             shadow-lg hover:shadow-yellow-500/50 
             border-2 border-yellow-300/50
             font-extrabold`,
    
    outline: `border-3 border-yellow-400 bg-transparent text-yellow-400 
              hover:bg-yellow-400 hover:text-black 
              shadow-lg hover:shadow-yellow-400/30`,
    
    premium: `bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 
              bg-size-200 animate-gradient text-white 
              shadow-2xl hover:shadow-purple-500/50 
              border-2 border-white/30
              font-extrabold tracking-wide`
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-12 py-5 md:py-6 text-xl md:text-2xl rounded-2xl"
  };

  return (
    <Button
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {/* Shine Effect on Hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                     transform -translate-x-full group-hover:translate-x-full 
                     transition-transform duration-700 ease-in-out"></span>
      
      {/* Content */}
      <span className="relative flex items-center justify-center gap-2 md:gap-3">
        {loading ? (
          <>
            <span className="animate-spin">⏳</span>
            <span>Procesando...</span>
          </>
        ) : (
          <>
            {variant === "premium" && (
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse-slow" fill="currentColor" />
            )}
            <span>{children}</span>
            {icon && (
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </>
        )}
      </span>
      
      {/* Pulse Effect for Premium */}
      {variant === "premium" && (
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-yellow-400 
                       opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
      )}
    </Button>
  );
};