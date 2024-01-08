<template>
  <h1 class="text-center">Custom Scripts</h1>
  <h5 class="text-center">
    Some additional commands/modifications I added to talon. Custom scripts can
    be added to the <code>talon/user</code> directory.
  </h5>

  <div class="accordion" id="scripts-accordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <strong>General</strong>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#scripts-accordion"
      >
        <div class="accordion-body">
          <ul>
            <li>
              All of the community package CSV files located within
              <code>community/settings/*</code> are customizable. For example,
              to modify the default talon alphabet, update the
              <code>alphabet.csv</code> file.
            </li>
            <li>
              You can update any of the default talon settings by modifying the
              config options located in
              <code>community/settings.talon</code>.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <strong>Mouse Movement</strong>
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#scripts-accordion"
      >
        <div class="accordion-body">
          <MouseScripts />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MouseScripts from "./MouseScripts.vue";
</script>

<style lang="scss" scoped>
h1 {
  color: #efefef;
}
h5 {
  color: #efefef;
}
</style>
