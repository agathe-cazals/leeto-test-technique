import React from "react";
import classNames from 'classnames';

type TitleProps = {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    color?: "primary" | "secondary" | "muted" | "error";
    align?: "left" | "center" | "right";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    className?: string;
};

const colorMap: Record<NonNullable<TitleProps["color"]>, string> = {
    primary: "text-slate-900",
    secondary: "text-slate-600",
    muted: "text-slate-400",
    error: "text-red-600",
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
    align = "left",
    weight = "semibold",
    className = "",
}: TitleProps) => {
    const Component = as;
    const finalClassName = classNames(
        colorMap[color],
        weightMap[weight],
        alignMap[align],
        className
    )


    return <Component className={finalClassName}>{children}</Component>;
};