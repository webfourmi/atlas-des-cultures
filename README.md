# Atlas des cultures

PWA statique : 13 escales, 39 questions, passeport et progression locale.

## Voyages, photographies et aventures (v4.0.0)

Le menu **Voyages** réunit quatre entrées : **Carte**, **Aventures**, **Écouter** et **Photos**.

- Treize photographies réelles provenant de Wikimedia Commons, avec une légende, l’auteur, la date, le lien vers l’original et la licence. Elles apparaissent aussi dans les fiches culturelles et la bibliothèque. Les images des recettes conservent leur mention d’illustration de création.
- Un planisphère des terres émergées, treize repères sélectionnables et treize zooms régionaux, sur un fond Natural Earth. Les repères situent les escales sans réduire une tradition à une ville. Les cartes détaillées s’ouvrent dans OpenStreetMap en ligne.
- Treize aventures à choix avec un personnage fictif par escale. Chaque rencontre propose deux découvertes documentaires ; les chemins permettent d’observer les gestes et d’écouter ce qui se transmet. Le carnet peut conserver 26 découvertes au total. Rejouer ne retire pas les notes déjà acquises.
- Deux extraits de berimbau intégrés en MP3 : Toque de Angola, environ 18 secondes, et Iúna, 30 secondes. Deux documentaires musicaux de la chaîne UNESCO sont proposés pour le Quan Họ et l’isukuti ; leur lecteur YouTube se charge à la demande, avec un lien source si la lecture est indisponible.

Les personnages, situations et dialogues sont inventés. Les traditions sont documentées par les fiches UNESCO référencées ; les personnes photographiées ne représentent pas les personnages des récits. Les légendes situent les photographies indépendamment des repères géographiques.

Photos, cartes, aventures et extraits MP3 sont inclus dans le cache hors connexion. Les vidéos et les liens vers les sites sources demandent Internet. La navigation arrête les lecteurs audio de l’écran quitté et aucune écoute ne démarre automatiquement.

La position dans chaque aventure, les découvertes et les rencontres terminées sont conservées sur l’appareil et dans les sauvegardes JSON. La restauration réunit les notes et les rencontres terminées, tout en conservant la position de lecture déjà présente sur l’appareil. Les anciens passeports et sauvegardes restent compatibles ; remettre le passeport à zéro conserve le carnet de voyage et celui de cuisine.

Crédits, licences, modifications des médias et sources : `travel/CREDITS.md`. Données : `travel-data.js`. Récits : `journeys.js`. Interface et validation des sauvegardes : `travel.js`.

## Carnet « Recettes du monde » (v3.3.0)

L’entrée **Recettes** du menu et le bouton de l’accueil ouvrent le carnet. Il contient les quatre recettes des escales culinaires : soupe miso, kimchi frais, café turc et tortillas de maïs.

- Une image originale pour chaque recette, également présente sur la fiche.
- Recherche par plat, pays ou ingrédient ; filtre par destination.
- Favoris conservés sur cet appareil, présentés en tête, avec filtre « Mes favoris ».
- Impression A4 depuis la recette et fiche PDF illustrée prête à télécharger.
- Ingrédients, étapes, durées, adaptations et liens vers les sources dans chaque fiche.
- Recettes, images et PDF disponibles hors connexion après installation complète du nouveau cache.

### En cuisine

Dans une recette, choisir de 1 à 12 portions dans « Pour combien ? ». Les ingrédients et les quantités mentionnées dans les étapes sont recalculés ensemble : la moitié des tortillas donne six boules, la moitié du kimchi divise aussi l’eau du salage. Les durées et les 60 ml par tasse de café restent fixes. Le kimchi garde une fourchette de portions d’accompagnement.

Le bouton **Mode cuisine** affiche des ingrédients et des étapes à cocher avec une progression. Les coches et les portions sont conservées sur cet appareil et dans la sauvegarde JSON. **Nouvelle préparation** efface les coches en gardant les portions. Changer de portions efface aussi les coches, puisque les quantités préparées changent.

L’impression du navigateur reprend les portions choisies. Les PDF illustrés à télécharger restent les fiches de base. Lors d’une restauration JSON, une préparation déjà présente sur l’appareil reste prioritaire ; les recettes absentes récupèrent la préparation du fichier.

La clé de progression locale est conservée. Les anciens passeports restent compatibles. Les exports JSON incluent les favoris et les préparations ; la restauration fusionne les données et la remise à zéro du passeport conserve le carnet de cuisine.

Les images sont des illustrations créées pour le carnet, pas des photographies documentaires. Leurs descriptions de création figurent dans `recipes/ILLUSTRATIONS.md`. Les quatre sources culinaires ont été consultées le 18 octobre 2026 ; les références culturelles UNESCO existantes sont conservées.

## Ajouter ou modifier une recette

Ajouter une entrée dans `recipes.js` avec l’identifiant d’une escale et les champs existants, dont `image`, `imageAlt` et `pdf`. Fournir aussi `portionModel`, `measuredIngredients` et les éventuels `measuredSteps`. Ces structures identifient explicitement les quantités à multiplier : ne pas extraire tous les nombres d’une phrase, car certains désignent un temps ou une capacité fixe. Les textes `ingredients` et `steps` restent ceux de la recette de base utilisée pour les PDF.

Ajouter les nouveaux fichiers au tableau `CORE` de `sw.js`, puis synchroniser `APP_VERSION` dans `index.html`, `version.json` et `CACHE_VERSION` dans `sw.js`.

Les PDF sont générés depuis les mêmes données que l’application :

```sh
python tools/build-recipe-pdfs.py
```

Prérequis de génération : Python, Node, ReportLab, Pillow et polices DejaVu dans `/usr/share/fonts/truetype/dejavu`. Ces outils ne sont pas nécessaires au fonctionnement du site.

## Vérification

```sh
node tests/notebook.cjs
```

Ce test sans dépendance vérifie la compatibilité des anciens passeports, la recherche (accents et unités de mesure), les filtres, les favoris, les retours de navigation, un quiz complet, les sauvegardes JSON et le cache. Il couvre aussi les 12 choix de portions des quatre recettes, les fractions, les quantités dans les étapes, les temps fixes, les cases à cocher, leur persistance, le changement de portions, une nouvelle préparation et la restauration d’une sauvegarde sans écraser la préparation locale. Les quatre PDF de base, inchangés depuis v3.2.0, ont été rendus et contrôlés : une page A4 avec une image et des références par recette.

Pour v4.0.0, le même test parcourt les 65 chemins des 13 aventures, vérifie les retours de navigation et les sauvegardes, les quatre sections de Voyages, les treize photos et crédits, les projections des repères, le chargement des vidéos à la demande et l’arrêt de l’audio. Les photographies ont été inspectées visuellement ; codecs, durée et présence d’un signal audio ont été vérifiés sur les deux MP3.

Limite de cette livraison : le rendu CSS et l’impression du navigateur n’ont pas été contrôlés dans un navigateur. Le test antérieur `tests/recipes.cjs` reste disponible pour Playwright avec Microsoft Edge ; il couvre les largeurs 390 et 1440 px, l’impression, le quiz, les sauvegardes et le mode hors connexion. L’émulation ne remplace pas un test sur téléphone physique.

