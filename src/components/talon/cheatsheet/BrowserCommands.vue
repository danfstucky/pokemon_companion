<template>
  <div class="m-3 card card-border">
    <h2 class="card-header">Manage Web Browsers</h2>
    <p class="p-3 helper-text">
      Many of the browser commands rely on the
      <a href="https://github.com/david-tejada/rango" target="”_blank”">Rango</a>
      script package. If you have not already, install it with your talon setup and add the browser extension.
    </p>
    <div class="card-body">
      <h5>Hints</h5>
      <p>
        Hints are letter markers that appear next to interactable elements on a webpage. For example, a button may have
        the hints <code>ac</code> appear next to it. You can use these hints to interact with the element: click, hover,
        copy its text content, etc. Hints will only show up if the Rango browser extension is enabled.
      </p>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>refresh {{ talonService.encloseInAngles('hints') }}</td>
            <td>Refreshes the hints without needing to reload the page.</td>
          </tr>
          <tr>
            <td>hints toggle</td>
            <td>Toggles the hints on and off.</td>
          </tr>
          <tr>
            <td>
              hints {{ talonService.encloseInAngles('on, off') }}
              {{ talonService.encloseInAngles('now, page, host, tab') }}
            </td>
            <td>
              Turns on/off the hints with an optional priority level.
              <table class="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td>now</td>
                    <td>
                      This is the highest level of priority. The hints will be toggled on/off for the current page until
                      the page is reloaded or the user navigates to another page.
                    </td>
                  </tr>
                  <tr>
                    <td>page</td>
                    <td>The hints will always be on/off for the current page.</td>
                  </tr>
                  <tr>
                    <td>host</td>
                    <td>The hints will always be on/off for the current host.</td>
                  </tr>
                  <tr>
                    <td>tab</td>
                    <td>The hints will always be on/off for the current tab.</td>
                  </tr>
                  <tr>
                    <td>global</td>
                    <td>
                      The hints will be on/off globally. This is the default priority level so if we just say
                      <code>hints on</code> the hints are toggled globally in all tabs and in all windows.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>{{ talonService.encloseInAngles('target') }}, click {{ talonService.encloseInAngles('target') }}</td>
            <td>
              <p><b>Click:</b></p>
              <p>
                Clicks on the element denoted by the hints (target). For example, saying "air cap" will click on the
                element marked by <code>ac</code>. If <code>rango_direct_clicking</code> is disabled, then you must
                precede all hints with "click". For example, "click air cap". This is useful for avoiding accidental
                clicks. This setting exists in <code>rango.talon</code>.
              </p>
            </td>
          </tr>
          <tr>
            <td>hover {{ talonService.encloseInAngles('target') }}</td>
            <td>
              <p><b>Hover:</b></p>
              <p>
                Dispatches a hover event to the selected element. Sometimes this command doesn't have a visible result
                if the current page doesn't have a hover event handler for this element.
              </p>
            </td>
          </tr>
          <tr>
            <td>dismiss</td>
            <td>
              Clears any previously hovered element. If there is a focused element it would also remove the focus from
              that element.
            </td>
          </tr>
          <tr>
            <td>focus {{ talonService.encloseInAngles('target') }}</td>
            <td>Focus the target element.</td>
          </tr>
          <tr>
            <td>flick {{ talonService.encloseInAngles('target') }}</td>
            <td>
              Focus the target element and then press Enter. This is usesful because clicking with Rango might fail on
              some elements. For example, clicking on elements that copy things to the clipboard almost always fails
              because the browser thinks there was no user interaction and disallows it. This command may work in those
              cases.
            </td>
          </tr>
          <tr>
            <td>blank {{ talonService.encloseInAngles('target') }}</td>
            <td>
              Opens the link in a new tab. If you use multiple targets all the links will open in new tabs and the first
              one will receive focus.
            </td>
          </tr>
          <tr>
            <td>stash {{ talonService.encloseInAngles('target') }}</td>
            <td>
              Opens the link in a new tab without focusing that tab. When using direct clicking and multiple targets you
              can omit the word stash. For example, saying "air bat and air drum" will open the links with the hints
              <code>ah</code> and <code>ad</code> in a new tab without stealing focus from the current one.
            </td>
          </tr>
          <tr>
            <td>go root</td>
            <td>Navigate to the root of the current page.</td>
          </tr>
          <tr>
            <td>page next</td>
            <td>
              Navigate to the next page in paginated pages. Does nothing if there is no pagiation on the active page.
            </td>
          </tr>
          <tr>
            <td>page last</td>
            <td>
              Navigate to the previous page in paginated pages. Does nothing if there is no pagiation on the active
              page.
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <h5>Form Fields</h5>
      <p>Form fields are any field with editable content.</p>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>copy text {{ talonService.encloseInAngles('target') }}</td>
            <td>Copies the text content of the element to the clipboard.</td>
          </tr>
          <tr>
            <td>paste to {{ talonService.encloseInAngles('target') }}</td>
            <td>Paste the contents of the clipboard to an input field.</td>
          </tr>
          <tr>
            <td>insert {{ talonService.encloseInAngles('text') }} to {{ talonService.encloseInAngles('target') }}</td>
            <td>
              Inserts text to an input field. It first clicks the element so it will work in places were you first have
              to click a button that opens the field, like a search button.
            </td>
          </tr>
          <tr>
            <td>enter {{ talonService.encloseInAngles('text') }} to {{ talonService.encloseInAngles('target') }}</td>
            <td>Same as the previous command but it also presses the enter key at the end to submit.</td>
          </tr>
          <tr>
            <td>change {{ talonService.encloseInAngles('target') }}</td>
            <td>Focus an input field and remove its contents.</td>
          </tr>
          <tr>
            <td>pre {{ talonService.encloseInAngles('target') }}</td>
            <td>Places the cursor at the start of an input field.</td>
          </tr>
          <tr>
            <td>post {{ talonService.encloseInAngles('target') }}</td>
            <td>Places the cursor at the end of an input field.</td>
          </tr>
        </tbody>
      </table>

      <br />
      <h5>Copying Data</h5>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>copy text {{ talonService.encloseInAngles('target') }}</td>
            <td>Copies the text content of the element to the clipboard.</td>
          </tr>
          <tr>
            <td>copy {{ talonService.encloseInAngles('target') }}</td>
            <td>If the element is a link it copies the url to the clipboard.</td>
          </tr>
          <tr>
            <td>copy mark {{ talonService.encloseInAngles('target') }}</td>
            <td>If the element is a link it copies the link in markdown format to the clipboard.</td>
          </tr>
          <tr>
            <td>copy page (address | host name | host | origin | path | port | protocol)</td>
            <td>Copies the information relative to the current URL to the clipboard.</td>
          </tr>
          <tr>
            <td>copy mark address</td>
            <td>Copies the current URL in markdown format to the clipboard.</td>
          </tr>
        </tbody>
      </table>

      <br />
      <h5>Scrolling</h5>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>upper/downer</td>
            <td>Scroll up/down.</td>
          </tr>
          <tr>
            <td>upper/downer {{ talonService.encloseInAngles('number') }}</td>
            <td>Scroll up/down a certain number of pages.</td>
          </tr>
          <tr>
            <td>upper/downer all</td>
            <td>Scroll all the way to the top/bottom.</td>
          </tr>
          <tr>
            <td>tiny up/down</td>
            <td>Scroll the page up/down a factor of 0.2.</td>
          </tr>
          <tr>
            <td>scroll left/right</td>
            <td>Scroll to the left/right.</td>
          </tr>
          <tr>
            <td>scroll left/right all</td>
            <td>Scroll all the way to the left/right.</td>
          </tr>
          <tr>
            <td>tiny left/right</td>
            <td>Scroll to the left/right a factor of 0.2.</td>
          </tr>
          <tr>
            <td>crown {{ talonService.encloseInAngles('target') }}</td>
            <td>
              Scrolls the element with the hint to the top of the page/container. It tries to take into account any
              sticky/fixed headers and not scroll past that.
            </td>
          </tr>
          <tr>
            <td>center {{ talonService.encloseInAngles('target') }}</td>
            <td>Scrolls the element to the center of the page/container.</td>
          </tr>
          <tr>
            <td>bottom {{ talonService.encloseInAngles('target') }}</td>
            <td>Scrolls the element to the bottom of the page/container.</td>
          </tr>
          <tr>
            <td>scroll save {{ talonService.encloseInAngles('word') }}</td>
            <td>Store the current scroll position and assign it to the specified word.</td>
          </tr>
          <tr>
            <td>scroll to {{ talonService.encloseInAngles('word') }}</td>
            <td>
              Scroll to the saved position. This uses fuzzy search, so a command like "scroll to object" will also match
              the saved scroll position "objects" if no scroll position "object" was stored.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Sometimes we want to scroll a container that is not the main page or an aside. An example for that could be a
        popup with links. For that we need to refer to one of the hints inside said container and use one of the
        following commands:
      </p>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>upper/downer {{ talonService.encloseInAngles('target') }}</td>
            <td>Scroll up/down the container with the hinted element.</td>
          </tr>
          <tr>
            <td>tiny up/down {{ talonService.encloseInAngles('target') }}</td>
            <td>Scroll up/down the container with the hinted element a factor of 0.2.</td>
          </tr>
          <tr>
            <td>scroll left/right {{ talonService.encloseInAngles('target') }}</td>
            <td>Scroll the container with the hinted element to the left/right.</td>
          </tr>
          <tr>
            <td>tiny left/right {{ talonService.encloseInAngles('target') }}</td>
            <td>Scroll the container with the hinted element to the left/right a factor of 0.2.</td>
          </tr>
        </tbody>
      </table>

      <br />
      <h5>Tab Management</h5>
      <table class="table table-striped table-hover table-bordered">
        <thead class="thead-dark">
          <tr>
            <th class="width-20">Voice Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tab open, tab new</td>
            <td>Creates a new tab.</td>
          </tr>
          <tr>
            <td>tab close</td>
            <td>Closes the active tab.</td>
          </tr>
          <tr>
            <td>tab reopen, tab restore</td>
            <td>Reopens the last closed tab.</td>
          </tr>
          <tr>
            <td>tab clone</td>
            <td>Duplicates the current tab.</td>
          </tr>
          <tr>
            <td>tab next</td>
            <td>Focues the next tab relative to the active one.</td>
          </tr>
          <tr>
            <td>tab last</td>
            <td>Focues the previous tab relative to the active one.</td>
          </tr>
          <tr>
            <td>tab back</td>
            <td>Switches to the previously focused tab.</td>
          </tr>
          <tr>
            <td>tab split</td>
            <td>Move the current tab to a new window.</td>
          </tr>
          <tr>
            <td>go tab {{ talonService.encloseInAngles('number') }}</td>
            <td>Focues the tab specified by the number. For example, "go tab 3" will focus the 3rd tab.</td>
          </tr>
          <tr>
            <td>go tab final</td>
            <td>Focuses the last tab.</td>
          </tr>
          <tr>
            <td>tab hunt {{ talonService.encloseInAngles('text') }}</td>
            <td>
              Focuses the tab that matches the text in its URL or title. It uses fuzzy search and focuses the tab that
              better matches the text.
            </td>
          </tr>
          <tr>
            <td>tab ahead</td>
            <td>If there are multiple results after using tab hunt, it focuses the next tab (by match score).</td>
          </tr>
          <tr>
            <td>tab behind</td>
            <td>If there are multiple results after using tab hunt, it focuses the previous tab (by match score).</td>
          </tr>
          <tr>
            <td>visit {{ talonService.encloseInAngles('website') }}</td>
            <td>
              This uses the websites defined in websites.csv within talonhub/community. It will focus the first tab
              matching the website or open it in a new tab if there's no match.
            </td>
          </tr>
          <tr>
            <td>close tab other</td>
            <td>Closes all the tabs in the window except the current one.</td>
          </tr>
          <tr>
            <td>close tab left</td>
            <td>Closes all the tabs in the window to the left of the current one.</td>
          </tr>
          <tr>
            <td>close tab right</td>
            <td>Closes all the tabs in the window to the right of the current one.</td>
          </tr>
          <tr>
            <td>tab close first {{ talonService.encloseInAngles('number') }}</td>
            <td>Closes the amount of tabs specified (or one if no number is given) starting from the leftmost tab.</td>
          </tr>
          <tr>
            <td>tab close final {{ talonService.encloseInAngles('number') }}</td>
            <td>Closes the amount of tabs specified (or one if no number is given) starting from the rightmost tab.</td>
          </tr>
          <tr>
            <td>tab close previous {{ talonService.encloseInAngles('number') }}</td>
            <td>Closes the amount of tabs specified (or one if no number is given) to the left of the current tab.</td>
          </tr>
          <tr>
            <td>tab close next {{ talonService.encloseInAngles('number') }}</td>
            <td>Closes the amount of tabs specified (or one if no number is given) to the right of the current tab.</td>
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
  border-color: rgb(252, 189, 101);
}
.width-20 {
  width: 20%;
}
.helper-text {
  background: #e9ecef;
}
</style>
