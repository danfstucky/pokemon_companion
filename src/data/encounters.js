const wildEncounterList = [
  {
    id: 1,
    location: 'Salmon Town',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'TENTACOOL', id: 72 },
          { name: 'MANTYKE', id: 458 },
          { name: 'REMORAID', id: 223 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'BARBOACH', id: 339 },
          { name: 'SHELLDER', id: 90 },
          { name: 'KRABBY', id: 98 },
          { name: 'CHINCHOU', id: 170 },
          { name: 'QWILFISH', id: 211 },
          { name: 'CORSOLA', id: 222 },
          { name: 'STARYU', id: 120 },
        ],
      },
    ],
  },
  {
    id: 2,
    location: 'Route 1',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'RATTATA', id: 19 },
          { name: 'PIDGEY', id: 16 },
          { name: 'HOPPIP', id: 187 },
          { name: 'TOGEPI', id: 175 },
          { name: 'ODDISH', id: 43 },
          { name: 'PIKACHU', id: 25 },
          { name: 'WEEDLE', id: 13 },
          { name: 'NIDORAN', id: 32 },
          { name: 'MEOWTH', id: 52 },
          { name: 'HOOTHOOT', id: 163 },
          { name: 'SPINARAK', id: 167 },
          { name: 'EKANS', id: 23 },
          { name: 'SENTRET', id: 161 },
        ],
      },
    ],
  },
  {
    id: 3,
    location: 'Neeromp Farm',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'EXEGCUTE', id: 102 },
          { name: 'BULBASAUR', id: 1 },
          { name: 'LEDYBA', id: 165 },
          { name: 'CATERPIE', id: 10 },
          { name: 'BUNEARY', id: 427 },
          { name: 'BELLSPROUT', id: 69 },
          { name: 'EEVEE', id: 133 },
          { name: 'WEEDLE', id: 13 },
          { name: 'NIDORAN', id: 29 },
        ],
      },
    ],
  },
  {
    id: 4,
    location: 'Route 5',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'KLINK', id: 599 },
          { name: 'VOLBEAT', id: 313 },
          { name: 'LEDYBA', id: 165 },
          { name: 'NIDORAN', id: 32 },
          { name: 'NIDORAN', id: 29 },
          { name: 'PIDGEY', id: 16 },
          { name: 'PIKACHU', id: 25 },
          { name: 'BULBASAUR', id: 1 },
          { name: 'TEDDIURSA', id: 216 },
          { name: 'ABRA', id: 63 },
          { name: 'DROWZEE', id: 96 },
          { name: 'HOOTHOOT', id: 163 },
          { name: 'MURKROW', id: 198 },
          { name: 'RATTATA', id: 19 },
          { name: 'PURRLOIN', id: 509 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
        ],
      },
    ],
  },
  {
    id: 5,
    location: 'Zubat Cave',
    encounters: [
      {
        terrain: 'Cave',
        pokemon: [
          { name: 'ZUBAT', id: 41 },
          { name: 'DIGLETT', id: 50 },
          { name: 'MACHOP', id: 66 },
          { name: 'MUDKIP', id: 258 },
          { name: 'GEODUDE', id: 74 },
          { name: 'MEDITITE', id: 307 },
          { name: 'SLUGMA', id: 218 },
          { name: 'CLEFAIRY', id: 35 },
          { name: 'SANDSHREW', id: 27 },
          { name: 'ONIX', id: 95 },
          { name: 'WOOPER', id: 194 },
          { name: 'TIMBURR', id: 532 },
        ],
      },
    ],
  },
  {
    id: 6,
    location: 'Route 7',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'JIGGLYPUFF', id: 39 },
          { name: 'MARILL', id: 183 },
          { name: 'TURTWIG', id: 387 },
          { name: 'PARAS', id: 46 },
          { name: 'SHINX', id: 403 },
          { name: 'BELLSPROUT', id: 69 },
          { name: 'GOTHITA', id: 574 },
          { name: 'LILLIPUP', id: 506 },
          { name: 'CHARMANDER', id: 4 },
          { name: 'PIKACHU', id: 25 },
          { name: 'ABRA', id: 63 },
          { name: 'MURKROW', id: 198 },
          { name: 'SPEAROW', id: 21 },
        ],
      },
    ],
  },
  {
    id: 7,
    location: 'Luprar Village',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'EEVEE', id: 133 },
          { name: 'MARILL', id: 183 },
          { name: 'GROWLITHE', id: 58 },
          { name: 'KOFFING', id: 109 },
          { name: 'BELLOSSOM', id: 182 },
          { name: 'STUNKY', id: 434 },
          { name: 'LILLIPUP', id: 506 },
          { name: 'JIGGLYPUFF', id: 39 },
          { name: 'BUNEARY', id: 427 },
          { name: 'VULPIX', id: 37 },
          { name: 'GRIMER', id: 88 },
        ],
      },
    ],
  },
  {
    id: 8,
    location: 'Echol Forest',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'BELLSPROUT', id: 69 },
          { name: 'PINECO', id: 204 },
          { name: 'RALTS', id: 280 },
          { name: 'SWADLOON', id: 541 },
          { name: 'MANKEY', id: 56 },
          { name: 'MEOWTH', id: 52 },
          { name: 'FARFETCHD', id: 83 },
          { name: 'GOTHITA', id: 574 },
          { name: 'SCYTHER', id: 123 },
          { name: 'PINSIR', id: 127 },
          { name: 'ODDISH', id: 43 },
          { name: 'HOUNDOUR', id: 228 },
          { name: 'SNEASEL', id: 215 },
          { name: 'GLOOM', id: 44 },
        ],
      },
    ],
  },
  {
    id: 9,
    location: 'Sideleaf City',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'KRABBY', id: 98 },
          { name: 'SKORUPI', id: 451 },
          { name: 'VENONAT', id: 48 },
          { name: 'VULPIX', id: 37 },
          { name: 'MARILL', id: 183 },
          { name: 'SKIPLOOM', id: 188 },
          { name: 'SKARMORY', id: 227 },
          { name: 'BALTOY', id: 343 },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'BASCULIN', id: 550 },
          { name: 'DUCKLETT', id: 580 },
          { name: 'POLIWAG', id: 60 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'POLIWAG', id: 60 },
          { name: 'SLOWPOKE', id: 79 },
          { name: 'HORSEA', id: 116 },
          { name: 'POLITOED', id: 186 },
          { name: 'STARYU', id: 120 },
        ],
      },
    ],
  },
  {
    id: 26,
    location: 'Secluded Glave',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'TENTACOOL', id: 72 },
          { name: 'CORSOLA', id: 222 },
          { name: 'SQUIRTLE', id: 7 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'POLIWAG', id: 60 },
          { name: 'MANTINE', id: 226 },
          { name: 'HORSEA', id: 116 },
          { name: 'DRATINI', id: 147 },
          { name: 'STARYU', id: 120 },
        ],
      },
    ],
  },
  {
    id: 10,
    location: 'Route 12',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'SMEARGLE', id: 235 },
          { name: 'SLOWPOKE', id: 79 },
          { name: 'TOTODILE', id: 158 },
          { name: 'KRABBY', id: 98 },
          { name: 'SHUCKLE', id: 213 },
          { name: 'MARILL', id: 183 },
          { name: 'ELECTRIKE', id: 309 },
          { name: 'CROCONAW', id: 159 },
          { name: 'SLOWBRO', id: 80 },
          { name: 'DODUO', id: 84 },
          { name: 'GRIMER', id: 88 },
          { name: 'LICKITUNG', id: 108 },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'CHINCHOU', id: 170 },
          { name: 'WOOPER', id: 194 },
          { name: 'TENTACOOL', id: 72 },
          { name: 'SQUIRTLE', id: 7 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'REMORAID', id: 223 },
          { name: 'SLOWPOKE', id: 79 },
          { name: 'OCTILLERY', id: 224 },
          { name: 'POLITOED', id: 186 },
          { name: 'MANTINE', id: 226 },
          { name: 'DRATINI', id: 147 },
        ],
      },
    ],
  },
  {
    id: 11,
    location: 'Koala Bay',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'TENTACOOL', id: 72 },
          { name: 'PSYDUCK', id: 54 },
          { name: 'TENTACRUEL', id: 73 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'GOLDEEN', id: 118 },
          { name: 'KRABBY', id: 98 },
          { name: 'OCTILLERY', id: 224 },
          { name: 'POLITOED', id: 186 },
          { name: 'MANTINE', id: 226 },
          { name: 'DRATINI', id: 147 },
        ],
      },
    ],
  },
  {
    id: 12,
    location: 'Route 13',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'WINGULL', id: 278 },
          { name: 'WAILMER', id: 320 },
          { name: 'HORSEA', id: 116 },
          { name: 'DRATINI', id: 147 },
          { name: 'WARTORTLE', id: 8 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'SHELLDER', id: 90 },
          { name: 'KRABBY', id: 98 },
          { name: 'QWILFISH', id: 211 },
          { name: 'POLITOED', id: 186 },
          { name: 'MANTINE', id: 226 },
          { name: 'DRATINI', id: 147 },
        ],
      },
    ],
  },
  {
    id: 13,
    location: 'Eagle Island',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'DITTO', id: 132 },
          { name: 'MANKEY', id: 56 },
          { name: 'METAPOD', id: 11 },
          { name: 'KAKUNA', id: 14 },
          { name: 'ABRA', id: 63 },
          { name: 'MACHOP', id: 66 },
          { name: 'SCYTHER', id: 123 },
          { name: 'SUDOWOODO', id: 185 },
          { name: 'PINECO', id: 204 },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'SEEL', id: 86 },
          { name: 'SHELLDER', id: 90 },
          { name: 'POLIWAG', id: 60 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'SHELLDER', id: 90 },
          { name: 'KRABBY', id: 98 },
          { name: 'OCTILLERY', id: 224 },
          { name: 'MANTINE', id: 226 },
          { name: 'DRATINI', id: 147 },
        ],
      },
    ],
  },
  {
    id: 14,
    location: 'Route 14',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'JIGGLYPUFF', id: 39 },
          { name: 'RALTS', id: 280 },
          { name: 'TANGELA', id: 114 },
          { name: 'PIDGEY', id: 16 },
          { name: 'PIDGEOTTO', id: 17 },
          { name: 'HONCHKROW', id: 430 },
          { name: 'CLEFAIRY', id: 35 },
          { name: 'GLIGAR', id: 207 },
          { name: 'GASTLY', id: 92 },
          { name: 'MISDREAVUS', id: 200 },
          { name: 'LITWICK', id: 607 },
          { name: 'BANETTE', id: 354 },
          { name: 'RATICATE', id: 20 },
          { name: 'LAMPENT', id: 608 },
          { name: 'SABLEYE', id: 302 },
          { name: 'FROSLASS', id: 478 },
          { name: 'CUBONE', id: 104 },
          { name: 'HAUNTER', id: 93 },
        ],
      },
      {
        terrain: 'Cave',
        pokemon: [
          { name: 'RHYHORN', id: 111 },
          { name: 'CUBONE', id: 104 },
          { name: 'VOLTORB', id: 100 },
          { name: 'STEELIX', id: 208 },
          { name: 'ARON', id: 304 },
          { name: 'RATICATE', id: 20 },
          { name: 'ONIX', id: 95 },
          { name: 'CLEFAIRY', id: 35 },
        ],
      },
    ],
  },
  {
    id: 15,
    location: 'Mossrithe Town',
    encounters: [],
  },
  {
    id: 16,
    location: 'Route 15',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'PONYTA', id: 77 },
          { name: 'DEINO', id: 633 },
          { name: 'MAGNEMITE', id: 81 },
          { name: 'KAKUNA', id: 14 },
          { name: 'BEEDRILL', id: 15 },
          { name: 'BUTTERFREE', id: 12 },
          { name: 'SCYTHER', id: 123 },
          { name: 'PINSIR', id: 127 },
          { name: 'KANGASKHAN', id: 115 },
          { name: 'QUAGSIRE', id: 195 },
          { name: 'SUNKERN', id: 191 },
        ],
      },
    ],
  },
  {
    id: 17,
    location: 'Harthril City',
    encounters: [],
  },
  {
    id: 18,
    location: 'Harthril Lake',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'GOLDEEN', id: 118 },
          { name: 'POLIWHIRL', id: 61 },
          { name: 'DRATINI', id: 147 },
          { name: 'GYARADOS', id: 130 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'TOTODILE', id: 158 },
          { name: 'SLOWPOKE', id: 79 },
          { name: 'DRATINI', id: 147 },
          { name: 'GYARADOS', id: 130 },
        ],
      },
    ],
  },
  {
    id: 19,
    location: 'Route 16',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'NIDORINO', id: 33 },
          { name: 'PHANPY', id: 231 },
          { name: 'HERACROSS', id: 214 },
          { name: 'METAPOD', id: 11 },
          { name: 'MILTANK', id: 241 },
          { name: 'CHARMANDER', id: 4 },
          { name: 'VOLTORB', id: 100 },
          { name: 'DROWZEE', id: 96 },
          { name: 'MEOWTH', id: 52 },
          { name: 'CHARMELEON', id: 5 },
        ],
      },
    ],
  },
  {
    id: 20,
    location: 'Route 17',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'CHIKORITA', id: 152 },
          { name: 'AIPOM', id: 190 },
          { name: 'CYNDAQUIL', id: 155 },
          { name: 'SKARMORY', id: 227 },
          { name: 'QUILAVA', id: 156 },
          { name: 'MRMIME', id: 122 },
          { name: 'TAUROS', id: 128 },
          { name: 'ELECTABUZZ', id: 125 },
          { name: 'DITTO', id: 132 },
        ],
      },
    ],
  },
  {
    id: 21,
    location: 'Corlain City',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'DIGLETT', id: 50 },
          { name: 'SANDSHREW', id: 27 },
          { name: 'ZUBAT', id: 41 },
          { name: 'MACHOKE', id: 67 },
          { name: 'MEOWTH', id: 52 },
          { name: 'GRAVELER', id: 75 },
          { name: 'WIGGLYTUFF', id: 40 },
          { name: 'DUGTRIO', id: 51 },
        ],
      },
    ],
  },
  {
    id: 22,
    location: 'Route 18',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'KOFFING', id: 109 },
          { name: 'STANTLER', id: 234 },
          { name: 'MEDITITE', id: 307 },
          { name: 'WOBBUFFET', id: 202 },
          { name: 'HOUNDOUR', id: 228 },
          { name: 'SNUBBULL', id: 209 },
          { name: 'CHANSEY', id: 113 },
          { name: 'NIDORINA', id: 30 },
          { name: 'SCYTHER', id: 123 },
          { name: 'PINSIR', id: 127 },
        ],
      },
    ],
  },
  {
    id: 23,
    location: 'The Iciest Cave',
    encounters: [
      {
        terrain: 'Cave',
        pokemon: [
          { name: 'SHELLDER', id: 90 },
          { name: 'SEEL', id: 86 },
          { name: 'SWINUB', id: 220 },
          { name: 'CLOYSTER', id: 91 },
          { name: 'DEWGONG', id: 87 },
          { name: 'PILOSWINE', id: 221 },
          { name: 'JYNX', id: 124 },
          { name: 'CUBCHOO', id: 613 },
          { name: 'HITMONCHAN', id: 107 },
          { name: 'HITMONLEE', id: 106 },
        ],
      },
    ],
  },
  {
    id: 24,
    location: 'Taelia Town',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'POLIWHIRL', id: 61 },
          { name: 'PSYDUCK', id: 54 },
          { name: 'WARTORTLE', id: 8 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'TENTACOOL', id: 72 },
          { name: 'TENTACRUEL', id: 73 },
          { name: 'FEEBAS', id: 349 },
          { name: 'GYARADOS', id: 130 },
        ],
      },
    ],
  },
  {
    id: 25,
    location: 'Salmon Plateau',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'NIDORINO', id: 33 },
          { name: 'NIDORINA', id: 30 },
          { name: 'ARIADOS', id: 168 },
          { name: 'DELIBIRD', id: 225 },
          { name: 'XATU', id: 178 },
          { name: 'CLEFABLE', id: 36 },
          { name: 'SLOWKING', id: 199 },
          { name: 'MAGMAR', id: 126 },
          { name: 'ELECTABUZZ', id: 125 },
          { name: 'CHANSEY', id: 113 },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'FEEBAS', id: 349 },
          { name: 'POLIWHIRL', id: 61 },
          { name: 'GOLDUCK', id: 55 },
          { name: 'CROCONAW', id: 159 },
          { name: 'WAILORD', id: 321 },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129 },
          { name: 'TENTACOOL', id: 72 },
          { name: 'TENTACRUEL', id: 73 },
          { name: 'KABUTO', id: 140 },
          { name: 'OMANYTE', id: 138 },
        ],
      },
    ],
  },
  {
    id: 27,
    location: 'Pokedex Island',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'MOLTRES', id: 146 },
          { name: 'MEWTWO', id: 150 },
          { name: 'MEW', id: 151 },
        ],
      },
    ],
  },
];

export default wildEncounterList;
