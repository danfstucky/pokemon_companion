<template>
  <div class="card">
    <h4 class="card-header">General</h4>
    <div class="card-body">
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>go to sleep</td>
            <td>Swith to sleep mode and stop processing commands</td>
          </tr>
          <tr>
            <td>wake Up</td>
            <td>Switch to previous mode and start processing commands.</td>
          </tr>
          <tr>
            <td>dictation mode</td>
            <td>
              Switch to dictation mode. Your speech is <i>mostly</i> transcribed
              as plain text.
            </td>
          </tr>
          <tr>
            <td>command mode</td>
            <td>
              Switch to command mode. Your speech is interpreted as commands
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
