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
          <!-- <div id='poke-carousel' class='carousel slide{data: {ride: 'carousel'}}
            %ol.carousel-indicators
              %li.active{data: {target: '#poke-carousel', 'slide-to': 0}}
              %li{data: {target: '#poke-carousel', 'slide-to': 1}}
              %li{data: {target: '#poke-carousel', 'slide-to': 2}}
              %li{data: {target: '#poke-carousel', 'slide-to': 3}}
              %li{data: {target: '#poke-carousel', 'slide-to': 4}}
              %li{data: {target: '#poke-carousel', 'slide-to': 5}}
              %li{data: {target: '#poke-carousel', 'slide-to': 6}}
              %li{data: {target: '#poke-carousel', 'slide-to': 7}}

            .carousel-inner
              .carousel-item.active
                = image_tag('PokemonPics/screenshot1.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot2.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot3.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot4.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot5.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot6.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot7.png')

              .carousel-item
                = image_tag('PokemonPics/screenshot8.png')

            .carousel-control-prev
              = link_to '#poke-carousel', role: 'button', data: {slide: 'prev'} do
                %span.carousel-control-prev-icon{'aria-hidden': true}
                %span.sr-only= 'Previous'

            .carousel-control-next
              = link_to '#poke-carousel', role: 'button', data: {slide: 'next'} do
                %span.carousel-control-next-icon{'aria-hidden': true}
                %span.sr-only= 'Next' -->
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
