/* Généré depuis travel/adventures/*.json. Escales initiales : 19 octobre 2026 ; cinq ajouts : 1er novembre 2026. */
const WORLD_ADVENTURES = {
  "japon": {
    "title": "Une table pour un ami",
    "mission": "Prépare avec Aiko un repas pour Haru ou Nao : découvre sa demande, compose sa table et regarde sa réaction.",
    "intro": "Aiko termine la cuisine. Haru et Nao viendront partager un repas ; chacun a une petite envie particulière. Tu vas choisir un invité, disposer les plats pour lui faire plaisir, puis décider comment présenter votre table.",
    "places": [
      {
        "name": "La cuisine d’Aiko",
        "description": "Aiko termine les préparatifs. Trois cartes sans légende attendent près des bols.",
        "shortName": "Cuisine"
      },
      {
        "name": "Le coin des découvertes",
        "description": "Une photographie et deux notes permettent de comprendre ce que les cartes racontent.",
        "shortName": "Repères"
      },
      {
        "name": "La table des invités",
        "description": "Haru prépare les places des invités. Il hésite encore sur la façon de présenter le repas.",
        "shortName": "Table"
      }
    ],
    "characters": [
      {
        "name": "Aiko",
        "role": "prépare le repas familial",
        "greeting": "Bienvenue ! Haru et Nao arrivent bientôt. Tu peux choisir un invité et composer son repas sur notre petite table. Si tu veux en savoir plus, la photo et les notes restent au coin des découvertes.",
        "questions": [
          {
            "question": "Pourquoi ces ingrédients ?",
            "answer": "J’ai choisi ce que j’avais sous la main pour notre repas. Le repère documentaire parle aussi de produits naturels et locaux. Ma liste, elle, appartient à cette histoire."
          },
          {
            "question": "Qu’est-ce que je peux préparer ?",
            "answer": "Pour commencer, aide-moi à distinguer la photo, la note sur les ingrédients et celle sur l’apprentissage. Après, tu choisiras la présentation avec Haru."
          }
        ]
      },
      {
        "name": "Haru",
        "role": "cousin d’Aiko, chargé de l’accueil",
        "greeting": "Tu peux nous préparer un petit repas à l’écran. Chaque plat que tu choisis apparaîtra sur la table. Commence par choisir pour qui tu cuisines.",
        "questions": [
          {
            "question": "Qui t’a appris à cuisiner ?",
            "answer": "Dans notre famille fictive, j’ai surtout aidé ma tante. Je reconnais ses bols avant de reconnaître ses recettes. Pour ce soir, Aiko m’a confié la table : c’est plus prudent !"
          },
          {
            "question": "On doit tout expliquer avant de manger ?",
            "answer": "Non. On peut poser les cartes à côté des plats, ou ouvrir la conversation une fois tout le monde installé. Choisis ce qui te semble le plus accueillant."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les boîtes",
        "text": "La photographie montre deux boîtes ouvertes, divisées en compartiments remplis de mets."
      },
      {
        "label": "La présentation",
        "text": "Des préparations de couleurs et de formes différentes sont disposées côte à côte. Des baguettes emballées sont visibles près des boîtes."
      },
      {
        "label": "La légende",
        "text": "Les crédits identifient de l’osechi présenté dans des boîtes jūbako. Aiko et Haru sont des personnages inventés ; cette photo ne montre pas leur repas."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un repas en compartiments",
        "text": "La photo documente la présentation de mets du Nouvel An dans des boîtes jūbako. Elle ne fournit pas la recette de chaque préparation.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Le choix des ingrédients",
        "text": "Le washoku réunit des savoirs alimentaires associés au respect de la nature. La notice souligne les ingrédients naturels et locaux.",
        "source": "https://ich.unesco.org/fr/RL/le-washoku-traditions-culinaires-des-japonais-en-particulier-pour-feter-le-nouvel-an-00869"
      },
      {
        "id": "partage",
        "title": "Des savoirs autour de la table",
        "text": "Les connaissances culinaires se transmettent notamment au foyer et lors des repas partagés. L’enseignement et les associations contribuent aussi à cette transmission.",
        "source": "https://ich.unesco.org/fr/RL/le-washoku-traditions-culinaires-des-japonais-en-particulier-pour-feter-le-nouvel-an-00869"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Observer la présentation du repas"
        },
        {
          "id": "b",
          "text": "Comprendre le choix des ingrédients"
        },
        {
          "id": "c",
          "text": "Découvrir comment les savoirs se transmettent"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie des boîtes",
          "text": "Deux boîtes ouvertes et leurs compartiments : un document à observer.",
          "correct": "a",
          "question": "Comment les mets sont-ils présentés sur la photo ?",
          "answers": [
            {
              "id": "a",
              "text": "Dans des boîtes à compartiments"
            },
            {
              "id": "b",
              "text": "Dans une grande marmite"
            },
            {
              "id": "c",
              "text": "Sur une seule brochette"
            }
          ],
          "explanation": "La photo documente la présentation de mets du Nouvel An dans des boîtes jūbako. Elle ne fournit pas la recette de chaque préparation."
        },
        {
          "id": "geste",
          "name": "La note sur les ingrédients",
          "text": "Ce document relie les aliments choisis à la nature et aux ressources locales.",
          "correct": "b",
          "question": "Que vas-tu mettre en avant dans le choix des ingrédients ?",
          "answers": [
            {
              "id": "a",
              "text": "Un menu identique en toute saison"
            },
            {
              "id": "b",
              "text": "Leur lien avec la nature et les produits locaux"
            },
            {
              "id": "c",
              "text": "Seulement la décoration des assiettes"
            }
          ],
          "explanation": "Le washoku réunit des savoirs alimentaires associés au respect de la nature. La notice souligne les ingrédients naturels et locaux."
        },
        {
          "id": "partage",
          "name": "La note sur l’apprentissage",
          "text": "Ce document parle des personnes et des occasions qui permettent d’apprendre.",
          "correct": "c",
          "question": "Qui peut transmettre ces savoirs culinaires ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement les chefs de restaurant"
            },
            {
              "id": "b",
              "text": "Seulement les auteurs de recettes"
            },
            {
              "id": "c",
              "text": "Les familles, mais aussi l’enseignement et les associations"
            }
          ],
          "explanation": "Les connaissances culinaires se transmettent notamment au foyer et lors des repas partagés. L’enseignement et les associations contribuent aussi à cette transmission."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Présenter le repas avec Aiko",
        "description": "Rejoindre Aiko et expliquer les plats que tu as choisis.",
        "reply": "Aiko te propose de présenter votre table ensemble.",
        "place": 0,
        "preparationTitle": "Choisir le début de ce moment",
        "preparationPrompt": "Par quoi commences-tu ?",
        "options": [
          {
            "id": "un",
            "label": "Montrer les ingrédients choisis",
            "reply": "D’accord, nous commencerons ainsi. Le reste de ta création restera disponible.",
            "endingText": "Vous commencez par montrer les ingrédients choisis. La rencontre se poursuit autour de ce que tu as préparé.",
            "endingReply": "Merci. Nous avons un point de départ à partager."
          },
          {
            "id": "deux",
            "label": "Présenter la demande de l’invité",
            "reply": "Oui, cela donnera une autre entrée dans ce que tu as préparé.",
            "endingText": "Ton choix — présenter la demande de l’invité — ouvre une conversation. Les autres personnes découvrent à leur tour la création et les documents.",
            "endingReply": "Ta proposition donne aux autres une place dans cet échange."
          }
        ],
        "endingTitle": "Un moment préparé ensemble"
      },
      {
        "id": "rencontre",
        "title": "S’asseoir avec l’invité",
        "description": "Partager un moment autour du repas que tu as composé.",
        "reply": "Votre invité est prêt à prendre place.",
        "place": 2,
        "preparationTitle": "Choisir le début de ce moment",
        "preparationPrompt": "Comment ouvres-tu ce moment ?",
        "options": [
          {
            "id": "un",
            "label": "Demander quel plat attire son regard",
            "reply": "D’accord, nous commencerons ainsi. Le reste de ta création restera disponible.",
            "endingText": "Vous commencez par demander quel plat attire son regard. La rencontre se poursuit autour de ce que tu as préparé.",
            "endingReply": "Merci. Nous avons un point de départ à partager."
          },
          {
            "id": "deux",
            "label": "Laisser l’invité raconter un souvenir de repas",
            "reply": "Oui, cela donnera une autre entrée dans ce que tu as préparé.",
            "endingText": "Ton choix — laisser l’invité raconter un souvenir de repas — ouvre une conversation. Les autres personnes découvrent à leur tour la création et les documents.",
            "endingReply": "Ta proposition donne aux autres une place dans cet échange."
          }
        ],
        "endingTitle": "Une création à partager"
      }
    ],
    "practice": {
      "title": "Composer le repas",
      "intro": "Aiko te propose de composer un menu imaginaire. Choisis un ingrédient, une présentation et une invitation.",
      "steps": [
        {
          "title": "Un ingrédient de départ",
          "text": "Imagine ce que tu aimerais voir au centre de ton menu.",
          "options": [
            {
              "label": "Une carotte",
              "reply": "Aiko : Une touche orange, c’est noté. Nous pouvons imaginer le reste autour d’elle."
            },
            {
              "label": "Une courge",
              "reply": "Aiko : J’imagine une belle couleur dorée. Garde cette idée pour ton menu."
            }
          ]
        },
        {
          "title": "Une présentation",
          "text": "Choisis librement un contenant pour ton dessin ou ton menu virtuel.",
          "options": [
            {
              "label": "Un bol",
              "reply": "Aiko : Ton idée tient dans un bol. Je lui laisse une place sur la carte."
            },
            {
              "label": "Une grande assiette",
              "reply": "Aiko : Tu auras de la place pour dessiner plusieurs éléments côte à côte."
            }
          ]
        },
        {
          "title": "Une invitation",
          "text": "Ajoute un petit mot personnel, sans lui donner une signification traditionnelle.",
          "options": [
            {
              "label": "À découvrir ensemble",
              "reply": "Aiko : J’aime cette invitation. Ton menu donne envie de poser des questions."
            },
            {
              "label": "Mon idée du jour",
              "reply": "Aiko : C’est bien ton invention. Nous ne la présenterons pas comme une recette héritée."
            }
          ]
        }
      ],
      "finishText": "Ton menu imaginaire est prêt. Tu peux aussi retrouver la soupe miso dans le carnet de recettes.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/le-washoku-traditions-culinaires-des-japonais-en-particulier-pour-feter-le-nouvel-an-00869",
      "sourceLabel": "Repère culturel : le washoku sur le site de l’UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/le-washoku-traditions-culinaires-des-japonais-en-particulier-pour-feter-le-nouvel-an-00869",
        "label": "UNESCO · Le washoku",
        "supports": "Nature et ingrédients locaux ; repas du Nouvel An ; transmission des connaissances culinaires au foyer et par l’enseignement."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Osechi.jpg",
        "label": "Photographie · Osechi, Akihito Kurono, CC0",
        "supports": "Identification de l’osechi et des boîtes jūbako ; auteur et droits de la photographie. Les personnages et le menu du jeu sont fictifs."
      },
      {
        "label": "MAFF · Traditional Dietary Cultures of the Japanese",
        "url": "https://www.maff.go.jp/e/data/publish/attach/pdf/index-20.pdf",
        "supports": "Place du riz, de la soupe et des accompagnements ; le menu du jeu reste une scène simplifiée et fictive."
      }
    ],
    "guide": {
      "result": "Voir le repas que tu as composé et garder ta table dans tes créations.",
      "finish": "Servir et partager le repas →"
    }
  },
  "coree": {
    "title": "Une invitation pour Mina",
    "mission": "Aide Joon à accueillir Mina et à lui raconter la préparation et le partage du kimchi.",
    "intro": "Mina arrive bientôt. Joon veut lui présenter le kimjang et préparer une petite attention pour elle. Tu vas découvrir ce que l’on prépare ensemble et ce que l’on partage.",
    "places": [
      {
        "name": "La table d’accueil",
        "description": "Joon a mis un bocal à part pour l’histoire. Il cherche les bonnes cartes pour accueillir les voisins.",
        "shortName": "Accueil"
      },
      {
        "name": "Le coin des documents",
        "description": "La photographie, une note de calendrier et une note sur les échanges attendent leurs légendes.",
        "shortName": "Documents"
      },
      {
        "name": "Chez Mina",
        "description": "Mina garde des chaises pour la visite. Elle aimerait entendre ce que tu as découvert.",
        "shortName": "Chez Mina"
      }
    ],
    "characters": [
      {
        "name": "Joon",
        "role": "participe aux préparatifs du kimjang",
        "greeting": "Bienvenue ! Aide Joon à accueillir Mina et à lui raconter la préparation et le partage du kimchi. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Pourquoi parler d’un calendrier ?",
            "answer": "Le dossier explique que le kimjang suit un cycle annuel. La préparation collective de grandes quantités pour l’hiver se situe à la fin de l’automne. La note t’aidera à distinguer ce repère de la photo."
          },
          {
            "question": "Je dois préparer du kimchi ?",
            "answer": "Non, tout se passe dans l’histoire. Aujourd’hui, tu aides à classer les documents et à accueillir les voisins. Si tu veux, nous inventerons aussi un petit message de partage."
          }
        ]
      },
      {
        "name": "Mina",
        "role": "voisine de Joon",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : un bocal virtuel à partager. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Ton kimchi est le même que celui de Joon ?",
            "answer": "Dans notre histoire, nous aimons comparer nos versions. Le repère documentaire confirme que les méthodes et les ingrédients varient selon les régions et les familles."
          },
          {
            "question": "Tu préfères une visite ou un petit panneau ?",
            "answer": "Les deux me plaisent. Sur un panneau, on peut prendre le temps de lire. En visite, on peut poser des questions tout de suite. Décide avec Joon ; je vous suis."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les légumes",
        "text": "De grands récipients contiennent notamment des choux. Ils occupent une large partie de la table."
      },
      {
        "label": "Les récipients",
        "text": "De nombreux bols et bassines, de tailles différentes, sont disposés côte à côte. On distingue plusieurs préparations et ingrédients."
      },
      {
        "label": "Les personnes",
        "text": "Plusieurs personnes se tiennent autour des tables. Rien ne permet de les identifier comme Joon ou Mina : les deux personnages du jeu sont inventés."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Une table de préparation",
        "text": "La photographie montre une préparation de kimchi en Corée du Sud. Elle permet d’observer la disposition des récipients, sans fournir de protocole de fabrication.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Un cycle annuel",
        "text": "Les préparatifs du kimjang s’étendent sur l’année. À la fin de l’automne, des communautés préparent ensemble une grande quantité de kimchi pour l’hiver.",
        "source": "https://ich.unesco.org/fr/RL/le-kimjang-preparation-et-partage-du-kimchi-en-republique-de-coree-00881"
      },
      {
        "id": "partage",
        "title": "Des échanges entre foyers",
        "text": "Le kimjang comprend le partage du kimchi. Les échanges entre familles font aussi circuler des idées et des savoir-faire.",
        "source": "https://ich.unesco.org/fr/RL/le-kimjang-preparation-et-partage-du-kimchi-en-republique-de-coree-00881"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Observer une préparation de kimchi"
        },
        {
          "id": "b",
          "text": "Situer les préparatifs dans l’année"
        },
        {
          "id": "c",
          "text": "Comprendre ce qui circule entre les foyers"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie des tables",
          "text": "Des personnes, des légumes et de nombreux récipients sont réunis dans l’image.",
          "correct": "a",
          "question": "Que préparent les personnes sur la photographie ?",
          "answers": [
            {
              "id": "a",
              "text": "Du kimchi"
            },
            {
              "id": "b",
              "text": "Des boîtes de thé"
            },
            {
              "id": "c",
              "text": "Des pâtes à pain"
            }
          ],
          "explanation": "La photographie montre une préparation de kimchi en Corée du Sud. Elle permet d’observer la disposition des récipients, sans fournir de protocole de fabrication."
        },
        {
          "id": "geste",
          "name": "La note de calendrier",
          "text": "Ce document suit les préparatifs au fil des saisons.",
          "correct": "b",
          "question": "À quel moment prépare-t-on ensemble les grandes réserves pour l’hiver ?",
          "answers": [
            {
              "id": "a",
              "text": "Au début de l’été"
            },
            {
              "id": "b",
              "text": "À la fin de l’automne"
            },
            {
              "id": "c",
              "text": "Uniquement le jour du Nouvel An"
            }
          ],
          "explanation": "Les préparatifs du kimjang s’étendent sur l’année. À la fin de l’automne, des communautés préparent ensemble une grande quantité de kimchi pour l’hiver."
        },
        {
          "id": "partage",
          "name": "La note sur les échanges",
          "text": "Ce document porte sur les relations entre les familles.",
          "correct": "c",
          "question": "Que partage-t-on entre foyers lors du kimjang ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement des récipients vides"
            },
            {
              "id": "b",
              "text": "Seulement une liste d’ingrédients"
            },
            {
              "id": "c",
              "text": "Du kimchi et des savoir-faire"
            }
          ],
          "explanation": "Le kimjang comprend le partage du kimchi. Les échanges entre familles font aussi circuler des idées et des savoir-faire."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Accueillir autour du panneau",
        "description": "Inviter Mina et les voisins à découvrir les trois documents à la table d’accueil.",
        "reply": "Joon : Je dégage une place pour les cartes. Avec laquelle veux-tu accueillir les voisins ?",
        "place": 0,
        "preparationTitle": "Le premier regard",
        "preparationPrompt": "Quel document placeras-tu au début du panneau ?",
        "options": [
          {
            "id": "un",
            "label": "La photographie des tables",
            "reply": "Joon : On pourra commencer par ce que chacun remarque dans l’image.",
            "endingText": "La photo ouvre le panneau. Mina s’approche avec les premiers voisins. Tu leur montres les détails que tu as observés, puis Joon présente les deux autres documents.",
            "endingReply": "Joon : Merci ! Nous avions les cartes ; il nous manquait une bonne façon de commencer."
          },
          {
            "id": "deux",
            "label": "La note de calendrier",
            "reply": "Joon : D’accord. La photographie viendra ensuite illustrer notre présentation.",
            "endingText": "Les visiteurs commencent par la note de calendrier. Mina demande à Joon quel document l’a le plus surpris. La question lance une discussion autour du panneau que vous avez préparé.",
            "endingReply": "Joon : Les voisins prennent le temps de regarder. Viens, on leur laisse de la place."
          }
        ],
        "endingTitle": "Les voisins autour du panneau"
      },
      {
        "id": "rencontre",
        "title": "Rendre visite à Mina",
        "description": "Accompagner Joon dans la scène de livraison et prendre le temps d’échanger.",
        "reply": "Mina : Entrez donc ! Je vous ai gardé deux places. Par quoi voulez-vous commencer ?",
        "place": 2,
        "preparationTitle": "Un début de visite",
        "preparationPrompt": "Quelle attention proposes-tu pour cette rencontre fictive ?",
        "options": [
          {
            "id": "un",
            "label": "Apporter un mot de remerciement",
            "reply": "Mina : Merci. Je vais le poser ici, pour pouvoir le relire après votre départ.",
            "endingText": "Joon apporte le bocal prévu dans l’histoire et tu remets le petit mot à Mina. Elle vous invite à vous asseoir. Les documents sont désormais classés ; vous avez le temps de discuter.",
            "endingReply": "Mina : Joon m’avait promis une visite rapide. Je suis contente que vous restiez un moment."
          },
          {
            "id": "deux",
            "label": "Préparer une question sur un souvenir",
            "reply": "Mina : J’en ai un en tête. Laissez-moi d’abord vous installer.",
            "endingText": "Chez Mina, tu demandes un souvenir de préparation partagée. Elle raconte un épisode de cette famille imaginaire, et Joon ajoute le détail qu’elle avait oublié. Le bocal trouve sa destinataire.",
            "endingReply": "Mina : La prochaine fois, Joon racontera sa version en premier. Merci d’être venus tous les deux."
          }
        ],
        "endingTitle": "Un moment chez Mina"
      }
    ],
    "practice": {
      "title": "Un bocal virtuel à partager",
      "intro": "Prépare avec Joon une invitation pour Mina : un petit mot, une question et un rendez-vous.",
      "steps": [
        {
          "title": "Le petit mot",
          "text": "Quel message glisserais-tu dans l’invitation virtuelle ?",
          "options": [
            {
              "label": "Merci pour ton aide",
              "reply": "Joon : Je le note. Ton invitation commence par un remerciement."
            },
            {
              "label": "Une part pour toi",
              "reply": "Joon : C’est simple et chaleureux. Mina comprendra que nous avons pensé à elle."
            }
          ]
        },
        {
          "title": "La conversation",
          "text": "Quelle question aimerais-tu poser pendant la visite ?",
          "options": [
            {
              "label": "Quel souvenir aimerais-tu raconter ?",
              "reply": "Mina : Je choisirai une histoire de notre petit groupe. Tu pourras écouter sans devoir connaître une recette."
            },
            {
              "label": "Avec qui aimerais-tu partager ce moment ?",
              "reply": "Mina : Je demanderai à une amie si elle veut nous rejoindre. Elle sera libre de venir."
            }
          ]
        },
        {
          "title": "Le rendez-vous",
          "text": "Dans la fiction, comment proposes-tu de remettre le bocal ?",
          "options": [
            {
              "label": "Rendre visite à Mina avec Joon",
              "reply": "Joon : Alors nous irons ensemble. Je pourrai te présenter à elle."
            },
            {
              "label": "Inviter Mina à nous rejoindre",
              "reply": "Mina : Je vous rejoindrai à la table d’accueil. Gardez-moi une place."
            }
          ]
        }
      ],
      "finishText": "Ton invitation est prête. Tu pourras retrouver tes trois choix dans cette activité.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/le-kimjang-preparation-et-partage-du-kimchi-en-republique-de-coree-00881",
      "sourceLabel": "Repère culturel : le kimjang sur le site de l’UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/le-kimjang-preparation-et-partage-du-kimchi-en-republique-de-coree-00881",
        "label": "UNESCO · Le kimjang",
        "supports": "Cycle annuel ; préparation collective de fin d’automne ; partage entre foyers ; diversité des méthodes familiales et régionales."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Gimjang-Preparation_for_making_kimchi-01.jpg",
        "label": "Photographie · Caroline Knox, CC BY-SA 3.0",
        "supports": "Identification d’une préparation de kimchi en Corée du Sud ; auteur et droits. Joon, Mina et la visite sont fictifs."
      }
    ],
    "guide": {
      "result": "Découvrir l’accueil que tu as préparé pour Mina.",
      "finish": "Accueillir Mina →"
    }
  },
  "vietnam": {
    "title": "Préparer une rencontre chantée",
    "mission": "Aide Linh à accueillir les auditeurs et à leur faire découvrir le dialogue des chants Quan Họ.",
    "intro": "Linh et Hai installent les sièges avant une rencontre chantée. Quelques visiteurs découvrent le Quan Họ : tu vas chercher avec eux ce qu’il faut écouter, puis choisir comment lancer la rencontre.",
    "places": [
      {
        "name": "L’accueil des auditeurs",
        "description": "Linh dispose quelques cartes près de l’entrée. Elle cherche une présentation courte pour les nouveaux venus.",
        "shortName": "Accueil"
      },
      {
        "name": "La table d’écoute",
        "description": "Une photographie et deux notes accompagnent l’accès au documentaire officiel.",
        "shortName": "Écoute"
      },
      {
        "name": "La cour de rencontre",
        "description": "Hai garde une place où l’on pourra échanger avant de rejoindre les autres chanteurs.",
        "shortName": "Cour"
      }
    ],
    "characters": [
      {
        "name": "Linh",
        "role": "chanteuse, accompagnée d’une partenaire dans la fiction",
        "greeting": "Bienvenue ! Aide Linh à accueillir les auditeurs et à leur faire découvrir le dialogue des chants Quan Họ. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Qui va répondre à ton groupe ?",
            "answer": "Dans notre scène, Hai et son partenaire. La notice UNESCO décrit deux chanteuses auxquelles répondent deux chanteurs d’un autre village, sur des mélodies proches avec d’autres paroles."
          },
          {
            "question": "Je peux essayer de répondre ?",
            "answer": "Nous avons prévu un petit jeu de répliques françaises inventées. Ce n’est pas du Quan Họ. Pour découvrir les vrais chants, tu peux lancer le documentaire officiel depuis l’espace d’écoute."
          }
        ]
      },
      {
        "name": "Hai",
        "role": "chanteur du groupe partenaire de Linh",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : à toi de répondre. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Vous chantez seulement entre vous ?",
            "answer": "Aujourd’hui, nos partenaires vont nous rejoindre. Pour le contexte culturel, la note explique que le Quan Họ entretient aussi des relations entre villages. Notre petite rencontre reste une fiction."
          },
          {
            "question": "Qu’est-ce que je peux écouter d’abord ?",
            "answer": "Tu peux chercher un passage où une voix ou un groupe répond à un autre, puis noter ce que tu remarques. Il n’est pas nécessaire de tout reconnaître pour commencer à écouter."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Le groupe",
        "text": "Quatre femmes se tiennent côte à côte sous un pavillon. Deux grands chapeaux ronds sont visibles au premier plan."
      },
      {
        "label": "Le lieu",
        "text": "On distingue des colonnes, un sol carrelé et de l’eau derrière les chanteuses. Les crédits situent l’ensemble au temple Đền Đô, dans la province de Bắc Ninh."
      },
      {
        "label": "Les limites de l’image",
        "text": "La photographie ne donne pas le son et ne montre pas à elle seule tout un échange entre groupes. Les personnes photographiées ne sont pas Linh et Hai."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un ensemble photographié",
        "text": "L’image documente un ensemble de Quan Họ à Đền Đô. Elle renseigne sur cette scène visible, sans résumer toutes les formes de la pratique.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Chanter et répondre",
        "text": "La forme décrite par l’UNESCO alterne des couplets de deux femmes et de deux hommes. Les mélodies sont similaires, les paroles diffèrent.",
        "source": "https://ich.unesco.org/fr/RL/les-chants-populaires-quan-ho-de-bac-ninh-00183"
      },
      {
        "id": "partage",
        "title": "Des villages en relation",
        "text": "Dans les régions de Bắc Ninh et Bắc Giang décrites par le dossier, les chants contribuent aux liens d’amitié entre communautés.",
        "source": "https://ich.unesco.org/fr/RL/les-chants-populaires-quan-ho-de-bac-ninh-00183"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Observer une scène photographiée"
        },
        {
          "id": "b",
          "text": "Comprendre le principe de réponse"
        },
        {
          "id": "c",
          "text": "Découvrir les liens entre communautés"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie du pavillon",
          "text": "Un groupe visible, un lieu précis et des crédits à consulter.",
          "correct": "a",
          "question": "Quel moment la photographie documente-t-elle ?",
          "answers": [
            {
              "id": "a",
              "text": "Un ensemble de Quan Họ à Đền Đô"
            },
            {
              "id": "b",
              "text": "Un atelier de fabrication d’instruments"
            },
            {
              "id": "c",
              "text": "Une séance de danse sans musiciens"
            }
          ],
          "explanation": "L’image documente un ensemble de Quan Họ à Đền Đô. Elle renseigne sur cette scène visible, sans résumer toutes les formes de la pratique."
        },
        {
          "id": "geste",
          "name": "La note sur l’alternance",
          "text": "Un document consacré à l’organisation des couplets entre les groupes.",
          "correct": "b",
          "question": "Que proposes-tu aux visiteurs de repérer à l’écoute ?",
          "answers": [
            {
              "id": "a",
              "text": "Un long solo sans réponse"
            },
            {
              "id": "b",
              "text": "L’alternance de couplets qui se répondent"
            },
            {
              "id": "c",
              "text": "Un texte parlé sans mélodie"
            }
          ],
          "explanation": "La forme décrite par l’UNESCO alterne des couplets de deux femmes et de deux hommes. Les mélodies sont similaires, les paroles diffèrent."
        },
        {
          "id": "partage",
          "name": "La note sur les villages",
          "text": "Un document consacré aux relations qui entourent le chant.",
          "correct": "c",
          "question": "Quel lien ces chants contribuent-ils à entretenir ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement la compétition entre chanteurs"
            },
            {
              "id": "b",
              "text": "Seulement les liens d’une même famille"
            },
            {
              "id": "c",
              "text": "L’amitié entre communautés de villages"
            }
          ],
          "explanation": "Dans les régions de Bắc Ninh et Bắc Giang décrites par le dossier, les chants contribuent aux liens d’amitié entre communautés."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Installer un petit espace d’écoute",
        "description": "Accueillir les auditeurs avec les documents et l’accès au documentaire officiel.",
        "reply": "Linh : Les cartes sont prêtes. Quel point d’entrée veux-tu proposer aux nouveaux venus ?",
        "place": 0,
        "preparationTitle": "Une porte d’entrée",
        "preparationPrompt": "Comment souhaites-tu présenter l’espace d’écoute ?",
        "options": [
          {
            "id": "un",
            "label": "Inviter à observer la photographie",
            "reply": "Linh : Je la pose en premier. Chacun pourra dire ce qu’il remarque avant d’écouter.",
            "endingText": "Les premiers auditeurs se rassemblent devant la photographie. Tu présentes les crédits, puis Linh indique les deux notes et l’accès au documentaire. Hai vient chercher le groupe quand les autres chanteurs sont prêts.",
            "endingReply": "Linh : Merci. Ils savent maintenant par où commencer, et nous avons encore du temps pour leurs questions."
          },
          {
            "id": "deux",
            "label": "Proposer de repérer une réponse chantée",
            "reply": "Linh : Je garde la consigne très courte. Chacun choisira ensuite ce qu’il veut réécouter.",
            "endingText": "Tu invites les auditeurs à chercher un passage de réponse dans le documentaire. Les cartes restent à leur disposition. Quand Hai vous rejoint, certains ont déjà envie de comparer leurs observations.",
            "endingReply": "Linh : Les questions arrivent toutes seules. L’espace d’écoute peut rester ouvert pendant notre rencontre."
          }
        ],
        "endingTitle": "L’écoute peut commencer"
      },
      {
        "id": "rencontre",
        "title": "Préparer une conversation avec les chanteurs",
        "description": "Garder une question pour Hai et Linh avant de rejoindre leurs partenaires.",
        "reply": "Hai : Avec plaisir. Préparons une première question, puis nous laisserons aussi les auditeurs parler.",
        "place": 2,
        "preparationTitle": "La première question",
        "preparationPrompt": "Par quoi veux-tu ouvrir la rencontre fictive ?",
        "options": [
          {
            "id": "un",
            "label": "Demander un souvenir de rencontre",
            "reply": "Hai : J’en choisirai un de notre histoire. Linh se souviendra peut-être d’un autre détail.",
            "endingText": "Dans la cour, Hai raconte un souvenir inventé de leur groupe. Linh sourit et complète son récit. Les auditeurs posent quelques questions, puis les deux personnages rejoignent leurs partenaires pour la rencontre.",
            "endingReply": "Hai : Merci d’avoir préparé ce moment. Tu peux rester avec les auditeurs ; nous nous reverrons après."
          },
          {
            "id": "deux",
            "label": "Partager ce qu’on a remarqué à l’écoute",
            "reply": "Hai : Tu n’as pas besoin de trouver un terme savant. Raconte simplement ce que tu as entendu.",
            "endingText": "Tu proposes aux auditeurs de décrire un détail écouté. Les observations sont différentes, et Linh prend le temps d’y répondre. Les documents vous ont aidés à poser des questions sans remplacer la voix des chanteurs.",
            "endingReply": "Hai : J’aimerais entendre la suite après la rencontre. Gardons cette question pour tout à l’heure."
          }
        ],
        "endingTitle": "Une question pour les chanteurs"
      }
    ],
    "practice": {
      "title": "À toi de répondre",
      "intro": "Compose avec Linh et Hai un petit dialogue inventé en français : un appel, une réponse, puis un au revoir.",
      "steps": [
        {
          "title": "Choisir un appel",
          "text": "Quelle phrase inventée veux-tu adresser aux personnages ?",
          "options": [
            {
              "label": "Qui vient près de la rivière ?",
              "reply": "Linh : Nous avons entendu ton appel. Garde ta phrase : elle donne un lieu à notre petit dialogue."
            },
            {
              "label": "Qui attend près du jardin ?",
              "reply": "Linh : Ton appel nous invite à imaginer un jardin. Voyons maintenant qui va répondre."
            }
          ]
        },
        {
          "title": "Choisir une réponse",
          "text": "Imagine la réponse de l’autre groupe. Elle n’a pas à répéter les mêmes mots.",
          "options": [
            {
              "label": "Nous venons écouter.",
              "reply": "Hai : Ton second groupe arrive pour écouter. Les deux répliques ouvrent une rencontre."
            },
            {
              "label": "Nous venons vous saluer.",
              "reply": "Hai : Ton second groupe répond par un salut. Ton dialogue prend un ton amical."
            }
          ]
        },
        {
          "title": "Terminer ton dialogue",
          "text": "Choisis une dernière phrase pour cette invention en français.",
          "options": [
            {
              "label": "Restons un instant.",
              "reply": "Linh : Tu laisses la rencontre se prolonger. Nous pouvons imaginer que les personnages s’assoient pour parler."
            },
            {
              "label": "À bientôt, les amis.",
              "reply": "Hai : Tu choisis de conclure. Les personnages se quittent avec l’envie de se revoir."
            }
          ]
        }
      ],
      "finishText": "Ton dialogue est prêt. Le documentaire officiel te permet aussi d’écouter le véritable Quan Họ.",
      "sourceUrl": "https://ich.unesco.org/fr/video/1177",
      "sourceLabel": "Écouter le documentaire officiel UNESCO sur le Quan Họ"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/les-chants-populaires-quan-ho-de-bac-ninh-00183",
        "label": "UNESCO · Les chants populaires Quan Họ de Bắc Ninh",
        "supports": "Alternance des groupes ; mélodies apparentées et paroles différentes ; liens entre communautés de Bắc Ninh et Bắc Giang dans le dossier patrimonial."
      },
      {
        "url": "https://ich.unesco.org/fr/video/1177",
        "label": "Documentaire officiel · © 2008 Vietnam Institute of Culture and Arts Studies",
        "supports": "Accès à des exemples enregistrés et à leur présentation documentaire ; les répliques françaises du jeu sont des créations distinctes."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Quan_Ho-Ensemble.JPG",
        "label": "Photographie · Chrisvomberg, CC BY-SA 3.0",
        "supports": "Identification de l’ensemble et du temple Đền Đô ; auteur et droits. Linh, Hai et la rencontre sont fictifs."
      }
    ],
    "guide": {
      "result": "Voir comment commence la rencontre chantée.",
      "finish": "Accueillir les auditeurs →"
    }
  },
  "indonesie": {
    "title": "Ton motif à l’atelier de batik",
    "mission": "Découvre avec Dimas comment fonctionne le batik, crée un motif si tu le souhaites, puis prépare sa présentation avec Sari.",
    "intro": "Dimas termine une étoffe et Sari attend les visiteurs de l’atelier. Avant de les accueillir, ils te proposent de regarder le travail de la cire et d’essayer un motif personnel à l’écran.",
    "places": [
      {
        "name": "La table d’accueil",
        "description": "Dimas rassemble les cartes. Il veut expliquer le travail de l’atelier sans réduire le batik à un joli dessin.",
        "shortName": "Accueil"
      },
      {
        "name": "Le coin des échantillons",
        "description": "Une photographie et deux fiches permettent de distinguer le geste technique et les usages.",
        "shortName": "Échantillons"
      },
      {
        "name": "La petite galerie",
        "description": "Sari prépare la visite. Elle garde de la place pour les questions sur les étoffes.",
        "shortName": "Galerie"
      }
    ],
    "characters": [
      {
        "name": "Dimas",
        "role": "apprend dans l’atelier de Sari",
        "greeting": "Bienvenue ! Découvre avec Dimas comment fonctionne le batik, crée un motif si tu le souhaites, puis prépare sa présentation avec Sari. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "À quoi sert la cire ?",
            "answer": "Elle empêche certaines zones de prendre la teinture. C’est la réserve. Dans le jeu, nous pouvons l’imaginer avec du papier blanc et une couleur, sans manipuler les outils de l’atelier."
          },
          {
            "question": "Tu sais déjà lire tous les motifs ?",
            "answer": "Non. Pour une étoffe précise, je demande à Sari. Je préfère garder ma question plutôt que lui inventer une réponse. Aujourd’hui, j’apprends aussi à présenter ce que je sais vraiment."
          }
        ]
      },
      {
        "name": "Sari",
        "role": "artisane de batik, accompagne Dimas",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : ton atelier de motifs. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Le batik se porte seulement pour les fêtes ?",
            "answer": "Non. Le dossier décrit des usages quotidiens et des moments particuliers de la vie. Les motifs et leurs significations sont divers ; une étoffe précise demande son propre contexte."
          },
          {
            "question": "Comment participer à la visite ?",
            "answer": "Tu peux présenter les trois documents ou commencer par une question. Si tu veux essayer une idée, notre simulation sur papier restera un dessin personnel, sans lui attribuer un symbole traditionnel."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les mains au travail",
        "text": "Au premier plan, une artisane tient un petit outil au-dessus d’une étoffe portant des motifs serrés."
      },
      {
        "label": "L’atelier",
        "text": "Plusieurs artisanes travaillent sur des tissus. L’image réunit des personnes, des étoffes et des outils dans un même espace."
      },
      {
        "label": "Les crédits",
        "text": "La légende situe l’application manuelle de cire à Yogyakarta, sur l’île de Java. Les personnes photographiées ne sont pas les personnages fictifs Dimas et Sari."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un atelier photographié",
        "text": "La photographie montre des artisanes appliquant manuellement la cire sur des étoffes à Java. C’est un document sur un travail réel, distinct de notre atelier fictif.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Protéger certaines zones",
        "text": "Les lignes et points de cire résistent à la teinture. Le travail peut être répété avec différentes couleurs pour composer l’étoffe.",
        "source": "https://ich.unesco.org/fr/RL/le-batik-indonsien-00170"
      },
      {
        "id": "partage",
        "title": "Une étoffe dans la vie",
        "text": "Les usages du batik vont du quotidien à des occasions particulières. Ses motifs portent des significations variées ; ses savoir-faire se transmettent notamment dans les familles.",
        "source": "https://ich.unesco.org/fr/RL/le-batik-indonsien-00170"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Observer des artisanes au travail"
        },
        {
          "id": "b",
          "text": "Comprendre la réserve de couleur"
        },
        {
          "id": "c",
          "text": "Découvrir les usages et la transmission"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie de l’atelier",
          "text": "Des gestes, des tissus et des outils sont visibles dans une scène réelle.",
          "correct": "a",
          "question": "Que font les artisanes sur la photographie ?",
          "answers": [
            {
              "id": "a",
              "text": "Elles appliquent de la cire sur des étoffes"
            },
            {
              "id": "b",
              "text": "Elles assemblent des carrés de tissu"
            },
            {
              "id": "c",
              "text": "Elles sculptent des tampons en bois"
            }
          ],
          "explanation": "La photographie montre des artisanes appliquant manuellement la cire sur des étoffes à Java. C’est un document sur un travail réel, distinct de notre atelier fictif."
        },
        {
          "id": "geste",
          "name": "La fiche de la réserve",
          "text": "Ce document explique le rôle technique de la cire face à la teinture.",
          "correct": "b",
          "question": "À quoi sert la cire pendant la teinture ?",
          "answers": [
            {
              "id": "a",
              "text": "À fixer définitivement tous les fils"
            },
            {
              "id": "b",
              "text": "À protéger certaines zones de l’étoffe"
            },
            {
              "id": "c",
              "text": "À rendre toute l’étoffe de la même couleur"
            }
          ],
          "explanation": "Les lignes et points de cire résistent à la teinture. Le travail peut être répété avec différentes couleurs pour composer l’étoffe."
        },
        {
          "id": "partage",
          "name": "La fiche des usages",
          "text": "Ce document s’intéresse aux personnes et aux occasions qui entourent les étoffes.",
          "correct": "c",
          "question": "Que vas-tu rappeler en présentant une étoffe ?",
          "answers": [
            {
              "id": "a",
              "text": "Que tous les motifs ont le même sens"
            },
            {
              "id": "b",
              "text": "Qu’elle ne peut servir que de décoration"
            },
            {
              "id": "c",
              "text": "Ses usages et les significations variées de ses motifs"
            }
          ],
          "explanation": "Les usages du batik vont du quotidien à des occasions particulières. Ses motifs portent des significations variées ; ses savoir-faire se transmettent notamment dans les familles."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Présenter la réserve sans outils",
        "description": "Préparer un petit support virtuel pour expliquer ce qui reste clair quand une zone est protégée.",
        "reply": "Dimas : Bonne idée. Une explication sur papier suffira pour commencer. Comment veux-tu l’accompagner ?",
        "place": 0,
        "preparationTitle": "Un support pour comprendre",
        "preparationPrompt": "Que souhaites-tu placer près de la simulation ?",
        "options": [
          {
            "id": "un",
            "label": "La photographie de l’atelier",
            "reply": "Dimas : Les visiteurs verront le travail réel à côté de notre explication simplifiée.",
            "endingText": "Tu places la photo et ses crédits près de la simulation virtuelle. Dimas présente le document, puis montre votre dessin personnel. Sari les rejoint pour répondre aux questions sur le véritable travail de l’atelier.",
            "endingReply": "Dimas : Merci. Maintenant, je peux montrer la différence entre un document, une explication et notre essai."
          },
          {
            "id": "deux",
            "label": "La fiche sur la réserve",
            "reply": "Dimas : Je la garde ouverte près du dessin. La photographie restera disponible pour la suite.",
            "endingText": "La fiche accompagne votre simulation. Les visiteurs suivent l’idée d’une zone protégée, puis Sari leur propose de regarder les étoffes de la galerie. Vos cartes sont rangées et Dimas peut prendre part à la visite.",
            "endingReply": "Dimas : Tout est prêt. Je viens avec vous ; j’ai encore une question pour Sari."
          }
        ],
        "endingTitle": "Une explication prend forme"
      },
      {
        "id": "rencontre",
        "title": "Accompagner la visite avec Sari",
        "description": "Préparer une question pour ouvrir la conversation dans la petite galerie.",
        "reply": "Sari : Venez. Nous pouvons commencer par le travail ou par la vie d’une étoffe. Quelle question veux-tu poser ?",
        "place": 2,
        "preparationTitle": "Une question dans la galerie",
        "preparationPrompt": "Quel sujet souhaites-tu aborder avec Sari ?",
        "options": [
          {
            "id": "un",
            "label": "Comment Dimas apprend-il à l’atelier ?",
            "reply": "Sari : Je lui proposerai de raconter lui-même ce qu’il a fait aujourd’hui.",
            "endingText": "Dans la galerie, Dimas raconte ce que vous avez découvert sur la cire et la teinture. Sari complète son explication. Les visiteurs peuvent ensuite poser leurs questions et découvrir les étoffes.",
            "endingReply": "Sari : Tu as aidé Dimas à préparer sa présentation. Merci. Nous pouvons poursuivre la visite ensemble."
          },
          {
            "id": "deux",
            "label": "Quelle histoire accompagne une étoffe ?",
            "reply": "Sari : Prenons le temps de regarder une pièce précise. Nous partirons de ce que je peux en expliquer.",
            "endingText": "Tu demandes à Sari de présenter une étoffe de son atelier fictif. Elle commence par son travail, puis accueille les questions des visiteurs. Dimas apporte la photo de l’atelier pour montrer un geste de fabrication.",
            "endingReply": "Sari : Une bonne question vaut mieux qu’une légende devinée. Venez, je vais vous montrer la suite."
          }
        ],
        "endingTitle": "La visite avec Sari"
      }
    ],
    "practice": {
      "title": "Ton atelier de motifs",
      "intro": "Trace un motif personnel, essaie ses couleurs et compose une étoffe à conserver dans ton carnet.",
      "steps": [
        {
          "title": "Trace ton motif",
          "text": "Dessine au doigt ou à la souris les zones qui resteront claires.",
          "options": [
            {
              "label": "Tracer",
              "reply": "Compose des lignes libres, puis ajoute des détails à ton rythme."
            },
            {
              "label": "Points",
              "reply": "Pose des points pour créer tes propres intervalles."
            }
          ]
        },
        {
          "title": "Fais apparaître la couleur",
          "text": "Les tracés restent clairs quand tu choisis une couleur de fond.",
          "options": [
            {
              "label": "Indigo",
              "reply": "Le bleu fait ressortir les zones que tu as réservées."
            },
            {
              "label": "Terre cuite",
              "reply": "Le fond chaud fait ressortir tes tracés clairs."
            }
          ]
        },
        {
          "title": "Compose ton étoffe",
          "text": "Choisis la présentation de ton motif personnel, puis conserve ta création.",
          "options": [
            {
              "label": "Motif seul",
              "reply": "Ton dessin occupe toute la pièce de tissu virtuelle."
            },
            {
              "label": "Étoffe répétée",
              "reply": "Le même dessin se répète pour former une étoffe."
            }
          ]
        }
      ],
      "finishText": "Ta création peut rejoindre ton carnet. Tu peux la reprendre et en télécharger le dessin.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/le-batik-indonsien-00170",
      "sourceLabel": "Repère technique et culturel : le batik sur le site de l’UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/le-batik-indonsien-00170",
        "label": "UNESCO · Le batik indonésien",
        "supports": "Cire résistant à la teinture ; applications répétées ; diversité des usages et des significations ; transmission des savoir-faire."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Batik_craftswomen_in_Java_handmarking_resist_on_batik_tulis_cloth_with_tjantings.jpg",
        "label": "Photographie · Ian Alexander, CC BY-SA 3.0",
        "supports": "Identification d’artisanes appliquant la cire à Yogyakarta ; auteur et droits. Dimas, Sari et l’atelier de l’aventure sont fictifs."
      }
    ],
    "guide": {
      "result": "Voir le début de ta présentation et retrouver tes motifs dans le carnet.",
      "finish": "Ouvrir l’atelier aux visiteurs →"
    }
  },
  "vanuatu": {
    "title": "Un chemin pour entrer dans un récit",
    "mission": "Aide Lina à préparer une rencontre avec Toma autour des dessins sur le sable.",
    "intro": "Toma se prépare à présenter un dessin sur le sable. Lina t’invite à regarder un exemple, à découvrir le chemin du doigt, puis à choisir une question à poser avant la démonstration.",
    "places": [
      {
        "name": "Le coin d’accueil",
        "description": "Un espace fictif à l’ombre, où Lina rassemble les cartes destinées aux visiteurs.",
        "shortName": "Accueil"
      },
      {
        "name": "La table des carnets",
        "description": "Deux fiches documentaires attendent à côté de la photographie et des titres détachés.",
        "shortName": "Carnets"
      },
      {
        "name": "L’espace de démonstration",
        "description": "Toma a prévu un moment pour montrer son travail et répondre aux questions. Ce lieu est inventé pour le jeu.",
        "shortName": "Démonstration"
      }
    ],
    "characters": [
      {
        "name": "Lina",
        "role": "accueille les visiteurs",
        "greeting": "Bienvenue ! Aide Lina à préparer une rencontre avec Toma autour des dessins sur le sable. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Tu as besoin de quoi exactement ?",
            "answer": "J’aimerais que les visiteurs sachent observer le tracé et poser leurs questions à Toma. Ensuite, tu choisiras si l’on commence par la photographie ou directement par un échange."
          },
          {
            "question": "La photo raconte toute l’histoire du dessin ?",
            "answer": "Je ne connais pas le sens précis de celui-là. Je peux décrire ce que je vois ; pour son interprétation, il faudrait entendre une personne qui le connaît."
          }
        ]
      },
      {
        "name": "Toma",
        "role": "dessinateur",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : imagine ton propre chemin. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Qu’est-ce que je peux regarder en premier ?",
            "answer": "Le chemin du doigt. Dans la tradition décrite par l’UNESCO, il suit une ligne continue sur une grille imaginée. Un croisement peut demander beaucoup d’attention."
          },
          {
            "question": "Et si je perds le fil ?",
            "answer": "Garde ta question pour après : « Tu peux revenir sur ce passage ? » C’est plus utile que d’essayer de tout deviner en même temps."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les lignes",
        "text": "Des lignes sombres dessinent des boucles et de nombreux croisements sur une surface granuleuse."
      },
      {
        "label": "Le cadrage",
        "text": "La photographie montre le dessin, sans personne en train de le tracer. Elle ne permet pas de retrouver l’ordre de chaque geste."
      },
      {
        "label": "La légende",
        "text": "La légende situe ce dessin au Vanuatu. Elle ne donne ni son nom ni l’explication de ses motifs : on ne leur invente pas de signification."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Une trace photographiée",
        "text": "La photo documente un dessin sur le sable au Vanuatu. Son motif visible ne suffit pas à établir son sens ou les étapes de sa réalisation.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Le chemin du doigt",
        "text": "Le dessin traditionnel décrit par l’UNESCO est réalisé d’un doigt, en ligne continue, selon une grille imaginée. Le support peut être le sable, la cendre volcanique ou l’argile.",
        "source": "https://ich.unesco.org/fr/RL/les-dessins-sur-le-sable-de-vanuatu-00073"
      },
      {
        "id": "partage",
        "title": "Des savoirs à expliquer",
        "text": "Ces dessins peuvent transmettre des récits et des connaissances. Leurs différents sens demandent le savoir de personnes capables de les expliquer : ce ne sont pas seulement des motifs décoratifs.",
        "source": "https://ich.unesco.org/fr/RL/les-dessins-sur-le-sable-de-vanuatu-00073"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Une image à observer"
        },
        {
          "id": "b",
          "text": "Une façon de tracer"
        },
        {
          "id": "c",
          "text": "Des connaissances à transmettre"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie",
          "text": "Le dessin visible et les limites de ce que montre cette image.",
          "correct": "a",
          "question": "Quel support vois-tu sur la photographie ?",
          "answers": [
            {
              "id": "a",
              "text": "Du sable portant un dessin"
            },
            {
              "id": "b",
              "text": "Un tissu brodé"
            },
            {
              "id": "c",
              "text": "Une paroi gravée"
            }
          ],
          "explanation": "La photo documente un dessin sur le sable au Vanuatu. Son motif visible ne suffit pas à établir son sens ou les étapes de sa réalisation."
        },
        {
          "id": "geste",
          "name": "La fiche du geste",
          "text": "Le doigt, la ligne et le canevas imaginé.",
          "correct": "b",
          "question": "Comment le tracé décrit dans la fiche est-il réalisé ?",
          "answers": [
            {
              "id": "a",
              "text": "Avec plusieurs tampons séparés"
            },
            {
              "id": "b",
              "text": "D’un doigt, en ligne continue"
            },
            {
              "id": "c",
              "text": "En assemblant des bandes de papier"
            }
          ],
          "explanation": "Le dessin traditionnel décrit par l’UNESCO est réalisé d’un doigt, en ligne continue, selon une grille imaginée. Le support peut être le sable, la cendre volcanique ou l’argile."
        },
        {
          "id": "partage",
          "name": "La fiche des significations",
          "text": "Les récits, les connaissances et les personnes qui les expliquent.",
          "correct": "c",
          "question": "À qui demander le sens d’un dessin traditionnel ?",
          "answers": [
            {
              "id": "a",
              "text": "À la photographie seule"
            },
            {
              "id": "b",
              "text": "Au premier motif ressemblant trouvé ailleurs"
            },
            {
              "id": "c",
              "text": "À une personne qui connaît et transmet cette pratique"
            }
          ],
          "explanation": "Ces dessins peuvent transmettre des récits et des connaissances. Leurs différents sens demandent le savoir de personnes capables de les expliquer : ce ne sont pas seulement des motifs décoratifs."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer le panneau",
        "description": "Installer les trois cartes au coin d’accueil pour que les visiteurs sachent quoi regarder et quoi demander.",
        "reply": "Merci ! Nous allons installer un accueil simple : une image pour regarder et une question pour entrer dans le récit.",
        "place": 0,
        "preparationTitle": "La première carte",
        "preparationPrompt": "Lina te laisse choisir ce que les visiteurs découvriront d’abord.",
        "options": [
          {
            "id": "un",
            "label": "Ouvrir avec la photographie",
            "reply": "Lina : D’accord. On part de ce que chacun peut observer, puis on propose les deux autres cartes.",
            "endingText": "Le panneau commence par la photo. Un visiteur remarque un croisement, puis lit la fiche du geste. Lina lui propose de garder sa question pour Toma.",
            "endingReply": "Lina : Ça fonctionne : le panneau donne envie de regarder de plus près."
          },
          {
            "id": "deux",
            "label": "Ouvrir avec une question",
            "reply": "Lina : « Qu’aimeriez-vous demander au dessinateur ? » Voilà une bonne entrée pour notre petit panneau.",
            "endingText": "La question d’accueil attire les premières réactions. Lina montre ensuite les trois cartes et note les questions que le groupe souhaite poser à Toma.",
            "endingReply": "Lina : On a déjà de quoi commencer une vraie conversation."
          }
        ],
        "endingTitle": "Les cartes sont prêtes"
      },
      {
        "id": "rencontre",
        "title": "Préparer les questions",
        "description": "Rejoindre Toma avec les cartes et choisir une première question pour le groupe.",
        "reply": "Toma : Très bien. On commencera par votre question et on prendra le temps de regarder ensemble.",
        "place": 2,
        "preparationTitle": "La question d’ouverture",
        "preparationPrompt": "Quel point veux-tu éclaircir avec Toma ?",
        "options": [
          {
            "id": "un",
            "label": "Revenir sur un croisement",
            "reply": "Toma : Montre-moi celui qui t’intrigue. Je pourrai expliquer le passage sans reprendre tout depuis le début.",
            "endingText": "Tu désignes le passage que tu veux comprendre. Le groupe se rapproche et Toma reprend tranquillement son explication. Chacun peut enfin poser sa question.",
            "endingReply": "Toma : Une question précise nous a donné un bon point de départ."
          },
          {
            "id": "deux",
            "label": "Demander comment il a appris",
            "reply": "Toma : Avec plaisir. Je vais commencer par les passages qui me donnaient du mal, quand j’apprenais.",
            "endingText": "Toma commence par raconter un souvenir d’apprentissage. Les visiteurs lui demandent ensuite ce qu’il aime expliquer aux débutants.",
            "endingReply": "Toma : Merci d’avoir aussi pensé à la personne derrière le dessin."
          }
        ],
        "endingTitle": "Un moment pour comprendre"
      }
    ],
    "practice": {
      "title": "Imagine ton propre chemin",
      "intro": "Lina te propose d’imaginer ton propre chemin sur une page vide : un départ, un trajet et une fin. Ce tracé libre est une création personnelle.",
      "steps": [
        {
          "title": "Choisir un départ",
          "text": "Imagine une page vide et un point de départ. Dans quelle direction ta ligne part-elle ?",
          "options": [
            {
              "label": "Vers une grande boucle",
              "reply": "Ta ligne s’arrondit. Tu peux en suivre mentalement le contour à ton rythme."
            },
            {
              "label": "Vers un chemin anguleux",
              "reply": "Ta ligne change de direction. Tu peux imaginer un virage après l’autre."
            }
          ]
        },
        {
          "title": "Continuer le trajet",
          "text": "Garde le même fil imaginaire. Tu décides librement de son prochain passage.",
          "options": [
            {
              "label": "Croiser mon propre chemin",
              "reply": "Imagine où la ligne passe à nouveau sur son trajet. Rien à réussir : tu choisis simplement son chemin."
            },
            {
              "label": "Contourner la première ligne",
              "reply": "Ton trajet s’écarte puis revient près du départ. Tu peux le garder très simple."
            }
          ]
        },
        {
          "title": "Choisir une fin",
          "text": "Comment veux-tu terminer ton petit tracé personnel ?",
          "options": [
            {
              "label": "Revenir au point de départ",
              "reply": "Tu refermes ton parcours imaginaire. C’est la fin que tu as choisie."
            },
            {
              "label": "Laisser le chemin ouvert",
              "reply": "Ta ligne s’arrête ailleurs sur la page. Tu pourras lui imaginer une suite une autre fois."
            }
          ]
        }
      ],
      "finishText": "Tu as imaginé ton propre tracé. Pour découvrir les dessins traditionnels du Vanuatu et leurs sens, retrouve les repères du carnet.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/les-dessins-sur-le-sable-de-vanuatu-00073",
      "sourceLabel": "UNESCO · comprendre la tradition, distincte de ce jeu libre"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/les-dessins-sur-le-sable-de-vanuatu-00073",
        "label": "UNESCO · Les dessins sur le sable de Vanuatu",
        "supports": "Ligne continue au doigt, canevas imaginaire, supports, fonctions de transmission et nécessité de connaître les significations. Scénario, personnages et tracé libre : créations du jeu."
      },
      {
        "url": "https://ich.unesco.org/en/projects/safeguarding-of-vanuatu-sand-drawings-00022",
        "label": "UNESCO · Sauvegarde des dessins sur le sable",
        "supports": "Souligne la transmission, le rôle des dessinateurs experts et la distinction entre dessins et récits pouvant être présentés publiquement. Le jeu ne reproduit pas de motif traditionnel."
      }
    ],
    "guide": {
      "result": "Assister au début de la démonstration ou de la conversation que tu as préparée.",
      "finish": "Commencer avec Toma →"
    }
  },
  "turquie": {
    "title": "Le café est presque prêt",
    "mission": "Aide Deniz à préparer le plateau et l’accueil d’Ece autour du café turc.",
    "intro": "Deniz prépare une visite d’Ece. Tu vas découvrir le service du café, imaginer un plateau si tu le souhaites, puis choisir comment commencer la conversation.",
    "places": [
      {
        "name": "Le coin d’accueil",
        "description": "Une entrée inventée pour le jeu. Deniz y prépare son carnet et le plateau virtuel.",
        "shortName": "Accueil"
      },
      {
        "name": "La table des notes",
        "description": "La photographie et deux fiches documentaires permettent de retrouver les bons titres.",
        "shortName": "Notes"
      },
      {
        "name": "Le salon",
        "description": "Ece a rejoint les fauteuils. Un endroit fictif pour discuter tranquillement autour de la table.",
        "shortName": "Salon"
      }
    ],
    "characters": [
      {
        "name": "Deniz",
        "role": "accueille une amie",
        "greeting": "Bienvenue ! Aide Deniz à préparer le plateau et l’accueil d’Ece autour du café turc. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Pourquoi préparer un carnet pour une visite ?",
            "answer": "Ece m’a demandé ce que je mettais dans mon carnet de voyage. Je voudrais lui montrer trois petites pages, puis qu’on ait surtout le temps de discuter."
          },
          {
            "question": "Tu as appris à préparer le café avec qui ?",
            "answer": "Avec ma mère. Je regardais, puis j’essayais à mon tour. Elle me rappelait surtout de ne pas partir bavarder au mauvais moment !"
          }
        ]
      },
      {
        "name": "Ece",
        "role": "amie de Deniz",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : compose un accueil virtuel. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Tu connais déjà la photo ?",
            "answer": "Non. J’aime ses couleurs, mais je ne peux pas deviner la préparation du café en la regardant. Il faudra que je lise la fiche d’à côté."
          },
          {
            "question": "On commence par le carnet ou par les nouvelles ?",
            "answer": "Comme vous voulez. J’ai une anecdote à raconter, et j’aimerais aussi voir ce que vous avez préparé. On a le temps."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "La tasse",
        "text": "Le café est présenté dans une tasse à anse, posée sur une soucoupe. Les deux portent des motifs colorés."
      },
      {
        "label": "La surface",
        "text": "Une fine bordure mousseuse est visible près du bord. L’image ne montre pas le café en train de chauffer."
      },
      {
        "label": "La légende",
        "text": "La légende identifie un service de café turc photographié en 2019. Aucun verre d’eau n’est visible dans ce cadrage."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un service photographié",
        "text": "La photographie montre une tasse de café et sa soucoupe décorée. Elle documente une présentation particulière, pas toutes les étapes de préparation.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Préparer et servir",
        "text": "La mouture est très fine. Le café chauffe doucement avec de l’eau pour former de la mousse ; le service traditionnel décrit par l’UNESCO associe de petites tasses et un verre d’eau.",
        "source": "https://ich.unesco.org/fr/RL/la-culture-et-la-tradition-du-cafe-turc-00645"
      },
      {
        "id": "partage",
        "title": "Une occasion de se parler",
        "text": "Cette tradition est liée à l’hospitalité, à l’amitié et à la conversation. Les savoirs se transmettent notamment dans les familles, en observant et en participant.",
        "source": "https://ich.unesco.org/fr/RL/la-culture-et-la-tradition-du-cafe-turc-00645"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Le service dans l’image"
        },
        {
          "id": "b",
          "text": "Le savoir-faire de préparation"
        },
        {
          "id": "c",
          "text": "L’accueil et la transmission"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie",
          "text": "Une tasse décorée et sa soucoupe, dans un cadrage précis.",
          "correct": "a",
          "question": "Que montre la photographie de cette escale ?",
          "answers": [
            {
              "id": "a",
              "text": "Une tasse de café et sa soucoupe"
            },
            {
              "id": "b",
              "text": "Un moulin en fonctionnement"
            },
            {
              "id": "c",
              "text": "Une récolte de café"
            }
          ],
          "explanation": "La photographie montre une tasse de café et sa soucoupe décorée. Elle documente une présentation particulière, pas toutes les étapes de préparation."
        },
        {
          "id": "geste",
          "name": "La fiche de préparation",
          "text": "Mouture, chauffe douce, mousse et service.",
          "correct": "b",
          "question": "Avec quoi accompagne-t-on les petites tasses dans le service décrit ?",
          "answers": [
            {
              "id": "a",
              "text": "Un grand bol de lait obligatoire"
            },
            {
              "id": "b",
              "text": "Un verre d’eau"
            },
            {
              "id": "c",
              "text": "Un pichet de jus de fruits obligatoire"
            }
          ],
          "explanation": "La mouture est très fine. Le café chauffe doucement avec de l’eau pour former de la mousse ; le service traditionnel décrit par l’UNESCO associe de petites tasses et un verre d’eau."
        },
        {
          "id": "partage",
          "name": "La fiche de rencontre",
          "text": "Recevoir, échanger et apprendre auprès d’autres personnes.",
          "correct": "c",
          "question": "Quelle place le café prend-il dans cette rencontre ?",
          "answers": [
            {
              "id": "a",
              "text": "Une épreuve de dégustation à gagner"
            },
            {
              "id": "b",
              "text": "Un service à terminer en silence"
            },
            {
              "id": "c",
              "text": "Une occasion d’hospitalité et de conversation"
            }
          ],
          "explanation": "Cette tradition est liée à l’hospitalité, à l’amitié et à la conversation. Les savoirs se transmettent notamment dans les familles, en observant et en participant."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Installer le carnet et le plateau",
        "description": "Préparer une petite table d’accueil virtuelle avec Deniz. Aucun geste de cuisson n’est demandé.",
        "reply": "Deniz : Merci ! On va pouvoir montrer les cartes sans que toute la table soit couverte de papiers.",
        "place": 0,
        "preparationTitle": "L’entrée du carnet",
        "preparationPrompt": "Quelle carte poses-tu sur le dessus ?",
        "options": [
          {
            "id": "un",
            "label": "La photographie de la tasse",
            "reply": "Deniz : Très bien. Les couleurs attireront l’œil ; la fiche expliquera ce que la photo ne montre pas.",
            "endingText": "Ece s’arrête sur la tasse décorée. Tu lui montres les deux fiches, puis vous faites de la place pour vous installer.",
            "endingReply": "Ece : J’aime bien ce petit carnet. Et maintenant, racontez-moi votre journée !"
          },
          {
            "id": "deux",
            "label": "La carte de l’accueil",
            "reply": "Deniz : Elle résume bien ce que j’espérais aujourd’hui : nous retrouver et prendre le temps de parler.",
            "endingText": "La première carte ouvre la conversation. Ece raconte son arrivée, Deniz ajoute une anecdote et le carnet circule tranquillement entre vous.",
            "endingReply": "Deniz : Tout est prêt, et on a encore du temps devant nous."
          }
        ],
        "endingTitle": "La table est accueillante"
      },
      {
        "id": "rencontre",
        "title": "Rejoindre Ece au salon",
        "description": "Emporter les cartes et choisir ensemble le début de votre conversation.",
        "reply": "Ece : Venez vous asseoir. Je vous ai gardé deux places près de la table.",
        "place": 2,
        "preparationTitle": "Les premiers mots",
        "preparationPrompt": "Comment veux-tu lancer la rencontre ?",
        "options": [
          {
            "id": "un",
            "label": "Demander des nouvelles d’Ece",
            "reply": "Ece : Merci ! J’avais justement envie de vous raconter ce qui m’est arrivé en venant.",
            "endingText": "Ece commence son anecdote. Deniz lui pose une question, puis chacun raconte un petit événement de la journée. Les cartes attendront quelques minutes.",
            "endingReply": "Ece : Ça fait du bien d’avoir le temps de finir une histoire sans regarder l’heure."
          },
          {
            "id": "deux",
            "label": "Demander le souvenir d’apprentissage de Deniz",
            "reply": "Deniz : Je peux vous raconter mon premier essai. Il n’avait pas beaucoup de mousse, mais j’en étais très fier.",
            "endingText": "Deniz raconte son premier essai. Ece lui demande qui le goûtait et la conversation se poursuit autour du carnet.",
            "endingReply": "Deniz : Un souvenir en a appelé un autre. Je crois qu’on va rester un moment."
          }
        ],
        "endingTitle": "Une conversation commence"
      }
    ],
    "practice": {
      "title": "Compose un accueil virtuel",
      "intro": "Prépare un accueil virtuel pour Ece : choisis les tasses, leur place sur le plateau et une invitation à s’asseoir.",
      "steps": [
        {
          "title": "Choisir les tasses",
          "text": "Tu prépares virtuellement de petites tasses et leurs verres d’eau. Quel style imagines-tu ?",
          "options": [
            {
              "label": "Des tasses sobres",
              "reply": "Le plateau reste simple. Les petites tasses et les verres d’eau ont chacun leur place."
            },
            {
              "label": "Des tasses colorées",
              "reply": "Tu imagines des couleurs différentes pour reconnaître les tasses. Les verres d’eau les accompagnent."
            }
          ]
        },
        {
          "title": "Faire de la place",
          "text": "Comment disposes-tu les objets sur ton plateau imaginaire ? Les deux choix conviennent dans ce jeu.",
          "options": [
            {
              "label": "Une tasse près de chaque verre",
              "reply": "Tu formes de petits ensembles faciles à repérer. Deniz peut imaginer où poser le plateau."
            },
            {
              "label": "Les tasses au centre, les verres à côté",
              "reply": "Tu gardes les verres à portée des tasses. Ton plateau virtuel est prêt."
            }
          ]
        },
        {
          "title": "Inviter à s’installer",
          "text": "Ece vient d’arriver. Quelle phrase veux-tu lui proposer ?",
          "options": [
            {
              "label": "Installe-toi, comment s’est passée ta journée ?",
              "reply": "Ece : Merci ! J’ai plein de choses à raconter. Je m’assieds avec vous."
            },
            {
              "label": "Bienvenue ! Tu nous racontes tes nouvelles ?",
              "reply": "Ece : Volontiers. Et après, vous me montrez votre carnet ?"
            }
          ]
        }
      ],
      "finishText": "Ton plateau imaginaire et ton invitation sont prêts. Deniz peut maintenant accueillir Ece.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/la-culture-et-la-tradition-du-cafe-turc-00645",
      "sourceLabel": "UNESCO · La culture et la tradition du café turc"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/la-culture-et-la-tradition-du-cafe-turc-00645",
        "label": "UNESCO · La culture et la tradition du café turc",
        "supports": "Mouture fine, chauffe douce et mousse ; petites tasses et eau ; hospitalité, conversation et transmission familiale. Visite et plateau virtuel : créations du jeu."
      },
      {
        "url": "https://www.unesco.org/archives/multimedia/document-3537",
        "label": "UNESCO · Notice documentaire sur le café turc",
        "supports": "Confirme les dimensions sociales de la tradition et l’apprentissage familial par observation et participation."
      }
    ],
    "guide": {
      "result": "Voir l’arrivée d’Ece et le début de votre échange.",
      "finish": "Accueillir Ece →"
    }
  },
  "georgie": {
    "title": "La jarre et ses secrets",
    "mission": "Aide Nino et Giorgi à présenter le kvevri aux visiteurs de leur atelier.",
    "intro": "Nino a placé une jarre près de l’entrée. Les visiteurs vont demander à quoi elle sert et comment on apprend à la fabriquer. Tu vas préparer ces explications avec Giorgi, puis choisir le début de la visite.",
    "places": [
      {
        "name": "La cour d’accueil",
        "description": "Nino t’attend près d’une table où elle prépare les légendes.",
        "shortName": "Accueil"
      },
      {
        "name": "La table des documents",
        "description": "Une photographie et deux fiches permettent de démêler l’objet, son usage et sa transmission.",
        "shortName": "Documents"
      },
      {
        "name": "L’atelier de Giorgi",
        "description": "Le potier fait une pause. C’est le moment de lui poser tes questions.",
        "shortName": "Atelier"
      }
    ],
    "characters": [
      {
        "name": "Nino",
        "role": "Apprend le travail de la terre cuite",
        "greeting": "Bienvenue ! Aide Nino et Giorgi à présenter le kvevri aux visiteurs de leur atelier. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Qu’est-ce que les visiteurs doivent comprendre ?",
            "answer": "J’aimerais qu’ils regardent d’abord l’objet, puis qu’ils découvrent à quoi il sert et avec qui on apprend. Trois idées courtes : ce sera plus facile à suivre."
          },
          {
            "question": "C’est une photo de votre atelier ?",
            "answer": "Non. C’est une photographie prise au musée de Gonio. Je l’ai choisie comme document ; notre atelier appartient à cette aventure."
          }
        ]
      },
      {
        "name": "Giorgi",
        "role": "Potier",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : imaginer une petite jarre. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Pourquoi parler aussi des personnes qui utilisent les jarres ?",
            "answer": "Leurs besoins donnent du sens à l’objet. Un kvevri sert à vinifier, faire vieillir et conserver le vin. Nous allons expliquer cet usage, sans proposer de dégustation."
          },
          {
            "question": "Je peux commencer par observer ?",
            "answer": "Bien sûr. Ici, tu peux regarder les documents et essayer un croquis virtuel. Ça ne remplace pas l’apprentissage de la fabrication avec un potier."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les silhouettes",
        "text": "Plusieurs jarres arrondies apparaissent derrière une paroi vitrée. Compare leurs contours et leurs ouvertures."
      },
      {
        "label": "La matière",
        "text": "La terre cuite présente différentes teintes brunes. Les récipients ne sont pas identiques."
      },
      {
        "label": "La légende",
        "text": "Le document est conservé dans le carnet avec son crédit : photographie d’un kvevri au musée de Gonio, en Géorgie."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un objet à regarder",
        "text": "La photo montre des récipients de terre cuite présentés au musée. Elle permet d’observer une forme ; elle ne montre pas leur fabrication.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Une jarre et son usage",
        "text": "Le kvevri est un récipient d’argile ovoïde. La méthode de vinification traditionnelle comprend son enfouissement dans le sol.",
        "source": "https://ich.unesco.org/fr/RL/la-methode-georgienne-de-vinification-a-l-ancienne-dans-des-kvevris-traditionnels-00870"
      },
      {
        "id": "partage",
        "title": "Des savoirs entre proches",
        "text": "Fabrication des jarres et vinification s’apprennent notamment dans les familles et entre proches, en observant et en participant.",
        "source": "https://ich.unesco.org/fr/RL/la-methode-georgienne-de-vinification-a-l-ancienne-dans-des-kvevris-traditionnels-00870"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Observer une forme"
        },
        {
          "id": "b",
          "text": "Comprendre un usage"
        },
        {
          "id": "c",
          "text": "Suivre une transmission"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie du musée",
          "text": "Plusieurs récipients sont visibles : leurs silhouettes peuvent être comparées.",
          "correct": "a",
          "question": "Quel matériau reconnais-tu dans les récipients photographiés ?",
          "answers": [
            {
              "id": "a",
              "text": "La terre cuite"
            },
            {
              "id": "b",
              "text": "Le métal poli"
            },
            {
              "id": "c",
              "text": "Le verre soufflé"
            }
          ],
          "explanation": "La photo montre des récipients de terre cuite présentés au musée. Elle permet d’observer une forme ; elle ne montre pas leur fabrication."
        },
        {
          "id": "geste",
          "name": "La fiche de l’objet",
          "text": "Elle explique la place de la jarre dans une méthode de vinification.",
          "correct": "b",
          "question": "Où place-t-on le kvevri dans la méthode de vinification décrite ?",
          "answers": [
            {
              "id": "a",
              "text": "Suspendu au plafond"
            },
            {
              "id": "b",
              "text": "Enfoui dans le sol"
            },
            {
              "id": "c",
              "text": "Flottant sur un bassin"
            }
          ],
          "explanation": "Le kvevri est un récipient d’argile ovoïde. La méthode de vinification traditionnelle comprend son enfouissement dans le sol."
        },
        {
          "id": "partage",
          "name": "La fiche des personnes",
          "text": "Elle relie l’apprentissage aux familles et aux proches.",
          "correct": "c",
          "question": "Comment ces savoirs se transmettent-ils notamment ?",
          "answers": [
            {
              "id": "a",
              "text": "Uniquement en lisant une étiquette"
            },
            {
              "id": "b",
              "text": "Sans observer le travail des autres"
            },
            {
              "id": "c",
              "text": "En observant et en participant auprès des proches"
            }
          ],
          "explanation": "Fabrication des jarres et vinification s’apprennent notamment dans les familles et entre proches, en observant et en participant."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer la table de découverte",
        "description": "Préparer avec Nino un petit parcours de lecture pour les visiteurs.",
        "reply": "Bonne idée. Je laisse un peu d’espace entre les documents pour qu’on puisse les regarder tranquillement.",
        "place": 0,
        "preparationTitle": "Quelle entrée pour le parcours ?",
        "preparationPrompt": "Choisis le premier document que Nino présentera. Les trois resteront accessibles.",
        "options": [
          {
            "id": "un",
            "label": "Commencer par la photographie",
            "reply": "On pourra demander : qu’est-ce qui attire votre regard ?",
            "endingText": "Nino invite les visiteurs à comparer les silhouettes des jarres photographiées. Tu lui proposes de poursuivre avec leur usage. Les questions arrivent et Giorgi rejoint la table.",
            "endingReply": "Merci. Nous avons maintenant un point de départ simple pour la conversation."
          },
          {
            "id": "deux",
            "label": "Commencer par la question de l’usage",
            "reply": "Je poserai la question avant de retourner la fiche : à votre avis, à quoi sert cet objet ?",
            "endingText": "Les visiteurs proposent des idées. Nino révèle la fiche, puis vous revenez à la photo et aux personnes qui transmettent les savoirs. Le parcours est prêt.",
            "endingReply": "Ça donne envie de regarder les autres documents. Merci pour le coup de main !"
          }
        ],
        "endingTitle": "La visite de l’atelier commence"
      },
      {
        "id": "rencontre",
        "title": "Préparer une conversation avec Giorgi",
        "description": "Choisir une question d’ouverture plutôt qu’un parcours sur les murs.",
        "reply": "Asseyons-nous près de la table. Je préfère qu’on garde les documents à portée de main.",
        "place": 2,
        "preparationTitle": "La première question",
        "preparationPrompt": "Quel point veux-tu aborder avec Giorgi et Nino ?",
        "options": [
          {
            "id": "un",
            "label": "Demander à Nino ce qu’elle observe",
            "reply": "Nino pourra choisir le détail qu’elle aimerait montrer en premier.",
            "endingText": "Nino rapproche la photographie. Elle montre un contour, puis demande à Giorgi comment regarder un objet autrement qu’en passant. Tu prends une place à côté d’eux.",
            "endingReply": "Ta question nous a donné le temps de regarder ensemble."
          },
          {
            "id": "deux",
            "label": "Demander comment les documents se complètent",
            "reply": "Posons-les côte à côte. Chacun peut éclairer un autre aspect.",
            "endingText": "Giorgi dispose la photo et les deux notes. Nino explique ce que chaque document apporte. Les visiteurs posent leurs premières questions autour de la table.",
            "endingReply": "C’est prêt. Nous aurons plusieurs façons de répondre aux curieux."
          }
        ],
        "endingTitle": "Une table pour les questions"
      }
    ],
    "practice": {
      "title": "Imaginer une petite jarre",
      "intro": "Avec Nino, imagine une petite jarre sur une carte : choisis un détail, une présentation et une légende pour ton croquis personnel.",
      "steps": [
        {
          "title": "Choisir un point de départ",
          "text": "Pour ton croquis imaginaire, quel détail veux-tu regarder d’abord sur la photo ?",
          "options": [
            {
              "label": "Le contour arrondi",
              "reply": "Nino suit le contour du doigt sur son document : tu peux commencer ton dessin par cette ligne."
            },
            {
              "label": "L’ouverture",
              "reply": "Nino tourne sa feuille : tu commences par le haut, puis tu imagines le reste de la silhouette."
            }
          ]
        },
        {
          "title": "Décider de la présentation",
          "text": "Ta miniature virtuelle aura sa propre fiche. Comment souhaites-tu la présenter ?",
          "options": [
            {
              "label": "Un dessin seul sur une carte",
              "reply": "Tu gardes une grande marge autour du croquis pour bien voir sa silhouette."
            },
            {
              "label": "Le dessin à côté d’une question",
              "reply": "Tu ajoutes : qu’aimerais-tu savoir sur l’objet ? La carte invite à discuter."
            }
          ]
        },
        {
          "title": "Donner une légende au croquis",
          "text": "Choisis les mots qui accompagneront ton dessin. Les deux légendes indiquent clairement qu’il s’agit de ton invention.",
          "options": [
            {
              "label": "Ma jarre imaginaire",
              "reply": "Le titre annonce un dessin personnel. Nino le pose à côté des documents, sans le confondre avec eux."
            },
            {
              "label": "Un croquis après l’observation",
              "reply": "Tu racontes ton point de départ. Giorgi réserve une petite place à cette idée sur la table."
            }
          ]
        }
      ],
      "finishText": "Ta carte imaginaire est prête à rejoindre les documents de l’atelier.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/la-methode-georgienne-de-vinification-a-l-ancienne-dans-des-kvevris-traditionnels-00870",
      "sourceLabel": "UNESCO · le vrai kvevri et les savoirs associés"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/la-methode-georgienne-de-vinification-a-l-ancienne-dans-des-kvevris-traditionnels-00870",
        "label": "UNESCO · vinification en kvevris",
        "supports": "Forme et matière du récipient, usage, enfouissement et transmission des savoirs. Le croquis miniature et l’accueil sont des inventions du jeu."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Qvevri.jpg",
        "label": "Wikimedia Commons · photographie du musée de Gonio",
        "supports": "Provenance et crédit du document photographique, distinct de l’atelier fictif."
      }
    ],
    "guide": {
      "result": "Découvrir le premier moment de la visite que tu as préparée.",
      "finish": "Faire entrer les visiteurs →"
    }
  },
  "maroc": {
    "title": "Le conte qui change avec toi",
    "mission": "Invente un conte avec Salma : choisis un objet, ajoute un détour et décide ce que fera le personnage.",
    "intro": "Salma prépare un moment de récit près de la place. « Aujourd’hui, inventons une histoire ensemble », te propose-t-elle. Un objet donnera le départ ; ton détour et ta décision changeront vraiment la suite. Le conte sera votre création personnelle, écrite en français pour le jeu.",
    "places": [
      {
        "name": "L’entrée de la place",
        "description": "Un point d’accueil fictif près de la place, où Youssef vérifie ses cartes avant la rencontre.",
        "shortName": "Place"
      },
      {
        "name": "Les documents de la place",
        "description": "Une petite table inventée pour comparer la photo et les deux notes sur l’art de raconter.",
        "shortName": "Repères"
      },
      {
        "name": "Le cercle d’écoute",
        "description": "Salma a prévu une rencontre fictive avec quelques personnes. Le groupe laisse les passages libres.",
        "shortName": "Salma"
      }
    ],
    "characters": [
      {
        "name": "Youssef",
        "role": "vient écouter un récit",
        "greeting": "Salma t’attend pour inventer un petit conte. Choisis un objet, puis un détour et une décision. La photo et les notes te permettent aussi de découvrir les conteurs de la place.",
        "questions": [
          {
            "question": "Qu’est-ce que tu préfères quand tu écoutes ?",
            "answer": "J’aime le moment où j’oublie ce qui se passe autour. Je regarde aussi la personne qui raconte. Parfois, une pause me fait attendre la suite plus que beaucoup de mots."
          },
          {
            "question": "On se met où pour la rencontre ?",
            "answer": "On choisira une place où l’on entend bien en laissant le passage libre. Tu pourras ensuite décider si l’on présente d’abord la place ou si l’on laisse Salma commencer son récit."
          }
        ]
      },
      {
        "name": "Salma",
        "role": "conteuse",
        "greeting": "Commençons par un objet. Je poserai ensuite une nouvelle situation, et tu décideras ce que fait ton personnage. Nous garderons le conte que nous aurons créé.",
        "questions": [
          {
            "question": "Tu racontes toujours de la même manière ?",
            "answer": "J’ajuste mon récit à ceux qui sont là. Je peux ralentir, préciser un détail ou laisser davantage de place au silence."
          },
          {
            "question": "On peut inventer une toute petite histoire ?",
            "answer": "Oui ! On peut en créer une en français, juste pour le plaisir. Ce sera notre invention, pas un conte traditionnel de Jemaa el-Fna."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "L’ensemble de la place",
        "text": "La vue panoramique montre des personnes, des installations éclairées et les bâtiments qui bordent la place."
      },
      {
        "label": "Le début de soirée",
        "text": "Le ciel est encore clair et des lumières sont allumées. La légende situe cette vue au début de la soirée, en 2013."
      },
      {
        "label": "Ce qu’on ne peut pas entendre",
        "text": "Cette vue ne permet pas d’identifier un récit ni d’entendre les personnes. Youssef et Salma n’y sont pas représentés."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Une place dans son ensemble",
        "text": "La photographie montre Jemaa el-Fna à Marrakech au début de la soirée. C’est une vue d’ensemble, pas le portrait d’un conteur ni la trace sonore d’un récit.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "La parole et le geste",
        "text": "L’UNESCO décrit un art oral qui associe parole et gestes. Les récits peuvent être adaptés au public et au monde contemporain à partir de trames anciennes.",
        "source": "https://ich.unesco.org/fr/RL/espace-culturel-de-la-place-jemaa-el-fna-00014"
      },
      {
        "id": "partage",
        "title": "Un lieu de rencontre",
        "text": "Jemaa el-Fna réunit des activités quotidiennes et des expressions culturelles, dont les contes, la poésie et la musique. Les habitants et les personnes de passage s’y rencontrent.",
        "source": "https://ich.unesco.org/fr/RL/espace-culturel-de-la-place-jemaa-el-fna-00014"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Le lieu photographié"
        },
        {
          "id": "b",
          "text": "La manière de raconter"
        },
        {
          "id": "c",
          "text": "La rencontre sur la place"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La vue panoramique",
          "text": "Une photographie générale et sa légende de lieu et de date.",
          "correct": "a",
          "question": "Que permet de voir cette photographie de Jemaa el-Fna ?",
          "answers": [
            {
              "id": "a",
              "text": "La place dans son ensemble en début de soirée"
            },
            {
              "id": "b",
              "text": "Les gestes d’un conteur en gros plan"
            },
            {
              "id": "c",
              "text": "Le texte complet d’un conte"
            }
          ],
          "explanation": "La photographie montre Jemaa el-Fna à Marrakech au début de la soirée. C’est une vue d’ensemble, pas le portrait d’un conteur ni la trace sonore d’un récit."
        },
        {
          "id": "geste",
          "name": "La fiche du récit",
          "text": "Les mots, les gestes et l’adaptation d’une histoire à son public.",
          "correct": "b",
          "question": "Sur quoi un conteur peut-il s’appuyer pour raconter ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement une image fixe"
            },
            {
              "id": "b",
              "text": "La parole et les gestes"
            },
            {
              "id": "c",
              "text": "Seulement un texte affiché sans voix"
            }
          ],
          "explanation": "L’UNESCO décrit un art oral qui associe parole et gestes. Les récits peuvent être adaptés au public et au monde contemporain à partir de trames anciennes."
        },
        {
          "id": "partage",
          "name": "La fiche des échanges",
          "text": "Différentes activités et des personnes qui se croisent, s’arrêtent ou écoutent.",
          "correct": "c",
          "question": "Pourquoi situer la rencontre sur cette place ?",
          "answers": [
            {
              "id": "a",
              "text": "Elle est réservée à une seule forme de spectacle"
            },
            {
              "id": "b",
              "text": "Elle n’accueille que des visiteurs de passage"
            },
            {
              "id": "c",
              "text": "Elle réunit des activités et des expressions culturelles"
            }
          ],
          "explanation": "Jemaa el-Fna réunit des activités quotidiennes et des expressions culturelles, dont les contes, la poésie et la musique. Les habitants et les personnes de passage s’y rencontrent."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Confier le conte à Youssef",
        "description": "Faire lire votre création à Youssef.",
        "reply": "Youssef ouvre son carnet pour accueillir votre conte.",
        "place": 0,
        "preparationTitle": "Choisir le début de ce moment",
        "preparationPrompt": "Que lui proposes-tu de regarder d’abord ?",
        "options": [
          {
            "id": "un",
            "label": "Le début et l’objet choisi",
            "reply": "D’accord, nous commencerons ainsi. Le reste de ta création restera disponible.",
            "endingText": "Vous commencez par le début et l’objet choisi. La rencontre se poursuit autour de ce que tu as préparé.",
            "endingReply": "Merci. Nous avons un point de départ à partager."
          },
          {
            "id": "deux",
            "label": "La fin et la décision du personnage",
            "reply": "Oui, cela donnera une autre entrée dans ce que tu as préparé.",
            "endingText": "Ton choix — la fin et la décision du personnage — ouvre une conversation. Les autres personnes découvrent à leur tour la création et les documents.",
            "endingReply": "Ta proposition donne aux autres une place dans cet échange."
          }
        ],
        "endingTitle": "Un moment préparé ensemble"
      },
      {
        "id": "rencontre",
        "title": "Raconter le conte avec Salma",
        "description": "Partager votre histoire avec le petit groupe.",
        "reply": "Salma te propose de raconter avec elle.",
        "place": 2,
        "preparationTitle": "Choisir le début de ce moment",
        "preparationPrompt": "Comment commence votre récit ?",
        "options": [
          {
            "id": "un",
            "label": "Montrer d’abord l’objet du conte",
            "reply": "D’accord, nous commencerons ainsi. Le reste de ta création restera disponible.",
            "endingText": "Vous commencez par montrer d’abord l’objet du conte. La rencontre se poursuit autour de ce que tu as préparé.",
            "endingReply": "Merci. Nous avons un point de départ à partager."
          },
          {
            "id": "deux",
            "label": "Commencer directement par la première phrase",
            "reply": "Oui, cela donnera une autre entrée dans ce que tu as préparé.",
            "endingText": "Ton choix — commencer directement par la première phrase — ouvre une conversation. Les autres personnes découvrent à leur tour la création et les documents.",
            "endingReply": "Ta proposition donne aux autres une place dans cet échange."
          }
        ],
        "endingTitle": "Une création à partager"
      }
    ],
    "practice": {
      "title": "Inventer mon conte",
      "intro": "Invente avec Salma un micro-récit en français. Choisis un début, un détail inattendu et une fin pour cette histoire créée dans le jeu.",
      "steps": [
        {
          "title": "Un personnage et un départ",
          "text": "Quel début choisis-tu pour ta très courte histoire ?",
          "options": [
            {
              "label": "Une voyageuse trouve une boîte oubliée",
              "reply": "« En descendant du car, une voyageuse remarqua une petite boîte sous le banc. » Voilà ton départ."
            },
            {
              "label": "Un libraire reçoit un paquet sans adresse",
              "reply": "« Au matin, un libraire trouva devant sa porte un paquet sans adresse. » Ton histoire commence."
            }
          ]
        },
        {
          "title": "Un détail inattendu",
          "text": "L’objet s’ouvre dans ton imagination. Que contient-il ?",
          "options": [
            {
              "label": "Une clé et un dessin de porte",
              "reply": "« Une clé reposait sur le dessin d’une porte. Pourtant, personne ne reconnaissait cette porte. »"
            },
            {
              "label": "Une lettre pour demain",
              "reply": "« Il y avait une lettre datée du lendemain. Elle commençait ainsi : “Merci d’avoir attendu.” »"
            }
          ]
        },
        {
          "title": "Une fin à choisir",
          "text": "Tu peux fermer l’histoire ou lui laisser une ouverture. Quelle dernière phrase préfères-tu ?",
          "options": [
            {
              "label": "Une rencontre apporte la réponse",
              "reply": "« Une personne arriva, reconnut l’objet et raconta son histoire. Il restait juste assez de temps pour l’écouter. »"
            },
            {
              "label": "Le mystère attendra demain",
              "reply": "« L’objet fut posé près de la fenêtre. Demain, peut-être, quelqu’un viendrait expliquer ce qu’il signifiait. »"
            }
          ]
        }
      ],
      "finishText": "Ton histoire a un début, un détail et une fin. Tu peux la raconter en trois phrases.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/espace-culturel-de-la-place-jemaa-el-fna-00014",
      "sourceLabel": "UNESCO · le contexte culturel, distinct de notre récit inventé"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/espace-culturel-de-la-place-jemaa-el-fna-00014",
        "label": "UNESCO · L’espace culturel de la place Jemaa el-Fna",
        "supports": "Diversité des activités et des expressions culturelles ; rencontre des publics ; parole, gestes et adaptation des récits. Salma, Youssef et tous les extraits narratifs sont inventés."
      },
      {
        "url": "https://ich.unesco.org/en/individual-case-study-00988?id=00014",
        "label": "UNESCO · Étude de cas sur Jemaa el-Fna",
        "supports": "La place comme espace partagé de rencontres, de pratiques culturelles et d’activités commerciales quotidiennes."
      }
    ],
    "guide": {
      "result": "Lire le conte que tes trois choix ont créé et le garder dans ton carnet.",
      "finish": "Faire vivre notre conte →"
    }
  },
  "kenya": {
    "title": "Trouver sa place pour écouter",
    "mission": "Aide Amani et Neema à accueillir des visiteurs qui découvrent la danse isukuti.",
    "intro": "Amani et Neema préparent un moment d’écoute. Pour aider les nouveaux venus à regarder et à écouter, tu vas découvrir les tambours, les voix et les communautés qui font vivre l’isukuti.",
    "places": [
      {
        "name": "La cour d’accueil",
        "description": "Un lieu fictif de fête, où Amani cherche une petite place pour les cartes d’information.",
        "shortName": "Accueil"
      },
      {
        "name": "La table des documents",
        "description": "Une photographie prise lors d’un événement sportif et deux fiches permettent de comparer différents repères.",
        "shortName": "Documents"
      },
      {
        "name": "Le bord de l’espace musical",
        "description": "Un lieu fictif un peu à l’écart des préparatifs, où Neema peut parler sans gêner le groupe.",
        "shortName": "Musique"
      }
    ],
    "characters": [
      {
        "name": "Amani",
        "role": "participe aux préparatifs",
        "greeting": "Bienvenue ! Aide Amani et Neema à accueillir des visiteurs qui découvrent la danse isukuti. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "La photo vient de votre fête ?",
            "answer": "Non, elle vient d’un événement sportif. Sa légende le précise. Je l’ai choisie pour montrer un autre contexte : je ne voudrais pas qu’on la confonde avec notre fête."
          },
          {
            "question": "Où pourrons-nous écouter ?",
            "answer": "Près d’ici, sans nous mettre au milieu des préparatifs. On peut aussi parler avec Neema avant que la rencontre commence."
          }
        ]
      },
      {
        "name": "Neema",
        "role": "musicienne",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : trois angles pour découvrir l’isukuti. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Quels instruments donnent son nom à l’isukuti ?",
            "answer": "Les tambours. La description de l’UNESCO indique trois tailles : un grand, un moyen et un petit. Ils accompagnent le chant et la danse."
          },
          {
            "question": "Comment commencer quand on ne connaît pas ?",
            "answer": "Tu peux choisir un seul point d’attention, puis un autre. Pas besoin de tout repérer tout de suite, ni d’essayer de reproduire ce que tu entends."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les instruments visibles",
        "text": "Plusieurs personnes tiennent des tambours de tailles différentes. Certaines ont la bouche ouverte ; l’image ne permet pas d’entendre ce qu’elles font."
      },
      {
        "label": "Le contexte",
        "text": "Des drapeaux et des bannières entourent la scène. La légende précise un événement contemporain, The Breastfeeding Run."
      },
      {
        "label": "La portée de l’image",
        "text": "Cette représentation de 2025 ne résume pas toutes les pratiques isukuti. Amani et Neema ne sont pas les personnes photographiées."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Une représentation située",
        "text": "La photographie documente des danseurs isukuti lors de The Breastfeeding Run. Son contexte sportif est distinct de la fête fictive de cette aventure.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Tambours, chants et danse",
        "text": "L’isukuti associe danse, tambours et chants. Son nom vient de tambours traditionnellement réunis par trois, de tailles différentes.",
        "source": "https://ich.unesco.org/fr/USL/la-danse-isukuti-des-communautes-isukha-et-idakho-de-l-ouest-du-kenya-00981"
      },
      {
        "id": "partage",
        "title": "Des communautés et des occasions",
        "text": "La tradition concerne les communautés Isukha et Idakho de l’ouest du Kenya. Elle accompagne de nombreuses occasions de la vie et participe à la transmission culturelle entre familles et communautés.",
        "source": "https://ich.unesco.org/fr/USL/la-danse-isukuti-des-communautes-isukha-et-idakho-de-l-ouest-du-kenya-00981"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Le contexte de cette photo"
        },
        {
          "id": "b",
          "text": "Musique et mouvement"
        },
        {
          "id": "c",
          "text": "Vie collective et transmission"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie",
          "text": "Une représentation de 2025 lors d’un événement sportif nommé dans sa légende.",
          "correct": "a",
          "question": "Dans quel contexte les danseurs photographiés se produisent-ils ?",
          "answers": [
            {
              "id": "a",
              "text": "Un événement sportif, The Breastfeeding Run"
            },
            {
              "id": "b",
              "text": "La fête inventée de notre aventure"
            },
            {
              "id": "c",
              "text": "Une séance de fabrication de tambours"
            }
          ],
          "explanation": "La photographie documente des danseurs isukuti lors de The Breastfeeding Run. Son contexte sportif est distinct de la fête fictive de cette aventure."
        },
        {
          "id": "geste",
          "name": "La fiche des composantes",
          "text": "Des tambours de tailles différentes, le chant et la danse.",
          "correct": "b",
          "question": "Qu’allez-vous inviter les visiteurs à écouter et regarder ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement une flûte en solo"
            },
            {
              "id": "b",
              "text": "Les tambours, les chants et la danse"
            },
            {
              "id": "c",
              "text": "Seulement une danse sans musique"
            }
          ],
          "explanation": "L’isukuti associe danse, tambours et chants. Son nom vient de tambours traditionnellement réunis par trois, de tailles différentes."
        },
        {
          "id": "partage",
          "name": "La fiche des communautés",
          "text": "Les communautés Isukha et Idakho et les occasions de se rassembler.",
          "correct": "c",
          "question": "Quelles communautés portent cette tradition présentée dans la fiche ?",
          "answers": [
            {
              "id": "a",
              "text": "Toutes les communautés du Kenya de façon identique"
            },
            {
              "id": "b",
              "text": "Uniquement les personnes présentes sur la photo"
            },
            {
              "id": "c",
              "text": "Les Isukha et les Idakho de l’ouest du Kenya"
            }
          ],
          "explanation": "La tradition concerne les communautés Isukha et Idakho de l’ouest du Kenya. Elle accompagne de nombreuses occasions de la vie et participe à la transmission culturelle entre familles et communautés."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Installer les cartes d’accueil",
        "description": "Préparer avec Amani un petit panneau de repères pour les invités.",
        "reply": "Amani : Merci ! On va le placer ici, où chacun peut s’arrêter sans encombrer le passage.",
        "place": 0,
        "preparationTitle": "Le premier repère",
        "preparationPrompt": "Par quelle carte souhaites-tu ouvrir le panneau ?",
        "options": [
          {
            "id": "un",
            "label": "Commencer par la photo et sa légende",
            "reply": "Amani : Bonne idée. Je préciserai tout de suite qu’elle vient d’un autre événement.",
            "endingText": "Amani précise d’où vient l’image, puis tu montres les deux notes. Les invités regardent les cartes et posent leurs premières questions.",
            "endingReply": "Amani : Voilà, les cartes sont lisibles. On peut rejoindre les autres."
          },
          {
            "id": "deux",
            "label": "Commencer par les communautés",
            "reply": "Amani : D’accord. Les personnes d’abord ; la photo viendra ensuite, avec sa légende complète.",
            "endingText": "Le panneau commence par situer les communautés concernées. Les invités parcourent ensuite les trois cartes et Amani leur propose une place.",
            "endingReply": "Amani : Merci pour ton aide. J’ai gardé une chaise pour toi aussi."
          }
        ],
        "endingTitle": "Un accueil bien préparé"
      },
      {
        "id": "rencontre",
        "title": "Prendre un moment avec Neema",
        "description": "Rejoindre Neema et choisir une première question avant que les préparatifs reprennent.",
        "reply": "Neema : Approchez. Il me reste un moment et je suis contente de voir vos cartes terminées.",
        "place": 2,
        "preparationTitle": "Une question pour commencer",
        "preparationPrompt": "Quel sujet veux-tu proposer à Neema ?",
        "options": [
          {
            "id": "un",
            "label": "Lui demander son souvenir d’apprentissage",
            "reply": "Neema : Je peux vous raconter ma première répétition. J’avais surtout peur d’oublier tout ce que je venais d’apprendre !",
            "endingText": "Neema raconte ce souvenir. Amani lui demande qui l’accompagnait. La discussion continue avant qu’elle rejoigne le groupe.",
            "endingReply": "Neema : Merci d’avoir pris ce temps. Vous pouvez rester près d’Amani si vous le souhaitez."
          },
          {
            "id": "deux",
            "label": "Demander un point d’attention pour écouter",
            "reply": "Neema : Choisis ce qui t’attire d’abord : une voix, un instrument ou un déplacement. Tu pourras changer d’attention ensuite.",
            "endingText": "Tu choisis ton premier repère. Neema rejoint le groupe ; Amani te montre une place libre. Tu peux rester pour observer, sans participer physiquement.",
            "endingReply": "Amani : Installe-toi comme tu veux. Nous pourrons en parler après."
          }
        ],
        "endingTitle": "Écouter avec un premier repère"
      }
    ],
    "practice": {
      "title": "Trois angles pour découvrir l’isukuti",
      "intro": "Neema te propose trois angles d’attention : percussions, voix et mouvements. Tu peux ouvrir le documentaire officiel, puis choisir ce que tu aimerais observer.",
      "steps": [
        {
          "title": "Les percussions",
          "text": "Quel premier repère veux-tu suivre, si tu regardes le documentaire ?",
          "options": [
            {
              "label": "Regarder les instruments",
              "reply": "Cherche les tambours dans une représentation. Le cadrage ne montre pas forcément tous les instruments ensemble."
            },
            {
              "label": "Écouter les sons des percussions",
              "reply": "Choisis un passage où les percussions sont audibles et prête-leur attention. Aucun son n’est à imiter."
            }
          ]
        },
        {
          "title": "La voix",
          "text": "Le film peut contenir des commentaires parlés. Comment veux-tu repérer les passages chantés ?",
          "options": [
            {
              "label": "Chercher une voix qui se détache",
              "reply": "Cherche une voix plus présente dans un passage chanté. Si tu entends un commentaire, tu peux attendre un autre moment."
            },
            {
              "label": "Comparer voix et percussions",
              "reply": "Prête attention à la voix, puis aux instruments. Rien à compter ni à reproduire."
            }
          ]
        },
        {
          "title": "Le mouvement",
          "text": "Quel angle choisis-tu pour observer les passages dansés ?",
          "options": [
            {
              "label": "Regarder une personne un instant",
              "reply": "Suis une personne du regard, sans copier ses gestes. Reviens à l’ensemble quand le cadrage change."
            },
            {
              "label": "Regarder les déplacements du groupe",
              "reply": "Regarde comment le groupe occupe l’espace. Ces scènes ne sont pas un mode d’emploi de la danse."
            }
          ]
        }
      ],
      "finishText": "Tu as choisi tes trois angles d’attention. Tu peux revenir au documentaire quand tu le souhaites.",
      "sourceUrl": "https://ich.unesco.org/fr/video/22194",
      "sourceLabel": "UNESCO · documentaire officiel, Department of Culture, 2013"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/USL/la-danse-isukuti-des-communautes-isukha-et-idakho-de-l-ouest-du-kenya-00981",
        "label": "UNESCO · La danse Isukuti des communautés Isukha et Idakho",
        "supports": "Communautés de l’ouest du Kenya ; chant, danse et tambours de trois tailles ; occasions collectives et transmission. Personnages, fête et souvenirs sont inventés."
      },
      {
        "url": "https://www.unesco.org/archives/multimedia/document-3681",
        "label": "UNESCO · Notice du documentaire Isukuti Dance",
        "supports": "Confirme le documentaire du Department of Culture (2013) et le contexte culturel. La mini-activité propose une observation, pas une reproduction."
      },
      {
        "url": "https://ich.unesco.org/fr/video/22194",
        "label": "UNESCO · Regarder le documentaire officiel",
        "supports": "Accès facultatif au film référencé dans l’escale. Aucun visionnage ni geste physique requis pour finir."
      }
    ],
    "guide": {
      "result": "Voir l’accueil que tu as préparé avec Amani et Neema.",
      "finish": "Rejoindre la rencontre →"
    }
  },
  "mexique": {
    "title": "Le repas commence avant l’assiette",
    "mission": "Aide Mateo et Luz à présenter le travail du maïs avant d’accueillir leurs invités.",
    "intro": "Mateo prépare les tortillas et Luz dispose la table. Ils aimeraient raconter le chemin du maïs jusqu’au repas. Tu vas découvrir un geste de cuisine, puis choisir comment recevoir les invités.",
    "places": [
      {
        "name": "La table de Mateo",
        "description": "Mateo rassemble les cartes et te montre la photo choisie pour l’accueil.",
        "shortName": "Table"
      },
      {
        "name": "Le coin des documents",
        "description": "Les trois supports relient un geste de cuisine, les ingrédients et le travail collectif.",
        "shortName": "Documents"
      },
      {
        "name": "La cuisine de Luz",
        "description": "Luz fait une pause pour répondre à tes questions et préparer la suite.",
        "shortName": "Cuisine"
      }
    ],
    "characters": [
      {
        "name": "Mateo",
        "role": "Donne un coup de main à la cuisine familiale",
        "greeting": "Bienvenue ! Aide Mateo et Luz à présenter le travail du maïs avant d’accueillir leurs invités. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "C’est Luz que l’on voit sur la photographie ?",
            "answer": "Non. Le document vient d’un restaurant de Janitzio. La personne photographiée n’est pas l’un des personnages de notre histoire."
          },
          {
            "question": "Comment veux-tu disposer les cartes ?",
            "answer": "Je n’ai pas décidé. J’aimerais que les invités puissent les lire sans attendre que quelqu’un fasse une présentation. Tu peux nous aider à choisir."
          }
        ]
      },
      {
        "name": "Luz",
        "role": "Cuisinière de la famille",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : composer un repas virtuel. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Pourquoi le maïs revient-il dans les documents ?",
            "answer": "Il occupe une place centrale, avec les haricots et le piment, dans le modèle culinaire décrit par l’UNESCO. Les tortillas en sont un exemple, mais ce n’est pas toute la cuisine mexicaine."
          },
          {
            "question": "On raconte seulement la recette ?",
            "answer": "Gardons aussi une place pour ceux qui cultivent, récoltent et préparent. Pour notre accueil, je propose une carte sur les personnes. Ensuite, chacun pourra raconter ses propres souvenirs."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Le geste",
        "text": "Une personne travaille une pâte sur une pierre. La photographie saisit ses mains en mouvement."
      },
      {
        "label": "Les ustensiles",
        "text": "La pierre de travail occupe le premier plan. Plus loin, on distingue une galette sur une surface de cuisson."
      },
      {
        "label": "Le lieu documenté",
        "text": "La légende situe la préparation de pâte de maïs sur un metate dans un restaurant de Janitzio, au Michoacán."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un geste photographié",
        "text": "La photo documente le travail d’une pâte sur un metate. Elle ne permet pas, à elle seule, de connaître toutes les étapes précédentes.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "La préparation du maïs",
        "text": "La nixtamalisation, préparation du maïs à l’eau de chaux, fait partie des techniques de cette tradition culinaire.",
        "source": "https://ich.unesco.org/fr/RL/la-cuisine-traditionnelle-mexicaine-culture-communautaire-vivante-et-ancestrale-le-paradigme-de-michoacan-00400"
      },
      {
        "id": "partage",
        "title": "Du champ au repas",
        "text": "Les savoirs décrits par l’UNESCO associent agriculture, préparation et partage. Au Michoacán et ailleurs, ils contribuent aux liens communautaires.",
        "source": "https://ich.unesco.org/fr/RL/la-cuisine-traditionnelle-mexicaine-culture-communautaire-vivante-et-ancestrale-le-paradigme-de-michoacan-00400"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Observer le geste visible"
        },
        {
          "id": "b",
          "text": "Découvrir une préparation du maïs"
        },
        {
          "id": "c",
          "text": "Relier les personnes et les étapes"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie de Janitzio",
          "text": "Elle montre le travail d’une pâte sur une pierre.",
          "correct": "a",
          "question": "Quel geste la photographie montre-t-elle ?",
          "answers": [
            {
              "id": "a",
              "text": "Le travail d’une pâte sur un metate"
            },
            {
              "id": "b",
              "text": "La récolte du maïs dans un champ"
            },
            {
              "id": "c",
              "text": "La cuisson d’un plat au four"
            }
          ],
          "explanation": "La photo documente le travail d’une pâte sur un metate. Elle ne permet pas, à elle seule, de connaître toutes les étapes précédentes."
        },
        {
          "id": "geste",
          "name": "La fiche du maïs",
          "text": "Elle présente le traitement du maïs appelé nixtamalisation.",
          "correct": "b",
          "question": "Comment appelle-t-on la préparation du maïs à l’eau de chaux ?",
          "answers": [
            {
              "id": "a",
              "text": "La fermentation du cacao"
            },
            {
              "id": "b",
              "text": "La nixtamalisation"
            },
            {
              "id": "c",
              "text": "La torréfaction du café"
            }
          ],
          "explanation": "La nixtamalisation, préparation du maïs à l’eau de chaux, fait partie des techniques de cette tradition culinaire."
        },
        {
          "id": "partage",
          "name": "La fiche du repas partagé",
          "text": "Elle relie les cultivateurs, la cuisine et les convives.",
          "correct": "c",
          "question": "Que raconte cette tradition au-delà de la recette ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement le dressage de l’assiette"
            },
            {
              "id": "b",
              "text": "Seulement la conservation des ustensiles"
            },
            {
              "id": "c",
              "text": "Les liens entre agriculture, préparation et partage"
            }
          ],
          "explanation": "Les savoirs décrits par l’UNESCO associent agriculture, préparation et partage. Au Michoacán et ailleurs, ils contribuent aux liens communautaires."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Installer les cartes sur la table",
        "description": "Avec Mateo, préparer une invitation à regarder et à poser des questions.",
        "reply": "D’accord. Je vais chercher de petits supports pour les cartes ; elles resteront lisibles entre les assiettes.",
        "place": 0,
        "preparationTitle": "Une entrée pour les invités",
        "preparationPrompt": "Choisis ce que Mateo présentera en premier.",
        "options": [
          {
            "id": "un",
            "label": "La photographie du geste",
            "reply": "Je demanderai quel détail les invités ont repéré avant de lire la légende.",
            "endingText": "Mateo place la photo au centre. Les invités se penchent pour regarder, puis parcourent les autres cartes. Luz arrive et vous laissez les questions ouvrir le repas.",
            "endingReply": "Les cartes sont prêtes. Merci, on peut accueillir tout le monde !"
          },
          {
            "id": "deux",
            "label": "La carte des personnes",
            "reply": "On pourra commencer par remercier les personnes qui ont contribué au repas de notre histoire.",
            "endingText": "Vous placez d’abord la carte des personnes, puis les deux autres supports. Un invité pose une question à Luz. Mateo lui propose de s’asseoir : la conversation peut continuer.",
            "endingReply": "J’aime bien cette entrée. Elle donne une place à chacun autour de la table."
          }
        ],
        "endingTitle": "Les cartes sont à table"
      },
      {
        "id": "rencontre",
        "title": "Préparer un échange avec Luz",
        "description": "Garder les supports près de la cuisine et commencer par une question.",
        "reply": "Je suis partante. Pose les cartes ici ; nous pourrons les reprendre au fil de la discussion.",
        "place": 2,
        "preparationTitle": "Que veux-tu lui demander ?",
        "preparationPrompt": "Choisis une question pour lancer votre rencontre.",
        "options": [
          {
            "id": "un",
            "label": "Quel souvenir voudrait-elle raconter ?",
            "reply": "Laisse-moi y penser une seconde. J’aimerais aussi entendre vos souvenirs.",
            "endingText": "Luz rapproche une chaise. Elle choisit un souvenir de la cuisine de votre histoire, puis demande à Mateo ce qu’il aimerait raconter. Les cartes restent disponibles pour les curieux.",
            "endingReply": "Merci d’avoir laissé de la place aux histoires personnelles."
          },
          {
            "id": "deux",
            "label": "Quelle carte montrer à quelqu’un qui arrive ?",
            "reply": "Regardons-les ensemble. On peut choisir selon la question de la personne.",
            "endingText": "Un invité arrive pendant votre échange. Mateo lui montre les trois cartes et lui propose d’en choisir une. Luz écoute sa question avant de lui répondre.",
            "endingReply": "Nous avons de quoi commencer sans imposer le même parcours à tout le monde."
          }
        ],
        "endingTitle": "La conversation reste ouverte"
      }
    ],
    "practice": {
      "title": "Composer un repas virtuel",
      "intro": "Compose une table virtuelle avec Mateo et Luz : place les tortillas, les haricots et un repère autour du piment.",
      "steps": [
        {
          "title": "Faire une place au maïs",
          "text": "Ta carte de repas comporte des tortillas de maïs. Quelle présentation imagines-tu ?",
          "options": [
            {
              "label": "Une petite pile au centre",
              "reply": "Mateo dessine la pile au milieu de votre table virtuelle."
            },
            {
              "label": "Des tortillas réparties dans les assiettes",
              "reply": "Luz laisse de la place dans chaque assiette de votre dessin."
            }
          ]
        },
        {
          "title": "Ajouter les haricots",
          "text": "Sur cette table imaginaire, où souhaites-tu placer les haricots cuits ?",
          "options": [
            {
              "label": "Dans un plat à partager",
              "reply": "Tu ajoutes un plat au dessin. Mateo déplace une carte pour lui faire de la place."
            },
            {
              "label": "À côté des tortillas",
              "reply": "Tu les dessines à côté. Luz note qu’il s’agit de votre choix pour ce repas virtuel."
            }
          ]
        },
        {
          "title": "Prévoir le piment",
          "text": "Le piment figure parmi les repères de la tradition étudiée. Quelle place lui donnes-tu dans votre repas fictif ?",
          "options": [
            {
              "label": "Une salsa proposée à part",
              "reply": "Vous dessinez un petit bol séparé. Dans votre histoire, chacun choisit s’il souhaite en ajouter."
            },
            {
              "label": "Une carte qui le présente",
              "reply": "Vous gardez ce repère sur une carte descriptive, sans prévoir de dégustation."
            }
          ]
        }
      ],
      "finishText": "Votre table virtuelle est prête. Retrouve aussi la fiche de tortillas dans le carnet de recettes.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/la-cuisine-traditionnelle-mexicaine-culture-communautaire-vivante-et-ancestrale-le-paradigme-de-michoacan-00400",
      "sourceLabel": "UNESCO · les repères du modèle culinaire traditionnel"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/la-cuisine-traditionnelle-mexicaine-culture-communautaire-vivante-et-ancestrale-le-paradigme-de-michoacan-00400",
        "label": "UNESCO · cuisine traditionnelle mexicaine",
        "supports": "Maïs, haricots et piment, nixtamalisation, chaîne collective du champ au repas et liens communautaires. Le repas virtuel est une composition fictive."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:MasaMetate.JPG",
        "label": "Wikimedia Commons · préparation sur un metate",
        "supports": "Provenance et crédit de la photographie de Janitzio ; la personne représentée n’est pas Luz."
      }
    ],
    "guide": {
      "result": "Voir le début du repas et l’échange que tu as préparés.",
      "finish": "Accueillir les invités →"
    }
  },
  "bresil": {
    "title": "À toi de composer l’écoute",
    "mission": "Explore les sons du berimbau avec Joana et Paulo, puis compose une courte écoute à partager.",
    "intro": "Joana a apporté deux enregistrements de berimbau. Paulo aimerait les faire découvrir aux nouveaux venus. Tu vas reconnaître l’instrument, choisir l’ordre de deux extraits et d’une pause, puis décider ce que tu souhaites faire remarquer.",
    "places": [
      {
        "name": "L’accueil de la roda",
        "description": "Joana prépare une place pour les visiteurs et rassemble les documents.",
        "shortName": "Roda"
      },
      {
        "name": "Les repères du cercle",
        "description": "Une photographie et deux fiches invitent à regarder au-delà des deux joueurs.",
        "shortName": "Repères"
      },
      {
        "name": "Le coin d’écoute",
        "description": "Paulo te rejoint pour discuter de la musique et de la place du groupe.",
        "shortName": "Écoute"
      }
    ],
    "characters": [
      {
        "name": "Joana",
        "role": "Participe à la musique d’un groupe de capoeira",
        "greeting": "Joana t’a préparé deux documents sonores. Tu peux les écouter, puis composer leur ordre avec une pause. La photo et les repères expliquent aussi la place du berimbau dans la roda.",
        "questions": [
          {
            "question": "Qui voit-on sur la photo ?",
            "answer": "C’est une roda de l’Engenho da Rainha photographiée en 2022. Ce n’est pas une photo de Paulo et moi : nos personnages sont inventés pour la visite."
          },
          {
            "question": "Je dois essayer les mouvements ?",
            "answer": "Non, tu peux découvrir en regardant et en écoutant. Ici, aucune figure physique n’est demandée. On prépare surtout de quoi comprendre ce qu’on observe."
          }
        ]
      },
      {
        "name": "Paulo",
        "role": "Musicien du groupe",
        "greeting": "Tu peux écouter les deux documents et déplacer les blocs pour composer un petit parcours. Il y a aussi une description sonore si tu préfères lire les repères.",
        "questions": [
          {
            "question": "À quoi sert la musique pendant la roda ?",
            "answer": "Elle accompagne et rythme la rencontre. Le maître peut jouer du berimbau, conduire les chants et le rythme du jeu. L’attention ne va donc pas seulement aux deux joueurs."
          },
          {
            "question": "Les extraits du carnet enregistrent une roda entière ?",
            "answer": "Non. Le premier montre un berimbau seul ; l’autre est annoncé comme joué par trois berimbaus. On peut comparer leurs sons, mais ils ne restituent pas toute une roda."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Au centre",
        "text": "Deux personnes occupent le premier plan, dans des positions différentes. La photographie fige un instant de leur rencontre."
      },
      {
        "label": "Autour",
        "text": "D’autres personnes les entourent. Certaines tiennent des instruments ; on voit aussi des mains rapprochées pour accompagner."
      },
      {
        "label": "Le document",
        "text": "La légende identifie une roda de l’Engenho da Rainha au Brésil, photographiée par Estela Neto en 2022."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Le centre et son entourage",
        "text": "La photographie montre les joueurs et les personnes autour. Un regard sur les bords de l’image complète ce que l’on voit au centre.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Musique et rythme du jeu",
        "text": "Le berimbau est un instrument à une corde. Dans la roda, le maître conduit notamment les chants et le rythme.",
        "source": "https://ich.unesco.org/fr/RL/le-cercle-de-capoeira-00892"
      },
      {
        "id": "partage",
        "title": "Un cercle qui transmet",
        "text": "Cette pratique afro-brésilienne se transmet notamment par observation et imitation. Le cercle porte des règles de respect et une mémoire de résistance à l’oppression.",
        "source": "https://ich.unesco.org/fr/RL/le-cercle-de-capoeira-00892"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Regarder le cercle entier"
        },
        {
          "id": "b",
          "text": "Repérer le rôle musical"
        },
        {
          "id": "c",
          "text": "Comprendre l’apprentissage et le respect"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie de la roda",
          "text": "Elle permet de regarder le centre et les personnes autour.",
          "correct": "a",
          "question": "Où regarder pour comprendre la scène photographiée ?",
          "answers": [
            {
              "id": "a",
              "text": "Au centre et parmi les personnes autour"
            },
            {
              "id": "b",
              "text": "Seulement le sol au centre"
            },
            {
              "id": "c",
              "text": "Seulement les bâtiments au loin"
            }
          ],
          "explanation": "La photographie montre les joueurs et les personnes autour. Un regard sur les bords de l’image complète ce que l’on voit au centre."
        },
        {
          "id": "geste",
          "name": "La fiche du berimbau",
          "text": "Elle relie l’instrument, les chants et le rythme.",
          "correct": "b",
          "question": "Combien de cordes possède le berimbau décrit dans la fiche ?",
          "answers": [
            {
              "id": "a",
              "text": "Quatre cordes"
            },
            {
              "id": "b",
              "text": "Une corde"
            },
            {
              "id": "c",
              "text": "Six cordes"
            }
          ],
          "explanation": "Le berimbau est un instrument à une corde. Dans la roda, le maître conduit notamment les chants et le rythme."
        },
        {
          "id": "partage",
          "name": "La fiche du groupe",
          "text": "Elle explique la transmission des savoirs et les règles de respect.",
          "correct": "c",
          "question": "Comment apprend-on notamment dans la roda ?",
          "answers": [
            {
              "id": "a",
              "text": "Uniquement en étudiant une photographie"
            },
            {
              "id": "b",
              "text": "Sans relation avec les autres participants"
            },
            {
              "id": "c",
              "text": "En observant et en imitant auprès du groupe"
            }
          ],
          "explanation": "Cette pratique afro-brésilienne se transmet notamment par observation et imitation. Le cercle porte des règles de respect et une mémoire de résistance à l’oppression."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Présenter la séquence avec Joana",
        "description": "Faire découvrir les documents et l’ordre que tu as composé.",
        "reply": "Joana prépare les deux documents et votre séquence.",
        "place": 0,
        "preparationTitle": "Choisir le début de ce moment",
        "preparationPrompt": "Par quoi commencez-vous ?",
        "options": [
          {
            "id": "un",
            "label": "Annoncer ce que l’on va écouter",
            "reply": "D’accord, nous commencerons ainsi. Le reste de ta création restera disponible.",
            "endingText": "Vous commencez par annoncer ce que l’on va écouter. La rencontre se poursuit autour de ce que tu as préparé.",
            "endingReply": "Merci. Nous avons un point de départ à partager."
          },
          {
            "id": "deux",
            "label": "Laisser entendre la séquence d’abord",
            "reply": "Oui, cela donnera une autre entrée dans ce que tu as préparé.",
            "endingText": "Ton choix — laisser entendre la séquence d’abord — ouvre une conversation. Les autres personnes découvrent à leur tour la création et les documents.",
            "endingReply": "Ta proposition donne aux autres une place dans cet échange."
          }
        ],
        "endingTitle": "Un moment préparé ensemble"
      },
      {
        "id": "rencontre",
        "title": "Écouter et échanger avec Paulo",
        "description": "Partager vos impressions autour des sons.",
        "reply": "Paulo invite les visiteurs à prendre un moment d’écoute.",
        "place": 2,
        "preparationTitle": "Choisir le début de ce moment",
        "preparationPrompt": "Quelle place donnes-tu aux premières impressions ?",
        "options": [
          {
            "id": "un",
            "label": "Demander un mot pour décrire le son",
            "reply": "D’accord, nous commencerons ainsi. Le reste de ta création restera disponible.",
            "endingText": "Vous commencez par demander un mot pour décrire le son. La rencontre se poursuit autour de ce que tu as préparé.",
            "endingReply": "Merci. Nous avons un point de départ à partager."
          },
          {
            "id": "deux",
            "label": "Demander ce qui change entre les deux extraits",
            "reply": "Oui, cela donnera une autre entrée dans ce que tu as préparé.",
            "endingText": "Ton choix — demander ce qui change entre les deux extraits — ouvre une conversation. Les autres personnes découvrent à leur tour la création et les documents.",
            "endingReply": "Ta proposition donne aux autres une place dans cet échange."
          }
        ],
        "endingTitle": "Une création à partager"
      }
    ],
    "practice": {
      "title": "Créer mon parcours d’écoute",
      "intro": "Joana et Paulo te proposent une pause avec les vrais extraits de berimbau du carnet. Choisis un point d’écoute, puis une question à garder pour le groupe.",
      "steps": [
        {
          "title": "Un berimbau seul",
          "text": "L’extrait « Toque de Angola » dure environ 18 secondes. C’est une démonstration avec des variations. Qu’aimerais-tu suivre ?",
          "options": [
            {
              "label": "Les changements de son",
              "reply": "Paulo te propose de rester attentif aux différences que tu remarques, sans chercher un nom pour chacune."
            },
            {
              "label": "L’ensemble de la courte phrase",
              "reply": "Joana te laisse écouter jusqu’au bout. Tu peux garder une impression générale plutôt que compter."
            }
          ]
        },
        {
          "title": "Plusieurs instruments",
          "text": "L’extrait « Iúna » est présenté par son auteur comme joué par trois berimbaus. Quel point d’écoute choisis-tu ?",
          "options": [
            {
              "label": "Suivre une ligne qui ressort",
              "reply": "Tu choisis un son comme fil conducteur. Pas besoin de réussir à isoler chaque instrument."
            },
            {
              "label": "Écouter leur mélange",
              "reply": "Tu gardes l’ensemble à l’oreille. Paulo rappelle que cet extrait ne contient pas tous les éléments d’une roda."
            }
          ]
        },
        {
          "title": "Revenir au groupe",
          "text": "La photo et les fiches élargissent ce que ces extraits permettent d’entendre. Quelle question gardes-tu pour la rencontre ?",
          "options": [
            {
              "label": "Comment le groupe suit-il les indications ?",
              "reply": "Paulo garde ta question pour l’échange. La fiche sur la musique donnera un premier repère."
            },
            {
              "label": "Comment apprend-on à participer ?",
              "reply": "Joana pose ta question près de la fiche sur l’apprentissage. Vous pourrez en parler ensemble."
            }
          ]
        }
      ],
      "finishText": "Tu as choisi une façon d’écouter et une question à partager avec le groupe.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/le-cercle-de-capoeira-00892",
      "sourceLabel": "UNESCO · musique, transmission et règles dans la roda"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/le-cercle-de-capoeira-00892",
        "label": "UNESCO · le cercle de capoeira",
        "supports": "Pratique afro-brésilienne, disposition du cercle, rôle musical du maître, apprentissage, respect et mémoire de résistance."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Toque-de-angola.ogg",
        "label": "Andrew Archibald · Toque de Angola",
        "supports": "Démonstration de berimbau seul avec variations, environ 18 secondes ; œuvre placée dans le domaine public par son auteur."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:I%C3%BAna.ogg",
        "label": "Djino · Iúna",
        "supports": "Enregistrement annoncé comme joué par trois berimbaus ; extrait de 30 secondes disponible dans le carnet, distinct d’une roda complète."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Roda_de_Capoeira_tradicional_do_Engenho_da_Rainha_4.jpg",
        "label": "Estela Neto · photographie d’une roda",
        "supports": "Provenance du document photographique, distinct des personnages fictifs Joana et Paulo."
      }
    ],
    "guide": {
      "result": "Entendre ta séquence et garder une carte de ton parcours d’écoute.",
      "finish": "Partager notre parcours d’écoute →"
    }
  },
  "perou": {
    "title": "Avant de découvrir le pont",
    "mission": "Prépare avec Elena et Miguel l’accueil de visiteurs du pont Q’eswachaka.",
    "intro": "Elena et Miguel attendent un petit groupe près du pont. Tu vas découvrir ses fibres, son renouvellement et le travail des communautés, puis choisir par quoi commencer la visite.",
    "places": [
      {
        "name": "Le petit accueil",
        "description": "Elena rassemble les documents destinés aux visiteurs.",
        "shortName": "Accueil"
      },
      {
        "name": "La table des fibres",
        "description": "Une photographie et deux fiches distinguent l’ouvrage, les savoir-faire et les communautés.",
        "shortName": "Fibres"
      },
      {
        "name": "L’espace de rencontre",
        "description": "Miguel t’attend pour discuter du travail et préparer l’accueil.",
        "shortName": "Rencontre"
      }
    ],
    "characters": [
      {
        "name": "Elena",
        "role": "Participe aux préparatifs du renouvellement du pont",
        "greeting": "Bienvenue ! Prépare avec Elena et Miguel l’accueil de visiteurs du pont Q’eswachaka. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Où se déroule notre visite ?",
            "answer": "On reste dans cet espace d’accueil de l’histoire. La photographie permet de regarder le pont sans se déplacer sur l’ouvrage. Nos lieux de rencontre sont inventés."
          },
          {
            "question": "Il faut tout connaître pour poser une question ?",
            "answer": "Non. Choisis d’abord un détail qui t’intéresse. Nous avons une photo et deux fiches ; chacune peut donner envie de demander autre chose."
          }
        ]
      },
      {
        "name": "Miguel",
        "role": "Artisan",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : comprendre un assemblage. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Pourquoi renouveler le pont chaque année ?",
            "answer": "Son renouvellement annuel fait partie de la tradition. Des fibres végétales sont préparées et assemblées en cordes. Le travail est conduit par des personnes expérimentées."
          },
          {
            "question": "On parle seulement de construction ?",
            "answer": "Il faut aussi parler des quatre communautés quechuas, de leurs liens et des cérémonies. Les savoir-faire se transmettent notamment dans les familles. L’ouvrage ne raconte donc pas tout à lui seul."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "L’ouvrage",
        "text": "Un pont suspendu relie deux rives rocheuses. Son tablier est accompagné de cordes et de bords tissés."
      },
      {
        "label": "Le paysage",
        "text": "La rivière coule au fond de la gorge. Des parois rocheuses entourent le pont."
      },
      {
        "label": "Le document",
        "text": "La légende identifie Q’eswachaka, dans les Andes péruviennes. La photographie date de 2018 ; elle ne montre pas toutes les étapes de sa rénovation."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un ouvrage dans la gorge",
        "text": "La photographie montre le pont Q’eswachaka au-dessus de la rivière. Elle permet de situer l’ouvrage dans son paysage.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Des fibres aux cordes",
        "text": "Le renouvellement annuel utilise des fibres végétales. Les cordelettes sont réunies en cordes plus grandes sous la conduite de spécialistes.",
        "source": "https://ich.unesco.org/fr/RL/les-connaissances-savoir-faire-et-rituels-lies-a-la-renovation-annuelle-du-pont-q-eswachaka-00594"
      },
      {
        "id": "partage",
        "title": "Quatre communautés et des liens",
        "text": "Quatre communautés quechuas participent à cette tradition. Travail collectif, transmission familiale et cérémonies contribuent à leurs liens.",
        "source": "https://ich.unesco.org/fr/RL/les-connaissances-savoir-faire-et-rituels-lies-a-la-renovation-annuelle-du-pont-q-eswachaka-00594"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Situer le pont dans son paysage"
        },
        {
          "id": "b",
          "text": "Suivre l’assemblage des fibres"
        },
        {
          "id": "c",
          "text": "Comprendre les liens communautaires"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie de Q’eswachaka",
          "text": "L’ouvrage apparaît entre les rives rocheuses, au-dessus de l’eau.",
          "correct": "a",
          "question": "Où le pont photographié est-il installé ?",
          "answers": [
            {
              "id": "a",
              "text": "Au-dessus d’une rivière dans une gorge"
            },
            {
              "id": "b",
              "text": "Sur une grande place urbaine"
            },
            {
              "id": "c",
              "text": "À l’intérieur d’un bâtiment"
            }
          ],
          "explanation": "La photographie montre le pont Q’eswachaka au-dessus de la rivière. Elle permet de situer l’ouvrage dans son paysage."
        },
        {
          "id": "geste",
          "name": "La fiche des cordes",
          "text": "Elle explique le passage des fibres aux assemblages plus grands.",
          "correct": "b",
          "question": "Avec quoi les cordes du pont sont-elles fabriquées ?",
          "answers": [
            {
              "id": "a",
              "text": "Des chaînes de métal"
            },
            {
              "id": "b",
              "text": "Des fibres végétales réunies progressivement"
            },
            {
              "id": "c",
              "text": "Des lames de plastique"
            }
          ],
          "explanation": "Le renouvellement annuel utilise des fibres végétales. Les cordelettes sont réunies en cordes plus grandes sous la conduite de spécialistes."
        },
        {
          "id": "partage",
          "name": "La fiche des communautés",
          "text": "Elle met en relation le travail, l’apprentissage et les cérémonies.",
          "correct": "c",
          "question": "Qui participe à cette tradition de renouvellement annuel ?",
          "answers": [
            {
              "id": "a",
              "text": "Une personne travaillant seule"
            },
            {
              "id": "b",
              "text": "Seulement les visiteurs du pont"
            },
            {
              "id": "c",
              "text": "Quatre communautés quechuas"
            }
          ],
          "explanation": "Quatre communautés quechuas participent à cette tradition. Travail collectif, transmission familiale et cérémonies contribuent à leurs liens."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer les trois repères",
        "description": "Avec Elena, installer les documents au petit accueil.",
        "reply": "Je vais disposer les supports. Les visiteurs pourront les regarder avant de nous poser leurs questions.",
        "place": 0,
        "preparationTitle": "Le premier regard",
        "preparationPrompt": "Quel document souhaites-tu placer à l’entrée ?",
        "options": [
          {
            "id": "un",
            "label": "Le pont dans son paysage",
            "reply": "La photographie donnera un point de départ à ceux qui découvrent le lieu.",
            "endingText": "Elena installe la photo. Vous ajoutez les fiches à côté, puis vous accueillez les visiteurs dans l’espace de l’histoire. Un détail du paysage lance la première question.",
            "endingReply": "Merci. On peut prendre le temps de parler ici, avec les documents sous les yeux."
          },
          {
            "id": "deux",
            "label": "Les personnes avant l’ouvrage",
            "reply": "Je placerai la fiche des communautés en premier et la photographie juste après.",
            "endingText": "Vous ouvrez l’accueil avec la fiche des communautés. Les visiteurs poursuivent vers les autres supports, puis reviennent poser leurs questions à Elena et Miguel.",
            "endingReply": "Les trois documents ont trouvé leur place. Merci de nous avoir aidés à les présenter."
          }
        ],
        "endingTitle": "L’accueil est prêt"
      },
      {
        "id": "rencontre",
        "title": "Préparer un échange avec Miguel",
        "description": "Choisir une première question pour une rencontre documentaire.",
        "reply": "D’accord. Gardons les fiches ici, pour que chacun puisse les reprendre pendant la discussion.",
        "place": 2,
        "preparationTitle": "La question d’ouverture",
        "preparationPrompt": "Quel fil veux-tu suivre avec Miguel et Elena ?",
        "options": [
          {
            "id": "un",
            "label": "Comment regarder un assemblage ?",
            "reply": "On peut partir de la fiche et repérer ensemble ce qu’elle décrit.",
            "endingText": "Miguel rapproche la fiche des fibres. Elena note les questions des visiteurs sur une feuille. Tu restes avec eux pour suivre l’échange, dans l’espace d’accueil.",
            "endingReply": "Vos questions nous aident à choisir ce qu’il faut expliquer plus lentement."
          },
          {
            "id": "deux",
            "label": "Que souhaitent raconter les participants ?",
            "reply": "Laissons aussi Elena choisir un point de départ pour la conversation.",
            "endingText": "Elena choisit une carte. Miguel écoute, puis propose de regarder les deux autres documents. Les visiteurs ajoutent leurs questions et votre rencontre continue autour de la table.",
            "endingReply": "Merci d’avoir préparé un échange où chacun peut prendre la parole."
          }
        ],
        "endingTitle": "Des documents pour se rencontrer"
      }
    ],
    "practice": {
      "title": "Comprendre un assemblage",
      "intro": "Avec Elena et Miguel, organise des cartes pour comprendre le passage des fibres aux cordes, puis ajoute une question sur les personnes qui transmettent ce savoir.",
      "steps": [
        {
          "title": "Choisir l’échelle de départ",
          "text": "Pour lire la fiche, tu peux regarder d’abord un élément ou l’ensemble. Quel point de départ préfères-tu ?",
          "options": [
            {
              "label": "Une fibre isolée",
              "reply": "Tu commences par le plus petit élément de la carte, puis tu suis les regroupements décrits."
            },
            {
              "label": "L’ensemble des cordes",
              "reply": "Tu pars de la vue générale, puis tu reviens aux éléments qui la composent."
            }
          ]
        },
        {
          "title": "Organiser les cartes",
          "text": "La fiche explique que de petits éléments sont réunis en ensembles plus grands. Comment veux-tu représenter cette idée à l’écran ?",
          "options": [
            {
              "label": "Du plus petit vers le plus grand",
              "reply": "Elena aligne les cartes dans ce sens. Tu peux suivre la lecture étape par étape."
            },
            {
              "label": "Du plus grand vers ses composants",
              "reply": "Miguel retourne l’ordre des cartes. La même idée se lit cette fois en remontant vers les composants."
            }
          ]
        },
        {
          "title": "Ajouter les personnes",
          "text": "Un assemblage de matériaux ne suffit pas à raconter la tradition. Quelle question veux-tu garder près de tes cartes ?",
          "options": [
            {
              "label": "Qui transmet les connaissances ?",
              "reply": "Tu relies ta question à la fiche sur les familles et les communautés."
            },
            {
              "label": "Qui guide les différentes étapes ?",
              "reply": "Tu places ta question près de la fiche des savoir-faire, pour en parler avec Miguel."
            }
          ]
        }
      ],
      "finishText": "Tes cartes relient les matériaux aux personnes. Tu peux poursuivre l’échange avec Miguel.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/les-connaissances-savoir-faire-et-rituels-lies-a-la-renovation-annuelle-du-pont-q-eswachaka-00594",
      "sourceLabel": "UNESCO · renouvellement annuel et transmission des savoirs"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/les-connaissances-savoir-faire-et-rituels-lies-a-la-renovation-annuelle-du-pont-q-eswachaka-00594",
        "label": "UNESCO · les savoirs du pont Q’eswachaka",
        "supports": "Renouvellement annuel, fibres et cordes, supervision spécialisée, quatre communautés quechuas, transmission familiale et cérémonies. Les cartes du jeu sont une simplification documentaire."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Inka_suspension_bridge_Qeswachaka_DSC_2730.jpg",
        "label": "Wikimedia Commons · photographie de Q’eswachaka",
        "supports": "Provenance et crédit du document photographique de 2018, distinct des lieux et personnages fictifs."
      }
    ],
    "guide": {
      "result": "Découvrir la première explication donnée au groupe grâce à ton choix.",
      "finish": "Accueillir le groupe →"
    }
  },
  "espagne": {
    "title": "Avant la première note",
    "mission": "Aide Lucía et Diego à accueillir le public d’une rencontre de flamenco.",
    "intro": "Lucía finit d’accorder sa guitare et Diego installe les chaises. Le public arrive bientôt. Tu vas découvrir ce que l’on chante, danse et joue, puis choisir comment ouvrir la rencontre.",
    "places": [
      {
        "name": "La salle de répétition",
        "description": "Lucía prépare sa guitare. Les premières chaises sont déjà en place.",
        "shortName": "Répétition"
      },
      {
        "name": "La table des repères",
        "description": "Une photographie et deux notes attendent leurs légendes.",
        "shortName": "Repères"
      },
      {
        "name": "Le petit patio",
        "description": "Diego prépare l’accueil et cherche une manière de lancer la rencontre.",
        "shortName": "Patio"
      }
    ],
    "characters": [
      {
        "name": "Lucía",
        "role": "guitariste, prépare la répétition",
        "greeting": "Bienvenue ! Aide Lucía et Diego à accueillir le public d’une rencontre de flamenco. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Qu’aimerais-tu faire entendre aux visiteurs ?",
            "answer": "Pour notre rencontre, j’aimerais qu’on prête attention aux échanges entre les artistes. J’ai préparé une courte introduction ; Diego décidera avec toi comment l’amener."
          },
          {
            "question": "Tu as appris dans cette salle ?",
            "answer": "J’y ai rencontré plusieurs personnes avec qui je joue aujourd’hui. J’ai commencé auprès de mon oncle, puis travaillé avec une professeure. Ce lieu est devenu notre rendez-vous."
          }
        ]
      },
      {
        "name": "Diego",
        "role": "bénévole d’une association de flamenco",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : ton invitation en trois touches. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Qu’est-ce qu’une peña ?",
            "answer": "Une association qui réunit des personnes autour du flamenco. Ici, nous organisons des rencontres pour écouter, apprendre et échanger. Tu peux venir avec tes questions, même si tu découvres cet art."
          },
          {
            "question": "Les visiteurs doivent déjà connaître le flamenco ?",
            "answer": "Je leur réserverai le même accueil. On peut commencer par une question toute simple : à quoi avez-vous prêté attention ? Chacun trouvera sa porte d’entrée."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "La danse dans la lumière",
        "text": "Une danseuse occupe le centre de la scène. La lumière bleue souligne sa silhouette, son bras levé et le mouvement de sa robe."
      },
      {
        "label": "Les musiciens à l’arrière",
        "text": "Des musiciens sont visibles dans la partie sombre de la scène. Leurs positions permettent de regarder la place de la danseuse dans cet ensemble."
      },
      {
        "label": "Un concert à Amsterdam",
        "text": "La source situe ce concert de Paco Peña à Amsterdam, en 2012. Cette photographie montre une représentation aux Pays-Bas ; Lucía et Diego sont les personnages inventés du jeu."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un moment à observer",
        "text": "Cette photographie documente une danseuse et les musiciens du groupe de Paco Peña pendant un concert à Amsterdam en 2012.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Cante, baile, toque",
        "text": "Le flamenco associe le chant, appelé cante, la danse, appelée baile, et le jeu instrumental, appelé toque, notamment à la guitare.",
        "source": "https://ich.unesco.org/fr/RL/le-flamenco-00363"
      },
      {
        "id": "partage",
        "title": "Apprendre et se retrouver",
        "text": "Les familles, les artistes et les associations appelées peñas participent à la transmission. Les communautés gitanes ont joué un rôle essentiel dans l’histoire du flamenco.",
        "source": "https://www.juntadeandalucia.es/organismos/culturapatrimoniohistoricoydeporte/areas/cultura/flamenco/patrimonio-cultural-inmaterial/paginas/ley-flamenco.html"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Regarder un moment documenté"
        },
        {
          "id": "b",
          "text": "Distinguer chant, danse et jeu instrumental"
        },
        {
          "id": "c",
          "text": "Comprendre les liens qui font vivre cet art"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie légendée",
          "text": "Un instant réel et ses crédits : regarde le détail que tu as choisi.",
          "correct": "a",
          "question": "Qui vois-tu dans cette scène de concert ?",
          "answers": [
            {
              "id": "a",
              "text": "Une danseuse et des musiciens"
            },
            {
              "id": "b",
              "text": "Un groupe sans instruments"
            },
            {
              "id": "c",
              "text": "Un atelier sans artistes"
            }
          ],
          "explanation": "Cette photographie documente une danseuse et les musiciens du groupe de Paco Peña pendant un concert à Amsterdam en 2012."
        },
        {
          "id": "geste",
          "name": "La note des trois mots",
          "text": "Cante, baile, toque : trois portes d’entrée dans l’expression artistique.",
          "correct": "b",
          "question": "Quels trois mots présentent les expressions du flamenco ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement baile et silence"
            },
            {
              "id": "b",
              "text": "Cante, baile et toque"
            },
            {
              "id": "c",
              "text": "Seulement toque et peinture"
            }
          ],
          "explanation": "Le flamenco associe le chant, appelé cante, la danse, appelée baile, et le jeu instrumental, appelé toque, notamment à la guitare."
        },
        {
          "id": "partage",
          "name": "La note des rencontres",
          "text": "Familles, artistes, associations et communautés : des personnes qui transmettent.",
          "correct": "c",
          "question": "À quoi peut servir une peña ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement à fabriquer des guitares"
            },
            {
              "id": "b",
              "text": "Seulement à vendre des billets"
            },
            {
              "id": "c",
              "text": "À se retrouver pour écouter, apprendre et échanger"
            }
          ],
          "explanation": "Les familles, les artistes et les associations appelées peñas participent à la transmission. Les communautés gitanes ont joué un rôle essentiel dans l’histoire du flamenco."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer un petit parcours de découverte",
        "description": "Installer les documents pour que chacun puisse commencer par observer.",
        "reply": "Je te laisse choisir le premier repère. Lucía nous rejoindra à la table quand elle aura terminé.",
        "place": 0,
        "preparationTitle": "Le début du parcours",
        "preparationPrompt": "Quelle entrée veux-tu donner aux visiteurs ?",
        "options": [
          {
            "id": "un",
            "label": "Commencer par la photographie",
            "reply": "Alors nous leur laisserons un moment pour regarder avant de nommer ce qu’ils découvrent.",
            "endingText": "Tu poses la photographie en tête du parcours. Les visiteurs repèrent des détails différents. Lucía les rejoint, puis relie leurs observations aux trois mots que tu as classés.",
            "endingReply": "Tu as donné à chacun quelque chose à regarder. La répétition peut commencer."
          },
          {
            "id": "deux",
            "label": "Commencer par cante, baile et toque",
            "reply": "Je garderai ma guitare près de moi ; ces mots auront tout de suite un point d’appui.",
            "endingText": "Tu disposes les trois mots à l’entrée. Lucía montre sa guitare, Diego présente les autres repères, puis les visiteurs reviennent à la photographie avec une nouvelle question.",
            "endingReply": "Nos visiteurs ont déjà leurs trois mots en poche. Merci pour la présentation."
          }
        ],
        "endingTitle": "Un parcours avant la première note"
      },
      {
        "id": "rencontre",
        "title": "Ouvrir une conversation dans le patio",
        "description": "Réunir les nouveaux venus autour de Diego avant la répétition.",
        "reply": "Très bien. Je vais rapprocher les chaises. Il nous reste à choisir une question.",
        "place": 2,
        "preparationTitle": "La question d’accueil",
        "preparationPrompt": "Par quoi souhaites-tu ouvrir l’échange ?",
        "options": [
          {
            "id": "un",
            "label": "Demander ce que l’on aimerait écouter",
            "reply": "Je noterai leurs curiosités. Lucía pourra choisir à laquelle répondre pendant la présentation.",
            "endingText": "Dans le patio, les visiteurs disent ce qu’ils aimeraient écouter ou comprendre. Diego retient une question sur la guitare et appelle Lucía. Les documents que tu as classés restent ouverts au milieu du cercle.",
            "endingReply": "Cette question nous donne un début tout trouvé. Viens, nous avons gardé une chaise."
          },
          {
            "id": "deux",
            "label": "Demander comment on apprend un art",
            "reply": "Je raconterai ma première visite ici, puis je laisserai les autres partager leurs souvenirs.",
            "endingText": "Un visiteur parle de la personne qui lui a appris à chanter. Diego raconte sa première visite à l’association. Lucía arrive avec sa guitare et la rencontre commence par ces souvenirs de transmission.",
            "endingReply": "On se connaît un peu mieux maintenant. Les premières notes nous attendent."
          }
        ],
        "endingTitle": "Une chaise dans le patio"
      }
    ],
    "practice": {
      "title": "Ton invitation en trois touches",
      "intro": "Compose une petite invitation imaginaire pour la rencontre. Tes choix changent sa présentation, librement.",
      "steps": [
        {
          "title": "Une première curiosité",
          "text": "Qu’aimerais-tu mettre en avant sur ta carte ?",
          "options": [
            {
              "label": "La voix",
              "reply": "Lucía : Ta carte commence par une voix. Je lui laisse une belle place."
            },
            {
              "label": "La guitare",
              "reply": "Lucía : La guitare donne le point de départ de ton invitation."
            }
          ]
        },
        {
          "title": "Une façon de regarder",
          "text": "Ajoute un deuxième détail pour compléter ton idée.",
          "options": [
            {
              "label": "Un geste dessiné",
              "reply": "Diego : Un geste attire le regard. Tu peux le dessiner à ta manière."
            },
            {
              "label": "Un cercle de chaises",
              "reply": "Diego : Ton invitation évoque déjà un lieu où se rencontrer."
            }
          ]
        },
        {
          "title": "Une phrase personnelle",
          "text": "Choisis le petit mot qui accueillera tes visiteurs.",
          "options": [
            {
              "label": "Qu’aimerais-tu découvrir ?",
              "reply": "Diego : Ta question laisse la porte ouverte aux curieux."
            },
            {
              "label": "Prends place avec nous",
              "reply": "Diego : Voici une invitation qui me donne envie de rapprocher une chaise."
            }
          ]
        }
      ],
      "finishText": "Ton invitation personnelle est prête. Elle prolonge le récit de cette rencontre.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/le-flamenco-00363",
      "sourceLabel": "Repère culturel : le flamenco · UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/le-flamenco-00363",
        "label": "UNESCO · Le flamenco",
        "supports": "Inscription en 2010 ; cante, baile et toque ; ancrages en Andalousie, Murcie et Estrémadure ; rôle des communautés gitanes."
      },
      {
        "url": "https://www.juntadeandalucia.es/organismos/culturapatrimoniohistoricoydeporte/areas/cultura/flamenco/patrimonio-cultural-inmaterial/paginas/ley-flamenco.html",
        "label": "Junta de Andalucía · Le flamenco et ses lieux de transmission",
        "supports": "Pluralité de l’expression artistique, contribution du peuple gitano, transmission familiale et associative, définition des peñas. Dialogues et choix du jeu inventés."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Flamenco_dancer.jpg",
        "label": "Photographie · Karnivoros, CC BY 4.0",
        "supports": "Concert de Paco Peña à Amsterdam, 2012 ; auteur et licence. La photographie n’est pas située dans l’Andalousie du récit."
      }
    ],
    "guide": {
      "result": "Voir le public accueilli selon tes choix et retrouver ton invitation si tu en as créé une.",
      "finish": "Ouvrir la rencontre de flamenco →"
    }
  },
  "finlande": {
    "title": "Bienvenue près du sauna",
    "mission": "Aide Aino et Mikko à préparer l’accueil de visiteurs autour de la culture du sauna.",
    "intro": "Aino et Mikko veulent accueillir un petit groupe. Tu vas découvrir un intérieur de sauna et le mot löyly, puis choisir ce que vous raconterez en premier. Tout se déroule à l’écran.",
    "places": [
      {
        "name": "L’entrée du sauna",
        "description": "Aino rassemble les cartes qui serviront à la visite.",
        "shortName": "Entrée"
      },
      {
        "name": "La table du carnet",
        "description": "Une photographie et deux documents attendent leur place dans le carnet.",
        "shortName": "Carnet"
      },
      {
        "name": "Le banc de l’accueil",
        "description": "Mikko vient d’apporter un souvenir qu’il aimerait raconter.",
        "shortName": "Accueil"
      }
    ],
    "characters": [
      {
        "name": "Aino",
        "role": "organise la visite de ce lieu imaginé",
        "greeting": "Bienvenue ! Aide Aino et Mikko à préparer l’accueil de visiteurs autour de la culture du sauna. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Que veux-tu montrer pendant la visite ?",
            "answer": "J’aimerais qu’on regarde le lieu et qu’on entende les souvenirs des gens qui le connaissent. J’ai laissé une place dans le carnet pour une question des visiteurs."
          },
          {
            "question": "Il existe une seule forme de sauna ?",
            "answer": "La source présente plusieurs formes, dont les saunas électriques, à bois et à fumée. Dans notre carnet, je voudrais montrer cette diversité avec des mots simples."
          }
        ]
      },
      {
        "name": "Mikko",
        "role": "prépare les souvenirs de l’accueil",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : ta carte d’un lieu accueillant. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Quel souvenir as-tu apporté ?",
            "answer": "Je me rappelle surtout mon grand-père qui réparait le banc près de la porte. Je lui tenais ses outils et il me racontait les visites de ses amis."
          },
          {
            "question": "Comment les savoirs se transmettent-ils ?",
            "answer": "Les familles y contribuent beaucoup. Les associations et d’autres lieux d’enseignement partagent aussi les connaissances. Mon souvenir personnel trouvera sa place à côté de ces repères."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Les bancs en bois",
        "text": "Des bancs en bois, installés à plusieurs niveaux, occupent les côtés de cette pièce vide."
      },
      {
        "label": "La lumière et le passage",
        "text": "Des ouvertures laissent entrer la lumière. Les lignes du plancher et des bancs guident le regard dans la longueur de la pièce."
      },
      {
        "label": "Le sauna de Tamminiemi",
        "text": "La photographie montre l’intérieur du sauna de Tamminiemi, à Helsinki, en 2017. Aino, Mikko et leur visite sont imaginés pour le jeu."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un lieu dans son cadre",
        "text": "La photographie documente l’intérieur du sauna de Tamminiemi, à Helsinki. Ses bancs et son aménagement donnent un repère visuel sur ce lieu précis.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Le mot löyly",
        "text": "Löyly désigne notamment la vapeur produite quand de l’eau rencontre les pierres chauffées. Ce mot est au cœur de la description culturelle donnée par l’UNESCO.",
        "source": "https://ich.unesco.org/fr/RL/la-culture-du-sauna-en-finlande-01596"
      },
      {
        "id": "partage",
        "title": "Une tradition qui se transmet",
        "text": "Le sauna appartient à la vie quotidienne et aux moments de fête. Les connaissances circulent dans les familles et les associations qui font vivre cette culture.",
        "source": "https://www.museovirasto.fi/en/articles/sauna-culture-intangible-cultural-heritage"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Situer un lieu photographié"
        },
        {
          "id": "b",
          "text": "Comprendre le mot löyly"
        },
        {
          "id": "c",
          "text": "Découvrir qui transmet cette culture"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie légendée",
          "text": "Un lieu précis et les informations qui accompagnent son image.",
          "correct": "a",
          "question": "Quel lieu la photographie présente-t-elle ?",
          "answers": [
            {
              "id": "a",
              "text": "L’intérieur du sauna de Tamminiemi"
            },
            {
              "id": "b",
              "text": "Une salle de repas"
            },
            {
              "id": "c",
              "text": "Un atelier de tissage"
            }
          ],
          "explanation": "La photographie documente l’intérieur du sauna de Tamminiemi, à Helsinki. Ses bancs et son aménagement donnent un repère visuel sur ce lieu précis."
        },
        {
          "id": "geste",
          "name": "La page du mot finnois",
          "text": "Une courte explication de la vapeur et de sa place dans la tradition.",
          "correct": "b",
          "question": "À quoi le mot löyly renvoie-t-il notamment ?",
          "answers": [
            {
              "id": "a",
              "text": "Au nom d’une serviette"
            },
            {
              "id": "b",
              "text": "À la vapeur produite au contact des pierres chauffées"
            },
            {
              "id": "c",
              "text": "À la lumière qui entre par la fenêtre"
            }
          ],
          "explanation": "Löyly désigne notamment la vapeur produite quand de l’eau rencontre les pierres chauffées. Ce mot est au cœur de la description culturelle donnée par l’UNESCO."
        },
        {
          "id": "partage",
          "name": "La page des personnes",
          "text": "Parents, proches et associations : une culture partagée et transmise.",
          "correct": "c",
          "question": "Comment cette culture se transmet-elle notamment ?",
          "answers": [
            {
              "id": "a",
              "text": "Uniquement dans les guides touristiques"
            },
            {
              "id": "b",
              "text": "Sans échange entre les générations"
            },
            {
              "id": "c",
              "text": "Dans les familles et les associations"
            }
          ],
          "explanation": "Le sauna appartient à la vie quotidienne et aux moments de fête. Les connaissances circulent dans les familles et les associations qui font vivre cette culture."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Terminer le carnet d’accueil",
        "description": "Disposer les documents pour une visite que chacun pourra parcourir à son rythme.",
        "reply": "Aino sera contente de voir son carnet prêt. Je vais chercher de quoi tenir les pages ouvertes.",
        "place": 0,
        "preparationTitle": "La première page",
        "preparationPrompt": "Quel repère veux-tu placer à l’ouverture du carnet ?",
        "options": [
          {
            "id": "un",
            "label": "Ouvrir sur la photographie",
            "reply": "Les visiteurs commenceront par le lieu. Je laisserai une page libre juste après pour leurs observations.",
            "endingText": "Tu ouvres le carnet sur la photographie. Les visiteurs comparent le document au lieu de la visite, puis Aino présente les deux autres pages. Mikko ajoute son souvenir sur le banc de l’entrée.",
            "endingReply": "Tout le monde a trouvé un détail à regarder. Ton carnet nous a donné un bon départ."
          },
          {
            "id": "deux",
            "label": "Ouvrir sur le mot löyly",
            "reply": "Ce mot suscitera sûrement une question. La photographie viendra juste après pour situer la suite.",
            "endingText": "Le mot löyly accueille les visiteurs sur la première page. Une personne demande comment le prononcer ; Aino propose de retrouver la ressource officielle, puis poursuit la présentation avec la photographie et la transmission.",
            "endingReply": "Une question a suffi à ouvrir la visite. Merci d’avoir préparé ces pages."
          }
        ],
        "endingTitle": "Un carnet pour les prochains visiteurs"
      },
      {
        "id": "rencontre",
        "title": "Commencer par les souvenirs",
        "description": "Rejoindre Mikko pour ouvrir la visite par une conversation.",
        "reply": "Je vais poser mon album ici. À toi de choisir la question qui lancera mon histoire.",
        "place": 2,
        "preparationTitle": "Le premier souvenir",
        "preparationPrompt": "Comment souhaites-tu lancer la conversation ?",
        "options": [
          {
            "id": "un",
            "label": "Demander qui lui a transmis un souvenir",
            "reply": "Je commencerai par mon grand-père et ce banc. Ensuite, j’aimerais entendre une autre histoire.",
            "endingText": "Mikko raconte le banc et les outils de son grand-père. Aino montre la page sur la transmission. Un visiteur ajoute le souvenir d’un lieu important pour sa famille et la conversation prend le relais.",
            "endingReply": "Je m’étais promis d’être bref. Heureusement que les autres avaient aussi des choses à raconter !"
          },
          {
            "id": "deux",
            "label": "Demander quel lieu lui reste en mémoire",
            "reply": "Je vais raconter cette entrée et les gens qui y attendaient leurs amis. Tu peux laisser la photographie près de nous.",
            "endingText": "Mikko ouvre son album et parle de l’entrée de son enfance. Les visiteurs observent la photographie du carnet, puis Aino les invite à raconter un lieu qui compte pour eux.",
            "endingReply": "Avec cette image entre nous, j’ai retrouvé le début de mon histoire. Merci."
          }
        ],
        "endingTitle": "Des souvenirs sur le banc de l’accueil"
      }
    ],
    "practice": {
      "title": "Ta carte d’un lieu accueillant",
      "intro": "Imagine une carte souvenir pour un lieu où tu aimerais accueillir quelqu’un. Tout se compose à l’écran.",
      "steps": [
        {
          "title": "Un cadre pour la carte",
          "text": "Choisis librement le décor de ton lieu imaginaire.",
          "options": [
            {
              "label": "Des arbres autour d’une petite maison",
              "reply": "Aino : Ton accueil commence au milieu des arbres."
            },
            {
              "label": "Une porte dans un quartier vivant",
              "reply": "Aino : Ta carte évoque un lieu près des autres maisons."
            }
          ]
        },
        {
          "title": "Un détail à partager",
          "text": "Quel détail veux-tu garder dans ton carnet ?",
          "options": [
            {
              "label": "Un banc pour la conversation",
              "reply": "Mikko : J’imagine déjà quelqu’un qui vient y raconter sa journée."
            },
            {
              "label": "Une page pour dessiner",
              "reply": "Mikko : Tu laisses aux visiteurs une trace à inventer."
            }
          ]
        },
        {
          "title": "Le mot d’accueil",
          "text": "Choisis la phrase qui termine ta carte personnelle.",
          "options": [
            {
              "label": "Entre, on prend le temps",
              "reply": "Aino : Cette phrase donne à ta carte un rythme tranquille."
            },
            {
              "label": "Quel souvenir apportes-tu ?",
              "reply": "Aino : Ta carte invite aussi l’autre à raconter."
            }
          ]
        }
      ],
      "finishText": "Ta carte d’accueil imaginaire est composée. Tu peux garder cette idée dans ton carnet personnel.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/la-culture-du-sauna-en-finlande-01596",
      "sourceLabel": "Repère culturel : la culture du sauna · UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/la-culture-du-sauna-en-finlande-01596",
        "label": "UNESCO · La culture du sauna en Finlande",
        "supports": "Inscription en 2020 ; sens culturel du löyly ; diversité des formes et des pratiques ; lieux familiaux et publics."
      },
      {
        "url": "https://www.museovirasto.fi/en/articles/sauna-culture-intangible-cultural-heritage",
        "label": "Finnish Heritage Agency · Un patrimoine vivant",
        "supports": "Vie quotidienne et fêtes ; transmission familiale et associative ; importance des communautés qui font vivre la tradition. Visite, personnages et souvenirs du jeu inventés."
      },
      {
        "url": "https://commons.wikimedia.org/wiki/File:Tamminiemi_sauna_interior.jpg",
        "label": "Photographie · Ypsilon from Finland, CC0",
        "supports": "Intérieur du sauna de Tamminiemi, 2017 ; auteur et domaine public."
      }
    ],
    "guide": {
      "result": "Découvrir la première page du carnet ou le début de la conversation que tu as choisis.",
      "finish": "Recevoir les visiteurs →"
    }
  },
  "egypte": {
    "title": "Les fils prennent forme",
    "mission": "Prépare avec Mariam et Samir une petite découverte du tissage à la main.",
    "intro": "Mariam dispose les fils et Samir attend les visiteurs. Tu vas découvrir ce qui se prépare avant de tisser, composer un échantillon virtuel si tu le souhaites, puis choisir comment le présenter.",
    "places": [
      {
        "name": "L’entrée de l’atelier",
        "shortName": "Atelier",
        "description": "Mariam accueille les visiteurs près d’un échantillon de tissu."
      },
      {
        "name": "La table des fils",
        "shortName": "Fils",
        "description": "La photographie et deux notes permettent de préparer trois légendes."
      },
      {
        "name": "Le coin de découverte",
        "shortName": "Découverte",
        "description": "Samir attend tes idées pour accueillir les premiers curieux."
      }
    ],
    "characters": [
      {
        "name": "Mariam",
        "role": "tisserande dans notre récit",
        "greeting": "Bienvenue ! Prépare avec Mariam et Samir une petite découverte du tissage à la main. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Je peux toucher le métier ?",
            "answer": "Attends que je te le propose. Pour notre visite, nous avons prévu un échantillon à regarder de près ; le métier reste mon espace de travail."
          },
          {
            "question": "Pourquoi garder ces essais ?",
            "answer": "Sur celui-ci, Samir avait changé d’idée en cours de route. Nous l’avons gardé pour parler des essais et des reprises, pas seulement du tissu terminé."
          }
        ]
      },
      {
        "name": "Samir",
        "role": "apprend auprès de Mariam",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : ton petit échantillon virtuel. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Qu’est-ce qui te demande le plus de patience ?",
            "answer": "C’est de recommencer sans vouloir aller plus vite. Mariam me demande d’abord d’observer ; mes premiers essais attendront leur tour."
          },
          {
            "question": "On montre le tissu ou le travail ?",
            "answer": "Les deux m’intéressent. Nous pouvons préparer une table d’échantillons ou commencer par une question aux visiteurs. Choisis, je m’occupe de l’accueil."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Le métier",
        "text": "Un tisserand est assis derrière un métier. Des fils tendus et des barres transversales sont visibles devant lui."
      },
      {
        "label": "Une image, un contexte",
        "text": "La photographie est légendée en Égypte, sans localisation plus précise. Elle ne permet pas d’identifier un atelier particulier de Haute-Égypte."
      },
      {
        "label": "Nos personnages",
        "text": "Mariam, Samir et leur visite sont inventés. Les personnes éventuellement présentes sur le document ne sont pas les personnages du récit."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Observer un métier",
        "text": "Le document montre un tisserand et des fils tendus en Égypte. Sa localisation précise n’est pas indiquée : ce n’est pas la preuve d’un atelier du Sa’eed.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Une suite de préparations",
        "text": "Le tissage à la main demande de préparer le métier et les fils avant de fabriquer l’étoffe. La notice UNESCO insiste sur la précision et la pratique.",
        "source": "https://ich.unesco.org/fr/USL/le-tissage-a-la-main-en-haute-egypte-sa-eed-01605"
      },
      {
        "id": "partage",
        "title": "Apprendre auprès des tisserands",
        "text": "La transmission repose notamment sur l’observation et la reprise des gestes auprès des personnes expérimentées. Le dossier souligne les difficultés économiques qui la fragilisent.",
        "source": "https://ich.unesco.org/fr/decisions/15.COM/8.a.3"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Les étapes et la précision du travail"
        },
        {
          "id": "b",
          "text": "Une installation à observer"
        },
        {
          "id": "c",
          "text": "L’apprentissage auprès des tisserands"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie",
          "text": "Un document visuel accompagné de sa légende et de ses crédits.",
          "correct": "b",
          "question": "Que peux-tu observer sur la photographie ?",
          "answers": [
            {
              "id": "a",
              "text": "Une étoffe imprimée à la machine"
            },
            {
              "id": "b",
              "text": "Un tisserand et des fils tendus"
            },
            {
              "id": "c",
              "text": "Un atelier de poterie"
            }
          ],
          "explanation": "Le document montre un tisserand et des fils tendus en Égypte. Sa localisation précise n’est pas indiquée : ce n’est pas la preuve d’un atelier du Sa’eed."
        },
        {
          "id": "geste",
          "name": "La note sur les préparations",
          "text": "Elle parle du métier, des fils et du travail nécessaire pour obtenir l’étoffe.",
          "correct": "a",
          "question": "Que faut-il préparer avant de fabriquer l’étoffe ?",
          "answers": [
            {
              "id": "a",
              "text": "Le métier et les fils"
            },
            {
              "id": "b",
              "text": "Seulement le cadre de présentation"
            },
            {
              "id": "c",
              "text": "Seulement une étiquette de prix"
            }
          ],
          "explanation": "Le tissage à la main demande de préparer le métier et les fils avant de fabriquer l’étoffe. La notice UNESCO insiste sur la précision et la pratique."
        },
        {
          "id": "partage",
          "name": "La note sur la transmission",
          "text": "Elle explique comment les gestes s’apprennent et pourquoi leur transmission est fragile.",
          "correct": "c",
          "question": "Comment apprend-on notamment les gestes du tissage ?",
          "answers": [
            {
              "id": "a",
              "text": "En regardant uniquement une étoffe terminée"
            },
            {
              "id": "b",
              "text": "En choisissant seulement des couleurs"
            },
            {
              "id": "c",
              "text": "En observant et en reprenant les gestes auprès de personnes expérimentées"
            }
          ],
          "explanation": "La transmission repose notamment sur l’observation et la reprise des gestes auprès des personnes expérimentées. Le dossier souligne les difficultés économiques qui la fragilisent."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Installer une table d’échantillons",
        "description": "Donner aux visiteurs le temps d’observer avant d’échanger avec Mariam.",
        "reply": "D’accord. Je libère une table. Nous allons choisir ce que l’on pose au milieu.",
        "place": 0,
        "preparationTitle": "Un point de départ",
        "preparationPrompt": "Quelle pièce veux-tu mettre en avant ?",
        "endingTitle": "Une table qui donne envie de regarder",
        "options": [
          {
            "id": "un",
            "label": "Mettre un échantillon terminé au centre",
            "reply": "Je le pose bien à plat. Nous garderons les notes à côté pour les questions.",
            "endingText": "Tu installes l’échantillon au centre de la table. Un visiteur se penche pour regarder les fils ; Mariam lui propose ensuite de comparer avec un essai.",
            "endingReply": "Ton installation leur a laissé le temps de voir les détails. Maintenant, je peux raconter le travail."
          },
          {
            "id": "deux",
            "label": "Présenter un essai avec sa reprise",
            "reply": "Très bien. Samir pourra dire pourquoi nous l’avons conservé.",
            "endingText": "L’essai ouvre la visite. Samir explique ce qu’il avait voulu changer, et quelqu’un lui demande de montrer la reprise. Mariam apporte l’échantillon terminé pour comparer.",
            "endingReply": "Je croyais que personne ne s’intéresserait à mon essai. Il nous a donné une bonne première question !"
          }
        ]
      },
      {
        "id": "rencontre",
        "title": "Commencer par une courte conversation",
        "description": "Inviter les visiteurs à poser une question avant de regarder les échantillons.",
        "reply": "Je les accueille ici. Une question suffit pour commencer ; nous avons les documents sous la main.",
        "place": 2,
        "preparationTitle": "La première question",
        "preparationPrompt": "Comment lances-tu la visite ?",
        "endingTitle": "Une conversation au bord des fils",
        "options": [
          {
            "id": "un",
            "label": "Demander ce que les visiteurs remarquent",
            "reply": "Je leur laisse un moment pour regarder avant de parler.",
            "endingText": "Tu demandes ce que chacun remarque. Les réponses portent sur les fils, l’espace du métier et les détails du tissu. Mariam choisit un de ces regards pour commencer son explication.",
            "endingReply": "Vous n’avez pas tous vu la même chose. C’est une belle façon d’ouvrir la visite."
          },
          {
            "id": "deux",
            "label": "Demander comment on apprend un geste",
            "reply": "Je peux commencer par mon premier essai, puis laisser Mariam raconter le sien.",
            "endingText": "Ta question amène Samir à raconter un essai manqué. Une visiteuse évoque un geste qu’elle a appris de quelqu’un d’autre. Mariam rapproche les échantillons pour poursuivre l’échange.",
            "endingReply": "Nous avons commencé par parler d’apprentissage, et maintenant tout le monde veut regarder les tissus."
          }
        ]
      }
    ],
    "practice": {
      "title": "Ton petit échantillon virtuel",
      "intro": "Compose une petite étude de fils à l’écran. Tes couleurs et ta présentation sont libres ; ce n’est pas la reproduction d’un motif traditionnel.",
      "steps": [
        {
          "title": "Un premier contraste",
          "text": "Choisis les couleurs que tu aimerais rapprocher pour ton étude.",
          "options": [
            {
              "label": "Bleu et crème",
              "reply": "Samir : Je garde ces deux couleurs pour ton essai. Elles t’appartiennent, sans signification imposée."
            },
            {
              "label": "Terre et crème",
              "reply": "Samir : Ce sera ton point de départ. Tu peux imaginer les fils côte à côte."
            }
          ]
        },
        {
          "title": "Le rythme des rangées",
          "text": "Choisis la place des rangées claires dans ta composition.",
          "options": [
            {
              "label": "Une rangée claire",
              "reply": "Mariam : Une rangée se détache. Nous la présenterons comme ton choix de composition."
            },
            {
              "label": "Deux rangées claires",
              "reply": "Mariam : Les deux rangées modifient le rythme. Regarde ce que cela change sur ton étude."
            }
          ]
        },
        {
          "title": "Un cadre pour ton étude",
          "text": "Termine la présentation de ton échantillon personnel.",
          "options": [
            {
              "label": "Cadre clair",
              "reply": "Samir : Ce cadre prolonge les tons clairs. Ton étude reste une création libre."
            },
            {
              "label": "Cadre foncé",
              "reply": "Samir : Le cadre foncé donne une limite plus marquée à ton étude. C’est ton choix."
            }
          ]
        }
      ],
      "finishText": "Ton étude personnelle est prête. Tu peux revenir aux documents pour distinguer cet essai libre du savoir-faire des tisserands.",
      "sourceUrl": "https://ich.unesco.org/fr/USL/le-tissage-a-la-main-en-haute-egypte-sa-eed-01605",
      "sourceLabel": "Le tissage à la main en Haute-Égypte · UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/USL/le-tissage-a-la-main-en-haute-egypte-sa-eed-01605",
        "label": "UNESCO · Le tissage à la main en Haute-Égypte",
        "supports": "Travail de préparation, précision, matériaux et inscription en 2020 sur la Liste de sauvegarde urgente."
      },
      {
        "url": "https://ich.unesco.org/fr/decisions/15.COM/8.a.3",
        "label": "UNESCO · Décision 15.COM 8.a.3",
        "supports": "Apprentissage par observation et imitation, fragilité de la transmission et participation des communautés."
      }
    ],
    "guide": {
      "result": "Voir la table d’échantillons ou la conversation que tu as préparées.",
      "finish": "Ouvrir la visite de l’atelier →"
    }
  },
  "mongolie": {
    "title": "La maison qui voyage",
    "mission": "Aide Saran et Bataa à faire découvrir les éléments d’un ger aux visiteurs.",
    "intro": "Saran et Bataa ont préparé une table de maquette. Tu vas découvrir les éléments du ger, en composer une version illustrée si tu le souhaites, puis choisir comment expliquer cette maison démontable.",
    "places": [
      {
        "name": "Le seuil du ger",
        "shortName": "Le seuil",
        "description": "Saran t’accueille à côté de la maquette préparée pour la visite."
      },
      {
        "name": "La table des éléments",
        "shortName": "Éléments",
        "description": "Photographie, note de structure et note d’apprentissage attendent leur place."
      },
      {
        "name": "Le coin des visiteurs",
        "shortName": "Accueil",
        "description": "Bataa prépare les explications et une activité virtuelle."
      }
    ],
    "characters": [
      {
        "name": "Saran",
        "role": "organise la découverte du ger",
        "greeting": "Bienvenue ! Aide Saran et Bataa à faire découvrir les éléments d’un ger aux visiteurs. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "C’est un véritable montage ?",
            "answer": "Aujourd’hui, nous utilisons cette maquette. Nous pouvons déplacer ses éléments sans prétendre apprendre à construire un ger en quelques minutes."
          },
          {
            "question": "Pourquoi cette petite maquette ?",
            "answer": "On peut la regarder de tous les côtés. J’aimerais m’en servir pour relier les objets visibles à leur rôle, puis parler des personnes qui les fabriquent."
          }
        ]
      },
      {
        "name": "Bataa",
        "role": "prépare les supports de la visite",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : une maquette à composer. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Tu préfères montrer ou raconter ?",
            "answer": "J’aime commencer par un objet, puis écouter les questions. Mais Saran fait parfois l’inverse, et cela fonctionne aussi. Tu peux choisir notre départ."
          },
          {
            "question": "Je pourrai essayer quelque chose ?",
            "answer": "Oui, un assemblage virtuel. Il sert à repérer les grandes parties ; le montage réel demande un savoir-faire et du travail en commun."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "La forme",
        "text": "La photographie montre un ger couvert dans la steppe. Sa silhouette ronde se distingue ; l’armature est cachée par la couverture."
      },
      {
        "label": "Le contexte",
        "text": "Le document a été pris près de Mandalgovi. Il présente un lieu précis et ne résume pas toutes les façons d’habiter en Mongolie."
      },
      {
        "label": "La scène du jeu",
        "text": "La maquette et la rencontre avec Saran et Bataa sont inventées ; la photographie reste un document indépendant."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Un habitat à observer",
        "text": "La photographie donne un point de départ visuel pour regarder la forme du ger. Sa légende indique le contexte du document.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Une structure démontable",
        "text": "Le ger associe une armature de bois, des couvertures de feutre et de toile, et des cordes. Ses éléments permettent de le démonter, de le transporter et de le remonter.",
        "source": "https://ich.unesco.org/en/RL/traditional-craftsmanship-of-the-mongol-ger-and-its-associated-customs-00872"
      },
      {
        "id": "partage",
        "title": "Des savoirs en commun",
        "text": "La fabrication réunit plusieurs savoir-faire. Les plus jeunes apprennent notamment auprès d’artisans expérimentés et en observant les opérations familiales.",
        "source": "https://ich.unesco.org/en/Decisions/8.COM/8.20"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "Regarder la forme du ger"
        },
        {
          "id": "b",
          "text": "Comprendre les éléments de sa structure"
        },
        {
          "id": "c",
          "text": "Découvrir le travail et l’apprentissage en commun"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie du ger",
          "text": "Elle présente un habitat dans un contexte documenté.",
          "correct": "a",
          "question": "Quel habitat reconnais-tu sur la photographie ?",
          "answers": [
            {
              "id": "a",
              "text": "Un ger"
            },
            {
              "id": "b",
              "text": "Un immeuble en briques"
            },
            {
              "id": "c",
              "text": "Une maison sur pilotis"
            }
          ],
          "explanation": "La photographie donne un point de départ visuel pour regarder la forme du ger. Sa légende indique le contexte du document."
        },
        {
          "id": "geste",
          "name": "La note sur les éléments",
          "text": "Bois, couvertures et cordes : elle distingue les grandes parties.",
          "correct": "b",
          "question": "Quels éléments entrent dans la structure décrite ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement des murs de pierre"
            },
            {
              "id": "b",
              "text": "Du bois, des couvertures de feutre et de toile, et des cordes"
            },
            {
              "id": "c",
              "text": "Seulement des panneaux de verre"
            }
          ],
          "explanation": "Le ger associe une armature de bois, des couvertures de feutre et de toile, et des cordes. Ses éléments permettent de le démonter, de le transporter et de le remonter."
        },
        {
          "id": "partage",
          "name": "La note sur les personnes",
          "text": "Elle parle de fabrication, de coopération et d’apprentissage.",
          "correct": "c",
          "question": "Pourquoi parle-t-on de plusieurs savoir-faire ?",
          "answers": [
            {
              "id": "a",
              "text": "Une photographie suffit à fabriquer tous les éléments"
            },
            {
              "id": "b",
              "text": "Chaque élément est toujours fabriqué sans apprentissage"
            },
            {
              "id": "c",
              "text": "La fabrication réunit des gestes appris auprès des artisans et des proches"
            }
          ],
          "explanation": "La fabrication réunit plusieurs savoir-faire. Les plus jeunes apprennent notamment auprès d’artisans expérimentés et en observant les opérations familiales."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer une table de maquette",
        "description": "Présenter les éléments avant la conversation.",
        "reply": "Je pose la maquette devant nous. Décidons ce que les visiteurs regarderont d’abord.",
        "place": 0,
        "preparationTitle": "Un premier repère",
        "preparationPrompt": "Par quoi commences-tu la présentation ?",
        "endingTitle": "Les éléments prennent leur place",
        "options": [
          {
            "id": "un",
            "label": "Montrer l’armature de la maquette",
            "reply": "Je garde la couverture à côté pour que l’intérieur de la structure reste visible.",
            "endingText": "La maquette laisse voir son armature. Les visiteurs suivent les éléments du regard, puis Bataa rapproche la note qui décrit les couvertures et les cordes.",
            "endingReply": "On peut maintenant passer de la petite maquette à la photographie sans perdre les repères."
          },
          {
            "id": "deux",
            "label": "Comparer la maquette et la photographie",
            "reply": "Je les installe côte à côte. Les différences nous donneront de quoi parler.",
            "endingText": "Tu places la maquette près du document. Une visiteuse repère la forme ronde, un autre s’interroge sur ce que la photo ne montre pas. Saran ouvre la note sur les éléments.",
            "endingReply": "La comparaison nous a donné une question précise. Nous avons de quoi y répondre."
          }
        ]
      },
      {
        "id": "rencontre",
        "title": "Ouvrir l’échange avec les visiteurs",
        "description": "Partir d’une question, puis utiliser la maquette pour poursuivre.",
        "reply": "Nous pouvons les accueillir ici. Choisissons une question qui donne envie de regarder.",
        "place": 2,
        "preparationTitle": "Une invitation à observer",
        "preparationPrompt": "Quelle question proposes-tu ?",
        "endingTitle": "La visite commence par un échange",
        "options": [
          {
            "id": "un",
            "label": "Qu’aimeriez-vous voir à l’intérieur ?",
            "reply": "Je note les idées. La maquette nous aidera à en discuter.",
            "endingText": "Les visiteurs proposent ce qu’ils aimeraient voir. Saran distingue les questions auxquelles la maquette répond de celles qui demanderaient d’autres documents.",
            "endingReply": "Vous avez choisi de regarder plus loin que la forme extérieure. Gardons vos questions pour la suite."
          },
          {
            "id": "deux",
            "label": "Quels savoir-faire faut-il réunir ?",
            "reply": "Je prépare les notes. Nous pourrons relier les éléments aux personnes qui les réalisent.",
            "endingText": "La conversation commence par les matières et les gestes. Bataa montre la note de transmission, puis Saran s’appuie sur la maquette pour rendre les explications plus concrètes.",
            "endingReply": "Notre petite maison nous a conduits vers tout un travail en commun. Merci pour cette entrée en matière."
          }
        ]
      }
    ],
    "practice": {
      "title": "Une maquette à composer",
      "intro": "Compose une maquette illustrée : structure, enveloppe, puis liens extérieurs. Tes couleurs sont libres. L’apparition des éléments est un choix du jeu, pas l’ordre d’un montage réel.",
      "steps": [
        {
          "title": "La structure",
          "text": "Choisis une teinte pour l’armature de ton modèle illustré.",
          "options": [
            {
              "label": "Bois clair",
              "reply": "Saran : Les éléments apparaissent dans une teinte claire. C’est ton choix pour cette maquette."
            },
            {
              "label": "Bois foncé",
              "reply": "Saran : La teinte foncée fait ressortir la structure. Notre dessin reste une étude simplifiée."
            }
          ]
        },
        {
          "title": "L’enveloppe",
          "text": "Ajoute la couverture à ton modèle avec une couleur de ton choix.",
          "options": [
            {
              "label": "Feutre crème",
              "reply": "Bataa : La couverture crème apparaît sur ton modèle. La note documentaire distingue les matières utilisées dans le ger."
            },
            {
              "label": "Feutre ocre",
              "reply": "Bataa : Cette teinte ocre appartient à ton modèle libre. Nous ne la présenterons pas comme une règle traditionnelle."
            }
          ]
        },
        {
          "title": "Les liens extérieurs",
          "text": "Choisis comment représenter les liens sur ta maquette, sans en faire un plan de construction.",
          "options": [
            {
              "label": "Deux bandes larges",
              "reply": "Saran : Ces deux bandes donnent un repère visuel à ta maquette. Leur nombre et leur largeur sont un choix du jeu."
            },
            {
              "label": "Trois bandes fines",
              "reply": "Saran : Les trois bandes complètent ton illustration. Ce petit modèle n’indique pas comment fixer un ger réel."
            }
          ]
        }
      ],
      "finishText": "Ta présentation virtuelle est prête. Le dossier documentaire permet de retrouver les savoir-faire et les coutumes que cette petite maquette ne peut pas résumer.",
      "sourceUrl": "https://ich.unesco.org/en/RL/traditional-craftsmanship-of-the-mongol-ger-and-its-associated-customs-00872",
      "sourceLabel": "Artisanat du ger mongol et coutumes associées · UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/en/RL/traditional-craftsmanship-of-the-mongol-ger-and-its-associated-customs-00872",
        "label": "UNESCO · Artisanat du ger mongol",
        "supports": "Structure, matériaux, démontage et transport ; rôle social et culturel de cet habitat."
      },
      {
        "url": "https://ich.unesco.org/en/Decisions/8.COM/8.20",
        "label": "UNESCO · Décision 8.COM 8.20",
        "supports": "Participation familiale et communautaire, transmission entre générations, inscription en 2013."
      }
    ],
    "guide": {
      "result": "Voir le début de ta présentation et ta maquette si tu l’as composée.",
      "finish": "Présenter le ger aux visiteurs →"
    }
  },
  "senegal": {
    "title": "Une place autour du plat",
    "mission": "Aide Awa et Ibrahima à accueillir leurs invités autour du ceebu jën.",
    "intro": "Awa termine le repas et Ibrahima prépare l’accueil. Tu vas découvrir le plat et son histoire, composer une invitation si tu le souhaites, puis choisir comment lancer la conversation à table.",
    "places": [
      {
        "name": "La cour de la cuisine",
        "shortName": "Cuisine",
        "description": "Awa termine les préparatifs de son repas et garde une place pour tes questions."
      },
      {
        "name": "La petite table des documents",
        "shortName": "Documents",
        "description": "Une photographie et deux notes permettent de distinguer le plat, ses variantes et sa transmission."
      },
      {
        "name": "Le coin du repas",
        "shortName": "Le repas",
        "description": "Ibrahima prépare l’accueil et attend ton idée pour commencer la rencontre."
      }
    ],
    "characters": [
      {
        "name": "Awa",
        "role": "prépare le repas de notre récit",
        "greeting": "Bienvenue ! Aide Awa et Ibrahima à accueillir leurs invités autour du ceebu jën. Regarde d’abord la photographie et les deux repères. Nous préparerons ensuite l’accueil ensemble.",
        "questions": [
          {
            "question": "Tu as suivi une recette unique ?",
            "answer": "J’ai choisi une version que j’aime préparer. Les recettes changent selon les familles et les régions ; ce repas sera notre façon d’accueillir les visiteurs."
          },
          {
            "question": "Je peux te donner un coup de main ?",
            "answer": "Oui : aide Ibrahima à préparer la présentation. Moi, je termine ici. Nous garderons le temps de regarder le plat ensemble avant de servir."
          }
        ]
      },
      {
        "name": "Ibrahima",
        "role": "accueille les invités",
        "greeting": "Tu as de quoi présenter cette découverte. Si tu veux essayer avant la rencontre : prépare un accueil virtuel. Tu peux aussi passer directement aux trois questions des visiteurs.",
        "questions": [
          {
            "question": "Que faut-il expliquer d’abord ?",
            "answer": "J’aimerais qu’on évite de transformer le repas en leçon. Nous pouvons laisser les documents à regarder ou lancer une seule question avant de manger."
          },
          {
            "question": "Qui va raconter son souvenir ?",
            "answer": "Celles et ceux qui en ont envie. Awa en a un, moi aussi ; les invités pourront apporter le leur sans devoir être d’accord avec nous."
          }
        ]
      }
    ],
    "photoNotes": [
      {
        "label": "Le plat",
        "text": "La photographie montre du riz, du poisson et des légumes dans un grand plat métallique. Une main et une cuillère sont visibles."
      },
      {
        "label": "Les limites de l’image",
        "text": "Une photographie montre une préparation particulière. On ne peut pas en déduire une recette valable pour toutes les familles."
      },
      {
        "label": "Le repas du récit",
        "text": "Awa, Ibrahima et leurs invités sont inventés ; la photo ne documente pas le repas de ces personnages."
      }
    ],
    "clues": [
      {
        "id": "photo",
        "title": "Regarder une présentation",
        "text": "La photographie documente une présentation de ceebu jën. Elle permet d’observer le plat, sans dresser la liste complète de sa recette.",
        "source": "photo"
      },
      {
        "id": "geste",
        "title": "Un plat et ses variantes",
        "text": "Le dossier situe les origines du ceebu jën dans les communautés de pêcheurs de l’île de Saint-Louis. Il décrit notamment du riz, du poisson et des légumes, avec des variantes régionales.",
        "source": "https://ich.unesco.org/fr/RL/le-ceebu-jn-art-culinaire-du-sngal-01748"
      },
      {
        "id": "partage",
        "title": "Apprendre et participer",
        "text": "La préparation et les usages du repas se transmettent entre générations. Le dossier décrit un apprentissage oral et une participation progressive des enfants aux tâches.",
        "source": "https://ich.unesco.org/fr/decisions/16.COM/8.B.36"
      }
    ],
    "puzzle": {
      "prompt": "Les visiteurs ont trois questions. Aide-nous à leur répondre avec ce que tu viens de découvrir.",
      "labels": [
        {
          "id": "a",
          "text": "L’apprentissage et la participation"
        },
        {
          "id": "b",
          "text": "Le plat visible sur la photographie"
        },
        {
          "id": "c",
          "text": "Les ingrédients et les variantes"
        }
      ],
      "supports": [
        {
          "id": "photo",
          "name": "La photographie",
          "text": "Elle montre une présentation particulière du plat.",
          "correct": "b",
          "question": "Quel plat cette photographie présente-t-elle ?",
          "answers": [
            {
              "id": "a",
              "text": "Un plat de tortillas"
            },
            {
              "id": "b",
              "text": "Du ceebu jën"
            },
            {
              "id": "c",
              "text": "Une soupe miso"
            }
          ],
          "explanation": "La photographie documente une présentation de ceebu jën. Elle permet d’observer le plat, sans dresser la liste complète de sa recette."
        },
        {
          "id": "geste",
          "name": "La note sur la préparation",
          "text": "Elle évoque riz, poisson, légumes et diversité des recettes.",
          "correct": "c",
          "question": "Quels ingrédients la fiche du ceebu jën met-elle notamment en avant ?",
          "answers": [
            {
              "id": "a",
              "text": "Seulement du riz et du lait"
            },
            {
              "id": "b",
              "text": "Seulement de la farine et du beurre"
            },
            {
              "id": "c",
              "text": "Du riz, du poisson et des légumes"
            }
          ],
          "explanation": "Le dossier situe les origines du ceebu jën dans les communautés de pêcheurs de l’île de Saint-Louis. Il décrit notamment du riz, du poisson et des légumes, avec des variantes régionales."
        },
        {
          "id": "partage",
          "name": "La note sur les générations",
          "text": "Elle parle des personnes qui apprennent et prennent part aux préparatifs.",
          "correct": "a",
          "question": "Comment les savoirs du repas se transmettent-ils notamment ?",
          "answers": [
            {
              "id": "a",
              "text": "Par les échanges oraux et la participation progressive aux tâches"
            },
            {
              "id": "b",
              "text": "Uniquement par une recette imprimée"
            },
            {
              "id": "c",
              "text": "Sans participation des plus jeunes"
            }
          ],
          "explanation": "La préparation et les usages du repas se transmettent entre générations. Le dossier décrit un apprentissage oral et une participation progressive des enfants aux tâches."
        }
      ],
      "hint": "Tu peux relire le repère affiché sous la question, réessayer ou choisir « Me montrer la réponse ». Aucun essai ne fait perdre de points."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer un coin de découverte",
        "description": "Laisser les supports à disposition avant de passer à table.",
        "reply": "Je dégage un coin de la table. Nous pouvons y installer un premier support.",
        "place": 0,
        "preparationTitle": "Ce que l’on regarde d’abord",
        "preparationPrompt": "Quel support mets-tu en avant ?",
        "endingTitle": "Le repas se découvre avant de se raconter",
        "options": [
          {
            "id": "un",
            "label": "Placer la photographie en premier",
            "reply": "Je la pose à côté des deux notes. Nous répondrons aux questions quand tout le monde sera installé.",
            "endingText": "Les invités commencent par regarder le document. L’un d’eux cherche un ingrédient qu’il reconnaît. Awa explique que la photo et son propre plat sont deux préparations différentes.",
            "endingReply": "Cette comparaison nous a permis de parler des variantes. Nous pouvons maintenant passer à table."
          },
          {
            "id": "deux",
            "label": "Ouvrir sur la note des variantes",
            "reply": "Très bien. Elle nous rappellera de laisser de la place aux différentes recettes.",
            "endingText": "La note sur les variantes ouvre la découverte. Une invitée évoque une préparation qu’elle connaît ; Ibrahima l’écoute puis lui montre la photographie.",
            "endingReply": "Nous n’avons pas cherché une seule bonne recette. Nous avons commencé à comparer nos souvenirs."
          }
        ]
      },
      {
        "id": "rencontre",
        "title": "Lancer une conversation à table",
        "description": "Garder les supports sous la main et commencer par une invitation à parler.",
        "reply": "Les places sont prêtes. Choisissons une question, puis nous laisserons la conversation suivre son chemin.",
        "place": 2,
        "preparationTitle": "Une question avant le repas",
        "preparationPrompt": "Comment ouvres-tu l’échange ?",
        "endingTitle": "Une place pour les récits du repas",
        "options": [
          {
            "id": "un",
            "label": "Qui vous a appris un geste de cuisine ?",
            "reply": "J’ai un souvenir en tête. Je laisserai d’abord répondre les invités.",
            "endingText": "Tu poses la question. Une invitée parle de sa grand-mère ; Ibrahima raconte sa première tâche dans une cuisine. Awa apporte le plat pendant que les récits se répondent.",
            "endingReply": "Nous avons fait de la place aux personnes derrière les recettes. Tu peux t’installer avec nous."
          },
          {
            "id": "deux",
            "label": "Quel détail aimez-vous dans un repas partagé ?",
            "reply": "J’aimerais bien entendre les réponses. Je rapproche le plat pour que chacun puisse le voir.",
            "endingText": "Les réponses évoquent une place gardée, un parfum et le plaisir de retrouver quelqu’un. Ibrahima range les documents à portée de main, puis rejoint les invités.",
            "endingReply": "Ton invitation a ouvert une conversation toute simple. Le repas peut commencer."
          }
        ]
      }
    ],
    "practice": {
      "title": "Prépare un accueil virtuel",
      "intro": "Compose une invitation pour le repas du récit. Tes choix sont libres et ne remplacent pas les usages des familles.",
      "steps": [
        {
          "title": "Une place à préparer",
          "text": "Imagine où les invités découvriront les documents avant le repas.",
          "options": [
            {
              "label": "Sur une petite table à l’entrée",
              "reply": "Ibrahima : Je les laisse à regarder pendant que chacun arrive."
            },
            {
              "label": "À côté du coin du repas",
              "reply": "Ibrahima : Nous pourrons les reprendre si une question vient à table."
            }
          ]
        },
        {
          "title": "Un repère à garder",
          "text": "Choisis ce que tu aimerais retenir de cette escale.",
          "options": [
            {
              "label": "La diversité des préparations",
              "reply": "Awa : Je garde cette idée. Notre version de l’histoire restera une version parmi d’autres."
            },
            {
              "label": "Les personnes qui transmettent",
              "reply": "Awa : Nous prendrons le temps de penser aux personnes auprès desquelles on apprend."
            }
          ]
        },
        {
          "title": "Un mot d’invitation",
          "text": "Termine ton accueil avec une phrase personnelle.",
          "options": [
            {
              "label": "Prenons le temps de découvrir",
              "reply": "Ibrahima : Je garde ton invitation près des documents."
            },
            {
              "label": "Une place pour ton histoire",
              "reply": "Ibrahima : Cette phrase laisse la conversation ouverte. Je la pose près des places."
            }
          ]
        }
      ],
      "finishText": "Ton accueil virtuel est prêt. La fiche culturelle distingue les repères documentaires et le repas inventé pour cette rencontre.",
      "sourceUrl": "https://ich.unesco.org/fr/RL/le-ceebu-jn-art-culinaire-du-sngal-01748",
      "sourceLabel": "Le ceebu jën, art culinaire du Sénégal · UNESCO"
    },
    "sources": [
      {
        "url": "https://ich.unesco.org/fr/RL/le-ceebu-jn-art-culinaire-du-sngal-01748",
        "label": "UNESCO · Le ceebu jën, art culinaire du Sénégal",
        "supports": "Origines à Saint-Louis, ingrédients et variantes, préparation et usages du repas."
      },
      {
        "url": "https://ich.unesco.org/fr/decisions/16.COM/8.B.36",
        "label": "UNESCO · Décision 16.COM 8.B.36",
        "supports": "Transmission orale, participation progressive aux tâches et inscription en 2021."
      }
    ],
    "guide": {
      "result": "Voir le début du repas que tu as préparé et retrouver la recette.",
      "finish": "Accueillir les convives →"
    }
  }
};
