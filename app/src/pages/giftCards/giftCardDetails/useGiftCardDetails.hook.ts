import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGiftCardDetails } from "../../../queries/giftcards/useGiftCardDetailsQuery";
import { GiftCard } from "../../../queries/giftcards/type";

export function useGiftCardDetailsHook() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { cardDetails } = location.state;
  const { data, error, isLoading } = useGiftCardDetails({
    cardId: Number(id),
    shouldFetch: !cardDetails,
  });

  const [cardInformations, setCardInformations] = useState<GiftCard>();

  useEffect(() => {
    if (cardDetails) {
      setCardInformations(cardDetails);
    }
    if (!cardDetails && data) {
      setCardInformations(data);
    }
  }, [cardDetails, data]);

  return {
    cardInformations,
    isLoading,
    error,
  };
}
