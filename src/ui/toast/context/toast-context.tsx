import type { ToastContextType} from "../types/toast-type.ts";
import {createContext} from "react";

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

