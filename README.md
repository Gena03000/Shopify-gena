# Hydrogen template: Skeleton

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 18.0.0 or higher

```bash
npm create @shopify/hydrogen@latest
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Setup for using Customer Account API (`/account` section)

# 🚇 La ligne 25 – Shopify Hydrogen Storefront

Bienvenue sur le dépôt du site *La ligne 25*, une boutique en ligne pensée comme une ligne de métro imaginaire, où chaque station est une rencontre, chaque produit une évocation.

---

## 🧶 L’univers de la marque

> “Chaque station a son récit. La vôtre commence ici.”

*La ligne 25* est une ligne textile poétique fondée par Gena Campbell. À rebours des clichés touristiques, elle explore les marges parisiennes à travers des sacs et accessoires aux noms évocateurs : Bagatelle, Chardon-Lagache, Abbesses, Saint-Georges…

---

## 🛠️ Technologies utilisées

- [Hydrogen](https://shopify.dev/docs/custom-storefronts/hydrogen)
- [Remix](https://remix.run/)
- Vite
- TypeScript
- Microservice SEO (Blackbird Tags)
- Hébergement Shopify / Render

---

## 🖼️ Fonctions clés

- Génération dynamique des balises meta (OG/Twitter) pour le SEO
- Intégration d’un client `SEOServiceClient.ts` vers `blackbird-tags.onrender.com`
- Design inspiré du métro parisien : lignes, typographie, signalétique
- Structure modulaire (routes Remix, composants réutilisables)
- Déploiement rapide via Oxygen / Render

---

## 📦 Installation

```bash
git clone https://github.com/Gena03000/la-ligne-25-hydrogen.git
cd la-ligne-25-hydrogen
npm install
npm run dev

