import MouseScripts from './MouseScripts';
import styles from './CustomScripts.module.scss';

export default function CustomScripts() {
  return (
    <>
      <h1 className={`text-center ${styles.header}`}>Custom Scripts</h1>
      <h5 className={`text-center ${styles.subheader}`}>
        Some additional commands/modifications I added to talon. Custom scripts can be added to the{' '}
        <code>talon/user</code> directory.
      </h5>

      <div className="accordion" id="scripts-accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>General</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#scripts-accordion"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  All of the community package CSV files located within <code>community/settings/*</code> are
                  customizable. For example, to modify the default talon alphabet, update the <code>alphabet.csv</code>{' '}
                  file.
                </li>
                <li>
                  You can update any of the default talon settings by modifying the config options located in{' '}
                  <code>community/settings.talon</code>.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Mouse Movement</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#scripts-accordion"
          >
            <div className="accordion-body">
              <MouseScripts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
