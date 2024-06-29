import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/Not Found',
  component: NotFoundPage,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

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
