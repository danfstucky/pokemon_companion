<template>
  <div>
    <div class="list">
      <article v-for="(pokemon, index) in pokemons"
      :key="'poke'+index"
      @click="showDetails(pokemon.id)">
        <h3 class="pokedex-num">{{ pokemon.id }}</h3>
        <img :src="`${imageUrl}${pokemon.id}.png`" width="96" height="96" alt="">
        <h3>{{ pokemon.name }}</h3>
      </article>
    </div>
    <div v-if="moreResults" id="scroll-trigger" ref="infinitescrolltrigger">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div v-else class="text-center end-results">
      <div>End of Pokedex</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import salmonRedMixin from './../../../mixins/salmonRedMixin';

export default {
  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      pokemons: [],
      nextUrl: '',
      currentUrl: '',
      lastPokeId: 1,
      maxPokeId: 639,
      moreResults: true,
    };
  },
  mixins: [salmonRedMixin],
  methods: {
    ...mapMutations([
      'showDetails',
    ]),
    fetchData() {
      if (this.lastPokeId < this.maxPokeId) {
        const req = new Request(this.currentUrl);
        fetch(req)
          .then((resp) => {
            if (resp.status === 200) {
              return resp.json();
            }
            return { count: 0, results: [] };
          })
          .then((data) => {
            this.nextUrl = data.next;
            const filteredResults = data.results.map((result) => {
              const id = result.url.split('/').filter(part => !!part).pop();
              return { name: result.name, id, url: result.url };
            }).filter(result => this.hasPokemonId(parseInt(result.id, 10)));
            this.lastPokeId = filteredResults[filteredResults.length - 1].id;
            filteredResults.forEach((pokemon) => {
              this.pokemons.push(pokemon);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.moreResults = false;
        this.nextUrl = '';
      }
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        });
      });
      observer.observe(this.$refs.infinitescrolltrigger);
    },
    next() {
      this.currentUrl = this.nextUrl;
      this.fetchData();
    },
  },
  created() {
    this.currentUrl = 'https://pokeapi.co/api/v2/pokemon?limit=40';
    this.fetchData();
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>

<style lang="less" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
    width: 100%;
    max-width: 850px;
    article {
      height: 150px;
      background-color: #efefef;
      text-align: center;
      text-transform: capitalize;
      border-radius: 8px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      h3 {
        margin: 0;
      }
      .pokedex-num {
        float: left;
        padding-left: 5px;
        padding-top: 10px;
      }

      &:hover {
        cursor: pointer;
        border: white solid 4px;
        background-color: #bb005c;
        color: white;
      }
    }
  }
  #scroll-trigger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    font-size: 2rem;
    color: #efefef;
  }
  .end-results {
    color: white;
    margin: 20px;
    font-size: 26px;
  }
</style>
