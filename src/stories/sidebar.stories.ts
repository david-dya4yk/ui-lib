import { Sidebar } from '../components/sidebar/sidebar.tsx';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type {SidebarItemProps} from "../components/sidebar/sidebar-item/sidebar-item.tsx";

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const exampleData: SidebarItemProps[] = [
  {
    label: 'item 1',
  },
  {
    label: 'item 2',
    items: [
      {
        label: 'item 1',
      },
      {
        label: 'item 2',
      },
    ],
  },
  {
    label: 'item 3',
  },
];

export const Default: Story = {
  args: {
    sidebarList: exampleData,
  },
};