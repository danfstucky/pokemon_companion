<template>
  <div class="card">
    <h4 class="card-header">Individual Keyboard Keys</h4>
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
            <td>{{ talonService.encloseInCarets('alphabet letter') }}</td>
            <td>
              Type an individual letter of the alphabet. The voice commands are whatever you have assigned to your
              <code>community/settings/alphabet.csv</code>. For example, if using the default alphabet, the voice
              command for "a" would be "air". Saying "alphabet help" will bring up a display of your alphabet.
            </td>
          </tr>
        </tbody>
      </table>

      <h5>Symbols</h5>
      <div class="row">
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dot, point</td>
                <td>.</td>
              </tr>
              <tr>
                <td>quote, apostrophe</td>
                <td>'</td>
              </tr>
              <tr>
                <td>question</td>
                <td>?</td>
              </tr>
              <tr>
                <td>L square, left square, square</td>
                <td>[</td>
              </tr>
              <tr>
                <td>R square, right square</td>
                <td>]</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dot</td>
                <td>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dot</td>
                <td>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
.width-20 {
  width: 20%;
}
</style>
