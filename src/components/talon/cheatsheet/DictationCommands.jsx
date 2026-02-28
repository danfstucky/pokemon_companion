import talonService from '../../../services/talonService'
import styles from './DictationCommands.module.scss'

export default function DictationCommands() {
  const e = talonService.encloseInAngles

  return (
    <div className={`m-3 card ${styles.cardBorder}`}>
      <h2 className={`card-header ${styles.cardHeader}`}>Dictation Mode</h2>
      <p className={`p-3 ${styles.helperText}`}>
        When in dictation mode, most speech will be transcribed directly as it&apos;s spoken. Dictation mode is great for when
        you need to write a text document or email with lots of text. However, there are a few commands that are
        recognized while in dictation mode.
      </p>
      <div className="card-body">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className={styles.width20}>Voice Command</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>press {e('keys')}</td>
              <td>Press one or more keys at the same time.</td>
              <td>
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr><td>press f</td><td>Presses the &quot;f&quot; key.</td></tr>
                    <tr><td>press control f</td><td>Presses the &quot;ctrl-f&quot; keys to bring up a search box (if using app that supports search).</td></tr>
                    <tr><td>press super d</td><td>Presses the &quot;super-d&quot; keys to hide all open windows and show Desktop.</td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>cap</td>
              <td>Set dictation formatter to capitalize.</td>
              <td>&quot;cap hello world and cap goodbye&quot; will be written as &quot;Hello world and Goodbye&quot;.</td>
            </tr>
            <tr>
              <td>no cap</td>
              <td>Set dictation formatter to not capitalize. By default, talon capitalizes the start of sentences and some proper nouns.</td>
              <td>&quot;no cap Missouri&quot; will be written as &quot;missouri&quot;.</td>
            </tr>
            <tr>
              <td>no space</td>
              <td>Set dictation formatter to not prepend a space. By default, talon adds a space between sentences.</td>
              <td>&quot;hello period no space goodbye&quot; will be written as &quot;Hello.Goodbye&quot;.</td>
            </tr>
            <tr>
              <td>go up {e('number')} (line | lines)</td>
              <td>Move cursor up n number of lines.</td>
              <td>&quot;go up 1 line&quot; will move the cursor up 1 line.</td>
            </tr>
            <tr>
              <td>go down {e('number')} (line | lines)</td>
              <td>Move cursor down n number of lines.</td>
              <td>&quot;go down 2 lines&quot; will move the cursor down 2 lines.</td>
            </tr>
            <tr>
              <td>go left {e('number')} (word | words)</td>
              <td>Move cursor left n number of words.</td>
              <td>&quot;go left 1 word&quot; will shift the cursor 1 word to the left. If there is not 1 more word to the left on the current line, the cursor will move up to the previous line or to the start of the line if there are no previous lines.</td>
            </tr>
            <tr>
              <td>go right {e('number')} (word | words)</td>
              <td>Move cursor right n number of words.</td>
              <td>&quot;go right 2 words&quot; will shift the cursor 2 words to the right. If there are not 2 more words to the right on the current line, the cursor will move down to the next line or to the end of the line if there are no more lines.</td>
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
              <td>select left {e('number')} words</td>
              <td>Extend selection left n words.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;Hello world. Talon<i className="bi bi-cursor-text"></i> is fun!&quot;</span></p>
                <p>The command &quot;select left 3 words&quot; will result in the following selection:</p>
                <p><span className={styles.sampleLine}>&quot;Hello <span className={styles.lineSelection}>world. Talon</span> is fun!&quot;</span></p>
                <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
              </td>
            </tr>
            <tr>
              <td>select right {e('number')} words</td>
              <td>Extend selection right n words.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;<i className="bi bi-cursor-text"></i>Hello world. Talon is fun!&quot;</span></p>
                <p>The command &quot;select right 5 words&quot; will result in the following selection:</p>
                <p><span className={styles.sampleLine}>&quot;<span className={styles.lineSelection}>Hello world. Talon is</span> fun!&quot;</span></p>
                <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
              </td>
            </tr>
            <tr>
              <td>select left {e('number')} characters</td>
              <td>Extend selection left n characters.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;Hello world. Talon<i className="bi bi-cursor-text"></i> is fun!&quot;</span></p>
                <p>The command &quot;select left 3 characters&quot; will result in the following selection:</p>
                <p><span className={styles.sampleLine}>&quot;Hello world. Ta<span className={styles.lineSelection}>lon</span> is fun!&quot;</span></p>
                <p>Note that spaces count as characters.</p>
              </td>
            </tr>
            <tr>
              <td>select right {e('number')} characters</td>
              <td>Extend selection right n characters.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;Hello wor<i className="bi bi-cursor-text"></i>ld. Talon is fun!&quot;</span></p>
                <p>The command &quot;select right 5 characters&quot; will result in the following selection:</p>
                <p><span className={styles.sampleLine}>&quot;Hello wor<span className={styles.lineSelection}>ld. T</span>alon is fun!&quot;</span></p>
                <p>Note that spaces count as characters.</p>
              </td>
            </tr>
            <tr>
              <td>clear left {e('number')} words</td>
              <td>Extend selection left n words and delete.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;Hello world. Talon<i className="bi bi-cursor-text"></i> is fun!&quot;</span></p>
                <p>The command &quot;clear left 3 words&quot; will result in the following deletion:</p>
                <p><span className={styles.sampleLine}>&quot;Hello Talon is fun!&quot;</span></p>
                <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
              </td>
            </tr>
            <tr>
              <td>clear right {e('number')} words</td>
              <td>Extend selection right n words and delete.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;<i className="bi bi-cursor-text"></i>Hello world. Talon is fun!&quot;</span></p>
                <p>The command &quot;select right 5 words&quot; will result in the following deletion:</p>
                <p><span className={styles.sampleLine}>&quot;fun!&quot;</span></p>
                <p>Note that the period (or any punctuation such as a comma, question mark, etc.) counts as a word.</p>
              </td>
            </tr>
            <tr>
              <td>clear left {e('number')} characters</td>
              <td>Extend selection left n characters and delete.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;Hello world. Talon<i className="bi bi-cursor-text"></i> is fun!&quot;</span></p>
                <p>The command &quot;clear left 3 characters&quot; will result in the following deletion:</p>
                <p><span className={styles.sampleLine}>&quot;Hello world. Ta is fun!&quot;</span></p>
                <p>Note that spaces count as characters.</p>
              </td>
            </tr>
            <tr>
              <td>clear right {e('number')} characters</td>
              <td>Extend selection right n characters and delete.</td>
              <td>
                <p>Given the line: <span className={styles.sampleLine}>&quot;Hello wor<i className="bi bi-cursor-text"></i>ld. Talon is fun!&quot;</span></p>
                <p>The command &quot;clear right 5 characters&quot; will result in the following deletion:</p>
                <p><span className={styles.sampleLine}>&quot;Hello woralon is fun!&quot;</span></p>
                <p>Note that spaces count as characters.</p>
              </td>
            </tr>
            <tr>
              <td>scratch that</td>
              <td>Clears the last phrase.</td>
              <td>A phrase is the last group of spoken words without a pause. Saying &quot;Hello world&quot;, followed by a pause, followed by &quot;scratch that&quot; will delete the &quot;hello world&quot; phrase.</td>
            </tr>
            <tr>
              <td>scratch selection</td>
              <td>Delete selection.</td>
              <td></td>
            </tr>
            <tr>
              <td>select that</td>
              <td>Selects the last phrase.</td>
              <td>A phrase is the last group of spoken words without a pause. Saying &quot;Hello world&quot;, followed by a pause, followed by &quot;select that&quot; will select the &quot;hello world&quot; phrase.</td>
            </tr>
            <tr>
              <td>spell that {e('letters')}</td>
              <td>Dictate individual letters with normal formatting.</td>
              <td>
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr><td>spell that h-e-l-l-o</td><td>hello</td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>spell that {e('formatters')} {e('letters')}</td>
              <td>Dictate individual letters with specified formatting.</td>
              <td>
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr><td>spell that all caps h-e-l-l-o</td><td>HELLO</td></tr>
                    <tr><td>spell that all caps dubstring h-e-l-l-o</td><td>&quot;HELLO&quot;</td></tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>escape {e('user text')}</td>
              <td>Inserts dictated text with escaping any dictation commands.</td>
              <td>&quot;hello world period talon is fun exclamation mark&quot; will be written as &quot; hello world period talon is fun exclamation mark&quot;.<br />Note that the punctuation is written out.</td>
            </tr>
          </tbody>
        </table>

        <br />
        <h4 className="mt-4">Dictation Mode Keywords</h4>
        <div className="row">
          <h5 className="mt-1">Punctuation</h5>
          <p>Words for inserting punctuation while in dictation mode.</p>
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr><th>Voice Command</th><th>Punctuation</th></tr>
              </thead>
              <tbody>
                <tr><td>period, full stop</td><td>.</td></tr>
                <tr><td>question mark</td><td>?</td></tr>
                <tr><td>exclamation mark, exclamation point</td><td>!</td></tr>
                <tr><td>comma</td><td>,</td></tr>
                <tr><td>semicolon</td><td>;</td></tr>
                <tr><td>colon</td><td>:</td></tr>
                <tr><td>grave, backtick</td><td>`</td></tr>
                <tr><td>hyphen</td><td>-</td></tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr><th>Voice Command</th><th>Punctuation</th></tr>
              </thead>
              <tbody>
                <tr><td>forward slash</td><td>/</td></tr>
                <tr><td>asterisk</td><td>*</td></tr>
                <tr><td>hash sign, number sign</td><td>#</td></tr>
                <tr><td>percent sign</td><td>%</td></tr>
                <tr><td>at sign</td><td>@</td></tr>
                <tr><td>and sign, ampersand</td><td>&amp;</td></tr>
                <tr><td>dollar sign</td><td>$</td></tr>
                <tr><td>left paren, L paren</td><td>(</td></tr>
                <tr><td>right paren, R paren</td><td>)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h5 className="mt-1">Formatters</h5>
            <p>Commands that can be used to apply formatting to phrases in dictation mode.</p>
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr><th>Voice Command</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>all cap</td><td>capitalize all words</td></tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <h5 className="mt-1">Prose</h5>
            <p>Commands that can be used for formatting prose in dictation mode.</p>
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr><th>Voice Command</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>spacebar</td><td>Type a space.</td></tr>
                <tr><td>new line</td><td>Create a new line.</td></tr>
                <tr><td>new paragraph</td><td>Create two new lines.</td></tr>
                <tr><td>open quote</td><td>&ldquo;</td></tr>
                <tr><td>close quote</td><td>&rdquo;</td></tr>
                <tr><td>smiley</td><td>:-)</td></tr>
                <tr><td>frowny</td><td>:-(</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
