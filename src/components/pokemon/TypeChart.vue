<template>
  <div>
    <table>
      <thead>
        <tr>
          <td></td>
          <td v-for="type in types" :key="`top-${type.name}`" :class="['type-header', type.name.toLowerCase()]">
            {{ type.name }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="type in types" :key="`left-${type.name}`">
          <td :class="['type-header', 'type-side-header', type.name.toLowerCase()]">{{ type.name }}</td>
          <td v-for="compareType in types"
            :key="`${type.name}-${compareType.name}`"
            :class="['effectiveness-multiplier', `effective-${effectivenessMultiplier(type, compareType)}`]" >
            {{ effectivenessMultiplier(type, compareType) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import types from './../../data/types';

export default {
  data() {
    return {
      types,
    };
  },
  methods: {
    effectivenessMultiplier(type, compareType) {
      if (type.strengths.includes(compareType.name)) {
        return '2x';
      } else if (type.weaknesses.includes(compareType.name)) {
        return '0.5x';
      } else if (type.immunes.includes(compareType.name)) {
        return '0x';
      } else {
        return '1x';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  table {
    td {
      padding: 6px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.247);
      &:hover {
        cursor: default;
        box-shadow:inset 0px 0px 0px 3px #f00;
        // border: 3px solid white;
      }
    }
    td.type-header {
      font-size: 18px;
      color: white;
      padding: 8px;
    }
    td.normal { background-color:rgb(243, 206, 158); }
    td.fire { background-color:rgb(255, 104, 16); }
    td.water { background-color:rgb(19, 129, 255); }
    td.electric { background-color:rgb(212, 224, 42); }
    td.grass { background-color:rgb(48, 240, 41); }
    td.ice { background-color:rgb(137, 230, 253); }
    td.fighting { background-color:rgb(218, 163, 92); }
    td.poison { background-color:rgb(150, 48, 175); }
    td.ground { background-color:rgb(245, 194, 53); }
    td.flying { background-color:rgb(111, 97, 194); }
    td.psychic { background-color:rgb(200, 41, 214); }
    td.bug { background-color: rgb(151, 171, 60); }
    td.rock { background-color:rgb(170, 160, 99); }
    td.ghost { background-color:rgb(188, 117, 255); }
    td.dragon { background-color:rgb(92, 101, 170); }
    td.dark { background-color:rgb(90, 80, 78); }
    td.steel { background-color:rgb(168, 166, 162); }

    tbody {
      td.type-side-header {
        text-align: left;
      }
      td.effective-1x{
        background-color: white;
      }
      td.effective-0\.5x{
        background-color: rgb(252, 90, 90);
      }
      td.effective-2x{
        background-color: rgb(43, 223, 67);
      }
      td.effective-0x{
        background-color: rgb(112, 112, 112);
      }
    }
  }
</style>
