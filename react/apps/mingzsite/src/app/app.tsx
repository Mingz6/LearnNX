// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { SharedUi } from '@learnnx/shared-ui';

import NxWelcome from './nx-welcome';

export function App() {

  return (
    <>
      <NxWelcome title="mingzsite" />
      <SharedUi />

      <div />
    </>
  );
}

export default App;
