import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof SideBar> = {
  title: 'Widgets/SideBar',
  component: SideBar,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

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
