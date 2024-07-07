import type { Meta, StoryObj } from '@storybook/react';
import AppInput from './AppInput';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof AppInput> = {
  title: 'Shared/AppInput',
  component: AppInput,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof AppInput>;

export const Ligth: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const LigthFocused: Story = {
  args: {
    autoFocus: true,
  },
};

export const DarkFocused: Story = {
  args: {
    autoFocus: true,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
