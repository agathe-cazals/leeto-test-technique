import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Common/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    as: { control: "select", options: ["p", "span"] },
    size: {
      control: "select",
      options: ["xs", "sm", "medium", "lg", "xl", "2xl"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "muted", "error", "purple"],
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    align: { control: "select", options: ["left", "center", "right"] },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Texte par défaut",
};
