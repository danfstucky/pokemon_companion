<template>
  <div class="talon-container">
    <TalonTabs />
    <router-view />
  </div>
</template>

<script setup>
import TalonTabs from "./TalonTabs.vue";
</script>

<style lang="scss" scoped>
.talon-container {
  padding: 10px;
  min-height: calc(100vh);
  background: radial-gradient(#383a3a, #330f51);
}
</style>
