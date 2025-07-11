export type GiftCard = {
    id: number;
    description: string;
    name: string;
    openingDate: string;
    closingDate: string;
    allowedAmount: number;
    consumedAmount: number;
    beneficiaries: {
      id: number;
      type: "user" | "companion" | "child";
      firstName: string;
      consumption: {
        allowedAmount: number;
        consumedAmount: number;
      };
    }[];
  };