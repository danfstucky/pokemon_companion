<template>
  <div class="searchbar">
    <form @submit.prevent="setPokemonId">
      <input type="text" placeholder="Search Pokemon Full Name" v-model="searchValue">
    </form>
    <i class="fas fa-search" @click="setPokemonId"></i>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import salmonRedMixin from './../../../mixins/salmonRedMixin';

export default {
  data() {
    return {
      searchValue: '',
    };
  },
  mixins: [salmonRedMixin],
  methods: {
    ...mapMutations([
      'showDetails',
    ]),
    setPokemonId() {
      if (this.searchValue !== '') {
        // When searching, use the pokemon name to retrieve a pokemon.
        // The API accepts an id or name.
        const pokemonName = this.searchValue.toLowerCase();
        if (this.hasPokemonName(pokemonName)) {
          this.showDetails(pokemonName);
        } else {
          this.showDetails('Does not exist');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .searchbar {
    position: relative;
    width: 100%;
    max-width: 510px;
    padding-bottom: 20px;
    input {
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 10px 40px 10px 10px;
      width: calc(100% - 50px);
      font-size: 1rem;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
    i {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.25rem;
      color: rgb(8, 37, 65);
      cursor: pointer;
    }
  }
</style>
