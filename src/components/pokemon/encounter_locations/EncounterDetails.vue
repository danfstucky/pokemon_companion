<template>
  <div>
    <div class="list">
      <article v-for="(pokemon, index) in encounterLocation.pokemon"
          :key="'poke'+ index"
          @click="showEncounterDetails(pokemon)">
        <h6 class="pokedex-num">{{ pokemon.id }}</h6>
        <img :src="imageUrl + pokemon.id + '.png'" width="96" height="96" alt="">
        <h5>{{ pokemon.name }}</h5>
      </article>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    encounterLocation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    };
  },
  methods: {
    ...mapMutations([
      'showEncounterDetails',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(6, 130px [col-start]);
    grid-gap: 10px;
    max-width: 900px;
    margin-right: 10px;
    article {
      height: 130px;
      background-color: #efefef;
      text-align: center;
      text-transform: capitalize;
      border-radius: 8px;
      border: #bb005c solid 2px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      &:hover {
        cursor: pointer;
        border: white solid 4px;
        background-color: #bb005c;
        color: white;
      }
      img {
        margin: 0px 0px 0px -10px;
      }
      h6 {
        margin: 0px;
      }
      .pokedex-num {
        float: left;
        padding-left: 5px;
        padding-top: 10px;
      }
    }
  }
</style>
