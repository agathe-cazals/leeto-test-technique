import { Meta, StoryFn } from "@storybook/react";
import {
  GiftCardBeneficiariesConsumption,
  GiftCardBeneficiariesConsumptionProps,
} from "./GiftCardBeneficiariesConsumption";

export default {
  title:
    "Components/GiftCards/GiftCardBeneficiaries/GiftCardBeneficiariesConsumption",
  component: GiftCardBeneficiariesConsumption,
} as Meta<typeof GiftCardBeneficiariesConsumption>;

const Template: StoryFn<GiftCardBeneficiariesConsumptionProps> = ({
  beneficiaries,
}: GiftCardBeneficiariesConsumptionProps) => (
  <GiftCardBeneficiariesConsumption beneficiaries={beneficiaries} />
);

export const Default = Template.bind({});
Default.args = {
  beneficiaries: [
    {
      id: 1,
      type: "user",
      firstName: "Alice",
      consumption: {
        allowedAmount: 100,
        consumedAmount: 20,
      },
    },
    {
      id: 2,
      type: "companion",
      firstName: "Alex",
      consumption: {
        allowedAmount: 100,
        consumedAmount: 0,
      },
    },
    {
      id: 3,
      type: "child",
      firstName: "Léon",
      consumption: {
        allowedAmount: 20,
        consumedAmount: 20,
      },
    },
  ],
};
