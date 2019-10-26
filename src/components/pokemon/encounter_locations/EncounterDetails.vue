<template>
  <div>
    <p>Encounter Details for location: {{ encounter.location }}.</p>
  </div>
</template>

<script>

export default {
  props: {
    encounter: {
      type: Object,
      required: true,
    },
  },
  methods: {

  },
};
</script>
