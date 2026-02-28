import talonService from '../../../services/talonService';
import styles from './ManageAppWindowCommands.module.scss';

export default function ManageAppWindowCommands() {
  const e = talonService.encloseInAngles;

  return (
    <div className={`m-3 card ${styles.cardBorder}`}>
      <h2 className={`card-header ${styles.cardHeader}`}>Manage Application Windows</h2>
      <div className="card-body">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className={styles.width20}>Voice Command</th>
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
                Chrome, for example, it will simply bring up an options menu with &quot;minimize&quot; being one of the
                choices.
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
              <td>focus {e('running application')}</td>
              <td>
                Switch focus to the specified application.
                <br />
                Example: &quot;focus Chrome&quot; will switch focus to the Google Chrome browser. &quot;focus
                explorer&quot; will change focus to the Windows file explorer.
              </td>
            </tr>
            <tr>
              <td>launch application</td>
              <td>
                Launch a new application by path (all OSes), or AppUserModel-ID path on Windows. Example on Windows:
                &quot;launch explorer&quot; will start up a new file explorer window.
              </td>
            </tr>
            <tr>
              <td>snap {e('window snap position')}</td>
              <td>
                Move the active window to a specific{' '}
                <button
                  className={`btn btn-link ${styles.plainBtn}`}
                  onClick={() => talonService.scrollToId('snap-positions')}
                >
                  snap position
                </button>{' '}
                on the screen.
              </td>
            </tr>
            <tr>
              <td>snap screen {e('number')}</td>
              <td>
                Move the active application over to the screen specified by number. Only useful if using multiple
                monitors.
              </td>
            </tr>
            <tr>
              <td>
                snap {e('running application')} {e('window snap position')}
              </td>
              <td>
                Move the specified application to a specific{' '}
                <button
                  className={`btn btn-link ${styles.plainBtn}`}
                  onClick={() => talonService.scrollToId('snap-positions')}
                >
                  snap position
                </button>{' '}
                on the screen.
                <br />
                Example: &quot;snap explorer left&quot; will snap the file explorer application to the left side of the
                screen.
              </td>
            </tr>
            <tr>
              <td>
                snap {e('running application')} {e('number')}
              </td>
              <td>
                Move the specified application over to the screen specified by number.
                <br />
                Example: &quot;snap explorer 1&quot; will move the file explorer application to the first monitor (if
                not already there).
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="row">
          <h5 id="snap-positions" className="mt-1">
            Snap Positions
          </h5>
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className={styles.width20}>Voice Command</th>
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
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className={styles.width20}>Voice Command</th>
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
  );
}
