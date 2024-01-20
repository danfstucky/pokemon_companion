<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Manage Application Windows</h2>
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
            <td>window new, window open</td>
            <td>
              Open a new window. If a browser window is currently active, it will open a new browser window. If a file
              explorer window is currently active it will open a new file explorer.
            </td>
          </tr>
          <tr>
            <td>window next</td>
            <td>Switch focus to the next window for the active application.</td>
          </tr>
          <tr>
            <td>window last</td>
            <td>Switch focus to the previous window for the active application.</td>
          </tr>
          <tr>
            <td>window close</td>
            <td>Close the current window.</td>
          </tr>
          <tr>
            <td>window hide</td>
            <td>
              Minimizes the current window if possible. Note: This does not work for every application. In Google
              Chrome, for example, it will simply bring up an options menu with "minimize" being one of the choices.
            </td>
          </tr>
          <tr>
            <td>running list</td>
            <td>Show/hide a list of all currently running applications.</td>
          </tr>
          <tr>
            <td>running close</td>
            <td>Hide the list of currently running applications.</td>
          </tr>
          <tr>
            <td>focus {{ talonService.encloseInAngles('running application') }}</td>
            <td>
              Switch focus to the specified application.<br />
              Example: "focus Chrome" will switch focus to the Google Chrome browser. "focus explorer" will change focus
              to the Windows file explorer.
            </td>
          </tr>
          <tr>
            <td>launch application</td>
            <td>
              Launch a new application by path (all OSes), or AppUserModel-ID path on Windows. Example on Windows:
              "launch explorer" will start up a new file explorer window.
            </td>
          </tr>
          <tr>
            <td>snap {{ talonService.encloseInAngles('window snap position') }}</td>
            <td>
              Move the active window to a specific
              <button class="btn btn-link plain-btn" @click="talonService.scrollToId('snap-positions')">
                snap position
              </button>
              on the screen.
            </td>
          </tr>
          <tr>
            <td>snap screen {{ talonService.encloseInAngles('number') }}</td>
            <td>
              Move the active application over to the screen specified by number. Only useful if using multiple
              monitors.
            </td>
          </tr>
          <tr>
            <td>
              snap {{ talonService.encloseInAngles('running application') }}
              {{ talonService.encloseInAngles('window snap position') }}
            </td>
            <td>
              Move the specified application to a specific
              <button class="btn btn-link plain-btn" @click="talonService.scrollToId('snap-positions')">
                snap position
              </button>
              on the screen.<br />
              Example: "snap explorer left" will snap the file explorer application to the left side of the screen.
            </td>
          </tr>
          <tr>
            <td>
              snap {{ talonService.encloseInAngles('running application') }}
              {{ talonService.encloseInAngles('number') }}
            </td>
            <td>
              Move the specified application over to the screen specified by number.<br />
              Example: "snap explorer 1" will move the file explorer application to the first monitor (if not already
              there).
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div class="row">
        <h5 id="snap-positions" class="mt-1">Snap Positions</h5>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th class="width-20">Voice Command</th>
                <th>Screen Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>left</td>
                <td>left</td>
              </tr>
              <tr>
                <td>right</td>
                <td>right</td>
              </tr>
              <tr>
                <td>top</td>
                <td>top</td>
              </tr>
              <tr>
                <td>bottom</td>
                <td>bottom</td>
              </tr>
              <tr>
                <td>center</td>
                <td>center</td>
              </tr>
              <tr>
                <td>full, fullscreen</td>
                <td>Maximize the active window to display full screen.</td>
              </tr>
              <tr>
                <td>left third</td>
                <td>Left 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>right third</td>
                <td>Right 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>center third</td>
                <td>Middle 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>left two thirds</td>
                <td>Left 2/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>right two thirds</td>
                <td>Right 2/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>center two thirds</td>
                <td>Middle 2/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>top left</td>
                <td>top left</td>
              </tr>
              <tr>
                <td>top right</td>
                <td>top right</td>
              </tr>
              <tr>
                <td>bottom left</td>
                <td>bottom left</td>
              </tr>
              <tr>
                <td>bottom right</td>
                <td>bottom right</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th class="width-20">Voice Command</th>
                <th>Screen Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>top left third</td>
                <td>Top left 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>top right third</td>
                <td>Top right 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>top center third</td>
                <td>Top middle 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>bottom left third</td>
                <td>Bottom left 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>bottom right third</td>
                <td>Bottom right 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>bottom center third</td>
                <td>Bottom middle 1/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>top left two thirds</td>
                <td>Top left 2/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>top right two thirds</td>
                <td>Top right 2/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>bottom left two thirds</td>
                <td>Bottom left 2/3rd portion of screen.</td>
              </tr>
              <tr>
                <td>bottom right two thirds</td>
                <td>Bottom right 2/3rd portion of screen.</td>
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
  border-color: rgb(1, 205, 194);
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
