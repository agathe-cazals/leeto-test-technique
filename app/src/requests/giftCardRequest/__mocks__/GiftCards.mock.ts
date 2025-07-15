import { GiftCard } from "../../../queries/giftcards/type";

export const mockGiftCards: GiftCard[] = [
  {
    id: 1,
    description: "Test card",
    name: "Card 1",
    openingDate: "2024-06-01",
    closingDate: "2024-06-10",
    allowedAmount: 100,
    consumedAmount: 50,
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Alice",
        consumption: {
          allowedAmount: 100,
          consumedAmount: 50,
        },
      },
    ],
  },
  {
    id: 2,
    description: "Test card 2",
    name: "Card 2",
    openingDate: "2024-07-01",
    closingDate: "2024-07-10",
    allowedAmount: 50,
    consumedAmount: 30,
    beneficiaries: [
      {
        id: 1,
        type: "user",
        firstName: "Alix",
        consumption: {
          allowedAmount: 50,
          consumedAmount: 30,
        },
      },
    ],
  },
];
