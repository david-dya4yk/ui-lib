import { ToastItem } from '../components/toast/toast-item/toast-item.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '../components/toast/toast.tsx';

const meta: Meta<typeof ToastItem> = {
  title: 'UI/ToastItem',
  component: ToastItem,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Toast>
        <Story />
      </Toast>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ToastItem>;

export const ToastDefault: Story = {
  args: {
    message: 'Default Toast!',
    variant: 'default',
    shouldClose: true,
  },
};

export const ToastDefaultWithoutCloseButton: Story = {
  args: {
    message: 'Default Toast!',
    variant: 'default',
    shouldClose: false,
  },
};

export const ToastSuccess: Story = {
  args: {
    message: 'Success Toast!',
    variant: 'success',
    shouldClose: true,
  },
};

export const ToastWarning: Story = {
  args: {
    message: 'Warning Toast!',
    variant: 'warning',
    shouldClose: true,
  },
};
