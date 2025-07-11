import { useParams, Link } from 'react-router-dom';

const items = [
  { id: '1', title: 'Article 1', description: 'Ceci est le premier article.' },
  { id: '2', title: 'Article 2', description: 'Voici un autre article.' },
  { id: '3', title: 'Article 3', description: 'Encore un exemple.' },
];

export const GiftCardDetails = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="p-6">
        <p className="text-red-600">Article non trouvé.</p>
        <Link to="/" className="text-blue-600 underline">← Retour</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
      <p className="text-gray-700 mb-4">{item.description}</p>
      <Link to="/" className="text-blue-600 underline">← Retour à la liste</Link>
    </div>
  );
};

