# Trois aventures à jouer — v5.4.0

Cette évolution met à l’essai trois mécaniques différentes : composer une table, construire un conte à embranchements et organiser une écoute. Les actions produisent une création visible, conservée dans le carnet et reprise dans le dénouement. Les révisions et les documents sont facultatifs dans ces trois aventures. Les quinze autres escales gardent leur parcours.

## Sources et créations

Les repas et les préférences des invités sont inventés pour la scène. Les repères sur le washoku restent ceux de l’UNESCO, complétés par la brochure du ministère japonais de l’Agriculture [Traditional Dietary Cultures of the Japanese](https://www.maff.go.jp/e/data/publish/attach/pdf/index-20.pdf), consultée le 1er novembre 2026. Le mini-jeu ne présente pas ses trois emplacements comme une formule universelle du repas japonais. La recette existante de soupe miso reste liée à la découverte.

Les douze contes sont écrits pour ce jeu, en français. Ils ne sont pas annoncés comme des contes traditionnels ni comme une traduction. La découverte documentaire de l’art oral et de Jemaa el-Fna garde ses [repères UNESCO](https://ich.unesco.org/en/RL/lespace-culturel-de-la-place-jemaa-el-fna-00014).

Les deux enregistrements restent les médias déjà embarqués : [Toque-de-angola.ogg](https://commons.wikimedia.org/wiki/File:Toque-de-angola.ogg), par Andrew Archibald / Aarchiba, et [Iúna.ogg](https://commons.wikimedia.org/wiki/File:I%C3%BAna.ogg), par Djino. Les pages sources, descriptions et déclarations de domaine public ont été vérifiées le 1er novembre 2026. La séquence assemble à la lecture les cinq premières secondes de chaque document et une pause de deux secondes. Il s’agit d’un montage d’écoute personnel, sans attribution d’une valeur de toque traditionnel. Les barres des cartes sont des formes décoratives, pas une analyse du signal sonore.

## Vérifications

- `node tests/pilot-adventures.cjs` : 16 parcours japonais, 48 parcours de conte et 48 parcours d’écoute par les commandes affichées ; 12 fins de conte distinctes ; contraintes des invités, ordre des sons et résultat lié aux choix.
- Le même test contrôle la reprise, l’export SVG et les crédits, les collections, le rejeu, la stabilité du résultat terminé, les anciennes sauvegardes, la fusion JSON, les clics périmés, la révision après la fin et l’accès aux cartes avant de recommencer.
- Le planificateur audio est testé avec une horloge contrôlée : 5 s, 2 s et 5 s dans l’ordre choisi, arrêt après navigation, erreur de lecture et réécoute de l’ordre d’une ancienne carte plutôt que de l’essai courant.
- Les trois SVG exportés ont été analysés avec un parseur XML ; le contenu est généré sans script ni ressource externe.
- `tests/world-adventures.cjs` conserve les 408 parcours libres des 17 escales du moteur commun et 56 parcours par les commandes des 14 aventures non interactives. Les trois nouvelles mécaniques ont leur test dédié. `tests/notebook.cjs` conserve notamment les 24 parcours indiens et les anciennes rencontres.
- Les tests de l’atelier indonésien, des cinq nouvelles destinations et du service worker conservent leurs contrôles de sauvegarde et de mise à jour. Les nouveaux fichiers sont inscrits au cache de la version 5.4.0.

Le navigateur a contrôlé un repas jusqu’à sa scène finale, un conte jusqu’à sa décision dans une fenêtre de 390 × 844 px et la composition du repas dans une fenêtre de 320 × 640 px. Les mesures donnent respectivement 390 et 320 px de contenu, sans débordement horizontal ; les boutons du bas restent à l’intérieur de chaque fenêtre. Il s’agit de fenêtres de contrôle, sans test sur téléphone physique.

La séquence sonore a été lue dans le navigateur après réorganisation : les deux lecteurs ont avancé d’environ cinq secondes, sans erreur média, et le statut a confirmé la fin du parcours. Les contrôles ont également couvert la persistance après rechargement. Le test de téléchargement du navigateur n’a pas renvoyé de fichier ; le déclenchement, le contenu SVG et son XML sont contrôlés séparément. Le téléchargement sur un téléphone réel reste à vérifier.
