import React from "react";

export type ButtonVariant = "primary" | "secondary" | "accent";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
