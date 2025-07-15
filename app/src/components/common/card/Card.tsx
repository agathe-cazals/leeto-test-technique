import { Text } from "../text/Text";
import React from "react";

export type CardProps = {
  iconPath: string;
  altIcon: string;
  title: string;
  children: React.ReactNode;
};

export const Card = ({ iconPath, title, altIcon, children }: CardProps) => {
  return (
    <div className="flex flex-col flex-1 gap-4 rounded-xl border border-gray-300 p-4">
      <img src={iconPath} alt={altIcon} className="w-10 h-10 md:w-16 md:h-16" />
      <Text weight="semibold" size="medium">
        {title}
      </Text>
      {children}
    </div>
  );
};
