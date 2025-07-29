import type { PropsWithChildren, ReactElement } from 'react';
import styles from './sidebar-wrapper.module.scss';

export const SidebarWrapper = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__inner}>{children}</ul>
    </nav>
  );
};
