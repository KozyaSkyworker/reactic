import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof AboutPage> = {
  title: 'Pages/About',
  component: AboutPage,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

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
