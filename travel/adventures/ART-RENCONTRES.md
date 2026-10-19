# Illustrations des rencontres — Atlas des cultures

Créées le 19 octobre 2026 avec l’outil intégré `image_gen.imagegen`, en mode **génération**, un appel distinct pour chacun des 12 voyages. Aucun recours au CLI ni à une autre API.

Ces images mettent en scène des personnages fictifs. Ce sont des **illustrations narratives**, pas des photographies documentaires, des reconstitutions historiques ni des schémas techniques. Les vraies photographies et leurs crédits restent dans `travel-data.js` et `travel/CREDITS.md`.

## Direction artistique et préparation

Référence de style, inspectée avant génération : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/inde/ecole.webp`. Seuls sa gouache éditoriale adulte, sa lumière et sa palette crème, ocre, teal et terracotta ont servi de référence. Les personnes, vêtements et décors indiens n’étaient pas à transférer. Les thèmes ont été rapprochés de `journeys.js` et `travel-data.js` ; ces illustrations ne constituent pas les sources des informations culturelles du jeu.

Les 12 sorties originales sont conservées à leurs chemins de génération. La seule transformation effectuée pour le site est un redimensionnement proportionnel de 1536 × 1024 à **960 × 640**, suivi d’un encodage WebP de qualité **82**, avec ImageMagick `convert`. Aucune retouche créative par code.

## Contrôle

Chaque sortie a été inspectée visuellement : composition 3:2, personnages clairement adultes, scène correspondant au voyage, absence de texte, logo, filigrane, collage, costumes stéréotypés, acrobaties ou manipulation chaude. Les figures et objets sont des évocations illustratives ; se référer aux photographies sourcées pour leur observation documentaire.

Les 12 fichiers finaux ont été vérifiés avec `identify` : WebP, 960 × 640, sRGB.

## Fichiers et prompts complets

### japon

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-a36ee839-f007-4b50-a2e1-a5f9429bc0be.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/japon-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Japan. Two fictional Japanese adults: Aiko, a woman around 30 with short dark hair and a muted teal sweater, and her cousin Haru, a man around 30 with dark hair and an ochre shirt. They welcome the viewer while arranging a family New Year meal table in a modest contemporary home. Small ceramic bowls, neatly arranged vegetables and a modest tiered meal box on the table; ordinary dining chairs and a bright window. No ceremonial costumes. No knives or active cooking.
```

### coree

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-5743bd98-f5f9-4857-a639-15d258e636d7.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/coree-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: South Korea. Two fictional Korean adults: Joon, a man around 30 in a terracotta overshirt, and Mina, his woman neighbor around 45 in a teal cardigan, warmly ready to share a closed clear jar of red-orange kimchi next to an ordinary contemporary apartment kitchen counter. Cabbage and bowls nearby, but no elaborate rite, no folk costumes. A hospitable relaxed everyday moment, no active cutting or cooking.
```

### vietnam

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-7ec91cc3-6360-463d-84fc-4f4aa192eb2b.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/vietnam-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Vietnam, Bắc Ninh region. Two fictional Vietnamese adults: Linh, a woman around 30 in a simple terracotta blouse and trousers, and Hai, a man around 35 in a deep teal shirt and trousers. They warmly welcome a listener at the edge of a modest shaded community courtyard prepared for a Quan Họ meeting, with ordinary chairs and two pairs of people chatting quietly in the distant background. Contemporary everyday setting and clothes, no staged tourist show, no microphones, no invented sacred ceremony. The two main characters are not singing or wearing performance costume; they are making space for listening.
```

### indonesie

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-9f4dda06-beec-44cc-b825-4090ae8793f7.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/indonesie-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Indonesia, Java. Two fictional Indonesian adults: Dimas, a man around 28 in a simple teal shirt, and Sari, a woman artisan around 45 in a terracotta blouse, in a modest bright batik workshop. They welcome the viewer beside a wooden work table holding a loosely patterned folded batik textile, a stretched cloth frame and small unheated tools resting on the table. Dimas is observing while Sari points gently to an area of cloth. No hot wax handling, flame, pot on stove or active cutting. Contemporary ordinary artisan clothing; abstract unspecific plant-like textile pattern, not a claim to a named traditional design.
```

### vanuatu

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-44faf520-a819-466b-8062-d35d7b913b70.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/vanuatu-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Vanuatu. Two fictional Ni-Vanuatu adults: Lina, a woman around 30 with dark curly hair wearing a simple ochre blouse and teal skirt, and Toma, a man around 45 with short curly hair in a terracotta shirt and plain trousers. They welcome visitors at a modest shaded outdoor community space next to a smooth flat sand drawing patch. Only a discreet free-flowing abstract line in the sand, not a copied sacred/traditional diagram, not an instructional diagram. No costumes, masks or exotic props. Ordinary community benches and leafy shade, friendly quiet conversation.
```

