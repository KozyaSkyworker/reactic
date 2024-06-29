import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof PageError> = {
  title: 'Page Error',
  component: PageError,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
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
