export type VariantType = 'default' | 'warning' | 'success';

export interface ToastInterface {
  id: string;
  message: string;
  variant: VariantType;
  shouldClose: boolean;
}

