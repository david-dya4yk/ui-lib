import { type ReactElement, useState } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import styles from './sidebar-menu.module.scss';
import cn from 'classnames';
import { SidebarWrapper } from './sidebar-wrapper/sidebar-wrapper.tsx';
import { SidebarItem } from './sidebar-item/sidebar-item.tsx';
import { useOutsideClick } from '../hook/use-click-outside.ts';
import type { SidebarItemType } from '../types/sidebar-type.ts';

export const sidebarData: SidebarItemType[] = [
  {
    label: 'item 1',
  },
  {
    label: 'item 2',
    children: [
      {
        label: 'item 1',
      },
      {
        label: 'item 2',
      },
    ],
  },
  {
    label: 'item 3',
  },
];

export const SidebarMenu = (): ReactElement => {
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

        <SidebarWrapper>
          {sidebarData.map(item => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </SidebarWrapper>
      </div>
    </div>
  );
};
