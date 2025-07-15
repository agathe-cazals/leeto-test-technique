import { GiftCard } from "../../../../queries/giftcards/type";
import { Card } from "../../../common/card/Card";
import { ProgressBar } from "../../../common/progressBar/ProgressBar";
import Consumption from "../../../../images/icons/conso.svg";
import { useGiftCardBeneficiaries } from "../useGiftCardBeneficiaries.hook";

export type GiftCardBeneficiariesConsumptionProps = {
  beneficiaries: GiftCard["beneficiaries"];
};

export const GiftCardBeneficiariesConsumption = ({
  beneficiaries,
}: GiftCardBeneficiariesConsumptionProps) => {
  const {
    sortedBeneficiaries,
    imagePath,
    getBeneficiariesConsumptionLabelFormatted,
  } = useGiftCardBeneficiaries({
    beneficiaries,
  });

  return (
    <Card
      iconPath={Consumption}
      altIcon="beneficiaries's consumption"
      title="Suivi de consommation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        {sortedBeneficiaries.map((b, index) => (
          <div
            key={index}
            className={`flex flex-row gap-2 items-center ${index === 0 ? "flex flex-row md:col-span-2" : ""}`}
          >
            <img
              key={b.id}
              src={imagePath[b.type]}
              alt={b.firstName}
              className="  w-10 h-10 md:w-12 md:h-12"
            />

            <ProgressBar
              total={b?.consumption?.allowedAmount}
              progress={b?.consumption?.consumedAmount}
              label={getBeneficiariesConsumptionLabelFormatted(b)}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};
