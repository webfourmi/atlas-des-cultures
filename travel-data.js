// Médias et repères vérifiés le 18 octobre 2026. Voir travel/CREDITS.md.
const TRAVEL_PHOTOS = {
  "japon": {
    "local": "./travel/japon.webp",
    "caption": "Osechi, mets du Nouvel An japonais présentés dans des boîtes jūbako. Préparation d’Ochanomizu Ogawaken.",
    "author": "Akihito Kurono (Bokensdorf)",
    "license": "CC0",
    "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "source": "https://commons.wikimedia.org/wiki/File:Osechi.jpg",
    "date": "2026-03-21",
    "width": 960,
    "height": 720,
    "original": "https://upload.wikimedia.org/wikipedia/commons/7/71/Osechi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Osechi.jpg"
  },
  "coree": {
    "local": "./travel/coree.webp",
    "caption": "Préparation du kimchi en Corée du Sud. Le kimjang associe préparation et partage.",
    "author": "by Caroline Knox at flickr",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Gimjang-Preparation_for_making_kimchi-01.jpg",
    "date": "Originally taken on 2006-05-23",
    "width": 960,
    "height": 720,
    "original": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Korean_cuisine-Gimjang-Preparation_for_making_kimchi-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Korean cuisine-Gimjang-Preparation for making kimchi-01.jpg"
  },
  "vietnam": {
    "local": "./travel/vietnam.webp",
    "caption": "Ensemble de Quan Họ au temple Đền Đô, dans la province de Bắc Ninh.",
    "author": "Chrisvomberg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
    "source": "https://commons.wikimedia.org/wiki/File:Quan_Ho-Ensemble.JPG",
    "date": "2004-01-14",
    "width": 960,
    "height": 720,
    "original": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Quan_Ho-Ensemble.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Quan Ho-Ensemble.JPG"
  },
  "indonesie": {
    "local": "./travel/indonesie.webp",
    "caption": "Artisanes à Yogyakarta, Java : application manuelle de cire sur une étoffe de batik.",
    "author": "Ian Alexander",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Batik_craftswomen_in_Java_handmarking_resist_on_batik_tulis_cloth_with_tjantings.jpg",
    "date": "1996",
    "width": 960,
    "height": 610,
    "original": "https://upload.wikimedia.org/wikipedia/commons/7/74/Batik_craftswomen_in_Java_handmarking_resist_on_batik_tulis_cloth_with_tjantings.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Batik craftswomen in Java handmarking resist on batik tulis cloth with tjantings.jpg"
  },
  "inde": {
    "local": "./travel/inde.webp",
    "caption": "Un élève salue un maître de yoga en Inde. Photographie d’une relation d’apprentissage.",
    "author": "Yogainrishikesh",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Yoga_master_and_student,_India.jpg",
    "date": "2018-12-16 10:46:08",
    "width": 960,
    "height": 640,
    "original": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Yoga_master_and_student%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Yoga master and student, India.jpg"
  },
  "vanuatu": {
    "local": "./travel/vanuatu.webp",
    "caption": "Dessin sur le sable au Vanuatu. Un tracé peut être associé à des récits et à des savoirs transmis.",
    "author": "PhillipC",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "source": "https://commons.wikimedia.org/wiki/File:Sand_drawing,_Vanuatu.jpg",
    "date": "2007-08-04",
    "width": 960,
    "height": 582,
    "original": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sand_drawing%2C_Vanuatu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Sand drawing, Vanuatu.jpg"
  },
  "turquie": {
    "local": "./travel/turquie.webp",
    "caption": "Service de café turc photographié en 2019.",
    "author": "Valentyna Tarasova",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:2019-07-26_Turkish_Coffee.jpg",
    "date": "2019-07-26 18:31:18",
    "width": 960,
    "height": 720,
    "original": "https://upload.wikimedia.org/wikipedia/commons/b/b7/2019-07-26_Turkish_Coffee.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "2019-07-26 Turkish Coffee.jpg"
  },
  "georgie": {
    "local": "./travel/georgie.webp",
    "caption": "Kvevri conservé au musée de Gonio, en Géorgie. Cette jarre de terre cuite est associée à la vinification.",
    "author": "Ekkatterrinna",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Qvevri.jpg",
    "date": "2015-08-10",
    "width": 565,
    "height": 509,
    "original": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Qvevri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Qvevri.jpg"
  },
  "maroc": {
    "local": "./travel/maroc.webp",
    "caption": "Vue panoramique de la place Jemaa el-Fna à Marrakech, au début de la soirée, en 2013.",
    "author": "Boris Macek",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:Djemaa_el_Fna_in_the_evening.jpg",
    "date": "2013-10-19 18:04:24",
    "width": 1280,
    "height": 290,
    "original": "https://upload.wikimedia.org/wikipedia/commons/3/39/Djemaa_el_Fna_in_the_evening.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Djemaa el Fna in the evening.jpg"
  },
  "kenya": {
    "local": "./travel/kenya.webp",
    "caption": "Danseurs isukuti lors de l’événement The Breastfeeding Run. Une représentation contemporaine, dans un contexte sportif.",
    "author": "Lebu Ayiga",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Isukuti_dancers_performing_on_a_platform_at_The_Breastfeeding_Run.jpg",
    "date": "2025-08-01 21:40:23",
    "width": 960,
    "height": 540,
    "original": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Isukuti_dancers_performing_on_a_platform_at_The_Breastfeeding_Run.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Isukuti dancers performing on a platform at The Breastfeeding Run.jpg"
  },
  "mexique": {
    "local": "./travel/mexique.webp",
    "caption": "Préparation de pâte de maïs sur un metate dans un restaurant de l’île de Janitzio, au Michoacán.",
    "author": "Thelmadatter",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "source": "https://commons.wikimedia.org/wiki/File:MasaMetate.JPG",
    "date": "2009-11-15",
    "width": 960,
    "height": 643,
    "original": "https://upload.wikimedia.org/wikipedia/commons/1/19/MasaMetate.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "MasaMetate.JPG"
  },
  "bresil": {
    "local": "./travel/bresil.webp",
    "caption": "Roda de capoeira de l’Engenho da Rainha au Brésil, photographiée en 2022.",
    "author": "Estela Neto",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Roda_de_Capoeira_tradicional_do_Engenho_da_Rainha_4.jpg",
    "date": "2022-09-27 19:55:48",
    "width": 960,
    "height": 638,
    "original": "https://upload.wikimedia.org/wikipedia/commons/4/41/Roda_de_Capoeira_tradicional_do_Engenho_da_Rainha_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Roda de Capoeira tradicional do Engenho da Rainha 4.jpg"
  },
  "perou": {
    "local": "./travel/perou.webp",
    "caption": "Le pont Q’eswachaka, dans les Andes péruviennes, photographié en 2018.",
    "author": "Aga Khan (IT)",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "source": "https://commons.wikimedia.org/wiki/File:Inka_suspension_bridge_Qeswachaka_DSC_2730.jpg",
    "date": "2018-02-02 18:13:35",
    "width": 960,
    "height": 636,
    "original": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Inka_suspension_bridge_Qeswachaka_DSC_2730.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",
    "file": "Inka suspension bridge Qeswachaka DSC 2730.jpg"
  }
};
const TRAVEL_PLACES = {
  "japon": {
    "name": "Tokyo · repère national",
    "lat": 35.68972222,
    "lon": 139.69222222,
    "source": "https://en.wikipedia.org/wiki/Tokyo"
  },
  "coree": {
    "name": "Séoul · repère national",
    "lat": 37.56,
    "lon": 126.99,
    "source": "https://en.wikipedia.org/wiki/Seoul"
  },
  "vietnam": {
    "name": "Région de Bắc Ninh",
    "lat": 21.08333333,
    "lon": 106.16666667,
    "source": "https://en.wikipedia.org/wiki/B%E1%BA%AFc_Ninh"
  },
  "indonesie": {
    "name": "Yogyakarta · Java",
    "lat": -7.80138889,
    "lon": 110.36444444,
    "source": "https://en.wikipedia.org/wiki/Yogyakarta"
  },
  "inde": {
    "name": "Rishikesh · repère en Inde",
    "lat": 30.10833333,
    "lon": 78.29722222,
    "source": "https://en.wikipedia.org/wiki/Rishikesh"
  },
  "vanuatu": {
    "name": "Malekula · Vanuatu central",
    "lat": -16.25,
    "lon": 167.5,
    "source": "https://en.wikipedia.org/wiki/Malekula"
  },
  "turquie": {
    "name": "Istanbul · repère en Türkiye",
    "lat": 41.01361111,
    "lon": 28.955,
    "source": "https://en.wikipedia.org/wiki/Istanbul"
  },
  "georgie": {
    "name": "Tbilissi · repère national",
    "lat": 41.7225,
    "lon": 44.7925,
    "source": "https://en.wikipedia.org/wiki/Tbilisi"
  },
  "maroc": {
    "name": "Place Jemaa el-Fna · Marrakech",
    "lat": 31.62583333,
    "lon": -7.98944444,
    "source": "https://en.wikipedia.org/wiki/Jemaa_el-Fnaa"
  },
  "kenya": {
    "name": "Kakamega · ouest du Kenya",
    "lat": 0.28215,
    "lon": 34.754,
    "source": "https://en.wikipedia.org/wiki/Kakamega"
  },
  "mexique": {
    "name": "Janitzio · Michoacán",
    "lat": 19.57361111,
    "lon": -101.65194444,
    "source": "https://en.wikipedia.org/wiki/Janitzio"
  },
  "bresil": {
    "name": "Salvador de Bahia · repère au Brésil",
    "lat": -12.97472222,
    "lon": -38.47666667,
    "source": "https://en.wikipedia.org/wiki/Salvador%2C_Bahia"
  },
  "perou": {
    "name": "Pont Q’eswachaka · région de Cusco",
    "lat": -14.3814,
    "lon": -71.484,
    "source": "https://en.wikipedia.org/wiki/Queshuachaca"
  }
};
const TRAVEL_AUDIO = [
  {
    "id": "angola",
    "stop": "bresil",
    "title": "Toque de Angola · berimbau seul",
    "src": "./travel/berimbau-angola.mp3",
    "type": "audio/mpeg",
    "duration": "18 s",
    "author": "Andrew Archibald (Aarchiba)",
    "license": "Domaine public, déclaré par l’auteur",
    "source": "https://commons.wikimedia.org/wiki/File:Toque-de-angola.ogg",
    "guide": "Écoute les variations du son d’un seul berimbau. Il s’agit d’une démonstration de l’instrument, pas de l’enregistrement d’une roda entière."
  },
  {
    "id": "iuna",
    "stop": "bresil",
    "title": "Iúna · trois berimbaus",
    "src": "./travel/berimbau-iuna.mp3",
    "type": "audio/mpeg",
    "duration": "30 s",
    "author": "Djino · enregistrement 2008",
    "license": "Domaine public, déclaré par l’auteur",
    "source": "https://commons.wikimedia.org/wiki/File:I%C3%BAna.ogg",
    "guide": "Écoute comment plusieurs berimbaus se répondent. Extrait de 0:00 à 0:30 de l’enregistrement Iúna, annoncé comme joué par trois berimbaus."
  }
];
const TRAVEL_VIDEO = [
  {
    "id": "quanho",
    "stop": "vietnam",
    "title": "Les voix du Quan Họ",
    "video": "goCQBu896JM",
    "source": "https://ich.unesco.org/fr/video/1177",
    "credit": "UNESCO · © 2008 Vietnam Institute of Culture and Arts Studies",
    "guide": "Dans ce documentaire officiel, cherche les passages chantés et les réponses entre groupes. La présentation peut contenir du commentaire parlé."
  },
  {
    "id": "isukuti",
    "stop": "kenya",
    "title": "Tambours et chants isukuti",
    "video": "Zw3WSI8j8Bs",
    "source": "https://ich.unesco.org/fr/video/22194",
    "credit": "UNESCO · © Department of Culture, 2013",
    "guide": "Dans ce documentaire officiel, observe la relation entre percussion, voix et déplacements. Les scènes ne résument pas toutes les pratiques isukuti."
  }
];
