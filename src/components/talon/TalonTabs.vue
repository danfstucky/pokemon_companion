<template>
  <div class="talon-tabs">
    <ul class="nav nav-pills">
      <router-link
        class="nav-link me-2"
        to="/talon/cheatsheet"
        active-class="active"
      >
        <li>Cheatsheet</li>
      </router-link>
      <router-link
        class="nav-link me-2"
        to="/talon/scripts"
        active-class="active"
      >
        <li>Custom Scripts</li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
// Nothing to do
</script>

<style lang="scss" scoped>
.talon-tabs {
  font-size: 22px;
  margin-bottom: 20px;

  a {
    color: white;
    &:hover {
      color: #d197f0;
    }
  }
  .active {
    color: white;
    background-color: rgb(191, 146, 215);

    &:hover {
      color: black;
    }
  }
}
</style>
