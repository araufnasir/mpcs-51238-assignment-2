import type { InputHTMLAttributes } from "react";
import { fieldClasses } from "./fields";

export function TextInput({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${fieldClasses} ${className}`} {...props} />;
}
