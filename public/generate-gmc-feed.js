// ✅ Script 100 % CommonJS
const fs = require('fs');
const path = require('path');

const products = [
  {
    handle: 'saint-georges',
    title: 'Saint-Georges',
    matière: 'faux cuir',
    style: 'urbain',
    collection: 'Sacs à main',
    prix: '53.84',
    image: 'https://genacampbell.shop/images/saint-georges.jpg',
  },
  {
    handle: 'bagatelle',
    title: 'Bagatelle',
    matière: 'toile recyclée',
    style: 'vegan',
    collection: 'Accessoires Femme',
    prix: '31.18',
    image: 'https://genacampbell.shop/images/bagatelle.jpg',
  },
];

const feed = products.map((p) => ({
  title: `Sac ${p.title} – Élégant, ${p.style}`,
  description: `Découvrez notre modèle ${p.title}, inspiré de la station éponyme. Un accessoire ${p.style} pensé pour les âmes urbaines. Confectionné en ${p.matière}, idéal pour vos voyages en ville. Livraison offerte.`,
  link: `https://genacampbell.shop/products/${p.handle}`,
  image_link: p.image,
  availability: 'in stock',
  price: `${p.prix} EUR`,
  brand: 'La ligne 25',
  google_product_category: 'Fashion > Bags > Handbags',
  custom_label_0: p.collection,
  custom_label_1: p.style,
  custom_label_2: 'Paris Métro Chic',
}));

const outputPath = path.join(__dirname, 'gmc-feed.json');
fs.writeFileSync(outputPath, JSON.stringify(feed, null, 2));
console.log('✅ Fichier GMC généré avec succès !');

