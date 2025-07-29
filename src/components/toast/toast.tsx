import type { PropsWithChildren, ReactElement } from 'react';
import styles from './toast.module.scss';

export const Toast = ({ children }: PropsWithChildren): ReactElement => {
  return <div className={styles.toast}>{children}</div>;
};
