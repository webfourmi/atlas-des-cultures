# Atlas des cultures

PWA statique : 13 escales, 39 questions, passeport et progression locale.

## Carnet « Recettes du monde » (v3.2.0)

L’entrée **Recettes** du menu et le bouton de l’accueil ouvrent le carnet. Il contient les quatre recettes des escales culinaires : soupe miso, kimchi frais, café turc et tortillas de maïs.

- Une image originale pour chaque recette, également présente sur la fiche.
- Recherche par plat, pays ou ingrédient ; filtre par destination.
- Favoris conservés sur cet appareil, présentés en tête, avec filtre « Mes favoris ».
- Impression A4 depuis la recette et fiche PDF illustrée prête à télécharger.
- Ingrédients, étapes, durées, adaptations et liens vers les sources dans chaque fiche.
- Recettes, images et PDF disponibles hors connexion après installation complète du nouveau cache.

La clé de progression locale est conservée. Les anciens passeports restent compatibles. Les exports JSON incluent les favoris ; la restauration fusionne les données et la remise à zéro du passeport conserve les favoris.

Les images sont des illustrations créées pour le carnet, pas des photographies documentaires. Leurs descriptions de création figurent dans `recipes/ILLUSTRATIONS.md`. Les quatre sources culinaires ont été consultées le 18 octobre 2026 ; les références culturelles UNESCO existantes sont conservées.

## Ajouter ou modifier une recette

Ajouter une entrée dans `recipes.js` avec l’identifiant d’une escale et les champs existants, dont `image`, `imageAlt` et `pdf`. Ajouter les nouveaux fichiers au tableau `CORE` de `sw.js`, puis synchroniser `APP_VERSION` dans `index.html`, `version.json` et `CACHE_VERSION` dans `sw.js`.

Les PDF sont générés depuis les mêmes données que l’application :

```sh
python tools/build-recipe-pdfs.py
```

Prérequis de génération : Python, Node, ReportLab, Pillow et polices DejaVu dans `/usr/share/fonts/truetype/dejavu`. Ces outils ne sont pas nécessaires au fonctionnement du site.

## Vérification

```sh
node tests/notebook.cjs
```

Ce test sans dépendance vérifie la compatibilité des anciens passeports, la recherche (accents et unités de mesure), les filtres, le classement et la persistance des favoris, les retours de navigation, un quiz complet, les sauvegardes JSON et la présence de toutes les ressources dans le cache. Les quatre PDF ont été rendus et contrôlés : une page A4 avec une image et des références par recette.

Limite de cette livraison : le rendu CSS et l’impression du navigateur n’ont pas été contrôlés dans un navigateur. Le test antérieur `tests/recipes.cjs` reste disponible pour Playwright avec Microsoft Edge ; il couvre les largeurs 390 et 1440 px, l’impression, le quiz, les sauvegardes et le mode hors connexion. L’émulation ne remplace pas un test sur téléphone physique.

