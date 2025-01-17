import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface IInput<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors?: FieldError;
  label: string;
  icon?: React.ReactElement;
  onClickIcon?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  fullWidth?: boolean;
}

const variants = {
  primary: "",
  secondary: "",
};

export default function Input<T extends FieldValues>({
  register,
  name,
  errors,
  label,
  icon,
  variant = "primary",
  className,
  onClickIcon,
  fullWidth = false,
  ...props
}: IInput<T>) {
  return (
    <div className="relative">
      <label htmlFor={name} className="absolute -top-3 left-4 bg-white px-1">
        {label}
      </label>
      <input
        id={name}
        {...register(name)}
        {...props}
        className={cn(
          "rounded-md border border-outlineGrey p-4 placeholder:text-outlineGrey focus:border-darkGrey focus:outline-none",
          fullWidth && "w-full",
          variants[variant],
          className,
        )}
      />
      <div
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        onClick={onClickIcon}
      >
        {icon}
      </div>
      {errors && <span className="text-xs text-red">{errors.message}</span>}
    </div>
  );
}
