import talonService from '../../../services/talonService'
import styles from './MouseCommands.module.scss'

export default function MouseCommands() {
  const e = talonService.encloseInAngles

  return (
    <div className={`m-3 card ${styles.cardBorder}`}>
      <h2 className={`card-header ${styles.cardHeader}`}>Mouse Control</h2>
      <div className="card-body">
        <h5 className="mt-1">Mouse Grid</h5>
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className={styles.width20}>Voice Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mouse grid</td>
              <td>
                <p>Display the mouse grid. Select a grid number by simply saying the number to move the mouse to that zone and bring up a 2nd grid limited to that zone for further positioning.</p>
                <p>Note that you can modify the <code>user.grids_put_one_bottom_left</code> setting in <code>settings.talon</code> so that grid 1 is in the top left instead of bottom left.</p>
              </td>
            </tr>
            <tr>
              <td>win grid</td>
              <td>Display the mouse grid and place the grid on the currently active window.</td>
            </tr>
            <tr>
              <td>grid {e('number')}</td>
              <td>Display the mouse grid and position the grid on the screen area specified by number.</td>
            </tr>
            <tr>
              <td>grid screen {e('number')}</td>
              <td>Display the mouse grid on the monitor specified by <code>number</code>. Only useful if using multiple monitors.</td>
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

        <br />
        <div className="row">
          <h5 className="mt-1">Mouse Actions</h5>
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className={styles.width20}>Voice Command</th>
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
                  <td>{e('modifier key')} touch</td>
                  <td>
                    Press one or more{' '}
                    <button className={`btn btn-link ${styles.plainBtn}`} onClick={() => talonService.scrollToId('modifier-keys')}>
                      modifier keys
                    </button>
                    {' '}by name and left click mouse.
                  </td>
                </tr>
                <tr>
                  <td>{e('modifier key')} righty</td>
                  <td>
                    Press one or more{' '}
                    <button className={`btn btn-link ${styles.plainBtn}`} onClick={() => talonService.scrollToId('modifier-keys')}>
                      modifier keys
                    </button>
                    {' '}by name and right click mouse.
                  </td>
                </tr>
                <tr><td>dub click, duke</td><td>Double click left mouse button.</td></tr>
                <tr><td>left drag, drag</td><td>Press and hold left mouse button.</td></tr>
                <tr><td>right drag, righty drag</td><td>Press and hold right mouse button.</td></tr>
                <tr><td>end drag, drag end</td><td>Releases any held mouse buttons.</td></tr>
                <tr><td>copy mouse position</td><td>Copy the current mouse position coordinates.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className={styles.width20}>Voice Command</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>wheel {e('down, up')}</td><td>Scroll mouse down or up.</td></tr>
                <tr><td>wheel tiny {e('down, up')}</td><td>Scroll mouse down or up a very small amount.</td></tr>
                <tr><td>wheel {e('down, up')} here</td><td>Move mouse cursor to center of currently active window. Scroll mouse down or up.</td></tr>
                <tr><td>wheel tiny {e('down, up')} here</td><td>Move mouse cursor to center of currently active window. Scroll mouse down or up a very small amount.</td></tr>
                <tr><td>wheel {e('downer, upper')}</td><td>Continuously croll mouse down or up.</td></tr>
                <tr><td>wheel stop</td><td>Stop scrolling.</td></tr>
                <tr><td>wheel stop here</td><td>Move mouse cursor to center of currently active window. Stop scrolling.</td></tr>
                <tr><td>wheel {e('left, right')}</td><td>Scroll mouse left or right.</td></tr>
                <tr><td>wheel tiny {e('left, right')}</td><td>Scroll mouse left or right a very small amount.</td></tr>
                <tr><td>wheel {e('left, right')} here</td><td>Move mouse cursor to center of currently active window. Scroll mouse left or right.</td></tr>
                <tr><td>wheel tiny {e('left, right')} here</td><td>Move mouse cursor to center of currently active window. Scroll mouse left or right a very small amount.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
