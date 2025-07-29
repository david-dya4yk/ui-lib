export type VariantType = 'default' | 'warning' | 'success'

export interface Toast {
  id: string
  message: string
  variant: VariantType
  shouldClose: boolean
}

export interface ToastContextType {
  addToast: (toast: Toast) => void
  removeToast: (id: string) => void
}


