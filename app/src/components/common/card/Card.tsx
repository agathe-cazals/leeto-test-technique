import React from "react";
import classNames from 'classnames';

type TextProps = {
    children: React.ReactNode;
    size?: "xs" | "sm" | "medium" | "lg" | "xl";
    color?: "primary" | "secondary" | "muted" | "error";
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
    primary: "text-gray-900 dark:text-white",
    secondary: "text-gray-600 dark:text-white",
    muted: "text-gray-400",
    error: "text-red-600",
    purple: "text-purple-500",
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

export const Card: React.FC<TextProps> = ({
    children,
    size = "medium",
    color = "primary",
    weight = "normal",
    align = "left",
    className,
}) => {

    return (
        <p
            className={classNames(
                sizeMap[size],
                colorMap[color],
                weightMap[weight],
                alignMap[align],
                className
            )}
        >
            {children}
        </p>
    );
};
