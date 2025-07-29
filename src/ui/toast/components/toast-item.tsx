import type { ReactElement } from 'react';
import styles from './toast-item.module.scss';
import cn from 'classnames';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import type { VariantType } from '../types/toast-type';

interface ToastItemProps {
  shouldClose?: boolean;
  variant: VariantType;
  message: string;
  onClose?: () => void;
}

const iconName: Record<VariantType, IconName> = {
  default: 'thumbs-up',
  warning: 'circle-alert',
  success: 'badge-check',
};

export const ToastItem = ({
  variant,
  message,
  shouldClose,
  onClose,
}: ToastItemProps): ReactElement => {
  return (
    <div className={cn(styles.item, styles[`item__${variant}`])}>
      <DynamicIcon
        name={iconName[variant]}
        size={15}
        className={cn(styles[`item-${variant}`])}
      />

      <p>{message}</p>

      {shouldClose && (
        <button className={styles.item__close} onClick={onClose}>
          <DynamicIcon name={'x'} size={10} />
        </button>
      )}
    </div>
  );
};
