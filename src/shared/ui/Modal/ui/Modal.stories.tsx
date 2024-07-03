import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: '123',
  },
  decorators: [(Story) => <Story />],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: '123',
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
