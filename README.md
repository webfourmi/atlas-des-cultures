# Atlas des cultures

PWA statique : 18 escales, 54 questions, cinq recettes, passeport et progression locale.

## Cinq nouveaux horizons (v5.2.0)

L’Espagne (flamenco), la Finlande (culture du sauna), l’Égypte (tissage du Sa’eed), la Mongolie (ger) et le Sénégal (ceebu jën) rejoignent l’Atlas. Chacune dispose d’une fiche documentée, trois questions, une photographie réelle légendée, deux illustrations de récit et une aventure en trois lieux avec deux suites possibles. Les données sont dans `travel/escales-nouvelles.json`, `travel/new-photos.json`, `travel/new-places.json` et les deux groupes `travel/adventures/new-*.json`.

Dans Voyages → Aventures, la recherche ignore les accents ; les filtres sélectionnent une région, les cinq nouveautés, les aventures commencées ou terminées. Les nouveautés apparaissent en premier. Un encart sur l’accueil et dans les voyages reprend la dernière aventure en cours. Cette préférence est conservée sur l’appareil et dans les sauvegardes ; une restauration garde le choix local existant. Les préparatifs de la mission sont visibles pendant les aventures du moteur commun. Le dénouement récapitule les choix et propose une autre escale.

Les cinq découvertes proposent un résultat visuel qui change avec les choix : des invitations et cartes d’accueil pour l’Espagne, la Finlande et le Sénégal, un échantillon tissé libre en Égypte et une maquette illustrative de ger en Mongolie. Les choix sont conservés lors d’une fermeture et d’un rechargement ; un rejeu commence un nouvel essai, tout en gardant les dénouements déjà acquis. Ces activités ne reproduisent pas un motif traditionnel et ne sont pas des instructions de construction.

La recette sénégalaise propose les portions adaptables, le mode cuisine et une nouvelle fiche PDF A4 illustrée. Elle est présentée comme une adaptation familiale simplifiée, avec ses substitutions. Un troisième documentaire musical, consacré au flamenco, se charge à la demande dans Écouter et dans l’activité espagnole ; la présentation est en anglais. Le passeport distingue les souvenirs d’aventure des tampons des quiz ; son export SVG s’allonge pour garder les 18 tampons lisibles.

Les anciens identifiants et la clé locale restent inchangés. Aucun compte ni envoi de progression n’est ajouté. La version 5.2.1 recharge les ressources depuis le réseau pendant l’installation pour éviter qu’une ancienne page reste dans le nouveau cache. Le cache contient les cinq photos, les dix illustrations, les nouveaux scripts et la nouvelle fiche PDF. Les images générées ont leur provenance et leurs prompts dans `ART-NOUVELLES-RENCONTRES.md` et `ART-NOUVEAUX-ATELIERS.md`.

## Atelier de motifs en Indonésie (v5.1.0)

Dans **Voyages → Aventures → Indonésie**, le bouton **Mon atelier de motifs** ouvre une découverte facultative en trois écrans : tracer, colorer, composer. Le dessin au doigt ou à la souris propose des traits et des points ; trois formes libres peuvent aussi être ajoutées avec des boutons. Quatre couleurs et deux présentations, motif seul ou étoffe répétée, permettent d’essayer plusieurs créations.

Le carnet conserve jusqu’à 24 créations. Il les présente une par une avec agrandissement, téléchargement SVG, reprise du dessin et retrait annulable. Le dernier motif conservé apparaît aussi au dénouement. L’essai en cours et le carnet survivent au rechargement, au rejeu et à une restauration JSON ; la fusion conserve l’essai local déjà dessiné et réunit les créations. La limite d’import passe à 8 Mio pour accueillir les sauvegardes contenant des dessins détaillés.

Cet atelier explore visuellement le principe de la réserve de couleur décrit par l’UNESCO. Les tracés et couleurs sont des créations personnelles, sans attribution de signification traditionnelle. La photographie documentaire et les illustrations de l’aventure restent accessibles. L’activité fonctionne hors connexion avec le reste du voyage.

Code et styles : `batik-workshop.js` et `batik-workshop.css`, chargés avant le moteur commun. [Contrôle de cette évolution](docs/ATELIER-INDONESIE-51.md).

## Treize aventures par écrans (v5.0.0)

Les treize escales suivent le modèle de l’Inde : trois lieux accessibles dès l’introduction, une activité à la fois et des boutons précédent/suivant toujours visibles en bas. Le contenu courant peut défiler sur un petit écran ou avec un texte agrandi ; la barre des lieux et les commandes restent en place. Le carnet, l’historique des échanges, les sources et les cartes s’ouvrent à la demande.

