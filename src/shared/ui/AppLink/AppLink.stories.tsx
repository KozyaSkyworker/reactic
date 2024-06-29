import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Clear: Story = {
  args: {
    children: 'AppLink text',
    theme: AppLinkTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'AppLink text',
    theme: AppLinkTheme.CLEAR,
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
    children: 'AppLink text',
    theme: AppLinkTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'AppLink text',
    theme: AppLinkTheme.OUTLINE,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

export const Navigation: Story = {
  args: {
    children: 'AppLink text',
    theme: AppLinkTheme.NAVIGATION,
  },
};

export const NavigationDark: Story = {
  args: {
    children: 'AppLink text',
    theme: AppLinkTheme.NAVIGATION,
  },
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};
