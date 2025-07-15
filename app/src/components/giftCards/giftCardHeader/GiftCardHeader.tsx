import { GiftCard } from "../../../queries/giftcards/type";
import { GiftCardTitle } from "./giftCardTitle/GiftCardTitle";
import { GiftCardDate } from "./giftCardDate/GiftCardDate";
import { GiftCardAmount } from "./giftCardAmount/GiftCardAmount";

export const GiftCardHeader = ({
  giftCardInformations,
}: {
  giftCardInformations: GiftCard;
}) => {
  const { name, openingDate, closingDate, allowedAmount, consumedAmount } =
    giftCardInformations;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <GiftCardTitle title={name} />
        {openingDate && closingDate && (
          <GiftCardDate openingDate={openingDate} closingDate={closingDate} />
        )}
      </div>

      <GiftCardAmount
        allowedAmount={allowedAmount}
        consumedAmount={consumedAmount}
      />
    </div>
  );
};
