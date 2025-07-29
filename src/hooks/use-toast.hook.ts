import { useContext } from 'react';
import type { ToastInterface } from '../components/toast/types/toast-interface.ts';
import { ToastContext } from '../components/toast/context/toast-context.tsx';

export const useToast = (timing: number = 4000) => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used inside ToastProvider');

  const { addToast, removeToast } = context;

  return ({ message, variant, shouldClose }: Omit<ToastInterface, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);

    addToast({ id, message, variant, shouldClose });

    if (shouldClose) {
      setTimeout(() => {
        removeToast(id);
      }, timing);
    }
  };
};
