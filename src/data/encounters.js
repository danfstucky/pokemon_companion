const wildEncounterList = [
  {
    id: 1,
    location: 'Salmon Town',
    encounters: [
      {
        terrain: 'Water',
        pokemon: [
          { name: 'TENTACOOL' },
          { name: 'MANTYKE' },
          { name: 'REMORAID' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'BARBOACH' },
          { name: 'SHELLDER' },
          { name: 'KRABBY' },
          { name: 'CHINCHOU' },
          { name: 'QWILFISH' },
          { name: 'CORSOLA' },
          { name: 'STARYU' },
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
          { name: 'RATTATA' },
          { name: 'PIDGEY' },
          { name: 'HOPPIP' },
          { name: 'TOGEPI' },
          { name: 'ODDISH' },
          { name: 'PIKACHU' },
          { name: 'WEEDLE' },
          { name: 'NIDORAN', id: 32 },
          { name: 'MEOWTH' },
          { name: 'HOOTHOOT' },
          { name: 'SPINARAK' },
          { name: 'EKANS' },
          { name: 'SENTRET' },
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
          { name: 'EXEGCUTE' },
          { name: 'BULBASAUR' },
          { name: 'LEDYBA' },
          { name: 'JOLTIK' },
          { name: 'BUNEARY' },
          { name: 'BELLSPROUT' },
          { name: 'EEVEE' },
          { name: 'WEEDLE' },
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
          { name: 'KLINK' },
          { name: 'VOLBEAT' },
          { name: 'LEDYBA' },
          { name: 'NIDORAN', id: 32 },
          { name: 'NIDORAN', id: 29 },
          { name: 'PIDGEY' },
          { name: 'PIKACHU' },
          { name: 'BULBASAUR' },
          { name: 'TEDDIURSA' },
          { name: 'ABRA' },
          { name: 'DROWZEE' },
          { name: 'HOOTHOOT' },
          { name: 'MURKROW' },
          { name: 'PATRAT' },
          { name: 'PURRLOIN' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
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
          { name: 'ZUBAT' },
          { name: 'DIGLETT' },
          { name: 'MACHOP' },
          { name: 'MUDKIP' },
          { name: 'GEODUDE' },
          { name: 'MEDITITE' },
          { name: 'TRAPINCH' },
          { name: 'CLEFAIRY' },
          { name: 'SANDSHREW' },
          { name: 'ONIX' },
          { name: 'WOOPER' },
          { name: 'TIMBURR' },
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
          { name: 'JIGGLYPUFF' },
          { name: 'MARILL' },
          { name: 'TURTWIG' },
          { name: 'PARAS' },
          { name: 'SHINX' },
          { name: 'BELLSPROUT' },
          { name: 'GOTHITA' },
          { name: 'LILLIPUP' },
          { name: 'CHARMANDER' },
          { name: 'PIKACHU' },
          { name: 'ABRA' },
          { name: 'MURKROW' },
          { name: 'SPEAROW' },
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
          { name: 'EEVEE' },
          { name: 'MARILL' },
          { name: 'GROWLITHE' },
          { name: 'KOFFING' },
          { name: 'BELLOSSOM' },
          { name: 'STUNKY' },
          { name: 'LILLIPUP' },
          { name: 'JIGGLYPUFF' },
          { name: 'BUNEARY' },
          { name: 'GLAMEOW' },
          { name: 'GRIMER' },
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
          { name: 'BELLSPROUT' },
          { name: 'PINECO' },
          { name: 'RALTS' },
          { name: 'SWADLOON' },
          { name: 'BLITZLE' },
          { name: 'PURRLOIN' },
          { name: 'FARFETCHD' },
          { name: 'GOTHITA' },
          { name: 'SCYTHER' },
          { name: 'PINSIR' },
          { name: 'ODDISH' },
          { name: 'HOUNDOUR' },
          { name: 'SNEASEL' },
          { name: 'GLOOM' },
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
          { name: 'KRABBY' },
          { name: 'SKORUPI' },
          { name: 'VENONAT' },
          { name: 'VULPIX' },
          { name: 'MARILL' },
          { name: 'BALTOY' },
          { name: 'SKARMORY' },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'BASCULIN' },
          { name: 'DUCKLETT' },
          { name: 'FINNEON' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'POLIWAG' },
          { name: 'SLOWPOKE' },
          { name: 'HORSEA' },
          { name: 'POLITOED' },
          { name: 'STARYU' },
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
          { name: 'TENTACOOL' },
          { name: 'CORSOLA' },
          { name: 'SQUIRTLE' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'POLIWAG' },
          { name: 'MANTINE' },
          { name: 'HORSEA' },
          { name: 'DRATINI' },
          { name: 'STARYU' },
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
          { name: 'SMEARGLE' },
          { name: 'SLOWPOKE' },
          { name: 'TOTODILE' },
          { name: 'KRABBY' },
          { name: 'SHUCKLE' },
          { name: 'MARILL' },
          { name: 'ELECTRIKE' },
          { name: 'WOOPER' },
          { name: 'SLOWBRO' },
          { name: 'DODUO' },
          { name: 'GRIMER' },
          { name: 'LICKITUNG' },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'CHINCHOU' },
          { name: 'WOOPER' },
          { name: 'TENTACOOL' },
          { name: 'SQUIRTLE' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'REMORAID' },
          { name: 'SLOWPOKE' },
          { name: 'OCTILLERY' },
          { name: 'POLITOED' },
          { name: 'MANTINE' },
          { name: 'DRATINI' },
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
          { name: 'TENTACOOL' },
          { name: 'PSYDUCK' },
          { name: 'PSYDUCK' },
          { name: 'TENTACRUEL' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'SHELLDER' },
          { name: 'KRABBY' },
          { name: 'OCTILLERY' },
          { name: 'POLITOED' },
          { name: 'MANTINE' },
          { name: 'DRATINI' },
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
          { name: 'WINGULL' },
          { name: 'WAILMER' },
          { name: 'SHARPEDO' },
          { name: 'DRATINI' },
          { name: 'SQUIRTLE' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'SHELLDER' },
          { name: 'KRABBY' },
          { name: 'QWILFISH' },
          { name: 'POLITOED' },
          { name: 'MANTINE' },
          { name: 'DRATINI' },
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
          { name: 'DITTO' },
          { name: 'MANKEY' },
          { name: 'METAPOD' },
          { name: 'KAKUNA' },
          { name: 'ABRA' },
          { name: 'MACHOP' },
          { name: 'SCYTHER' },
          { name: 'SUDOWOODO' },
          { name: 'PINECO' },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'SEEL' },
          { name: 'SHELLDER' },
          { name: 'POLIWAG' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'SHELLDER' },
          { name: 'KRABBY' },
          { name: 'OCTILLERY' },
          { name: 'MANTINE' },
          { name: 'DRATINI' },
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
          { name: 'JIGGLYPUFF' },
          { name: 'RALTS' },
          { name: 'TOGEPI' },
          { name: 'PIDGEY' },
          { name: 'PIDGEOTTO' },
          { name: 'HONCHKROW' },
          { name: 'CLEFAIRY' },
          { name: 'GLIGAR' },
          { name: 'GASTLY' },
          { name: 'MISDREAVUS' },
          { name: 'LITWICK' },
          { name: 'BANETTE' },
          { name: 'DRIFLOON' },
          { name: 'DUSKULL' },
          { name: 'SABLEYE' },
          { name: 'FROSLASS' },
          { name: 'CUBONE' },
          { name: 'HAUNTER' },
        ],
      },
      {
        terrain: 'Cave',
        pokemon: [
          { name: 'RHYHORN' },
          { name: 'CUBONE' },
          { name: 'VOLTORB' },
          { name: 'STEELIX' },
          { name: 'ARON' },
          { name: 'BALTOY' },
          { name: 'ONIX' },
          { name: 'CLEFAIRY' },
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
          { name: 'PONYTA' },
          { name: 'DEINO' },
          { name: 'MAGNEMITE' },
          { name: 'KAKUNA' },
          { name: 'BEEDRILL' },
          { name: 'BUTTERFREE' },
          { name: 'SCYTHER' },
          { name: 'PINSIR' },
          { name: 'KANGASKHAN' },
          { name: 'QUAGSIRE' },
          { name: 'SUNKERN' },
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
          { name: 'GOLDEEN' },
          { name: 'POLIWAG' },
          { name: 'DRATINI' },
          { name: 'GYARADOS' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'TOTODILE' },
          { name: 'SLOWPOKE' },
          { name: 'DRATINI' },
          { name: 'GYARADOS' },
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
          { name: 'NIDORINO' },
          { name: 'PHANPY' },
          { name: 'HERACROSS' },
          { name: 'METAPOD' },
          { name: 'MILTANK' },
          { name: 'CHARMANDER' },
          { name: 'VOLTORB' },
          { name: 'DROWZEE' },
          { name: 'MEOWTH' },
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
          { name: 'CHIKORITA' },
          { name: 'AIPOM' },
          { name: 'CYNDAQUIL' },
          { name: 'SKARMORY' },
          { name: 'QUILAVA' },
          { name: 'MRMIME' },
          { name: 'TAUROS' },
          { name: 'ELECTABUZZ' },
          { name: 'DITTO' },
        ],
      },
    ],
  },
  {
    id: 21,
    location: 'Corlain City',
    encounters: [],
  },
  {
    id: 22,
    location: 'Route 18',
    encounters: [
      {
        terrain: 'Land',
        pokemon: [
          { name: 'KOFFING' },
          { name: 'STANTLER' },
          { name: 'MEDITITE' },
          { name: 'WOBBUFFET' },
          { name: 'HOUNDOUR' },
          { name: 'SNUBBULL' },
          { name: 'CHANSEY' },
          { name: 'NIDORINA' },
          { name: 'SCYTHER' },
          { name: 'PINSIR' },
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
          { name: 'SHELLDER' },
          { name: 'SEEL' },
          { name: 'SWINUB' },
          { name: 'CLOYSTER' },
          { name: 'DEWGONG' },
          { name: 'PILOSWINE' },
          { name: 'JYNX' },
          { name: 'CUBCHOO' },
          { name: 'HITMONCHAN' },
          { name: 'HITMONLEE' },
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
          { name: 'MAGIKARP' },
          { name: 'POLIWHIRL' },
          { name: 'PSYDUCK' },
          { name: 'WARTORTLE' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'TENTACOOL' },
          { name: 'TENTACRUEL' },
          { name: 'FEEBAS' },
          { name: 'GYARADOS' },
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
          { name: 'NIDORINO' },
          { name: 'NIDORINA' },
          { name: 'ARIADOS' },
          { name: 'DELIBIRD' },
          { name: 'XATU' },
          { name: 'CLEFABLE' },
          { name: 'SLOWKING' },
          { name: 'MAGMAR' },
          { name: 'ELECTABUZZ' },
          { name: 'CHANSEY' },
        ],
      },
      {
        terrain: 'Water',
        pokemon: [
          { name: 'FEEBAS' },
          { name: 'POLIWHIRL' },
          { name: 'GOLDUCK' },
          { name: 'CROCONAW' },
          { name: 'WAILORD' },
        ],
      },
      {
        terrain: 'Fishing',
        pokemon: [
          { name: 'MAGIKARP' },
          { name: 'TENTACOOL' },
          { name: 'TENTACRUEL' },
          { name: 'KABUTO' },
          { name: 'OMANYTE' },
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
          { name: 'MOLTRES' },
          { name: 'MEWTWO' },
          { name: 'MEW' },
        ],
      },
    ],
  },
];

export default wildEncounterList;
