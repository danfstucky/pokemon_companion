<template>
  <div class="poke-tabs">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'WildPokemon'}" active-class="active">
          Wild Pokemon Test
        </router-link>
      </li>
      <li class="nav-item"><router-link class="nav-link" to="Dummy">Dummy Link</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>
