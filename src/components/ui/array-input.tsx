"use client";

import { useId, useState, forwardRef, type KeyboardEventHandler } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { X } from "lucide-react";
import { Button } from "./button";
import { useFormField } from "./form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { type FieldError } from "react-hook-form";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  value?: string[];
  onChange?: (p: string[]) => void;
};

const ArrayInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChange, value: controlledValues, ...props }, ref) => {
    const [uncontrolledValues, setUncontrolledValues] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");
    const fieldState = useFormField();
    const errors = Array.isArray(fieldState.error)
      ? (fieldState.error as Record<string, FieldError>[])
      : [];
    const values = controlledValues ?? uncontrolledValues;

    const handleAddValue = (v: string) => {
      if (onChange) {
        onChange([...values, v]);
      } else {
        setUncontrolledValues((prev) => [...prev, v]);
      }
    };

    const handleRemoveValue = (i: number) => {
      if (onChange) {
        onChange(values.filter((v, idx) => idx !== i));
      } else {
        setUncontrolledValues((prev) => prev.filter((_v, idx) => idx !== i));
      }
    };

    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if (!inputValue.length) return;
      handleAddValue(inputValue);
      setInputValue("");
    };

    return (
      <div>
        <input
          type={type}
          className={cn(
            "pointer-events-auto flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          onInput={(e) => e.preventDefault()}
          {...props}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <InputValues
            values={values}
            errors={errors}
            onRemove={handleRemoveValue}
          />
        </div>
      </div>
    );
  },
);

interface InputValuesProps {
  values: string[];
  errors: Record<string, FieldError>[];
  onRemove: (idx: number) => void;
}

interface InputValue {
  value: string;
  hasError?: boolean;
  idx: number;
  onRemove: (idx: number) => void;
}

const InputValue = forwardRef<HTMLDivElement, InputValue>(
  ({ value, hasError = false, idx, onRemove, ...rest }, ref) => {
    return (
      <Badge
        className={cn("hover:bg-priamry flex select-none gap-2", {
          "border-2 border-destructive": hasError,
        })}
        ref={ref}
        {...rest}
      >
        <span>{value}</span>
        <Button
          className="h-fit rounded-full bg-secondary/80 p-0 hover:bg-secondary"
          onClick={() => onRemove(idx)}
          type="button"
        >
          <X className="h-4 w-4 text-foreground" />
        </Button>
      </Badge>
    );
  },
);

InputValue.displayName = "InputValue";

const InputValues = ({ values, errors, onRemove }: InputValuesProps) => {
  const id = useId();
  return values.map((v, i) => {
    const hasError = Boolean(errors?.[i]);
    if (!hasError) {
      return (
        <InputValue
          key={`${id}-${i}`}
          value={v}
          idx={i}
          onRemove={onRemove}
          hasError={false}
        />
      );
    }
    return (
      <TooltipProvider key={`${id}-${i}`}>
        <Tooltip>
          <TooltipTrigger asChild>
            <InputValue
              value={v}
              idx={i}
              onRemove={onRemove}
              hasError={hasError}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{Object.values(errors?.[i] ?? {})[0]?.message ?? ""}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  });
};

ArrayInput.displayName = "ArrayInput";

export { ArrayInput };
