import { useQuery } from "@tanstack/react-query";
import GiftCardRequest from "../../requests/giftCardRequest/GiftCardRequest";
import { GiftCard } from "./type";

export const useGiftCardDetails = ({
  cardId,
  shouldFetch,
}: {
  cardId: number;
  shouldFetch: boolean;
}) =>
  useQuery<GiftCard>({
    enabled: !!cardId && !!shouldFetch,
    queryFn: async () => {
      const response = await GiftCardRequest.GETGiftCardDetails(cardId);
      return response;
    },
    queryKey: ["gift-card", cardId],
  });
