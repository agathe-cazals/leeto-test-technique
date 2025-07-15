import { useMemo, useCallback } from "react";
import { GiftCard } from "../../../queries/giftcards/type";
import User from "../../../images/icons/man_raising_hand.png";
import Companion from "../../../images/icons/blue_heart.png";
import Baby from "../../../images/icons/baby.png";

type useGiftCardBeneficiariesProps = {
  beneficiaries: GiftCard["beneficiaries"];
};

type Beneficiary = GiftCard["beneficiaries"][number];

export function useGiftCardBeneficiaries({
  beneficiaries,
}: useGiftCardBeneficiariesProps) {
  const getBeneficiariesNamesFormatted = useCallback(() => {
    const names = beneficiaries.map((beneficiarie: Beneficiary) =>
      beneficiarie.type === "user" ? "Vous-même" : beneficiarie.firstName,
    );
    if (names.length === 1) return `${names[0]}`;
    if (names.length === 2) return `${names[0]} et ${names[1]} sont éligibles`;

    const allExceptLast = names.slice(0, -1).join(", ");
    const last = names[names.length - 1];

    return `${allExceptLast}, et ${last} sont éligibles`;
  }, [beneficiaries]);

  const imagePath: Record<"user" | "companion" | "child", string> = {
    user: User,
    companion: Companion,
    child: Baby,
  };

  const orderedBeneficiaries = useMemo(
    () => ["user", "companion", "child"],
    [],
  );

  const sortedBeneficiaries = useMemo(
    () =>
      orderedBeneficiaries.flatMap((type) =>
        beneficiaries.filter((b) => b.type === type),
      ),
    [beneficiaries, orderedBeneficiaries],
  );

  const getBeneficiariesConsumptionLabelFormatted = useCallback(
    (beneficiarie: Beneficiary) => {
      return `${beneficiarie.type === "user" ? "Vous-même" : beneficiarie.firstName} - ${Math.round(beneficiarie?.consumption?.consumedAmount)} € / ${Math.round(beneficiarie?.consumption?.allowedAmount)} €`;
    },
    [],
  );

  return {
    getBeneficiariesNamesFormatted,
    getBeneficiariesConsumptionLabelFormatted,
    sortedBeneficiaries,
    imagePath,
  };
}
