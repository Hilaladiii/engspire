import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-lightningBlue disable:bg-lightningBlue/50",
  secondary: "bg-white border border-lightningBlue text-black",
};

export default function Button({
  children,
  className,
  variant = "primary",
  fullWidth,
  ...props
}: IButton) {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 font-semibold text-white",
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