### turquie

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-7c73714a-7e26-4f66-bd51-49f7c7e6f0e2.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/turquie-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Türkiye. Two fictional Turkish adults: Deniz, a man around 30 in a teal casual shirt, and Ece, a woman around 30 with dark shoulder-length hair in a terracotta cardigan. They welcome a friend into a modest contemporary living room, standing near a low table with a tray holding two small porcelain Turkish coffee cups and small glasses of water. Coffee service is already prepared. No active stove, no flame, no fortune-telling, no costume. A relaxed hospitable everyday moment with books, normal sofa and soft daylight.
```

### georgie

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-0a41ba2a-310b-4b21-9012-1c1ee3fa4f16.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/georgie-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Georgia in the Caucasus. Two fictional Georgian adults: Nino, a woman around 30 with dark tied-back hair and an ochre overshirt, and Giorgi, a man around 45 with short dark slightly graying hair, neat beard and a deep teal work shirt. They welcome a visitor in an ordinary pottery workshop near large unglazed terracotta kvevri jars. The central jar is ovoid, broad bodied, narrow open round neck, stable on the workshop floor. Clay tools rest on a low workbench. No alcohol, glasses, drinking, winemaking instruction or costumes; contemporary everyday work clothing.
```

### maroc

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-df573a35-876c-4c74-a1f6-dad0c22d904d.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/maroc-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Morocco, Marrakech. Two fictional Moroccan adults: Youssef, a man around 30 in a simple deep teal casual shirt and trousers, and Salma, a woman storyteller around 45 with dark hair and a modest terracotta everyday blouse and trousers. They chat warmly at the edge of a small listening circle at Jemaa el-Fna square, a few ordinary adults seated on simple stools, warm early evening. The square's low buildings and distant market bustle are softly suggested, no fantasy architecture, snake charmers, fire, costume spectacle or exotic props. A grounded contemporary scene about oral storytelling, the main two people centered.
```

### kenya

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-911f9da4-aeaf-4dc9-a24e-55a4b58b305c.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/kenya-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Kenya, Kakamega. Two fictional Black Kenyan adults: Amani, a man around 30 in a simple teal shirt, and Neema, a woman musician around 35 with short natural hair in a terracotta blouse and trousers. They welcome the visitor while arranging ordinary community chairs beside a few wooden cylindrical drums with taut skin heads laid safely on stands for an isukuti meeting. A green community courtyard with a modest contemporary building behind. No performance costume, no wildlife or safari imagery, no invented ritual, no dancing. Ordinary modern clothes and friendly practical preparations.
```

### mexique

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-71ddc27a-60fc-4f25-a25c-9ebe49f4f6bc.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/mexique-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Mexico. Two fictional Mexican adults: Mateo, a man around 28 in a teal casual shirt, and Luz, a woman cook around 45 with dark tied-back hair in a terracotta blouse and simple apron. They welcome the visitor beside a family meal table in a modest contemporary home kitchen. On the table are a covered basket of corn tortillas, a ceramic bowl of beans, maize cobs and simple dishes. No active cooking, knives, smoke or open flame, no folk costumes or tourist clichés. Friendly natural everyday family meal preparation.
```

### bresil

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-8a2a67e4-0013-4546-b148-f10df8c99e12.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/bresil-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Brazil. Two fictional Brazilian adults: Joana, a Black woman around 30 with tied-back natural curls wearing a teal casual T-shirt and cream trousers, and Paulo, a brown-skinned man around 40 with short hair in a terracotta casual shirt. They welcome a listener at the edge of a roda in an ordinary community courtyard. Nearby a berimbau rests on a safe support: one curved wooden bow, a single taut wire, and one round gourd resonator near its lower end, with a small woven shaker resting on a chair. A few adult community members sit on ordinary chairs in a loose circle in soft background. No combat, acrobatics or religious ritual, no carnival imagery, no costumes.
```

### perou

- Original conservé : `/workspace/scratch/94e8e14f152b/generated_images/exec-cd2dbdb6-f7ea-4991-bfbd-e1bc94b0b895.png`
- Fichier du site : `/workspace/scratch/94e8e14f152b/atlas-des-cultures/travel/adventures/art/perou-rencontre.webp`
- Mode : outil intégré, génération avec une référence de style.

```text
Use case: illustration-story.
Asset type: 3:2 landscape welcome illustration for a French cultural exploration game, Atlas des cultures.
Input image: STYLE REFERENCE ONLY. Match only its adult editorial hand-painted gouache / realistic painterly travel-journal finish, cream paper, ochre, deep teal and terracotta palette, warm natural light, quiet friendly mood. DO NOT transfer any Indian person, clothing, architecture, objects or courtyard into the new country scene. Create the entirely new specific scene described below, with two new fictional adult characters. Contemporary everyday clothes, natural faces and gestures, respectful ordinary people, no caricature or exotic tourism spectacle.
Composition: medium-wide, two clearly adult people and the meaningful objects centered so the illustration also works in a compact page banner. Single scene, 3:2 landscape.
Constraints: this is a fictional narrative illustration, never a documentary photo or factual reconstruction. No readable text, logos, watermark, collage, fantasy, religious stereotypes, dangerously handled objects. Both people have anatomically natural hands. Country: Peru, high Andes. Two fictional Peruvian adults: Elena, a woman around 30 with dark tied-back hair in a teal everyday sweater and trousers, and Miguel, a man around 45 in an ochre work jacket and trousers. They welcome a visitor on wide flat safe ground beside a low work table and coils of natural plant-fiber rope. The Q'eswachaka suspension bridge appears very small and far away in the background across the gorge. The people are well away from the river edge; no one on the bridge, no cliff work, no dangerous actions. Modest contemporary clothes, grounded Andean rural environment, no exotic costumes or sacred motifs.
```


