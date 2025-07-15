import { Text } from "../../../components/common/text/Text";
import { Navbar } from "../../../components/common/navbar/Navbar";
import { GiftCardHeader } from "../../../components/giftCards/giftCardHeader/GiftCardHeader";
import { GiftCardBeneficiaries } from "../../../components/giftCards/giftCardBeneficiaries/giftCardBeneficiariesName/GiftCardBeneficiariesName";
import { GiftCardBeneficiariesConsumption } from "../../../components/giftCards/giftCardBeneficiaries/giftCardBeneficiariesConsumption/GiftCardBeneficiariesConsumption";
import { useGiftCardDetailsHook } from "./useGiftCardDetails.hook";

export function GiftCardDetails() {
  const { cardInformations, error, isLoading } = useGiftCardDetailsHook();

  if (isLoading)
    return (
      <Text color="secondary" className="p-6">
        Chargement...
      </Text>
    );
  if (error)
    return (
      <Text color="error" className="p-6">
        Erreur lors du chargement
      </Text>
    );

  return (
    <div className="block p-2 bg-white">
      <Navbar
        redirectionTo="/"
        redirectionText="Retour vers les cartes cadeaux"
      />
      {cardInformations ? (
        <div className="flex flex-col gap-2 mx-auto p-4 space-y-4">
          <GiftCardHeader giftCardInformations={cardInformations} />

          <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-xl">
            <Text size="sm" weight="semibold">
              Description de la carte cadeau
            </Text>
            <Text size="medium">{cardInformations?.description}</Text>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <GiftCardBeneficiaries
              beneficiaries={cardInformations?.beneficiaries}
            />
            <GiftCardBeneficiariesConsumption
              beneficiaries={cardInformations?.beneficiaries}
            />
          </div>
        </div>
      ) : (
        <Text color="error" className="p-6">
          Aucune carte trouvée
        </Text>
      )}
    </div>
  );
}
