import { Text } from "../../../common/text/Text";
import ProgressBar from "../../../common/progressBar/ProgressBar";
import { useGiftCardAmount } from "./useGiftCardAmount.hook";

export type GiftCardAmountProps = {
  allowedAmount: number;
  consumedAmount: number;
};
export const GiftCardAmount = ({
  allowedAmount,
  consumedAmount,
}: GiftCardAmountProps) => {
  const { label, sumAvailable } = useGiftCardAmount({
    allowedAmount,
    consumedAmount,
  });

  return (
    <div className="flex flex-row max-w-lg space-y-2 space-x-4 items-end">
      <div className="flex flex-col pr-2">
        <Text color="primary" size="xl" weight="semibold">
          {`${sumAvailable} €`}
        </Text>
        <Text color="primary" size="sm">
          {sumAvailable === 0 ? "disponible" : "disponibles"}
        </Text>
      </div>

      <ProgressBar
        total={allowedAmount}
        progress={consumedAmount}
        label={label}
      />
    </div>
  );
};
