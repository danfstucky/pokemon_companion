<template>
  <ul>
    <li>
      <strong>Voice Command Overview:</strong>
      <table>
        <table class="table table-striped table-hover table-bordered">
          <thead class="thead-dark">
            <tr>
              <th>Voice Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>up {{ talonService.encloseInAngles('number') }},</p>
                <p>move mouse up {{ talonService.encloseInAngles('number') }}</p>
              </td>
              <td>
                <p>
                  Move the mouse up an amount proportional to the given number. Defaults to 1 when no number provided.
                </p>
                <p>Example: "up 5".</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>far up,</p>
                <p>move mouse far up</p>
              </td>
              <td>Move the mouse up a far amount.</td>
            </tr>
            <tr>
              <td>
                <p>down {{ talonService.encloseInAngles('number') }},</p>
                <p>move mouse down {{ talonService.encloseInAngles('number') }}</p>
              </td>
              <td>
                <p>
                  Move the mouse down an amount proportional to the given number. Defaults to 1 when no number provided.
                </p>
                <p>Example: "down 5".</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>far down,</p>
                <p>move mouse far down</p>
              </td>
              <td>Move the mouse down a far amount.</td>
            </tr>
            <tr>
              <td>
                <p>left {{ talonService.encloseInAngles('number') }},</p>
                <p>move mouse left {{ talonService.encloseInAngles('number') }}</p>
              </td>
              <td>
                <p>
                  Move the mouse left an amount proportional to the given number. Defaults to 1 when no number provided.
                </p>
                <p>Example: "left 5".</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>far left,</p>
                <p>move mouse far left</p>
              </td>
              <td>Move the mouse left a far amount.</td>
            </tr>
            <tr>
              <td>
                <p>right {{ talonService.encloseInAngles('number') }},</p>
                <p>move mouse right {{ talonService.encloseInAngles('number') }}</p>
              </td>
              <td>
                <p>
                  Move the mouse right an amount proportional to the given number. Defaults to 1 when no number
                  provided.
                </p>
                <p>Example: "right 5".</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>far right,</p>
                <p>move mouse far right</p>
              </td>
              <td>Move the mouse right a far amount.</td>
            </tr>
          </tbody>
        </table>
      </table>
    </li>
    <li>
      <strong>Script:</strong>
      <p><code>mouse_movement.talon</code></p>
      <pre>
      <code>
      {{ scripts }}
      </code>
  </pre>
    </li>
  </ul>
</template>

<script setup>
import talonService from '../../../services/talonService';

const scripts = `
# Move mouse up by a number
(up | move mouse up) [<number>]:
  n = number or 1
  x = mouse_x()
  y = mouse_y()
  diff = 15 * n
  mouse_move(x, y - diff)

# Move mouse very far up
(far up | move mouse far up):
  x = mouse_x()
  y = mouse_y()
  mouse_move(x, y - 1000)

# Move mouse down by a number
(down | move mouse down) [<number>]:
  n = number or 1
  x = mouse_x()
  y = mouse_y()
  diff = 15 * n
  mouse_move(x, y + diff)

# Move mouse very far down
(far down | move mouse far down):
  x = mouse_x()
  y = mouse_y()
  mouse_move(x, y + 1000)

# Move mouse left by a number
(left | move mouse left) [<number>]:
  n = number or 1
  x = mouse_x()
  y = mouse_y()
  diff = 15 * n
  mouse_move(x - diff, y)

# Move mouse very far left
(far left | move mouse far left):
  x = mouse_x()
  y = mouse_y()
  mouse_move(x - 2000, y)

# Move mouse right by a number
(right | move mouse right) [<number>]:
  n = number or 1
  x = mouse_x()
  y = mouse_y()
  diff = 15 * n
  mouse_move(x + diff, y)

# Move mouse very far right
(far right | move mouse far right):
  x = mouse_x()
  y = mouse_y()
  mouse_move(x + 2000, y)
`;
</script>

<style lang="scss" scoped>
pre {
  background: rgb(222, 222, 222);
  padding: 0px 20px;
  border-radius: 25px;
}
</style>
