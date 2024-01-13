<template>
  <h1 class="text-center">Talon Commands Cheatsheet</h1>
  <h5 class="text-center">
    This cheatsheet assumes you have installed the
    <a href="https://github.com/talonhub/community" target="”_blank”">Community</a>
    and
    <a href="https://github.com/david-tejada/rango" target="”_blank”">Rango</a>
    script packages with your talon setup.
  </h5>
  <GeneralCommands class="mb-5 mt-4" />
  <KeyboardKeyCommands class="mb-5" />
  <DictationCommands class="mb-5" />
  <MouseCommands class="mb-5" />
  <ManageAppWindowCommands class="mb-5" />
  <ManageBrowserCommands class="mb-5" />
</template>

<script setup>
import GeneralCommands from './GeneralCommands.vue';
import KeyboardKeyCommands from './KeyboardKeyCommands.vue';
import DictationCommands from './DictationCommands.vue';
import MouseCommands from './MouseCommands.vue';
import ManageAppWindowCommands from './ManageAppWindowCommands.vue';
import ManageBrowserCommands from './ManageBrowserCommands.vue';
</script>

<style lang="scss" scoped>
h1 {
  color: #efefef;
}
h5 {
  color: #efefef;
}
// .card {
//   margin-
// }
</style>
