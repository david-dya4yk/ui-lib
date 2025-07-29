import type {ToastInterface} from '../types/toast-interface.ts';
import { createContext } from 'react';

interface ToastContextType {
  addToast: (toast: ToastInterface) => void;
  removeToast: (id: string) => void;
}


export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);
