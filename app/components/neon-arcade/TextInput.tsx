import type { ComponentProps } from "react";
import { fieldClasses } from "./fields";

export function TextInput({ className = "", ...props }: ComponentProps<"input">) {
  return <input className={`${fieldClasses} ${className}`} {...props} />;
}
