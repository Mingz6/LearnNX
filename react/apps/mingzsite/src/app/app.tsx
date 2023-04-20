// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { SharedUi } from '@learnnx/shared-ui';

import NxWelcome from './nx-welcome';

export function App() {
  // Trigger yml file web2

  return (
    <>
      <NxWelcome title="mingzsite" />
      <p>Hello world</p>
      <SharedUi />

      <div />
    </>
  );
}

export default App;
