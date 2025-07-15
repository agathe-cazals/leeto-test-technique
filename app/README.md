# Leeto - Front-End Technical Test

Ce projet est une application React permettant de consulter des cartes cadeaux, réalisée dans le cadre du test technique pour Leeto.

## Fonctionnalités principales

- Liste des cartes cadeaux disponibles
- Détail d'une carte cadeau (titre, description, dates, bénéficiaires, état de consommation)
- Composants réutilisables (ProgressBar, Card, Text, etc.)
- Tests unitaires avec Testing Library et Jest
- Storybook pour la documentation des composants

## Stack technique

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query)
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)

## Installation

1. Installer les dépendances :

   ```bash
   yarn install
   # ou
   npm install
   ```

2. Démarrer le serveur d'API mock (à la racine du projet) :

   ```bash
   yarn start
   ```

   L'API sera disponible sur http://localhost:3001

3. Démarrer l'application front-end (dans le dossier `app/`) :
   ```bash
   cd app
   yarn start
   # ou
   npm start
   ```
   L'application sera disponible sur http://localhost:3000

## Scripts disponibles

- `yarn start` : Lance l'application en mode développement
- `yarn build` : Build l'application pour la production
- `yarn test` : Lance les tests unitaires en mode interactif
- `yarn storybook` : Démarre Storybook pour visualiser les composants
- `yarn build-storybook` : Build la documentation Storybook

## Structure du dossier `app/`

- `src/components/` : Composants réutilisables (common) et spécifiques (giftCards)
- `src/pages/` : Pages principales de l'application
- `src/queries/` : Hooks de requêtes API avec TanStack Query
- `src/requests/` : Fonctions d'accès à l'API
- `src/helpers/` : Fonctions utilitaires (formatage, calculs, etc.)
- `src/stories/` : Composants et assets pour Storybook

## Lancer les tests

```bash
yarn test
# ou
npm test
```

## Lancer Storybook

```bash
yarn storybook
# ou
npm run storybook
```

Projet réalisé avec [Create React App](https://github.com/facebook/create-react-app).
