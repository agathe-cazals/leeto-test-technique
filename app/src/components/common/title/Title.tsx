import React from "react";
import classNames from "classnames";

export type TitleProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "secondary" | "muted" | "error";
  size?: "xs" | "sm" | "medium" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  className?: string;
};

const colorMap: Record<NonNullable<TitleProps["color"]>, string> = {
  primary: "text-gray-900",
  secondary: "text-gray-600",
  muted: "text-gray-500",
  error: "text-red-600",
};

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  medium: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const weightMap: Record<NonNullable<TitleProps["weight"]>, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignMap: Record<NonNullable<TitleProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const Title = ({
  children,
  as = "h1",
  color = "primary",
  size = "xl",
  align = "left",
  weight = "semibold",
  className = "",
}: TitleProps) => {
  const Component = as;
  const finalClassName = classNames(
    colorMap[color],
    sizeMap[size],
    weightMap[weight],
    alignMap[align],
    className,
  );

  return <Component className={finalClassName}>{children}</Component>;
};
