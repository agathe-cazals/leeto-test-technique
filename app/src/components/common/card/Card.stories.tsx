import { Meta, StoryFn } from "@storybook/react";
import Family from "../../../images/icons/family.svg";

import { Card, CardProps } from "./Card";

export default {
  title: "Components/Common/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = ({
  iconPath,
  altIcon,
  title,
  children,
}: CardProps) => (
  <Card iconPath={iconPath} altIcon={altIcon} title={title}>
    {children}
  </Card>
);

export const CardDefault = Template.bind({});
CardDefault.args = {
  iconPath: Family,
  altIcon: "Test storybook",
  title: "I'm a title",
  children: "I'm a description",
};
