import GeneralCommands from './GeneralCommands'
import KeyboardKeyCommands from './KeyboardKeyCommands'
import DictationCommands from './DictationCommands'
import MouseCommands from './MouseCommands'
import ManageAppWindowCommands from './ManageAppWindowCommands'
import BrowserCommands from './BrowserCommands'
import styles from './CheatSheet.module.scss'

export default function CheatSheet() {
  return (
    <>
      <h1 className={`text-center ${styles.header}`}>Talon Commands Cheatsheet</h1>
      <h5 className={`text-center ${styles.subheader}`}>
        This cheatsheet assumes you have installed the{' '}
        <a href="https://github.com/talonhub/community" target="_blank" rel="noreferrer">Community</a>
        {' '}script package with your talon setup.
      </h5>
      <GeneralCommands className="mb-5 mt-4" />
      <KeyboardKeyCommands className="mb-5" />
      <DictationCommands className="mb-5" />
      <MouseCommands className="mb-5" />
      <ManageAppWindowCommands className="mb-5" />
      <BrowserCommands className="mb-5" />
    </>
  )
}
