<template>
  <div class="m-3 card card-border">
    <h3 class="card-header">Dictation Mode</h3>
    <p class="p-3 helper-text">
      When in dictation mode, most speech will be transcribed directly as it's spoken. Dictation mode is great for when
      you need to write a text document or email with lots of text. However, there are a few commands that are
      recognized while in dictation mode.
    </p>
    <div class="card-body">
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>press {{ talonService.encloseInAngles('keys') }}</td>
            <td>Press one or more keys at the same time.</td>
            <td>
              <table class="table table-striped table-bordered">
                <tbody>
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
                    <td>Presses the "super-d" keys to bring up the Windows start menu.</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>cap</td>
            <td>Set dictation formatter to capitalize.</td>
            <td>"cap hello world and cap goodbye" will be written as "Hello world and Goodbye".</td>
          </tr>
          <tr>
            <td>no cap</td>
            <td>
              Set dictation formatter to not capitalize. By default, talon capitalizes the start of sentences and some
              proper nouns.
            </td>
            <td>"no cap Missouri" will be written as "missouri".</td>
          </tr>
          <tr>
            <td>no space</td>
            <td>Set dictation formatter to not prepend a space. By default, talon adds a space between sentences.</td>
            <td>"hello period no space goodbye" will be written as "Hello.Goodbye".</td>
          </tr>
          <tr>
            <td>go up {{ talonService.encloseInAngles('number') }} (line | lines)</td>
            <td>Move cursor up n number of lines.</td>
            <td>"go up 1 line" will move the cursor up 1 line.</td>
          </tr>
          <tr>
            <td>go down {{ talonService.encloseInAngles('number') }} (line | lines)</td>
            <td>Move cursor down n number of lines.</td>
            <td>"go down 2 lines" will move the cursor down 2 lines.</td>
          </tr>
          <tr>
            <td>go left {{ talonService.encloseInAngles('number') }} (word | words)</td>
            <td>Move cursor left n number of words.</td>
            <td>
              "go left 1 word" will shift the cursor 1 word to the left. If there is not 1 more word to the left on the
              current line, the cursor will move up to the previous line or to the start of the line if there are no
              previous lines.
            </td>
          </tr>
          <tr>
            <td>go right {{ talonService.encloseInAngles('number') }} (word | words)</td>
            <td>Move cursor right n number of words.</td>
            <td>
              "go right 2 words" will shift the cursor 2 words to the right. If there are not 2 more words to the right
              on the current line, the cursor will move down to the next line or to the end of the line if there are no
              more lines.
            </td>
          </tr>
          <tr>
            <td>go line start</td>
            <td>Move cursor to the start of line.</td>
            <td></td>
          </tr>
          <tr>
            <td>go line end</td>
            <td>Move cursor to the end of line.</td>
            <td></td>
          </tr>
          <tr>
            <td>select left {{ talonService.encloseInAngles('number') }} words</td>
            <td>Extend selection left n words.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"Hello world. Talon<i class="bi bi-cursor-text"></i> is fun!"</span>
              </p>
              <p>The command "select left 3 words" will result in the following selection:</p>
              <p>
                <span class="sample-line">"Hello <span class="line-selection">world. Talon</span> is fun!"</span>
              </p>
              <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
            </td>
          </tr>
          <tr>
            <td>select right {{ talonService.encloseInAngles('number') }} words</td>
            <td>Extend selection right n words.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"<i class="bi bi-cursor-text"></i>Hello world. Talon is fun!"</span>
              </p>
              <p>The command "select right 5 words" will result in the following selection:</p>
              <p>
                <span class="sample-line">"<span class="line-selection">Hello world. Talon is</span> fun!"</span>
              </p>
              <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
            </td>
          </tr>
          <tr>
            <td>select left {{ talonService.encloseInAngles('number') }} characters</td>
            <td>Extend selection left n characters.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"Hello world. Talon<i class="bi bi-cursor-text"></i> is fun!"</span>
              </p>
              <p>The command "select left 3 characters" will result in the following selection:</p>
              <p>
                <span class="sample-line">"Hello world. Ta<span class="line-selection">lon</span> is fun!"</span>
              </p>
              <p>Note that spaces count as characters.</p>
            </td>
          </tr>
          <tr>
            <td>select right {{ talonService.encloseInAngles('number') }} characters</td>
            <td>Extend selection right n characters.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"Hello wor<i class="bi bi-cursor-text"></i>ld. Talon is fun!"</span>
              </p>
              <p>The command "select right 5 characters" will result in the following selection:</p>
              <p>
                <span class="sample-line">"Hello wor<span class="line-selection">ld. T</span>alon is fun!"</span>
              </p>
              <p>Note that spaces count as characters.</p>
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
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
.card-header {
  background: rgb(211, 168, 235);
}
.card-border {
  border-width: 5px;
  border-color: rgb(122, 177, 249);
}
.width-20 {
  width: 20%;
}
.helper-text {
  background: #e9ecef;
}
.sample-line {
  background: rgb(191, 191, 191);
}
.line-selection {
  background: rgb(111, 215, 247);
}
</style>
