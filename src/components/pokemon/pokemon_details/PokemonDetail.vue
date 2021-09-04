<template>
  <div class="detail-container">
    <div class="detail" >
      <div class="detail-view" v-if="show">
        <i class="close-modal-x fas fa-times" @click="closeDetail"></i>
        <div v-if="pokemon" class="image">
          <img :src="imageUrl + pokemon.id + '.png'" alt="">
        </div>
        <div v-if="pokemon && foundPokemon" class="data">
          <h2>{{ pokemon.name }}</h2>
          <div v-if="isWildEncounter" class="property">
            <div class="left">Encounter Level</div>
            <div class="right">{{ wildPokemonEncounter.level }}</div>
          </div>
          <div v-else class="property"></div>
          <StatsChart :statsData="pokemon.stats" />
          <div class="types detail-major-row">
            <h3>Types</h3>
            <div class="detail-major-row-values">
              <div class="type pill-container"
                v-for="(value, index) in pokemon.types"
                :key="'value' + index">
                {{ value.type.name }}
              </div>
            </div>
          </div>
          <div class="abilities detail-major-row">
            <h3>Abilities</h3>
            <div class="detail-major-row-values">
              <div class="ability pill-container"
                v-for="(value, index) in pokemon.abilities"
                :key="'value' + index">
                {{ value.ability.name }}
              </div>
            </div>
          </div>
          <div class="detail-major-row">
            <h3>Moves</h3>
            <div class="pill-container moves-btn"
              @click="handleToggleMoves"
              :class="{'active-moves': showMoves}">
              Show Moves
              <i v-if="!showMoves" class="fas fa-angle-double-right"></i>
              <i v-else class="fas fa-angle-double-left"></i>
            </div>
          </div>
        </div>
        <h2 v-else>Pokemon not found</h2>
        <button class="close-detail" @click="closeDetail">close</button>
      </div>
      <i v-else class="fas fa-spinner fa-spin"></i>
      <transition name="slide">
        <PokemonMoves v-if="showMoves" :moves="moves" />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import PokemonMoves from './PokemonMoves';
import StatsChart from './StatsChart';

export default {
  props: {
    pokemonId: { required: true },
    isWildEncounter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      pokemon: {},
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      foundPokemon: false,
      basePokemonUrl: 'https://pokeapi.co/api/v2/pokemon/',
      showMoves: false,
      moves: [],
    };
  },
  components: {
    PokemonMoves,
    StatsChart,
  },
  computed: {
    ...mapGetters([
      'wildPokemonEncounter',
    ]),
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapMutations([
      'closeDetails',
    ]),
    fetchData() {
      const req = new Request(`${this.basePokemonUrl}${this.pokemonId}`);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) {
            this.foundPokemon = true;
            return resp.json();
          }
          this.foundPokemon = false;
          return { id: 0, name: 'Unknown' };
        })
        .then((data) => {
          this.pokemon = data;
          this.show = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeDetail() {
      this.closeDetails();
    },
    handleToggleMoves() {
      this.showMoves = !this.showMoves;
      if (!this.showMoves) { return; }
      const salmonRedMoves = [];

      for (const moveData of this.pokemon.moves) {
        const groupDetails = moveData.version_group_details.find(
          details => details.version_group.name === 'black-2-white-2',
        );
        if (groupDetails && groupDetails.move_learn_method.name === 'level-up') {
          salmonRedMoves.push({ name: moveData.move.name, level: groupDetails.level_learned_at });
        }
      }
      this.moves = salmonRedMoves.sort((a, b) => ((a.level > b.level) ? 1 : -1));
    },
  },
};
</script>

<style lang="scss" scoped>
  .detail-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    padding: 90px 10px 10px;
  .detail {
    width: 80%;
    height: 75%;
    position: fixed;
    display: flex;
    left: 30%;
    min-height: 600px;
    max-height: 650px;

    .detail-view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      width: 100%;
      max-width: 550px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);

      .close-modal-x {
        opacity: 0.4;
        z-index: 999;
        position: absolute;
        top: 0;
        left: 0;
        padding: 15px;
        font-size: 18px;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }

      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -60px;
        width: 120px;
        height: 120px;
        background-color: #333;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
      }
      h2 {
        text-transform: capitalize;
      }
      .data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-top: 60px;
        .property {
          width: 90%;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          .left { float: left; }
          .right { float: right; }
        }
        .detail-major-row {
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          justify-content: space-between;
          display: flex;
          flex-wrap: wrap;
          width: 90%;
          h3 {
            margin-right: 20px;
          }
        }
        .pill-container {
          display: inline-block;
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          border-radius: 20px;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: capitalize;
          word-wrap: none;
          word-break: keep-all;
          box-sizing: border-box;
        }
        .type { background-color: #0A2E50; }
        .ability { background-color: #C73015; }
        .moves-btn {
          background-color: rgb(22, 117, 22);
          cursor: pointer;

          &:hover {
            background-color: rgb(21, 179, 21);
            box-shadow:inset 0px 0px 0px 3px rgb(22, 117, 22);
          }
        }
        .active-moves {
          background-color: rgb(21, 179, 21);
          box-shadow:inset 0px 0px 0px 3px rgb(22, 117, 22);
        }
      }
      .close-detail {
        opacity: 0.8;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #333;
        color: #efefef;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 1.2rem;
        cursor: pointer;

        &:hover {
          opacity: 1.0;
        }
      }
    }

    .slide-enter-from {
      // Nothing needed
    }
    .slide-enter-active {
      animation: slide-in 1s ease-out forwards;
    }
    .slide-leave-from {
      // Nothing needed
    }
    .slide-leave-active {
      animation: slide-out 1s ease-out forwards;
    }
    @keyframes slide-in {
      from {
        transform: translateX(-300px);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slide-out {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-300px);
      }
    }
  }
  }
</style>
