/* Contenus documentés le 19 octobre 2026. Généré depuis travel/adventures/*.json. */
const WORLD_ADVENTURES = {
  "japon": {
    "title": "Les trois cartes du repas",
    "mission": "Retrouver le rôle de trois cartes avec Aiko et Haru, puis choisir comment accueillir les invités.",
    "intro": "Dans cette scène fictive, Aiko prépare un repas familial du Nouvel An. Son cousin Haru a mélangé les cartes prévues pour présenter la table. Les deux adultes comptent sur toi pour les remettre en place avant l’arrivée des invités.",
    "places": [
      {
        "name": "La cuisine",
        "description": "Aiko termine les préparatifs. Trois cartes sans légende attendent près des bols.",
        "shortName": "Cuisine"
      },
      {
        "name": "La table des souvenirs",
        "description": "Une photographie et deux notes permettent de comprendre ce que les cartes racontent.",
        "shortName": "Souvenirs"
      },
      {
        "name": "La salle à manger",
        "description": "Haru prépare les places des invités. Il hésite encore sur la façon de présenter le repas.",
        "shortName": "Table"
      }
    ],
    "characters": [
      {
        "name": "Aiko",
        "role": "prépare le repas familial",
        "greeting": "Tu tombes bien. Haru a retrouvé mes cartes, mais plus leurs légendes ! Regarde les documents, puis nous déciderons quoi en faire.",
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
        "greeting": "J’ai voulu ranger trop vite. Les cartes sont là, mais je ne sais plus laquelle explique quoi. Tu as trouvé quelque chose ?",
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
      "prompt": "Associe chaque support à ce qu’il permet de découvrir. Aiko pourra alors utiliser les bonnes cartes.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La note sur les ingrédients",
          "text": "Ce document relie les aliments choisis à la nature et aux ressources locales.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La note sur l’apprentissage",
          "text": "Ce document parle des personnes et des occasions qui permettent d’apprendre.",
          "correct": "c"
        }
      ],
      "hint": "Cherche le sujet principal de chaque support : ce que l’on voit, ce que l’on choisit, puis ce que l’on apprend ensemble."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer une table à découvrir",
        "description": "Installer les trois cartes pour que les invités puissent les lire à leur rythme.",
        "reply": "Aiko : Bonne idée. Nos cartes auront enfin une place. Choisissons celle que l’on verra en premier.",
        "place": 0,
        "preparationTitle": "La première carte",
        "preparationPrompt": "Par quoi veux-tu commencer la présentation ?",
        "options": [
          {
            "id": "un",
            "label": "Mettre la photographie en premier",
            "reply": "Aiko : Les invités commenceront par regarder les boîtes. Les autres cartes seront juste à côté.",
            "endingText": "Tu poses la photographie à l’entrée de la table. Les premiers invités s’arrêtent devant les compartiments, puis découvrent les deux notes que tu as classées.",
            "endingReply": "Aiko : Merci ! J’entends déjà une question. Je vais chercher Haru pour qu’il nous rejoigne."
          },
          {
            "id": "deux",
            "label": "Commencer par la note sur les ingrédients",
            "reply": "Aiko : Je la pose près du menu. La photographie et la note sur l’apprentissage suivront.",
            "endingText": "La note sur les ingrédients accueille les invités. L’un d’eux demande à Aiko comment elle a choisi son repas. Haru apporte les derniers bols pendant que la conversation commence.",
            "endingReply": "Aiko : Tout est en place. Tu peux t’installer avec nous."
          }
        ],
        "endingTitle": "Les cartes trouvent leur place"
      },
      {
        "id": "rencontre",
        "title": "Ouvrir la conversation à table",
        "description": "Garder les cartes sous la main pour une discussion menée par Haru.",
        "reply": "Haru : D’accord. Une seule question pour commencer, puis chacun parlera s’il en a envie.",
        "place": 2,
        "preparationTitle": "Une question pour commencer",
        "preparationPrompt": "Quelle ouverture proposes-tu à Haru ?",
        "options": [
          {
            "id": "un",
            "label": "Demander le souvenir d’un repas",
            "reply": "Haru : J’ai déjà une histoire de casserole à raconter. Je vais laisser les autres commencer !",
            "endingText": "Une fois les invités installés, Haru demande un souvenir de repas. Les réponses font sourire Aiko. Tu gardes les cartes à portée de main pour les questions qui suivront.",
            "endingReply": "Haru : On avait besoin de quelqu’un pour lancer la discussion. Merci du coup de main."
          },
          {
            "id": "deux",
            "label": "Demander à qui l’on doit un savoir-faire",
            "reply": "Haru : Je parlerai de ma tante. Aiko aura sûrement son propre souvenir.",
            "endingText": "Haru demande qui a appris aux invités une chose qu’ils aiment préparer. Aiko écoute, puis raconte son souvenir. La table est prête et les cartes deviennent des appuis à la conversation.",
            "endingReply": "Haru : Les cartes sont rangées, les invités aussi. Enfin, presque ! Il nous reste une chaise pour toi."
          }
        ],
        "endingTitle": "Une place dans la conversation"
      }
    ],
    "practice": {
      "title": "Ton menu imaginaire",
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
      }
    ]
  },
  "coree": {
    "title": "Une part pour Mina",
    "mission": "Aider Joon à préparer un accueil autour du kimjang, puis choisir comment partager la rencontre avec Mina.",
    "intro": "Dans cette scène fictive, les préparatifs de kimjang viennent de s’achever. Joon et sa voisine Mina, tous deux adultes, ont prévu un moment avec les voisins. Trois documents se sont mélangés : à toi de les reconnaître avant de choisir la suite.",
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
        "greeting": "Mina arrive bientôt. J’ai mis son bocal à part, mais j’aimerais aussi lui montrer notre petit panneau. Tu peux m’aider à retrouver les légendes ?",
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
        "greeting": "Bonjour ! Joon m’a dit que tu l’aidais. Je peux attendre ici pendant que vous finissez. J’ai surtout envie de savoir ce que vous avez choisi de raconter.",
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
      "prompt": "Retrouve la légende de chaque support pour terminer le panneau de Joon.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La note de calendrier",
          "text": "Ce document suit les préparatifs au fil des saisons.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La note sur les échanges",
          "text": "Ce document porte sur les relations entre les familles.",
          "correct": "c"
        }
      ],
      "hint": "La photo donne à voir. Le calendrier parle du temps. La dernière note s’intéresse aux personnes qui échangent."
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
    ]
  },
  "vietnam": {
    "title": "Une place pour les voix",
    "mission": "Aider Linh et Hai à préparer l’accueil des auditeurs, sans confondre la photographie, le principe de réponse et les liens entre villages.",
    "intro": "Dans cette rencontre fictive, Linh et Hai, deux chanteurs adultes, attendent leurs partenaires et les premiers auditeurs. Ils ont trois documents pour présenter le Quan Họ. Retrouve leurs légendes, puis décide comment ouvrir l’écoute.",
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
        "greeting": "Bonjour ! Nous avons un peu de temps avant l’arrivée des autres. J’aimerais présenter ce que l’on va écouter sans faire un long discours. Tu m’aides ?",
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
        "greeting": "Linh m’a parlé des cartes. On pourrait aussi garder une question pour après l’écoute. Qu’est-ce qui t’a donné envie de venir ?",
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
      "prompt": "Aide Linh à donner le bon rôle à chaque document avant l’arrivée des auditeurs.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La note sur l’alternance",
          "text": "Un document consacré à l’organisation des couplets entre les groupes.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La note sur les villages",
          "text": "Un document consacré aux relations qui entourent le chant.",
          "correct": "c"
        }
      ],
      "hint": "Distingue l’image que l’on regarde, la manière dont les voix s’organisent et les relations que la rencontre entretient."
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
    ]
  },
  "indonesie": {
    "title": "Les échantillons sans légende",
    "mission": "Aider Dimas et Sari à présenter le batik : retrouver les trois légendes, puis choisir une démonstration virtuelle ou une visite de la galerie.",
    "intro": "Dans cet atelier fictif de Java, Dimas, apprenant adulte, prépare une visite avec Sari, artisane. Les cartes de présentation se sont décollées de leurs supports. Retrouve leur place pour que les visiteurs comprennent ce qu’ils regardent.",
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
        "greeting": "J’ai les trois cartes, mais plus leurs légendes. Sari m’a demandé de les vérifier avant la visite. Tu peux regarder les documents avec moi ?",
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
        "greeting": "Bonjour. Dimas m’a dit que les cartes avaient glissé. Prenez votre temps : je préfère une présentation courte et juste à des légendes posées au hasard.",
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
      "prompt": "Associe chaque support à son sujet pour préparer les légendes de l’atelier.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche de la réserve",
          "text": "Ce document explique le rôle technique de la cire face à la teinture.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche des usages",
          "text": "Ce document s’intéresse aux personnes et aux occasions qui entourent les étoffes.",
          "correct": "c"
        }
      ],
      "hint": "La première carte aide à regarder, la deuxième explique un mécanisme, la troisième replace le tissu dans la vie des personnes."
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
            "endingText": "Dans la galerie, Dimas raconte comment vous avez retrouvé les légendes. Sari l’écoute et complète son explication. Les visiteurs peuvent ensuite poser leurs questions, sans attribuer une signification aux motifs au hasard.",
            "endingReply": "Sari : Tu as aidé Dimas à préparer sa présentation. Merci. Nous pouvons poursuivre la visite ensemble."
          },
          {
            "id": "deux",
            "label": "Quelle histoire accompagne une étoffe ?",
            "reply": "Sari : Prenons le temps de regarder une pièce précise. Nous partirons de ce que je peux en expliquer.",
            "endingText": "Tu demandes à Sari de présenter une étoffe de son atelier fictif. Elle commence par son travail, puis accueille les questions des visiteurs. Dimas garde vos trois cartes à disposition pour éclairer la discussion.",
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
    ]
  },
  "vanuatu": {
    "title": "Le fil du dessin",
    "mission": "Aider Lina à préparer les trois cartes d’accueil d’une démonstration de Toma.",
    "intro": "Lina a une photo et deux notes, mais leurs titres sont mélangés. Retrouve leur place, puis choisis comment accueillir le groupe qui vient rencontrer Toma. Cette rencontre et ses deux personnages adultes sont fictifs.",
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
        "greeting": "Salut ! J’ai imprimé mes cartes trop vite et mélangé les titres. Tu m’aides à les remettre ensemble avant l’arrivée du groupe ?",
        "questions": [
          {
            "question": "Tu as besoin de quoi exactement ?",
            "answer": "De trois titres bien placés. Ensuite, on décidera si on prépare un petit panneau ou si on garde surtout du temps pour les questions."
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
        "greeting": "Bonjour ! Vous avancez avec les cartes ? J’ai un peu de temps avant de commencer, si un passage vous pose question.",
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
      "prompt": "Quel titre convient à chaque carte d’accueil ? Appuie-toi sur son contenu, sans essayer de décoder le dessin photographié.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche du geste",
          "text": "Le doigt, la ligne et le canevas imaginé.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche des significations",
          "text": "Les récits, les connaissances et les personnes qui les expliquent.",
          "correct": "c"
        }
      ],
      "hint": "Cherche successivement ce qu’une image donne à voir, comment un geste est réalisé, puis ce qu’une personne peut transmettre."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer le panneau",
        "description": "Installer les trois cartes au coin d’accueil pour que les visiteurs sachent quoi regarder et quoi demander.",
        "reply": "Lina : Merci ! Avec des titres clairs, je pourrai accueillir les gens sans leur faire lire un grand texte.",
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
    ]
  },
  "turquie": {
    "title": "Une place autour du plateau",
    "mission": "Aider Deniz à préparer l’accueil d’Ece en remettant les trois cartes du café à leur place.",
    "intro": "Deniz attend son amie Ece. Il veut lui montrer son carnet sur le café turc, mais les titres des trois cartes sont mélangés. Observe la photo, lis les notes, puis prépare leur rencontre. Les personnages adultes et cette visite sont fictifs.",
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
        "greeting": "Salut ! Ece arrive bientôt. Tu peux regarder ces cartes pendant que je fais de la place sur la table ?",
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
        "greeting": "Bonjour ! Je suis contente de vous voir. Deniz m’a dit qu’il avait besoin d’un coup de main avec son carnet.",
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
      "prompt": "Retrouve le titre de chaque carte du carnet. La photo, la préparation et la rencontre apportent trois éclairages différents.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche de préparation",
          "text": "Mouture, chauffe douce, mousse et service.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche de rencontre",
          "text": "Recevoir, échanger et apprendre auprès d’autres personnes.",
          "correct": "c"
        }
      ],
      "hint": "Une carte décrit ce qui est visible, une autre un savoir-faire, la dernière la relation entre les personnes."
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
    ]
  },
  "georgie": {
    "title": "Une jarre, trois histoires",
    "mission": "Aider Nino et Giorgi à préparer trois légendes pour accueillir les visiteurs de l’atelier.",
    "intro": "Nino, apprentie adulte, a posé une photographie et deux fiches sur la table. Giorgi, le potier, termine de ranger. Leur petit accueil de visiteurs commence bientôt : à toi de choisir ce que vous raconterez ensemble. L’atelier et les personnages sont fictifs.",
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
        "greeting": "Bonjour ! J’ai préparé trois documents, mais leurs légendes se ressemblent trop. Tu m’aides à les rendre plus claires ?",
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
        "greeting": "Entre, il y a de la place près de la table. Nino m’a dit que tu nous aidais pour l’accueil. Qu’aimerais-tu demander ?",
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
      "prompt": "Nino veut éviter trois légendes interchangeables. Associe chaque document à l’idée qu’il explique le mieux.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche de l’objet",
          "text": "Elle explique la place de la jarre dans une méthode de vinification.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche des personnes",
          "text": "Elle relie l’apprentissage aux familles et aux proches.",
          "correct": "c"
        }
      ],
      "hint": "Cherche le sujet principal : ce que les yeux distinguent, ce que fait l’objet, puis la manière dont les personnes apprennent."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Installer les trois légendes",
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
            "endingText": "Nino invite les visiteurs à comparer les silhouettes. Tu places ensuite les deux autres légendes. Les questions arrivent naturellement, et Giorgi vient rejoindre la table.",
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
        "endingTitle": "Les légendes trouvent leur place"
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
            "endingText": "Giorgi dispose les trois documents. Nino lit vos légendes, puis les visiteurs choisissent leurs questions. Le petit accueil devient une conversation autour de la table.",
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
    ]
  },
  "maroc": {
    "title": "Avant les premiers mots",
    "mission": "Aider Youssef et Salma à préparer trois cartes pour un petit rendez-vous d’écoute.",
    "intro": "Youssef a apporté une vue de Jemaa el-Fna et deux notes documentaires. Salma, une conteuse imaginée pour le jeu, vous attend. Retrouve les titres, puis prépare la rencontre. Les personnages adultes et les espaces de cette rencontre sont fictifs.",
    "places": [
      {
        "name": "Le coin de rendez-vous",
        "description": "Un point d’accueil fictif près de la place, où Youssef vérifie ses cartes avant la rencontre.",
        "shortName": "Rendez-vous"
      },
      {
        "name": "La table des carnets",
        "description": "Une petite table inventée pour comparer la photo et les deux notes sur l’art de raconter.",
        "shortName": "Carnets"
      },
      {
        "name": "Le cercle d’écoute",
        "description": "Salma a prévu une rencontre fictive avec quelques personnes. Le groupe laisse les passages libres.",
        "shortName": "Écoute"
      }
    ],
    "characters": [
      {
        "name": "Youssef",
        "role": "vient écouter un récit",
        "greeting": "Salut ! Salma nous rejoint dans un moment. J’ai préparé trois cartes pour les nouveaux venus, mais leurs titres se sont détachés.",
        "questions": [
          {
            "question": "Qu’est-ce que tu préfères quand tu écoutes ?",
            "answer": "J’aime le moment où j’oublie ce qui se passe autour. Je regarde aussi la personne qui raconte. Parfois, une pause me fait attendre la suite plus que beaucoup de mots."
          },
          {
            "question": "On se met où pour la rencontre ?",
            "answer": "On choisira une place où l’on entend bien en laissant le passage libre. Pour l’instant, j’aimerais surtout finir ces trois cartes."
          }
        ]
      },
      {
        "name": "Salma",
        "role": "conteuse",
        "greeting": "Bonjour ! Vous avez trouvé les cartes ? Je peux attendre encore un peu. Ce sera plus agréable de commencer quand chacun sera installé.",
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
      "prompt": "Replace les titres : quelle carte présente le lieu, laquelle l’art de raconter et laquelle les échanges entre personnes ?",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche du récit",
          "text": "Les mots, les gestes et l’adaptation d’une histoire à son public.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche des échanges",
          "text": "Différentes activités et des personnes qui se croisent, s’arrêtent ou écoutent.",
          "correct": "c"
        }
      ],
      "hint": "La première carte situe une image ; la deuxième décrit un art ; la troisième rappelle qu’il existe grâce à des rencontres."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer les cartes d’accueil",
        "description": "Installer avec Youssef les cartes qui permettront aux nouveaux venus de se repérer.",
        "reply": "Youssef : Merci. Je pourrai les montrer en quelques mots, puis laisser les gens s’installer.",
        "place": 0,
        "preparationTitle": "Une entrée dans la rencontre",
        "preparationPrompt": "Par quoi souhaites-tu commencer les cartes ?",
        "options": [
          {
            "id": "un",
            "label": "Situer la place avec la photo",
            "reply": "Youssef : D’accord. La vue donne un repère, et les deux notes invitent ensuite à s’intéresser aux personnes.",
            "endingText": "Youssef présente la photographie. Tu montres les deux notes, puis vous accompagnez les nouveaux venus vers les places libres.",
            "endingReply": "Youssef : On est prêts. Je vais enfin pouvoir écouter moi aussi."
          },
          {
            "id": "deux",
            "label": "Commencer par « Qu’aimez-vous écouter ? »",
            "reply": "Youssef : J’aime bien. Chacun peut répondre s’il en a envie ; personne n’est obligé de parler.",
            "endingText": "Les premières réponses font sourire le groupe. Youssef montre ensuite les cartes et propose d’aller s’installer.",
            "endingReply": "Youssef : On a déjà quelque chose à se raconter après le récit."
          }
        ],
        "endingTitle": "Le groupe peut s’installer"
      },
      {
        "id": "rencontre",
        "title": "Rejoindre Salma",
        "description": "Emporter les cartes dans le cercle d’écoute et choisir une courte ouverture avec elle.",
        "reply": "Salma : Venez, il reste de la place ici. Vous voulez me présenter, ou préférez-vous que je commence tout de suite ?",
        "place": 2,
        "preparationTitle": "Avant le récit",
        "preparationPrompt": "Comment veux-tu ouvrir cette rencontre ?",
        "options": [
          {
            "id": "un",
            "label": "Demander à Salma ce qu’elle aime raconter",
            "reply": "Salma : Bonne question. Je peux commencer par ce qui m’a donné envie de raconter aujourd’hui.",
            "endingText": "Salma partage un souvenir. Le groupe l’écoute, puis Youssef lui fait signe qu’il est prêt pour la suite.",
            "endingReply": "Salma : Merci. Maintenant que nous avons fait connaissance, je peux commencer."
          },
          {
            "id": "deux",
            "label": "Laisser le récit commencer",
            "reply": "Salma : D’accord. Gardez vos questions pour après si vous en avez envie.",
            "endingText": "Vous prenez place. Salma commence : « Au matin, une lettre attendait sur le seuil… » Youssef se tourne vers elle pour ne pas manquer la suite.",
            "endingReply": "Youssef : On en reparlera après. J’ai envie de savoir à qui cette lettre était destinée."
          }
        ],
        "endingTitle": "Les premiers mots"
      }
    ],
    "practice": {
      "title": "Invente un micro-récit",
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
    ]
  },
  "kenya": {
    "title": "Une place pour écouter",
    "mission": "Aider Amani et Neema à préparer trois cartes de découverte avant une fête imaginée.",
    "intro": "Amani accueille les invités d’une fête imaginée. Neema lui a confié une photo et deux notes sur l’isukuti des communautés Isukha et Idakho. Retrouve les titres, puis prépare un accueil ou une rencontre. Ces deux personnages adultes sont fictifs.",
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
        "greeting": "Salut ! Tu arrives au bon moment. J’ai gardé une place pour toi, mais je voudrais d’abord installer ces trois cartes. Tu regardes avec moi ?",
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
        "greeting": "Bonjour ! Amani m’a dit que vous l’aidiez avec les cartes. Je peux répondre à vos questions avant de retourner auprès du groupe.",
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
      "prompt": "Associe les cartes à leurs titres : un événement photographié, les composantes de la pratique et son rôle dans la vie collective.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche des composantes",
          "text": "Des tambours de tailles différentes, le chant et la danse.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche des communautés",
          "text": "Les communautés Isukha et Idakho et les occasions de se rassembler.",
          "correct": "c"
        }
      ],
      "hint": "Garde le contexte précis de la photo à part. Les deux autres cartes concernent la pratique et les personnes qui la font vivre."
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
    ]
  },
  "mexique": {
    "title": "Trois cartes avant de passer à table",
    "mission": "Aider Mateo et Luz à préparer trois cartes pour raconter le repas au-delà de l’assiette.",
    "intro": "Dans une cuisine familiale fictive du Michoacán, Mateo apporte des cartons vierges. Luz, la cuisinière de la famille, veut préparer un petit accueil pour des invités. Ces deux personnages adultes te proposent de choisir ce que vous raconterez autour de la table.",
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
        "greeting": "Bonjour ! Il nous reste une chose à préparer : nos cartes pour les invités. Luz préfère trois idées courtes plutôt qu’un long discours.",
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
        "greeting": "Viens, j’ai gardé une place près de la table. Mateo m’a parlé des cartes. Qu’est-ce que tu aimerais demander ?",
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
      "prompt": "Trois cartes, trois idées. Aide Mateo à associer chaque support à la légende qui lui correspond.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche du maïs",
          "text": "Elle présente le traitement du maïs appelé nixtamalisation.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche du repas partagé",
          "text": "Elle relie les cultivateurs, la cuisine et les convives.",
          "correct": "c"
        }
      ],
      "hint": "La photo raconte un moment. Une fiche explique une technique ; l’autre élargit le regard à la chaîne des personnes."
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
    ]
  },
  "bresil": {
    "title": "Écouter autour du cercle",
    "mission": "Aider Joana et Paulo à préparer trois repères pour les visiteurs qui découvrent une roda de capoeira.",
    "intro": "Dans un lieu de répétition fictif au Brésil, Joana dispose des cartes près des chaises. Paulo, musicien, la rejoint avec un dossier. Ces deux personnages adultes souhaitent préparer un accueil où chacun puisse observer et poser ses questions.",
    "places": [
      {
        "name": "Le coin d’accueil",
        "description": "Joana prépare une place pour les visiteurs et rassemble les documents.",
        "shortName": "Accueil"
      },
      {
        "name": "La table d’écoute",
        "description": "Une photographie et deux fiches invitent à regarder au-delà des deux joueurs.",
        "shortName": "Écoute"
      },
      {
        "name": "La salle de répétition",
        "description": "Paulo te rejoint pour discuter de la musique et de la place du groupe.",
        "shortName": "Répétition"
      }
    ],
    "characters": [
      {
        "name": "Joana",
        "role": "Participe à la musique d’un groupe de capoeira",
        "greeting": "Bonjour ! Pour l’accueil, j’aimerais qu’on sache où regarder sans tout expliquer d’un coup. Tu m’aides à choisir trois repères ?",
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
        "greeting": "Joana m’a montré vos cartes. Asseyons-nous un instant, je peux répondre à quelques questions.",
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
      "prompt": "Joana a trois repères à distribuer. Associe chaque document à ce qu’il aide le mieux à découvrir.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche du berimbau",
          "text": "Elle relie l’instrument, les chants et le rythme.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche du groupe",
          "text": "Elle explique la transmission des savoirs et les règles de respect.",
          "correct": "c"
        }
      ],
      "hint": "Un support montre une disposition, un autre parle de musique, et le dernier explique comment on apprend avec les autres."
    },
    "plans": [
      {
        "id": "atelier",
        "title": "Préparer un coin d’écoute",
        "description": "Avec Joana, installer les documents et proposer les extraits du carnet.",
        "reply": "Je vais rapprocher les chaises. Les visiteurs pourront lancer un extrait s’ils le souhaitent.",
        "place": 0,
        "preparationTitle": "Le premier repère",
        "preparationPrompt": "Choisis l’entrée de votre petit accueil.",
        "options": [
          {
            "id": "un",
            "label": "Inviter à regarder la photographie",
            "reply": "Je commencerai par demander où chacun a regardé en premier.",
            "endingText": "Joana montre la photographie. Un visiteur remarque un instrument sur le côté ; un autre parle des joueurs. Vous placez les fiches à côté et proposez une écoute facultative.",
            "endingReply": "Les questions viennent toutes seules. Merci, le coin d’accueil est prêt."
          },
          {
            "id": "deux",
            "label": "Proposer une première écoute",
            "reply": "Présentons bien l’extrait : il s’agit d’une démonstration, pas du son de toute la roda.",
            "endingText": "Les visiteurs qui le souhaitent écoutent un extrait de berimbau. Joana leur montre ensuite la photo et vos cartes. D’autres commencent directement par les documents.",
            "endingReply": "Chacun a pu choisir son entrée. C’est exactement ce qu’il nous fallait."
          }
        ],
        "endingTitle": "Une place pour l’écoute"
      },
      {
        "id": "rencontre",
        "title": "Préparer les questions pour Paulo",
        "description": "Garder une place à la conversation dans la salle de répétition.",
        "reply": "Avec plaisir. On peut partir de ce que vous avez remarqué plutôt que suivre un exposé.",
        "place": 2,
        "preparationTitle": "De quoi parler d’abord ?",
        "preparationPrompt": "Choisis la question qui lancera votre échange.",
        "options": [
          {
            "id": "un",
            "label": "Comment écouter quand on découvre ?",
            "reply": "Prenons le temps de nommer ce qu’on entend, même si on ne sait pas encore l’expliquer.",
            "endingText": "Paulo écoute les remarques des visiteurs. Joana apporte les trois cartes pour retrouver un mot ou une idée. Votre échange avance au fil des questions.",
            "endingReply": "Personne n’avait besoin de tout connaître avant de commencer à écouter."
          },
          {
            "id": "deux",
            "label": "Que demander aux personnes du groupe ?",
            "reply": "Pourquoi ne pas commencer par ce qu’elles aimeraient montrer elles-mêmes ?",
            "endingText": "Joana choisit un détail de la photographie, puis Paulo revient sur l’une des fiches. Les visiteurs posent leurs questions et vous laissez la discussion se poursuivre.",
            "endingReply": "Merci d’avoir préparé une rencontre où l’on peut aussi s’écouter parler."
          }
        ],
        "endingTitle": "Les questions entrent dans le cercle"
      }
    ],
    "practice": {
      "title": "Une petite pause d’écoute",
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
    ]
  },
  "perou": {
    "title": "Avant la visite du pont",
    "mission": "Aider Elena et Miguel à préparer trois repères sur le pont Q’eswachaka pour accueillir des visiteurs.",
    "intro": "Dans un espace d’accueil fictif près du pont, Elena ouvre un dossier. Miguel, artisan adulte, apporte une deuxième fiche. Elena est adulte elle aussi ; ils ont réservé ce moment pour répondre aux questions, à l’écart des travaux. À toi de préparer avec eux une visite documentaire.",
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
        "greeting": "Bonjour ! Nous préparons un accueil pour les visiteurs. J’aimerais leur montrer trois choses sans leur donner trop d’informations à la fois. Tu nous aides ?",
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
        "greeting": "Bonjour ! Elena m’a dit que les documents étaient presque prêts. Prenons quelques minutes pour en parler.",
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
      "prompt": "Elena veut trois repères différents. Associe chaque support à ce qu’il raconte le mieux.",
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
          "correct": "a"
        },
        {
          "id": "geste",
          "name": "La fiche des cordes",
          "text": "Elle explique le passage des fibres aux assemblages plus grands.",
          "correct": "b"
        },
        {
          "id": "partage",
          "name": "La fiche des communautés",
          "text": "Elle met en relation le travail, l’apprentissage et les cérémonies.",
          "correct": "c"
        }
      ],
      "hint": "Commence par ce qui situe le lieu, puis distingue la préparation des matériaux de la vie des communautés."
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
    ]
  }
};
