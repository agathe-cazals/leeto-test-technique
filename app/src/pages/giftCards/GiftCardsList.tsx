import { Link } from 'react-router-dom';

const items = [
  { id: '1', title: 'Article 1', description: 'Ceci est le premier article.' },
  { id: '2', title: 'Article 2', description: 'Voici un autre article.' },
  { id: '3', title: 'Article 3', description: 'Encore un exemple.' },
];

export const GiftCardsList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

