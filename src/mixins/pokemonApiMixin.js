import { mapGetters, mapMutations } from 'vuex';

export const pokemonApiMixin = {
  data() {
    return {
      pokemonBaseUrl: 'https://pokeapi.co/api/v2/pokemon',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    };
  },
   computed: {
    ...mapGetters([
      'pokemonUrl',
    ]),
  },
  methods: {
    ...mapMutations([
      'showDetails',
    ]),
    fetchData(pokemonUrl) {
      const req = new Request(pokemonUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json();
          }
          return { name: 'Unknown' };
        })
        .then((data) => {
          this.pokemon = data;
          this.show = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
