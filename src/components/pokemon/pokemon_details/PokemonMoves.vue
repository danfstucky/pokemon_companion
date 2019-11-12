<template>
  <div class="pokemon-moves table-hover">
    <table class="table">
      <thead>
        <tr><th colspan="2">Moves</th></tr>
      </thead>
      <tbody>
        <tr v-for="move in moves" :key="move.name">
          <td>{{ move.name }}</td>
          <td>lvl {{ move.level }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    moves: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
  .pokemon-moves {
    background-color: #fff;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    border: 5px solid rgb(22, 117, 22);
    z-index: -10;

    table {
      thead {
        background: rgb(22, 117, 22);
        color: white;
         th {
          font-size: 1.75em;
          border-radius: 20px;
          border: none;
        }
      }
      td {
        font-size: 18px;
        text-align: left;
      }
    }
  }
</style>
