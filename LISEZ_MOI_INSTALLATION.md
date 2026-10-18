# Atlas des cultures · Application PWA v3.0.0

## Installer sur Android (Samsung, Chrome)

1. Décompresser `atlas_des_cultures_PWA_v3.zip`.
2. Placer **tout le contenu** du dossier (fichier `index.html`, `sw.js`, `version.json`, `manifest.webmanifest`, dossier `icons/`) à la racine d’un dépôt GitHub Pages, par exemple `atlas-des-cultures`.
3. Dans le dépôt GitHub, **Settings > Pages > Deploy from a branch > main > /(root) > Save**.
4. Ouvrir l’adresse HTTPS fournie, typiquement `https://VOTRE_PSEUDO.github.io/atlas-des-cultures/`, dans **Chrome** sur le téléphone.
5. Dans Chrome, toucher **⋮ > Installer l’application** (ou **Ajouter à l’écran d’accueil** selon le navigateur). Accepter la proposition : une icône « Atlas cultures » est ajoutée.

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

Le navigateur stocke l’application, ses 13 illustrations, les 13 fiches et les 39 énigmes pour usage hors connexion après **la première visite en ligne**. Les liens UNESCO externes restent accessibles uniquement lorsqu’une connexion est présente.

## Structure du paquet

- `index.html` : jeu complet + fiches et illustrations intégrées
- `manifest.webmanifest` : manifeste JSON installable
- `version.json` : version et nouveautés
- `sw.js` : service worker et cache hors connexion
- `icons/atlas-icon.svg` : icône vectorielle originale
- `icons/atlas-192.png`, `icons/atlas-512.png`, `icons/atlas-maskable-512.png` : déclinaisons Android

## Tester sans publier

À la racine du dossier : `python -m http.server 8000` puis ouvrir `http://localhost:8000/` sur **l’ordinateur**. Pour installer sur téléphone, utiliser GitHub Pages en HTTPS.
