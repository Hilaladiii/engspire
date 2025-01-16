import { InputHTMLAttributes } from "react";

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function CheckBox({ label, id, ...props }: ICheckBox) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        {...props}
        className="size-5 border border-black"
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium">
        {label}
      </label>
    </div>
  );
}
