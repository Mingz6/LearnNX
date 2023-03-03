import styles from './ActionBar.scss';

/* eslint-disable-next-line */
export interface ActionBarProps {}

export function ActionBar(props: ActionBarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ActionBar!</h1>
    </div>
  );
}

export default ActionBar;
