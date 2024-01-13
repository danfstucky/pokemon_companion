<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Manage Application Window Commands</h2>
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
            <td>something</td>
            <td>Something.</td>
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
  border-color: rgb(1, 205, 194);
}
.width-20 {
  width: 20%;
}
</style>
