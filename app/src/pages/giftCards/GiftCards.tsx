import { Link } from "react-router-dom";
import { Title } from "../../components/common/title/Title";
import { Text } from "../../components/common/text/Text";
import { useGiftCardList } from "../../queries/giftcards/useGiftCardsListQuery";

export function GiftCardsList() {
  const { data, error, isLoading } = useGiftCardList();

  if (isLoading)
    return (
      <Text color="secondary" className="p-6">
        Chargement...
      </Text>
    );
  if (error)
    return (
      <Text color="error" className="p-6">
        Erreur lors du chargement.
      </Text>
    );

  return (
    <div className="grid p-10 gap-6">
      <Title
        color="primary"
        as="h1"
        weight="semibold"
        className="text-xl md:text-2xl mb-2"
      >
        Cartes Cadeaux
      </Title>
      <div className="grid w-auto gap-2">
        {data?.map((card) => (
          <ul className="grid list-disc gap-2" key={card.id}>
            <li>
              <Link
                key={card.id}
                to={`/gift_card/${card.id}`}
                className="w-fit"
                state={{ cardDetails: card }}
              >
                <Text className="text-sm md:text-base">{card.name}</Text>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
