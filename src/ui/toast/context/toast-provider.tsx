import { type PropsWithChildren, type ReactElement, useState } from 'react';
import { ToastContext } from './toast-context.tsx';
import { ToastWrapper } from '../components/toast-wrapper.tsx';
import { ToastItem } from '../components/toast-item.tsx';
import type { Toast } from '../types/toast-type.ts';

export const ToastProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Toast) => {
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastWrapper>
        {toasts.map(toast => (
          <ToastItem
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
            shouldClose={toast.shouldClose}
          />
        ))}
      </ToastWrapper>
    </ToastContext.Provider>
  );
};
