<template>
  <div class="poke-tabs">
    <ul class="nav nav-pills">
      <router-link class="nav-link" to="/pokemon" active-class="active" exact>
        <li>Pokedex</li>
      </router-link>
      <router-link class="nav-link" to="/pokemon/wild-encounters" active-class="active">
        <li>Wild Pokemon</li>
      </router-link>
      <router-link class="nav-link" to="/pokemon/gyms" active-class="active">
        <li>Gym Leaders</li>
      </router-link>
      <router-link class="nav-link" to="/pokemon/types" active-class="active">
        <li>Type Chart</li>
      </router-link>
      <router-link class="nav-link" to="/pokemon/about" active-class="active">
        <li>About Salmon Red</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .poke-tabs {
    font-size: 22px;
    margin-bottom: 20px;

    a {
      color: #0056b3;
       &:hover {
        color: #007bff;
      }
    }
    .active {
      color: #007bff;
      background-color: white;

      &:hover {
       color: #0056b3;
      }
    }
  }
</style>
