<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Mouse Commands</h2>
    <div class="card-body">
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>go to sleep</td>
            <td>Swith to sleep mode and stop processing commands.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import talonService from '../../../services/talonService';
</script>

<style lang="scss" scoped>
.card-header {
  background: rgb(211, 168, 235);
}
.card-border {
  border-width: 5px;
  border-color: rgb(233, 255, 121);
}
.width-20 {
  width: 20%;
}
</style>
