import type { Meta, StoryObj } from '@storybook/react';
import AppButton, { ThemeButton } from './AppButton';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof AppButton> = {
  title: 'Shared/Button',
  component: AppButton,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Clear: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.CLEAR,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const Outline: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const Rounded: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.ROUNDED,
  },
};

export const RoundedDark: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.ROUNDED,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.OUTLINE,
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'AppButton text',
    theme: ThemeButton.OUTLINE,
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
