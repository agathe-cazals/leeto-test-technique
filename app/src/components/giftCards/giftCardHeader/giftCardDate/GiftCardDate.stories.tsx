import { Meta, StoryFn } from "@storybook/react";
import { GiftCardDate, GiftCardDateProps } from "./GiftCardDate";

export default {
  title: "Components/GiftCards/GiftCardHeader/GiftCardDate",
  component: GiftCardDate,
} as Meta<typeof GiftCardDate>;

const Template: StoryFn<GiftCardDateProps> = ({
  openingDate,
  closingDate,
}: GiftCardDateProps) => (
  <GiftCardDate openingDate={openingDate} closingDate={closingDate} />
);

export const Default = Template.bind({});
Default.args = {
  openingDate: "2025-01-01",
  closingDate: "2025-12-31",
};
