import { Meta, StoryFn } from "@storybook/react";
import { Title, TitleProps } from "./Title";

export default {
  title: "Components/Common/Title",
  component: Title,
  argTypes: {
    children: { control: "text" },
    as: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "muted", "error"],
    },
    size: { control: "select", options: ["xs", "sm", "medium", "lg", "xl"] },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    align: { control: "select", options: ["left", "center", "right"] },
  },
} as Meta<typeof Title>;

const Template: StoryFn<any> = ({
  children,
  as,
  color,
  size,
  align,
  weight,
  className,
}: TitleProps) => (
  <Title
    as={as}
    color={color}
    size={size}
    align={align}
    weight={weight}
    className={className}
  >
    {children}
  </Title>
);

export const Default = Template.bind({});
Default.args = {
  children: "Titre par défaut",
};
