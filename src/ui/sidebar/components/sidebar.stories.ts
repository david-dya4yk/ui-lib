import { SidebarMenu } from './sidebar-menu';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof SidebarMenu> = {
  title: 'UI/Sidebar',
  component: SidebarMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {};
