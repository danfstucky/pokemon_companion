<template>
  <div class="m-3 card card-border">
    <h3 class="card-header">General</h3>
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
            <td>go to sleep</td>
            <td>Swith to sleep mode and stop processing commands.</td>
          </tr>
          <tr>
            <td>wake Up</td>
            <td>Switch to previous mode and start processing commands.</td>
          </tr>
          <tr>
            <td>dictation mode</td>
            <td>Switch to dictation mode. Your speech is <i>mostly</i> transcribed as plain text.</td>
          </tr>
          <tr>
            <td>command mode</td>
            <td>Switch to command mode. Your speech is interpreted as commands.</td>
          </tr>
          <tr>
            <td>help alphabet</td>
            <td>Show the spelling alphabet for pressing individual keys.</td>
          </tr>
          <tr>
            <td>help context</td>
            <td>Show all defined commands.</td>
          </tr>
          <tr>
            <td>help active</td>
            <td>Show all currently available commands.</td>
          </tr>
          <tr>
            <td>help next, help previous</td>
            <td>Go to the next or previous page of help items if there are a lot.</td>
          </tr>
          <tr>
            <td>help close</td>
            <td>Hide any open help window again.</td>
          </tr>
          <tr>
            <td>
              phrase {{ talonService.encloseInAngles('any phrase') }},<br />
              say {{ talonService.encloseInAngles('any phrase') }}
            </td>
            <td>
              Instructs talon to treat the words spoken after "phrase/say" as if they were in dictation mode. This means
              the words will be handled as text instead of commands. It is a helpful shortcut to avoid switching modes
              when you have a small phrase to enter, such as into a search box.<br />
              Example: "phrase hello, my dog is named Benji" will type "hello, my dog is named Benji" into the active
              application.
            </td>
          </tr>
        </tbody>
      </table>
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
  border-color: rgb(255, 123, 123);
}
.width-20 {
  width: 20%;
}
</style>
