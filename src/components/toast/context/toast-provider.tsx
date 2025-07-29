import { type PropsWithChildren, type ReactElement, useState } from 'react';
import { ToastContext } from './toast-context.tsx';
import { Toast } from '../toast.tsx';
import { ToastItem } from '../toast-item/toast-item.tsx';
import type {ToastInterface} from "../types/toast-interface.ts";

export const ToastProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [toasts, setToasts] = useState<ToastInterface[]>([]);

  const addToast = (toast: ToastInterface) => {
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast>
        {toasts.map(toast => (
          <ToastItem
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
            shouldClose={toast.shouldClose}
          />
        ))}
      </Toast>
    </ToastContext.Provider>
  );
};
