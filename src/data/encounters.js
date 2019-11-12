const wildEncounterList = [
  {
    id: 1,
    location: 'Salmon Town',
    encounters: [
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'TENTACOOL', id: 72, level: '14-19' },
          { name: 'MANTYKE', id: 458, level: '15-16' },
          { name: 'REMORAID', id: 223, level: '14-16' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '3-5' },
          { name: 'BARBOACH', id: 339, level: '17-18' },
          { name: 'SHELLDER', id: 90, level: '16-19' },
          { name: 'KRABBY', id: 98, level: '15-16' },
          { name: 'CHINCHOU', id: 170, level: '17-19' },
          { name: 'QWILFISH', id: 211, level: '16-19' },
          { name: 'CORSOLA', id: 222, level: '15-18' },
          { name: 'STARYU', id: 120, level: '15-17' },
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
          { name: 'RATTATA', id: 19, level: '2-5' },
          { name: 'PIDGEY', id: 16, level: '2-5' },
          { name: 'HOPPIP', id: 187, level: '3-4' },
          { name: 'TOGEPI', id: 175, level: '3-4' },
          { name: 'ODDISH', id: 43, level: '3-4' },
          { name: 'PIKACHU', id: 25, level: '3-5' },
          { name: 'WEEDLE', id: 13, level: '2-4' },
          { name: 'NIDORAN', id: 32, level: '3-4' },
          { name: 'MEOWTH', id: 52, level: '3-5' },
          { name: 'HOOTHOOT', id: 163, level: '2-4' },
          { name: 'SPINARAK', id: 167, level: '2-5' },
          { name: 'EKANS', id: 23, level: '3-5' },
          { name: 'SENTRET', id: 161, level: '2-4' },
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
          { name: 'EXEGCUTE', id: 102, level: '5-7' },
          { name: 'BULBASAUR', id: 1, level: '5-7' },
          { name: 'LEDYBA', id: 165, level: '5-7' },
          { name: 'CATERPIE', id: 10, level: '5-7' },
          { name: 'BUNEARY', id: 427, level: '5-7' },
          { name: 'BELLSPROUT', id: 69, level: '5-7' },
          { name: 'EEVEE', id: 133, level: '5-7' },
          { name: 'WEEDLE', id: 13, level: '5-7' },
          { name: 'NIDORAN', id: 29, level: '5-7' },
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
          { name: 'KLINK', id: 599, level: '8-12' },
          { name: 'VOLBEAT', id: 313, level: '8-12' },
          { name: 'LEDYBA', id: 165, level: '8-12' },
          { name: 'NIDORAN', id: 32, level: '8-12' },
          { name: 'NIDORAN', id: 29, level: '8-12' },
          { name: 'PIDGEY', id: 16, level: '8-12' },
          { name: 'PIKACHU', id: 25, level: '8-12' },
          { name: 'BULBASAUR', id: 1, level: '8-12' },
          { name: 'TEDDIURSA', id: 216, level: '8-12' },
          { name: 'ABRA', id: 63, level: '8-12' },
          { name: 'DROWZEE', id: 96, level: '8-12' },
          { name: 'HOOTHOOT', id: 163, level: '8-12' },
          { name: 'MURKROW', id: 198, level: '8-12' },
          { name: 'RATTATA', id: 19, level: '8-12' },
          { name: 'PURRLOIN', id: 509, level: '8-12' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '5-7' },
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
          { name: 'ZUBAT', id: 41, level: '10-15' },
          { name: 'DIGLETT', id: 50, level: '10-15' },
          { name: 'MACHOP', id: 66, level: '10-15' },
          { name: 'MUDKIP', id: 258, level: '11-14' },
          { name: 'GEODUDE', id: 74, level: '10-15' },
          { name: 'MEDITITE', id: 307, level: '10-15' },
          { name: 'SLUGMA', id: 218, level: '11-15' },
          { name: 'CLEFAIRY', id: 35, level: '10-15' },
          { name: 'SANDSHREW', id: 27, level: '10-15' },
          { name: 'ONIX', id: 95, level: '11-15' },
          { name: 'WOOPER', id: 194, level: '11-15' },
          { name: 'TIMBURR', id: 532, level: '11-14' },
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
          { name: 'JIGGLYPUFF', id: 39, level: '13-16' },
          { name: 'MARILL', id: 183, level: '13-16' },
          { name: 'TURTWIG', id: 387, level: '13-16' },
          { name: 'PARAS', id: 46, level: '13-16' },
          { name: 'SHINX', id: 403, level: '13-16' },
          { name: 'BELLSPROUT', id: 69, level: '13-16' },
          { name: 'GOTHITA', id: 574, level: '13-16' },
          { name: 'LILLIPUP', id: 506, level: '13-16' },
          { name: 'CHARMANDER', id: 4, level: '13-16' },
          { name: 'PIKACHU', id: 25, level: '13-16' },
          { name: 'ABRA', id: 63, level: '13-16' },
          { name: 'MURKROW', id: 198, level: '13-16' },
          { name: 'SPEAROW', id: 21, level: '13-16' },
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
          { name: 'EEVEE', id: 133, level: '11-14' },
          { name: 'MARILL', id: 183, level: '12-16' },
          { name: 'GROWLITHE', id: 58, level: '12-16' },
          { name: 'KOFFING', id: 109, level: '12-16' },
          { name: 'BELLOSSOM', id: 182, level: '12-16' },
          { name: 'STUNKY', id: 434, level: '12-16' },
          { name: 'LILLIPUP', id: 506, level: '12-16' },
          { name: 'JIGGLYPUFF', id: 39, level: '12-16' },
          { name: 'BUNEARY', id: 427, level: '12-16' },
          { name: 'VULPIX', id: 37, level: '12-16' },
          { name: 'GRIMER', id: 88, level: '12-16' },
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
          { name: 'BELLSPROUT', id: 69, level: '14-18' },
          { name: 'PINECO', id: 204, level: '14-18' },
          { name: 'RALTS', id: 280, level: '14-18' },
          { name: 'SWADLOON', id: 541, level: '14-18' },
          { name: 'MANKEY', id: 56, level: '14-18' },
          { name: 'MEOWTH', id: 52, level: '14-18' },
          { name: 'FARFETCHD', id: 83, level: '14-18' },
          { name: 'GOTHITA', id: 574, level: '14-18' },
          { name: 'SCYTHER', id: 123, level: '14-18' },
          { name: 'PINSIR', id: 127, level: '14-18' },
          { name: 'ODDISH', id: 43, level: '14-18' },
          { name: 'HOUNDOUR', id: 228, level: '14-18' },
          { name: 'SNEASEL', id: 215, level: '14-18' },
          { name: 'GLOOM', id: 44, level: '14-18' },
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
          { name: 'KRABBY', id: 98, level: '18-22' },
          { name: 'SKORUPI', id: 451, level: '18-22' },
          { name: 'VENONAT', id: 48, level: '18-22' },
          { name: 'VULPIX', id: 37, level: '18-22' },
          { name: 'MARILL', id: 183, level: '18-22' },
          { name: 'SKIPLOOM', id: 188, level: '18-22' },
          { name: 'SKARMORY', id: 227, level: '18-22' },
          { name: 'BALTOY', id: 343, level: '18-22' },
        ],
      },
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'BASCULIN', id: 550, level: '15-19' },
          { name: 'DUCKLETT', id: 580, level: '15-19' },
          { name: 'POLIWAG', id: 60, level: '15-19' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '9-12' },
          { name: 'POLIWAG', id: 60, level: '15-19' },
          { name: 'SLOWPOKE', id: 79, level: '15-19' },
          { name: 'HORSEA', id: 116, level: '14-18' },
          { name: 'POLITOED', id: 186, level: '15-19' },
          { name: 'STARYU', id: 120, level: '15-19' },
        ],
      },
    ],
  },
  {
    id: 26,
    location: 'Secluded Glave',
    encounters: [
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'TENTACOOL', id: 72, level: '18-22' },
          { name: 'CORSOLA', id: 222, level: '18-22' },
          { name: 'SQUIRTLE', id: 7, level: '18-22' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '10-16' },
          { name: 'POLIWAG', id: 60, level: '18-22' },
          { name: 'MANTINE', id: 226, level: '18-22' },
          { name: 'HORSEA', id: 116, level: '18-22' },
          { name: 'DRATINI', id: 147, level: '14-20' },
          { name: 'STARYU', id: 120, level: '18-22' },
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
          { name: 'SMEARGLE', id: 235, level: '21-24' },
          { name: 'SLOWPOKE', id: 79, level: '21-24' },
          { name: 'TOTODILE', id: 158, level: '21-24' },
          { name: 'KRABBY', id: 98, level: '21-24' },
          { name: 'SHUCKLE', id: 213, level: '21-24' },
          { name: 'MARILL', id: 183, level: '21-24' },
          { name: 'ELECTRIKE', id: 309, level: '21-24' },
          { name: 'CROCONAW', id: 159, level: '18-23' },
          { name: 'SLOWBRO', id: 80, level: '18-22' },
          { name: 'DODUO', id: 84, level: '21-24' },
          { name: 'GRIMER', id: 88, level: '21-24' },
          { name: 'LICKITUNG', id: 108, level: '21-25' },
        ],
      },
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'CHINCHOU', id: 170, level: '21-24' },
          { name: 'WOOPER', id: 194, level: '21-24' },
          { name: 'TENTACOOL', id: 72, level: '21-24' },
          { name: 'SQUIRTLE', id: 7, level: '21-24' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '10-18' },
          { name: 'REMORAID', id: 223, level: '21-24' },
          { name: 'SLOWPOKE', id: 79, level: '21-24' },
          { name: 'CORPHISH', id: 341, level: '21-24' },
          { name: 'MANTINE', id: 226, level: '21-24' },
          { name: 'DRATINI', id: 147, level: '15-20' },
        ],
      },
    ],
  },
  {
    id: 11,
    location: 'Koala Bay',
    encounters: [
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'TENTACOOL', id: 72, level: '23-27' },
          { name: 'PSYDUCK', id: 54, level: '23-27' },
          { name: 'TENTACRUEL', id: 73, level: '23-27' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '14-20' },
          { name: 'SHELLDER', id: 90, level: '23-27' },
          { name: 'KRABBY', id: 98, level: '23-27' },
          { name: 'GOLDEEN', id: 118, level: '23-27' },
          { name: 'OCTILLERY', id: 224, level: '23-27' },
          { name: 'POLITOED', id: 186, level: '23-27' },
          { name: 'MANTINE', id: 226, level: '23-27' },
          { name: 'DRATINI', id: 147, level: '15-20' },
        ],
      },
    ],
  },
  {
    id: 12,
    location: 'Route 13',
    encounters: [
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'WINGULL', id: 278, level: '24-29' },
          { name: 'WAILMER', id: 320, level: '24-29' },
          { name: 'HORSEA', id: 116, level: '24-29' },
          { name: 'DRATINI', id: 147, level: '17-21' },
          { name: 'WARTORTLE', id: 8, level: '24-29' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '16-22' },
          { name: 'SHELLDER', id: 90, level: '24-29' },
          { name: 'KRABBY', id: 98, level: '24-28' },
          { name: 'QWILFISH', id: 211, level: '24-28' },
          { name: 'POLITOED', id: 186, level: '24-28' },
          { name: 'MANTINE', id: 226, level: '24-28' },
          { name: 'DRATINI', id: 147, level: '15-20' },
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
          { name: 'DITTO', id: 132, level: '25-29' },
          { name: 'MANKEY', id: 56, level: '25-29' },
          { name: 'EKANS', id: 23, level: '25-29' },
          { name: 'ABRA', id: 63, level: '22-24' },
          { name: 'WEEPINBELL', id: 70, level: '25-28' },
          { name: 'MACHOP', id: 66, level: '25-29' },
          { name: 'BAYLEEF', id: 153, level: '25-29' },
          { name: 'SUDOWOODO', id: 185, level: '25-29' },
          { name: 'PINECO', id: 204, level: '25-29' },
        ],
      },
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'SEEL', id: 86, level: '25-29' },
          { name: 'SHELLDER', id: 90, level: '25-29' },
          { name: 'POLIWAG', id: 60, level: '25-29' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '16-22' },
          { name: 'SHELLDER', id: 90, level: '24-28' },
          { name: 'KRABBY', id: 98, level: '24-28' },
          { name: 'OCTILLERY', id: 224, level: '24-28' },
          { name: 'MANTINE', id: 226, level: '24-28' },
          { name: 'DRATINI', id: 147, level: '15-22' },
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
          { name: 'JIGGLYPUFF', id: 39, level: '26-30' },
          { name: 'RALTS', id: 280, level: '26-30' },
          { name: 'TANGELA', id: 114, level: '26-30' },
          { name: 'PIDGEY', id: 16, level: '26-30' },
          { name: 'PIDGEOTTO', id: 17, level: '26-30' },
          { name: 'HONCHKROW', id: 430, level: '26-30' },
          { name: 'CLEFAIRY', id: 35, level: '26-30' },
          { name: 'GLIGAR', id: 207, level: '26-30' },
          { name: 'GASTLY', id: 92, level: '26-31' },
          { name: 'MISDREAVUS', id: 200, level: '26-31' },
          { name: 'LITWICK', id: 607, level: '26-31' },
          { name: 'BANETTE', id: 354, level: '26-31' },
          { name: 'RATICATE', id: 20, level: '26-31' },
          { name: 'LAMPENT', id: 608, level: '27-31' },
          { name: 'SABLEYE', id: 302, level: '26-31' },
          { name: 'FROSLASS', id: 478, level: '27-31' },
          { name: 'CUBONE', id: 104, level: '27-31' },
          { name: 'HAUNTER', id: 93, level: '27-31' },
        ],
      },
      {
        terrain: 'Cave',
        pokemon: [
          { name: 'RHYHORN', id: 111, level: '25-30' },
          { name: 'CUBONE', id: 104, level: '25-30' },
          { name: 'VOLTORB', id: 100, level: '25-30' },
          { name: 'STEELIX', id: 208, level: '25-30' },
          { name: 'ARON', id: 304, level: '25-30' },
          { name: 'RATICATE', id: 20, level: '25-30' },
          { name: 'ONIX', id: 95, level: '25-30' },
          { name: 'CLEFAIRY', id: 35, level: '25-30' },
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
          { name: 'PONYTA', id: 77, level: '31-36' },
          { name: 'DEINO', id: 633, level: '31-35' },
          { name: 'MAGNEMITE', id: 81, level: '31-36' },
          { name: 'KAKUNA', id: 14, level: '32-36' },
          { name: 'BEEDRILL', id: 15, level: '32-35' },
          { name: 'BUTTERFREE', id: 12, level: '32-35' },
          { name: 'SCYTHER', id: 123, level: '31-36' },
          { name: 'PINSIR', id: 127, level: '31-36' },
          { name: 'KANGASKHAN', id: 115, level: '31-36' },
          { name: 'QUAGSIRE', id: 195, level: '31-36' },
          { name: 'SUNKERN', id: 191, level: '31-36' },
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
        terrain: 'Surf',
        pokemon: [
          { name: 'GOLDEEN', id: 118, level: '32-36' },
          { name: 'POLIWHIRL', id: 61, level: '32-36' },
          { name: 'DRATINI', id: 147, level: '32-36' },
          { name: 'GYARADOS', id: 130, level: '32-36' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '25-35' },
          { name: 'TOTODILE', id: 158, level: '28-35' },
          { name: 'SLOWPOKE', id: 79, level: '28-35' },
          { name: 'DRATINI', id: 147, level: '25-30' },
          { name: 'GYARADOS', id: 130, level: '28-35' },
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
          { name: 'NIDORINO', id: 33, level: '19-24' },
          { name: 'PHANPY', id: 231, level: '19-23' },
          { name: 'HERACROSS', id: 214, level: '19-23' },
          { name: 'METAPOD', id: 11, level: '19-23' },
          { name: 'MILTANK', id: 241, level: '19-23' },
          { name: 'CHARMANDER', id: 4, level: '19-23' },
          { name: 'VOLTORB', id: 100, level: '19-23' },
          { name: 'DROWZEE', id: 96, level: '19-23' },
          { name: 'MEOWTH', id: 52, level: '19-23' },
          { name: 'CHARMELEON', id: 5, level: '19-23' },
          { name: 'SNORLAX', id: 143, level: '19-24' },
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
          { name: 'CHIKORITA', id: 152, level: '33-38' },
          { name: 'AIPOM', id: 190, level: '33-38' },
          { name: 'CYNDAQUIL', id: 155, level: '33-38' },
          { name: 'SKARMORY', id: 227, level: '33-38' },
          { name: 'QUILAVA', id: 156, level: '33-38' },
          { name: 'MRMIME', id: 122, level: '33-38' },
          { name: 'TAUROS', id: 128, level: '33-38' },
          { name: 'ELECTABUZZ', id: 125, level: '33-38' },
          { name: 'DITTO', id: 132, level: '33-38' },
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
          { name: 'DIGLETT', id: 50, level: '34-38' },
          { name: 'SANDSHREW', id: 27, level: '34-38' },
          { name: 'ZUBAT', id: 41, level: '34-38' },
          { name: 'MACHOKE', id: 67, level: '34-38' },
          { name: 'MEOWTH', id: 52, level: '34-38' },
          { name: 'GRAVELER', id: 75, level: '34-38' },
          { name: 'WIGGLYTUFF', id: 40, level: '34-38' },
          { name: 'DUGTRIO', id: 51, level: '34-38' },
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
          { name: 'KOFFING', id: 109, level: '35-39' },
          { name: 'STANTLER', id: 234, level: '35-39' },
          { name: 'MEDITITE', id: 307, level: '35-39' },
          { name: 'WOBBUFFET', id: 202, level: '35-39' },
          { name: 'HOUNDOUR', id: 228, level: '35-39' },
          { name: 'SNUBBULL', id: 209, level: '35-39' },
          { name: 'CHANSEY', id: 113, level: '35-39' },
          { name: 'NIDORINA', id: 30, level: '35-39' },
          { name: 'SNORLAX', id: 143, level: '35-39' },
          { name: 'SCYTHER', id: 123, level: '35-39' },
          { name: 'PINSIR', id: 127, level: '35-39' },
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
          { name: 'SHELLDER', id: 90, level: '36-40' },
          { name: 'SEEL', id: 86, level: '36-40' },
          { name: 'SWINUB', id: 220, level: '36-40' },
          { name: 'CLOYSTER', id: 91, level: '36-40' },
          { name: 'DEWGONG', id: 87, level: '36-40' },
          { name: 'PILOSWINE', id: 221, level: '36-40' },
          { name: 'JYNX', id: 124, level: '36-40' },
          { name: 'CUBCHOO', id: 613, level: '36-40' },
          { name: 'HITMONCHAN', id: 107, level: '36-40' },
          { name: 'HITMONLEE', id: 106, level: '36-40' },
        ],
      },
    ],
  },
  {
    id: 24,
    location: 'Taelia Town',
    encounters: [
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '25-35' },
          { name: 'POLIWHIRL', id: 61, level: '37-42' },
          { name: 'PSYDUCK', id: 54, level: '37-42' },
          { name: 'WARTORTLE', id: 8, level: '37-42' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '25-35' },
          { name: 'TENTACOOL', id: 72, level: '37-42' },
          { name: 'TENTACRUEL', id: 73, level: '37-42' },
          { name: 'BARBOACH', id: 339, level: '37-42' },
          { name: 'FEEBAS', id: 349, level: '30-35' },
          { name: 'GYARADOS', id: 130, level: '37-42' },
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
          { name: 'NIDORINO', id: 33, level: '40-46' },
          { name: 'NIDORINA', id: 30, level: '40-46' },
          { name: 'ARIADOS', id: 168, level: '40-46' },
          { name: 'DELIBIRD', id: 225, level: '40-46' },
          { name: 'XATU', id: 178, level: '40-46' },
          { name: 'CLEFABLE', id: 36, level: '40-46' },
          { name: 'SLOWKING', id: 199, level: '40-46' },
          { name: 'MAGMAR', id: 126, level: '40-46' },
          { name: 'ELECTABUZZ', id: 125, level: '40-46' },
          { name: 'CHANSEY', id: 113, level: '40-46' },
        ],
      },
      {
        terrain: 'Surf',
        pokemon: [
          { name: 'FEEBAS', id: 349, level: '40-45' },
          { name: 'POLIWHIRL', id: 61, level: '40-45' },
          { name: 'GOLDUCK', id: 55, level: '40-45' },
          { name: 'CROCONAW', id: 159, level: '40-45' },
          { name: 'WAILORD', id: 321, level: '40-45' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP', id: 129, level: '28-35' },
          { name: 'TENTACOOL', id: 72, level: '37-42' },
          { name: 'TENTACRUEL', id: 73, level: '37-42' },
          { name: 'KABUTO', id: 140, level: '30-42' },
          { name: 'OMANYTE', id: 138, level: '30-42' },
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
          { name: 'MOLTRES', id: 146, level: '50' },
          { name: 'MEWTWO', id: 150, level: '50' },
          { name: 'MEW', id: 151, level: '50' },
        ],
      },
    ],
  },
];

export default wildEncounterList;
