import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './NavBar';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof NavBar> = {
  title: 'Widgets/NavBar',
  component: NavBar,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

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
