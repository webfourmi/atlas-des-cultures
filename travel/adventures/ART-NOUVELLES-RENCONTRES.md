# Illustrations des cinq nouvelles rencontres — Atlas des cultures

Créées le 31 octobre 2026 avec l’outil intégré `image_gen.imagegen`, en mode génération, un appel distinct par image. Aucun CLI ni autre API. Les cinq images ont été générées en parallèle puis inspectées visuellement dans les sorties de l’outil.

Ce sont des illustrations narratives de situations et de personnes fictives. Leur rendu pictural réaliste ne constitue ni une photographie documentaire, ni une source sur une tradition, ni une démonstration technique. Les photographies réelles et leurs crédits sont conservés séparément. Les scènes servent de décors aux rencontres ; les personnes dessinées ne doivent pas être identifiées systématiquement aux personnages nommés dans les dialogues, notamment l’Espagne où trois adultes sont représentés.

## Préparation et contrôle

L’image existante `travel/adventures/art/indonesie-rencontre.webp` a été inspectée avant rédaction des prompts, pour rapprocher la palette et l’ambiance de carnet de voyage. Aucun fichier image de référence n’a été envoyé à la génération. Les adultes sont vêtus, aucune scène de sauna en activité, aucun texte ou logo n’est présent. Le ger et les métiers à tisser sont des évocations illustratives : ils ne doivent pas servir de plan de construction ou de leçon technique.

Les originaux 1536 × 1024 sont conservés à leur chemin de génération et copiés dans `/tmp/atlas-new-encounters-originals/` comme point de contrôle de travail. Pour le site, seul un redimensionnement proportionnel à 960 × 640 et un encodage WebP qualité 82 ont été effectués avec ImageMagick `convert`. Aucun recadrage ou changement créatif par code. Les cinq fichiers ont été contrôlés avec `identify` : WebP, 960 × 640, sRGB.

## Fichiers et prompts complets

### espagne

- Original : `/workspace/scratch/94e8e14f152b/generated_images/exec-35b70650-2085-41d2-9867-d19b4ef5f2a8.png`
- Copie de contrôle : `/tmp/atlas-new-encounters-originals/espagne-rencontre.png`
- Fichier du site : `travel/adventures/art/espagne-rencontre.webp`
- Légende proposée : Une petite salle de répétition de flamenco imaginée ; trois adultes échangent en préparant les chaises.
- Mode : outil intégré, génération sans image de référence.

```text
Use case: illustration-story. Asset type: landscape 3:2 narrative illustration for an adult French cultural exploration game, Atlas des cultures. Style: refined hand-painted editorial gouache and watercolor travel journal, tactile cream paper, realistic painterly faces, natural warm light, cream ochre teal and terracotta palette. Contemporary ordinary adults, welcoming quiet mood, respectful proportions and natural gestures. This is a fictional scene, not documentary photography or a technical diagram. Wide composition with readable details; no panels or collage, no captions, no visible writing, no letters, no logos, no watermarks, no tourist caricature. Scene: a modest contemporary flamenco rehearsal room in Andalusia. Three fictional adults, a woman singer in simple contemporary rust-colored blouse, a man seated with a Spanish guitar, and a woman dancer in a plain long practice skirt, are having a friendly conversation while arranging chairs for a small encounter. The guitar is held naturally, no performance stunt, simple plaster walls and wooden floor, daylight from an open doorway. Their focus is preparing a welcoming session together, not a tourist stage show.
```

### finlande

- Original : `/workspace/scratch/94e8e14f152b/generated_images/exec-c141187f-a45b-4e02-9821-5b15fcd69d28.png`
- Copie de contrôle : `/tmp/atlas-new-encounters-originals/finlande-rencontre.png`
- Fichier du site : `travel/adventures/art/finlande-rencontre.webp`
- Légende proposée : Deux hôtes fictifs préparent un accueil à l’extérieur d’un sauna au bord d’un lac.
- Mode : outil intégré, génération sans image de référence.

```text
Use case: illustration-story. Asset type: landscape 3:2 narrative illustration for an adult French cultural exploration game, Atlas des cultures. Style: refined hand-painted editorial gouache and watercolor travel journal, tactile cream paper, realistic painterly faces, natural warm light, cream ochre teal and terracotta palette. Contemporary ordinary adults, welcoming quiet mood, respectful proportions and natural gestures. This is a fictional scene, not documentary photography or a technical diagram. Wide composition with readable details; no panels or collage, no captions, no visible writing, no letters, no logos, no watermarks, no tourist caricature. Scene: outside a small Finnish wooden lakeside sauna cabin in a quiet boreal landscape in late summer. Two fictional adults in normal everyday shirts and trousers, fully clothed, are preparing a welcoming bench with folded towels and a water jug; one gestures toward the wooden door while the other arranges towels. Calm blue lake, birches and pines, natural warm evening light. No nudity, no swimming, no medical or wellbeing symbols, no snow or exaggerated tourist spectacle.
```

