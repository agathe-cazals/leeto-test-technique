import { useQuery } from '@tanstack/react-query';
import GiftCardRequest from '../../requests/giftCardRequest/GiftCardRequest';
import { GiftCard } from './type';


export const useGiftCardDetails = (
  cardId : number,
) =>
  useQuery<GiftCard>({
    enabled: !!cardId,
    queryFn: async () => {
      const response = await GiftCardRequest.GETGiftCardDetails(
        cardId,
      );
      return response;
    },
    queryKey: ['gift-card', cardId],
  });
