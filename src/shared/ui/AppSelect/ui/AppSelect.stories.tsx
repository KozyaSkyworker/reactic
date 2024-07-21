import type { Meta, StoryObj } from '@storybook/react';
import { AppSelect } from './AppSelect';
import { Theme } from 'app/providers/theme';
import { text } from 'stream/consumers';

const meta: Meta<typeof AppSelect> = {
  title: 'Shared/AppSelect',
  component: AppSelect,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof AppSelect>;

export const Ligt: Story = {
  args: {
    options: [
      { value: '1', text: '2' },
      { value: '2', text: '2' },
    ],
  },
};

export const Dark: Story = {
  args: {
    options: [
      { value: '1', text: '1' },
      { value: '2', text: '2' },
    ],
  },
};
