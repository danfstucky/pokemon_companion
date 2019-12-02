// Gym leader and city data
const gymLeaders = [
  {
    id: 1,
    city: 'Neeromp Farm',
    description: 'Neeromp Farm is responsible for providing food for the entire Kaito Region. It is also home to the ruthless plantation owner, Danimala. Danimala is the only Gym leader that does not adhere to a certain type of Pokemon. She found that she could work her Pokemon twice as hard if she uses them for both battling and farm work. As a result, her team consists of various farm animal Pokemon that look unusually tired.',
    leaders: [
      {
        name: 'Danimala',
        type: 'Farm Animals',
        pokemon: [
          { name: 'ponyta', id: 77, level: 11 },
          { name: 'flaafy', id: 180, level: 12 },
          { name: 'miltank', id: 241, level: 13 },
        ],
      },
    ],
  },
  {
    id: 2,
    city: 'Luprar Village',
    description: "Luprar is a quiet town nestled in the woods, but it has fallen under the control of Team Puff. One of Team Puff's executives was placed in charge of the Gym while their leader handles more important matters. The local trainers are too weak to overthrow the new hostile leaders on their own.",
    leaders: [
      {
        name: 'Kathy',
        type: 'Grass',
        pokemon: [
          { name: 'paras', id: 46, level: 21 },
          { name: 'bellossom', id: 182, level: 21 },
          { name: 'breloom', id: 286, level: 22 },
          { name: 'tropius', id: 357, level: 22 },
        ],
      },
    ],
  },
  {
    id: 3,
    city: 'Sideleaf City',
    description: "Sideleaf is the largest city in all of Kaito and has earned a great reputation for it's shopping, biking, and dance scene. Over 100,000 citizens reside in the sprawling city and it even boasts a Pokemon daycare! The city was founded by it's Gym leader, the Great Salmon King, who is also renown for his handsomeness.",
    leaders: [
      {
        name: 'Salmon King',
        type: 'Water',
        pokemon: [
          { name: 'lanturn', id: 171, level: 26 },
          { name: 'slowbro', id: 80, level: 26 },
          { name: 'seadra', id: 117, level: 27 },
          { name: 'gyarados', id: 130, level: 28 },
        ],
      },
    ],
  },
  {
    id: 4,
    city: 'Koala Bay',
    description: "Long ago a group of koala bears banded together and formed the city of Koala Bay on the coastline of the warmest part of Kaito. Due to the extreme neediness of koalas, the city soon became the medical center of the region after the construction of a massive hospital system fully staffed with nurses and koala aids.",
    leaders: [
      {
        name: 'Heather Feather',
        type: 'Fire',
        pokemon: [
          { name: 'magmar', id: 126, level: 30 },
          { name: 'charmeleon', id: 5, level: 31 },
          { name: 'torkoal', id: 324, level: 31 },
          { name: 'ninetales', id: 38, level: 32 },
        ],
      },
    ],
  },
  {
    id: 5,
    city: 'Eagle Island',
    description: "Eagle Island is a beautiful tropical paradise near Koala Bay. Island folklore says the eagles watch over the village's people who often try to kidnap koalas from the nearby Koala Bay to appease them. However, the small village was taken over by Team Puff who placed one of their executives in charge of the Gym.",
    leaders: [
      {
        name: 'Slake',
        type: 'Steel',
        pokemon: [
          { name: 'magneton', id: 82, level: 34 },
          { name: 'metagross', id: 376, level: 34 },
          { name: 'scizor', id: 212, level: 34 },
          { name: 'steelix', id: 208, level: 35 },
        ],
      },
    ],
  },
  {
    id: 6,
    city: 'Mossrithe Town',
    description: "Mossrithe Town was once a quiet, charming place hidden deep within the woods of northern Kaito, but now it is only quiet. Dead quiet. Disaster struck Mossrithe and all of the town's residents have disappeared including the Gym leader, Valora. There are many dark secrets to discover here as the ominous silence of Mossrithe ripples throughout all of Kaito.",
    leaders: [
      {
        name: 'Valora',
        type: 'Ghost',
        pokemon: [
          { name: 'gengar', id: 94, level: 38 },
          { name: 'mismagius', id: 429, level: 38 },
          { name: 'chandelure', id: 609, level: 39 },
          { name: 'cofagrigus', id: 563, level: 40 },
        ],
      },
    ],
  },
  {
    id: 7,
    city: 'Corlain City',
    description: "Corlain City is home to the famous archaeologist Dr. Hudman who also serves as the city's Gym leader. The city is extremely environmentally conscious due to the strict regulation put in place by Hudman. It's location in the mountains also makes it an ideal location for fossil hunting and home to Kaito's largest musuem.",
    leaders: [
      {
        name: 'Dr. Hudman',
        type: 'Fighting',
        pokemon: [
          { name: 'lucario', id: 448, level: 42 },
          { name: 'medicham', id: 308, level: 42 },
          { name: 'terrakion', id: 639, level: 42 },
          { name: 'machamp', id: 68, level: 44 },
        ],
      },
    ],
  },
  {
    id: 8,
    city: 'Taelia Town',
    description: "Taelia is one of the larger cities and home to some of the wealthiest residents in all of Kaito. The city attractions include a large outdoor marketplace, casino, and sparkling waterfalls. Very little is known about the Gym Leader, Anthella, but there are increasing reports of Team Puff's presence in the city.",
    leaders: [
      {
        name: 'Anthella',
        type: 'Dark',
        pokemon: [
          { name: 'spiritomb', id: 442, level: 46 },
          { name: 'tyranitar', id: 248, level: 47 },
          { name: 'umbreon', id: 197, level: 46 },
          { name: 'darkrai', id: 491, level: 48 },
        ],
      },
    ],
  },
  {
    id: 9,
    city: 'Salmon Plateau',
    description: "Salmon Plateau is the final destination for Kaito trainers as it contains the Elite 4 Headquarters. Very strong Pokemon roam the small island's grassy fields and as a result, officials have restricted access to trainers who have proven themselves by obtaining all 8 Kaito badges.",
    leaders: [
      {
        name: 'Elite 4 Chad',
        type: 'Ground',
        pokemon: [
          { name: 'nidoking', id: 34, level: 50 },
          { name: 'krookodile', id: 553, level: 50 },
          { name: 'rhydon', id: 112, level: 50 },
          { name: 'steelix', id: 208, level: 51 },
          { name: 'swampert', id: 260, level: 51 },
          { name: 'golem', id: 76, level: 51 },
        ],
      },
      {
        name: 'Elite 4 Jess',
        type: 'Dragon',
        pokemon: [
          { name: 'salamence', id: 373, level: 51 },
          { name: 'flygon', id: 330, level: 51 },
          { name: 'gyarados', id: 130, level: 51 },
          { name: 'hydreigon', id: 635, level: 52 },
          { name: 'charizard', id: 6, level: 52 },
          { name: 'dragonite', id: 149, level: 52 },
        ],
      },
      {
        name: 'Elite 4 Justin',
        type: 'Poison',
        pokemon: [
          { name: 'garbodor', id: 569, level: 52 },
          { name: 'muk', id: 89, level: 52 },
          { name: 'scolipede', id: 545, level: 52 },
          { name: 'gengar', id: 94, level: 53 },
          { name: 'nidoqueen', id: 31, level: 53 },
          { name: 'venusaur', id: 3, level: 53 },
        ],
      },
      {
        name: 'Elite 4 Heather',
        type: 'Psychic',
        pokemon: [
          { name: 'slowking', id: 199, level: 52 },
          { name: 'metagross', id: 376, level: 52 },
          { name: 'espeon', id: 196, level: 53 },
          { name: 'starmie', id: 121, level: 53 },
          { name: 'alakazam', id: 65, level: 54 },
          { name: 'latias', id: 380, level: 54 },
        ],
      },
    ],
  },
];

export default gymLeaders;
