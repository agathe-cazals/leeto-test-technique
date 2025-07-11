import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { GiftCard } from '../../queries/giftcards/type';
import { useGiftCardDetails } from '../../queries/giftcards/useGiftCardDetailsQuery';


export function GiftCardDetails(){
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGiftCardDetails(Number(id))

  
  if (isLoading) return <p className="p-6 text-blue-600">Chargement...</p>;
  if (error) return <p className="p-6 text-red-600">Erreur lors du chargement.</p>;


  if (!data) {
    return (
      <div className="p-6">
        <p className="text-red-600">Carte non trouvée.</p>
        <Link to="/" className="text-blue-600 underline">← Retour</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <Link to="/" className="text-blue-600 underline">← Retour à la liste</Link>
    </div>
  );
};

