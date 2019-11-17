<template>
  <div class='wrapper'>
    <Sidebar />
    <div class='main-content-container'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './shared/Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;

    .main-content-container {
      width: 110%;
    }
  }
</style>
