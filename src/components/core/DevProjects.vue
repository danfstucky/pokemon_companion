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
            It features 410 Pokemon, 8 gyms, an Elite 4 end-game battle, dozens of cities and routes to explore,
            weather and night/day effects, egg hatching and daycare, and so much more!
          </p>
        </div>

        <div class='column column-2'>
          <div id="pokemon-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#pokemon-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#pokemon-carousel" data-slide-to="1"></li>
              <li data-target="#pokemon-carousel" data-slide-to="2"></li>
              <li data-target="#pokemon-carousel" data-slide-to="3"></li>
              <li data-target="#pokemon-carousel" data-slide-to="4"></li>
              <li data-target="#pokemon-carousel" data-slide-to="5"></li>
              <li data-target="#pokemon-carousel" data-slide-to="6"></li>
              <li data-target="#pokemon-carousel" data-slide-to="7"></li>
              <li data-target="#pokemon-carousel" data-slide-to="8"></li>
              <li data-target="#pokemon-carousel" data-slide-to="9"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot1.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot2.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot3.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot4.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot5.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot6.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot7.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot8.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot9.png" alt="First slide">
              </div>
               <div class="carousel-item">
                <img class="d-block w-100" src="./../../../static/images/dev_projects/pokemon/screenshot10.png" alt="First slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#pokemon-carousel" role="button" data-slide="prev">
              <div class='carousel-control-wrapper'>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </div>
            </a>
            <a class="carousel-control-next" href="#pokemon-carousel" role="button" data-slide="next">
              <div class='carousel-control-wrapper'>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </div>
            </a>
          </div>
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

    #pokemon-carousel {
      width: 600px;
      .carousel-control-wrapper {
        background: rgba(0, 0, 0, 0.445);
        padding: 8px;
        border-radius: 50%;
        vertical-align: middle;
        .carousel-control-next-icon, .carousel-control-prev-icon {
          vertical-align: text-top;
        }
      }
      .carousel-indicators {
        background-color: rgba(0, 0, 0, 0.445);
        width: 100%;
        height: 50px;
        margin: 0px;
        align-items: center;

        li {
          width: 40px;
          height: 5px;
          margin-left: 10px
        }
      }
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
