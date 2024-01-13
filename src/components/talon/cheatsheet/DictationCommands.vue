<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Dictation Mode</h2>
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
                    <td>Presses the "super-d" keys to hide all open windows and show Desktop.</td>
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
          <tr>
            <td>clear left {{ talonService.encloseInAngles('number') }} words</td>
            <td>Extend selection left n words and delete.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"Hello world. Talon<i class="bi bi-cursor-text"></i> is fun!"</span>
              </p>
              <p>The command "clear left 3 words" will result in the following deletion:</p>
              <p>
                <span class="sample-line">"Hello Talon is fun!"</span>
              </p>
              <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
            </td>
          </tr>
          <tr>
            <td>clear right {{ talonService.encloseInAngles('number') }} words</td>
            <td>Extend selection right n words and delete.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"<i class="bi bi-cursor-text"></i>Hello world. Talon is fun!"</span>
              </p>
              <p>The command "select right 5 words" will result in the following deletion:</p>
              <p>
                <span class="sample-line">"fun!"</span>
              </p>
              <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
            </td>
          </tr>
          <tr>
            <td>clear left {{ talonService.encloseInAngles('number') }} characters</td>
            <td>Extend selection left n characters and delete.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"Hello world. Talon<i class="bi bi-cursor-text"></i> is fun!"</span>
              </p>
              <p>The command "clear left 3 characters" will result in the following deletion:</p>
              <p>
                <span class="sample-line">"Hello world. Ta is fun!"</span>
              </p>
              <p>Note that spaces count as characters.</p>
            </td>
          </tr>
          <tr>
            <td>clear right {{ talonService.encloseInAngles('number') }} characters</td>
            <td>Extend selection right n characters and delete.</td>
            <td>
              <p>
                Given the line:
                <span class="sample-line">"Hello wor<i class="bi bi-cursor-text"></i>ld. Talon is fun!"</span>
              </p>
              <p>The command "clear right 5 characters" will result in the following deletion:</p>
              <p>
                <span class="sample-line">"Hello woralon is fun!"</span>
              </p>
              <p>Note that spaces count as characters.</p>
            </td>
          </tr>
          <tr>
            <td>scratch that</td>
            <td>Clears the last phrase.</td>
            <td>
              A phrase is the last group of spoken words without a pause. Saying "Hello world", followed by a pause,
              followed by "scratch that" will delete the "hello world" phrase.
            </td>
          </tr>
          <tr>
            <td>scratch selection</td>
            <td>Delete selection.</td>
            <td></td>
          </tr>
          <tr>
            <td>select that</td>
            <td>Selects the last phrase.</td>
            <td>
              A phrase is the last group of spoken words without a pause. Saying "Hello world", followed by a pause,
              followed by "select that" will select the "hello world" phrase.
            </td>
          </tr>
          <tr>
            <td>spell that {{ talonService.encloseInAngles('letters') }}</td>
            <td>Dictate individual letters with normal formatting.</td>
            <td>
              <table class="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td>spell that h-e-l-l-o</td>
                    <td>hello</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              spell that {{ talonService.encloseInAngles('formatters') }} {{ talonService.encloseInAngles('letters') }}
            </td>
            <td>Dictate individual letters with specified formatting.</td>
            <td>
              <table class="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td>spell that all caps h-e-l-l-o</td>
                    <td>HELLO</td>
                  </tr>
                  <tr>
                    <td>spell that all caps dubstring h-e-l-l-o</td>
                    <td>"HELLO"</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>escape {{ talonService.encloseInAngles('user text') }}</td>
            <td>Inserts dictated text with escaping any dictation commands.</td>
            <td>
              "hello world period talon is fun exclamation mark" will be written as " hello world period talon is fun
              exclamation mark".<br />Note that the punctuation is written out.
            </td>
          </tr>
        </tbody>
      </table>

      <h4 class="mt-4">Dictation Mode Keywords</h4>
      <div class="row">
        <h5 class="mt-1">Punctuation</h5>
        <p>Words for inserting punctuation while in dictation mode.</p>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Punctuation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>period, full stop</td>
                <td>.</td>
              </tr>
              <tr>
                <td>question mark</td>
                <td>?</td>
              </tr>
              <tr>
                <td>exclamation mark, exclamation point</td>
                <td>!</td>
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
              <tr>
                <td>grave, backtick</td>
                <td>`</td>
              </tr>
              <tr>
                <td>hyphen</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Punctuation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>forward slash</td>
                <td>/</td>
              </tr>
              <tr>
                <td>asterisk</td>
                <td>*</td>
              </tr>
              <tr>
                <td>hash sign, number sign</td>
                <td>#</td>
              </tr>
              <tr>
                <td>percent sign</td>
                <td>%</td>
              </tr>
              <tr>
                <td>at sign</td>
                <td>@</td>
              </tr>
              <tr>
                <td>and sign, ampersand</td>
                <td>&</td>
              </tr>
              <tr>
                <td>dollar sign</td>
                <td>$</td>
              </tr>
              <tr>
                <td>left paren, L paren</td>
                <td>(</td>
              </tr>
              <tr>
                <td>right paren, R paren</td>
                <td>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h5 class="mt-1">Formatters</h5>
          <p>Commands that can be used to apply formatting to phrases in dication mode.</p>
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>all cap</td>
                <td>capitalize all words</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <h5 class="mt-1">Prose</h5>
          <p>Commands that can be used for formatting prose in dictation mode.</p>
          <table class="table table-striped table-hover table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>Voice Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>spacebar</td>
                <td>Type a space.</td>
              </tr>
              <tr>
                <td>new line</td>
                <td>Create a new line.</td>
              </tr>
              <tr>
                <td>new paragraph</td>
                <td>Create two new lines.</td>
              </tr>
              <tr>
                <td>open quote</td>
                <td>"</td>
              </tr>
              <tr>
                <td>close quote</td>
                <td>"</td>
              </tr>
              <tr>
                <td>smiley</td>
                <td>:-)</td>
              </tr>
              <tr>
                <td>frowny</td>
                <td>:-(</td>
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
