import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage';
import { Theme } from 'app/providers/theme';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider initialState={{ counter: { value: 9 } }}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <StoreProvider initialState={{ counter: { value: 9 } }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};
