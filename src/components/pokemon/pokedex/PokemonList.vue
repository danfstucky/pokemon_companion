<template>
  <div>
    <div class="list">
      <article
        v-for="(pokemon, index) in pokedexEntries"
        :key="'poke'+index"
        @click="showDetails(pokemon.id)"
      >
        <p class="pokedex-num">
          {{ pokemon.id }}
        </p>
        <img
          :src="`${imageUrl}${pokemon.id}.png`"
          width="96"
          height="96"
          alt=""
        >
        <h3>{{ pokemon.name }}</h3>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import salmonRedMixin from './../../../mixins/salmonRedMixin';

export default {
  mixins: [salmonRedMixin],
  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      nextUrl: '',
      currentUrl: '',
    };
  },
  computed: {
    ...mapGetters([
      'pokedexEntries',
    ]),
  },
  methods: {
    ...mapMutations([
      'showDetails',
    ])
  },
};
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
    width: 100%;
    max-width: 850px;
    article {
      height: 150px;
      width: 150px;
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
        font-size: 20px;
      }

      &:hover {
        cursor: pointer;
        box-sizing: border-box;
        border: white solid 4px;
        background-color: #bb005c;
        color: white;
      }
    }
  }
</style>
