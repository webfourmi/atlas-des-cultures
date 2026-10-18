/* Situations et dialogues fictifs en français. Les découvertes documentaires restent distinctes des répliques. */
'use strict';
const JOURNEYS = {
  "japon": {
    "title": "Avant l’arrivée des invités",
    "person": "Aiko",
    "role": "prépare le repas du Nouvel An",
    "goal": "Aider Aiko à finir la table avant l’arrivée de sa famille.",
    "hands": {
      "title": "Une saison dans l’assiette",
      "text": "Le washoku associe des savoirs sur les aliments, leur préparation et leur consommation. Le choix de produits naturels et locaux compte ; la saison fait partie de l’histoire du repas."
    },
    "voices": {
      "title": "Ce qui se transmet à table",
      "text": "Dans les repas partagés, les gestes et les assaisonnements s’apprennent en famille. Les fêtes du Nouvel An rendent particulièrement visibles le soin des plats, leur sens symbolique et le partage."
    },
    "scenes": {
      "begin": {
        "title": "Dans la cuisine",
        "text": "Aiko termine un plat. Dans la pièce voisine, la table est encore à moitié vide. Sa famille doit arriver dans quelques minutes.",
        "choices": [
          {
            "label": "Tu as choisi ces légumes pour une raison ?",
            "reply": "Oui, j’ai choisi des produits de saison. J’aime composer le repas avec ce que l’on trouve en ce moment. Tiens, approche : je termine ce plat.",
            "to": "hands"
          },
          {
            "label": "Je peux t’aider à mettre la table ?",
            "reply": "Avec plaisir ! Les bols sont juste là. Pour le repas du Nouvel An, on se retrouve en famille. Ma grand-mère m’a appris à préparer plusieurs des plats que tu vois.",
            "to": "voices"
          }
        ],
        "speech": "Tu tombes bien ! J’ai presque fini en cuisine, mais il reste la table à préparer."
      },
      "hands": {
        "title": "Le plat est prêt",
        "text": "Aiko pose le plat sur le plan de travail et cherche un dessous-de-plat.",
        "choices": [
          {
            "label": "Qui t’a appris à préparer ce repas ?",
            "reply": "J’ai commencé en aidant ma grand-mère. Je la regardais faire, puis elle me confiait une petite tâche. Maintenant, c’est moi qui lui pose des questions quand j’hésite.",
            "to": "voices"
          },
          {
            "label": "Je vais apporter le plat. Où le poses-tu ?",
            "reply": "Au milieu de la table, sur ce dessous-de-plat. Merci ! Je prends les derniers bols et je te rejoins.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Les derniers bols",
        "text": "Vous apportez les bols à table. Aiko vérifie qu’il y en a assez pour tout le monde.",
        "choices": [
          {
            "label": "Vous préparez tout ensemble ?",
            "reply": "Chez nous, oui, quand on peut. Aujourd’hui, ma grand-mère a préparé une partie du repas et mon cousin apporte le reste. Je n’aurais pas fini à temps toute seule !",
            "to": "end"
          },
          {
            "label": "Tu fais exactement comme ta grand-mère ?",
            "reply": "Pas pour tout. Je garde ses conseils, mais j’adapte aussi aux ingrédients disponibles et aux goûts de ceux qui viennent. Elle me demande toujours ce que j’ai changé.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "On sonne à la porte",
        "text": "La table est prête. Aiko s’essuie les mains et va ouvrir aux premiers invités.",
        "choices": [
          {
            "label": "Tout est prêt. Je peux m’asseoir ici ?",
            "reply": "Oui, installe-toi ! Merci pour le coup de main. Je te présente ma famille.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "À table",
        "text": "Tu prends place pendant qu’Aiko fait les présentations. Le repas peut commencer.",
        "choices": []
      }
    }
  },
  "coree": {
    "title": "Le bocal pour la voisine",
    "person": "Joon",
    "role": "participe aux préparatifs du kimjang",
    "goal": "Donner un coup de main à Joon avant de livrer un bocal de kimchi.",
    "hands": {
      "title": "Un calendrier avant la recette",
      "text": "Le kimjang suit un cycle annuel de préparation des ingrédients. À la fin de l’automne, on prépare collectivement de grandes quantités de kimchi pour l’hiver."
    },
    "voices": {
      "title": "Préparer, puis partager",
      "text": "Le kimjang est aussi un échange entre foyers et générations. Les méthodes et les ingrédients peuvent varier selon les régions et les familles : le partage transmet aussi ces différences."
    },
    "scenes": {
      "begin": {
        "title": "Une table bien remplie",
        "text": "Des récipients de kimchi occupent la table. Joon essuie un bocal et le met à part, près d’un sac.",
        "choices": [
          {
            "label": "Pourquoi préparez-vous autant de kimchi d’un coup ?",
            "reply": "C’est le kimjang : à la fin de l’automne, on prépare une grande quantité pour l’hiver. À plusieurs, on se répartit le travail. Et tout ce qui est sur la table ne restera pas ici.",
            "to": "hands"
          },
          {
            "label": "Ce bocal n’est pas pour vous ?",
            "reply": "Non, celui-ci est pour notre voisine. On partage une partie de ce qu’on prépare. Elle nous apporte aussi son kimchi : le sien n’a pas tout à fait le même goût.",
            "to": "voices"
          }
        ],
        "speech": "Il me reste ce bocal à préparer pour la voisine. Tu peux me passer le torchon, juste à côté de toi ?"
      },
      "hands": {
        "title": "Encore un bocal",
        "text": "Joon prend le torchon et vérifie le bord du bocal.",
        "choices": [
          {
            "label": "Vous en gardez pour vos voisins aussi ?",
            "reply": "Oui. Ce bocal part chez notre voisine, et on en a mis d’autres de côté. Le kimjang, c’est aussi ce moment où l’on prépare et où l’on partage avec d’autres foyers.",
            "to": "voices"
          },
          {
            "label": "Je peux essuyer celui-ci pendant que tu termines ?",
            "reply": "Merci, ça m’aiderait. Je vais chercher le couvercle et le sac pour le transport.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Deux recettes de famille",
        "text": "Joon dégage une petite place près du bocal destiné à la voisine.",
        "choices": [
          {
            "label": "Elle fait le même kimchi que vous ?",
            "reply": "Pas exactement. Les ingrédients et les façons de faire varient entre familles et régions. Dans sa version, je reconnais tout de suite l’assaisonnement. On aime bien comparer.",
            "to": "end"
          },
          {
            "label": "Elle vous donne aussi un coup de main ?",
            "reply": "Oui, elle est venue ce matin. Quand j’étais plus jeune, c’est elle qui me montrait certains gestes. Aujourd’hui, je peux lui rendre service en lui apportant sa part.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Prêt à partir",
        "text": "Joon ferme le bocal, puis le cale dans le sac. Il vérifie qu’il ne manque rien.",
        "choices": [
          {
            "label": "Je t’accompagne pour le porter ?",
            "reply": "Volontiers. Elle habite tout près. Je prends le sac et tu peux fermer la porte derrière nous.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Chez la voisine",
        "text": "Vous partez livrer le bocal. La voisine vous accueille et Joon lui raconte la préparation du matin.",
        "choices": []
      }
    }
  },
  "vietnam": {
    "title": "Avant le premier chant",
    "person": "Linh",
    "role": "chante avec un groupe de Quan Họ",
    "goal": "Trouver une place pour écouter Linh et les autres chanteurs.",
    "hands": {
      "title": "Une voix en appelle une autre",
      "text": "Dans la forme décrite par l’UNESCO, deux femmes d’un village chantent ensemble ; deux hommes d’un autre village répondent sur des mélodies apparentées avec des paroles différentes."
    },
    "voices": {
      "title": "Des liens entre villages",
      "text": "Les chants Quan Họ participent aux relations entre communautés des régions de Bắc Ninh et Bắc Giang décrites dans le dossier patrimonial. Fêtes, rituels et rencontres amicales sont des occasions de chanter."
    },
    "scenes": {
      "begin": {
        "title": "Avant de chanter",
        "text": "Linh rejoint une autre chanteuse. Un peu plus loin, deux hommes discutent en attendant le début de la rencontre.",
        "choices": [
          {
            "label": "Vous allez tous chanter ensemble ?",
            "reply": "Nous allons nous répondre. Ma partenaire et moi chantons un couplet, puis les deux chanteurs de l’autre village répondent sur une mélodie apparentée, avec d’autres paroles. Tu entendras l’échange.",
            "to": "hands"
          },
          {
            "label": "Vous connaissez déjà les chanteurs d’en face ?",
            "reply": "Oui, on se retrouve lors de fêtes et de visites entre villages. Aujourd’hui, nous chantons avec des amis. On a eu le temps de bavarder un peu avant de commencer.",
            "to": "voices"
          }
        ],
        "speech": "On va bientôt commencer. Tu peux rester écouter si tu as un moment."
      },
      "hands": {
        "title": "D’un groupe à l’autre",
        "text": "Linh montre discrètement le groupe qui va leur répondre.",
        "choices": [
          {
            "label": "Vous vous retrouvez seulement pour chanter ?",
            "reply": "Le chant nous donne l’occasion de nous revoir, mais il y a aussi les visites et les conversations autour. Les relations entre villages comptent beaucoup dans le Quan Họ.",
            "to": "voices"
          },
          {
            "label": "Je peux écouter d’ici sans vous gêner ?",
            "reply": "Oui, tu seras bien ici. Un petit pas sur le côté et tu verras aussi ceux qui nous répondent.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Une place pour écouter",
        "text": "Linh te désigne un endroit d’où tu peux voir les deux groupes.",
        "choices": [
          {
            "label": "Vous répétez aussi en dehors des fêtes ?",
            "reply": "Avec ma partenaire, oui. On reprend les chants que l’on apprend et on demande conseil quand un passage nous pose problème. Aujourd’hui, nous sommes contentes de chanter avec les autres.",
            "to": "end"
          },
          {
            "label": "Je peux m’asseoir près du groupe ?",
            "reply": "Oui, à cet endroit. Tu entendras nos voix et la réponse d’en face. Je vais rejoindre ma partenaire.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Le groupe se prépare",
        "text": "Linh échange un regard avec sa partenaire. Les conversations autour de vous diminuent.",
        "choices": [
          {
            "label": "Je te laisse chanter. On en parle après ?",
            "reply": "Avec plaisir. Écoute le passage d’un groupe à l’autre ; tu pourras me dire ce que tu as remarqué après.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Les voix se répondent",
        "text": "Tu restes à ta place. Le premier groupe commence, puis l’autre lui répond.",
        "choices": []
      }
    }
  },
  "indonesie": {
    "title": "Avant le bain de teinture",
    "person": "Dimas",
    "role": "apprend dans un atelier de batik",
    "goal": "Comprendre ce que Dimas prépare sur une étoffe de batik.",
    "hands": {
      "title": "Protéger pour faire apparaître",
      "text": "La cire appliquée en points et en lignes empêche certaines zones de prendre la teinture. En répétant les opérations, les artisans composent des motifs et plusieurs couleurs."
    },
    "voices": {
      "title": "Un tissu dans une vie",
      "text": "Le batik accompagne des usages quotidiens, mais aussi des moments particuliers de l’existence. Ses motifs ont des influences et des significations diverses ; ils ne sont pas tous interchangeables."
    },
    "scenes": {
      "begin": {
        "title": "À l’atelier",
        "text": "Dimas travaille sur un tissu tendu. Des lignes de cire apparaissent peu à peu sur la surface.",
        "choices": [
          {
            "label": "Pourquoi mets-tu de la cire sur le tissu ?",
            "reply": "Elle protège les endroits où je ne veux pas que cette teinture pénètre. Quand on enlèvera la cire, les lignes se verront autrement. C’est plus facile à comprendre en regardant le tissu après le bain.",
            "to": "hands"
          },
          {
            "label": "Ce tissu est destiné à quelqu’un ?",
            "reply": "C’est un tissu d’exercice pour l’atelier. J’apprends aussi à reconnaître les motifs et leurs usages. On porte du batik au quotidien et à des occasions particulières, mais les motifs n’ont pas tous le même sens.",
            "to": "voices"
          }
        ],
        "speech": "Je termine les lignes avant la teinture. Tu veux regarder ? Tu peux te mettre de ce côté de la table."
      },
      "hands": {
        "title": "Les lignes de cire",
        "text": "Dimas te montre une partie déjà couverte de cire et une autre laissée libre.",
        "choices": [
          {
            "label": "On porte ce genre de tissu à quelles occasions ?",
            "reply": "Il y a des usages quotidiens et d’autres liés à des moments particuliers de la vie. Pour une étoffe précise, je demande à la personne qui connaît le motif plutôt que de deviner.",
            "to": "voices"
          },
          {
            "label": "Alors ces lignes ne prendront pas cette couleur ?",
            "reply": "C’est ça. La cire fait une réserve. On peut recommencer avec d’autres applications de cire et d’autres teintures pour obtenir plusieurs couleurs.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Choisir un motif",
        "text": "Dimas met son outil de côté et regarde le tissu avec toi.",
        "choices": [
          {
            "label": "Est-ce que je peux choisir n’importe quel motif ?",
            "reply": "Pour un exercice, demande d’abord à la personne qui anime l’atelier ce qu’elle propose. Certains motifs ont des significations ou des usages précis. Ici, je commence par comprendre celui que l’on m’apprend.",
            "to": "end"
          },
          {
            "label": "Qui t’apprend à reconnaître les motifs ?",
            "reply": "La personne qui m’accompagne à l’atelier. Je note mes questions et je compare les étoffes qu’elle me montre. Pour l’instant, j’ai encore besoin de son aide.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "La teinture attend",
        "text": "Le tracé est terminé. Dimas appelle la personne qui supervise l’atelier pour lui montrer son travail.",
        "choices": [
          {
            "label": "Je peux rester pour voir le résultat ?",
            "reply": "Bien sûr. On va d’abord vérifier le tracé ensemble, puis tu pourras voir ce que la teinture change.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Le tissu change de couleur",
        "text": "Tu restes près de la table de démonstration. Dimas suit les indications de l’atelier pour la suite du travail.",
        "choices": []
      }
    }
  },
  "inde": {
    "title": "Une première visite",
    "person": "Anaya",
    "role": "suit un cours de yoga",
    "goal": "Accompagner Anaya avant le début d’un cours de yoga.",
    "hands": {
      "title": "Plusieurs dimensions ensemble",
      "text": "Le yoga réunit des postures, le travail du souffle, la méditation, des récitations et d’autres techniques. La description patrimoniale dépasse une simple suite de positions."
    },
    "voices": {
      "title": "Apprendre et transmettre",
      "text": "La relation maître-élève fait partie des formes traditionnelles de transmission. Écoles, centres communautaires, ashrams, écrits et autres supports participent aussi à l’apprentissage."
    },
    "scenes": {
      "begin": {
        "title": "Devant la salle",
        "text": "Anaya attend près de la porte. À l’intérieur, quelques personnes s’installent pour le cours.",
        "choices": [
          {
            "label": "Il faut déjà connaître les postures pour venir ?",
            "reply": "Je ne les connaissais pas quand j’ai commencé. Parle avec la personne qui enseigne : elle t’expliquera comment se passe le cours. Ici, on travaille aussi le souffle et l’attention ; il n’y a pas que les postures.",
            "to": "hands"
          },
          {
            "label": "Tu as appris ici ?",
            "reply": "J’ai commencé avec un proche, puis je suis venue dans cette école. J’apprends avec un enseignant. La transmission de personne à personne est importante, et il existe aussi des livres et d’autres supports.",
            "to": "voices"
          }
        ],
        "speech": "Bonjour ! Tu viens pour la première fois ? Le cours n’a pas encore commencé."
      },
      "hands": {
        "title": "Avant de s’installer",
        "text": "Anaya reste avec toi devant la porte pendant que le groupe finit d’arriver.",
        "choices": [
          {
            "label": "Et toi, comment as-tu commencé ?",
            "reply": "Au début, je posais beaucoup de questions à la personne qui me montrait la pratique. Ensuite, j’ai cherché un cours régulier. J’ai encore des choses à demander à chaque séance.",
            "to": "voices"
          },
          {
            "label": "Je peux simplement observer aujourd’hui ?",
            "reply": "On va le demander à l’enseignant quand il arrive. Tu pourras aussi lui dire ce que tu aimerais découvrir.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Poser ses questions",
        "text": "Anaya aperçoit l’enseignant au bout du couloir.",
        "choices": [
          {
            "label": "Vous utilisez aussi des livres ?",
            "reply": "Oui, j’en consulte parfois pour reprendre une explication. Mais quand je ne comprends pas quelque chose, j’en parle au cours. Un texte ne répond pas toujours à ma question précise.",
            "to": "end"
          },
          {
            "label": "Et si je ne comprends pas un exercice ?",
            "reply": "Tu peux le dire et demander une explication. C’est ce que je fais. Pas besoin de faire semblant d’avoir compris.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "L’enseignant arrive",
        "text": "L’enseignant ouvre la porte et accueille les personnes qui attendent.",
        "choices": [
          {
            "label": "Je vais me présenter et demander à observer.",
            "reply": "Viens, je t’accompagne. Tu pourras lui poser tes questions avant que le cours commence.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Faire connaissance",
        "text": "Anaya te présente à l’enseignant. Tu expliques que tu souhaites découvrir le cours en observant.",
        "choices": []
      }
    }
  },
  "vanuatu": {
    "title": "Suivre le dessin",
    "person": "Lina",
    "role": "accueille les visiteurs pendant une démonstration",
    "goal": "Observer une démonstration et demander comment suivre le tracé.",
    "hands": {
      "title": "Un chemin dans une grille imaginée",
      "text": "Le dessinateur suit du doigt une ligne continue sur une grille imaginée, directement sur le sable, la cendre volcanique ou l’argile. La composition peut devenir très complexe."
    },
    "voices": {
      "title": "Une image peut garder un savoir",
      "text": "Certains dessins servent à mémoriser et transmettre des récits, des relations de parenté ou d’autres connaissances. Leurs significations demandent l’explication des personnes qui les connaissent."
    },
    "scenes": {
      "begin": {
        "title": "Autour du tracé",
        "text": "Un dessinateur se prépare devant une surface de sable. Lina accueille les visiteurs à côté de lui.",
        "choices": [
          {
            "label": "Le doigt ne quitte vraiment pas le sable ?",
            "reply": "Regarde la démonstration : le tracé suit une ligne continue sur une grille imaginée. Il passe par plusieurs croisements. Moi aussi, au début, je perdais facilement le fil.",
            "to": "hands"
          },
          {
            "label": "Tu connais l’histoire de ce dessin ?",
            "reply": "La personne qui le présente va l’expliquer. Certains dessins transmettent des récits ou des connaissances. Je préfère la laisser raconter celui-ci : le motif seul ne me donne pas toute son histoire.",
            "to": "voices"
          }
        ],
        "speech": "Tu peux te placer ici. Tu verras le dessin sans cacher la vue aux personnes derrière."
      },
      "hands": {
        "title": "Suivre les croisements",
        "text": "Tu regardes le doigt avancer dans le sable. Lina suit le tracé à côté de toi.",
        "choices": [
          {
            "label": "Et le dessin raconte quelque chose ?",
            "reply": "Certains dessins servent à transmettre des histoires et des savoirs. Celui-ci sera expliqué après le tracé. Restons pour écouter la personne qui le connaît.",
            "to": "voices"
          },
          {
            "label": "Je peux regarder le tracé une deuxième fois ?",
            "reply": "Demandons-lui après la démonstration. On pourra préciser à quel croisement tu as perdu le fil.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Attendre l’explication",
        "text": "Le dessin prend forme. Plusieurs visiteurs regardent en silence.",
        "choices": [
          {
            "label": "Le dessin suffit pour comprendre l’histoire ?",
            "reply": "Pas pour moi. Je peux voir une forme sans connaître ce qu’elle transmet. L’explication m’aide à comprendre ce que je regarde.",
            "to": "end"
          },
          {
            "label": "Est-ce que je peux poser une question après ?",
            "reply": "Oui, la personne qui fait la démonstration a prévu un moment pour cela. Tu peux lui demander de revenir sur un passage du tracé.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Un moment pour les questions",
        "text": "Le dessinateur termine le tracé et commence son explication. Lina attend la fin pour reparler avec toi.",
        "choices": [
          {
            "label": "Comment as-tu appris à suivre tous ces croisements ?",
            "reply": "En regardant plusieurs fois, et en demandant qu’on me montre les passages que je ne comprenais pas. On peut poser ta question ensemble si tu veux.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Revenir sur un passage",
        "text": "Tu restes avec Lina pour les questions. Le groupe regarde de nouveau les croisements du dessin.",
        "choices": []
      }
    }
  },
  "turquie": {
    "title": "Le café est presque prêt",
    "person": "Deniz",
    "role": "accueille des amis autour d’un café",
    "goal": "Aider Deniz à installer le plateau avant l’arrivée d’une amie.",
    "hands": {
      "title": "Une mouture très fine",
      "text": "Le café finement moulu chauffe lentement avec de l’eau et, éventuellement, du sucre. On recherche la mousse, puis on sert la boisson dans de petites tasses, avec un verre d’eau."
    },
    "voices": {
      "title": "Une invitation qui compte",
      "text": "Le café turc est associé à l’hospitalité, à l’amitié et à la conversation. Les savoirs de préparation et de service circulent notamment par observation et participation dans les familles."
    },
    "scenes": {
      "begin": {
        "title": "Dans la cuisine de Deniz",
        "text": "Deniz surveille un petit récipient à long manche. Des tasses et des verres attendent sur le plan de travail.",
        "choices": [
          {
            "label": "Le café chauffe directement avec l’eau ?",
            "reply": "Oui, le café est moulu très fin, puis il chauffe doucement avec l’eau et, si on en veut, du sucre. Je surveille la mousse avant de servir dans les petites tasses.",
            "to": "hands"
          },
          {
            "label": "Je peux t’aider à installer le plateau ?",
            "reply": "Oui, merci ! Prends les petites tasses et les verres d’eau. Mon amie va arriver. On s’installera tous ensemble pour boire le café et discuter.",
            "to": "voices"
          }
        ],
        "speech": "Salut ! Entre, je prépare le café. Il me reste juste le plateau à installer."
      },
      "hands": {
        "title": "Surveiller la mousse",
        "text": "Deniz garde les yeux sur le café et te désigne les verres.",
        "choices": [
          {
            "label": "Tu prépares souvent du café quand tu reçois ?",
            "reply": "Oui, j’aime prendre ce moment avec les gens qui viennent. Le café est associé à l’accueil et à la conversation. Aujourd’hui, j’ai surtout hâte d’avoir des nouvelles de mon amie.",
            "to": "voices"
          },
          {
            "label": "Je prends les verres d’eau ?",
            "reply": "Oui, s’il te plaît. Pose-les sur le plateau près des tasses. Je vais servir le café.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Le plateau se remplit",
        "text": "Tu poses les tasses sur le plateau pendant que Deniz termine la préparation.",
        "choices": [
          {
            "label": "Tu as appris à le préparer avec qui ?",
            "reply": "Avec ma mère, en la regardant faire, puis en essayant à mon tour. Elle me rappelait surtout de rester près du café au lieu de partir bavarder dans l’autre pièce !",
            "to": "end"
          },
          {
            "label": "On attend ton amie pour s’asseoir ?",
            "reply": "Oui, elle vient de m’envoyer un message : elle est en bas. Je finis de servir, et on sera prêts.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "On peut s’installer",
        "text": "L’amie de Deniz arrive. Vous apportez le plateau près des fauteuils.",
        "choices": [
          {
            "label": "Je m’installe avec vous. Comment s’est passée ta journée ?",
            "reply": "Bien, mais j’ai pas mal couru ! Je suis contente de pouvoir enfin m’asseoir. Je vais vous raconter ça pendant qu’on prend le café.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "La conversation commence",
        "text": "Vous prenez place autour du plateau et échangez les nouvelles de la journée.",
        "choices": []
      }
    }
  },
  "georgie": {
    "title": "La jarre de l’atelier",
    "person": "Nino",
    "role": "apprend à travailler la terre cuite",
    "goal": "Découvrir avec Nino à quoi sert la grande jarre en terre cuite.",
    "hands": {
      "title": "Le récipient fait partie de la méthode",
      "text": "Le kvevri est une grande jarre ovoïde de terre cuite utilisée pour produire, conserver et faire vieillir le vin. La méthode traditionnelle comprend son enfouissement dans le sol."
    },
    "voices": {
      "title": "De la terre aux vendanges",
      "text": "La fabrication des jarres et les savoirs de la vigne se transmettent entre proches. Observer les aînés, participer aux travaux et aux vendanges relie plusieurs générations."
    },
    "scenes": {
      "begin": {
        "title": "Une grande jarre",
        "text": "Dans l’atelier, Nino range des croquis près d’une jarre en terre cuite qui te dépasse presque.",
        "choices": [
          {
            "label": "C’est une jarre pour conserver de l’eau ?",
            "reply": "Celle-ci est un kvevri. On utilise ces grandes jarres pour produire, conserver et faire vieillir le vin. Dans la méthode traditionnelle, elles sont enfouies dans le sol.",
            "to": "hands"
          },
          {
            "label": "C’est toi qui as fabriqué celle-ci ?",
            "reply": "Non, j’apprends encore. Je travaille ici avec un potier expérimenté. La fabrication des jarres et leur utilisation demandent des savoirs qui se transmettent entre proches et dans les ateliers.",
            "to": "voices"
          }
        ],
        "speech": "Tu regardes la grande jarre ? Tu peux t’approcher, je viens justement de ranger les outils autour."
      },
      "hands": {
        "title": "La forme du kvevri",
        "text": "Nino sort un croquis pour te montrer la jarre entière.",
        "choices": [
          {
            "label": "Qui t’apprend à fabriquer une jarre comme ça ?",
            "reply": "Le potier de cet atelier. Il m’explique les étapes et me fait observer son travail. On parle aussi avec les personnes qui utiliseront les jarres : leurs connaissances complètent les siennes.",
            "to": "voices"
          },
          {
            "label": "On enterre une jarre aussi grande ?",
            "reply": "Oui, c’est l’une des caractéristiques de cette méthode de vinification. Sur le croquis, tu vois mieux la partie qui se trouve sous terre.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Du croquis à l’usage",
        "text": "Nino étale une feuille sur la table, à côté de la jarre.",
        "choices": [
          {
            "label": "Les vignerons viennent aussi à l’atelier ?",
            "reply": "Certains viennent parler avec le potier. J’écoute leurs questions sur les récipients. Ça m’aide à comprendre à quoi servira ce que l’on fabrique.",
            "to": "end"
          },
          {
            "label": "Tu apprends aussi ce qui se passe après la fabrication ?",
            "reply": "Oui. J’ai accompagné des proches pendant les vendanges pour observer. Voir les jarres utilisées m’aide à comprendre des choses que je ne vois pas dans l’atelier.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Regarder le croquis",
        "text": "Nino rapproche le dessin pour que tu puisses le comparer avec le récipient.",
        "choices": [
          {
            "label": "Tu me montres la forme sur ton croquis ?",
            "reply": "Ici, tu vois le ventre arrondi de la jarre, et là, l’ouverture. Regarde ensuite le récipient : on reconnaît la même forme.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Comparer le dessin et l’objet",
        "text": "Tu prends le temps de regarder le croquis avec Nino, puis la grande jarre à côté de vous.",
        "choices": []
      }
    }
  },
  "maroc": {
    "title": "Juste avant le récit",
    "person": "Youssef",
    "role": "vient écouter un conteur",
    "goal": "Trouver avec Youssef une place pour écouter un conteur.",
    "hands": {
      "title": "Raconter avec plus que des mots",
      "text": "Les conteurs de Jemaa el-Fna combinent parole et gestes pour captiver et transmettre. Un récit ancien peut être adapté à son public et à des circonstances nouvelles."
    },
    "voices": {
      "title": "Une place habitée par des échanges",
      "text": "La place est un espace où se rencontrent des expressions orales, musicales, artistiques et des activités quotidiennes. La relation entre les personnes fait partie du patrimoine vivant."
    },
    "scenes": {
      "begin": {
        "title": "Sur la place Jemaa el-Fna",
        "text": "Youssef s’arrête près d’un groupe qui se forme autour d’un conteur. Des passants continuent de traverser la place.",
        "choices": [
          {
            "label": "Tu regardes quoi quand tu l’écoutes raconter ?",
            "reply": "Ses mains et son visage aussi. Il change de voix et accompagne ses mots de gestes. Parfois, je connais déjà l’histoire, mais je reste pour la façon dont il la raconte.",
            "to": "hands"
          },
          {
            "label": "On peut se joindre au groupe ?",
            "reply": "Oui, trouvons un endroit d’où l’on entend bien. Sur cette place, des gens viennent écouter, d’autres passent ou s’arrêtent un moment. Il faut laisser de la place autour.",
            "to": "voices"
          }
        ],
        "speech": "Le conteur va commencer. Si tu veux écouter, on peut rester un peu."
      },
      "hands": {
        "title": "Regarder le conteur",
        "text": "Le conteur parle aux personnes déjà installées. Youssef cherche un endroit d’où vous pourrez le voir.",
        "choices": [
          {
            "label": "Ce sont souvent les mêmes personnes qui viennent ?",
            "reply": "Je reconnais parfois des habitués, mais il y a aussi des gens de passage. C’est ce que j’aime ici : on ne sait jamais exactement avec qui on va écouter l’histoire.",
            "to": "voices"
          },
          {
            "label": "Il raconte toujours l’histoire de la même façon ?",
            "reply": "Pas forcément. Un conteur peut adapter son récit au public et à ce qui se passe autour. On verra ce qu’il choisit aujourd’hui.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Trouver sa place",
        "text": "Vous vous décalez pour laisser passer deux personnes derrière vous.",
        "choices": [
          {
            "label": "Pourquoi tu reviens l’écouter ?",
            "reply": "J’aime retrouver ses histoires et découvrir ce qu’il change. Et il y a souvent quelqu’un avec qui en parler ensuite. Aujourd’hui, ce sera peut-être toi.",
            "to": "end"
          },
          {
            "label": "On reste ici pour laisser le passage libre ?",
            "reply": "Oui, ici on entend bien. Et les personnes qui traversent la place peuvent passer derrière nous.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Le récit commence",
        "text": "Le conteur s’adresse au groupe. Youssef se tourne vers lui.",
        "choices": [
          {
            "label": "On en parle après ? Je veux entendre le début.",
            "reply": "D’accord. Je vais écouter aussi. Tu me diras quel passage tu as préféré.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Écouter l’histoire",
        "text": "Vous restez côte à côte dans le groupe. Le conteur commence son récit.",
        "choices": []
      }
    }
  },
  "kenya": {
    "title": "La fête va commencer",
    "person": "Amani",
    "role": "participe aux préparatifs d’une fête",
    "goal": "Rejoindre Amani pour écouter l’isukuti pendant une fête.",
    "hands": {
      "title": "Un nom venu des instruments",
      "text": "La danse isukuti des communautés Isukha et Idakho est accompagnée de tambours et de chants. Les tambours sont traditionnellement joués par trois, de tailles différentes."
    },
    "voices": {
      "title": "Une célébration, plusieurs occasions",
      "text": "L’isukuti accompagne diverses étapes de la vie et des rassemblements collectifs dans l’ouest du Kenya. Sa transmission contribue aux relations entre familles et communautés."
    },
    "scenes": {
      "begin": {
        "title": "Les derniers préparatifs",
        "text": "Amani déplace une chaise et fait signe à sa tante. Un groupe de musiciens se prépare un peu plus loin.",
        "choices": [
          {
            "label": "Il y a combien de tambours dans le groupe ?",
            "reply": "L’ensemble traditionnel d’isukuti en réunit trois : un grand, un moyen et un petit. Ils se jouent ensemble avec les chants et la danse. Reste près de moi, tu pourras les entendre.",
            "to": "hands"
          },
          {
            "label": "Tout le monde est venu pour la danse ?",
            "reply": "Aujourd’hui, on se retrouve pour une fête de famille, et l’isukuti en fait partie. On le retrouve aussi dans d’autres rassemblements et moments de la vie des communautés Isukha et Idakho.",
            "to": "voices"
          }
        ],
        "speech": "Tu arrives au bon moment. J’ai gardé une place près de ma tante si tu veux rester."
      },
      "hands": {
        "title": "Près des musiciens",
        "text": "Amani te montre où vous pourrez écouter sans gêner les préparatifs.",
        "choices": [
          {
            "label": "Vous vous retrouvez souvent pour jouer ?",
            "reply": "Il y a différentes occasions de se réunir. Dans ma famille, on essaie aussi de venir quand les plus jeunes apprennent. C’est plus facile de continuer quand on a des moments pour pratiquer ensemble.",
            "to": "voices"
          },
          {
            "label": "Je peux m’installer près de toi pour écouter ?",
            "reply": "Oui, cette place est libre. Je vais juste prévenir ma tante que tu restes avec nous.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Rejoindre la famille",
        "text": "Amani rapproche sa chaise de celle de sa tante.",
        "choices": [
          {
            "label": "Qui apprend aux plus jeunes ?",
            "reply": "Les personnes qui connaissent la danse et la musique leur montrent, et ils pratiquent avec elles. Dans ma famille, on essaie de les accompagner à ces moments-là.",
            "to": "end"
          },
          {
            "label": "Tu connais quelqu’un parmi les musiciens ?",
            "reply": "Oui, l’un d’eux est un ami de ma tante. Elle me l’a présenté tout à l’heure. Je pourrai te présenter aussi quand il aura terminé.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Prendre place",
        "text": "Les participants se rassemblent. Amani s’assied à côté de toi.",
        "choices": [
          {
            "label": "Tu me présentes ta tante après ?",
            "reply": "Bien sûr. Pour l’instant, restons ici : ça commence. Je te la présente dès qu’on peut discuter tranquillement.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "La musique commence",
        "text": "Tu restes avec Amani pendant que les tambours, les chants et la danse commencent.",
        "choices": []
      }
    }
  },
  "mexique": {
    "title": "Un coup de main en cuisine",
    "person": "Mateo",
    "role": "aide dans une cuisine familiale",
    "goal": "Aider Mateo à apporter le repas à table.",
    "hands": {
      "title": "Une technique avant la galette",
      "text": "La cuisine traditionnelle décrite par l’UNESCO associe notamment maïs, haricots et piment. La nixtamalisation et les outils de broyage font partie des savoir-faire liés à la préparation du maïs."
    },
    "voices": {
      "title": "Du champ à la table",
      "text": "Planter, récolter, cuisiner et manger font partie d’un ensemble de pratiques collectives. Au Michoacán et ailleurs au Mexique, ces savoirs contribuent aux liens et aux identités communautaires."
    },
    "scenes": {
      "begin": {
        "title": "Près du plan de travail",
        "text": "Mateo finit de préparer le repas. Une pâte de maïs et une assiette vide sont posées près de lui.",
        "choices": [
          {
            "label": "Cette pâte est faite avec quel maïs ?",
            "reply": "Avec du maïs préparé pour faire la pâte. La nixtamalisation, un traitement à la chaux, fait partie des techniques utilisées avant de le moudre. Aujourd’hui, la pâte était déjà prête quand j’ai commencé.",
            "to": "hands"
          },
          {
            "label": "Vous préparez tout ça à combien ?",
            "reply": "Aujourd’hui, ma sœur et moi. J’ai appris en aidant à la cuisine. Ici, dans le Michoacán, les savoirs culinaires se transmettent aussi en préparant et en partageant les repas.",
            "to": "voices"
          }
        ],
        "speech": "Tu peux m’aider ? Il me faudrait l’assiette qui est juste à côté de toi."
      },
      "hands": {
        "title": "L’assiette se remplit",
        "text": "Mateo rapproche l’assiette et termine ce qu’il prépare.",
        "choices": [
          {
            "label": "Qui t’a appris à préparer ça ?",
            "reply": "J’ai commencé avec ma mère, puis j’ai aussi cuisiné avec d’autres proches. Chacun m’a montré ses habitudes. Ma sœur me donne encore des conseils quand on cuisine ensemble.",
            "to": "voices"
          },
          {
            "label": "Je peux apporter l’assiette pendant que tu termines ?",
            "reply": "Oui, merci. Attends que j’ajoute ce qui manque, puis on pourra passer à table.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Cuisiner ensemble",
        "text": "La sœur de Mateo passe vérifier que la table est prête.",
        "choices": [
          {
            "label": "Vous faites aussi pousser le maïs ?",
            "reply": "Pas nous. On l’achète. Mais la cuisine ne commence pas seulement dans cette pièce : il y a aussi les personnes qui cultivent et récoltent les aliments avant qu’on les prépare.",
            "to": "end"
          },
          {
            "label": "La recette est toujours la même chez vous ?",
            "reply": "On a nos habitudes, mais pas tous les mêmes goûts. Ma sœur et moi ne mettons pas toujours les mêmes accompagnements. On en discute en préparant le repas.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Le repas est prêt",
        "text": "Mateo te tend l’assiette. Sa sœur appelle depuis la table.",
        "choices": [
          {
            "label": "Je pose l’assiette au milieu ?",
            "reply": "Oui, parfait. Merci pour ton aide ! Prends une place, on arrive.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Passer à table",
        "text": "Tu poses l’assiette et tu rejoins Mateo et sa sœur pour le repas.",
        "choices": []
      }
    }
  },
  "bresil": {
    "title": "Au bord de la roda",
    "person": "Joana",
    "role": "joue de la musique dans un groupe de capoeira",
    "goal": "Trouver ta place près de Joana pendant une roda de capoeira.",
    "hands": {
      "title": "Le rythme participe au jeu",
      "text": "Le maître de capoeira peut jouer du berimbau, un instrument à une corde, et conduire les chants et le rythme. La musique fait partie de la rencontre entre les deux joueurs."
    },
    "voices": {
      "title": "Le cercle est aussi une école",
      "text": "Les personnes autour chantent, frappent des mains et jouent. Les savoirs se transmettent par observation et imitation, avec des règles de respect et une mémoire de résistance à l’oppression."
    },
    "scenes": {
      "begin": {
        "title": "À côté du cercle",
        "text": "Joana rejoint un cercle de participants. Deux joueurs se préparent au centre pendant que les instruments s’installent.",
        "choices": [
          {
            "label": "Cet instrument avec une seule corde, c’est quoi ?",
            "reply": "C’est un berimbau. Sa musique participe au rythme du jeu. Le maître peut en jouer et conduire les chants. Écoute : tu vas entendre les autres voix se joindre à lui.",
            "to": "hands"
          },
          {
            "label": "Il y a une place pour quelqu’un qui regarde ?",
            "reply": "Oui, viens près de moi. Dans la roda, il n’y a pas que les deux joueurs du milieu : autour, on chante, on frappe des mains et on joue de la musique. Tu peux commencer par regarder.",
            "to": "voices"
          }
        ],
        "speech": "Bonjour ! C’est ta première roda ? Tu peux rester à côté de moi pour voir ce qui se passe."
      },
      "hands": {
        "title": "Écouter le berimbau",
        "text": "Joana te laisse entendre l’instrument, puis se tourne vers les autres participants.",
        "choices": [
          {
            "label": "Et les gens autour participent aussi ?",
            "reply": "Oui. Le cercle accompagne les joueurs avec la musique, les chants et les mains. On apprend aussi en regardant les autres et en suivant les indications du maître.",
            "to": "voices"
          },
          {
            "label": "Comment savoir quand le jeu commence ?",
            "reply": "Regarde le maître et les joueurs. Il conduit le rythme et le déroulement de la roda. Je reste avec toi pendant que tu découvres.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Observer depuis le cercle",
        "text": "Les participants se rapprochent. Joana te fait une place à côté d’elle.",
        "choices": [
          {
            "label": "Je peux entrer tout de suite au milieu ?",
            "reply": "Parlons-en d’abord au maître. Il pourra t’expliquer comment cela se passe dans ce groupe. Pour l’instant, on peut regarder les deux joueurs qui se préparent.",
            "to": "end"
          },
          {
            "label": "C’est comme ça que tu as appris ?",
            "reply": "J’ai beaucoup observé et essayé avec le groupe. Le maître nous apprend aussi les règles, le respect entre les participants et l’histoire de la capoeira. J’apprends encore.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Les joueurs entrent",
        "text": "Les deux joueurs prennent place au centre. Joana se tourne vers eux.",
        "choices": [
          {
            "label": "Je reste à côté de toi pour suivre.",
            "reply": "Oui, reste ici. Après, si tu veux, on pourra revenir sur ce que tu n’as pas compris.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Regarder le jeu",
        "text": "Tu restes près de Joana. Le cercle accompagne la rencontre des deux joueurs.",
        "choices": []
      }
    }
  },
  "perou": {
    "title": "Avant le renouvellement du pont",
    "person": "Elena",
    "role": "participe aux préparatifs du renouvellement du pont",
    "goal": "Rencontrer Elena pendant les préparatifs du pont Q’eswachaka.",
    "hands": {
      "title": "Un pont tissé",
      "text": "Le pont suspendu Q’eswachaka est renouvelé chaque année à partir de cordes végétales. Préparer les fibres et assembler les cordes demande des savoir-faire transmis dans les familles."
    },
    "voices": {
      "title": "Une construction collective",
      "text": "Quatre communautés quechuas sont associées à son renouvellement. Le travail en commun, les responsabilités et les cérémonies comptent autant que l’ouvrage qui permet de franchir la gorge."
    },
    "scenes": {
      "begin": {
        "title": "Près des préparatifs",
        "text": "Elena rassemble ses affaires avant de rejoindre d’autres participants. Des fibres végétales sont disposées près d’elle.",
        "choices": [
          {
            "label": "Ces fibres vont devenir des cordes ?",
            "reply": "Oui. Les fibres sont préparées puis assemblées pour former les cordes du pont. Ce travail demande des savoir-faire que l’on apprend notamment dans les familles.",
            "to": "hands"
          },
          {
            "label": "Tout le village participe ?",
            "reply": "Le renouvellement associe quatre communautés quechuas. Le travail et les responsabilités sont répartis ; tout le monde ne fait pas la même chose. Il y a aussi les cérémonies et les moments de rassemblement.",
            "to": "voices"
          }
        ],
        "speech": "Bonjour ! Je vais bientôt rejoindre les autres pour les préparatifs. Tu voulais me poser une question ?"
      },
      "hands": {
        "title": "Des fibres aux cordes",
        "text": "Elena te montre les fibres avant de ranger ses affaires.",
        "choices": [
          {
            "label": "Qui vous apprend à préparer les cordes ?",
            "reply": "Ces savoirs passent entre générations, notamment dans les familles. On apprend en participant avec les personnes qui connaissent les gestes. C’est un travail collectif.",
            "to": "voices"
          },
          {
            "label": "Vous recommencez tous les ans ?",
            "reply": "Oui, le pont est renouvelé chaque année. Il faut donc préparer le travail ensemble et transmettre les gestes pour pouvoir continuer.",
            "to": "end"
          }
        ]
      },
      "voices": {
        "title": "Rejoindre les autres",
        "text": "Plusieurs personnes font signe à Elena. Elle leur indique qu’elle arrive.",
        "choices": [
          {
            "label": "Vous répartissez comment le travail ?",
            "reply": "Il y a différentes responsabilités, de la préparation des fibres à l’assemblage des cordes et au travail sur le pont. Des personnes expérimentées conduisent les étapes qui demandent leur savoir-faire.",
            "to": "end"
          },
          {
            "label": "Les jeunes apprennent en venant avec leur famille ?",
            "reply": "Oui, la transmission dans les familles compte beaucoup. Participer aux préparatifs et observer les personnes expérimentées permet d’apprendre progressivement.",
            "to": "end"
          }
        ]
      },
      "end": {
        "title": "Il est temps de partir",
        "text": "Elena termine de ranger ses affaires. Le groupe l’attend pour poursuivre les préparatifs.",
        "choices": [
          {
            "label": "Je te laisse rejoindre les autres. Merci pour tes explications.",
            "reply": "Avec plaisir. Si tu as encore des questions, on pourra en reparler à la pause.",
            "to": "finish"
          }
        ]
      },
      "finish": {
        "title": "Les préparatifs continuent",
        "text": "Elena rejoint le groupe. Tu restes dans l’espace d’observation pendant que les participants poursuivent leur travail.",
        "choices": []
      }
    }
  }
};