Chaque aventure propose deux personnages fictifs, une photographie documentaire à observer, deux repères sourcés et une énigme présentée support par support. Deux façons de poursuivre et deux choix de préparation pour chacune donnent des dénouements propres aux décisions. Rejouer permet de conserver les deux souvenirs.

Les douze nouvelles escales disposent de vingt-quatre illustrations originales légendées, en complément des photographies réelles conservées avec leurs crédits. Les images entières s’agrandissent au clic. Les activités facultatives permettent de composer un menu ou un accueil, d’inventer un micro-récit, d’imaginer un motif ou d’observer et écouter. Les choix de découverte n’imposent aucune bonne réponse et ne conditionnent pas la fin de l’aventure. Les deux extraits de berimbau restent disponibles hors connexion ; les documentaires officiels du Vietnam et du Kenya se chargent à la demande en ligne.

L’Inde conserve son école de yoga avec Anaya et Ravi, ses huit illustrations et sa pause assise autour du souffle, ajoutée en v4.4.0. Cette pause en trois étapes reste facultative, sourcée et accessible depuis le carnet.

L’écran quitté, le support de l’énigme, les choix encore incomplets et les étapes des découvertes sont conservés sur l’appareil. Les anciennes rencontres, notes et répliques sont gardées dans le carnet. Une restauration JSON donne priorité à l’aventure locale déjà commencée et réunit les souvenirs des sauvegardes. La clé locale et l’origine du site sont inchangées.

Les contenus des douze escales sont éditables dans `travel/adventures/asia.json`, `africa-oceania.json` et `americas-georgia.json`. Exécuter `node tools/build-world-data.cjs` pour assembler `world-adventure-data.js`. Le moteur est `world-adventure.js` ; les styles communs viennent de `india-adventure.css`, complétés par `world-adventure.css`. Les anciennes données `journeys.js` restent nécessaires à la lecture des anciennes sauvegardes.

Sources et provenance : [notices culturelles](travel/adventures/SOURCES.md), [illustrations des rencontres](travel/adventures/ART-RENCONTRES.md), [illustrations des activités](travel/adventures/ART-ATELIERS.md) et [Inde](travel/inde/ILLUSTRATIONS.md). Les repères culturels proviennent de notices primaires UNESCO revérifiées le 19 octobre 2026 ; les situations et dialogues restent inventés.

## Voyages, photographies et médias

Le menu **Voyages** réunit quatre entrées : **Carte**, **Aventures**, **Écouter** et **Photos**.

- Treize photographies réelles provenant de Wikimedia Commons, avec une légende, l’auteur, la date, le lien vers l’original et la licence. Elles apparaissent aussi dans les fiches culturelles et la bibliothèque. Les images des recettes conservent leur mention d’illustration de création.
- Un planisphère des terres émergées, treize repères sélectionnables et treize zooms régionaux, sur un fond Natural Earth. Les repères situent les escales sans réduire une tradition à une ville. Les cartes détaillées s’ouvrent dans OpenStreetMap en ligne.
- Treize aventures à choix autour d’une situation concrète : finir une table, apporter un bocal, trouver une place pour écouter un chant ou observer un atelier. Chaque réplique a sa propre réponse. Les noms des interlocuteurs distinguent le dialogue des indications de scène. Le carnet documentaire reste séparé et peut conserver 26 découvertes. Rejouer ne retire pas les notes déjà acquises.
- Deux extraits de berimbau intégrés en MP3 : Toque de Angola, environ 18 secondes, et Iúna, 30 secondes. Deux documentaires musicaux de la chaîne UNESCO sont proposés pour le Quan Họ et l’isukuti ; leur lecteur YouTube se charge à la demande, avec un lien source si la lecture est indisponible.

Les personnages, situations et dialogues sont inventés. Les traditions sont documentées par les fiches UNESCO référencées ; les personnes photographiées ne représentent pas les personnages des récits. Les légendes situent les photographies indépendamment des repères géographiques.

Photos, cartes, aventures et extraits MP3 sont inclus dans le cache hors connexion. Les vidéos et les liens vers les sites sources demandent Internet. La navigation arrête les lecteurs audio de l’écran quitté et aucune écoute ne démarre automatiquement.

