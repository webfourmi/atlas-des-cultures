// Ajouter une entrée portant l’identifiant d’une escale pour enrichir son carnet.
const RECIPES = {
  "japon": {
    "title": "Soupe miso au tofu et wakamé",
    "servings": "4 petits bols",
    "prep": "10 min",
    "cook": "5 min",
    "rest": "0 min",
    "context": "Une soupe quotidienne pour explorer le washoku, sans prétendre résumer ses repas saisonniers ou le Nouvel An.",
    "ingredients": [
      "800 ml de dashi préparé selon son emballage",
      "200 g de tofu soyeux",
      "3 g de wakamé séché",
      "3 à 4 c. à soupe de miso",
      "1 oignon nouveau"
    ],
    "steps": [
      "Découper le tofu ; émincer l’oignon. Réhydrater le wakamé selon son emballage puis égoutter.",
      "Chauffer doucement le dashi avec le tofu, environ 3 minutes.",
      "Couper le feu. Délayer le miso dans une louche de bouillon puis incorporer.",
      "Ajouter wakamé et oignon, réchauffer doucement si nécessaire sans bouillir ; servir."
    ],
    "notes": "Adaptation pratique : dashi prêt à l’emploi et quantités arrondies. Un dashi au kombu convient à une variante végétarienne ; vérifier les ingrédients. Le miso et le tofu contiennent du soja ; certains misos contiennent de l’orge, le dashi peut contenir du poisson.",
    "source": [
      "Namiko Hirasawa Chen · Just One Cookbook",
      "https://www.justonecookbook.com/homemade-miso-soup/"
    ],
    "image": "./recipes/miso.webp",
    "imageAlt": "Bol de soupe miso au tofu, au wakamé et à l’oignon nouveau.",
    "pdf": "./recipes/miso.pdf"
  },
  "coree": {
    "title": "Baechu-geotjeori · kimchi frais",
    "servings": "4 à 8 accompagnements",
    "prep": "20 min",
    "cook": "5 min",
    "rest": "30 min de salage + refroidissement",
    "context": "À manger frais, sans reproduire le kimjang collectif ni ses réserves hivernales.",
    "ingredients": [
      "450 g de chou chinois",
      "1 c. à soupe de gros sel ; 240 ml d’eau",
      "2 c. à café de farine de riz",
      "3 c. à soupe de sauce de poisson",
      "1½ c. à café de sucre ; 25 g de gochugaru",
      "3 gousses d’ail ; ½ c. à café de gingembre râpé",
      "40 g d’oignon ; 2 oignons nouveaux",
      "20 g de ciboulette asiatique ; 30 g de carotte",
      "1 c. à soupe de sésame grillé"
    ],
    "steps": [
      "Couper le chou. Mélanger avec le sel et 120 ml d’eau ; laisser 30 minutes en remuant deux fois.",
      "Chauffer farine et eau restante 5 minutes en remuant ; refroidir.",
      "Ajouter sauce, sucre, piment, ail, gingembre et oignon hachés.",
      "Rincer soigneusement le chou plusieurs fois, égoutter. Mélanger avec la sauce, les légumes émincés et le sésame. Servir aussitôt."
    ],
    "notes": "Adaptation métrique : sauce de poisson à la place des anchois fermentés, substitution proposée par Maangchi. Poisson et sésame présents. Réfrigérer les restes rapidement ; aucun séjour à température ambiante pour fermenter.",
    "source": [
      "Maangchi · Baechu-geotjeori",
      "https://www.maangchi.com/recipe/baechu-geotjeori"
    ],
    "image": "./recipes/kimchi.webp",
    "imageAlt": "Assiette de kimchi frais au chou chinois, aux légumes et au sésame.",
    "pdf": "./recipes/kimchi.pdf"
  },
  "turquie": {
    "title": "Café turc au cezve",
    "servings": "2 petites tasses",
    "prep": "2 min",
    "cook": "3 à 5 min",
    "rest": "1 min",
    "context": "Une boisson liée à l’accueil et aux conversations. La tradition UNESCO comprend aussi le service et le partage.",
    "ingredients": [
      "120 ml d’eau à température ambiante (2 tasses de 60 ml)",
      "2 c. à café de café moulu très fin",
      "0 à 6 g de sucre, selon le goût",
      "2 petits verres d’eau pour le service"
    ],
    "steps": [
      "Mettre eau, café et sucre éventuel dans un cezve ; mélanger avant de chauffer.",
      "Chauffer à feu doux sans remuer. Dès que la mousse monte, retirer avant débordement.",
      "Répartir la mousse dans les tasses. Remettre brièvement sur feu doux puis retirer à la nouvelle montée, sans ébullition forte.",
      "Verser doucement, attendre que le marc se dépose et servir avec l’eau. Ne pas boire le dépôt."
    ],
    "notes": "Volume adapté à deux petites tasses ; ajuster à leur capacité. Le cezve et la mouture poudreuse caractérisent cette méthode. Le sucre se choisit avant cuisson. Contient de la caféine ; manipulation du récipient chaud par un adulte.",
    "source": [
      "GoTürkiye · Turkish Coffee in Istanbul",
      "https://goturkiye.com/istanbul/turkish-coffee"
    ],
    "image": "./recipes/cafe-turc.webp",
    "imageAlt": "Deux petites tasses de café turc, un cezve et deux verres d’eau.",
    "pdf": "./recipes/cafe-turc.pdf"
  },
  "mexique": {
    "title": "Tortillas de maïs à la masa harina",
    "servings": "4 personnes · 12 petites tortillas",
    "prep": "20 min",
    "cook": "25 min par fournées",
    "rest": "10 min",
    "context": "Une base partagée dans de nombreuses régions du Mexique, dont le Michoacán ; pas une spécialité exclusivement michoacane.",
    "ingredients": [
      "200 g de masa harina de maïs nixtamalisé",
      "300 ml d’eau tiède environ, à ajuster",
      "¼ c. à café de sel (facultatif)"
    ],
    "steps": [
      "Mélanger farine, sel et eau progressivement. Pétrir pour obtenir une pâte souple non collante ; couvrir et reposer 10 minutes.",
      "Diviser en 12 boules. Presser chacune entre deux feuilles de plastique alimentaire avec une presse ou une casserole plate.",
      "Retirer les feuilles. Poser sur une poêle sèche bien chaude ; cuire environ 30 secondes, retourner pour 1 minute, puis encore 30 à 60 secondes. Ajuster au feu : taches brunes sans brûler.",
      "Empiler dans un torchon propre pour garder la souplesse et servir chaudes."
    ],
    "notes": "Adaptation métrique domestique. Ajouter un peu d’eau si les bords craquent. La masa harina est déjà nixtamalisée : semoule et farine de maïs ordinaires ne conviennent pas. Des haricots cuits et une salsa peuvent accompagner les tortillas.",
    "source": [
      "Mely Martínez · Mexico in My Kitchen",
      "https://www.mexicoinmykitchen.com/corn-tortillas-from-scratch/"
    ],
    "image": "./recipes/tortillas.webp",
    "imageAlt": "Tortillas de maïs empilées dans un torchon propre.",
    "pdf": "./recipes/tortillas.pdf"
  }
};
