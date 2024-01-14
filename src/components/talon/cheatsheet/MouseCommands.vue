<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Mouse Control</h2>
    <div class="card-body">
      <h5 class="mt-1">Mouse Grid</h5>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mouse grid</td>
            <td>
              <p>
                Display the mouse grid. Select a grid number by simply saying the number to move the mouse to that zone
                and bring up a 2nd grid limited to that zone for further positioning.
              </p>
              <p>
                Note that you can modify the <code>user.grids_put_one_bottom_left</code> setting in
                <code>settings.talon</code> so that grid 1 is in the top left instead of bottom left.
              </p>
            </td>
          </tr>
          <tr>
            <td>win grid</td>
            <td>Display the mouse grid and place the grid on the currently active window.</td>
          </tr>
          <tr>
            <td>grid {{ talonService.encloseInAngles('number') }}</td>
            <td>Display the mouse grid and position the grid on the screen area specified by number.</td>
          </tr>
          <tr>
            <td>grid screen {{ talonService.encloseInAngles('number') }}</td>
            <td>
              Display the mouse grid on the monitor specified by <code>number</code>. Only useful if using multiple
              monitors.
            </td>
          </tr>
          <tr>
            <td>grid off</td>
            <td>Close the active grid.</td>
          </tr>
          <tr>
            <td>grid reset</td>
            <td>Resets the grid to fill the whole screen again.</td>
          </tr>
          <tr>
            <td>grid back</td>
            <td>Sets the grid state back to what it was before the last command.</td>
          </tr>
        </tbody>
      </table>

      <div class="row">
        <h5 class="mt-1">Mouse Actions</h5>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th class="width-20">Voice Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>touch</td>
                <td>Left click mouse. Close the active grid. Release any held mouse buttons.</td>
              </tr>
              <tr>
                <td>righty</td>
                <td>Right click mouse. Close the active grid (if open).</td>
              </tr>
              <tr>
                <td>mid click</td>
                <td>Middle click mouse. Close the active grid (if open).</td>
              </tr>
              <tr>
                <td>{{ talonService.encloseInAngles('modifier key') }} touch</td>
                <td>
                  Press one or more
                  <button class="btn btn-link plain-btn" @click="talonService.scrollToId('modifier-keys')">
                    modifier keys
                  </button>
                  by name and left click mouse.
                </td>
              </tr>
              <tr>
                <td>{{ talonService.encloseInAngles('modifier key') }} righty</td>
                <td>
                  Press one or more
                  <button class="btn btn-link plain-btn" @click="talonService.scrollToId('modifier-keys')">
                    modifier keys
                  </button>
                  by name and right click mouse.
                </td>
              </tr>
              <tr>
                <td>dub click, duke</td>
                <td>Double click left mouse button.</td>
              </tr>
              <tr>
                <td>left drag, drag</td>
                <td>Press and hold left mouse button.</td>
              </tr>
              <tr>
                <td>right drag, righty drag</td>
                <td>Press and hold right mouse button.</td>
              </tr>
              <tr>
                <td>end drag, drag end</td>
                <td>Releases any held mouse buttons.</td>
              </tr>
              <tr>
                <td>copy mouse position</td>
                <td>Copy the current mouse position coordinates.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th class="width-20">Voice Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>wheel {{ talonService.encloseInAngles('down, up') }}</td>
                <td>Scroll mouse down or up.</td>
              </tr>
              <tr>
                <td>wheel tiny {{ talonService.encloseInAngles('down, up') }}</td>
                <td>Scroll mouse down or up a very small amount.</td>
              </tr>
              <tr>
                <td>wheel {{ talonService.encloseInAngles('down, up') }} here</td>
                <td>Move mouse cursor to center of currently active window. Scroll mouse down or up.</td>
              </tr>
              <tr>
                <td>wheel tiny {{ talonService.encloseInAngles('down, up') }} here</td>
                <td>
                  Move mouse cursor to center of currently active window. Scroll mouse down or up a very small amount.
                </td>
              </tr>
              <tr>
                <td>wheel {{ talonService.encloseInAngles('downer, upper') }}</td>
                <td>Continuously croll mouse down or up.</td>
              </tr>
              <tr>
                <td>wheel stop</td>
                <td>Stop scrolling.</td>
              </tr>
              <tr>
                <td>wheel stop here</td>
                <td>Move mouse cursor to center of currently active window. Stop scrolling.</td>
              </tr>
              <tr>
                <td>wheel {{ talonService.encloseInAngles('left, right') }}</td>
                <td>Scroll mouse left or right.</td>
              </tr>
              <tr>
                <td>wheel tiny {{ talonService.encloseInAngles('left, right') }}</td>
                <td>Scroll mouse left or right a very small amount.</td>
              </tr>
              <tr>
                <td>wheel {{ talonService.encloseInAngles('left, right') }} here</td>
                <td>Move mouse cursor to center of currently active window. Scroll mouse left or right.</td>
              </tr>
              <tr>
                <td>wheel tiny {{ talonService.encloseInAngles('left, right') }} here</td>
                <td>
                  Move mouse cursor to center of currently active window. Scroll mouse left or right a very small
                  amount.
                </td>
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
  border-color: rgb(233, 255, 121);
}
.width-20 {
  width: 20%;
}

.plain-btn {
  padding: 0px 0px 4px 0px;
  margin: 0;
  border-width: 0;
}
</style>
