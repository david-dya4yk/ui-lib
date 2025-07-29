import { type ReactElement, useState } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import styles from './sidebar.module.scss';
import cn from 'classnames';
import {SidebarItem, type SidebarItemProps} from './sidebar-item/sidebar-item.tsx';
import { useOutsideClick } from '../../hooks/use-click-outside.ts';

interface SidebarProps {
  sidebarList: SidebarItemProps[];
}



export const Sidebar = ({sidebarList} : SidebarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  return (
    <div
      ref={ref}
      className={cn(styles.sidebar, { [styles.sidebar__open]: isOpen })}
    >
      <div className={styles.sidebar__inner}>
        <button
          className={styles.sidebar__button}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <DynamicIcon name={'menu'} size={25} />
        </button>

        <nav className={styles.nav}>
          <ul className={styles.nav__inner}>
            {sidebarList.map(item => (
              <SidebarItem key={item.label} label={item.label} items={item.items} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
