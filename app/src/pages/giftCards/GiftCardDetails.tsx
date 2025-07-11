import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGiftCardDetails } from '../../queries/giftcards/useGiftCardDetailsQuery';
import { Title } from '../../components/common/title/Title';
import { Text } from '../../components/common/text/Text'
import { Navbar } from '../../components/common/navbar/Navbar';


export function GiftCardDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()
  const { data, error, isLoading } = useGiftCardDetails(Number(id))


  if (isLoading) return <Text color="secondary" className="p-6">Chargement...</Text>;
  if (error) return <Text color="error" className="p-6">Erreur lors du chargement.</Text>;


  if (!data) {
    return (
      <div className="p-6">
        <p className="text-red-600">Carte non trouvée.</p>
        <Link to="/" className="text-blue-600 underline">← Retour</Link>
      </div>
    );
  }

  return (
    <div className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <Navbar redirectionTo="/" redirectionText="Retour vers les cartes cadeaux" />
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
    </div>
  );
};

