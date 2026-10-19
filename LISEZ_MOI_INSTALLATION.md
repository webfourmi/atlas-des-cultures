# Atlas des cultures · Application PWA v5.0.0

## Installer sur Android (Samsung, Chrome)

1. Ouvrir [Atlas des cultures](https://webfourmi.github.io/atlas-des-cultures/) dans Chrome sur le téléphone.
2. Dans Chrome, toucher **⋮ > Installer l’application** ou **Ajouter à l’écran d’accueil**.
3. Pour une installation existante, accepter la bannière **Mettre à jour** ; les progrès locaux sont conservés.

Pour héberger une copie, publier tout le projet et ses sous-dossiers sur un site HTTPS. Sur GitHub Pages, choisir **Settings > Pages > Deploy from a branch > main > /(root)**.
> L’application PWA ne peut PAS s’installer directement depuis `index.html` ouvert localement ; HTTPS (ou localhost pour les tests) est obligatoire.

## Nouveautés et alertes

- Au lancement, au retour en ligne, à la réouverture et toutes les 30 minutes quand l’application reste ouverte, le jeu vérifie s’il existe une version plus récente.
- Une bannière propose « Mettre à jour » et « Plus tard ».
- Dans **Options**, un bouton permet de déclencher manuellement la recherche ; une autorisation facultative permet une notification système **si le jeu est ouvert**, lors de la détection d’une nouveauté.
- Sans serveur de notifications push, pas d’alertes garanties lorsque le jeu est complètement fermé.

**Pour publier une future version** : modifier la version dans `index.html` (`const APP_VERSION`), dans `version.json`, et modifier `const CACHE_VERSION` dans `sw.js` (ex.: v3.1.0). Publier **tous les fichiers** ensemble avec GitHub Pages. L’alerte apparaîtra aux appareils déjà équipés lors d’une vérification en ligne.

## Progression et sauvegardes JSON

- La progression garde **la même clé `atlas-cultures-save-v1`** que la V2, pour préserver les données tant que l’origine web reste identique.
- Dans **Options > Exporter ma progression**, télécharger le fichier JSON ; puis sur le nouveau téléphone ou nouveau site, choisir **Importer un fichier JSON** pour fusionner les progrès.
- Le fichier JSON peut être lu par l’utilisateur ; aucune donnée n’est synchronisée automatiquement.
- Il est également possible de créer un **passeport souvenir vectoriel SVG** via Options > Exporter mon passeport SVG.

## Hors connexion

Le navigateur stocke l’application, les treize aventures, leurs illustrations et photographies, les fiches, les trente-neuf énigmes, les recettes et les deux extraits MP3 pour usage hors connexion après **la première visite en ligne**. Les liens externes, cartes détaillées et documentaires vidéo nécessitent une connexion.

## Structure du paquet

- `index.html` : point d’entrée du jeu
- `travel.js`, `travel-data.js`, `journeys.js` : navigation, médias et anciennes rencontres
- `india-adventure.js`, `india-adventure.css` : aventure Inde et styles communs
- `world-adventure.js`, `world-adventure-data.js`, `world-adventure.css` : douze autres aventures
- `travel/`, `recipes/` : médias, crédits et fiches PDF
- `recipes.js`, `kitchen.js`, `notebook.js` et leurs CSS : recettes et progression
- `manifest.webmanifest` : manifeste JSON installable
- `version.json` : version et nouveautés
- `sw.js` : service worker et cache hors connexion
- `icons/atlas-icon.svg` : icône vectorielle originale
- `icons/atlas-192.png`, `icons/atlas-512.png`, `icons/atlas-maskable-512.png` : déclinaisons Android

## Tester sans publier

À la racine du dossier : `python -m http.server 8000` puis ouvrir `http://localhost:8000/` sur **l’ordinateur**. Pour installer sur téléphone, utiliser GitHub Pages en HTTPS.

