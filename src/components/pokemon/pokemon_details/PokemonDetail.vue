<template>
  <div class="detail-container">
    <div class="detail">
      <p>show: {{ show }}</p>
      <div v-if="show" class="detail-view">
        <i class="close-modal-x fas fa-times" @click="closeDetail" />
        <div v-if="pokemon" class="image">
          <img :src="imageUrl + pokemon.id + '.png'" alt="" />
        </div>
        <div v-if="pokemon && foundPokemon" class="data">
          <h2>{{ pokemon.name }}</h2>
          <div v-if="props.isWildEncounter" class="property">
            <div class="left">Encounter Level</div>
            <div class="right">
              {{ pokemonStore.wildPokemonEncounter.level }}
            </div>
          </div>
          <div v-else class="property" />
          <StatsChart :stats-data="pokemon.stats" />
          <div class="types detail-major-row">
            <h3>Types</h3>
            <div class="detail-major-row-values">
              <div
                v-for="(value, index) in pokemon.types"
                :key="'value' + index"
                class="type pill-container"
              >
                {{ value.type.name }}
              </div>
            </div>
          </div>
          <div class="abilities detail-major-row">
            <h3>Abilities</h3>
            <div class="detail-major-row-values">
              <div
                v-for="(value, index) in pokemon.abilities"
                :key="'value' + index"
                class="ability pill-container"
              >
                {{ value.ability.name }}
              </div>
            </div>
          </div>
          <div class="detail-major-row">
            <h3>Moves</h3>
            <div
              class="pill-container moves-btn"
              :class="{ 'active-moves': showMoves }"
              @click="handleToggleMoves"
            >
              Show Moves
              <i v-if="!showMoves" class="fas fa-angle-double-right" />
              <i v-else class="fas fa-angle-double-left" />
            </div>
          </div>
        </div>
        <h2 v-else>Pokemon not found</h2>
        <button class="close-detail" @click="closeDetail">close</button>
      </div>
      <i v-else class="fas fa-spinner fa-spin" />
      <transition name="slide">
        <PokemonMoves v-if="showMoves" :moves="moves" />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePokemonStore } from "../../../stores/pokemon";
import PokemonMoves from "./PokemonMoves.vue";
import StatsChart from "./StatsChart.vue";

const props = defineProps({
  pokemonId: { type: Number, required: true },
  isWildEncounter: {
    type: Boolean,
    default: false,
  },
});

const pokemonStore = usePokemonStore();
const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const basePokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
let show = ref(false);
let pokemon = ref({});
let foundPokemon = ref(false);
let showMoves = ref(false);
const moves = ref([]);

function fetchData() {
  const req = new Request(`${basePokemonUrl}${props.pokemonId}`);
  fetch(req)
    .then((resp) => {
      if (resp.status === 200) {
        foundPokemon.value = true;
        return resp.json();
      }
      foundPokemon.value = false;
      return { id: 0, name: "Unknown" };
    })
    .then((data) => {
      pokemon.value = data;
      show.value = true;
    })
    .catch((error) => {
      // console.log(error);
    });
}

function closeDetail() {
  pokemonStore.closeDetails();
}

function handleToggleMoves() {
  showMoves.value = !showMoves.value;
  if (!showMoves.value) {
    return;
  }
  const salmonRedMoves = [];

  for (const moveData of pokemon.value.moves) {
    const groupDetails = moveData.version_group_details.find(
      (details) => details.version_group.name === "black-2-white-2"
    );
    if (groupDetails && groupDetails.move_learn_method.name === "level-up") {
      salmonRedMoves.push({
        name: moveData.move.name,
        level: groupDetails.level_learned_at,
      });
    }
  }
  moves.value = salmonRedMoves.sort((a, b) => (a.level > b.level ? 1 : -1));
}
// Calling a function inside the setup() method is equivalent to using the created() lifecycle hook.
fetchData();
</script>

<style lang="scss" scoped>
.detail-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

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
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
          0 10px 10px rgba(0, 0, 0, 0.2);
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
          .left {
            float: left;
          }
          .right {
            float: right;
          }
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
        .type {
          background-color: #0a2e50;
        }
        .ability {
          background-color: #c73015;
        }
        .moves-btn {
          background-color: rgb(22, 117, 22);
          cursor: pointer;

          &:hover {
            background-color: rgb(21, 179, 21);
            box-shadow: inset 0px 0px 0px 3px rgb(22, 117, 22);
          }
        }
        .active-moves {
          background-color: rgb(21, 179, 21);
          box-shadow: inset 0px 0px 0px 3px rgb(22, 117, 22);
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
          opacity: 1;
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
