import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/theme';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/Profile',
  component: ProfilePage,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider initialState={{ profile: { isLoading: false, readonly: true } }}>
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
        <StoreProvider initialState={{ profile: { isLoading: false, readonly: true } }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};
