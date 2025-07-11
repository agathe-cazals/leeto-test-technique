import { Link } from 'react-router-dom';
import { useGiftCardList } from '../../queries/giftcards/useGiftCardsListQuery';
import { Title } from '../../components/common/title/Title';
import {Text} from '../../components/common/text/Text'

export function GiftCardsList(){
      const { data, error, isLoading } = useGiftCardList()
      if (isLoading) return <Text color="secondary" className="p-6">Chargement...</Text>;
      if (error) return <Text color="error" className="p-6">Erreur lors du chargement.</Text>;
  
    return (
    <div className="grid p-10 gap-6">
      <Title color="primary" as="h1" weight='semibold' className="text-xl md:text-2xl mb-2">Cartes Cadeaux</Title>
      <div className="grid w-auto gap-2">
        {data?.map((item) => (
          <ul className="grid list-disc gap-2">
            <li>
            <Link
            key={item.id}
            to={`/gift-card/${item.id}`}
            className="w-fit"
          >
           <div className=''/>
            <Text size="medium">{item.name}</Text>
          </Link>
            </li>
          </ul>
          
        ))}
      </div>
    </div>
  );
};

