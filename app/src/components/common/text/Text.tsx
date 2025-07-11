import React from "react";
import classNames from 'classnames';

type TextProps = {
    children: React.ReactNode;
    as?: "p" | "span";
    size?: "xs" | "sm" | "medium" | "lg" | "xl";
    color?: "primary" | "secondary" | "muted" | "error" | "purple";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    align?: "left" | "center" | "right";
    className?: string;
};

const sizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    medium: "text-base",
    lg: "text-lg",
    xl: "text-xl",
};

const colorMap = {
    primary: "text-slate-900 dark:text-white",
    secondary: "text-slate-600 dark:text-white",
    muted: "text-slate-400",
    error: "text-red-600",
    purple: "text-indigo-600",
};

const weightMap = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

export const Text = ({
    children,
    as = "p",
    size = "medium",
    color = "primary",
    weight = "normal",
    align = "left",
    className,
}: TextProps) => {
    const Component = as;
    const finalClassName = classNames(
        sizeMap[size],
        colorMap[color],
        weightMap[weight],
        alignMap[align],
        className
    )

    return <Component className={finalClassName}>{children}</Component>;

};
