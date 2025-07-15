import { useMemo } from "react";

type useGiftCardAmountProps = {
  consumedAmount: number;
  allowedAmount: number;
};

export function useGiftCardAmount({
  consumedAmount,
  allowedAmount,
}: useGiftCardAmountProps) {
  const label = useMemo(
    () =>
      `${Math.round(consumedAmount)} € dépensés / ${Math.round(allowedAmount)} €`,
    [consumedAmount, allowedAmount],
  );

  const sumAvailable = useMemo(() => {
    return Math.round(allowedAmount) - Math.round(consumedAmount);
  }, [allowedAmount, consumedAmount]);

  return {
    label,
    sumAvailable,
  };
}
