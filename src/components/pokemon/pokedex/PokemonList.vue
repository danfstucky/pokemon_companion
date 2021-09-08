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
    <div
      v-if="moreResults"
      id="scroll-trigger"
      ref="infinitescrolltrigger"
    >
      <i class="fas fa-spinner fa-spin" />
    </div>
    <div
      v-else
      class="text-center end-results"
    >
      <div>End of Pokedex</div>
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
      moreResults: true,
    };
  },
  mounted() {
    // this.scrollTrigger();
  },
  computed: {
    ...mapGetters([
      'pokedexEntries',
    ]),
  },
  methods: {
    ...mapMutations([
      'showDetails',
    ]),
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
