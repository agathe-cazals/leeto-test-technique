import { Meta, StoryFn } from "@storybook/react";
import { GiftCardTitle, GiftCardTitleProps } from "./GiftCardTitle";

export default {
  title: "Components/GiftCards/GiftCardHeader/GiftCardTitle",
  component: GiftCardTitle,
} as Meta<typeof GiftCardTitle>;

const Template: StoryFn<GiftCardTitleProps> = ({
  title,
}: GiftCardTitleProps) => <GiftCardTitle title={title} />;

export const Default = Template.bind({});
Default.args = {
  title: "Titre de la carte cadeau",
};
