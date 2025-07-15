import { Meta, StoryFn } from "@storybook/react";
import { GiftCardAmount, GiftCardAmountProps } from "./GiftCardAmount";

export default {
  title: "Components/GiftCards/GiftCardHeader/GiftCardAmount",
  component: GiftCardAmount,
} as Meta<typeof GiftCardAmount>;

const Template: StoryFn<GiftCardAmountProps> = ({
  allowedAmount,
  consumedAmount,
}: GiftCardAmountProps) => (
  <GiftCardAmount
    allowedAmount={allowedAmount}
    consumedAmount={consumedAmount}
  />
);

export const Default = Template.bind({});
Default.args = {
  allowedAmount: 100,
  consumedAmount: 50,
};
