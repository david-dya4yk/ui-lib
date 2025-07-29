import { useState } from 'react';
import styles from './sidebar-item.module.scss';
import { DynamicIcon } from 'lucide-react/dynamic';
import cn from 'classnames';

export interface SidebarItemProps {
  label: string;
  items?: SidebarItemProps[];
}

export const SidebarItem = ({ label, items }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.item}>
      <button
        onClick={() => items && setIsOpen(prev => !prev)}
        className={styles.item__button}
      >
        <span>{label}</span>

        {items && (
          <DynamicIcon
            className={cn(styles.item__icon, { [styles.active]: isOpen })}
            name={'chevron-down'}
            size={18}
          />
        )}
      </button>

      {items && isOpen && (
        <ul>
          {items?.map(({label, items}, index) => (
            <SidebarItem key={index} label={label} items={items} />
          ))}
        </ul>
      )}
    </li>
  );
};
