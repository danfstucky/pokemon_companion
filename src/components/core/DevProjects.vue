<template>
  <div class='projects-container'>
    <div class='card'>
      <h4 class='card-header'>Pokemon Fan Game</h4>
      <div class='card-body flex-wrapper'>
        <div class='column column-2'>
          <img src='./../../../static/images/dev_projects/pokemon/salmon_red_logo.png' class='pokelogo'>
          <p>
            Pokemon fan game created inside RPG Maker using Ruby scripts to program game mechanics and
            environment/character interaction. I completed this game in 2019 after 5 years of work, but it will
            never be used for profit as it borrows many assets from the Nintendo franchise. I have always enjoyed
            playing the Pokemon games and had a blast creating and play-testing this game with my own ideas.
          </p>
        </div>

        <div class='column column-2'>
          <v-app>
            <v-container>
              <v-carousel height="400px">
                <v-carousel-item
                  v-for="(screenshot, i) in gameScreenshots"
                  :key="i">
                  <v-row class="fill-height" align="center" justify="center">
                    <img :src="screenshot">
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-container>
          </v-app>
        </div>
      </div>
    </div>

    <div class='card'>
      <h4 class='card-header'>Tactical Arbitrage Command Line App</h4>
      <div class='card-body'>
        <p>
          A Node.js command line application for finding great opportunities to buy and sell items from Walmart
          and Amazon at a profit. It pulls down information for millions of items from both sites and outputs a
          list of the top picks based on profit margin, buyer reviews, and consumer demand.
        </p>
        <i class="fab fa-github"></i>
        <a href='https://github.com/sulaimonlasisi/clearance-app' target='_blank'> Project Github Link</a>
      </div>
    </div>

    <div class='card'>
      <h4 class='card-header'>Smite Spec</h4>
      <div class='card-body'>
        <table class='smite-spec-images'>
          <tr>
            <td><img src='./../../../static/images/dev_projects/smite_spec/screenshot1.png'></td>
            <td><img src='./../../../static/images/dev_projects/smite_spec/screenshot2.png'></td>
            <td><img src='./../../../static/images/dev_projects/smite_spec/screenshot3.png'></td>
          </tr>
        </table>
        <p>
          Smite Spec is intended for all players of the popular multiplayer online battle arena game, Smite.
          It allows users to find player and clan statistics to help improve their play style and team performance
          in matches or simply have fun viewing your friends' data. Unlike other third party Smite apps such as
          SmiteRepo, Smite Spec focuses on the player. The user can easily track personal statistics for their
          favorite and best god characters to play as, and compare their stats to in-game friends. It is only
          available for Android.
        </p>
        <i class="fab fa-github"></i> 
        <a href='https://github.com/danfstucky/SmiteSpec' target='_blank'> Project Github Link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameScreenshots: [
        require('./../../../static/images/dev_projects/pokemon/screenshot1.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot2.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot3.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot4.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot5.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot6.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot7.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot8.png'),
        require('./../../../static/images/dev_projects/pokemon/screenshot9.png'),
      ]
    };
  },
}
</script>

<style lang="scss" scoped>
  .projects-container {
    margin: 10px;

    .card {
      margin: 10px;
    }
    .flex-wrapper {
      display: flex;
      .column {
        padding: 0px 10px;
      }

      .column-2 {
        flex: 2;
      }
    }

    #poke-carousel {
      width: 500px; // Set carousel size to same width of images.
    }

    table.smite-spec-images {
      float: right;

      img {
        height: 70%;
        padding: 10px;
      }
    }
  }
</style>
