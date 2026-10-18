# Atlas des cultures

PWA statique : 13 escales, 39 questions, passeport et progression locale.

## Recettes (v3.1.0)

Quatre recettes accessibles depuis les fiches et la bibliothèque. Impression A4 via « Imprimer la recette » ; l’enregistrement PDF utilise la boîte d’impression du navigateur. Les références et adaptations figurent dans chaque recette. Les recettes sont également disponibles hors connexion après installation du cache.

Pour ajouter une recette, ajouter dans `recipes.js` une entrée avec l’identifiant d’une escale existante et les mêmes champs que les autres recettes. Les boutons apparaissent automatiquement. À chaque publication, synchroniser `APP_VERSION` dans `index.html`, `version.json` et `CACHE_VERSION` dans `sw.js`. Ne pas modifier la clé de progression locale.

## Vérification

Installer Playwright et un navigateur Edge, puis lancer `node tests/recipes.cjs` (Python disponible dans PATH). `PLAYWRIGHT_MODULE` permet de préciser le chemin du module Playwright. Le test utilise un serveur local sur le port 8766 et produit des captures et PDF dans `tests/`.

Vérifications : 13 escales / 39 questions, navigation fiches-recettes, largeurs 390 et 1440 px sans débordement, impression, quiz complet, export/restauration JSON, export SVG, persistance après rechargement et recette hors connexion. Les quatre PDF ont été contrôlés comme documents A4 d’une page. L’émulation mobile ne remplace pas un test sur téléphone physique.
