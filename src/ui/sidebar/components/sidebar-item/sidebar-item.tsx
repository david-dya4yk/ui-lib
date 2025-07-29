import { useState } from 'react';
import styles from './sidebar-item.module.scss';
import { DynamicIcon } from 'lucide-react/dynamic';
import cn from 'classnames';
import type { SidebarItemType } from '../../types/sidebar-type.ts';

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children;

  return (
    <div className={styles.item}>
      <button
        onClick={() => hasChildren && setIsOpen(prev => !prev)}
        className={styles.item__button}
      >
        <span>{item.label}</span>

        {hasChildren && (
          <DynamicIcon
            className={cn(styles.item__icon, { [styles.active]: isOpen })}
            name={'chevron-down'}
            size={18}
          />
        )}
      </button>

      {hasChildren && isOpen && (
        <div className={styles.children}>
          {item.children?.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
