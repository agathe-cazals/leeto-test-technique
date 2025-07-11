import { Link } from 'react-router-dom';
import { useGiftCardList } from '../../queries/giftcards/useGiftCardsListQuery';

export function GiftCardsList(){
      const { data, error, isLoading } = useGiftCardList()
      if (isLoading) return <p className="p-6 text-blue-600">Chargement...</p>;
      if (error) return <p className="p-6 text-red-600">Erreur lors du chargement.</p>;
  
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item) => (
          <Link
            key={item.id}
            to={`/gift-card/${item.id}`}
            className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

