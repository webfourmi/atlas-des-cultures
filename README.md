# Atlas des cultures

PWA statique : 13 escales, 39 questions, passeport et progression locale.

## Inde : « Avant l’ouverture » (v4.3.0)

L’Inde propose une aventure pilote dans une école de yoga fictive : l’accueil avec Anaya, la bibliothèque avec les documents et l’énigme, et la cour avec Ravi. Les trois lieux sont accessibles librement depuis une barre persistante, visible dès l’introduction. L’aventure se joue dans un cadre occupant la fenêtre : une seule activité à la fois, avec les boutons de progression toujours en bas. Le contenu de la carte peut défiler sur un petit écran ou avec un texte agrandi ; les lieux et les commandes restent en place. Le carnet, les sources et les échanges antérieurs s’ouvrent à la demande. Les observations, les associations encore incomplètes, l’écran et le support affichés sont conservés à la fermeture.

- Observer trois détails d’une vraie photographie, dont la légende source qui précise la relation maître-élève. Les personnes photographiées ne représentent pas les personnages du récit.
- Examiner une fiche et un livre, puis associer trois titres à leurs supports. L’énigme présente un seul support à la fois, avec trois titres au choix. Attribuer un titre déjà utilisé échange les deux affectations. Les boutons précédent et suivant permettent de revoir chaque support sans perdre les réponses. La vérification explique ce qui reste à revoir ; deux niveaux d’aide sont disponibles sans pénalité.
- Choisir une exposition avec Anaya ou une visite dialoguée avec Ravi. La première voie demande de choisir le premier panneau à l’accueil ; la seconde, une question d’ouverture dans la cour. L’ordre des panneaux et la conversation finale reprennent ces décisions.
- Obtenir deux souvenirs en rejouant. Les découvertes et souvenirs sont conservés ; une restauration garde l’aventure en cours sur l’appareil et réunit les souvenirs des sauvegardes. Une ancienne rencontre indienne terminée reste acquise et ouvre la nouvelle aventure à son introduction.

Les repères documentaires proviennent de la fiche [Yoga, UNESCO](https://ich.unesco.org/fr/RL/le-yoga-01163) et de la [légende de la photographie de Yogainrishikesh](https://commons.wikimedia.org/wiki/File:Yoga_master_and_student,_India.jpg), revérifiées le 18 octobre 2026. Les livres dessinés et le plan des trois espaces sont des éléments de fiction. Aucun exercice corporel n’est demandé. Sources et crédits restent accessibles dans l’aventure.

Implémentation : `india-adventure.js` et `india-adventure.css`, intégrés au cache hors connexion et à la progression des rencontres. Les douze autres rencontres gardent leur fonctionnement.

## Voyages, photographies et aventures (v4.1.0)

Le menu **Voyages** réunit quatre entrées : **Carte**, **Aventures**, **Écouter** et **Photos**.

- Treize photographies réelles provenant de Wikimedia Commons, avec une légende, l’auteur, la date, le lien vers l’original et la licence. Elles apparaissent aussi dans les fiches culturelles et la bibliothèque. Les images des recettes conservent leur mention d’illustration de création.
- Un planisphère des terres émergées, treize repères sélectionnables et treize zooms régionaux, sur un fond Natural Earth. Les repères situent les escales sans réduire une tradition à une ville. Les cartes détaillées s’ouvrent dans OpenStreetMap en ligne.
- Treize rencontres à choix autour d’une situation concrète : finir une table, apporter un bocal, trouver une place pour écouter un chant ou observer un atelier. Chaque réplique a sa propre réponse. Les noms des interlocuteurs distinguent le dialogue des indications de scène. Le carnet documentaire reste séparé et peut conserver 26 découvertes. Rejouer ne retire pas les notes déjà acquises.
- Deux extraits de berimbau intégrés en MP3 : Toque de Angola, environ 18 secondes, et Iúna, 30 secondes. Deux documentaires musicaux de la chaîne UNESCO sont proposés pour le Quan Họ et l’isukuti ; leur lecteur YouTube se charge à la demande, avec un lien source si la lecture est indisponible.

Les personnages, situations et dialogues sont inventés. Les traditions sont documentées par les fiches UNESCO référencées ; les personnes photographiées ne représentent pas les personnages des récits. Les légendes situent les photographies indépendamment des repères géographiques.

Photos, cartes, aventures et extraits MP3 sont inclus dans le cache hors connexion. Les vidéos et les liens vers les sites sources demandent Internet. La navigation arrête les lecteurs audio de l’écran quitté et aucune écoute ne démarre automatiquement.

La position dans chaque aventure, les répliques choisies, les découvertes et les rencontres terminées sont conservées sur l’appareil et dans les sauvegardes JSON. La restauration réunit les notes et les rencontres terminées, tout en conservant la position et le dialogue déjà présents sur l’appareil. Une ancienne sauvegarde sans historique reprend à sa position sans inventer de répliques antérieures. Les anciens passeports et sauvegardes restent compatibles ; remettre le passeport à zéro conserve le carnet de voyage et celui de cuisine.

Les dialogues sont écrits en français pour le jeu ; ils ne constituent pas des témoignages ni des citations. Les fiches UNESCO ont été revérifiées le 18 octobre 2026 pour les repères culturels utilisés dans la réécriture.

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

Pour v4.3.0, le même test parcourt les 60 chemins des 12 rencontres courtes et vérifie que chaque choix affiche sa réponse propre sans effacer les échanges précédents. Il couvre la reprise après rechargement, la migration des anciennes rencontres, la conservation du dialogue dans les sauvegardes JSON, les clics périmés, le rejeu et les retours de navigation. Il vérifie aussi les quatre sections de Voyages, les treize photos et crédits, les projections des repères, le chargement des vidéos à la demande et l’arrêt de l’audio. Les photographies ont été inspectées visuellement ; codecs, durée et présence d’un signal audio ont été vérifiés sur les deux MP3.

Pour l’Inde, il couvre les six ordres d’exploration possibles, les deux voies et leurs deux préparatifs, soit 24 parcours complets, ainsi que les associations erronées, les aides, le déplacement de titres, les reprises à mi-énigme, les sauvegardes JSON, les anciennes rencontres et le cumul des souvenirs.

La navigation par écrans est aussi testée sur quatre parcours complets depuis les boutons réellement rendus : lieux présents avant l’activité, une seule activité affichée, énigme support par support, conservation des réponses, refus des clics provenant d’un ancien support, retour au carnet, historique, sortie de la vue de jeu et migration des sauvegardes v4.2.

Limite de cette livraison : le rendu CSS et l’impression du navigateur n’ont pas été contrôlés dans un navigateur. Le test antérieur `tests/recipes.cjs` reste disponible pour Playwright avec Microsoft Edge ; il couvre les largeurs 390 et 1440 px, l’impression, le quiz, les sauvegardes et le mode hors connexion. L’émulation ne remplace pas un test sur téléphone physique.

