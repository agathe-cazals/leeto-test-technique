import { useQuery } from "@tanstack/react-query";
import GiftCardRequest from "../../requests/giftCardRequest/GiftCardRequest";
import { GiftCard } from "./type";

export const useGiftCardList = () =>
  useQuery<GiftCard[]>({
    queryFn: async () => {
      const response = await GiftCardRequest.GETGiftCardsList();
      return response;
    },
    queryKey: ["gift-cards"],
  });
