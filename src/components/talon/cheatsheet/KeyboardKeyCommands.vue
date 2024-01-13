<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Individual Keyboard Keys</h2>
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
            <td>{{ talonService.encloseInAngles('alphabet letter') }}</td>
            <td>
              Type an individual letter of the alphabet. The voice commands are whatever you have assigned to your
              <code>community/settings/alphabet.csv</code>. For example, if using the default alphabet, the voice
              command for "a" would be "air". Saying "alphabet help" will bring up a display of your alphabet.
            </td>
          </tr>
          <tr>
            <td>{{ talonService.encloseInAngles('number') }}</td>
            <td>Type an individual number (0-9).</td>
          </tr>
          <tr>
            <td>F {{ talonService.encloseInAngles('number') }}</td>
            <td>F keys. Example f1, f2, etc.</td>
          </tr>
          <tr>
            <td>press {{ talonService.encloseInAngles('keys') }}</td>
            <td>
              Press one or more keys at the same time. Examples:
              <table class="table table-hover table-bordered">
                <tr>
                  <td>press f</td>
                  <td>Presses the "f" key.</td>
                </tr>
                <tr>
                  <td>press control f</td>
                  <td>Presses the "ctrl-f" keys to bring up a search box (if using app that supports search).</td>
                </tr>
                <tr>
                  <td>press super d</td>
                  <td>Presses the "super-d" keys to hide all open windows and show Desktop.</td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <h5 class="mt-5">Symbols</h5>
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
                <td>period, dot, point</td>
                <td>.</td>
              </tr>
              <tr>
                <td>question, question mark</td>
                <td>?</td>
              </tr>
              <tr>
                <td>exclamation point, exclamation mark, bang</td>
                <td>!</td>
              </tr>
              <tr>
                <td>L square, left square, square</td>
                <td>[</td>
              </tr>
              <tr>
                <td>R square, right square</td>
                <td>]</td>
              </tr>
              <tr>
                <td>slash, forward slash</td>
                <td>/</td>
              </tr>
              <tr>
                <td>back slash</td>
                <td>\</td>
              </tr>
              <tr>
                <td>minus, dash, hyphen</td>
                <td>-</td>
              </tr>
              <tr>
                <td>equals</td>
                <td>=</td>
              </tr>
              <tr>
                <td>plus</td>
                <td>+</td>
              </tr>
              <tr>
                <td>at sign</td>
                <td>@</td>
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
                <td>underscore, down score</td>
                <td>_</td>
              </tr>
              <tr>
                <td>paren, left paren</td>
                <td>(</td>
              </tr>
              <tr>
                <td>right paren</td>
                <td>)</td>
              </tr>
              <tr>
                <td>brace, left brace, bracket, left bracket</td>
                <td>{</td>
              </tr>
              <tr>
                <td>right brace, right bracket</td>
                <td>}</td>
              </tr>
              <tr>
                <td>tilde</td>
                <td>~</td>
              </tr>
              <tr>
                <td>angle, left angle, less than</td>
                <td>{{ '<' }}</td>
              </tr>
              <tr>
                <td>rangle, right angle, greater than</td>
                <td>{{ '>' }}</td>
              </tr>
              <tr>
                <td>star, asterisk</td>
                <td>*</td>
              </tr>
              <tr>
                <td>hash, hash sign</td>
                <td>#</td>
              </tr>
              <tr>
                <td>percent, percent sign</td>
                <td>%</td>
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
                <td>caret</td>
                <td>^</td>
              </tr>
              <tr>
                <td>and sign, amper, ampersand,</td>
                <td>&</td>
              </tr>
              <tr>
                <td>pipe</td>
                <td>|</td>
              </tr>
              <tr>
                <td>dub quote, double quote</td>
                <td>"</td>
              </tr>
              <tr>
                <td>quote, apostrophe</td>
                <td>'</td>
              </tr>
              <tr>
                <td>dollar, dollar sign</td>
                <td>$</td>
              </tr>
              <tr>
                <td>pound, pound sign</td>
                <td>£</td>
              </tr>
              <tr>
                <td>backtick, grave</td>
                <td>`</td>
              </tr>
              <tr>
                <td>comma</td>
                <td>,</td>
              </tr>
              <tr>
                <td>semicolon</td>
                <td>;</td>
              </tr>
              <tr>
                <td>colon</td>
                <td>:</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h5 class="mt-5">Special Keys</h5>
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>end</td>
                <td>end</td>
              </tr>
              <tr>
                <td>enter</td>
                <td>enter</td>
              </tr>
              <tr>
                <td>escape</td>
                <td>escape</td>
              </tr>
              <tr>
                <td>home</td>
                <td>home</td>
              </tr>
              <tr>
                <td>insert</td>
                <td>insert</td>
              </tr>
              <tr>
                <td>page down</td>
                <td>page down</td>
              </tr>
              <tr>
                <td>page up</td>
                <td>page up</td>
              </tr>
              <tr>
                <td>space</td>
                <td>space</td>
              </tr>
              <tr>
                <td>tab</td>
                <td>tab</td>
              </tr>
              <tr>
                <td>wipe, delete</td>
                <td>backspace</td>
              </tr>
              <tr>
                <td>forward delete</td>
                <td>delete</td>
              </tr>
              <tr>
                <td>menu key</td>
                <td>menu</td>
              </tr>
              <tr>
                <td>print screen</td>
                <td>printscr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <h5 class="mt-5">Arrow Keys</h5>
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>down</td>
                <td>down arrow</td>
              </tr>
              <tr>
                <td>up</td>
                <td>up arrow</td>
              </tr>
              <tr>
                <td>left</td>
                <td>left arrow</td>
              </tr>
              <tr>
                <td>right</td>
                <td>right arrow</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <h5 class="mt-5">Modifier Keys</h5>
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>alt</td>
                <td>alt</td>
              </tr>
              <tr>
                <td>control</td>
                <td>ctrl</td>
              </tr>
              <tr>
                <td>shift</td>
                <td>shift</td>
              </tr>
              <tr>
                <td>super</td>
                <td>super. On windows, this brings up the Start menu.</td>
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
.card-border {
  border-width: 5px;
  border-color: rgb(143, 255, 184);
}
.width-20 {
  width: 20%;
}
</style>