### egypte

- Original : `/workspace/scratch/94e8e14f152b/generated_images/exec-339d0a12-4c42-4ef5-8bd5-f529ddaf8d93.png`
- Copie de contrôle : `/tmp/atlas-new-encounters-originals/egypte-rencontre.png`
- Fichier du site : `travel/adventures/art/egypte-rencontre.webp`
- Légende proposée : Deux adultes fictifs discutent devant un métier à tisser dans un atelier imaginé de Haute-Égypte.
- Mode : outil intégré, génération sans image de référence.

```text
Use case: illustration-story. Asset type: landscape 3:2 narrative illustration for an adult French cultural exploration game, Atlas des cultures. Style: refined hand-painted editorial gouache and watercolor travel journal, tactile cream paper, realistic painterly faces, natural warm light, cream ochre teal and terracotta palette. Contemporary ordinary adults, welcoming quiet mood, respectful proportions and natural gestures. This is a fictional scene, not documentary photography or a technical diagram. Wide composition with readable details; no panels or collage, no captions, no visible writing, no letters, no logos, no watermarks, no tourist caricature. Scene: a modest present-day hand-weaving workshop inspired by Upper Egypt, warm plaster walls and reed-filtered daylight. Two fictional Egyptian adults in ordinary contemporary clothing discuss a length of simple woven cloth beside a wooden hand loom with clearly visible parallel warp threads. One adult lightly indicates the fabric while the other holds a small yarn skein. Natural relaxed faces, baskets of yarn, indigo and ochre textiles. No pyramids, no pharaoh imagery, no invented sacred or ethnic symbols. The loom is atmospheric, not a precise instructional blueprint.
```

### mongolie

- Original : `/workspace/scratch/94e8e14f152b/generated_images/exec-74df69e1-5bff-46e4-9c03-7a474cfde4f4.png`
- Copie de contrôle : `/tmp/atlas-new-encounters-originals/mongolie-rencontre.png`
- Fichier du site : `travel/adventures/art/mongolie-rencontre.webp`
- Légende proposée : Deux adultes fictifs présentent du bois, des cordes et du feutre près d’un ger imaginé.
- Mode : outil intégré, génération sans image de référence.

```text
Use case: illustration-story. Asset type: landscape 3:2 narrative illustration for an adult French cultural exploration game, Atlas des cultures. Style: refined hand-painted editorial gouache and watercolor travel journal, tactile cream paper, realistic painterly faces, natural warm light, cream ochre teal and terracotta palette. Contemporary ordinary adults, welcoming quiet mood, respectful proportions and natural gestures. This is a fictional scene, not documentary photography or a technical diagram. Wide composition with readable details; no panels or collage, no captions, no visible writing, no letters, no logos, no watermarks, no tourist caricature. Scene: a calm present-day Mongolian steppe setting near a white felt ger. Two fictional Mongolian adults in ordinary practical contemporary clothing, a light jacket and simple trousers, stand at a low outdoor table showing some wooden pieces, rope and folded felt associated with their craft. They are discussing a welcoming demonstration. Rolling open grassland and distant hills, soft natural light; ger visible behind, no assembly action or technical cutaway. Respectful ordinary people, no warrior stereotype, no ceremonial costume or invented sacred motifs.
```

### senegal

- Original : `/workspace/scratch/94e8e14f152b/generated_images/exec-28360360-ace3-4ae3-92c0-8b2f833e8709.png`
- Copie de contrôle : `/tmp/atlas-new-encounters-originals/senegal-rencontre.png`
- Fichier du site : `travel/adventures/art/senegal-rencontre.webp`
- Légende proposée : Deux hôtes fictifs préparent la table autour d’un plat de riz, poisson et légumes évoquant le ceebu jën.
- Mode : outil intégré, génération sans image de référence.

```text
Use case: illustration-story. Asset type: landscape 3:2 narrative illustration for an adult French cultural exploration game, Atlas des cultures. Style: refined hand-painted editorial gouache and watercolor travel journal, tactile cream paper, realistic painterly faces, natural warm light, cream ochre teal and terracotta palette. Contemporary ordinary adults, welcoming quiet mood, respectful proportions and natural gestures. This is a fictional scene, not documentary photography or a technical diagram. Wide composition with readable details; no panels or collage, no captions, no visible writing, no letters, no logos, no watermarks, no tourist caricature. Scene: a shaded contemporary Senegalese courtyard dining space with two fictional adult Senegalese hosts preparing a shared meal. A woman in a simple everyday patterned dress and a man in a casual linen shirt arrange water and spoons around a large serving platter of ceebu jën style rice, fish and vegetables, warm tomato-colored rice with a fish portion, carrots, cabbage and aubergine. Relaxed friendly conversation, normal natural hands, ochre plaster and leafy shade. No extravagant feast, no national flag, no caricature, no text. The serving scene is fictional and illustrative.
```
