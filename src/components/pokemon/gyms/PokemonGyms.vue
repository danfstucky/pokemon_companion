<template>
  <div class="gyms-container">
    <div class="gym-leaders-wrapper">
      <img
        v-for="gymNum in 9"
        :key="gymNum"
        :class="['gym-leader', { highlight: selectedGymId === gymNum }]"
        :src="getImgUrl(`gym${gymNum}.png`)"
        @click="handleGymSelection(gymNum)"
      />
    </div>
    <div v-if="selectedGymId">
      <img class="gym-city" :src="getImgUrl(`city${selectedGymId}.png`)" />
      <p class="disclaimer">Note: In-game graphics do not have gridlines</p>
    </div>

    <div v-if="gymLeader" class="gym-details">
      {{ gymLeader.description }}
      <div
        v-for="leader in gymLeader.leaders"
        :key="leader.name"
        class="gym-leader-details"
      >
        <table>
          <tr>
            <td class="label">Leader:</td>
            <td>{{ leader.name }}</td>
          </tr>
          <tr>
            <td class="label">Type:</td>
            <td>{{ leader.type }}</td>
          </tr>
        </table>
        <div class="gym-leader-pokemon">
          <article
            v-for="(pokemon, index) in leader.pokemon"
            :key="'poke' + index"
            @click="pokemonStore.showEncounterDetails(pokemon)"
          >
            <h6 class="pokedex-num">
              {{ pokemon.id }}
            </h6>
            <img
              :src="pokeImageUrl + pokemon.id + '.png'"
              width="96"
              height="96"
              alt=""
            />
            <h5>{{ pokemon.name }}</h5>
          </article>
        </div>
      </div>
    </div>
    <PokemonDetail
      v-if="pokemonStore.showPokemonDetails"
      :pokemon-id="pokemonStore.pokemonId"
      :is-wild-encounter="false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePokemonStore } from "../../../stores/pokemon";
import gymLeaders from "./../../../data/gym_leaders";
import PokemonDetail from "./../pokemon_details/PokemonDetail";

const pokemonStore = usePokemonStore();
const pokeImageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const selectedGymId = ref(null);
const gymLeader = ref(null);

function getImgUrl(pic) {
  // Need to call default because webpack returns required images as an Object
  return require(`./../../../assets/images/pokemon/gym_info/${pic}`).default;
}
function handleGymSelection(gymNum) {
  selectedGymId.value = gymNum;
  gymLeader.value = gymLeaders.find((gym) => gym.id === gymNum);
}
</script>

<style lang="scss" scoped>
.gyms-container {
  text-align: center;

  .gym-leaders-wrapper {
    margin: 20px;
    .gym-leader {
      margin: 7px;
      border-radius: 15px;
      opacity: 0.7;
      &:hover {
        border: 4px solid white;
        margin: 3px;
        opacity: 1;
        cursor: pointer;
      }
    }
    .highlight {
      border: 6px solid white;
      margin: 1px;
      opacity: 1;
    }
  }

  .gym-city {
    border-radius: 15px;
    border: 3px solid white;
  }
  .disclaimer {
    color: white;
    font-size: 12px;
  }
  .gym-details {
    background-color: #d3d3d3;
    padding: 10px;
    margin: 10px auto;
    text-align: left;
    border: white solid 3px;
    box-shadow: 5px 5px 4px;
    border-radius: 25px;
    max-width: 950px;

    .gym-leader-details {
      background: radial-gradient(#8ff0ff, #8fffc0);
      font-size: 18px;
      border: white solid 3px;
      border-radius: 25px;
      padding: 10px;
      margin-top: 10px;
      .label {
        font-weight: bold;
        padding-right: 10px;
      }

      .gym-leader-pokemon {
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
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
            0 10px 10px rgba(0, 0, 0, 0.2);
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
    }
  }
}
</style>