La position dans chaque aventure, les répliques choisies, les découvertes et les rencontres terminées sont conservées sur l’appareil et dans les sauvegardes JSON. La restauration réunit les notes et les rencontres terminées, tout en conservant la position et le dialogue déjà présents sur l’appareil. Une ancienne sauvegarde sans historique reprend à sa position sans inventer de répliques antérieures. Les anciens passeports et sauvegardes restent compatibles ; remettre le passeport à zéro conserve le carnet de voyage et celui de cuisine.

Les dialogues sont écrits en français pour le jeu ; ils ne constituent pas des témoignages ni des citations. Les fiches UNESCO ont été revérifiées le 18 octobre 2026 pour les repères culturels utilisés dans la réécriture.

Crédits, licences, modifications des médias et sources : `travel/CREDITS.md`. Données : `travel-data.js`. Récits actuels : `world-adventure-data.js` et `india-adventure.js`. Anciennes rencontres : `journeys.js`. Interface et validation des sauvegardes : `travel.js`, `world-adventure.js` et `india-adventure.js`.

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
node tools/build-world-data.cjs --check
node tools/build-expansion.cjs --check
node tests/notebook.cjs
node tests/world-adventures.cjs
node tests/batik-workshop.cjs
node tests/expansion.cjs
```

Ce test sans dépendance vérifie la compatibilité des anciens passeports, la recherche (accents et unités de mesure), les filtres, les favoris, les retours de navigation, un quiz complet, les sauvegardes JSON et le cache. Il couvre aussi les 12 choix de portions des quatre recettes, les fractions, les quantités dans les étapes, les temps fixes, les cases à cocher, leur persistance, le changement de portions, une nouvelle préparation et la restauration d’une sauvegarde sans écraser la préparation locale. Les quatre PDF de base, inchangés depuis v3.2.0, ont été rendus et contrôlés : une page A4 avec une image et des références par recette.

Pour v5.0.0, le test vérifie que les 60 anciens chemins des 12 rencontres courtes restent lisibles dans les carnets, avec leurs réponses propres. Le test des nouvelles aventures couvre 288 parcours dans les six ordres d’exploration, plus 48 parcours complets par les commandes affichées, et les activités suivies ou passées. Il couvre la reprise après rechargement, la migration des anciennes rencontres, la conservation du dialogue dans les sauvegardes JSON, les clics périmés, le rejeu et les retours de navigation. Il vérifie aussi les quatre sections de Voyages, les treize photos et crédits, les projections des repères, le chargement des vidéos à la demande et l’arrêt de l’audio. Les photographies ont été inspectées visuellement ; codecs, durée et présence d’un signal audio ont été vérifiés sur les deux MP3.

Pour l’Inde, il couvre les six ordres d’exploration possibles, les deux voies et leurs deux préparatifs, soit 24 parcours complets, ainsi que les associations erronées, les aides, le déplacement de titres, les reprises à mi-énigme, les sauvegardes JSON, les anciennes rencontres et le cumul des souvenirs.

La navigation par écrans est aussi testée sur quatre parcours complets depuis les boutons réellement rendus : lieux présents avant l’activité, une seule activité affichée, énigme support par support, conservation des réponses, refus des clics provenant d’un ancien support, retour au carnet, historique, sortie de la vue de jeu et migration des sauvegardes v4.2.

Pour v5.1.0, le test dédié vérifie les tracés, les outils, les couleurs, la répétition, les doublons, le retrait annulable même pour la dernière création, la reprise, le rejeu, la migration v5.0, le contenu SVG exporté et l’import d’une sauvegarde de plus de 1 Mio. L’atelier et le carnet ont été inspectés dans Chrome sur ordinateur et dans un cadre de 390 × 844 px : les commandes fixes restent visibles, le contenu ne déborde pas horizontalement et l’agrandissement reste dans l’écran. Aucun test sur téléphone physique n’a été réalisé. L’automatisation du téléchargement dans le navigateur n’a pas renvoyé de fichier ; le contenu SVG et son déclenchement sont vérifiés par le test sans navigateur. L’impression des recettes n’a pas été revérifiée dans cette évolution. Le test antérieur `tests/recipes.cjs` reste disponible pour Playwright avec Microsoft Edge.


Pour v5.2.0, les vérifications couvrent 408 parcours dans les six ordres d’exploration et 68 parcours par les commandes affichées, ainsi que les cinq nouvelles séries de quiz. Les tests dédiés contrôlent recherche et filtres, reprise, fusion des sauvegardes, activités visuelles, portions sénégalaises et dimensions du passeport SVG. Le nouveau PDF a été rendu et inspecté : une page A4 sans débordement. Le contrôle navigateur, ses captures et ses limites sont consignés dans [le compte rendu v5.2](docs/EVOLUTION-52.md).
