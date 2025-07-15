import { GiftCard } from "../../../../queries/giftcards/type";
import { Card } from "../../../common/card/Card";
import Family from "../../../../images/icons/family.svg";
import { useGiftCardBeneficiaries } from "../useGiftCardBeneficiaries.hook";
import { Text } from "../../../common/text/Text";

export type GiftCardBeneficiariesProps = {
  beneficiaries: GiftCard["beneficiaries"];
};

export const GiftCardBeneficiaries = ({
  beneficiaries,
}: GiftCardBeneficiariesProps) => {
  const { getBeneficiariesNamesFormatted, sortedBeneficiaries, imagePath } =
    useGiftCardBeneficiaries({
      beneficiaries,
    });
  return (
    <Card
      iconPath={Family}
      altIcon="family"
      title="Quel(s) ayant(s)-droit(s) validés bénéficient de cette cagnotte"
    >
      <div className="flex flex-row flex-wrap items-center gap-4">
        <div className="flex items-center">
          {sortedBeneficiaries.map((b, index) => (
            <img
              key={b.id}
              src={imagePath[b.type]}
              alt={b.firstName}
              className={`
                rounded-full
                border-1 md:border-2 border-white
                w-10 h-10 md:w-12 md:h-12
                ${index > 0 ? "-ml-2 md:-ml-3" : ""}
                z-${10 + (sortedBeneficiaries.length - index)}
              `}
            />
          ))}
        </div>

        <Text size="sm" color="secondary">
          {getBeneficiariesNamesFormatted()}
        </Text>
      </div>
    </Card>
  );
};
