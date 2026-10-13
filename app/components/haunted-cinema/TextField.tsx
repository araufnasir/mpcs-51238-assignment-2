import { useId, type InputHTMLAttributes } from "react";
import { TextInput } from "./TextInput";
import { type as t } from "./type";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string };

/** A labelled text input. An error is announced, marked with "Error:" and a heavier border, never by color alone. */
export function TextField({ label, hint, error, id, ...props }: Props) {
  const generated = useId();
  const inputId = id ?? generated;
  const noteId = `${inputId}-note`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className={t.label}>{label}</label>
      <TextInput id={inputId} aria-invalid={error ? true : undefined} aria-describedby={error || hint ? noteId : undefined} {...props} />
      {error ? (
        <p id={noteId} role="alert" className={`${t.bodySmall} font-semibold`}>Error: {error}</p>
      ) : hint ? (
        <p id={noteId} className={`${t.bodySmall} text-hc-muted`}>{hint}</p>
      ) : null}
    </div>
  );
}
